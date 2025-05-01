export interface User {
  id: string;
  email: string;
  password: string;
  role: string;
}

export interface NewUserBody {
  email: string;
  password: string;
}
