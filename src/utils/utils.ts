const parseTag = (text: string): string => {
  return text.indexOf(">") !== text.length
    ? text.slice(0, text.indexOf(">") + 1) +
        parseText(
          text.slice(text.indexOf(">") + 1),
          text.slice(text.indexOf(">") + 1).indexOf("<")
        )
    : text;
};

export const parseText = (text: string, endIndex?: number): string => {
  return text.indexOf("<") !== -1
    ? endIndex
      ? parseToUpperCase(text.slice(0, endIndex)) +
        parseTag(text.slice(text.indexOf("<")))
      : parseTag(text)
    : parseToUpperCase(text);
};

const parseToUpperCase = (text: string) => {
  return text
    .split(" ")
    .map((word) => {
      return (word.match(/[a-zA-Z]/g) || [word]).join("").length > 6
        ? word.toUpperCase()
        : word;
    })
    .join(" ");
};
