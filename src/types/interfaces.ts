export interface UserLogin {
  username: string;
  password: string;
}

export interface RegisterUser {
  username: string;
  password: string;
  confirmPassword: string;
}

export interface ProfilesTypes {
  id?: string;
  title: string;
  imageUrl: string;
  nickname: string;
}
