import { Container } from 'inversify';
import { ITaskService, IAuthService } from '#Services/types';
import { Data, EventType, IRabbitMQClient } from './types';
import { DependencyTypes } from '#Container/types';

class FakeRabbitMQClient implements IRabbitMQClient {
  isConnected: boolean;
  private authService!: IAuthService;
  private taskService!: ITaskService;

  constructor(container: Container) {
    this.isConnected = false;
    this.authService = container.get<IAuthService>(DependencyTypes.IAuthService);
    this.taskService = container.get<ITaskService>(DependencyTypes.ITaskService);
  }

  connect() {
    this.isConnected = true;
    console.log('Fake RabbitMQ client connected...');
  }

  disconnect() {
    this.isConnected = false;
  }

  async publishWithReply(eventType: EventType, data: Data): Promise<unknown> {
    if (!this.isConnected) {
      throw new Error('You should first connect to RabbitMQ server before calling publishWithReply!');
    }

    switch (eventType) {
      case 'register':
        return this.authService.register(data as any);
      case 'login':
        return this.authService.login(data as any);
      case 'createTask':
        return this.taskService.createTask(data as any, <string | null>data.userId);
      default:
        throw new Error(`Event type ${eventType} was not recognized`);
    }
  }
}

export default FakeRabbitMQClient;
