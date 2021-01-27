export interface IUser {
  id: string;
  username: string;
  password: string;
}

export interface ITask {
  id: string;
  title: string;
  description: string;
  userId: string;
}
