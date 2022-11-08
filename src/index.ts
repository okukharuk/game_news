import express from 'express';
import { createProxyMiddleware, responseInterceptor } from 'http-proxy-middleware';

const app = express();

const parseWord = (text: string): string => {
  if (text.includes("<")) {
    return parseWordWithTag(text);
  }
  return toUpperCase(text);
};

const toUpperCase = (word: string) => {
  return word.length > 6 ? word.toUpperCase() : word;
};

const parseWordWithTag = (word: string) => {
  const charArr = [...word];
  let start: undefined | number;
  let end: undefined | number;
  charArr.forEach((char: string, index) => {
    if (char == "<" && start == undefined) start = index;
    if (char == ">" && end == undefined) end = index;
  });

  if (start && end) {
    const returnArr = [];
    if (start != 0) {
      returnArr.push(parseWord(charArr.slice(0, start).join("")));
    }

    returnArr.push(charArr.slice(start, end + 1).join(""));

    if (end != charArr.length - 1) {
      returnArr.push(
        parseWord(charArr.slice(end + 1, charArr.length).join(""))
      );
    }
    return returnArr.join("");
  }

  return word;
};

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
          proxyRes.headers["content-type"] === "application/json; charset=utf-8"
        ) {
          let data = JSON.parse(responseBuffer.toString("utf8"));

          data.article.contentArr = data.article.contentArr.map((text: any) => {
            return text
              .split(" ")
              .map((word: string) => {
                return parseWord(word);
              })
              .join(" ");
          });

          data.article.title = parseWord(data.article.title);

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

app.listen(8080, () => {
  console.log("Server started");
});
