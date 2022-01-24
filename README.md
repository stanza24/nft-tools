# nft-tool

1. Create `.env`, fill it following `.env.example`
  1.1. You can find DISCORD_TOKEN, USER_AGENT, CONTEXT_PROPERTIES, SUPER_PROPERTIES in any browser request to discord.com
  1.2. Create your own telegram bot to get TELEGRAM_TOKEN
  1.3. Get your TELEGRAM_CHAT_ID
    1.3.1. Write a message to your telegram bot
    1.3.2. Go to https://api.telegram.org/bot(token)/getUpdates where (token) is your TELEGRAM_TOKEN (remove the brackets)
    1.3.3. message.from.id is your TELEGRAM_CHAT_ID
    
2. Fill your projects in `index.ts`

3. ```js
  yarn run
``` или ```js
   npm run dev
```

`src/discord/invites.ts`
```js
checkForInviteLink({
  name: 'Project Name',
  serverId: 'discord server id',
  channelId: 'discord channel id',
})
```

`src/discord/getToken.ts`
```js
getTokens()
```
