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

/* ===== v26: suara kanji benar, Level 21 (JFT-Basic dan N4), Kuis Kilat ===== */
(function(){
const rd=n=>Math.floor(Math.random()*n),sh=a=>a.map(x=>[Math.random(),x]).sort((p,q)=>p[0]-q[0]).map(p=>p[1]);
/* 1. Suara: kata berkanji dibaca dari bacaan romaji, bukan tebakan mesin suara */
let KR=null;
const romKana=r=>{const q=String(r||'').toLowerCase().replace(/ā/g,'aa').replace(/ī/g,'ii').replace(/ū/g,'uu').replace(/ē/g,'ee').replace(/ō/g,'ou').replace(/[^a-z ]/g,'').replace(/\s+/g,'');if(!q)return'';const k=r2k(q,false).replace(/n/g,'ん');return /[a-z]/.test(k)?'':k};
const buildKR=()=>{KR={};const add=(k,r)=>{if(!k||!/[一-龥]/.test(k)||KR[k])return;const rom=String(r||'');if(!/^[a-zāīūēō' ,.!?-]+$/i.test(rom))return;const kn=romKana(rom);if(kn)KR[k]=kn};
 ST.forEach(s=>(s.ch||[]).forEach(x=>{if(x)add(x.k,x.x||x.r)}));[ALLW,L3W,L4W,N5X,N4X].forEach(a=>(a||[]).forEach(x=>{if(x&&!x.v)add(x.k,x.r)}))};
try{const sp=speechSynthesis.speak.bind(speechSynthesis);speechSynthesis.speak=u=>{try{if(u&&u.text&&/[一-龥]/.test(u.text)){if(!KR)buildKR();const k=KR[u.text.trim()];if(k)u.text=k}}catch(e){}return sp(u)}}catch(e){}
/* 2. Level 21 */
LVN[21]='Level 21: Persiapan JFT-Basic dan N4';LVD[LVN[21]]='Kata kerja dan kata sifat N4, ungkapan percakapan, membaca pengumuman, dan angka untuk soal mendengar JFT-Basic.';
const pk=(n,a)=>PK(n,a.map(x=>{const[k,m]=x.split('|');return k+'|'+k2r(k)+'|'+m}).join(';'),{lv:21});
pk('N4: kata kerja penting',['たずねる|bertanya atau mengunjungi','つたえる|menyampaikan','みつける|menemukan','まにあう|keburu','なくす|menghilangkan','さがす|mencari','あつめる|mengumpulkan','かたづける|membereskan','くらべる|membandingkan','えらぶ|memilih','きめる|memutuskan','しらべる|menyelidiki','とどける|mengantar atau melaporkan','うけとる|menerima','ことわる|menolak','かえす|mengembalikan','なおす|memperbaiki','なおる|sembuh atau pulih','ふえる|bertambah','へる|berkurang','かわる|berubah','とまる|berhenti','でかける|pergi keluar','むかえる|menjemput']);
pk('N4: kata sifat dan keadaan',['あんぜん|aman','ひつよう|perlu','たいせつ|penting','じょうぶ|kuat atau awet','ていねい|sopan atau teliti','しんせつ|baik hati','ふべん|tidak praktis','べんり|praktis','とくい|mahir','にがて|kurang mahir','おなじ|sama','ちがう|berbeda','いそがしい|sibuk','ひま|senggang','おそい|lambat atau terlambat','むずかしい|sulit','あぶない|berbahaya','うるさい|berisik','すごい|luar biasa','たりない|kurang']);
pk('N4: kata benda sehari-hari',['よてい|rencana','ばしょ|tempat','やくそく|janji','ようじ|urusan','りゆう|alasan','もんだい|masalah','せつめい|penjelasan','しつもん|pertanyaan','へんじ|balasan','ねだん|harga','ばんごう|nomor','にもつ|barang bawaan','わすれもの|barang tertinggal','おとしもの|barang yang jatuh atau hilang','れいぎ|sopan santun','しゅうかん|kebiasaan','ぶんか|budaya','ルール|aturan','きそく|peraturan','れんらくさき|kontak yang dituju']);
pk('JFT: ungkapan percakapan',['しつれいですが、どちらさまですか|Maaf, dengan siapa ya?','ごめんください|Permisi (di depan pintu rumah orang)','おじゃまします|Permisi (saat masuk rumah)','おさきに しつれいします|Saya pulang duluan','おかえりなさい|Selamat datang kembali','ちょっと きいても いいですか|Boleh bertanya sebentar?','ほんとうですか|Benarkah?','そう おもいます|Saya pikir begitu','よく わかりません|Saya kurang paham','かもしれません|Mungkin','しかたが ありません|Mau bagaimana lagi','おまたせ しました|Maaf menunggu']);
pk('JFT: membaca pengumuman',['ほんじつは きゅうぎょう いたします|Hari ini kami tutup','たいふうの ため、でんしゃが おくれて います|Karena topan, kereta terlambat','ごみは あさ はちじまでに だして ください|Buang sampah sebelum jam 8 pagi','かならず てを あらって ください|Pastikan mencuci tangan','ここで しゃしんを とらないで ください|Jangan memotret di sini','よやくが ひつようです|Perlu reservasi','もうしこみの しめきりは らいしゅうの きんようびです|Batas pendaftaran Jumat depan','ざんぎょうは じぜんに ほうこく して ください|Lapor sebelumnya jika lembur','ふくろは ゆうりょうです|Kantong plastik berbayar','きょうの ごご、だんすいが あります|Sore ini ada air mati','おとしものは まどぐちに おとどけ ください|Barang hilang serahkan ke loket','かんしゃさいの ため へいてん します|Toko tutup karena acara']);
pk('JFT: angka, harga, dan waktu',['ごじはんに あいましょう|Mari bertemu jam 5.30','ひゃくにじゅうえんです|120 yen','さんぜんごひゃくえんです|3.500 yen','らいしゅうの もくようびです|Kamis depan','まいにち じゅうじかん はたらきます|Bekerja 10 jam tiap hari','いっかげつに よんかい やすみます|Libur 4 kali sebulan','ごごよじに おわります|Selesai jam 4 sore','じゅうがつ にじゅうごにちです|Tanggal 25 Oktober','にじゅうさんさいです|Umur 23 tahun','ろくじから はたらきます|Mulai bekerja jam 6','いっしゅうかんに ごにち はたらきます|Kerja 5 hari seminggu','ごぜん くじに きて ください|Datanglah jam 9 pagi']);
/* 3. Kuis Kilat */
const sec=document.createElement('section');sec.id='v-kilat';sec.hidden=true;$('v-lap').before(sec);
{const nav=$('tabs');nav.querySelector('[data-v=lap]').insertAdjacentHTML('beforebegin','<button data-v="kilat">Kuis Kilat</button>');nav.querySelectorAll('button').forEach(b=>b.onclick=()=>show(b.dataset.v))}
let Q=null,TM=null;const SEC=10;
const ok=x=>x&&x.k&&typeof x.m==='string'&&!x.j&&x.m.length<=48&&!/＿/.test(x.k)&&x.k.length<=26;
const pool=()=>{const seen={},a=[],take=(s)=>(s.ch||[]).forEach(x=>{if(ok(x)&&!seen[x.k]){seen[x.k]=1;a.push(x)}});ST.forEach((s,i)=>{if(!s.dlg&&(i<=S.stage+3||isDone(i)))take(s)});if(a.length<12)ST.forEach(s=>{if(!s.dlg)take(s)});return a};
const weak=()=>pool().filter(x=>{const h=(S.h||{})[x.k];return h&&h.w>h.c});
const mkQ=(mode,items)=>{const all=pool(),L=sh(items).slice(0,10).map(w=>{const key=mode==='balik'?'k':'m',o=[w];sh(all).forEach(x=>{if(o.length<4&&x[key]!==w[key]&&!o.some(y=>y[key]===x[key]))o.push(x)});return{w,o:sh(o)}});return{mode,l:L,i:0,sc:0,combo:0,best:0,t:SEC,pk:null,bad:[]}};
const stop=()=>{if(TM){clearInterval(TM);TM=null}};
const rec=()=>{S.kilat=S.kilat||{best:0,runs:0};return S.kilat};
function kMenu(){stop();Q=null;const r=rec(),n=pool().length;sec.innerHTML='<div class="card"><b>Kuis Kilat</b><div class="mu">10 soal, 10 detik per soal. Jawaban beruntun menambah poin. Kata diambil dari tahap yang sudah kamu pelajari.</div><div class="mu" style="margin-top:6px">Rekor: '+r.best+' poin · Dimainkan: '+r.runs+'x · Kata tersedia: '+n+'</div></div><div class="card tpc" data-km="baca"><div class="av2">読</div><div style="flex:1"><b>Baca</b><div class="mu">Lihat tulisan Jepang, pilih artinya</div></div></div><div class="card tpc" data-km="dengar"><div class="av2">聞</div><div style="flex:1"><b>Dengar</b><div class="mu">Hanya suara, pilih artinya. Melatih soal mendengar JFT-Basic</div></div></div><div class="card tpc" data-km="balik"><div class="av2">話</div><div style="flex:1"><b>Balik</b><div class="mu">Lihat arti, pilih kata Jepangnya</div></div></div><div class="card tpc" data-km="susun"><div class="av2">並</div><div style="flex:1"><b>Susun kalimat</b><div class="mu">Ketuk potongan kalimat sesuai urutan. Melatih susunan kalimat Jepang</div></div></div><div class="card tpc" data-km="lemah"><div class="av2">弱</div><div style="flex:1"><b>Kata lemah</b><div class="mu">Hanya kata yang sering kamu salah ('+weak().length+' kata)</div></div></div>'}
function kShow(){stop();const q=Q.l[Q.i],m=Q.mode;let h='<div class="card"><div style="display:flex;justify-content:space-between"><b>Soal '+(Q.i+1)+' dari '+Q.l.length+'</b><span class="mu">Poin '+Q.sc+' · Beruntun '+Q.combo+'</span></div><div class="bar"><i id="kt" style="width:100%"></i></div>';
 h+=m==='dengar'?'<div style="text-align:center;margin:18px 0"><button class="main" id="kpl">Putar suara</button></div>':m==='baca'?'<div style="text-align:center;font-size:30px;margin:16px 0">'+q.w.k+'</div>':'<div style="text-align:center;font-size:20px;margin:16px 0">'+q.w.m+'</div>';
 h+='<div id="kr"></div></div>'+q.o.map((x,i)=>'<button class="card tpc" style="width:100%;text-align:left" data-ko="'+i+'">'+(m==='balik'?x.k:x.m)+'</button>').join('');sec.innerHTML=h;Q.pk=null;Q.t=SEC;
 if(m==='dengar')speak(q.w.k);else if(m==='baca'&&false)speak(q.w.k);
 TM=setInterval(()=>{Q.t-=.1;const b=$('kt');if(b)b.style.width=Math.max(0,Q.t/SEC*100)+'%';if(Q.t<=0)kAns(-1)},100)}
function kAns(i){if(!Q||Q.pk!=null)return;stop();const q=Q.l[Q.i],good=i>=0&&q.o[i]===q.w;Q.pk=i;S.h=S.h||{};const hh=S.h[q.w.k]=S.h[q.w.k]||{c:0,w:0};
 if(good){Q.combo++;Q.best=Math.max(Q.best,Q.combo);Q.sc+=10+Math.min(Q.combo,5)*2+Math.round(Q.t);hh.c++}else{Q.combo=0;Q.bad.push(q.w);hh.w++}
 save();sec.querySelectorAll('[data-ko]').forEach((b,j)=>{if(q.o[j]===q.w)b.style.borderColor='#1a8f4d';else if(j===i)b.style.borderColor='#d1383d'});
 $('kr').innerHTML='<div class="mu" style="text-align:center"><b>'+(good?'Benar':(i<0?'Waktu habis':'Kurang tepat'))+'</b><br>'+q.w.k+' ('+(q.w.r||'')+') = '+q.w.m+'</div><div style="text-align:center;margin-top:8px"><button class="main" id="knx">'+(Q.i+1<Q.l.length?'Lanjut':'Lihat hasil')+'</button></div>';speak(q.w.k)}
function kEnd(){stop();const r=rec();r.runs++;r.last=today();const nb=Q.sc>r.best;if(nb)r.best=Q.sc;save();if(Q.sc>=100&&typeof confetti==='function'){try{confetti()}catch(e){}}
 sec.innerHTML='<div class="card"><b>Hasil</b><div style="font-size:34px;margin:8px 0">'+Q.sc+' poin</div><div class="mu">Benar '+(Q.l.length-Q.bad.length)+' dari '+Q.l.length+' · Beruntun terbaik '+Q.best+(nb?' · Rekor baru':'')+'</div></div>'+(Q.bad.length?'<div class="card"><b>Perlu diulang</b>'+Q.bad.map(w=>'<div class="mu" style="margin-top:6px"><a href="#" data-ks="'+w.k+'">'+w.k+'</a> ('+(w.r||'')+') = '+w.m+'</div>').join('')+'</div>':'')+'<div class="row"><button class="main" id="kag">Main lagi</button>'+(Q.bad.length?'<button class="ghost" id="krt">Ulangi yang salah</button>':'')+'<button class="ghost" id="kmn">Menu</button></div>';Q.bad=Q.bad.slice()}

let SQ=null;
const sPool=()=>pool().filter(x=>{const c=x.k.split(/\s+/);return c.length>=3&&c.length<=7});
function sNew(items){SQ={l:sh(items).slice(0,8),i:0,sc:0,bad:[]};sShow()}
function sShow(){stop();const w=SQ.l[SQ.i];SQ.c=sh(w.k.split(/\s+/).map((t,i)=>({t,i})));SQ.b=[];SQ.g=false;sDraw()}
function sDraw(res){const w=SQ.l[SQ.i];sec.innerHTML='<div class="card"><div style="display:flex;justify-content:space-between"><b>Susun '+(SQ.i+1)+' dari '+SQ.l.length+'</b><span class="mu">Poin '+SQ.sc+'</span></div><div style="text-align:center;margin:14px 0"><div class="mu">Susun kalimat yang artinya:</div><div style="font-size:18px;margin-top:6px">'+w.m+'</div></div><div style="min-height:48px;border:1px dashed #b9b6ad;border-radius:10px;padding:8px;display:flex;flex-wrap:wrap;gap:6px">'+SQ.b.map((x,j)=>'<button class="ghost" data-sb="'+j+'">'+x.t+'</button>').join('')+'</div><div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:10px">'+SQ.c.map((x,j)=>'<button class="ghost" data-sc="'+j+'">'+x.t+'</button>').join('')+'</div><div id="sr">'+(res||'')+'</div></div>'}
function sCheck(){const w=SQ.l[SQ.i],good=SQ.b.map(x=>x.t).join('')===w.k.replace(/\s+/g,'');SQ.g=true;if(good)SQ.sc+=15;else SQ.bad.push(w);S.h=S.h||{};const h=S.h[w.k]=S.h[w.k]||{c:0,w:0};good?h.c++:h.w++;save();
 sDraw('<div class="mu" style="text-align:center;margin-top:12px"><b>'+(good?'Benar':'Belum tepat. Urutan lain kadang juga wajar, tapi ini jawaban contohnya')+'</b><br>'+w.k+'<br>'+(w.r||'')+'</div><div style="text-align:center;margin-top:8px"><button class="main" id="snx">'+(SQ.i+1<SQ.l.length?'Lanjut':'Lihat hasil')+'</button></div>');speak(w.k)}
function sEnd(){const r=rec();r.runs++;r.last=today();r.susun=(r.susun||0)+1;save();sec.innerHTML='<div class="card"><b>Hasil susun kalimat</b><div style="font-size:34px;margin:8px 0">'+SQ.sc+' poin</div><div class="mu">Benar '+(SQ.l.length-SQ.bad.length)+' dari '+SQ.l.length+'</div></div>'+(SQ.bad.length?'<div class="card"><b>Perlu diulang</b>'+SQ.bad.map(w=>'<div class="mu" style="margin-top:6px">'+w.k+' = '+w.m+'</div>').join('')+'</div>':'')+'<div class="row"><button class="main" id="sag">Main lagi</button><button class="ghost" id="kmn">Menu</button></div>'}
sec.addEventListener('click',e=>{const t=e.target.closest('[data-km],[data-ko],#knx,#kag,#krt,#kmn,#kpl,[data-ks],[data-sc],[data-sb],#snx,#sag');if(!t)return;e.preventDefault();
 if(t.dataset.sc!=null){if(SQ.g)return;SQ.b.push(SQ.c.splice(+t.dataset.sc,1)[0]);SQ.c.length?sDraw():sCheck();return}
 if(t.dataset.sb!=null){if(SQ.g)return;SQ.c.push(SQ.b.splice(+t.dataset.sb,1)[0]);sDraw();return}
 if(t.id==='snx'){SQ.i++;SQ.i<SQ.l.length?sShow():sEnd();return}
 if(t.id==='sag'){const a=sPool();if(a.length>=3)sNew(a);else kMenu();return}
 if(t.dataset.km==='susun'){const a=sPool();if(a.length<3){sec.insertAdjacentHTML('afterbegin','<div class="card mu">Belum cukup kalimat. Selesaikan tahap kalimat dulu.</div>');return}sNew(a);return}
 if(t.dataset.km==='lemah'){const a=weak();if(a.length<4){sec.insertAdjacentHTML('afterbegin','<div class="card mu">Belum ada cukup kata lemah. Main dulu beberapa kuis, kata yang sering salah akan terkumpul di sini.</div>');return}Q=mkQ('baca',a);kShow();return}
 if(t.dataset.km){const a=pool();if(a.length<4){sec.insertAdjacentHTML('afterbegin','<div class="card mu">Belum cukup kata. Selesaikan beberapa tahap kosakata dulu.</div>');return}Q=mkQ(t.dataset.km,sh(a).slice(0,10));kShow()}
 else if(t.dataset.ko!=null)kAns(+t.dataset.ko);
 else if(t.id==='knx'){Q.i++;Q.i<Q.l.length?kShow():kEnd()}
 else if(t.id==='kpl')speak(Q.l[Q.i].w.k);
 else if(t.id==='kag')kMenu();
 else if(t.id==='krt'){const b=Q.bad,m=Q.mode;Q=mkQ(m,b);kShow()}
 else if(t.id==='kmn')kMenu();
 else if(t.dataset.ks)speak(t.dataset.ks)});
{const _s=show;show=function(v){if(v!=='kilat')stop();_s(v);const e=$('v-kilat');if(e)e.hidden=v!=='kilat';if(v==='kilat'){try{window.scrollTo(0,0)}catch(_){}kMenu()}}}
})();

/* ===== v27: telepon klinik/bank/cuti, kanji kerja, misi harian ===== */
(function(){
const B2=s=>s.trim().split('\n').map(l=>{const a=l.split('|'),k=a[0];return{k,r:k2r(k),x:a[1]||'',m:(a[2]||'').split('/').filter(Boolean),kw:(a[3]||'').split('/').filter(Boolean),h:a[4]||''}});
CALLT.push(
{id:'w-klinik',ic:'診',n:'Telepon klinik: buat janji berobat',who:'Resepsionis klinik',lv:'N4',noex:1,d:'Reservasi, sebut keluhan, pilih jam, nama dan kartu asuransi.',b:B2(`
はい、あおぞらクリニックです。|Klinik Aozora|おはようございます。よやくを したいんですが。|おはよう/よやく/予約|Selamat pagi, mau reservasi
どう されましたか。|Keluhannya apa?|きのうから ねつと のどの いたみが あります。|ねつ/のど/いたみ/きのう|Demam dan sakit tenggorokan sejak kemarin
はじめてですか。|Pertama kali berobat?|はい、はじめてです。/いいえ、まえに いったことが あります。|はい/いいえ/はじめて|Ya, pertama kali
きょうの ごご さんじは いかがですか。|Hari ini jam 3 sore bagaimana?|はい、だいじょうぶです。おねがいします。/しごとが あるので、ごご ろくじいごが いいです。|だいじょうぶ/おねがい/しごと/ろくじ|Ya, bisa
おなまえと ほけんしょうの ばんごうを おねがいします。|Nama dan nomor kartu asuransi|アリです。ほけんしょうは もって います。/アリです。ほけんしょうの ばんごうは いちにさんよんです。|アリ/ほけんしょう/保険証/ばんごう|Ari, saya bawa kartu asuransi
ほけんしょうを もって きて ください。おだいじに。|Bawa kartu asuransi. Semoga lekas sembuh|はい、わかりました。しつれいします。|はい/わかりました/しつれい|Baik, permisi
`)},
{id:'w-ginko',ic:'銀',n:'Telepon bank: kartu ATM hilang',who:'Petugas bank',lv:'N4',noex:1,d:'Melapor kartu hilang, memblokir, menanyakan penerbitan ulang.',b:B2(`
はい、ひのでぎんこうです。|Bank Hinode|おせわに なって おります。キャッシュカードを なくしました。|おせわ/キャッシュカード/なくし/失くし|Saya kehilangan kartu ATM
いつ なくしましたか。|Kapan hilangnya?|きのうの よるに えきで なくしたと おもいます。|きのう/えき/なくし|Sepertinya semalam di stasiun
すぐ カードを とめます。おなまえと せいねんがっぴを おねがいします。|Kartu saya blokir. Nama dan tanggal lahir?|アリです。せんきゅうひゃくきゅうじゅういちねん さんがつ じゅうごにちです。/アリです。|アリ/ねん/がつ/にち|Ari, tanggal lahir
ごじゅうしょは にほんの ごじゅうしょですか。|Alamatnya di Jepang?|はい、にほんの ごじゅうしょです。|はい/にほん/じゅうしょ|Ya
カードを とめました。さいはっこうの てつづきが ひつようです。|Sudah diblokir. Perlu penerbitan ulang|さいはっこうには どのくらい かかりますか。|さいはっこう/どのくらい/かかり|Berapa lama penerbitan ulang?
いっしゅうかん ぐらいです。まどぐちに きて ください。|Sekitar seminggu. Datang ke loket|わかりました。ありがとうございます。しつれいします。|わかりました/ありがとう/しつれい|Baik, terima kasih
`)},
{id:'w-yuukyuu',ic:'休',n:'Minta cuti berbayar ke atasan',who:'Yamada-buchou',lv:'N4',noex:1,d:'Meminta cuti untuk perpanjang izin tinggal, menjelaskan alasan dan serah terima kerja.',b:B2(`
はい、ヤマダです。|Ya, Yamada di sini|おつかれさまです。アリです。いま すこし よろしいですか。|おつかれ/アリ/よろしい|Maaf, apakah ada waktu sebentar?
どうしましたか。|Ada apa?|らいしゅうの かようびに ゆうきゅうを とりたいです。|ゆうきゅう/有給/かようび/とりたい|Saya ingin cuti Selasa depan
りゆうは なんですか。|Alasannya apa?|ざいりゅうカードの こうしんで にゅうこくかんりきょくに いきます。/ざいりゅうカードの こうしんで いきます。|ざいりゅう/こうしん/かんり|Memperpanjang kartu izin tinggal
そうですか。だいじな ようじですね。しごとの ひきつぎは だいじょうぶですか。|Urusan penting ya. Serah terima kerja aman?|はい、まえの ひに じゅんび して おきます。|はい/じゅんび/ひきつぎ/まえ|Ya, saya siapkan sebelumnya
わかりました。しんせいしょを だして ください。|Baik. Serahkan formulir pengajuan|はい、きょう じゅうに だします。ありがとうございます。|はい/だします/ありがとう|Ya, hari ini saya serahkan
きを つけて いって きて ください。|Hati-hati di jalan|はい、ありがとうございます。しつれいします。|はい/ありがとう/しつれい|Terima kasih, permisi
`)});
const pkr=(n,a)=>PK(n,a.join(';'),{lv:21});
pkr('Kanji kerja: tempat dan orang',['仕事|shigoto|pekerjaan','会社|kaisha|perusahaan','工場|koujou|pabrik','畑|hatake|ladang','店|mise|toko','駅|eki|stasiun','病院|byouin|rumah sakit','銀行|ginkou|bank','事務所|jimusho|kantor','部長|buchou|manajer','社員|shain|karyawan','給料|kyuuryou|gaji','残業|zangyou|lembur','休み|yasumi|libur','出勤|shukkin|masuk kerja']);
pkr('Kanji hari dan waktu',['今日|kyou|hari ini','明日|ashita|besok','昨日|kinou|kemarin','毎日|mainichi|setiap hari','午前|gozen|pagi (AM)','午後|gogo|sore (PM)','今週|konshuu|minggu ini','来週|raishuu|minggu depan','先週|senshuu|minggu lalu','今月|kongetsu|bulan ini','来月|raigetsu|bulan depan','月曜日|getsuyoubi|hari Senin','土曜日|doyoubi|hari Sabtu','日曜日|nichiyoubi|hari Minggu']);
pkr('Kanji rambu dan peringatan',['入口|iriguchi|pintu masuk','出口|deguchi|pintu keluar','非常口|hijouguchi|pintu darurat','禁止|kinshi|dilarang','立入禁止|tachiirikinshi|dilarang masuk','注意|chuui|perhatian','危険|kiken|bahaya','営業中|eigyouchuu|sedang buka','準備中|junbichuu|sedang persiapan','定休日|teikyuubi|hari libur tetap','禁煙|kinen|dilarang merokok','駐車場|chuushajou|tempat parkir','受付|uketsuke|resepsi atau loket','会議室|kaigishitsu|ruang rapat','休憩|kyuukei|istirahat']);
/* Misi hari ini di Beranda */
{const _s=show;show=function(v){_s(v);if(v!=='home')return;setTimeout(()=>{try{const e=$('v-home');if(!e)return;let m=$('misi27');if(!m){m=document.createElement('div');m.id='misi27';e.prepend(m)}
 const t=today(),dd=(S.days||{})[t]||{c:0,w:0},n=dd.c+dd.w,goal=S.goal14||20,cl=(S.calls||[]).some(c=>{try{return ymd(new Date(c.ts))===t}catch(_){return false}}),kl=(S.kilat||{}).last===t;
 const it=[[n>=goal,'Jawab '+goal+' soal tahap ('+Math.min(n,goal)+'/'+goal+')','peta'],[kl,'Main satu Kuis Kilat','kilat'],[cl,'Satu telepon kerja','telepon']],dn=it.filter(x=>x[0]).length;
 m.innerHTML='<div class="card" style="margin-bottom:10px"><b>Misi hari ini</b><span class="mu" style="float:right">'+dn+' dari 3</span><div class="bar"><i style="width:'+Math.round(dn/3*100)+'%"></i></div>'+it.map(x=>'<div class="mu" style="margin-top:8px;display:flex;justify-content:space-between;gap:8px"><span>'+(x[0]?'Selesai: ':'')+x[1]+'</span>'+(x[0]?'':'<a href="#" data-mg="'+x[2]+'">Mulai</a>')+'</div>').join('')+(dn===3?'<div class="mu" style="margin-top:8px"><b>Misi tuntas. Besok lanjut lagi.</b></div>':'')+'</div>';
 m.querySelectorAll('[data-mg]').forEach(a=>a.onclick=ev=>{ev.preventDefault();show(a.dataset.mg)})}catch(_){}},60)}}
})();
