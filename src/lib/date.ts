import moment from "moment";

export function formatDate(iso: string) {
  return moment(new Date(iso)).format("DD/MM/YYYY");
}
