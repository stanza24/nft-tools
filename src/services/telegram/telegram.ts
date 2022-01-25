import TelegramApi from 'node-telegram-bot-api';
import dotenv from 'dotenv/config';
import config from '../../../config.json';

const token = process.env.TELEGRAM_TOKEN;
const myChatId = config.telegram.chatId;

export class TgBot {
  static _instance = null;
  private token = token;
  bot: TelegramApi;

  constructor(args?: { token?: string }) {
    if (TgBot._instance) {
      return TgBot._instance;
    } else {
      this.token = args?.token || token;
      if (!token) throw new Error('TelegramBot: No token provided')
      this.bot = new TelegramApi(this.token, { polling: true })
      this.setEvents();
      TgBot._instance = this;
    }
  }

  setEvents() {}

  sendMsgToMe(msg: string) {
    this.bot.sendMessage(myChatId, msg, {
      parse_mode: 'Markdown'
    })
  }
}

// const tgBot = new TgBot()

// export default tgBot;