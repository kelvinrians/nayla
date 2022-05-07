let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *Pulsa:* [085601142988]
┣➥ *OVo:* [085601142988]
┣➥ *Dana:* [085601142988]
┣➥ *Saweria:* [https://saweria.co/Scaff]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/6285601142988*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
