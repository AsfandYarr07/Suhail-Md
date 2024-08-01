const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_59_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTkyLFxuICAgICAgICA2MSxcbiAgICAgICAgODIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMixcbiAgICAgICAgMjMzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTgwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjEsXG4gICAgICAgIDk2LFxuICAgICAgICAzNixcbiAgICAgICAgOTAsXG4gICAgICAgIDEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjI2LFxuICAgICAgICA1MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2NixcbiAgICAgICAgMTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY1LFxuICAgICAgICA2NSxcbiAgICAgICAgNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDk0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTg1LFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTksXG4gICAgICAgIDY1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODMsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDUwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTM5LFxuICAgICAgICA3MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExNixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjA3LFxuICAgICAgICAzNixcbiAgICAgICAgODUsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNCxcbiAgICAgICAgNjksXG4gICAgICAgIDk3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTAxLFxuICAgICAgICA1MCxcbiAgICAgICAgMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgODIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjA4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjcsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjcsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDksXG4gICAgICAgIDEzMSxcbiAgICAgICAgODUsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTcsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNixcbiAgICAgICAgNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODcsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMixcbiAgICAgICAgMjEwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODIsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzksXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQyLFxuICAgICAgICA0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDExLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkRvWlZaKy9QNFllWmtBWFBqK011T3paaWorT1NTTmtralRLL2NRK3lWUjg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMzU4NDU3Mzk4NzcwMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiREI2QjY5QzE2QUNBNDM4OTc3NzU1NTA3RDYwMjQ3MjhcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNTA2MzcwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMzU4NDU3Mzk4NzcwMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjY2ODZCQUM4RkQxMjZENTZGNDc5M0JGNjU5Q0JCM0ZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNTA2MzcxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkhzQ0U0NUp1VFBlQ1g1OUhvbmJTcUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiODFiNzZjNzAtMDA1My00Yjc3LTgxZjgtY2JhZTA0MDI3M2FmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MSxcbiAgICAgIDU0LFxuICAgICAgMzMsXG4gICAgICAzMCxcbiAgICAgIDIxMixcbiAgICAgIDg3LFxuICAgICAgMjEyLFxuICAgICAgODMsXG4gICAgICAzMixcbiAgICAgIDM3LFxuICAgICAgNzksXG4gICAgICAyMjYsXG4gICAgICA3NixcbiAgICAgIDIzOCxcbiAgICAgIDE5MyxcbiAgICAgIDE3NixcbiAgICAgIDM5LFxuICAgICAgMjU0LFxuICAgICAgMTIwLFxuICAgICAgNjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAxLFxuICAgICAgMTA5LFxuICAgICAgMjMsXG4gICAgICAyMjcsXG4gICAgICA1MCxcbiAgICAgIDE1MyxcbiAgICAgIDIwMSxcbiAgICAgIDIxMyxcbiAgICAgIDE3NSxcbiAgICAgIDExOCxcbiAgICAgIDUyLFxuICAgICAgMTI1LFxuICAgICAgODQsXG4gICAgICA3NyxcbiAgICAgIDE5OSxcbiAgICAgIDc1LFxuICAgICAgMTQwLFxuICAgICAgMjExLFxuICAgICAgNTMsXG4gICAgICAyNTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUThLTVFSOTVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjM1ODQ1NzM5ODc3MDA6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTU4Mzk0NTY4NjkxNzM3OjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi4oCL4oCL4oCL4oCL4oCL4oCL4oCL4oCL4oCL4oCL4oCL4oCL4oCL4oCL4oCL4oCL4oCL4oCL4oCL4oCL4oCL4oCL4oCL4oCL4oCLXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3U4NnNzRUVQMjRyYlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJZc2JleEdXWTREdk84L09uaXlpTXI0SmVub1hsaFFWRThZcmJMYlJ3RUVvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIklHaXRjUk53dVlVUmcyYmRrbmUvTm4rRisrK0thODlmUmJYOWdEWTdtMFg5SkxHa2ZDQnU2QUtsL0FsbGFuZHMvNVEwNnBqN1RtRjZMUzRrY3Exb0FRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjVjQmJlM3phOHlqUUJHeVJIRHFFSEFNZS9SdDF5TENkZWxGTVBGMVg1ZGRZOXYxdFNFNlhrUmFzbkQ3VkNGTkdEQklFRk4rVGFVMmFiT2V0VGhrOUNRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjM1ODQ1NzM5ODc3MDA6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNixcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNTA2MzY4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSzAwXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLMDAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJCbEh3RmIyWGNFamhtQUNSUmpuZ014Rk1zckViQy9IWlhTekxBVjEyNWVZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyMzI3NzI3MTUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjUwNjM3MDY1MFwifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
