/* ===== v14: telepon kerja nyata, kejadian acak, aizuchi, kecepatan, Level 15 ===== */
(function(){
const DK=['ぜろ','いち','に','さん','よん','ご','ろく','なな','はち','きゅう'],HS=['','いち','に','さん','よ','ご','ろく','しち','はち','く','じゅう','じゅういち'];
const rd=n=>Math.floor(Math.random()*n);
const B2=s=>s.trim().split('\n').map(l=>{const a=l.split('|'),k=a[0];return{k,r:k2r(k),x:a[1]||'',m:(a[2]||'').split('/').filter(Boolean),kw:(a[3]||'').split('/').filter(Boolean),h:a[4]||''}});
const N0=CALLT.length;
CALLT.push(
{id:'w-sakit',ic:'休',n:'Telepon izin sakit ke atasan',who:'Yamada-buchou',lv:'N4',noex:1,d:'Kamu yang menelepon pagi hari: demam, minta izin, janji kabari lagi.',b:B2(`
はい、ヤマダです。|Ya, Yamada di sini|おはようございます。アリです。/おつかれさまです。アリです。|おはよう/おつかれ/アリ|Selamat pagi, saya Ari
どうしましたか。こんな じかんに。|Ada apa? Jam segini|きょうは ねつが あるので、やすませて いただきたいです。/ゆうべから ねつが あって、やすみたいです。|ねつ/熱/やす/休|Saya demam, mohon izin libur
そうですか。なんどぐらい ありますか。|Begitu. Kira-kira berapa derajat?|さんじゅうはちど ごぶです。/さんじゅうきゅうどです。|ど/度|38,5 derajat
びょういんには いきますか。|Akan ke rumah sakit?|はい、ごぜんちゅうに いきます。/はい、いまから いきます。|いきます/行きます/びょういん/病院|Ya, pagi ini
きょうの しごとは ほかの ひとに たのんで おきます。しんぱいしないで ください。|Pekerjaan hari ini saya minta orang lain|ありがとうございます。ごめいわくを おかけして もうしわけ ありません。|ありがとう/めいわく/迷惑/もうしわけ/すみません|Terima kasih, maaf merepotkan
あしたは どうしますか。|Besok bagaimana?|あしたの あさ、また れんらくします。/よく なったら しゅっきんします。|れんらく/連絡/あした/明日/しゅっきん/出勤|Besok pagi saya kabari lagi
びょういんで しんだんしょを もらって きてください。|Tolong bawa surat dokter|はい、わかりました。もらって きます。|わかりました/分かりました/もらって/はい|Baik, akan saya bawa
おだいじに。|Semoga lekas sembuh|ありがとうございます。しつれいします。|ありがとう/しつれい|Terima kasih, permisi
`)},
{id:'w-chikoku',ic:'遅',n:'Telepon terlambat karena kereta',who:'Yamada-buchou',lv:'N4',noex:1,d:'Memberi tahu terlambat, perkiraan tiba, posisi sekarang.',b:B2(`
はい、ヤマダです。|Ya, Yamada di sini|おはようございます。アリです。|おはよう/アリ|Selamat pagi, saya Ari
どうしましたか。|Ada apa?|でんしゃが とまって いて、おくれます。もうしわけ ありません。|でんしゃ/電車/おくれ/遅れ/とまって/止まって|Kereta berhenti, saya terlambat
そうですか。なんじごろに つきますか。|Begitu. Kira-kira jam berapa sampai?|くじはんごろに つきます。/いちじかんぐらい おくれます。|じ/時/はん/半/じかん/時間/つき|Sekitar jam 9.30
いま どこに いますか。|Sekarang di mana?|しんじゅくえきに います。/えきの ホームに います。|えき/駅/います/ホーム|Di stasiun Shinjuku
ほかの ろせんで こられませんか。|Tidak bisa lewat jalur lain?|バスで いきます。/ちょっと まって みます。|バス/いきます/行きます/まって/待って|Saya naik bus
ちこくの りゆうは あとで しょるいに かいて ください。|Alasan terlambat tulis di formulir nanti|はい、わかりました。ほんとうに すみません。|わかりました/分かりました/すみません/はい|Baik, maaf sekali
きを つけて きてください。|Hati-hati ya|はい、しつれいします。/ありがとうございます。しつれいします。|はい/しつれい/ありがとう|Baik, permisi
`)},
{id:'w-tori',ic:'取',n:'Menelepon perusahaan: minta disambungkan',who:'Resepsionis Sato-san',lv:'N4',noex:1,d:'Menyebut nama, minta Tanaka-san, titip pesan, nomor kontak.',b:B2(`
はい、エービーシーかぶしきがいしゃでございます。|Perusahaan ABC, selamat pagi|おせわに なって おります。アリと もうします。/おつかれさまです。アリと もうします。|おせわ/アリ/もうします/申します|Terima kasih atas kerja samanya, saya Ari
ごようけんを おうかがい いたします。|Ada keperluan apa?|えいぎょうぶの たなかさんを おねがいします。/たなかさんは いらっしゃいますか。|たなか/おねがい/お願い/いらっしゃい|Tolong sambungkan ke Tanaka
しょうしょう おまちください。……もうしわけ ございません、ただいま せきを はずして おります。|Maaf, Tanaka sedang tidak di tempat|そうですか。なんじごろ おもどりですか。|なんじ/もどり/戻り/そう|Kira-kira kembali jam berapa?
さんじごろに もどる よていです。|Rencananya kembali jam tiga|では、さんじごろに また おでんわします。/では、でんごんを おねがいできますか。|では/また/でんわ/電話/でんごん/伝言|Saya telepon lagi jam tiga / titip pesan
かしこまりました。おなまえと おでんわばんごうを おねがいします。|Baik. Nama dan nomor telepon?|アリです。ぜろきゅうぜろ の いちにさんよん の ごろくななはちです。/アリです。でんわばんごうは ぜろきゅうぜろの いちにさんよんの ごろくななはちです。|アリ/ぜろ/きゅう/いち|Nama dan nomor telepon
アリさまですね。ふくしょう いたします。たなかに つたえて おきます。|Saya ulangi, akan saya sampaikan|はい、よろしく おねがいします。|はい/よろしく/おねがい|Ya, mohon bantuannya
しつれい いたします。|Permisi|しつれいします。|しつれい|Permisi
`)},
{id:'w-paket',ic:'荷',n:'Kurir menelepon: antar ulang paket',who:'Kurir Suzuki-san',lv:'N5-N4',noex:1,d:'Kamu diteleponi: konfirmasi nama, jadwal antar ulang, alamat.',b:B2(`
もしもし、うんそうがいしゃの すずきです。アリさんの おでんわですか。|Halo, kurir Suzuki. Apakah ini Ari?|はい、アリです。/はい、そうです。|はい/アリ/そう|Ya, saya Ari
にもつを おとどけに きましたが、ふざいでした。|Saya antar paket tapi tidak ada orang|すみません、いま しごとで いえに いません。|すみません/いま/いません/しごと|Maaf, saya sedang kerja
さいはいたつは いつが いいですか。|Kapan sebaiknya diantar ulang?|きょうの よる、はちじごろは どうですか。/あしたの ごご、おねがいします。|よる/夜/ごご/午後/あした/明日/じ/時|Malam ini sekitar jam 8
はちじですね。ごごろくじから はちじの じかんたいに なります。|Jam 8 ya, slot jam 6 sampai 8 malam|それで おねがいします。/はい、だいじょうぶです。|おねがい/お願い/だいじょうぶ/大丈夫/はい|Baik, itu saja
ごじゅうしょは かわって いませんか。|Alamat tidak berubah?|はい、かわって いません。/いいえ、あたらしい じゅうしょです。|はい/いいえ/かわって/変わって|Tidak berubah
おるすの ばあいは おきはいでも よろしいですか。|Kalau tidak ada, boleh ditaruh di depan pintu?|はい、おきはいで けっこうです。/いいえ、ちゃんと うけとりたいです。|けっこう/結構/おきはい/置き配/うけとり/受け取り|Ya, boleh ditaruh
では、ごごに おうかがいします。|Kalau begitu saya datang malam nanti|よろしく おねがいします。ありがとうございました。|よろしく/ありがとう|Mohon bantuannya, terima kasih
`)},
{id:'w-angka',ic:'数',n:'Dikte angka: nomor telepon, jam, kamar',who:'Itou-san',lv:'N5-N4',noex:1,gen:1,d:'Dengar angka dengan cepat lalu ulangi (fukushou). Angkanya acak setiap kali.',b:[]}
);
const genAngka=()=>{const dg=n=>Array.from({length:n},()=>rd(10)),j=a=>a.map(d=>DK[d]).join(''),a=[0,9,0],b=dg(4),c=dg(4),hh=1+rd(11),rm=dg(3);if(!rm[0])rm[0]=1+rd(9);
 const num=(k,x,m,h,r)=>({k,r,x,m,kw:[],h,num:1});
 return[
 {k:'もしもし、かんりがいしゃの イトウです。これから ばんごうを いいます。ふくしょう おねがいします。',r:'moshimoshi, kanrigaisha no itou desu...',x:'Saya sebut angka, tolong ulangi',m:['はい、わかりました。おねがいします。'],kw:['はい','わかりました','おねがい'],h:'Baik, silakan'},
 num('でんわばんごうは、'+j(a)+'の '+j(b)+'の '+j(c)+'です。','Nomor telepon: 090-'+b.join('')+'-'+c.join(''),[j(a)+j(b)+j(c),j(a)+'の'+j(b)+'の'+j(c)],'Ulangi angkanya: 090-'+b.join('')+'-'+c.join(''),'090-'+b.join('')+'-'+c.join('')),
 num('かいぎは ごごの '+HS[hh]+'じはんからです。','Rapat mulai jam '+hh+'.30 sore',[HS[hh]+'じはん','ごご'+HS[hh]+'じはん'],'Ulangi jamnya: '+hh+'.30 sore',hh+':30 (ごご)'),
 num('おへやの ばんごうは '+j(rm)+'です。','Nomor kamar: '+rm.join(''),[j(rm)],'Ulangi kamar '+rm.join(''),rm.join('')),
 {k:'はい、かくにん できました。ありがとうございました。',r:'hai, kakunin dekimashita. arigatou gozaimashita.',x:'Konfirmasi selesai, terima kasih',m:['ありがとうございました。しつれいします。'],kw:['ありがとう','しつれい'],h:'Terima kasih, permisi'}]};
CALLT.forEach(t=>{if(!t.b)return});
const TR=B2(`
もしもし、きこえますか。おとが ちいさいです。|Halo, terdengar? Suaranya kecil|はい、きこえます。/すみません、もういちど おねがいします。|きこえ/聞こえ/すみません/もういちど|Ya, terdengar
いまの はなし、わかりましたか。|Tadi paham?|すみません、もういちど おねがいします。/もう すこし ゆっくり おねがいします。|すみません/もういちど/ゆっくり|Maaf, tolong ulangi / pelan sedikit
ちょっと でんぱが わるいですね。かけなおしましょうか。|Sinyal jelek, mau saya telepon ulang?|はい、おねがいします。/だいじょうぶです。きこえます。|はい/おねがい/だいじょうぶ/きこえ|Ya tolong
しょうしょう おまちください。|Mohon tunggu sebentar|はい、まっています。/はい、だいじょうぶです。|はい/まって/待って/だいじょうぶ|Baik, saya tunggu
`);
const AZ=[['はい、わかりました。','Baik, mengerti'],['そうですか。','Oh begitu'],['なるほど。','Begitu rupanya'],['ああ、はい。','Ah, ya']];
const _sc=startCall,_nb=nextBeat,_us=userSay,_lb=lobby;
startCall=function(t){if(t.gen)t.b=genAngka();_sc(t);if(t.noex&&CALL)CALL.ex=[]};
nextBeat=function(){const C=CALL;
 if(C&&!C.free&&!C.end&&!C.up&&C.res&&C.res.length){
  if(C.res.length>=2&&C.q.length>=2&&(C.tb||0)<2&&!C.t.gen&&Math.random()<(CSET.hard?.4:.22)){C.q.unshift(TR[rd(TR.length)]);C.tb=(C.tb||0)+1}
  else if(C.res[C.res.length-1].l>0&&Math.random()<.6){const a=AZ[rd(AZ.length)],id=C.id;C.hist.push({p:1,b:{k:a[0],r:k2r(a[0]),x:a[1],m:[],kw:[],h:''}});aiSpeak(a[0],()=>{if(CALL&&CALL.id===id)_nb()});callUI();return}}
 _nb()};
const KD={'零':0,'〇':0,'一':1,'二':2,'三':3,'四':4,'五':5,'六':6,'七':7,'八':8,'九':9};
userSay=function(t,s){const C=CALL;if(C&&C.cur&&C.cur.num&&typeof t==='string')t=t.replace(/[０-９]/g,c=>String.fromCharCode(c.charCodeAt(0)-65248)).replace(/[0-9]/g,d=>DK[d]).replace(/[零〇一二三四五六七八九]/g,c=>DK[KD[c]]).replace(/ゼロ/g,'ぜろ').replace(/[\s\-－]/g,'');_us(t,s)};
try{const sp=speechSynthesis.speak.bind(speechSynthesis);speechSynthesis.speak=u=>{try{if(CALL&&!CALL.end&&CSET.spd&&!CSET.slow)u.rate=+CSET.spd}catch(e){}return sp(u)}}catch(e){}
lobby=function(){_lb();const v=$('v-telepon');if(!v)return;
 const h=[...v.querySelectorAll('h2')].find(x=>x.textContent==='Pilih topik'),f=v.querySelector('.tpc[data-i="'+N0+'"]'),sp=CSET.spd||'0.95';
 if(h)h.insertAdjacentHTML('beforebegin','<div class="card" style="margin-top:10px"><b>Kecepatan bicara lawan</b><div class="mu">Telepon asli biasanya cepat. Mulai dari Normal, naik ke Cepat kalau sudah nyaman.</div><div class="seg">'+[['0.75','Pelan'],['0.95','Normal'],['1.15','Cepat']].map(a=>'<button data-sp="'+a[0]+'" class="'+(sp===a[0]?'on':'')+'">'+a[1]+'</button>').join('')+'</div></div>');
 if(f)f.insertAdjacentHTML('beforebegin','<h2>Telepon kerja nyata</h2><div class="mu" style="margin:-4px 0 8px">Situasi yang pasti terjadi saat bekerja di Jepang. Sesekali sinyal putus-putus atau lawan bicara minta kamu mengulang, seperti telepon sungguhan.</div>');
 v.querySelectorAll('[data-sp]').forEach(b=>b.onclick=()=>{CSET.spd=b.dataset.sp;saveCS();lobby()})};
/* Level 15 */
LVN[19]='Level 19: Bahasa kerja dan telepon';LVD[LVN[19]]='Ungkapan baku telepon kantor, izin dan terlambat, laporan-kontak-konsultasi, kontrak dan gaji.';
const pk=(n,a)=>PK(n,a.map(x=>{const[k,m]=x.split('|');return k+'|'+k2r(k)+'|'+m}).join(';'),{lv:19});
pk('Kerja: ungkapan telepon baku',['おせわに なって おります|Salam pembuka: terima kasih atas bantuannya','ただいま せきを はずして おります|Sedang tidak di tempat','でんごんを おねがいできますか|Bisa titip pesan?','かけなおします|Saya telepon kembali','おでんわが とおいようです|Suaranya terdengar jauh','もう すこし ゆっくり おねがいします|Mohon sedikit lebih pelan','ふくしょう いたします|Saya ulangi untuk konfirmasi','しょうしょう おまちください|Mohon tunggu sebentar','おまたせ いたしました|Maaf sudah menunggu','きこえますか|Apakah terdengar?','しつれい いたします|Permisi (menutup telepon)','ごようけんを おうかがい いたします|Ada keperluan apa?']);
pk('Kerja: izin libur dan terlambat',['きょうは やすませて いただきたいです|Hari ini saya ingin izin libur','ねつが あります|Saya demam','たいちょうが わるいです|Kondisi badan saya buruk','ちこく します|Saya akan terlambat','でんしゃが おくれて います|Kereta terlambat','じこで みちが こんで います|Jalan macet karena kecelakaan','しんだんしょを だします|Saya serahkan surat dokter','ごめいわくを おかけして すみません|Maaf merepotkan','くじごろに つきます|Saya sampai sekitar jam 9','はやく かえっても いいですか|Boleh pulang lebih awal?','ゆうきゅうを つかいます|Saya pakai cuti berbayar','れんらくが おそく なって すみません|Maaf terlambat memberi kabar']);
pk('Kerja: lapor, kontak, konsultasi',['ほうこく します|Saya melapor','れんらく します|Saya menghubungi','そうだん したい ことが あります|Ada yang ingin saya konsultasikan','いま よろしいですか|Apakah sekarang ada waktu?','しごとが おわりました|Pekerjaan sudah selesai','もんだいが おきました|Terjadi masalah','きかいが とまりました|Mesin berhenti','けがを しました|Saya terluka','ふりょうひんが みつかりました|Ditemukan produk cacat','やりかたを おしえて ください|Tolong ajari caranya','もういちど せつめい してください|Tolong jelaskan sekali lagi','かくにん して いただけますか|Bisakah Anda memeriksa?']);
pk('Kerja: jawaban sopan dan permintaan',['かしこまりました|Baik, dimengerti (sangat sopan)','しょうちしました|Baik, saya setuju','もうしわけ ございません|Mohon maaf sekali','たいへん しつれいしました|Maaf atas ketidaksopanan saya','おそれいりますが|Maaf mengganggu (pembuka permintaan)','よろしければ|Kalau berkenan','いかがでしょうか|Bagaimana menurut Anda?','つごうが わるいです|Waktunya kurang cocok','かんがえて みます|Saya akan pikirkan','あとで ごれんらく します|Nanti saya hubungi','ごかくにん ください|Mohon dikonfirmasi','おつかれさまでした|Terima kasih atas kerja kerasnya']);
pk('Kerja: kontrak, gaji, dokumen',['りれきしょを だします|Saya serahkan CV','ざいりゅうカードを みせて ください|Tolong tunjukkan kartu izin tinggal','きゅうりょうは いつ はらわれますか|Gaji dibayar kapan?','ざんぎょうだいは でますか|Apakah ada uang lembur?','きゅうじつは なんにち ありますか|Libur berapa hari?','しゃかいほけんに はいって いますか|Apakah terdaftar jaminan sosial?','ゆうきゅうきゅうかは なんにち ありますか|Cuti berbayar berapa hari?','けいやくきかんは どのくらいですか|Masa kontrak berapa lama?','しゅうぎょうじかんは なんじからですか|Jam kerja mulai jam berapa?','しゃいんりょうは ありますか|Apakah ada asrama karyawan?','こうつうひは でますか|Apakah ada uang transport?','けんしゅうは なんにち ありますか|Pelatihan berapa hari?']);
pk('Kosakata kerja: telepon dan kantor',['でんごん|pesan titipan','ないせん|nomor ekstensi','るすばんでんわ|mesin penjawab','ほりゅう|tahan panggilan','つうわ|percakapan telepon','かいぎしつ|ruang rapat','おきゃくさま|tamu atau pelanggan','しめきり|tenggat','ざんぎょう|lembur','けっきん|tidak masuk kerja','ふくしょう|mengulang untuk konfirmasi','たんとう|penanggung jawab','ふざい|tidak ada di tempat','ほんじつ|hari ini (formal)','さきほど|tadi (formal)','のちほど|nanti (formal)','みょうにち|besok (formal)','おもどり|kembali (bentuk hormat)']);
pk('Kosakata kerja: orang dan proses',['じょうし|atasan','せんぱい|senior','どうりょう|rekan kerja','ひきつぎ|serah terima tugas','ていじ|jam kerja normal','しゅっちょう|dinas luar','めいし|kartu nama','りれきしょ|CV','けんしゅう|pelatihan','ふりょうひん|produk cacat','ほうれんそう|lapor, kontak, konsultasi','ぎょうむ|tugas kerja','しゅっけつ|kehadiran','たいしょく|berhenti kerja','にゅうしゃ|masuk perusahaan','ふくりこうせい|tunjangan karyawan','ほうこくしょ|laporan tertulis','しゅうぎょうきそく|peraturan kerja','きゅうけいじかん|waktu istirahat']);
window.chIc=t=>{t=t.toLowerCase();for(const[r,k]of[[/restoran|makan/,'食'],[/belanja|minimarket|toko|supermarket/,'買'],[/wawancara/,'職'],[/kantor|pabrik|kerja/,'社'],[/dokter|apotek|sakit/,'病'],[/stasiun|kereta|bus|taksi/,'駅'],[/janji/,'約'],[/telepon/,'話'],[/kenal|teman|tetangga/,'友'],[/bank|uang|pos/,'銀'],[/apartemen|rumah|sewa/,'家'],[/gempa|darurat|polisi/,'急']])if(r.test(t))return k;return'話'};
window.pickFree=L=>{const sc=x=>{const n=(x.match(/[ぁ-ゖァ-ヶー]/g)||[]).length,k=(x.match(/[一-龥]/g)||[]).length;return n/Math.max(1,x.length)-.15*k+(/[ァ-ヶー]{2,}\s*(です|といいます)/.test(x)?1:0)};return L.slice().sort((a,b)=>sc(b)-sc(a))[0]};
const syncSub=()=>{const s=ST[S.stage];if(!s||!$('sub'))return;$('sub').textContent='Hari '+dayNo()+' · Tahap '+(S.stage+1)+' dari '+ST.length+': '+s.l+' · '+LVN[lvOf(s,S.stage)]};
{const _shw=show;show=function(v){_shw(v);try{syncSub()}catch(e){}}}
/* ===== v17: konten kerja lanjutan ===== */
const dd=(n,a)=>D(n,a.map(x=>x[0]+'|'+k2r(x[0])+'|'+x[1]+'|'+k2r(x[1])+'|'+x[2]).join(';'),{lv:19});
dd('Percakapan 44: kerja di konbini',[['すみません、この おべんとうを あたためて ください。','はい、かしこまりました。しょうしょう おまちください。','Tolong hangatkan bento ini. Baik, mohon tunggu'],['おはしは つけて くれますか。','はい、おつけします。なんぜんに しますか。','Bisa tambah sumpit? Baik, mau berapa pasang?'],['ふたつ おねがいします。','かしこまりました。ぜんぶで ごひゃくごじゅうえんです。','Dua, tolong. Baik, totalnya 550 yen'],['クレジットカードは つかえますか。','はい、ごりように なれます。','Bisa pakai kartu kredit? Ya, bisa'],['レシートを ください。','はい、どうぞ。ありがとうございました。','Minta struknya. Ya, silakan, terima kasih']]);
dd('Percakapan 45: mesin bermasalah di pabrik',[['ラインさんの きかいから へんな おとが しませんか。','はい、さっきから しています。とめても いいですか。','Ada suara aneh dari mesin? Ya, boleh dihentikan?'],['すぐ とめて ください。あぶないですから。','はい、とめました。スイッチを きりました。','Segera hentikan, berbahaya. Sudah, saklar saya matikan'],['ふりょうひんは でましたか。','はい、さんこ みつかりました。べつの はこに いれました。','Ada produk cacat? Ya, tiga buah, saya pisahkan'],['ほうこくしょを かいて ください。','はい、かきかたを おしえて いただけますか。','Tolong tulis laporan. Ya, bisa ajari cara menulis?'],['ここに じかんと げんいんを かいて ください。','わかりました。かけたら かくにん おねがいします。','Tulis waktu dan penyebab. Baik, mohon dicek setelah selesai']]);
dd('Percakapan 46: merawat lansia (kaigo)',[['ちょっと さむいですね。','ひざかけを おもちしましょうか。','Agak dingin ya. Perlu saya ambilkan selimut?'],['おねがいします。ありがとう。','いいえ、どういたしまして。おへやに いきましょうか。','Tolong. Terima kasih. Sama-sama, ke kamar yuk?'],['おなかが すきました。','もうすぐ ごはんの じかんです。てを あらいましょう。','Saya lapar. Sebentar lagi makan, cuci tangan dulu'],['きょうは おふろに はいりたくない。','そうですか。じゃあ、あとで また おさそいします。','Hari ini tidak mau mandi. Baik, nanti saya tawari lagi'],['あなたは にほんごが じょうずね。','ありがとうございます。まだ べんきょうちゅうです。','Bahasa Jepangmu bagus. Terima kasih, masih belajar']]);
dd('Percakapan 47: rapat pagi di pabrik',[['おはようございます。これから ちょうれいを はじめます。','おはようございます。よろしく おねがいします。','Rapat pagi dimulai. Selamat pagi, mohon bantuannya'],['きょうの もくひょうは ふりょうひん ゼロです。','はい、きを つけて さぎょう します。','Target hari ini produk cacat nol. Baik, saya bekerja hati-hati'],['たいちょうが わるい ひとは いますか。','いいえ、だいじょうぶです。','Ada yang kurang sehat? Tidak, saya baik-baik saja'],['ヘルメットと てぶくろを かくにん してください。','はい、かくにん しました。もんだい ありません。','Periksa helm dan sarung tangan. Sudah, tidak ada masalah'],['なにか しつもんは ありますか。','ありません。がんばります。','Ada pertanyaan? Tidak ada, saya berusaha']]);
dd('Percakapan 48: melapor cedera kerja',[['どうしましたか。てを けがしましたか。','はい、きかいに ゆびを はさみました。','Ada apa? Tangan terluka? Ya, jari terjepit mesin'],['いたみは ひどいですか。','すこし いたいですが、うごきます。','Sakit sekali? Agak sakit tapi masih bisa digerakkan'],['すぐ きゅうきゅうばこを もって きます。','ありがとうございます。しごとを とめて すみません。','Saya ambil kotak P3K. Terima kasih, maaf menghentikan kerja'],['びょういんへ いきましょう。れんらくは わたしが します。','おねがいします。ほうこくしょは あとで かきます。','Ke rumah sakit. Saya yang menghubungi. Laporan saya tulis nanti'],['ろうさいの てつづきを します。','はい、しょるいを じゅんび します。','Kita urus asuransi kecelakaan kerja. Baik, saya siapkan dokumen']]);
pk('Kosakata pabrik dan keselamatan',['ざいりょう|bahan baku','ぶひん|suku cadang','せいひん|produk jadi','こうてい|proses atau pabrik','ライン|lini produksi','てんけん|pemeriksaan rutin','ちょうせい|penyesuaian','あんぜんぐつ|sepatu pengaman','ぼうじんマスク|masker debu','きんきゅうていし|berhenti darurat','ひじょうぐち|pintu darurat','しょうかき|alat pemadam api','きけん|bahaya','ちゅうい|perhatian','きんし|dilarang','ひなんくんれん|latihan evakuasi']);
pk('Kosakata kaigo',['かいご|perawatan lansia','かいごしゃ|pengasuh','りようしゃ|penerima layanan','しょくじかいじょ|bantuan makan','にゅうよく|mandi','はいせつ|buang air','たいいへんかん|mengubah posisi tidur','くるまいす|kursi roda','つえ|tongkat','おむつ|popok','けつあつ|tekanan darah','たいおん|suhu tubuh','じょくそう|luka tekan','きろく|catatan perawatan']);
pk('Kosakata konbini dan restoran',['てんいん|pegawai toko','レジ|kasir','ほじゅう|pengisian stok','しょうみきげん|tanggal kedaluwarsa','ねふだ|label harga','ようき|wadah','でんぴょう|nota pesanan','しこみ|persiapan bahan','はいぜん|menyajikan','かたづけ|membereskan','エプロン|celemek','ちゅうもん|pesanan','おつり|uang kembalian','あたためる|menghangatkan']);
pk('Kalimat: di pabrik',['きかいを とめて ください|Tolong hentikan mesinnya','ふりょうひんを べつの はこに いれます|Produk cacat saya pisahkan ke kotak lain','このボタンは なんですか|Tombol ini apa?','ヘルメットを かぶって ください|Tolong pakai helm','あぶないので さわらないで ください|Berbahaya, jangan disentuh','しごとの てじゅんを おしえてください|Tolong ajari prosedur kerjanya','ここまで できました|Sudah selesai sampai sini','ざいりょうが たりません|Bahan bakunya kurang','おわったら ほうこく します|Kalau selesai saya laporkan','やすみじかんは なんじからですか|Istirahat mulai jam berapa?','きょうの ノルマは なんこですか|Target hari ini berapa buah?','けがを した ひとが います|Ada orang yang terluka']);
pk('Kalimat: kaigo dan merawat',['おむつを かえましょうか|Mau saya gantikan popoknya?','おみずを どうぞ|Silakan minum air','ゆっくり たって ください|Berdirilah pelan-pelan','きぶんは いかがですか|Bagaimana perasaan Anda?','いたいところは ありますか|Ada yang sakit?','てを かして ください|Pegang tangan saya','おくすりの じかんです|Waktunya minum obat','ひとりで あるけますか|Bisa berjalan sendiri?','もう すこし だけ がんばりましょう|Ayo sedikit lagi','たいおんを はかります|Saya ukur suhu tubuhnya','ごはんを たべさせて いただきます|Saya bantu menyuapi','きょうは ごきぶんが よさそうですね|Hari ini tampaknya Anda segar']);
pk('Kalimat: konbini dan restoran kerja',['いらっしゃいませ|Selamat datang','ふくろは おつけしますか|Perlu kantong?','おはしは ごいりようですか|Perlu sumpit?','ごいっしょに ごちゅうもんは いかがですか|Mau tambah pesanan?','こちらで おめしあがりですか|Makan di sini?','もちかえりですか|Dibawa pulang?','ただいま こんで おります|Sekarang sedang ramai','しょうしょう おまたせ いたしました|Maaf menunggu sebentar','おさらを おさげして よろしいですか|Boleh saya angkat piringnya?','ごゆっくり どうぞ|Silakan nikmati','ポイントカードは おもちですか|Punya kartu poin?','またの おこしを おまちして おります|Kami tunggu kedatangan Anda lagi']);
pk('Kalimat: laporan masalah dan minta tolong',['すみません、まちがえました|Maaf, saya salah','もういちど やりなおします|Saya ulangi dari awal','わからない ことが あります|Ada yang tidak saya mengerti','いま てつだって いただけますか|Bisa bantu sekarang?','じかんが かかりそうです|Sepertinya butuh waktu','しめきりに まにあわないかもしれません|Mungkin tidak keburu tenggat','なにを すれば いいですか|Apa yang sebaiknya saya kerjakan?','これで あって いますか|Apakah ini sudah benar?','つぎは どうしますか|Selanjutnya bagaimana?','あとで ごれんらく いたします|Nanti saya hubungi','きを つけます|Saya akan hati-hati','ありがとうございます、たすかりました|Terima kasih, sangat membantu']);
pk('Kalimat: hidup sehari-hari di Jepang',['ごみの ひは いつですか|Kapan hari buang sampah?','もえる ごみは かようびです|Sampah terbakar hari Selasa','となりの へやが うるさいです|Kamar sebelah berisik','やちんを ふりこみます|Saya transfer uang sewa','でんきが つきません|Listrik tidak menyala','ゆうびんきょくは どこですか|Kantor pos di mana?','ちかくに びょういんは ありますか|Ada rumah sakit di dekat sini?','こくみんけんこうほけんに はいりたいです|Saya ingin masuk asuransi kesehatan','ざいりゅうカードの こうしんを したいです|Saya ingin memperpanjang kartu izin tinggal','ほんこくに おくりたいです|Saya ingin mengirim ke negara asal','ICカードに チャージします|Saya isi saldo kartu IC','ひなんじょは どこですか|Tempat pengungsian di mana?']);
P('Pola sopan di tempat kerja','しょうしょう おまち＿|ください|Mohon tunggu sebentar|しょうしょうおまちください;もういちど おねがい＿|します|Tolong sekali lagi|もういちどおねがいします;かくにん して いただけ＿か|ます|Bisakah Anda memeriksa?|かくにんしていただけますか;やすませて いただき＿|たいです|Saya ingin izin libur|やすませていただきたいです;おくれて もうしわけ＿|ありません|Mohon maaf terlambat|おくれてもうしわけありません;ごめいわくを おかけして すみ＿|ません|Maaf merepotkan|ごめいわくをおかけしてすみません;あしたまでに ほうこく し＿|ます|Saya laporkan paling lambat besok|あしたまでにほうこくします;わからない ことは そうだん し＿|てください|Kalau tidak paham, konsultasilah|わからないことはそうだんしてください',{lv:19});
P('Partikel di tempat kerja','きかい＿ こわれました|が|Mesin rusak|きかいがこわれました;ざんぎょう＿ しました|を|Saya lembur|ざんぎょうをしました;ぶちょう＿ そうだんします|に|Saya konsultasi ke manajer|ぶちょうにそうだんします;しょくどう＿ ひるごはんを たべます|で|Makan siang di kantin|しょくどうでひるごはんをたべます;バス＿ かいしゃへ いきます|で|Ke kantor naik bus|バスでかいしゃへいきます;はちじ＿ しごとが はじまります|に|Kerja mulai jam delapan|はちじにしごとがはじまります;ここ＿ めいしを おいて ください|に|Taruh kartu nama di sini|ここにめいしをおいてください',{lv:19});
CALLT.push(
{id:'w-lamar',ic:'職',n:'Telepon melamar kerja ke agen',who:'Sasaki-san (perekrut)',lv:'N4',noex:1,d:'Menyampaikan minat, level bahasa, izin tinggal, menjadwalkan wawancara.',b:B2(`
はい、さくらじんざいの ささきでございます。|Agen Sakura, Sasaki di sini|おせわに なって おります。アリと もうします。きゅうじんの ことで おでんわしました。|おせわ/アリ/きゅうじん/求人/もうします|Saya Ari, menelepon soal lowongan
ありがとうございます。どの おしごとに きょうみが ありますか。|Terima kasih. Pekerjaan apa yang diminati?|こうじょうの しごとに きょうみが あります。/かいごの しごとに きょうみが あります。|こうじょう/工場/かいご/介護/きょうみ/興味|Saya tertarik kerja pabrik
にほんごの レベルは どのくらいですか。|Level bahasa Jepangmu sampai mana?|エヌよんを もって います。/いま エヌごを べんきょう しています。|エヌ/N/べんきょう/もって|Punya N4
ざいりゅうしかくは おもちですか。|Punya status izin tinggal?|はい、とくていぎのうの しかくを とりました。/いいえ、まだ とって いません。|はい/いいえ/とくてい/しかく/まだ|Ya, SSW
めんせつは らいしゅうの もくようびは いかがですか。|Wawancara Kamis depan bagaimana?|はい、だいじょうぶです。/すみません、もくようびは ちょっと…。|だいじょうぶ/大丈夫/はい/ちょっと|Ya, bisa
なんじが よろしいですか。|Jam berapa yang cocok?|ごご にじは いかがでしょうか。/ごぜんちゅうが ありがたいです。|じ/ごご/ごぜん/いかが|Bagaimana jam dua siang?
では、もくようびの ごご にじに おまちして おります。|Kami tunggu Kamis jam dua siang|ありがとうございます。よろしく おねがいします。しつれいします。|ありがとう/よろしく/しつれい|Terima kasih, permisi
`)},
{id:'w-eakon',ic:'家',n:'Telepon pemilik kamar: AC rusak',who:'Sato-san (pemilik)',lv:'N4',noex:1,d:'Menjelaskan kerusakan, sejak kapan, janji perbaikan.',b:B2(`
はい、さとうふどうさんです。|Sato Properti|おせわに なって おります。ひのでマンションの アリです。|おせわ/アリ/マンション|Saya Ari dari Hinode Mansion
ああ、アリさん。どうしましたか。|Ada apa, Ari?|へやの エアコンが こわれて います。|エアコン/こわれ/壊れ|AC kamar rusak
いつから こわれて いますか。|Sejak kapan?|きのうの よるからです。/きょうの あさからです。|から/きのう/きょう/よる/あさ|Sejak semalam
どんな ようすですか。|Bagaimana kondisinya?|でんげんが はいりません。/つめたい かぜが でません。|でんげん/電源/かぜ/風/でません/はいり|Tidak mau menyala
しゅうりの ひとが いきます。いつが つごうが いいですか。|Teknisi akan datang. Kapan waktu yang cocok?|あしたの ごごが いいです。/ごご ろくじいごが いいです。|あした/明日/ごご/午後/じ/時|Besok sore
わかりました。ひとに れんらくします。|Baik, saya hubungi orangnya|よろしく おねがいします。ありがとうございます。|よろしく/ありがとう|Mohon bantuannya
しつれいします。|Permisi|しつれいします。|しつれい|Permisi
`)},
{id:'w-119',ic:'急',n:'Telepon darurat 119',who:'Petugas 119',lv:'N4',noex:1,d:'Meminta ambulans, menyebut lokasi, kondisi, dan nomor kontak.',b:B2(`
ひゃくじゅうきゅうばんです。かじですか、きゅうきゅうですか。|119. Kebakaran atau ambulans?|きゅうきゅうです。たすけて ください。|きゅうきゅう/救急/たすけ/助け|Ambulans, tolong
どうしましたか。|Ada apa?|ともだちが たおれました。/しごとちゅうに けがを しました。|たおれ/倒れ/けが/怪我|Teman saya pingsan
ばしょは どこですか。じゅうしょを おしえてください。|Di mana lokasinya? Sebutkan alamat|ひのでちょうの さんのごです。/わかりません。ちかくに コンビニが あります。|ちょう/じゅうしょ/わかりません/コンビニ/えき|Hinode-cho 3-5
いしきは ありますか。|Apakah sadar?|はい、あります。/いいえ、へんじを しません。|はい/いいえ/あります/へんじ|Ya, sadar
おなまえと でんわばんごうを おしえてください。|Nama dan nomor telepon?|アリです。ぜろきゅうぜろの いちにさんよんの ごろくななはちです。|アリ/ぜろ/きゅう/いち|Ari, nomor telepon
きゅうきゅうしゃが むかいます。そこで まっていて ください。|Ambulans menuju ke sana, tunggu di situ|はい、わかりました。おねがいします。|はい/わかりました/分かりました/おねがい|Baik
でんわを きらないで まって ください。|Jangan tutup telepon|はい、わかりました。|はい/わかりました/分かりました|Baik
`)});

/* ===== v16: progres kesiapan kerja ===== */
const pg14=()=>{const v=$('v-lap');if(!v)return;let el=$('pg14');if(!el){el=document.createElement('div');el.id='pg14';v.prepend(el)}
 const m=memStats(),ms=Object.keys(S.mastered||{}).length,got=m.hf+ms,goal=S.goal14||20,td=(S.days||{})[ymd(new Date())]||{c:0,w:0},tn=td.c+td.w;
 const ds=Object.keys(S.days||{}).sort().slice(-7);let c7=0,w7=0;ds.forEach(k=>{c7+=S.days[k].c;w7+=S.days[k].w});const a7=c7+w7?Math.round(c7/(c7+w7)*100):0;
 const lv=(a,b)=>{let n=0,d=0;lvList().forEach(L=>{if(L>=a&&L<=b){const x=lvStat(L);n+=x.n;d+=x.dn}});return n?Math.round(d/n*100):0};
 const cl=S.calls||[],ok=cl.filter(c=>c.turns),cp=c=>Math.round(c.ok/c.turns*100),by={};ok.forEach(c=>{(by[c.t]=by[c.t]||[]).push(cp(c))});
 const nm=id=>{const t=CALLT.find(t=>t.id===id);return t?t.n:(id==='sakura'||id==='free'?'Ngobrol bebas':id)};
 const bar=(n,p,sub)=>'<div style="display:flex;justify-content:space-between;margin-top:10px"><span>'+n+'</span><b>'+p+'%</b></div><div class="bar"><i style="width:'+Math.min(100,p)+'%"></i></div>'+(sub?'<div class="mu">'+sub+'</div>':'');
 const n5=Math.min(100,Math.round(got/800*100)),n4=Math.min(100,Math.round(got/1500*100)),calls=Object.keys(by);
 const last5=ok.slice(-5).map(cp),tr=last5.length>=2?last5[last5.length-1]-last5[0]:null;
 let nx,go;if(m.due>0){nx='Ada '+m.due+' kartu yang waktunya diulang. Ulang dulu supaya tidak lupa.';go='kartu'}else if(!cl.length){nx='Kamu belum pernah telepon latihan. Coba "Telepon izin sakit ke atasan", 3 menit saja.';go='telepon'}else if(tn<goal){nx='Target hari ini belum tercapai ('+tn+' dari '+goal+' soal). Lanjutkan tahap berikutnya.';go='peta'}else{nx='Target hari ini tercapai. Satu telepon kerja 5 menit bagus untuk penutup.';go='telepon'}
 el.innerHTML='<div class="card"><b>Kesiapan menuju kerja di Jepang</b><div class="mu">Perkiraan kasar dari latihanmu di aplikasi ini, bukan hasil resmi JLPT atau JFT-Basic.</div>'
 +bar('Kosakata menuju level N5 (±800)',n5,got+' kata dan kalimat dikuasai')+bar('Kosakata menuju level N4 (±1.500)',n4,'')
 +bar('Tahap level 1 sampai 4 (dasar N5)',lv(1,4),'')+bar('Tahap level 5 sampai 18 (N4 dan situasi nyata)',lv(5,18),'')+bar('Tahap bahasa kerja (level 19)',lv(19,19),'')
 +bar('Akurasi 7 hari terakhir',a7,c7+w7+' soal dijawab')+'</div>'
 +'<div class="card" style="margin-top:10px"><b>Target harian</b><div class="mu">Hari ini: '+tn+' dari '+goal+' soal</div><div class="bar"><i style="width:'+Math.min(100,Math.round(tn/goal*100))+'%"></i></div><div class="seg">'+[10,20,40].map(g=>'<button data-g14="'+g+'" class="'+(goal===g?'on':'')+'">'+g+' soal</button>').join('')+'</div></div>'
 +'<div class="card" style="margin-top:10px"><b>Kemampuan telepon</b>'+(calls.length?calls.map(id=>{const a=by[id];return bar(esc(nm(id)),Math.max(...a),a.length+'x telepon, nilai terbaik')}).join('')+(tr===null?'':'<div class="mu" style="margin-top:8px">Tren 5 telepon terakhir: '+(tr>0?'naik '+tr+' poin':tr<0?'turun '+(-tr)+' poin':'stabil')+'.</div>'):'<div class="mu">Belum ada telepon. Nilai tiap topik akan muncul di sini.</div>')+'</div>'
 +'<div class="card" style="margin-top:10px"><b>Langkah berikutnya</b><div class="mu" style="margin:6px 0 10px">'+nx+'</div><button class="main" id="nx14">Mulai</button></div>';
 el.querySelectorAll('[data-g14]').forEach(b=>b.onclick=()=>{S.goal14=+b.dataset.g14;save();renderLap()});
 $('nx14').onclick=()=>show(go)};
{const _rl14=renderLap;renderLap=function(){_rl14();try{pg14()}catch(e){}}}
})();
