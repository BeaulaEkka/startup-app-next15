// export function formatDate() {
//   return new Date(date:string).toLocaleDateString("en-nl", {
//     month: "long",
//     day: "numeric",
//     year: "numeric",
//   });
// }
export function formatDate(date: string | Date): string {
  const parsedDate = typeof date === "string" ? new Date(date) : date;
  if (isNaN(parsedDate.getTime())) {
    throw new Error("Invalid date format");
  }
  return parsedDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
