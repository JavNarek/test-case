export interface User {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  webSiteURL: string;
}

export interface UserWithRole extends User {
  role: string;
}
