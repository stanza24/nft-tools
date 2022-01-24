import { parseInfo } from '../parse';
import { read, write } from '../files';

const TOKENS_FILE_PATH = './assets/4.txt';
const OUTPUT_PATH = './assets/4_tokens.txt';

export function getTokens() {
  const inputName = TOKENS_FILE_PATH;
  const outputName = OUTPUT_PATH;

  read(inputName, (lines) => {
    const tokens = lines.map((line) => {
      return parseInfo(line).token
    }).join('\n');

    write(outputName, tokens);
  })
}