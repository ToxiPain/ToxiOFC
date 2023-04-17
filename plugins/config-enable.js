let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
const sections = [
{
title: `𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐎𝐏𝐂𝐈𝐎𝐍𝐄𝐒`,
rows: [
{title: "✨ | WELCOME", description: "Activar o desactivar la bienvenida en el Grupo", rowId: `${usedPrefix + command} welcome`},
{title: "🌎 | MODO PUBLICO", description: "El bot se vuelve de uso publico o privado", rowId: `${usedPrefix + command} public`},
{title: "🥵 | MODO HORNY", description: "Activa o desactiva los comandos +18", rowId: `${usedPrefix + command} modohorny`},
{title: "🔗 | ANTILINK", description: "Activa o desactivar anti-enlaces de Whatsapp", rowId: `${usedPrefix + command} antilink`},   
{title: "🔗 | ANTILINK 𝟸", description: "Activa o desactiva anti-enlaces de tipo HTTPS", rowId: `${usedPrefix + command} antilink2`},    
{title: "🔔 | DETECT", description: "Activa o desactiva las notificaciones del bot", rowId: `${usedPrefix + command} detect`},      
{title: "⛔ | RESTRICT", description: "Activa o desactiva las restricciones para sacar del grupo", rowId: `${usedPrefix + command} restrict`},    
{title: "☑️ | 𝙰𝚄𝚃𝙾𝚁𝙴𝙰𝙳", description: "El bot marca las conversaciones en leido de forma automatica", rowId: `${usedPrefix + command} autoread`},
{title: "🔊 | AUDIOS", description: "Activa o desactiva los audios del bot sin prefijo", rowId: `${usedPrefix + command} audios`},
{title: "👾 | AUTOSTICKER", description: "Todas las imagenes y videos enviados se convierten en sticker", rowId: `${usedPrefix + command} autosticker`},
{title: "💬 | PCONLY", description: "El bot solo responderá los comandos al privado", rowId: `${usedPrefix + command} pconly`},
{title: "🏢 | GCONLY", description: "El bot solo responderá los comandos del grupo", rowId: `${usedPrefix + command} gconly`},
{title: "❌ | 𝙰𝙽𝚃𝙸𝚅𝙸𝙴𝚆𝙾𝙽𝙲𝙴", description: "Activa o desactiva los mensajes de ver solo una vez", rowId: `${usedPrefix + command} antiviewonce`},
{title: "📵 | ANTILLAMADA", description: "Activa o desactiva el antillamada", rowId: `${usedPrefix + command} anticall`},
{title: "💬 | ANTIPRIVADO", description: "El bot bloqueará a los que hablen al privado", rowId: `${usedPrefix + command} antiprivado`},
{title: "🤬 | ANTITOXIC", description: "Activa o desactiva el baneo por malas palabras", rowId: `${usedPrefix + command} antitoxic`},
{title: "🕸️ | ANTITRABAS", description: "Anti-Kuakers, banea si se detectan trabas/binarios", rowId: `${usedPrefix + command} antitraba`},
{title: "👎🏻 | ANTIARABES", description: "Cuando un arabe mande un mensaje el bot lo saca", rowId: `${usedPrefix + command} antiarabes`}, 
{title: "🤖 | MODEJADIBOT", description: "Activa o desactiva el comando de sub-bots", rowId: `${usedPrefix + command} modejadibot`}, 
{title: "👑 | MODOADMIN", description: "El bot solo responderá a los admins del grupo", rowId: `${usedPrefix + command} modoadmin`}, 
{title: "📝 | Talkbot", description: "Activa o desactiva que el bot hable", rowId: `${usedPrefix + command} simsimi`},
]},
{
title: `𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐎𝐏𝐂𝐈𝐎𝐍𝐄𝐒`,
rows: [
{title: "✨ | WELCOME", description: "Activar o desactivar la bienvenida en el Grupo", rowId: `${usedPrefix + command} welcome`},
{title: "🌎 | MODO PUBLICO", description: "El bot se vuelve de uso publico o privado", rowId: `${usedPrefix + command} public`},
{title: "🥵 | MODO HORNY", description: "Activa o desactiva los comandos +18", rowId: `${usedPrefix + command} modohorny`},
{title: "🔗 | ANTILINK", description: "Activa o desactivar anti-enlaces de Whatsapp", rowId: `${usedPrefix + command} antilink`},   
{title: "🔗 | ANTILINK 𝟸", description: "Activa o desactiva anti-enlaces de tipo HTTPS", rowId: `${usedPrefix + command} antilink2`},    
{title: "🔔 | DETECT", description: "Activa o desactiva las notificaciones del bot", rowId: `${usedPrefix + command} detect`},      
{title: "⛔ | RESTRICT", description: "Activa o desactiva las restricciones para sacar del grupo", rowId: `${usedPrefix + command} restrict`},    
{title: "☑️ | 𝙰𝚄𝚃𝙾𝚁𝙴𝙰𝙳", description: "El bot marca las conversaciones en leido de forma automatica", rowId: `${usedPrefix + command} autoread`},
{title: "🔊 | AUDIOS", description: "Activa o desactiva los audios del bot sin prefijo", rowId: `${usedPrefix + command} audios`},
{title: "👾 | AUTOSTICKER", description: "Todas las imagenes y videos enviados se convierten en sticker", rowId: `${usedPrefix + command} autosticker`},
{title: "💬 | PCONLY", description: "El bot solo responderá los comandos al privado", rowId: `${usedPrefix + command} pconly`},
{title: "🏢 | GCONLY", description: "El bot solo responderá los comandos del grupo", rowId: `${usedPrefix + command} gconly`},
{title: "❌ | 𝙰𝙽𝚃𝙸𝚅𝙸𝙴𝚆𝙾𝙽𝙲𝙴", description: "Activa o desactiva los mensajes de ver solo una vez", rowId: `${usedPrefix + command} antiviewonce`},
{title: "📵 | ANTILLAMADA", description: "Activa o desactiva el antillamada", rowId: `${usedPrefix + command} anticall`},
{title: "💬 | ANTIPRIVADO", description: "El bot bloqueará a los que hablen al privado", rowId: `${usedPrefix + command} antiprivado`},
{title: "🤬 | ANTITOXIC", description: "Activa o desactiva el baneo por malas palabras", rowId: `${usedPrefix + command} antitoxic`},
{title: "🕸️ | ANTITRABAS", description: "Anti-Kuakers, banea si se detectan trabas/binarios", rowId: `${usedPrefix + command} antitraba`},
{title: "👎🏻 | ANTIARABES", description: "Cuando un arabe mande un mensaje el bot lo saca", rowId: `${usedPrefix + command} antiarabes`}, 
{title: "🤖 | MODEJADIBOT", description: "Activa o desactiva el comando de sub-bots", rowId: `${usedPrefix + command} modejadibot`}, 
{title: "👑 | MODOADMIN", description: "El bot solo responderá a los admins del grupo", rowId: `${usedPrefix + command} modoadmin`}, 
{title: "📝 | Talkbot", description: "Activa o desactiva que el bot hable", rowId: `${usedPrefix + command} simsimi`},
]},
]
//{title: "🔞 | 𝙰𝙽𝚃𝙸𝙿𝙾𝚁𝙽𝙾", description: "𝚂𝙸 𝚄𝙽𝙰 𝙸𝙼𝙰𝙶𝙴𝙽 𝙾 𝚅𝙸𝙳𝙴𝙾 𝚃𝙸𝙴𝙽𝙴 𝙲𝙾𝙽𝚃𝙴𝙽𝙸𝙳𝙾 𝙿𝙾𝚁𝙽𝙾 𝙴𝙻 𝙱𝙾𝚃 𝙴𝙻𝙸𝙼𝙸𝙽𝙰 𝙻𝙰 𝙸𝙼𝙰𝙶𝙴𝙽 𝙾 𝚅𝙸𝙳𝙴𝙾", rowId: `${usedPrefix + command} antiporno`},
//let name = await conn.getName(m.sender)
const listMessage = {
text: ' ',
footer: `┏━━━━━━━━━━━━━┓
┣ *PANEL DE CONTROL* ⚙️
┣ ඬ⃟ℹ️ _Elige las funciones que_
┣ ඬ⃟ℹ️ _deseas dejar activas_
┗━━━━━━━━━━━━━┛`,
title: null,
buttonText: "𝐒𝐄𝐋𝐄𝐂𝐂𝐈𝐎𝐍𝐄 𝐀𝐐𝐔𝐢",
sections,
Buttons: true }

let isEnable = /true|enable|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'welcome':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!(isAdmin || isOwner || isROwner)) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
case 'detect':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
case 'simsimi':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.simi = isEnable
break   
case 'antiporno':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiporno = isEnable
break        
case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
case 'antidelete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break
case 'public':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
case 'antilink':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
case 'antilink2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break
case 'antiviewonce':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiviewonce = isEnable 
break
case 'modohorny':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modohorny = isEnable          
break
case 'modoadmin':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modoadmin = isEnable          
break    
case 'autosticker':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable          
break
case 'audios':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break
case 'restrict':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
case 'autoread':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.autoread2 = isEnable    
global.opts['autoread'] = isEnable  
break
case 'pconly':
case 'privateonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
case 'gconly':
case 'grouponly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
case 'swonly':
case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
case 'anticall':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiCall = isEnable
break
case 'antiprivado':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiPrivate = isEnable
break
case 'modejadibot':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.modejadibot = isEnable
break        
case 'antitoxic':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiToxic = isEnable
break
case 'antitraba':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTraba = isEnable
break
case 'antiarabes':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiArab = isEnable  
break
default:
if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage, { quoted: m })
throw false
}
conn.sendButton(m.chat, `⚙️ 𝐎𝐏𝐂𝐈𝐎𝐍: ${type} 
📊 𝐄𝐒𝐓𝐀𝐃𝐎: ${isEnable ? '𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾' : '𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾'}
📣 𝐏𝐀𝐑𝐀: ${isAll ? '𝙴𝚂𝚃𝙴 𝙱𝙾𝚃' : isUser ? '' : '𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃'}`, wm2, null, [[`${isEnable ? '✖️ OFF ✖️' : '✔️ ON ✔️'}`, `${isEnable ? `#disable ${type}` : `#enable ${type}`}`]], m)}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?[01])$/i
export default handler
