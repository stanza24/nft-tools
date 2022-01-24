import TelegramApi from 'node-telegram-bot-api';

const token = process.env.TELEGRAM_TOKEN;
const myChatId = process.env.TELEGRAM_CHAT_ID;

export class TgBot {
  static _instance = null;
  bot: TelegramApi = new TelegramApi(token, { polling: true });

  constructor() {
    if (TgBot._instance) {
      return TgBot._instance;
    } else {
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