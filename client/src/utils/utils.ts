export const getFormattedOutput = (time: Number, type: "hour" | "minute") => {
  if (time == 1) return type == "hour" ? " Час Назад" : " Минуту назад";
  if (time >= 2 && time <= 4) {
    return type == "hour" ? " Часа назад" : " Минуты назад";
  }
  return type == "hour" ? " Часов назад" : " Минут назад";
};

export const getFormattedTime = (time: string) => {
  const date = new Date(time);
  const currentDate = new Date();
  const diff = currentDate.getTime() - date.getTime();

  const hoursAgo = Math.floor(diff / (60 * 60 * 1000));
  const minutesAgo = Math.floor(diff / (60 * 1000));

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return diff < 24 * 60 * 60 * 1000
    ? diff < 60 * 60 * 1000
      ? minutesAgo + getFormattedOutput(minutesAgo, "minute")
      : hoursAgo + getFormattedOutput(hoursAgo, "hour")
    : [year, month < 10 ? "0" + month : month, day < 10 ? "0" + day : day].join(
        "/"
      );
};
