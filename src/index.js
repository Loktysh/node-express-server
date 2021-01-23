import 'dotenv/config';
var TelegramBot = require('node-telegram-bot-api');
var token = '1016574486:AAFP1RxH-o5ex7g6a0MdI572JhjbmVDJiU8';
var bot = new TelegramBot(token, { polling: true });

var fetch = require('node-fetch');
var cheerio = require('cheerio');
// var iconv  = require('iconv-lite');
var URL_5el = 'https://5element.by/products/701117-igrovaya-konsol-playstation-5-ps5';
var URL_21vek = 'https://www.21vek.by/game_consoles/playstation5ultrahdblurayps719398707_sony.html';
var URL_21vek_w_pad = 'https://www.21vek.by/game_consoles/ps5ps719398707ps5ps719399902_sony.html';
var inStock = '';
// https://www.21vek.by/game_consoles/playstation5ultrahdblurayps719398707_sony.html
// https://www.21vek.by/game_consoles/ps5ps719398707ps5ps719399902_sony.html

// bot.on('message', (msg) => {
//     const chatId = msg.chat.id;
//     bot.sendMessage(chatId, `${chatId}Привет, Друг!`);
// });
// function sendNotification (text) {
//     bot.sendMessage(347105662, `${text}`);
// }
function getPrice () {
    fetch(URL_5el)
    // console.log('ПОГНАЛИ');
    // var $ = cheerio.load(body),
    // av = $(".white-block").text().trim();
    // inStock = av.includes('Нет') ? 'Нет в наличии' : 'Есть в наличии';
    // console.log(inStock)
    .then(res => res.text())
    .then(text => {
        var $ = cheerio.load(text);
        av = $(".white-block").text().trim();
        // inStock = av.includes('Нет') ? False : True;
        if (!av.includes('Нет')) {
            bot.sendMessage(347105662, `${URL_5el}`);
            console.log(URL_5el)
        }
    })
    fetch(URL_21vek)
    .then(res => res.text())
    .then(text => {
        var $ = cheerio.load(text);
        av = $(".g-item-data").text().trim();
        // inStock = av.includes('Нет') ? False : True;
        if (!av.includes('нет')) {
            bot.sendMessage(347105662, `${URL_21vek}`);
            console.log(URL_21vek)
        }
    })
    fetch(URL_21vek_w_pad)
    .then(res => res.text())
    .then(text => {
        var $ = cheerio.load(text);
        av = $(".g-item-data").text().trim();
        // inStock = av.includes('Нет') ? False : True;
        if (!av.includes('нет')) {
            bot.sendMessage(347105662, `${URL_21vek_w_pad}`);
            console.log(URL_21vek_w_pa)
        }
    })
}
setInterval(() => getPrice(), 35000)
// getPrice()
    
    
