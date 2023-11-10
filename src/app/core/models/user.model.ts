export interface User {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  webSiteURL: string;
}

export interface UserWithRole extends User {
  role: string;
}
