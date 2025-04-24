export interface User {
  id: string;
  email: string;
  password: string;
  role: string;
}

export interface NewUserInterface {
  email: string;
  password: string;
}
