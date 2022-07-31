let handler = async (m, { conn }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ ʙɪᴏ ᴏᴡɴ ]───────*
👤 ᴏᴡɴᴇʀ ɴᴀᴍᴇ : ᴍ.ʀʏᴀɴ ᴀᴅɪᴛʏᴀ ᴘ
📆 ᴅᴀᴛᴇ ᴏғ ʙɪʀᴅ : 12 ᴀᴜɢᴜsᴛ 1997
🎓 ʟᴀsᴛ ᴇᴅᴜᴄᴀᴛɪᴏɴ : ʙᴀᴄʜᴇʟᴏʀ 1 
🧪 ᴍᴀᴊᴏʀ : ᴄʜᴇᴍɪᴄᴀʟ / ᴘʜʏsɪᴄs
🎗️ sᴛᴀᴛᴜs : ᴍᴀʀʀɪᴇᴅ
💼 ᴏᴄᴄᴜᴘᴀᴛɪᴏɴ : ᴛᴇᴀᴄʜɪɴɢ
🔅 ʜᴏʙʙɪᴇs : ᴄᴏᴅɪɴɢ


🥏 ᴡᴏʀᴋ ᴀᴅᴅʀᴇs : Jl. Sultan Adam No.76, Surgi Mufti, Kec. Banjarmasin Utara, Kota Banjarmasin, Kalimantan Selatan 70122

🥏 ʙɪᴏ : ɪɴᴛᴇʀᴇsᴛᴇᴅ ɪɴ ᴍᴀᴄʜɪɴᴇ ʟᴇᴀʀɴɪɴɢ (ᴄᴏᴍᴘᴜᴛᴇʀ ᴠɪsɪᴏɴ,ɴᴀᴛᴜʀᴀʟ ʟᴀɴɢᴜᴀɴɢᴇ ᴘʀᴏᴄᴇssɪɴɢ,ᴅᴇᴇᴘ ʟᴇᴀʀɴɪɴɢ),ɴᴏᴅᴇ.ᴊs (ɴᴇᴛᴡᴏʀᴋ,ʙᴏᴛs,ᴡᴇʙ),ᴀɴᴅ ᴘʀᴏɢʀᴀᴍᴍɪɴɢ ɪɴ ɢᴇɴᴇʀᴀʟ.

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler
