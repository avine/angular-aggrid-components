export interface User {
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
  disabled: boolean;
}

export enum Role {
  Admin = 'admin',
  Authenticated = 'authenticated',
  Guest = 'guest'
}

export const ROLES = [
  Role.Admin,
  Role.Authenticated,
  Role.Guest
];
