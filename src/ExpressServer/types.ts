import express, { IRoute, IRouterHandler, IRouterMatcher } from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';

export type PathParams = string | RegExp | Array<string | RegExp>;

export type ExpressMethod = IRouterMatcher<express.Application>;

export type ExpressGetMethod = ((name: string) => unknown) & ExpressMethod;

export type ExpressUse = IRouterHandler<express.Application> &
  IRouterMatcher<express.Application> &
  ((...handlers: []) => express.Application);

export type ExpressRoute = (prefix: PathParams) => IRoute;

export interface IExpressServer extends InversifyExpressServer {
  port: number;
  start: () => void;
  stop: () => void;
}
