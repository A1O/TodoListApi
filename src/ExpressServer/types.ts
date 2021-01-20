import express, { IRouterMatcher } from 'express';

export interface IRunnable {
  start: () => void;
  stop: () => void;
}

export type ExpressMethod = IRouterMatcher<express.Application>;

export type ExpressGetMethod = ((name: string) => any) & ExpressMethod;
