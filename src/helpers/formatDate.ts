type monthFormat = "long" | "2-digit";

const formatDate = (date: string, monthFormat: monthFormat): string => {
  return new Date(date).toLocaleDateString("pt-br", {
    day: "2-digit",
    month: monthFormat,
    year: "numeric",
  });
};

export default formatDate;
