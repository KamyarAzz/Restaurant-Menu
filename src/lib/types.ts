export type TMenuItem = {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
};

export type TSortKey = "all" | "breakfast" | "lunch" | "dinner" | "shakes";

export type FormData = {
  fullname: string;
  number: string;
  date: string;
  time: string;
};

export type Errors = {
  nameError: string;
  numberError: string;
  dateError: string;
  timeError: string;
};

export type TPerson = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type People = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: TPerson[];
};
