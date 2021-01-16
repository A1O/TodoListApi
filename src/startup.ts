import EismokyklaApi from './main';

const eismokyklaApi = new EismokyklaApi(<string>process.env.NODE_ENV);
eismokyklaApi.start();
