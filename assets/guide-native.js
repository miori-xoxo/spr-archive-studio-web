/* Native screenshots from a fictional manual fixture, 2026-11-05. No accounts or user projects. */
(()=>{
const base='assets/guide-screens/';
const imageStyle=document.createElement('style');imageStyle.textContent='.picture img{margin-top:0}';document.head.appendChild(imageStyle);
const common='BASIC / 共通操作の画面例';
const shortTier='TIER 1〜 / 現行ガイドの機能区分';
const general='架空データの開発版で画面と入口を確認しています。分割・ドラッグ・キー操作など、この画像だけで確認できない手順は追加していません。';
const shortNote='提供プランは現行ガイドの区分を維持しています。開発版で画面が開いたことは、契約・利用権限の検証ではありません。今回は0〜8秒を確認・確定し、縦プレビューと2.050秒の字幕・コメント表示を確認。独立した縦MP4保存と実聴は今回未確認です。';
const pages={
assemble:{title:'② 動画を組み立てる：実画面',tier:common,caveat:general,views:[{label:'組み立て画面',file:'02_assemble.jpg',pins:[
['作品を選ぶ',46,12.1,'上部の作品欄に現在の作品名が表示されます。この例は架空の「サンプル作品」です。'],
['再生／一時停止',13.9,64.5,'プレビューを再生・一時停止する入口です。実際に再生する映像の種類は画面上の案内で確認します。'],
['停止',19.2,64.5,'プレビューの停止ボタンです。'],
['動画の配置を見る',55,82.3,'V1動画の段にサンプル映像が0〜8秒で配置されています。他素材への編集操作をこの画像だけから案内しません。']]}]},
subtitle:{title:'③ 字幕・コメント：実画面',tier:common,caveat:general,views:[
{label:'一覧',file:'03_captions_comments.jpg',pins:[
['字幕の採否',12.2,47.8,'字幕行のチェックが映像への採否を示します。本文編集の入口とは分かれています。'],
['字幕の本文',25,48.8,'字幕の本文をクリックすると、その行の本文が入力欄に切り替わります。「字幕の行内編集」の画像で確認できます。'],
['コメントの採否',55.7,47.8,'コメント行のチェックが採否を示します。この例の名前と本文はすべて架空です。'],
['コメントの本文',65.1,48.8,'コメントも本文自体がその場の入力欄に切り替わります。「コメントの行内編集」の画像を選んでください。']]},
{label:'字幕の行内編集',file:'03a_caption_inline.jpg',pins:[
['字幕の入力欄',31.3,53.3,'選択した字幕の本文そのものが入力欄になっています。画面の反対側へ通常の本文編集を移す構造ではありません。'],
['編集を閉じる',50.6,49.6,'行内編集を閉じる入口です。入力後は保存状態を確認してください。'],
['表示をずらす',26,64.3,'この字幕の表示開始を調整する秒数欄です。'],
['表示時間',44.3,64.3,'字幕を表示する長さの欄です。本文の下に独立して並んでいます。']]},
{label:'コメントの行内編集',file:'03b_comment_inline.jpg',pins:[
['コメントの入力欄',75.5,53.3,'選択したコメントの本文自体が入力欄になっています。'],
['編集を閉じる',96.7,49.6,'コメントの行内編集を閉じる入口です。'],
['表示をずらす',66.5,64.3,'コメントの表示開始をずらす秒数欄です。元コメントの取得時刻とは分けて扱います。'],
['表示時間',86.8,64.3,'コメントの表示時間を調整する欄です。詳細な配置・色・フォントの利用プランは、この共通操作の番号に含めていません。']]}]},
short:{title:'⑥ ショート変換：実画面',tier:shortTier,caveat:shortNote,views:[
{label:'縦プレビュー完成',file:'06_short_preview_ready.jpg',pins:[
['範囲を確認・確定',28.1,78.9,'開始0秒・終了8秒を確認し、「この範囲を確認・確定」を押した状態です。本編や範囲を変えた場合は再確認が必要です。'],
['縦プレビューを準備',22.8,60.6,'範囲確定後、縦プレビューを準備する入口です。この例では準備完了と実際の映像表示を確認しました。'],
['縦の再生位置',28.1,63.4,'縦プレビュー専用の位置バーです。この画像はショート2.050秒の字幕・コメント表示を確認した場面です。'],
['文字の表示順',74,24.4,'右側はショート内の時間・種別・本文の一覧です。原文は手動作成した架空字幕とコメントです。'],
['縦設定を保存',72.5,91.7,'縦版の設定を保存する入口です。横版と元素材を変えず、縦版の設定・本文を別に保存します。縦MP4保存は下の別ボタンです。']]},
{label:'配置設定',file:'06a_short_layout_settings.jpg',pins:[
['設定を開く・閉じる',72.5,12.9,'上部の「設定」から前面映像・ぼかし・字幕やコメントの配置欄を表示できます。'],
['前面映像と背景',75,23,'前面映像の倍率・上下と背景ぼかしの設定欄です。この撮影では値を変更していません。'],
['字幕・コメントの配置',75,37.1,'字幕の上下・文字サイズ、コメントの上下・倍率などの欄が並びます。値の変更例や全条件の出力保証は示していません。']]}]}
};
let view=0,pin=0;
function showPin(v,i){pin=i;const p=v.pins[i];document.querySelector('#nativeName').textContent=(i+1)+' '+p[0];document.querySelector('#nativeDesc').textContent=p[3];document.querySelectorAll('[data-native-pin]').forEach(b=>b.classList.toggle('active',Number(b.dataset.nativePin)===i));}
function draw(){const p=pages[selectedScreen],v=p.views[view];document.querySelector('#nativeTitle').textContent=p.title;document.querySelector('#nativeTier').textContent=p.tier;document.querySelector('#nativeCaveat').textContent=p.caveat;
const image=document.querySelector('#nativeImage');image.src=base+v.file;image.alt=p.title+'、'+v.label+'。架空素材を使った開発版616の実画面。';
const tabs=document.querySelector('#nativeViews');tabs.replaceChildren();p.views.forEach((v,i)=>{const b=document.createElement('button');b.textContent=v.label;b.classList.toggle('active',i===view);b.setAttribute('aria-pressed',String(i===view));b.onclick=()=>{view=i;draw();};tabs.appendChild(b);});
const pins=document.querySelector('#nativePins'),index=document.querySelector('#nativeIndex');pins.replaceChildren();index.replaceChildren();v.pins.forEach((p,i)=>{const b=document.createElement('button');b.className='pin';b.textContent=i+1;b.dataset.nativePin=i;b.style.left=p[1]+'%';b.style.top=p[2]+'%';b.setAttribute('aria-label',(i+1)+' '+p[0]);b.onclick=()=>showPin(v,i);pins.appendChild(b);const n=document.createElement('button');n.textContent=(i+1)+' '+p[0];n.onclick=()=>showPin(v,i);index.appendChild(n);});showPin(v,0);}
const originalNavigate=navigate;navigate=function(){originalNavigate();const ready=!!pages[selectedScreen];document.querySelector('#nativeGuide').hidden=!ready;if(ready){document.querySelector('#pending').hidden=true;document.querySelector('#available').hidden=true;view=0;draw();}};
// Retained detail guide, aligned to the newly captured unedited1920x1032 image.
const y={1:9.7,2:15.7,3:21.7,4:27.7,5:33.7,6:39.7,7:80.2,8:83.7,9:87.2,10:90.7,11:94.2,12:97.7};
data.forEach(d=>{if(y[d.n])d.y=y[d.n];document.querySelectorAll('.pin[data-id="'+d.n+'"]').forEach(b=>{b.style.left=d.x+'%';b.style.top=d.y+'%';});});
// Additional palette view is illustrative; no unverified feature receives a new tier number.
const palette=document.createElement('details');palette.className='native-note';const summary=document.createElement('summary');summary.textContent='素材・演出パレットの実画面を見る（各機能の提供プランは確認中）';palette.appendChild(summary);const img=document.createElement('img');img.src=base+'04a_effects_palette.jpg';img.alt='開発版616の演出パレット。架空素材の実画面。個別機能の利用プランは確認中。';img.style.width='100%';palette.appendChild(img);document.querySelector('#available').appendChild(palette);
navigate();
})();
