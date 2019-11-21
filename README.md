# Proto Bot
Prototype bot made with Discord.js. Created by and maintaned by the UspCodeLab Leste members.

This bot was born with the purpose of introducing our members to NodeJS and JavaScript, and was
based on the Idiot's Guide Community [Guide Bot](https://github.com/AnIdiotsGuide/guidebot-class)

## Requirements
- `git` command line installed (Downloads [here](https://git-scm.com/downloads))
- `node` [Version 8.0.0+](https://nodejs.org)
- A Discord bot application (create one [here](https://discordapp.com/developers/applications/) if you haven't yet)
- Your bot's Token

## Getting Started
> git clone https://github.com/nkzren/proto-bot

- Create a 'token.json' file in the project's root directory (**DO NOT share the token publicly, it will open your application up to hackers**)
```json
{
    "token": "YOUR TOKEN HERE"
}
```
- Create a 'config.js' file in the project's root directory. You can use the 'example_config.js' file already provided as base
```js
  const config = {
    prefix: '.',

    // Name of the moderator and admin roles
    moderator: 'Moderator',
    admin: 'Admin',
  }

module.exports = config;
```
- You're all set! Proceed to *Running the Application*

## Running the Application

> node bot