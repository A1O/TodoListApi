export type EventType = 'register' | 'login' | 'createTask';

export type Data = { [key: string]: unknown };

export interface IRabbitMQClient {
  isConnected: boolean;

  publishWithReply: (eventType: EventType, data: Data) => Promise<unknown>;
  connect: () => void;
  disconnect: () => void;
}
