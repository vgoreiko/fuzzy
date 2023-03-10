import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';
import { Environments } from "./environments.enum";

export const getConfigFileName = () => {
  if (!process.env.NODE_ENV) return 'default';
  const fromEnum = Environments[process.env.NODE_ENV];
  return fromEnum || Environments.dev;
};

const YAML_CONFIG_FILENAME = `config/env/${getConfigFileName()}.config.yaml`;

export const configuration = () => {
  return yaml.load(
    readFileSync(join(__dirname, YAML_CONFIG_FILENAME), 'utf8'),
  ) as Record<string, any>;
};
