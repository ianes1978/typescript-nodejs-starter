import * as nodeConfig from 'config';

interface Config {
  name: string;
  mongodbConnectionString: string;
  basePath: string;
  enableAccessLogs: boolean;
  port: number;
}

const config: Config = {
  name: nodeConfig.get<string>('name'),
  mongodbConnectionString: nodeConfig.get<string>('mongodbConnectionString'),
  enableAccessLogs: nodeConfig.get<boolean>('enableAccessLogs'),
  basePath: nodeConfig.get<string>('basePath'),
  port: nodeConfig.get<number>('port'),
};

export default config;
