const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = imagen4
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let name = await conn.getName(m.sender)
let str = `
*γπ π·πΎπ»π° _${name}_ πε½‘*

${(conn.user.jid == global.conn.user.jid ? '' : `Jadibot de: https://wa.me/${global.conn.user.jid.split`@`[0]}`)}

*<ππππ ππππππ/>*
*- π΄ππ²ππΈπ±π΄ π»π°π ππΈπΆππΈπ΄π½ππ΄π πΏπ°π»π°π±ππ°π πΎ π΅ππ°ππ΄π ππΈπ½ π½πΈπ½πΆππ½ πΏππ΄π΅πΈπΉπΎ (#, /, *, .)*

Β° ΰΆ¬βπ _Quien es tu sempai botsito 7w7_
Β° ΰΆ¬βπ _Te diagnostico con gay_
Β° ΰΆ¬βπ _A nadie le importa_
Β° ΰΆ¬βπ _Fiesta del admin_
Β° ΰΆ¬βπ _Fiesta del administrador_ 
Β° ΰΆ¬βπ _Vivan los novios_
Β° ΰΆ¬βπ _Feliz cumpleaΓ±os_
Β° ΰΆ¬βπ _Noche de paz_
Β° ΰΆ¬βπ _Buenos dias_
Β° ΰΆ¬βπ _Buenos tardes_
Β° ΰΆ¬βπ _Buenos noches_
Β° ΰΆ¬βπ _Audio hentai_
Β° ΰΆ¬βπ _Chica lgante_
Β° ΰΆ¬βπ _Feliz navidad_
Β° ΰΆ¬βπ _Vete a la vrg_
Β° ΰΆ¬βπ _Pasa pack Bot_
Β° ΰΆ¬βπ _Atencion grupo_
Β° ΰΆ¬βπ _Marica quien_
Β° ΰΆ¬βπ _Murio el grupo_
Β° ΰΆ¬βπ _Oh me vengo_
Β° ΰΆ¬βπ _tio que rico_
Β° ΰΆ¬βπ _Viernes_
Β° ΰΆ¬βπ _Baneado_
Β° ΰΆ¬βπ _Sexo_
Β° ΰΆ¬βπ _Hola_
Β° ΰΆ¬βπ _Un pato_
Β° ΰΆ¬βπ _Nyanpasu_
Β° ΰΆ¬βπ _Te amo_
Β° ΰΆ¬βπ _Yamete_
Β° ΰΆ¬βπ _BaΓ±ate_
Β° ΰΆ¬βπ _Es puto_
Β° ΰΆ¬βπ _La biblia_
Β° ΰΆ¬βπ _Onichan_
Β° ΰΆ¬βπ _Mierda de Bot_
Β° ΰΆ¬βπ _Siuuu_
Β° ΰΆ¬βπ _Epico_
Β° ΰΆ¬βπ _Shitpost_
Β° ΰΆ¬βπ _Rawr_
Β° ΰΆ¬βπ _UwU_
Β° ΰΆ¬βπ _:c_
Β° ΰΆ¬βπ _a_
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, 'https://www.instagram.com/_777charly', 'πΈπ½πππ°πΆππ°πΌ ', null, null, [
['πΌπ΄π½π πΏππΈπ½π²πΈπΏπ°π»', '.menu']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menu2|audios|menΓΊ2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|audio|keyaudio|keyaudios)$/i
handler.fail = null
export default  handler
