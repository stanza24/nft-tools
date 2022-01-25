import { checkForInviteLink } from './modules/invitePicker/';
import config2 from './config.json'
import config from 'dotenv/config';

export function startApp() {
  // getTokens();

  /**
   * @description Write your channels in format:
   * { name: Notify server name, serverId, channelId }
   */
  // const projects = [
  //   {name: 'My server', serverId: '935140299582365756', channelId: '935140299582365760'}
  // ]

  const projects = config2.invitePicker.projects

  projects.forEach(project => {
    checkForInviteLink(project)
  });
}