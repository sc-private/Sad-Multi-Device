import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
let time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
conn.sendHydrated(m.chat, '*『 ᴏᴡɴᴇʀ ɪɴғᴏ 』*', `🪀 ᴅᴇsᴋ : 

👤 ᴏᴡɴᴇʀ ɴᴀᴍᴇ : ᴍ.ʀʏᴀɴ ᴀᴅɪᴛʏᴀ ᴘ
📆 ᴅᴀᴛᴇ ᴏғ ʙɪʀᴅ : 12 ᴀᴜɢᴜsᴛ 1997
🎓 ʟᴀsᴛ ᴇᴅᴜᴄᴀᴛɪᴏɴ : ʙᴀᴄʜᴇʟᴏʀ 1 
🧪 ᴍᴀᴊᴏʀ : ᴄʜᴇᴍɪᴄᴀʟ / ᴘʜʏsɪᴄs
🎗️ sᴛᴀᴛᴜs : ᴍᴀʀʀɪᴇᴅ
💼 ᴏᴄᴄᴜᴘᴀᴛɪᴏɴ : ᴛᴇᴀᴄʜɪɴɢ
🔅 ʜᴏʙʙɪᴇs : ᴄᴏᴅɪɴɢ

🥏 ᴡᴏʀᴋ ᴀᴅᴅʀᴇs : Jl. Sultan Adam No.76, Surgi Mufti, Kec. Banjarmasin Utara, Kota Banjarmasin, Kalimantan Selatan 70122

🥏 ʙɪᴏ : ɪɴᴛᴇʀᴇsᴛᴇᴅ ɪɴ ᴍᴀᴄʜɪɴᴇ ʟᴇᴀʀɴɪɴɢ (ᴄᴏᴍᴘᴜᴛᴇʀ ᴠɪsɪᴏɴ,ɴᴀᴛᴜʀᴀʟ ʟᴀɴɢᴜᴀɴɢᴇ ᴘʀᴏᴄᴇssɪɴɢ,ᴅᴇᴇᴘ ʟᴇᴀʀɴɪɴɢ),ɴᴏᴅᴇ.ᴊs (ɴᴇᴛᴡᴏʀᴋ,ʙᴏᴛs,ᴡᴇʙ),ᴀɴᴅ ᴘʀᴏɢʀᴀᴍᴍɪɴɢ ɪɴ ɢᴇɴᴇʀᴀʟ.

❗const hidup = require('ibadah')❗,\nꜱɪʟᴀʜᴋᴀɴ ᴋᴇᴛɪᴋ ᴛᴏᴍʙᴏʟ ᴍᴇɴᴜ ᴜɴᴛᴜᴋ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ ʙᴏᴛ\n\nᴅᴀᴛᴇ: ${date}\nᴛɪᴍᴇ: ${time} ﹙ɢᴍᴛ +7:00)`.trim(), './media/broadcast.jpg', 'https://g.co/kgs/SqGxDy', 'ᴡᴏʀᴋ ᴀᴅᴅʀᴇs', null, null, [
[`ᴍᴇɴᴜ`, '.m'],
[`\nɢᴡᴇʜ ꜱᴀᴍɴɢᴇ ᴅᴇɴɢᴀɴ ᴀɴɪᴍᴇʜ`, 'Bilek']
], m, {asLocation: true})
}
handler.help = ['menu']
handler.tags = ['general']
handler.command = /^(menu)$/i

export default handler