import axios from 'axios';
import zlib from 'zlib';

const API_URL = "https://discord.com"

const token = process.env.DISCORD_TOKEN;
const userAgent = process.env.USER_AGENT;
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
    'user-agent': userAgent,
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

