import { api as discordApi } from "./discord"
import { TgBot } from "../telegram/notify";
import { format, intervalToDuration } from 'date-fns'
import { formatDurationAsTime, getDeltaTimeFormatted } from "../utils/utils";
import { AxiosResponse } from "axios";

const TIMEOUT = 2000;

// If you don't have tg bot, just pass false here,
// either fill the env TELEGRAM_TOKEN and set this one to true
const USE_TG_NOTIFICATION = false;

let tg;

if (USE_TG_NOTIFICATION)
  tg = new TgBot();

export async function checkForInviteLink({ name, serverId, channelId }) {
  const timeStart = new Date();
  const time = format(timeStart, 'dd.MM HH:mm:ss')
  console.log(`\<${time}> ⏳ Project ${name}: Started...`);
  try {
    const response = await makeRequest(serverId, channelId, name, timeStart)
    if (response?.status || response?.status === 200) {
      const timeEnd = new Date();
      const delta = getDeltaTimeFormatted(timeStart, timeEnd)
      if (USE_TG_NOTIFICATION) notify(name, delta);
      const time = format(timeEnd, 'dd.MM HH:mm:ss')
      console.log(`\<${time}> Project ${name}: ✅ Done!`);
    }
  } catch (error) {
    const currTime = new Date();
    const duration = intervalToDuration({ start: timeStart, end: currTime })
    const timer = formatDurationAsTime(duration)
    if (error.response) errorHandler(error.response, name, timer)
    else console.error(error);
  }
}

async function makeRequest(serverId, channelId, name, timeStart): Promise<AxiosResponse> {
  return discordApi.post(`/api/v9/channels/${channelId}/invites`, {
    max_age: 604800,
    max_uses: 0,
    target_type: null,
    temporary: true,
    validate: null,
  }, {
    headers: {
      'referer': `https://discord.com/channels/${serverId}/${channelId}`,
    }
  }).catch((error) => {
    return new Promise((res) => {
      const currTime = new Date();
      const duration = intervalToDuration({ start: timeStart, end: currTime })
      const timer = formatDurationAsTime(duration)
      const timeout = errorHandler(error.response, name, timer);
      setTimeout(async () => res(await makeRequest(serverId, channelId, name, timeStart)), timeout)
    })
  })
}

function errorHandler(response, name, timer): number {
  const time = format(new Date(), 'HH:mm:ss')
  let timeout = response?.data?.retry_after
    ? response.data.retry_after * 1000
    : TIMEOUT;
  let msg = `\<${time}> Project ${name} (${timer}): ⛔`;

  if (!response)
    msg += ' Unknown error!'
  else {
    msg += ` [${response.status} ${response.statusText}] ${response.data.message || ''}`
  }

  console.log(msg);
  return timeout
}

function notify(name, time) {
  try {
    if (USE_TG_NOTIFICATION)
      tg.sendMsgToMe(
        `🔑 *InvitePicker*\n\n✅ *Project ${name}*\n⏲️ ${time}\n_Invite is ready\!_`
      );
  } catch (error) {
    console.error(`Can't send tg message!`);
    return;
  }
}
