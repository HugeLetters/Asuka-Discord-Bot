import 'dotenv/config'

// default should be always included
export const EXTENSIONS = ["default","meme"];
export const PREFIX = new RegExp(/^(asu?ka|асу?ка|asss?uc?ka)(?:(?:[^а-яё\w]+)([а-яё\w]*)|$)(.*)/, "i");
export const TAG_REGEXP = new RegExp(/^<@!?(\d+)>$/);
export const APP_ID = process.env.APP_ID;
export const BOT_TOKEN = process.env.BOT_TOKEN;
export const AUTHENTICATION_HEADER = { "Authorization": `Bot ${BOT_TOKEN}` };
export const AUTHENTICATION_BODY = {
    "token": BOT_TOKEN,
    "properties": {
        "os": "windows",
        "browser": "chrome",
        "device": "laptop"
    },
    // see https://discord.com/developers/docs/topics/gateway#list-of-intents
    "intents": (1 << 9) | (1 << 15) | (1 << 11) | (1 << 12),
};

// e.g. "https://discord.com/api/v10"
export const HTTP_REQUEST_URL = process.env.DISCORD_API_ENDPOINT;
export const WEBSOCKET_GATEWAY_URL = "";
export const IMAGE_ENDPOINT=process.env.DISCORD_CDN_ENDPOINT;

// 8 MBytes(Discord limit) MINUS ~30000 symbols(just to make sure for headers, body, boundaries etc)
export const MAX_PAYLOAD_SIZE = 8357888; //bytes

// 1 HOUR = 3600000 , 1 DAY = 86400000
export const SOMEONE_IS_TYPING_DELAY = 3600000 * 6; // ms