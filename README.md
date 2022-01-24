# nft-tool

1. Create `.env`, fill it following `.env.example`:
2. You can find DISCORD_TOKEN, USER_AGENT, CONTEXT_PROPERTIES, SUPER_PROPERTIES in any browser request to discord.com;
3. Create your own telegram bot to get TELEGRAM_TOKEN;
4. Find your TELEGRAM_CHAT_ID:
5. Write a message to your telegram bot;
6. Go to https://api.telegram.org/bot(token)/getUpdates where (token) is your TELEGRAM_TOKEN (remove the brackets);
7. message.from.id is your TELEGRAM_CHAT_ID;
8. Fill your projects in `index.ts` 
9. ```js
  yarn run
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
