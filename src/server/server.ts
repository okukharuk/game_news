import * as dotenv from 'dotenv';
import express from 'express';
import { createProxyMiddleware, responseInterceptor } from 'http-proxy-middleware';
import path from 'path';

import { parseText } from '../utils/utils';

export const startServer = () => {
  const app = express();
  dotenv.config();
  const port = process.env.PORT || 8080;

  app.use(express.static(path.join(__dirname, "../../client/build")));

  app.use(
    "/api/page",
    createProxyMiddleware({
      target: "https://api.egw.news/",
      changeOrigin: true,
      pathRewrite: {
        [`^/api/page`]: "",
      },
      selfHandleResponse: true,
      onProxyRes: responseInterceptor(
        async (responseBuffer, proxyRes, req, res) => {
          if (
            proxyRes.headers["content-type"] ===
            "application/json; charset=utf-8"
          ) {
            let data = JSON.parse(responseBuffer.toString("utf8"));

            data.article
              ? (data.article.contentArr = data.article.contentArr.map(
                  (text: any) => {
                    return parseText(text).replace("/uploads", "/news/uploads");
                  }
                ))
              : null;

            data.article
              ? (data.article.title = parseText(data.article.title))
              : null;

            return JSON.stringify(data);
          }

          return responseBuffer;
        }
      ),
    })
  );

  app.use(
    "/api/news",
    createProxyMiddleware({
      target: "https://api.egw.news/",
      changeOrigin: true,
      pathRewrite: {
        [`^/api/news`]: "",
      },
    })
  );

  app.use(
    "/news",
    createProxyMiddleware({
      target: "https://egw.news/",
      changeOrigin: true,
      pathRewrite: {
        [`^/news`]: "",
      },
    })
  );

  app.listen(port, () => {
    console.log("Server started");
  });
};
