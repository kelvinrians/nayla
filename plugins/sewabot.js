let handler = async m => m.reply(`
╭─「 RENT BOT 」
│
│ > Harga :
│• 5K / Minggu
│• 20K / Bulan
│• 30K / Permanent
│
│ > Pembayaran :
│• DANA : 085601142988
│• TRI : 085601142988
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['sewa']
handler.tags = ['info']
handler.command = /^se(wa|wabot)$/i

module.exports = handler
