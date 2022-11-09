export interface ISelect {
  type: string;
  label: string;
}

export const SelectOptions: ISelect[] = [
  { type: "publishAtDesc", label: "От новых к старым" },
  { type: "publishAtAsc", label: "От старых к новым" },
  { type: "viewDesc", label: "Самые просматриваемые" },
  { type: "viewAsc", label: "Менее просматриваемые" },
];

export const defaultURL = "http://localhost:8080/news";
