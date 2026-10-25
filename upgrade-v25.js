/* upgrade-v25.js: telepon kerja tambahan, tingkat latihan, variasi nama, Level 20 */
(function(){
const rd=n=>Math.floor(Math.random()*n);
const B2=s=>s.trim().split('\n').map(l=>{const a=l.split('|'),k=a[0];return{k,r:k2r(k),x:a[1]||'',m:(a[2]||'').split('/').filter(Boolean),kw:(a[3]||'').split('/').filter(Boolean),h:a[4]||''}});
/* ---- 4 telepon kerja baru ---- */
CALLT.push(
{id:'w-hotel',ic:'宿',n:'Menjawab telepon reservasi hotel',who:'Tamu (Tanaka-san)',lv:'N4',noex:1,d:'Kamu yang menjawab telepon: terima pesanan kamar, sebut harga, ulangi nomor telepon.',b:B2(`
もしもし、へやを よやくしたいんですが。|Halo, saya ingin memesan kamar|はい、ありがとうございます。さくらホテルでございます。|さくら/ホテル/ございます/ありがとう|Terima kasih, Hotel Sakura
らいしゅうの きんようびから ふたりで にはく したいです。|Jumat depan, berdua, dua malam|かしこまりました。ふたりさまで にはくですね。しょうしょう おまちください。|かしこまりました/ふたり/にはく/おまち|Baik, dua orang dua malam
ツインの へやは ありますか。|Ada kamar twin?|はい、ございます。ひとへや いっぱく いちまんにせんえんです。|ございます/いっぱく/えん/はい|Ada, 12.000 yen per malam
ちょうしょくは ついていますか。|Termasuk sarapan?|はい、ちょうしょくつきです。ごぜん ななじから じゅうじまでです。|ちょうしょく/つき/ななじ/じ|Ya, jam 7 sampai 10
わかりました。おねがいします。|Baik, tolong pesankan|ありがとうございます。おなまえと おでんわばんごうを おねがいします。|なまえ/おなまえ/でんわ/ばんごう|Nama dan nomor telepon?
たなかです。でんわばんごうは ぜろはちぜろの ごよんさんにの いちにさんよんです。|Tanaka, nomor 080-5432-1234|ふくしょう いたします。ぜろはちぜろの ごよんさんにの いちにさんよんですね。|ふくしょう/ぜろ/ごよん/いちにさんよん|Saya ulangi nomornya
はい、そうです。よろしく おねがいします。|Ya, benar. Mohon bantuannya|ありがとうございます。おまちして おります。しつれい いたします。|ありがとう/おまち/しつれい|Terima kasih, kami tunggu
`)},
{id:'w-shift',ic:'替',n:'Telepon tukar shift ke manajer toko',who:'Mori-san (manajer)',lv:'N4',noex:1,d:'Minta ganti jadwal kerja karena ke rumah sakit, tawarkan hari lain.',b:B2(`
はい、コンビニさくらの もりです。|Minimarket Sakura, Mori|おつかれさまです。アリです。シフトの ことで おでんわしました。|おつかれ/アリ/シフト|Saya Ari, soal shift
どうしましたか。|Ada apa?|らいしゅうの もくようびに びょういんへ いかなければ なりません。|もくよう/びょういん/いかなければ/いく|Kamis depan saya harus ke rumah sakit
それは たいへんですね。シフトを かえたいんですか。|Wah. Mau mengganti shift?|はい、できれば ほかの ひに かえて いただけませんか。|はい/かえ/ほか/いただけ|Ya, bisa diganti hari lain?
どの ひが いいですか。|Hari apa yang cocok?|きんようびか どようびなら だいじょうぶです。|きんよう/どよう/だいじょうぶ|Jumat atau Sabtu bisa
どようびは ひとが たりないので、どようびに してください。じかんは おなじで いいですか。|Sabtu kurang orang, jadi Sabtu saja. Jam sama?|はい、おなじ じかんで だいじょうぶです。ありがとうございます。|おなじ/じかん/だいじょうぶ/ありがとう|Ya, jam sama
じゃあ、シフトひょうを なおして おきます。|Baik, saya perbaiki tabel shift|ありがとうございます。ごめいわくを おかけして すみません。しつれいします。|ありがとう/めいわく/しつれい|Terima kasih, maaf merepotkan
`)},
{id:'w-gaji',ic:'給',n:'Telepon bagian personalia: slip gaji',who:'Watanabe-san (somu-bu)',lv:'N4',noex:1,d:'Menanyakan slip gaji yang belum diterima dan kapan gaji dibayar.',b:B2(`
はい、エービーシーかぶしきがいしゃ、そうむぶの わたなべです。|Bagian umum ABC, Watanabe|おせわに なって おります。こうじょうの アリと もうします。きゅうりょうの ことで おたずねしたいです。|おせわ/アリ/きゅうりょう/給料|Saya Ari, soal gaji
はい、どう いった ことでしょうか。|Ya, ada apa?|さきげつの きゅうりょうめいさいを まだ もらって いません。|めいさい/明細/もらって/さきげつ|Slip gaji bulan lalu belum saya terima
そうですか。しゃいんばんごうを おしえて いただけますか。|Boleh sebutkan nomor karyawan?|しゃいんばんごうは ごさんにいちです。|しゃいんばんごう/ばんごう/です|Nomor karyawan 5321
かくにん します。……ざんぎょうだいが まだ はんえいされて いませんでした。らいげつの きゅうりょうに はいります。|Saya cek. Uang lembur belum tercatat, masuk bulan depan|わかりました。らいげつの きゅうりょうびは いつですか。|わかりました/いつ/きゅうりょうび/らいげつ|Baik, kapan tanggal gajian?
まいつき にじゅうごにちです。ぎんこうに ふりこみます。|Tiap bulan tanggal 25, ditransfer ke bank|ありがとうございます。めいさいは メールで おくって いただけますか。|メール/おくって/めいさい|Terima kasih, bisa kirim slip lewat email?
はい、おくります。|Baik, saya kirim|おねがいします。ありがとうございました。しつれいします。|おねがい/ありがとう/しつれい|Mohon bantuannya
`)},
{id:'w-kaigo2',ic:'介',n:'Lapor ke perawat: lansia terjatuh',who:'Perawat (Nurse Station)',lv:'N4',noex:1,d:'Melapor cepat dan jelas saat penghuni terjatuh: siapa, di mana, kondisi.',b:B2(`
はい、ひまわりホームの ナースステーションです。|Nurse station Himawari|アリです。さんごうしつの たなかさんが ころびました。|アリ/ころび/さんごうしつ|Saya Ari, Tanaka di kamar 3 terjatuh
ころびましたか。いしきは ありますか。|Terjatuh? Apakah sadar?|はい、いしきは あります。おなかが いたいと いって います。|いしき/あります/いたい|Sadar, bilang perutnya sakit
あたまを うちましたか。|Apakah kepalanya terbentur?|いいえ、あたまは うって いません。こしを うちました。|あたま/こし/いいえ/うって|Tidak, pinggangnya yang terbentur
うごかさないで ください。すぐ いきます。|Jangan digerakkan. Saya segera ke sana|はい、うごかさずに そばに います。|うごか/そば/はい|Baik, saya menemani di sampingnya
ごかぞくへの れんらくは わたしが します。あとで ほうこくしょを かいて ください。|Keluarga saya yang hubungi. Nanti tulis laporan|わかりました。ほうこくしょは しごとの あとで かきます。|わかりました/ほうこくしょ/かき|Baik, laporan saya tulis nanti
おちついて たいおう して ください。|Tenang dan tangani dengan baik|はい、おちついて たいおうします。|はい/おちついて|Baik
`)});
/* ---- tingkat latihan + variasi nama ---- */
const PS={pemula:{rom:true,arti:true,slow:true,spd:'0.75',hard:false},biasa:{rom:true,arti:false,slow:false,spd:'0.95',hard:false},mahir:{rom:false,arti:false,slow:false,spd:'1.15',hard:true}};
const _lb=lobby;lobby=function(){_lb();const v=$('v-telepon');if(!v)return;const cur=CSET.hard?'mahir':(CSET.slow?'pemula':'biasa'),h=[...v.querySelectorAll('h2')].find(x=>x.textContent==='Pilih topik');
 if(h)h.insertAdjacentHTML('beforebegin','<div class="card" style="margin-top:10px"><b>Tingkat latihan</b><div class="mu">Pemula: semua bantuan, suara pelan. Menengah: tanpa arti terus-menerus. Mahir: tanpa romaji dan arti, suara cepat, gangguan telepon lebih sering. Mahir paling mirip telepon asli.</div><div class="seg">'+[['pemula','Pemula'],['biasa','Menengah'],['mahir','Mahir']].map(a=>'<button data-ps="'+a[0]+'" class="'+(cur===a[0]?'on':'')+'">'+a[1]+'</button>').join('')+'</div></div>');
 v.querySelectorAll('[data-ps]').forEach(b=>b.onclick=()=>{Object.assign(CSET,PS[b.dataset.ps]);saveCS();lobby()})};
const RN=[['ヤマダ','Yamada'],['タナカ','Tanaka'],['サトウ','Sato'],['スズキ','Suzuki'],['イトウ','Ito'],['コバヤシ','Kobayashi']];
const _sc=startCall;startCall=function(t){if(t&&t.who&&/Yamada/.test(t.who)&&t.b&&t.b.length){const n=RN[rd(RN.length)];t=Object.assign({},t,{who:t.who.replace('Yamada',n[1]),b:t.b.map(b=>Object.assign({},b,{k:b.k.replace(/ヤマダ/g,n[0]),r:b.r.replace(/yamada/gi,n[1].toLowerCase()),x:b.x.replace(/Yamada/g,n[1])}))})}_sc(t)};
/* ---- Level 20 ---- */
LVN[20]='Level 20: Hidup dan kerja di Jepang';LVD[LVN[20]]='Gaji dan kontrak, rambu, bencana, wawancara, bank dan kantor kota, keigo dasar.';
const pk=(n,a)=>PK(n,a.map(x=>{const[k,m]=x.split('|');return k+'|'+k2r(k)+'|'+m}).join(';'),{lv:20});
pk('Gaji dan kontrak',['きほんきゅう|gaji pokok','ざんぎょうだい|uang lembur','てあて|tunjangan','てどり|gaji bersih yang diterima','こうじょ|potongan gaji','しゃかいほけん|jaminan sosial','しょとくぜい|pajak penghasilan','じゅうみんぜい|pajak penduduk','きゅうりょうめいさい|slip gaji','ボーナス|bonus','ろうどうけいやくしょ|surat kontrak kerja','けいやくこうしん|perpanjangan kontrak','きゅうりょうび|tanggal gajian','ふりこみ|transfer bank']);
pk('Rambu dan pengumuman',['たちいりきんし|dilarang masuk','えいぎょうちゅう|sedang buka','じゅんびちゅう|sedang persiapan','ていきゅうび|hari libur tetap toko','きんえん|dilarang merokok','ちゅうしゃきんし|dilarang parkir','うんてんみあわせ|operasi kereta ditunda','ふつう|kereta lokal','きゅうこう|kereta ekspres','かいさつ|gerbang tiket','のりば|tempat naik','ひじょうてい|rem darurat']);
pk('Bencana dan darurat',['じしん|gempa bumi','つなみ|tsunami','たいふう|topan','けいほう|peringatan','ひなんじょ|tempat evakuasi','ていでん|mati listrik','だんすい|air mati','ぼうさい|pencegahan bencana','ぼうさいぶくろ|tas siaga bencana','ひじょうしょく|makanan darurat','あんぴ|kabar keselamatan','ひなんくんれん|latihan evakuasi']);
pk('Kalimat: wawancara kerja',['はじめまして、アリと もうします|Perkenalkan, saya Ari','インドネシアから まいりました|Saya datang dari Indonesia','にほんごは エヌよんを もって います|Saya punya JLPT N4','のうぎょうの けいけんが さんねん あります|Saya punya pengalaman pertanian 3 tahun','まじめに はたらきます|Saya akan bekerja sungguh-sungguh','ざんぎょうも できます|Saya juga bisa lembur','しゅうまつも はたらけます|Akhir pekan juga bisa bekerja','いつからでも はたらけます|Saya bisa mulai kapan saja','はじめは わからない ことが おおいですが、がんばります|Awalnya banyak yang belum paham, tapi saya berusaha','この かいしゃで せいちょう したいです|Saya ingin berkembang di perusahaan ini','しつもんが ひとつ あります|Ada satu pertanyaan','よろしく おねがい いたします|Mohon bantuannya']);
pk('Kalimat: bank, kantor kota, pos',['こうざを ひらきたいです|Saya ingin membuka rekening','ざいりゅうカードと パスポートを もって きました|Saya bawa kartu izin tinggal dan paspor','はんこが ないので サインでも いいですか|Tidak punya stempel, boleh tanda tangan?','かいがいそうきんを したいです|Saya ingin kirim uang ke luar negeri','てすうりょうは いくらですか|Biaya adminnya berapa?','てんにゅうとどけを だしに きました|Saya datang menyerahkan laporan pindah alamat','じゅうみんひょうが ひつようです|Perlu surat keterangan domisili','ばんごうふだを とって ください|Silakan ambil nomor antrean','まどぐちは どこですか|Loketnya di mana?','この しょるいの かきかたを おしえて ください|Tolong ajari cara mengisi dokumen ini','じゅうしょが かわりました|Alamat saya berubah','ゆうびんきょくで にもつを おくります|Saya kirim paket di kantor pos']);
P('Keigo dasar','おきゃくさまが ＿|いらっしゃいました|Tamu telah datang|おきゃくさまがいらっしゃいました;わたしは アリと ＿|もうします|Nama saya Ari|わたしはアリともうします;こちらを ごらん＿|ください|Silakan lihat ini|こちらをごらんください;わたしが ごあんない ＿|いたします|Saya yang akan memandu|わたしがごあんないいたします;せんせいが そう ＿|おっしゃいました|Bapak guru berkata begitu|せんせいがそうおっしゃいました;どうぞ ＿|めしあがって ください|Silakan makan|どうぞめしあがってください;あした おうかがい ＿|します|Besok saya berkunjung|あしたおうかがいします',{lv:20});
})();
