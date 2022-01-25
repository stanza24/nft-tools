import { read, write } from '../../files';
import { parseInfo } from './parse';
import config from '../../config.json'

const TOKENS_FILE_PATH = config.tokenParser.inputDefaultPath;
const OUTPUT_PATH = config.tokenParser.outputDefaultPath;

/**
 * Parse tokens from file
 * @param input Path to the file with input data for parser ()
 * @param output Path where parser will throw the result token list
 */
function getTokens(inputPath = TOKENS_FILE_PATH, outputPath = OUTPUT_PATH) {
  return new Promise((resolve, reject) => {
    read(inputPath).then((lines) => {
      const tokens = lines.map((line) => parseInfo(line).token).join('\n');
      write(outputPath, tokens)
        .then(() => { resolve(tokens) })
        .catch((err) => reject(err));
    })
  })
}

const TokenParser = {
  getTokens
}

export default TokenParser