import express, { IRouterHandler, IRouterMatcher } from 'express';

export type ExpressMethod = IRouterMatcher<express.Application>;

export type ExpressGetMethod = ((name: string) => any) & ExpressMethod;

export type ExpressUse = IRouterHandler<express.Application> &
  IRouterMatcher<express.Application> &
  ((...handlers: []) => express.Application);
