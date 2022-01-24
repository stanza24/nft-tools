import axios from 'axios';
import zlib from 'zlib';

const API_URL = "https://discord.com"

const token = process.env.DISCORD_TOKEN;
const contextProperties = process.env.CONTEXT_PROPERTIES;
const superProperties = process.env.SUPER_PROPERTIES;

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'accept': '*/*',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'en-US,ru;q=0.9',
    'authorization': token,
    'content-type': 'application/json',
    'origin': API_URL,
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36',
    'x-context-properties': contextProperties,
    'x-debug-options': 'bugReporterEnabled',
    'x-discord-locale': 'ru',
    'x-super-properties': superProperties,
  },
  decompress: false,
  responseType: 'stream',
  transformResponse(data) {
    // Заставляем axios прогонять данные через декомпресс стримом
    return data.pipe(zlib.createBrotliDecompress())
  }
})

