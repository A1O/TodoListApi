import express, { IRouterHandler, IRouterMatcher } from 'express';

export type ExpressMethod = IRouterMatcher<express.Application>;

export type ExpressGetMethod = ((name: string) => unknown) & ExpressMethod;

export type ExpressUse = IRouterHandler<express.Application> &
  IRouterMatcher<express.Application> &
  ((...handlers: []) => express.Application);

export interface IExpressServer {
  port: number;
  get: ExpressGetMethod;
  post: ExpressMethod;
  put: ExpressMethod;
  delete: ExpressMethod;
  use: ExpressUse;

  start: () => void;
  stop: () => void;
}
