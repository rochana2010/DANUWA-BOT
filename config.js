const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}



// Change following defaultConfig if you are deploying DANUWA-MD on github actions/github codespaces or replit...Railway users don't need to edit this



const defaultConfig = {
  SESSION_ID: "GFpgRaiA#B7NAzXzuyTh9hOwdSeJWPNAmnnZhlj2wZrJGgjOxGVw", // Put your session id here
  ALIVE_IMG: "https://github.com/DANUWA-MD/DANUWA-BOT/blob/main/images/Danuwa%20-%20MD.png?raw=true",
  ALIVE_MSG: "*Hello👋 ROCHANA-BOT Is Alive Now😍*", // Change alive msg from here
  OPENAI_API_KEY: "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",// Add OPENAI API key here
  GEMINI_API_KEY: "AIzaSyAfp5E_4JphpYlfOpHLhlU9bYT60yIPB90", // Add Gemini API key here
  REMOVE_BG_API_KEY:"xm8Xvv7Dqt9zGsZNbM1UXaj1", // Add removebg API key here
  WEATHER_API_KEY: "002ac2c526c84114939185307253105", // Add your weather API key here
  BOT_OWNER: "94757017709", // Replace your bot owner number here with 94(country code)
  ownerNumber: ["94766443560"], // Replace your bot owner number here (same as bot owner number)
  AUTO_READ_STATUS: "true", // Turn on or off auto read status from here
  MODE: "public", // 'private', 'public'
};

//*******************************************************************************************************************************************************

module.exports = {
  SESSION_ID: process.env.SESSION_ID || defaultConfig.SESSION_ID,
  ALIVE_IMG: process.env.ALIVE_IMG || defaultConfig.ALIVE_IMG,
  ALIVE_MSG: process.env.ALIVE_MSG || defaultConfig.ALIVE_MSG,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || defaultConfig.OPENAI_API_KEY,
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || defaultConfig.GEMINI_API_KEY,
  REMOVE_BG_API_KEY: process.env.REMOVE_BG_API_KEY || defaultConfig.REMOVE_BG_API_KEY, 
  WEATHER_API_KEY: process.env.WEATHER_API_KEY || defaultConfig.WEATHER_API_KEY,
  BOT_OWNER: process.env.BOT_OWNER || defaultConfig.BOT_OWNER,
  ownerNumber: process.env.OWNER_NUMBER
    ? process.env.OWNER_NUMBER.split(",")
    : defaultConfig.ownerNumber,
  AUTO_READ_STATUS: convertToBool(process.env.AUTO_READ_STATUS, defaultConfig.AUTO_READ_STATUS),
  MODE: process.env.MODE || defaultConfig.MODE,

};
