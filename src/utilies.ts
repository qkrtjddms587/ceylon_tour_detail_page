export const cls = (...classnames: string[]) => {
  return classnames.join(" ");
};

export const formatKrDate = (date: string) => {
  const dateParts = date.split("-");
  if (dateParts.length !== 3) {
    throw new Error("Invalid date format. Expected format: YYYY-MM-DD");
  }
  const year = dateParts[0];
  const month = +dateParts[1];
  const day = +dateParts[2];
  return `${year}년 ${month}월 ${day}일`;
};
