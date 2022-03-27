import { format, parseISO, intervalToDuration } from "date-fns";
export const formatDate = (date) => format(parseISO(date), "dd MMM yyyy");
export const interval = (start, end) => {
  const inter = intervalToDuration({
    start,
    end,
  });
  console.log({ inter });
  let res = "";
  if (inter.years) {
    res += inter.years + " year";
  }
  if (inter.months) {
    res += " " + inter.months + " months";
  }
  if (inter.days) {
    res += " " + inter.days + " days";
  }
  return res ? res + " here" : "0 days here";
};
