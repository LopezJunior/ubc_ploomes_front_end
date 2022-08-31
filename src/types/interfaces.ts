export interface UserLogin {
  email: string;
  password: string;
}

export interface RegisterUser {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ProfilesTypes {
  id?: string;
  title: string;
  imageUrl: string;
  name: string;
}

export interface Numbers {
  number: number;
}
