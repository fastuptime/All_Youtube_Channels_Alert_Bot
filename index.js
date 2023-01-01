const fastyt = require('fastyt');
const db = require('croxydb');
const cron = require('node-cron');

cron.schedule('*/2 * * * *', () => {
    let kanal = db.fetch('kanallar');
    if(!kanal) return;
    kanal.forEach(x => {
        fastyt(x.id, x.webhook_url);
    });
    console.log("Son videolar kontrol ediliyor... ");
});