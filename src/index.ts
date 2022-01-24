import 'dotenv/config';
import { getTokens } from './discord/getToken';
import { checkForInviteLink } from './discord/invites';

// getTokens();

const projects = [
  { name: 'Gooniez', serverId: '929436441560379392', channelId: '929436443733012507' },
  { name: 'Gaming Ape Club', serverId: '927427107666133033', channelId: '928682393399853077' },
  { name: 'Grumpy Pandas', serverId: '910260200710221824', channelId: '910260200924119105' },
  { name: 'Squiggles', serverId: '923670412943044631', channelId: '923670537186734091' },
]

projects.forEach(project => {
  checkForInviteLink(project)
});

// { name: 'Monster Ape', serverId: '929363884790390784', channelId: '929363885469876237' },