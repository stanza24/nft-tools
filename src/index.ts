import 'dotenv/config';
import { startApp } from './start';

try {
  import('./config.json').then(() => { startApp() })
} catch (error) {
  console.error('Create config.json! (check README.md)');
}
