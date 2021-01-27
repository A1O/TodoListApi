import express, { IRoute, IRouterHandler, IRouterMatcher } from 'express';

export type PathParams = string | RegExp | Array<string | RegExp>;

export type ExpressMethod = IRouterMatcher<express.Application>;

export type ExpressGetMethod = ((name: string) => unknown) & ExpressMethod;

export type ExpressUse = IRouterHandler<express.Application> &
  IRouterMatcher<express.Application> &
  ((...handlers: []) => express.Application);

export type ExpressRoute = (prefix: PathParams) => IRoute;

export interface IExpressServer {
  port: number;
  get: ExpressGetMethod;
  post: ExpressMethod;
  put: ExpressMethod;
  delete: ExpressMethod;
  use: ExpressUse;
  route: ExpressRoute;

  start: () => void;
  stop: () => void;
}
