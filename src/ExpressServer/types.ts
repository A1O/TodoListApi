import express from 'express';
import { Server } from 'http';

export interface IExpressServer {
  app: express.Application;
  areRoutesSetted: boolean;
  httpServer?: Server;
  port: number;

  start: () => void;
  stop: () => void;
}

export interface ITest {
  a: string;
}
