import 'dotenv/config';
import { checkForInviteLink } from './discord/invites';

// getTokens();

/**
 * @description Write your channels in format:
 * { name: Notify server name, serverId, channelId }
 */
const projects = [
  // {name: 'My server', serverId: '935140299582365756', channelId: '935140299582365760'}
]

projects.forEach(project => {
  checkForInviteLink(project)
});