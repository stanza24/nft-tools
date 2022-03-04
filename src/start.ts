import { checkForInviteLink } from './modules/invitePicker/';
import config2 from '../config.json'
import config from 'dotenv/config';

export function startApp() {
  // getTokens();

  const projects = config2.invitePicker.projects

  projects.forEach(project => {
    checkForInviteLink(project)
  });
}