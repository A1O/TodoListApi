export interface IDatabase {
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
}

export * from './Repositories/types';
