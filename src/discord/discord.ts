import axios from 'axios';

const API_URL = "https://discord.com"

const token = process.env.DISCORD_TOKEN;

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
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/1.0.9003 Chrome/91.0.4472.164 Electron/13.4.0 Safari/537.36',
    'x-context-properties': 'eyJsb2NhdGlvbiI6IkNvbnRleHQgTWVudSJ9',
    'x-debug-options': 'bugReporterEnabled',
    'x-discord-locale': 'ru',
    'x-super-properties': 'eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiRGlzY29yZCBDbGllbnQiLCJyZWxlYXNlX2NoYW5uZWwiOiJzdGFibGUiLCJjbGllbnRfdmVyc2lvbiI6IjEuMC45MDAzIiwib3NfdmVyc2lvbiI6IjEwLjAuMTgzNjMiLCJvc19hcmNoIjoieDY0Iiwic3lzdGVtX2xvY2FsZSI6ImVuLVVTIiwiY2xpZW50X2J1aWxkX251bWJlciI6MTEwNDUxLCJjbGllbnRfZXZlbnRfc291cmNlIjpudWxsfQ==',
  }
})

