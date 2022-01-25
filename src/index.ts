import 'dotenv/config';
import { startApp } from './start';

import('../config.json')
  .then(() => { startApp() })
  .catch(() => console.error('Create config.json! (check README.md)'))
