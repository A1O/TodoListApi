import express, { IRouterHandler, IRouterMatcher } from 'express';

export type ExpressMethod = IRouterMatcher<express.Application>;

export type ExpressGetMethod = ((name: string) => unknown) & ExpressMethod;

export type ExpressUse = IRouterHandler<express.Application> &
  IRouterMatcher<express.Application> &
  ((...handlers: []) => express.Application);
