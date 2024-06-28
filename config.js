//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kushimotunde7@gmail.com";
global.location = "Lagos,Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "";
global.devs = "2347041039367";
global.sudo = process.env.SUDO || "2347041039367";
global.owner = process.env.OWNER_NUMBER || "2347041039367";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/d29baa62079de1f3e9ba7.jpg,https://telegra.ph/file/7aa0025c70b7b5040d3d0.jpg,https://telegra.ph/file/06265ce5a7956b4799ba0.jpg,";
global.waPresence = process.env.WAPRESENCE || "available";//online,recording,composing,available,unavailable
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://ednut-md-session.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "EDNUT-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU09xdnAvdWxqczRCdVM1TGxqZ3RYRmFBZjdvZEJOcWFEajJ2b2RkdGprTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTHBSYXhGRzVOcXJtQUFmZWpSVndnbDRScUdoQ3NCWWw3N1pXdW1DOWgzdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrS2loZlVFNXkrSUJjMkI4by9nYVI1U25MTDU0dGxLTEVpUGJYdWFPYzBjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxdHNlalpRSytOVjZQZnM0YncwdkhIRlNHQ3JnNExiMVpnTHFvZGpGb2wwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9QejhJbGdxelc0MitLYUd2cSt3UlhhSEhaVXNLMGQ3MWJFalB2ZXVjRVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjF5QVBYcU8yVFpQMm80aHRKWVdBZGd3R3dQSDYvT3k3a3c4QTNOcUpYZ1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0d2UStsL3Y1NDZvVUVEaTNHNFhrYTU4SXg1eXAyUmhacVRkS2pqc2tscz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUVzdGdCeGgrbDVCSGxmajh0YmpLN25SWkxOSnd6cUpCZ2tFczI2UFJqST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9Leks0dkJHeS9yK3dCYmtXRCtyQVpsYVhtMk01cWVnMk9lTkV5WlhtVWt1elY0ZDYzSmI3ZC9WVTBJUVV4L3FaZkNId0RXdXNmd1B1M3NsVVhoaUNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA0LCJhZHZTZWNyZXRLZXkiOiJ4dlpYNThkMndOdlJLV3NOZ1NtMVdpSUVjOEs0bE5ZMGJ5NWE2N2hOSHZZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwNDEwMzkzNjdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDRFQzIzMEU4MTU5MDJBNjczNTlCOTBDQ0I3NUQxQzUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxOTU3ODE2N31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiM0dWQVhrQkhScHFJWFNIaUpuNjU2ZyIsInBob25lSWQiOiIwY2Y0OTc4MS0zNmRiLTQ4MjgtYjg2MC0zMTAxNDk0Njg4NGUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidkhrVmVSSVB6aldjZHY5NmdLTzk2NkJBM3N3PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikw5aDZBT09ZN2pRTXdFdTBaTEo1T211UVJmUT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJUWUZSOUNOMiIsIm1lIjp7ImlkIjoiMjM0NzA0MTAzOTM2NzoyMUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLvvYPvvY/vvYLvvZLvvYEifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pydjBxUUdFS1hjK3JNR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik80bXpQN0I2L1lYTENRSnozVGVCSUc0dldRTU9VeGV6UXpjVlNXNFFUbXM9IiwiYWNjb3VudFNpZ25hdHVyZSI6InNnYnVoUjkwanZoMEtoSm9wWjZnNG83ejRpZkNEei8xSFY5OHU1bXBNM3FQN3Zrd3krUXZGNmhWUkFRY0Iwemg1NEYwdmlncUVLS1hSQUhvVkNYcEJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJVWm15Um5qRHBXSGRKMlc4RVc5dHVURENVQnFaWG1uaDRUSzVwOHo4VkUvU0IrYVdZU3lPblNEOXVhQjhSblJpMFdZNmMxbWxOOGJWNFpZdzdjS0NBdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwNDEwMzkzNjc6MjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVHVKc3ord2V2MkZ5d2tDYzkwM2dTQnVMMWtERGxNWHMwTTNGVWx1RUU1ciJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTU3ODE2MywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHUCsifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || '.',
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©COBRA-Md",
  author: process.env.PACK_AUTHER || "🕊",
  packname: process.env.PACK_NAME || "COBRA-Md",
  botname: process.env.BOT_NAME || "COBRA-md",
  ownername: process.env.OWNER_NAME || "COBRA",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "Ednut-Md").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
