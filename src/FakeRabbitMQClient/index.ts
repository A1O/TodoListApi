import { Container } from 'inversify';
import { ITaskService, IUserService } from '#Services/types';
import { Data, EventType, IRabbitMQClient } from './types';
import { DependencyTypes } from '#Container/types';

class FakeRabbitMQClient implements IRabbitMQClient {
  isConnected: boolean;
  private userService!: IUserService;
  private taskService!: ITaskService;

  constructor(container: Container) {
    this.isConnected = false;
    this.userService = container.get<IUserService>(DependencyTypes.IUserService);
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
        return this.userService.register(data as any);
      case 'login':
        return this.userService.login(data as any);
      case 'createTask':
        return this.taskService.createTask(data as any);
      default:
        throw new Error(`Event type ${eventType} was not recognized`);
    }
  }
}

export default FakeRabbitMQClient;
