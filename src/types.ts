export interface IRunnable {
  start: () => void;
  stop: () => void;
}

export interface IUser {
  id: string;
  username: string;
  password: string;
}
