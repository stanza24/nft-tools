import axios from 'axios';
import { resolve } from 'path';
import zlib from 'zlib';
import config from '../../config.json'
import { collectDataFromStream } from '../../utils/utils';

const token = process.env.DISCORD_TOKEN;

const userAgent = config.discordRequest['user-agent'];
const contextProperties = config.discordRequest['x-context-properties'];
const superProperties = config.discordRequest['x-super-properties'];

const API_URL = "https://discord.com"

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
    return new Promise(async (resolve) => {
      if (data.statusCode === 200) {
        // Заставляем axios прогонять данные через декомпресс стримом
        const stream = data.pipe(zlib.createBrotliDecompress())
        resolve(await collectDataFromStream<any>(stream))
      } else {
        resolve(data)
      }
    })
  }
})

