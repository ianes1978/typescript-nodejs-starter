import * as nodeConfig from 'config';

interface Config {
  name: string;
  mongodbConnectionString: string;
  enableAccessLogs: boolean;
  port: number;
}

const config: Config = {
  name: nodeConfig.get<string>('name'),
  mongodbConnectionString: nodeConfig.get<string>('mongodbConnectionString'),
  enableAccessLogs: nodeConfig.get<boolean>('enableAccessLogs'),
  port: nodeConfig.get<number>('port'),
};

export default config;
