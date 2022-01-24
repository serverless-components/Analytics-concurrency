import { readFile } from 'fs/promises';

export const parseJsonFile = async filePath => {
  return JSON.parse(await readFile(filePath));
};
