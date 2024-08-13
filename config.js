const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "918787651195";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_09_08_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDk4LFxuICAgICAgICA1MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYxLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDksXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzNixcbiAgICAgICAgMzEsXG4gICAgICAgIDE5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDgyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTIxLFxuICAgICAgICAyOSxcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgODUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU2LFxuICAgICAgICA0MixcbiAgICAgICAgMzIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTExLFxuICAgICAgICAyNDIsXG4gICAgICAgIDkwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTUwLFxuICAgICAgICA0NSxcbiAgICAgICAgODAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODAsXG4gICAgICAgIDQwLFxuICAgICAgICA5NixcbiAgICAgICAgNDMsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDksXG4gICAgICAgIDE1LFxuICAgICAgICAyNDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTEwLFxuICAgICAgICA4OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDc4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDEzLFxuICAgICAgICA2OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQxLFxuICAgICAgICA0NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTksXG4gICAgICAgIDExOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDMsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjksXG4gICAgICAgIDExNixcbiAgICAgICAgNjgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNixcbiAgICAgICAgMTczLFxuICAgICAgICAyMCxcbiAgICAgICAgMTM0LFxuICAgICAgICA5NixcbiAgICAgICAgMjQwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAzOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIyLFxuICAgICAgICA4NixcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjEzLFxuICAgICAgICA0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDUsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI4LFxuICAgICAgICA3NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDg1LFxuICAgICAgICAyLFxuICAgICAgICAxODEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNCxcbiAgICAgICAgODEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNSxcbiAgICAgICAgMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDcwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjM1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQwLFxuICAgICAgICA2NixcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI1M0Z1MjlmQU81RDFaK3NhMTlua1drU3ZyUVBHcTI0Q1FiK21MRXJWbnl3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxOTM2MjY0MTk4MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQzQ1QTk5MDFFRjZGRTFGMDU0QTkwRTAwQTk0M0YzODlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIzNTUwOTQ2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE5MzYyNjQxOTgyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0MTI2Qjg1RDk3RTUyOEEwNDdDNjMwQkUwQzZGODg5NVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjM1NTA5NDZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTl90azZwTHlSeWUyanhoemMtaTJJZ1wiLFxuICBcInBob25lSWRcIjogXCI1ZjM4ZjllMC05NGFjLTQxM2QtYTYxMS04YzBlZjlmMjlkYTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzgsXG4gICAgICAxNTIsXG4gICAgICAyNTQsXG4gICAgICAxNTgsXG4gICAgICA2LFxuICAgICAgMjA2LFxuICAgICAgMTc3LFxuICAgICAgMTI4LFxuICAgICAgMzYsXG4gICAgICAxNDIsXG4gICAgICAxMDQsXG4gICAgICAyMDMsXG4gICAgICAxMzIsXG4gICAgICA0MSxcbiAgICAgIDE0MCxcbiAgICAgIDksXG4gICAgICA3NSxcbiAgICAgIDIzNCxcbiAgICAgIDE4OCxcbiAgICAgIDI0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NCxcbiAgICAgIDIxOCxcbiAgICAgIDc5LFxuICAgICAgMTI0LFxuICAgICAgMTU0LFxuICAgICAgNDcsXG4gICAgICAzLFxuICAgICAgMTY1LFxuICAgICAgNDMsXG4gICAgICAxOTIsXG4gICAgICAxNCxcbiAgICAgIDEzNCxcbiAgICAgIDkzLFxuICAgICAgNDUsXG4gICAgICAxMDEsXG4gICAgICAxNjgsXG4gICAgICA0OCxcbiAgICAgIDQ3LFxuICAgICAgMTc2LFxuICAgICAgNThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUDQyODRRRjhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxOTM2MjY0MTk4Mjo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSGV5XCIsXG4gICAgXCJsaWRcIjogXCIxNzU2MDAyMjQ0OTM3MjM6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJN29pc1lDRU51WjdiVUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkQzclMrdnhaay9YczhxUDVIS1VySVMrQWMrWHB3WXVHN2xaMm0zc2xBMEE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMm9PbzdwTWIrUXNNQTMySkRFbUxoSWEvMUIrT1RpVFBDQzhhUFY0dUMyVWg0V2lxYVFROVJFZm5RVGE4ZkhIV0VsdGR5NUFKNUQzajZaMWx2Z1Q4QlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicEZGVnVkdmRoR1orWW40MmdKR0twZTZXK29qemFzY05TNWpBK1FjeXZ4SW5sR0l1Y1VqaTRYYm5xU2MrRyswTXEySU9ONTBjZ0Z1MGVEeThNcTRMaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE5MzYyNjQxOTgyOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIzNTUwOTQzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRVFjXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFUWMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI4eFJmcnQrRXAyZWttYi9IZVZ6dWc1akZjTW1idVlZTFo0Qm1VbVo4NnQ4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY4Mzg0ODcxNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMzM1NDAxOTE4M1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
