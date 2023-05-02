import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';
import { Environments } from "./environments.enum";

export const getConfigFileName = () => {
  if (!process.env.NODE_ENV) return Environments.dev;
  const env: Environments = <Environments>process.env.NODE_ENV;
  const fromEnum = Environments[env];
  return fromEnum || Environments.dev;
};

const YAML_CONFIG_FILENAME = `./env/${getConfigFileName()}.config.yaml`;
console.log(__dirname)

export const configuration = () => {
  return yaml.load(
    readFileSync(join(__dirname, YAML_CONFIG_FILENAME), 'utf8'),
  ) as Record<string, any>;
};
