const __filename = import.meta.filename;
// Timezone
process.env.TZ = 'Asia/Jakarta';

// Pengaturan Bot disini Semua
global.owner = ["6289654123485"]; // wajib di isi tidak boleh kosong
global.mods = ["6289654123485"]; // wajib di isi tidak boleh kosong
global.prems = ["6289654123485"]; // wajib di isi tidak boleh kosong
global.nameowner = "Mail"; // wajib di isi tidak boleh kosong
global.numberowner = "6289654123485"; // wajib di isi tidak boleh kosong
global.mail = "support@tioprm.eu.org"; // wajib di isi tidak boleh kosong
global.gc = "https://chat.whatsapp.com/Lh2mMNkKKNs5dT6W82xhA7?s=cl&p=a&ilr=1"; // wajib di isi tidak boleh kosong
global.instagram = "https://instagram.com/lesmaill"; // wajib di isi tidak boleh kosong
global.wm = "© PanjenenganBOT"; // isi nama bot atau nama kalian
global.wait = "_*Tunggu sedang di proses...*_"; // ini pesan simulasi loading
global.eror = "_*Server Error*_"; // ini pesan saat terjadi kesalahan
global.stiker_wait = "*⫹⫺ Stiker sedang dibuat...*"; // ini pesan simulasi saat loading pembuatan sticker
global.thumb = "https://telegra.ph/file/3a34bfa58714bdef500d9.jpg";
global.packname = "Made With"; // watermark stikcker packname
global.author = "Bot Panjenengan"; // watermark stikcker author
global.maxwarn = "5"; // Peringatan maksimum Warn




// APIKEY INI WAJIB UNTUK DI ISI! //
global.btc = "a69b5933";



// AKSESKEY INI DI ISI JIKA DIPERLUKAN JADI TIDAK WAJIB DI ISI! (e.g suno ai (ai music ) & fitur prem lainnya//
global.aksesKey = "YOUR_AKSESKEY_HERE";

// Tidak boleh diganti atau di ubah
global.APIs = {
  btc: "https://api.botcahx.eu.org",
};

//Tidak boleh diganti atau di ubah
global.APIKeys = {
  "https://api.botcahx.eu.org": global.btc,
};

import fs from 'fs';
import chalk from 'chalk';
import { pathToFileURL } from 'url';
let file = import.meta.filename;
fs.watchFile(file, async () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update 'config.js'"));
  await import(pathToFileURL(file).href + '?update=' + Date.now());
});
