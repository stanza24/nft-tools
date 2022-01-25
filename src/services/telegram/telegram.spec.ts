import { TgBot } from './telegram';
import 'dotenv/config';

describe('Telegram Bot', () => {
  it('should be loaded', () => {
    try {
      const token = process.env.TELEGRAM_TOKEN;
      const bot = new TgBot({ token })
      expect(bot).not.toBeUndefined()
    } catch (error) {
      expect(error).toBeUndefined()
    }
  })
})