/* Tier 3 screenshot guide. The original plan and screen tabs remain unchanged. */
(()=>{
const p=(x,y,name,text,open)=>({x:x/19.2,y:y/10.32,name,text,open});
const v=(name,file,pins=[],info='')=>({name,file,pins,info});
const views={
 source:v('① 素材と解析','main-01-sakura',[
 p(1500,148,'最近の自分のTwitchアーカイブ','連携中のチャンネルから取り込むアーカイブを選びます。'),p(1390,184,'動画情報を再取得','入力済みの動画情報を取り直します。'),p(1540,221,'プロジェクト一覧','保存済みの素材プロジェクトを開き直します。'),p(1530,256,'PCの動画ファイルを取り込む','PCにある動画を素材として読み込みます。'),p(1320,311,'チャット追加','現在の素材に対応するチャットを追加します。'),p(1550,311,'元動画再指定','対応する元動画を選び直します。'),p(1790,311,'画質変更','取り込む素材の画質を選びます。'),p(1410,602,'範囲を追加','指定した区間を解析の対象に加えます。'),p(1750,602,'選択範囲を削除','選んだ範囲をリストから外します。素材は削除されません。'),p(1380,1003,'選択範囲をGPU解析／再開','選んだ範囲の字幕解析を開始または再開します。'),p(1740,1003,'まとめて準備','素材と解析範囲を確認して、必要な準備をまとめて始める入口です。'),p(278,696,'再生／一時停止','元動画のプレビューを切り替えます。'),p(385,696,'停止','元動画のプレビューを止めます。')]),
 assemble:v('② 動画を組み立てる','main-02-sakura',[
 p(277,137,'再生／一時停止','採用したクリップを確認します。'),p(385,137,'停止','プレビューを止めます。'),p(248,451,'AIトーク目次','話題の区切りや見出しを確認します。見どころ解析とは別の機能です。'),p(347,451,'見どころ解析','盛り上がりや笑いを分析し、連携済みの場合はTwitchのマーカー・クリップを取得します。右のチェックは結果の表示切替です。'),p(262,497,'チャンネル名・ロゴ','横動画用のロゴ・文字の配置を開きます。','hlogo'),p(345,497,'OP','冒頭に使う素材を登録します。'),p(389,497,'ED','最後に使う素材を登録します。'),p(588,498,'クロスディゾルブ（映像）','つなぎ目にドラッグして映像を重ねながら切り替えます。'),p(726,498,'プッシュ（映像）','つなぎ目にドラッグして押し出す切替を入れます。'),p(846,498,'クロスフェード（音声）','つなぎ目にドラッグして原音を滑らかにつなぎます。'),p(1680,500,'分割','選択クリップを再生位置で分けます。'),p(1770,500,'カット（削除）','選択した区間を取り除きます。後ろは詰めません。'),p(1865,500,'リップルカット','選択した区間を取り除き、後ろを詰めます。'),p(1700,175,'BGM登録','BGMを素材棚に登録します。'),p(1695,398,'試聴を停止','棚で再生している音を止めます。')]),
 subtitle:v('③ 字幕・コメント確認','main-03-dialogue',[
 p(227,465,'字幕の採否','字幕行の採用チェックです。本文の編集とは別です。'),p(420,495,'字幕の本文','本文の編集例を同じ場所に開きます。','caption'),p(1005,465,'コメントの表示方法（対象を選ぶ）','表示方法を変えたいコメントの左の四角をチェックし、上の「コメント選択」で表示方法を選びます。出す・出さないは、各行の「表示中／非表示」ボタンで切り替えます。'),p(1150,495,'コメントの本文','コメント行から本文と表示時間を編集します。'),p(334,398,'AI話者分析','話者を分析して候補を確認します。','speaker'),p(408,397,'話者','字幕の横にある話者の色枠で対象を選び、選択した字幕の話者を指定します。'),p(531,396,'再生中の行へ','現在の再生位置に近い字幕行へ移ります。'),p(863,398,'結合','選択した字幕をまとめます。'),p(937,398,'テロップ追加','手動の文字を追加します。'),p(1295,399,'コメント選択','左の四角にチェックしたコメントの表示方法を選びます。コメントの表示・非表示はここでは切り替えません。'),p(1407,398,'コメント位置設定','吹き出し・流し・縦スクロールの設定を開きます。','bubble'),p(1513,397,'アイコン反映','コメントのアイコン表示を設定します。'),p(1610,397,'Twitchスタンプ','Twitchスタンプの表示を確認します。'),p(1787,397,'コメントラグ調節','コメントが表示される時刻を補正します。')]),
 detail:v('⑤ 映像演出','main-05-preview-ready',[
 p(1804,49,'元に戻す','直前の対象操作を取り消します。'),p(1879,49,'やり直す','取り消した操作をもう一度適用します。'),p(731,577,'再生／一時停止','完成プレビューの再生を切り替えます。'),p(839,577,'停止','完成プレビューを止めます。'),p(1012,577,'再生位置バー','ドラッグで確認したい時間へ移ります。'),p(431,187,'注目ズーム','映像の見せたい部分を拡大する演出です。'),p(431,226,'ショックモノクロ','選んだ区間をモノクロにします。'),p(431,267,'引き＋黒余白','映像を引いて周囲に黒い余白を入れます。'),p(431,306,'モザイク','タイムラインに置き、対象をダブルクリックして設定を開きます。','mosaic'),p(431,347,'一時停止','区間の頭を静止画として表示する演出です。'),p(431,387,'ズームイン（寄る）','区間の間に映像を拡大します。'),p(431,427,'ズームアウト（引く）','区間の間に映像を引きます。'),p(431,467,'単色（色指定）','指定色を使う映像演出です。'),p(224,648,'タイムライン選択','タイムライン上の素材を選ぶ操作です。'),p(263,648,'プレビュー直接操作','プレビュー上で対象を扱うモードに切り替えます。'),p(1650,647,'−','タイムラインを縮小します。'),p(1687,647,'＋','タイムラインを拡大します。'),p(1730,648,'分割','選択した素材を再生位置で分割します。'),p(1798,648,'カット','選択した部分を削除します。'),p(1866,648,'リップルカット','後ろを詰めて削除します。'),p(83,286,'④ 字幕演出','字幕の見た目を変える画面例へ進みます。','textEffects'),p(83,534,'⑧ 翻訳音声・翻訳字幕','翻訳を確認する画面例へ進みます。','translation'),p(100,593,'簡単モード','A〜Eの簡単モードの画面例を表示します。','easyA'),p(100,937,'設定・テーマ','共通設定を画面上に開きます。','settings')]),
 export:v('⑥ 確認・書き出し','main-06-preview-ready',[
 p(273,973,'再生／一時停止','書き出す映像の見本を確認します。'),p(385,973,'停止','プレビューを停止します。'),p(1685,286,'字幕ファイルだけ保存','映像と別に字幕ファイルを保存します。'),p(1685,317,'音声だけ別々に保存','音声だけを別ファイルに保存します。'),p(1685,347,'コメントを透過素材で保存','コメントを映像と重ねられる別素材として保存します。'),p(1853,398,'保存先を選ぶ','ファイルを保存するフォルダを選択します。'),p(1685,483,'書き出し','用途・画質・保存先を確認して出力します。'),p(1685,513,'DaVinci Resolveへ渡す','Resolveで扱うための出力操作を開きます。'),p(1685,562,'書き出し後のプレビュー整理','書き出し後、プレビュー用のデータを整理する入口です。')]),
 short:v('⑦ ショート変換','main-07-dialogue',[
 p(553,440,'縦プレビューを準備','選んだ区間を確認し、縦版の見本を準備します。'),p(719,815,'複数区間をつなぐ','使いたい区間を複数選んでつなげます。'),p(826,815,'再生／一時停止','縦のプレビューを確認します。'),p(261,908,'OPはずす','ショートから冒頭素材を外します。'),p(352,908,'EDはずす','ショートから最後の素材を外します。'),p(968,134,'映像レイアウト設定','前景の倍率・位置や背景を調整します。','layout'),p(1078,134,'コメント位置','表示タイプごとに枠を調整します。','shortBubble'),p(1728,134,'タイトル位置','タイトルの位置・フォント・縁を調整します。','title'),p(1834,134,'チャンネル名・ロゴ','縦動画用のロゴ設定を開きます。','slogo'),p(1841,883,'保存先を選ぶ','縦動画の保存先を選びます。'),p(1394,986,'書き出し','準備と確認が終わった縦動画を書き出します。')]),
 hlogo:v('横動画：チャンネル名・ロゴ','horizontal-logo-dialogue',[],'「文字を追加」「画像を追加」で要素を用意し、プレビュー上で移動・拡大します。「選んだ要素を外す」で削除、「作品へ反映して保存」で適用します。'),
 caption:v('字幕の行内編集','main-03-caption-inline',[],'選んだ行で本文を直し、必要に応じて表示をずらす秒数と表示時間を調整します。'),
 speaker:v('AI振り分けを編集','popup-03-ai-speaker-editor',[],'分析した話者グループを確認し、必要な箇所を割り当て直します。'),
 bubble:v('コメント位置設定：吹き出し','popup-03-bubble',[],'画像・名前の表示・効果音と音量・読みやすさを調整します。'),
 flow:v('コメント位置設定：流し','popup-03-flow',[],'流す範囲やフォントを設定し、静止画の見本で確認します。'),
 scroll:v('コメント位置設定：縦スクロール','popup-03-scroll',[],'文字と縁、背景と角の形、バッジ、コメントの表示時間を設定します。'),
 mosaic:v('映像演出：モザイク','effects-05-mosaic',[],'全体または指定した範囲にかけます。枠を丸・四角に切り替え、粒度や強さを調節します。'),
 layout:v('ショート：映像レイアウト設定','short-layout-dialogue',[],'前景映像の上下位置と倍率、背景の表示をショート用に整えます。'),
 shortBubble:v('ショート：コメント位置','short-position-bubble',[],'対象を選ぶと、そのタイプの枠だけ表示されます。枠を直接動かして位置を決めます。'),
 shortFlow:v('ショート：流しコメント','short-position-flow',[],'流しコメントの範囲を指定します。'),
 shortScroll:v('ショート：縦スクロール','short-position-scroll',[],'縦スクロールの範囲を指定します。'),
 shortCenter:v('ショート：吹き出し中央','short-position-center',[],'位置を指定するか前景中央を選択します。'),
 shortEmphasis:v('ショート：強調字幕','short-position-emphasis',[],'通常字幕とは別に強調字幕の位置を指定します。'),
 shortSubtitle:v('ショート：通常字幕','short-position-subtitle',[],'通常字幕の上下位置を確認します。'),
 shortMini:v('ショート：ミニテーマ','short-position-mini',[],'ミニテーマを表示する位置を調整します。'),
 title:v('ショート：タイトル位置','short-title-dialogue',[],'プレビューを見ながら位置、フォントや縁を調整します。'),
 slogo:v('ショート：チャンネル名・ロゴ','short-logo-dialogue',[],'ショート専用の文字・画像を追加し、位置と大きさを調整します。'),
 textEffects:v('④ 字幕演出','main-04-dialogue',[],'字幕の見た目と演出をサンプルから選びます。'),
 textPreset:v('字幕演出：プリセット','main-04-preset-editor',[],'色、文字、縁や動きを設定して見本で確認します。'),
 translation:v('⑧ 翻訳音声・翻訳字幕','main-08-translation-clean',[],'元の字幕・コメントと訳文を動画の時刻で見比べます。手入力やAI訳は原音の確認が必要です。'),
 trAudio:v('翻訳：音声書き出し','translation-audio-export',[],'翻訳音声を出力する操作です。'),
 trVoice:v('翻訳：音声設定','translation-voice-settings',[],'元の音量と翻訳音声の音量、音声の割り当てを調整します。'),
 settings:v('設定・テーマ：共通','settings-common',[],'各項目の変更内容を確認します。ボタンによって現在の作品と次回の初期値が異なります。')
};
const groups={
 source:['source'],assemble:['assemble','hlogo','settings-02-transitions','settings-02-highlights'],
 subtitle:['subtitle','caption','speaker','bubble','flow','scroll','settings-03-speakers','settings-03-comments','settings-03-overlap','settings-03-restore'],
 detail:['detail','textEffects','textPreset','mosaic','translation','trAudio','trVoice','settings','settings-common-preview','settings-common-my-settings','settings-common-hotkeys','settings-04-caption-effects','settings-05-video-effects','settings-08-translation','easyA','easyB','easyC','easyD','easyE'],
 export:['export','settings-06-export'],short:['short','layout','shortBubble','shortFlow','shortScroll','shortCenter','shortEmphasis','shortSubtitle','shortMini','title','slogo','settings-07-shorts']
};
const families={bubble:['bubble','flow','scroll'],shortBubble:['shortBubble','shortFlow','shortScroll','shortCenter','shortEmphasis','shortSubtitle','shortMini'],translation:['translation','trAudio','trVoice'],textEffects:['textEffects','textPreset'],settings:['settings','settings-common-preview','settings-common-my-settings','settings-common-hotkeys'],easyA:['easyA','easyB','easyC','easyD','easyE']};
const extras={
 'settings-02-transitions':'② 設定：つなぎ目','settings-02-highlights':'② 設定：見どころ','settings-03-speakers':'③ 設定：話者','settings-03-comments':'③ 設定：コメント','settings-03-overlap':'③ 設定：重なり','settings-03-restore':'③ 設定：復元','settings-04-caption-effects':'④ 設定：字幕演出','settings-05-video-effects':'⑤ 設定：映像演出','settings-06-export':'⑥ 設定：書き出し','settings-07-shorts':'⑦ 設定：ショート','settings-08-translation':'⑧ 設定：翻訳','settings-common-preview':'共通：プレビュー','settings-common-my-settings':'共通：マイ設定','settings-common-hotkeys':'共通：ショートカット'
};
Object.entries(extras).forEach(([k,n])=>views[k]=v(n,k,[],'この設定タブの実画面です。選んだ項目の値やチェック状態を変更前に確認します。'));
[['easyA','A 素材を選ぶ','A-sakura-named','素材を選び、必要な準備を始めます。'],['easyB','B 範囲を選ぶ','B-sakura','使う区間を選びます。'],['easyC','C 誤字を確認','C-dialogue','字幕・コメントの文章を確認します。'],['easyD','D 動画を書き出す','D-preview-ready','完成プレビューを確認して保存します。'],['easyE','E ショート変換','E-dialogue','縦動画の範囲と表示を確認します。']].forEach(([k,n,f,t])=>views[k]=v(n,'easy-'+f,[],t));
const q=(w,h,x,y,name,text)=>p(x*1920/w,y*1032/h,name,text);
views.hlogo.pins=[
 q(1322,852,118,599,'文字を追加','新しい文字の要素を追加します。'),
 q(1322,852,118,640,'画像を追加','ロゴに使う画像を選びます。'),
 q(1322,852,118,678,'選んだ要素を複製','選択中の文字や画像を複製します。'),
 q(1322,852,118,719,'選んだ要素を外す','選んだ要素だけを配置から外します。'),
 q(1322,852,1100,783,'テンプレートを名前付き保存','現在の組合せを名前付きで再利用できるようにします。'),
 q(1322,852,1225,783,'選んだテンプレートを呼び出す','一覧から選んだテンプレートを編集欄へ読み込みます。'),
 q(1322,852,321,823,'作品へ反映して保存','配置を確認して横動画の作品へ反映します。'),
 q(1322,852,987,823,'閉じる','設定を閉じて組み立て画面に戻ります。')
];
views.easyD.pins=[
 q(1150,910,177,718,'再生／一時停止','完成プレビューの再生を切り替えます。'),
 q(1150,910,510,718,'停止','プレビューを止めます。'),
 q(1150,910,1060,215,'保存先を選ぶ','出力するフォルダを指定します。'),
 q(1150,910,910,786,'書き出す','作品をMP4で保存します。'),
 q(1150,910,205,873,'通常画面へ戻る','通常版の編集画面へ戻ります。'),
 q(1150,910,575,873,'前の手順に戻る','前の簡単モードの工程に戻ります。'),
 q(1150,910,954,873,'次に進む','次の工程を開きます。')
];
const c=(x,y,n,t)=>q(1182,882,x,y,n,t);
views.bubble.pins=[
 c(155,402,'吹き出し画像を選ぶ','標準を別の画像に変更します。プレビューで本文の範囲を確認します。'),
 c(454,402,'アイコン位置を調整','画像に重なるアイコンの位置を調整します。'),
 c(33,491,'コメント主の名前を表示','吹き出し内にコメント主の名前を添えます。'),
 c(345,520,'効果音','吹き出しの表示開始に使う音を選びます。'),
 c(546,560,'音声を選ぶ','PC内のWAVやMP3などを追加します。'),
 c(213,599,'登録済み音源','登録済みの音源へ切り替えます。'),
 c(471,599,'一覧を更新','登録済み音源の表示を更新します。'),
 c(433,664,'音量','吹き出し効果音の再生音量を調整します。'),
 c(552,664,'試聴','選択中の効果音を設定した音量で確認します。'),
 c(620,439,'この作品の横動画プレビュー・書き出しに適用','右側の読みやすさ設定を現在の横動画に使います。'),
 c(933,469,'重なったとき','複数の通常コメントが重なるときの表示方式を指定します。'),
 c(1066,509,'短いコメントの表示目安','短文の標準表示時間です。'),
 c(1066,551,'文字が多い場合の表示目安の上限','長文の表示時間を延ばす場合の上限です。'),
 c(1066,592,'20文字を超えた1文字あたりの追加','長文を読みやすくするため、1文字あたりの追加時間を決めます。'),
 c(1066,630,'縦に並べる段数の上限','通常吹き出しが同時に重なったときの段数の上限です。'),
 c(1066,674,'コメント間の余白','重なり時に縦に並べる間隔を決めます。'),
 c(1066,715,'配置する下端の上限','通常吹き出しが下に伸びる上限を決めます。'),
 c(160,800,'保存','この画面での設定変更を保存します。'),
 c(448,800,'初期値に戻す（吹き出し）','吹き出しの設定を初期値へ戻します。'),
 c(879,790,'初期値に戻す（読みやすさ）','右側の読みやすさ設定を初期値へ戻します。'),
 c(590,852,'閉じる','設定を閉じて、もとのガイド画面へ戻ります。')
];
views.flow.pins=[
 c(270,646,'フォント','流れる文字のフォントを選びます。'),c(615,645,'文字色','文字の色を指定します。'),
 c(865,645,'文字サイズ','文字の大きさを調整します。'),c(1090,645,'文字不透明度','文字自体の透明度を指定します。'),
 c(180,687,'縁1','文字の縁の幅を調整します。'),c(580,687,'縁1不透明度','縁の透明度を調整します。'),
 c(179,728,'流れる速さ','毎秒あたりに流れる速さを決めます。'),c(312,800,'保存','現在の設定を保存します。'),
 c(884,800,'初期値に戻す','流しコメントの設定を標準値へ戻します。'),c(590,851,'閉じる','設定を閉じて、もとのガイドへ戻ります。')
];
views.scroll.pins=[
 c(906,436,'表示範囲の枠','枠をドラッグして移動し、右下の角で大きさを調整します。'),
 c(316,540,'フォント','文字のフォントを選びます。'),c(619,540,'文字色','文字の色を指定します。'),
 c(870,540,'文字サイズ','文字の大きさを調整します。'),c(1082,540,'文字不透明度','文字の透明度を調整します。'),
 c(188,581,'縁1','文字の縁を使うか選びます。'),c(593,581,'縁1幅','文字の縁の幅です。'),c(871,581,'縁1不透明度','縁の透明度です。'),
 c(187,622,'背景を表示','コメント背景を表示するか選びます。'),c(616,622,'背景色','背景の色です。'),c(871,622,'背景不透明度','背景の透明度です。'),
 c(187,665,'枠を表示','背景の枠線を使うか選びます。'),c(615,663,'枠色','枠線の色です。'),c(872,663,'枠不透明度','枠線の透明度です。'),
 c(1040,663,'四角','背景の枠を四角にします。'),c(1103,663,'角丸','背景の枠を角丸にします。'),
 c(230,705,'コメントの表示時間（秒）','各コメントが表示される時間です。'),c(549,704,'バッジ反映','取得済みのバッジ画像を名前の前に表示します。'),
 c(312,800,'保存','現在の設定を保存します。'),c(884,800,'初期値に戻す','縦スクロールの設定を標準値へ戻します。'),
 c(590,851,'閉じる','設定を閉じて、もとのガイドへ戻ります。')
];
views.speaker.pins=[
 q(1402,932,696,179,'話者を1人追加','話者の名前や役割を登録します。保存するまでは作品に反映しません。'),
 q(1402,932,206,316,'試聴','候補グループの原音を聞いて、話者を確認します。'),
 q(1402,932,124,357,'割当先','このグループを実際の話者に割り当てます。不明なら推定のままにできます。'),
 q(1402,932,358,334,'アイコン表示','字幕に出すアイコンの有無や画像を選びます。'),
 q(1402,932,813,334,'役割','配信主など、話者の役割を選びます。'),
 q(1402,932,1035,334,'色','話者を見分ける色を選びます。'),
 q(1402,932,1260,315,'統合先を選ぶ','同じ話者だと確認できたグループを選びます。'),
 q(1402,932,1264,356,'統合','選んだ相手のグループに統合します。'),
 q(1402,932,20,768,'字幕のアイコンを大きく','字幕に適用するアイコンを一括で大きくします。'),
 q(1402,932,700,822,'再分析','話者候補の分析をやり直します。'),
 q(1402,932,700,863,'統合を取り消す','選択した統合を取り消します。'),
 q(1402,932,1286,903,'保存','確認した割り当てや設定を作品へ反映します。'),
 q(1402,932,1350,903,'キャンセル','変更を確定せず閉じます。')
];
views.textEffects.pins=[
 p(284,320,'再生／一時停止','採用クリップの再生を切り替えます。'),p(386,320,'停止','再生を止めます。'),
 p(223,402,'一括適用対象','選択した字幕に同じ演出を設定する入口です。'),
 p(1530,402,'AIトーク目次','見出しから対象の話題を探します。'),
 p(1641,401,'並び順','字幕サンプルの並び方を選びます。'),
 p(1753,402,'お気に入りのみ','登録したお気に入りに絞り込みます。'),
 p(1859,401,'新規登録','自分の設定を共通のサンプルとして登録します。','textPreset'),
 p(1867,553,'お気に入り','このサンプルをお気に入りに登録・解除します。'),
 p(1300,575,'字幕サンプル','選んだ字幕に使う見た目の候補を選びます。')
];
views.textPreset.pins=[
 p(1450,618,'フォント','サンプルや適用する文字のフォントを選びます。'),
 p(1818,619,'文字サイズ','表示する文字のサイズを調整します。'),
 p(1442,661,'文字色：選択','文字の色を選びます。'),p(1824,661,'縁1の色：選択','一つ目の縁の色を選びます。'),
 p(1442,705,'縁2の色：選択','二つ目の縁の色を選びます。'),p(1818,706,'縁1の幅','一つ目の縁の太さを調整します。'),
 p(1440,753,'縁2の幅','二つ目の縁の太さを調整します。'),p(1818,753,'下余白','字幕より下の余白を指定します。'),
 p(1440,796,'左右余白','字幕の左右に残す余白です。'),p(1818,797,'動きの大きさ','文字演出の動く大きさを調整します。'),
 p(1440,844,'動きの速さ','文字演出の速度を調整します。'),p(1601,842,'影を表示','文字の下の影を切り替えます。'),
 p(1200,909,'この登録を保存','編集した共通サンプルを保存します。'),p(1480,909,'複製','設定を複製して別のサンプルを作ります。'),
 p(1740,909,'閉じる','設定の例を閉じて字幕演出へ戻ります。')
];
views.mosaic.pins=[
 p(1720,124,'詳細を閉じる','設定の例を閉じて元の映像演出へ戻ります。'),
 p(1870,301,'対象の本編clip','この演出をかける本編クリップを指定します。'),
 p(1870,340,'対象','完成画面全体など、対象にする画面を選びます。'),
 p(1530,372,'指定区間で有効','指定範囲でモザイクを有効にします。隠したい部分を出力でも確認してください。'),
 p(1530,397,'Shortの完成画面用範囲も明示指定する','ショートにも使う場合、縦画面の範囲を別に確認します。'),
 p(1860,430,'開始','元素材の何秒から演出を効かせるか設定します。'),
 p(1860,468,'終了','元素材の何秒まで演出を効かせるか設定します。'),
 p(1860,510,'粒度px','ブロックの粗さを調節します。'),
 p(1602,577,'設定を保存（効果未検証）','設定を保存します。プレビューや書き出しで、必要な範囲が隠れたか確認します。'),
 p(1744,577,'選択設定を外す','選択しているモザイク設定を外します。'),
 p(1860,577,'素材参照を再確認','演出が参照する素材を確認し直します。')
];
views.translation.pins=[
 p(1582,115,'字幕書き出し','翻訳した字幕ファイルの設定を開きます。'),
 p(1685,115,'音声書き出し','翻訳音声を保存する操作を開きます。','trAudio'),
 p(1778,115,'音声設定','声の割り当て・音量・話速の設定を開きます。','trVoice'),
 p(865,226,'完成プレビューを準備','字幕・コメントなどを反映した完成プレビューを準備します。'),
 p(280,346,'再生／一時停止','準備済みの完成プレビューを確認します。'),p(385,346,'停止','プレビューを停止します。'),
 p(297,446,'翻訳先','訳文の言語を選びます。')
];
views.layout.pins=[
 p(1139,206,'UI見本','SNSのUIがかかる範囲の見本を切り替えます。書き出しには重なりません。'),
 p(1815,207,'前景の倍率','手前に表示する映像の大きさを変えます。'),
 p(1815,246,'前景の上下','映像の上下位置を変えます。'),p(1815,290,'背景ぼかし','後ろに敷く映像のぼかしを調整します。'),
 p(1815,329,'境目ぼかし','前景と背景の境目をぼかします。'),
 p(1815,371,'上クリップ','前景映像の上端をどこまで切るかを設定します。'),
 p(1815,410,'下クリップ','前景映像の下端をどこまで切るかを設定します。'),
 p(1074,753,'保存','縦レイアウトに設定を反映します。'),p(1390,753,'初期値に戻す','レイアウトを初期値に戻します。'),
 p(1719,753,'閉じる','この画面例を閉じてショート変換に戻ります。')
];
const shortTypes=[['shortBubble',1080,254,'吹き出し'],['shortFlow',1397,254,'流し'],['shortScroll',1727,254,'縦スクロール'],['shortCenter',1080,294,'吹き出し中央'],['shortEmphasis',1397,294,'強調字幕'],['shortSubtitle',1727,294,'通常字幕'],['shortMini',1080,335,'ミニテーマ']];
for(const [key] of shortTypes){
 views[key].pins=[
 p(924,198,'コメントを元の表示方式で表示','オンで横動画で使った方式を使います。オフは標準の吹き出しにそろえます。'),
 p(924,221,'ミニテーマを省く','ショートにミニテーマを入れない場合に選びます。'),
 ...shortTypes.map(([k,x,y,n])=>p(x,y,n,'この表示タイプの位置や枠の例を表示します。',k===key?undefined:k)),
 p(1130,373,'UI見本','ガイド表示を切り替えます。縦動画へ焼き込まれません。'),
 p(1073,920,'保存','選択した表示タイプの位置設定を保存します。'),
 p(1400,920,'初期値に戻す','位置設定を初期値へ戻します。'),p(1724,920,'閉じる','位置設定の画面例を閉じます。')
 ];
}
views.title.pins=[
 p(1640,223,'範囲を左右中央へ','黄色のタイトル枠を左右中央へ移動します。'),
 p(1640,263,'初期値に戻す','タイトル設定を標準値へ戻します。'),
 p(1858,302,'フォント','タイトルの文字書体を選びます。'),
 p(1741,343,'縁1の色：選択','内側の縁の色を指定します。'),p(1845,343,'縁1の幅','内側の縁の太さです。'),
 p(1741,382,'縁2の色：選択','外側の縁の色を指定します。'),p(1845,382,'縁2の幅','外側の縁の太さです。'),
 p(1410,415,'影を使う','タイトルの文字に影を足すか選びます。'),
 p(1647,470,'位置プリセットを選ぶ','登録済みの配置を呼び出します。'),
 p(1647,547,'プリセット登録','この配置を名前付きで登録します。'),
 p(1647,626,'この設定を使う','プレビューで決めた配置や見た目を反映します。'),
 p(1647,666,'閉じる','タイトル設定の画面例を閉じます。')
];
views.slogo.pins=[
 q(1322,932,20,75,'作品に表示','ショートにチャンネル名・ロゴを表示するか選びます。'),
 q(1322,932,171,678,'文字を追加','縦動画に重ねる文字を追加します。'),
 q(1322,932,171,719,'画像を追加','チャンネルロゴなどの画像を追加します。'),
 q(1322,932,171,758,'選んだ要素を複製','選んでいる要素を複製します。'),
 q(1322,932,171,799,'選んだ要素を外す','選択した文字や画像だけを配置から外します。'),
 q(1322,932,1054,861,'テンプレートを名前付き保存','設定を名前付きで保存します。'),
 q(1322,932,1222,861,'選んだテンプレートを呼び出す','登録してある設定を編集欄へ読み込みます。'),
 q(1322,932,322,903,'作品へ反映して保存','縦動画へ反映します。閉じるだけでは反映しません。'),
 q(1322,932,985,903,'閉じる','元のショート変換画面へ戻ります。')
];
const sectionFor={source:['source'],assemble:['assemble'],subtitle:['text'],detail:['effects','settings'],export:['export'],short:['short'],
 textEffects:['subtitle'],textPreset:['subtitle'],translation:['translation'],trAudio:['translation'],trVoice:['translation'],
 hlogo:['assemble'],caption:['text'],speaker:['text'],bubble:['text'],flow:['text'],scroll:['text'],settings:['settings'],
 layout:['short'],shortBubble:['short'],shortFlow:['short'],shortScroll:['short'],shortCenter:['short'],shortEmphasis:['short'],shortSubtitle:['short'],shortMini:['short'],title:['short'],slogo:['short'],easyA:['easy'],easyB:['easy'],easyC:['easy'],easyD:['easy'],easyE:['easy']};
const $=id=>document.getElementById(id);
const button=(parent,label,action)=>{const b=document.createElement('button');b.type='button';b.textContent=label;b.onclick=action;parent.appendChild(b);return b;};
let current='',entry='',selectedPin=0,stack=[],mode='',openFromPin=false,easyReturnScreen='source';
const style=document.createElement('style');style.textContent=
'#nativeGuide .native-picture{align-self:start;position:relative;margin:0}#nativeGuide .native-picture img{aspect-ratio:auto;display:block;width:100%;height:auto;margin:0}#nativeGuide .native-picture .pin{min-width:25px;min-height:25px;width:25px;height:25px;padding:0;font-size:11px}#nativeGuide .layout{grid-template-columns:minmax(0,1fr) clamp(230px,23%,360px);gap:14px;align-items:start}#nativeGuide .side{height:auto;max-height:none;min-height:150px}#nativeGuide #nativeIndex{display:flex;flex-wrap:wrap;gap:5px;max-height:none}#nativeGuide #nativeIndex button{font-size:.8rem}#nativeGuide #nativeViews{margin:.4rem 0;display:flex;flex-wrap:wrap;gap:.4rem}#tier3-complete-guide[hidden]{display:none!important}@media(max-width:1000px){#nativeGuide .layout{grid-template-columns:minmax(0,1fr) minmax(195px,29%);gap:8px}#nativeGuide .native-picture .pin{width:20px;height:20px;min-width:20px;min-height:20px;font-size:10px}}@media(max-width:570px){#nativeGuide .layout{grid-template-columns:1fr}#nativeGuide .side{min-height:0}}';
style.textContent+='#nativeGuide .layout{--guide-side:clamp(230px,23%,360px);--guide-gap:8px;grid-template-columns:minmax(0,1fr) var(--guide-side);gap:var(--guide-gap);justify-content:start}#nativeGuide .native-picture .pin{transform:translate(-50%,calc(-100% - 7px));isolation:isolate;width:21px;height:21px;min-width:21px;min-height:21px;font-size:10px;line-height:17px}#nativeGuide .native-picture .pin::after{content:"";position:absolute;left:50%;top:100%;height:7px;border-left:1px solid #80405e;pointer-events:none}#nativeGuide .native-picture .pin:focus-visible{outline:2px solid #561f43;outline-offset:2px}@media(max-width:1000px){#nativeGuide .layout{--guide-side:clamp(185px,29%,255px);--guide-gap:6px}#nativeGuide .native-picture .pin{min-width:17px;min-height:17px;width:17px;height:17px;font-size:9px;line-height:13px;transform:translate(-50%,calc(-100% - 5px))}#nativeGuide .native-picture .pin::after{height:5px}}@media(max-width:570px){#nativeGuide .layout{grid-template-columns:minmax(0,1fr)}}';
style.textContent+='#nativeGuide .native-picture .pin[data-dir]{transform:translate(-50%,-50%)}#nativeGuide .native-picture .pin[data-dir]::after{top:auto;bottom:auto;left:auto;right:auto;border:0;background:#80405e}#nativeGuide .native-picture .pin[data-dir=left]::after{top:50%;left:100%;width:var(--pin-leader,3px);height:1px}#nativeGuide .native-picture .pin[data-dir=right]::after{top:50%;right:100%;width:var(--pin-leader,3px);height:1px}#nativeGuide .native-picture .pin[data-dir=top]::after{left:50%;top:100%;width:1px;height:var(--pin-leader,3px)}#nativeGuide .native-picture .pin[data-dir=bottom]::after{left:50%;bottom:100%;width:1px;height:var(--pin-leader,3px)}#nativeGuide .native-picture .pin[data-dir=detached]::after{display:none}';
style.textContent+='.shell:has(#nativeGuide:not([hidden])){max-width:none}#nativeGuide .native-picture{width:100%}';
style.textContent+='#nativeGuide{--return-side:clamp(230px,23%,360px);--return-gap:8px}#nativeGuide #nativeViews.guide-return-row{width:calc(100% - var(--return-side) - var(--return-gap));justify-content:flex-end;align-items:center;margin:0 0 4px;padding-right:2px;box-sizing:border-box}#nativeGuide .guide-return-row .guide-return{display:inline-flex;align-items:center;min-height:30px;padding:3px 10px;border:1px solid #b65380;border-radius:8px;background:#f9dfed;color:#732347;font-weight:700;line-height:1.2}#nativeGuide .guide-return-row .guide-return::before{content:"×";font-size:16px;margin-right:5px}#nativeGuide .guide-return-row .guide-return:hover{background:#f4c9df}#nativeGuide .guide-return-row .guide-return:focus-visible{outline:2px solid #923461;outline-offset:2px}@media(max-width:1000px){#nativeGuide{--return-side:clamp(185px,29%,255px);--return-gap:6px}}@media(max-width:570px){#nativeGuide #nativeViews.guide-return-row{width:100%}}';
style.textContent+='#nativeGuide .guide-stage-link{border:1px solid #b95781;background:#fae4ef;color:#77294e;font-weight:700;border-radius:8px;padding:7px 11px}#nativeGuide .guide-stage-link:hover{background:#f6cfe3}';
document.head.appendChild(style);
function enter(key,fromPin=false){stack.push({current,selectedPin,mode,scrollX:window.scrollX,scrollY:window.scrollY,phoneRow:phoneActive});current=key;selectedPin=0;mode='';openFromPin=fromPin;draw(true);}
function back(){if(!stack.length)return;const prev=stack.pop();({current,selectedPin,mode}=prev);draw();const row=phoneGuide?.matches&&phoneRows.get(prev.phoneRow);if(row){row.details.open=true;phoneActive=prev.phoneRow;row.summary.focus({preventScroll:true});}const n=row?null:$('nativePins').querySelector('[data-native-pin="'+selectedPin+'"]');if(!row)(n||$('nativeViews').querySelector('button'))?.focus({preventScroll:true});if(Number.isFinite(prev.scrollY))window.scrollTo?.(prev.scrollX,prev.scrollY);}
const rich={
 '元に戻す':{desc:'直前の対象操作を取り消して、ひとつ前の状態へ戻します。',steps:['操作結果を確認します。','たとえば別の位置で分割してしまったら、「元に戻す」を押します。','分割前の状態に戻ったか、タイムラインで確認します。'],extra:'取り消しを戻したいときは「やり直す」を使います。',tip:'分割や配置を試すときに便利です。押した後は右上の表示で何を取り消したか確認できます。表示が省略されているときは、その表示にカーソルを置くと全文を確認できます。',note:'画像・字幕・コメント分割は操作確認済みです。すべての操作の取り消しを保証するものではありません。'},
 'やり直す':{steps:['「元に戻す」で取り消した直後に押します。','戻したはずの変更が画面に再び適用されたか確認します。'],tip:'直前に取り消した操作があるときに使えます。'},
 '選択範囲をGPU解析／再開':{steps:['タイムラインで開始・終了を確認します。','「選択範囲をGPU解析／再開」を押します。','進行表示が終わったら③で字幕を確認します。'],tip:'使う範囲が決まっていれば、先に区間を選ぶと待ち時間を短くできます。'},
 '見どころ解析':{steps:['②で対象の範囲を確認します。','「見どころ解析」を押します。','結果が出た項目のチェックで、タイムライン上のマークを切り替えます。'],tip:'話題の見出しを作る「AIトーク目次」は別の操作です。',note:'Twitchマーカーやクリップが取得できない場合と、取得できて0件の場合は別です。'},
 '分割':{steps:['分けたい素材を選択します。','再生ヘッドを分けたい位置へ動かして「分割」を押します。','タイムライン上で素材が二つに分かれたことを確認します。'],tip:'位置がずれていたら「元に戻す」で戻してから調整します。'},
 'リップルカット':{steps:['取り除く区間を確認します。','「リップルカット」を押します。','後ろの素材が前に詰まったことを確認します。'],tip:'後ろを動かさず空白を残したい場合は通常の「カット」を使います。'},
 'コメント位置設定':{steps:['③で「コメント位置設定」を開きます。','吹き出し・流し・縦スクロールから対象を選び、見本を確認します。','変更を適用する場合は「保存」を押します。'],tip:'見本の映像は止まったままなので、文字の位置や大きさを比べやすくなります。'},
 '縦プレビューを準備':{steps:['ショートに使う区間を確認します。','「縦プレビューを準備」を押します。','準備が終わったら再生し、字幕やコメントが見切れていないか確認します。'],tip:'投稿先のボタンと重ならないか、「UI見本」も使って確認できます。'},
 'モザイク':{steps:['「モザイク」をタイムラインに置きます。','置いた演出をダブルクリックし、対象や時間を設定します。','必要な範囲が隠れているか、完成動画で確認します。'],note:'追いかける自動追従ではありません。対象が動く場合も、書き出し前に全区間を確認してください。'},
 '字幕ファイルだけ保存':{steps:['用途・言語を確認します。','「字幕ファイルだけ保存」を押します。','生成したファイルを確認します。'],tip:'字幕の表示を視聴者が切り替えられるようにしたいときに使います。'},
 '書き出し':{steps:['完成プレビューと保存先・ファイル名を確認します。','「書き出し」を押し、完了を待ちます。','保存した動画を開いて、音声と映像を確認します。'],tip:'編集中の軽量プレビューと、完成ファイルの画質は別です。'},
 'コメントの表示時間（秒）':{steps:['縦スクロールを選びます。','秒数を変えて見本の表示を確認します。','使う値が決まったら「保存」を押します。'],tip:'表示を長くすると同時に残るコメントが増えるので、文字の大きさも合わせて確認します。'}
};
Object.assign(rich,{
 '最近の自分のTwitchアーカイブ':{steps:['連携済みのTwitchで、自分のアーカイブ一覧を開きます。','タイトル・サムネイルを見て素材を選びます。','選んだ動画情報が①に出たことを確認します。'],tip:'一覧をさかのぼるときは「前の10件」「次の10件」を使います。'},
 'プロジェクト一覧':{steps:['一覧を開いて続きから作業する素材プロジェクトを探します。','対象を選び、作品名と表示される動画を確認します。'],tip:'元動画を新しく読み込むときは「PCの動画ファイルを取り込む」を使います。'},
 'まとめて準備':{steps:['①で素材と解析範囲を決めます。','「まとめて準備」で表示された素材と範囲を確認します。','内容が合っていれば「OK・この内容で開始」を押します。'],tip:'選択を確認してから始めれば、別の素材を誤って処理するのを防げます。'},
 '保存先を選ぶ':{steps:['「保存先を選ぶ」を押します。','出力先にしたいフォルダを選びます。','ガイドと同じように、ボタンの横に目的のフォルダが表示されたか確認します。'],tip:'ファイル名は保存先の下の欄で別に入力します。'},
 'AI話者分析':{steps:['対象字幕を確認して分析を始めます。','分析後に「AI振り分けを編集」を開きます。','「試聴」で原音を聞き、分かる箇所だけ割り当てます。'],tip:'推定グループの色や名前は本人を保証するものではありません。'},
 '試聴':{steps:['聞きたい候補の行や音源を確認します。','「試聴」を押して音を聞きます。'],tip:'話者なら原音、吹き出しの設定なら指定した効果音を確認する操作です。'},
 'チャンネル名・ロゴ':{steps:['文字か画像を追加します。','見本上で移動し、四角の右下か数値で大きさを調整します。','「作品へ反映して保存」を押します。'],tip:'横とショートの配置は別です。縦動画を作るときはショート側でも見てください。'},
 '作品へ反映して保存':{steps:['見本の位置と大きさを確認します。','「作品へ反映して保存」を押します。','元の編集画面で作品のプレビューを確認します。'],tip:'設定画面を閉じるだけでは作品へ反映されません。'},
 'バッジ反映':{steps:['縦スクロール設定で「バッジ反映」をオンにします。','設定を保存します。','対象コメントで取得済みバッジが表示されるか確認します。'],note:'取得済み画像がない場合は、チェックを入れてもバッジ画像は出ません。'},
 '映像レイアウト設定':{steps:['⑦で「映像レイアウト設定」を開きます。','前景の位置や倍率、背景ぼかしを見本で確認しながら調整します。','「保存」後、縦プレビューで見切れがないか確認します。'],tip:'「UI見本」を切り替えるとSNSの画面に重なりやすい位置を避けられます。'},
 'タイトル位置':{steps:['タイトルを入力して「タイトル位置」を開きます。','見本の枠を動かし、読みやすい場所を選びます。','「この設定を使う」で反映します。'],tip:'使い回す配置は「プリセット登録」で残せます。'},
 '文字を追加':{steps:['「文字を追加」を押します。','追加した文字を見本か編集欄で入力します。','位置・大きさ・書体を確認して保存します。']},
 '画像を追加':{steps:['「画像を追加」を押し、使う画像を選びます。','見本上で位置を動かし、必要ならサイズを調整します。','「作品へ反映して保存」を押します。']},
 '新規登録':{steps:['「新規登録」で設定を開きます。','見本を見ながら、フォント・色・縁を設定します。','「この登録を保存」を押します。'],tip:'元の設定を残したいときは「複製」で別のサンプルにします。'},
 '音声設定':{steps:['⑧の「音声設定」を開きます。','読み上げる話者と声を確認します。','元音声と翻訳音声のバランス、必要なら話速を調整します。'],note:'使える声はWindowsに入っている音声によって異なります。'}
});
function writeGuide(pin,number){
 const r=Object.prototype.hasOwnProperty.call(rich,pin.name)?rich[pin.name]:{};
 const known=typeof data!=='undefined'&&data.find(item=>item.name===pin.name&&item.featureTier&&!String(item.featureTier).includes('確認中'));
 const badge=$('nativeTier');badge.textContent=known?known.featureTier:'Tier 3 画面での操作例';badge.className='badge'+(known?' tier-'+known.tierKey:'');
 $('nativeName').textContent=number?(number+' '+pin.name):pin.name;
 $('nativeDesc').textContent=r.desc||pin.text;
 const items=$('nativeSteps');items.replaceChildren();
 for(const step of r.steps||[]){const el=document.createElement('li');el.textContent=step;items.appendChild(el);}
 items.hidden=!items.children.length;
 $('nativeExtra').textContent=r.extra||'';$('nativeExtra').hidden=!r.extra;
 $('nativeTip').textContent=r.tip||'';$('nativeTipBox').hidden=!r.tip;
 $('nativeCaveat').textContent=r.note||'';$('nativeCaveat').hidden=!r.note;
}
const pictureDimensions={"easy-A-sakura-named":[1150,910],"easy-B-sakura":[1150,910],"easy-C-dialogue":[1150,910],"easy-D-preview-ready":[1150,910],"easy-E-dialogue":[1150,910],"effects-05-mosaic":[1920,1032],"horizontal-logo-dialogue":[1322,852],"main-01-sakura":[1920,1032],"main-02-sakura":[1920,1032],"main-03-caption-inline":[1920,1032],"main-03-dialogue":[1920,1032],"main-04-dialogue":[1920,1032],"main-04-preset-editor":[1920,1032],"main-05-preview-ready":[1920,1032],"main-06-preview-ready":[1920,1032],"main-07-dialogue":[1920,1032],"main-08-translation-clean":[1920,1032],"popup-03-ai-speaker-editor":[1402,932],"popup-03-bubble":[1182,882],"popup-03-flow":[1182,882],"popup-03-scroll":[1182,882],"settings-02-highlights":[1205,652],"settings-02-transitions":[1205,652],"settings-03-comments":[1205,652],"settings-03-overlap":[1205,652],"settings-03-restore":[1205,652],"settings-03-speakers":[1205,652],"settings-04-caption-effects":[1205,652],"settings-05-video-effects":[1205,652],"settings-06-export":[1205,652],"settings-07-shorts":[1205,652],"settings-08-translation":[1205,652],"settings-common-hotkeys":[1205,652],"settings-common-my-settings":[1205,652],"settings-common-preview":[1205,652],"settings-common":[1205,652],"short-layout-dialogue":[1920,1032],"short-logo-dialogue":[1322,932],"short-position-bubble":[1920,1032],"short-position-center":[1920,1032],"short-position-emphasis":[1920,1032],"short-position-flow":[1920,1032],"short-position-mini":[1920,1032],"short-position-scroll":[1920,1032],"short-position-subtitle":[1920,1032],"short-title-dialogue":[1920,1032],"translation-audio-export":[1920,1032],"translation-voice-settings":[1920,1032]};
// Navigation between photographed views uses the original app controls.
const connect=(item,key)=>{item.open=key;return item;};
const photoNav=(width,height,x,y,name,text,key)=>connect(q(width,height,x,y,name,text),key);
const mainViews=['source','assemble','subtitle','detail','export','short','textEffects','translation'];
const sharedNav=[
 [1,100,'① 素材と解析','動画・コメントを読み込み、解析する範囲を選びます。','source'],
 [2,161,'② 動画を組み立てる','残す場面、つなぎ目、BGMや効果音を決めます。','assemble'],
 [3,223,'③ 字幕・コメント確認','字幕とコメントを確認し、本文や表示の設定を整えます。','subtitle'],
 [4,286,'④ 字幕演出','字幕の見た目や動きを選びます。','textEffects'],
 [5,347,'⑤ 映像演出','映像や音声の演出をタイムラインに配置します。','detail'],
 [6,409,'⑥ 確認・書き出し','完成プレビューを確認し、動画や字幕を保存します。','export'],
 [7,473,'⑦ ショート変換','縦動画に使う部分や表示位置を決めます。','short'],
 [8,534,'⑧ 翻訳音声・翻訳字幕','訳文や読み上げ音声を確認します。','translation'],
 [9,594,'簡単モード','ガイドに沿って、素材選びから書き出しまで進みます。','easyA'],
 [10,744,'はじめてガイド','アプリを初めて使うときの基本の流れを確認します。'],
 [11,780,'お知らせ','SPRのお知らせを確認します。'],
 [12,816,'X紹介特典','Xでの紹介特典の案内と対象条件を確認する入口です。'],
 [13,876,'状況未確認','アプリ内の利用状況を確認する入口です。表示名は状況に応じて変わります。'],
 [14,936,'設定・テーマ','アプリの見た目と、各工程・プレビューなどの設定を開きます。','settings'],
 [15,972,'使い方ガイド','アプリの画面やボタンごとの説明を開きます。'],
 [16,1007,'Q&A','よくある質問や、操作に困ったときの対処を確認します。']
];
const sharedScreens={
 source:'source',assemble:'assemble',subtitle:'subtitle',detail:'detail',export:'export',short:'short',textEffects:'textEffects',translation:'translation',
 caption:'subtitle',textPreset:'textEffects',mosaic:'detail',layout:'short',shortBubble:'short',shortFlow:'short',shortScroll:'short',shortCenter:'short',
 shortEmphasis:'short',shortSubtitle:'short',shortMini:'short',title:'short',trAudio:'translation',trVoice:'translation'
};
for(const [key,active] of Object.entries(sharedScreens)){
 const view=views[key];const dims=pictureDimensions[view.file];if(!dims||dims[0]!==1920||dims[1]!==1032)continue;
 const fixed=sharedNav.map(([number,y,name,text,target])=>{
  const destination=target!==active?target:undefined;
  return Object.assign(p(99,y,name,text,number<=8?undefined:destination),
   {number,stageTarget:number<=8?destination:undefined,stageLabel:number<=8?name.slice(2):undefined});
 });
 const local=view.pins.filter(pin=>!(pin.x<10&&sharedNav.some(([,y])=>Math.abs(pin.y*10.32-y)<8)));
 view.pins=[...fixed,...local.map((pin,i)=>Object.assign(pin,{number:17+i}))];
}
const pinNumber=(pin,index)=>pin.number??index+1;
const commentModes=[['bubble',49,'吹き出し'],['flow',130,'流しコメント'],['scroll',219,'縦スクロール']];
for(const [key] of commentModes)for(const [target,x,name] of commentModes)
 if(key!==target)views[key].pins.push(photoNav(1182,882,x,84,name,'コメントの設定例を切り替えます。',target));
const easyModes=[['easyA',68,'A 素材を選ぶ'],['easyB',193,'B 範囲を選ぶ'],['easyC',313,'C 誤字を確認'],['easyD',454,'D 動画を書き出す'],['easyE',589,'E ショート変換']];
for(const [key] of easyModes)for(const [target,x,name] of easyModes)
 if(key!==target)views[key].pins.push(photoNav(1150,910,x,109,name,'簡単モードの工程を切り替えます。',target));
views.easyA.pins.push(
 q(1150,910,915,201,'最近の自分のTwitchアーカイブ','一覧を開いて使う配信を選びます。'),
 q(1150,910,810,253,'動画情報を再取得','入力した動画の情報を取り直します。'),
 q(1150,910,914,299,'プロジェクト一覧','保存済みの素材プロジェクトを開き直します。'),
 q(1150,910,916,349,'PCの動画ファイルを取り込む','PC内にあるファイルを素材にします。'),
 q(1150,910,1050,786,'解析開始','選んだ範囲の字幕解析を開始します。'));

const easyControl=(key,x,y,name,text,open)=>{
 const pin=q(1150,910,x,y,name,text);if(open)pin.open=open;const pins=views[key].pins;const i=pins.findIndex(p=>p.name===name);if(i<0)pins.push(pin);else pins[i]=pin;
};
for(const [i,[key]] of easyModes.entries()){
 easyControl(key,1010,57,'元に戻す','直前の編集操作を取り消します。有効な操作があるときに使えます。');
 easyControl(key,1100,57,'やり直す','取り消した編集操作をもう一度反映します。');
 easyControl(key,193,878,'通常画面へ戻る','同じ作品を開いたまま通常画面へ戻ります。');
 if(i>0)easyControl(key,565,878,'前の手順に戻る','簡単モードのひとつ前の手順へ戻ります。',easyModes[i-1][0]);
 if(i<easyModes.length-1)easyControl(key,950,878,'次に進む','この手順を確認したら次の画面を開きます。',easyModes[i+1][0]);
}
for(const key of ['easyA','easyB','easyC','easyD']){
 const y={easyA:578,easyB:578,easyC:353,easyD:715}[key];
 const split=key==='easyC';
 easyControl(key,split?294:184,y,'再生／一時停止','表示中の見本動画を再生または一時停止します。');
 easyControl(key,split?857:515,y,'停止','見本動画の再生を止めます。');
 easyControl(key,360,y+37,'再生バー','バーを動かして確認したい位置に移ります。');
}
for(const key of ['easyA','easyB']){
 easyControl(key,385,758,'範囲選択','ピンクの範囲の両端をドラッグします。手を離した時点で選択が反映されます。');
 for(const [x,n,t] of [[296,'−','タイムラインの表示範囲を広げます。'],[333,'＋','タイムラインの時間を細かく表示します。'],[385,'全体','選べる範囲全体を表示します。']])easyControl(key,x,709,n,t);
}
easyControl('easyA',907,159,'TwitchアーカイブのURL／動画ID','使用するTwitchアーカイブのURLかIDを入力します。');
easyControl('easyA',957,604,'字幕解析の実行先','解析を実行する方法を選びます。利用できる選択肢はPCや設定で異なります。');
easyControl('easyA',923,702,'編集する作品','この画面で編集・解析する作品を確認します。');
easyControl('easyB',799,160,'範囲の開始','使う区間の開始位置を確認します。数値欄からも指定できます。');
easyControl('easyB',1020,160,'範囲の終了','使う区間の終了位置を確認します。数値欄からも指定できます。');
easyControl('easyC',260,546,'字幕の本文','直したい字幕をダブルクリックして入力します。確定した本文は自動保存されます。');
easyControl('easyC',510,546,'字幕の表示状態','その行の字幕を表示するかどうか切り替えます。');
easyControl('easyC',782,546,'コメントの本文','直したいコメントをダブルクリックして入力します。');
easyControl('easyC',1035,546,'コメントの表示状態','その行のコメントを表示するかどうか切り替えます。');
easyControl('easyD',1070,214,'保存先を選ぶ','完成したMP4を保存するフォルダーを選びます。');
easyControl('easyD',899,276,'ファイル名','完成動画の名前を指定します。拡張子の.mp4は自動で付きます。');
easyControl('easyD',915,785,'書き出す','見本と保存先を確認して、現在の作品をMP4に書き出します。');
easyControl('easyE',555,169,'UI見本: Shorts','視聴アプリでボタンなどが重なる場所をプレビュー上で確認します。見本自体は出力に入りません。');
easyControl('easyE',874,184,'コメント位置','縦動画でのコメントの位置を確認・調整します。');
easyControl('easyE',321,404,'ショートのプレビューを準備','縦動画の見本を用意します。すでに準備ができている場合は、そのまま再生できます。');
easyControl('easyE',552,709,'再生／一時停止','用意した縦動画の見本を再生または一時停止します。');
easyControl('easyE',1050,269,'保存先を選ぶ','ショート動画を保存するフォルダーを選びます。');
easyControl('easyE',870,342,'ファイル名','書き出すショート動画の名前を指定します。');
easyControl('easyE',871,389,'ショート変換','範囲とプレビューを確認し、ショート動画を書き出します。');
const settingSide=[
 ['settings-02-transitions',128,'② 動画を組み立てる'],['settings-03-comments',179,'③ 字幕・コメント確認'],['settings-04-caption-effects',234,'④ 字幕演出'],
 ['settings-05-video-effects',284,'⑤ 映像演出'],['settings-06-export',337,'⑥ 確認・書き出し'],['settings-07-shorts',392,'⑦ ショート変換'],['settings-08-translation',444,'⑧ 翻訳音声・翻訳字幕'],['settings',498,'共通・操作とマイ設定']
];
for(const key of ['settings',...Object.keys(extras)]){
 if(!key.startsWith('settings'))continue;
 const dims=pictureDimensions[views[key].file]||[1205,652];
 for(const [next,y,name] of settingSide)if(key!==next)views[key].pins.push(photoNav(dims[0],dims[1],94,y,name,'この工程に関係する設定画面を開きます。',next));
 views[key].pins.push(q(dims[0],dims[1],1090,623,'保存','設定した項目を保存します。'),q(dims[0],dims[1],1156,622,'キャンセル','この設定画面の案内を閉じます。'));
}

const extraSettings={
 'settings-source-storage':v('① 設定：AIの保存場所','settings-source-storage',[],'字幕解析のAIを探す場所を調整する画面です。'),
 'settings-comment-bot':v('③ 設定：bot除外','settings-comment-bot',[],'登録されたbotアカウントのコメントを表示対象から外します。コメントの元データは削除されません。'),
 'settings-file-locations':v('設定：保存先','settings-file-locations',[],'素材や動画がどこに保存されるか確認する画面です。'),
 'settings-work-backup':v('設定：作品バックアップ','settings-work-backup',[],'作品の編集内容を保全または復元する画面です。個人の設定のバックアップとは別です。')
};
Object.assign(views,extraSettings);
for(const key of Object.keys(extraSettings))pictureDimensions[key]=[742,652];
const narrowSettings=(key,x,y,n,t,to)=>{
 const p=q(742,652,x,y,n,t);
 if(to)p.open=to;
 views[key].pins.push(p);
};
for(const key of Object.keys(extraSettings)){
 for(const [to,y,n] of [['settings-source-storage',72,'① 素材と解析'],['settings-comment-bot',177,'③ 字幕・コメント確認'],['settings',498,'共通・操作とマイ設定'],['settings-file-locations',551,'保存先']])
  if(to!==key)narrowSettings(key,98,y,n,'該当する設定画面に切り替えます。',to);
 narrowSettings(key,625,626,'保存','変更した設定を保存します。');
 narrowSettings(key,695,626,'キャンセル','設定の変更を確定せず画面を閉じます。');
}
for(const key of ['settings-file-locations','settings-work-backup']){
 if(key!=='settings-file-locations')narrowSettings(key,288,68,'保存先','保存先を確認します。','settings-file-locations');
 if(key!=='settings-work-backup')narrowSettings(key,385,68,'作品バックアップ','作品を別のファイルへ保存する操作を開きます。','settings-work-backup');
}
narrowSettings('settings-source-storage',663,204,'フォルダーを選ぶ','AIを探す場所を指定します。変更は次回から使用されます。');
narrowSettings('settings-source-storage',376,244,'自動選択に戻す','場所の指定を解除し、アプリが選ぶ標準設定に戻します。');
narrowSettings('settings-source-storage',603,244,'次回の保存場所を保存','指定した場所を次回用に保存します。');
narrowSettings('settings-comment-bot',494,155,'botアカウント除外','コメントから除外するbotの登録を確認します。元のコメントは残ります。');
for(const [y,n,t] of [
 [287,'選択作品をファイルへバックアップ','現在選んだ作品の編集内容をファイルに保存します。'],
 [326,'ファイルから別作品として復元','指定したバックアップを、元の作品を上書きせず別作品として復元します。'],
 [367,'復元した作品を開く','復元処理の後、その作品を編集画面で開きます。'],
 [407,'素材・台帳を含む保存コピー','編集内容に加え、対応するファイルも含めて保存コピーを作ります。'],
 [447,'保存コピーから復元準備','保存コピーから作品を戻す準備を行います。'],
 [487,'保存コピーから編集用の別ワークスペースを準備','コピーをもとに、元の作業場所とは別の編集環境を用意します。'],
 [527,'復元準備済みコピーを照合','復元準備したコピーの内容を照合します。']
])narrowSettings('settings-work-backup',493,y,n,t);
function extraSettingsEntry(view,x,y,name,text,target){
 const [w,h]=pictureDimensions[views[view].file];
 const p=q(w,h,x,y,name,text);p.open=target;views[view].pins.push(p);
}
extraSettingsEntry('settings',94,73,'① 素材と解析','解析に使うAIの保存場所を確認します。','settings-source-storage');
extraSettingsEntry('settings',95,553,'保存先','素材・書き出しの保存先と作品バックアップを確認します。','settings-file-locations');
extraSettingsEntry('settings-03-comments',336,66,'bot除外','登録したbotを表示から除外する設定です。','settings-comment-bot');
const sectionTabs=[
 [['settings',243,'外観'],['settings-common-hotkeys',337,'ホットキー'],['settings-common-my-settings',441,'マイ設定'],['settings-common-preview',531,'完成プレビュー']],
 [['settings-03-comments',250,'時刻連動'],['settings-03-speakers',404,'AI話者'],['settings-03-overlap',483,'コメント重なり'],['settings-03-restore',578,'字幕の復元']]
];
for(const set of sectionTabs)for(const [key] of set)for(const [target,x,label] of set)
 if(key!==target)views[key].pins.push(photoNav(1205,652,x,66,label,'設定内のタブを切り替えます。',target));
views['settings-02-transitions'].pins.push(
 photoNav(1205,652,250,66,'見どころ','見どころの設定へ切り替えます。','settings-02-highlights'),
 q(1205,652,232,105,'クリップ端への吸着','ドラッグ中にクリップの端へ吸着するかを切り替えます。'),
 q(1205,652,232,129,'自動クロスディゾルブ','新しくつながった映像の境界に自動で切替を入れるか選びます。'),
 q(1205,652,232,154,'自動クロスフェード','新しくつながった音声の境界を自動でなめらかにするか選びます。'));
views['settings-02-highlights'].pins.push(
 photoNav(1205,652,322,66,'つなぎ目','つなぎ目の設定へ切り替えます。','settings-02-transitions'),
 q(1205,652,700,568,'除外語を保存','集計から外したい語句を1行に1件書いて保存します。次回の見どころ解析から反映されます。'));
const translations=[['translation',1582,'字幕書き出し'],['trAudio',1685,'音声書き出し'],['trVoice',1778,'音声設定']];
for(const [key] of translations.slice(1))for(const [target,x,label] of translations)
 if(key!==target)views[key].pins.push(connect(p(x,116,label,'翻訳の表示タブを切り替えます。'),target));
const siblingGroups=[commentModes.map(x=>x[0]),easyModes.map(x=>x[0]),Object.keys(views).filter(k=>k==='settings'||k.startsWith('settings-')),families.shortBubble,translations.map(x=>x[0])];
function followPin(key){
 if(mainViews.includes(current)&&mainViews.includes(key)&&Object.hasOwn(groups,key)){selectedScreen=key;navigate();return;}
 if(siblingGroups.some(group=>group.includes(current)&&group.includes(key))){current=key;selectedPin=0;draw();}
 else enter(key,true);
}
// Fine-tuned placements from the four screens reviewed at normal browser size.
const placementEdits={
 'main-01-sakura':{24:{dir:'left',edge:1340},25:{dir:'left',edge:1650}},
 'main-02-sakura':{20:{dir:'top'},23:{dir:'bottom'},24:{dir:'bottom'},26:{dir:'bottom'},30:{dir:'left',edge:1623}},
 'main-03-dialogue':{18:{dir:'right',edge:553},19:{dir:'right',edge:1014,labelHalf:9,straight:true},20:{dir:'right',edge:1203},
  21:{dir:'bottom',edgeY:421},22:{dir:'bottom',edgeY:421},23:{dir:'bottom',edgeY:421},24:{dir:'bottom',edgeY:421},25:{dir:'bottom',edgeY:421},
  26:{dir:'bottom',edgeY:420},27:{dir:'bottom',edgeY:420},28:{dir:'bottom',edgeY:420},29:{dir:'bottom',edgeY:420},30:{dir:'bottom',edgeY:420}},
 'main-05-preview-ready':{30:{dir:'top'},31:{dir:'top'},32:{dir:'top'},33:{dir:'top'}}
};
function pinLane(view,pin){
 const manual=placementEdits[view.file]?.[pin.number];if(manual)return {...manual,key:'review-adjustment'};
 if(pin.number>=1&&pin.number<=16)return {dir:'right',edge:165,key:'common-sidebar'};
 const file=view.file,x=pin.x*19.2,y=pin.y*10.32,n=pin.name;
 if((file==='main-05-preview-ready'||file==='effects-05-mosaic')&&x>320&&x<500&&y>=170&&y<=490)
  return {dir:'left',edge:359,key:'effect-palette'};
 if(/(?:カット|分割|ハサミ)/.test(n)||/^(?:再生(?:[ 　]*[／/]|・)|停止$)/.test(n))
  return {dir:'top',key:/カット|分割|ハサミ/.test(n)?'timeline-cuts':'playback'};
 if((file.startsWith('easy-')&&Math.abs(y-123.6)<6&&/^[A-E] /.test(n))||
    (file.startsWith('popup-03-')&&Math.abs(y-98)<8&&/^(吹き出し|流しコメント|縦スクロール)$/.test(n))||
    (file.startsWith('settings-')&&y>85&&y<112&&pin.open)||
    (file.startsWith('translation-')&&y>100&&y<128&&/書き出し|音声設定/.test(n)))
  return {dir:'right',key:'inner-tabs'};
 return null;
}
function placePins(view,picture,pins){
 const dims=pictureDimensions[view.file];if(!dims||!view.pins.length)return;
 const width=picture.clientWidth||Math.min(1150,dims[0]), scale=width/dims[0],height=dims[1]*scale;
 const size=width<760?17:21,rad=size/2,gap=3;
 const rect=(cx,cy,rx,ry)=>({l:cx-rx,t:cy-ry,r:cx+rx,b:cy+ry});
 const hits=(a,b)=>a.l<b.r&&a.r>b.l&&a.t<b.b&&a.b>b.t;
 const bounds=(r)=>r.l>=2&&r.r<=width-2&&r.t>=22*scale&&r.b<=height-2;
 const labelRects=view.pins.map(pin=>{
  const x=pin.x*width/100,y=pin.y*height/100;
  const chars=[...pin.name].reduce((n,c)=>n+(/[^\x00-\x7f]/.test(c)?1:.57),0);
  let half=Math.min(100,Math.max(5,chars*(pinLane(view,pin)?.key==='inner-tabs'?4.8:6)))*scale;
  // Checkbox and slider markers already anchor beside their labels.
  if(pin.x<2.4||/^(?:−|＋|停止|閉じる)$/.test(pin.name))half=Math.min(half,20*scale);
  const tuned=pinLane(view,pin)?.labelHalf;if(tuned!==undefined)half=tuned*scale;
  return {x,y,l:x-half,r:x+half,t:y-8*scale,b:y+8*scale};
 });
 const claimed=[];
 const buttons=Array.from(pins.children), lanes=view.pins.map(pin=>pinLane(view,pin));
 const ordering=buttons.map((_,i)=>i).sort((a,b)=>Number(Boolean(lanes[b]))-Number(Boolean(lanes[a])));
 for(const i of ordering){
  const button=buttons[i];
  const a=labelRects[i];if(!a)continue;
  const choices=[
   ['left',a.l-rad-gap,a.y],['right',a.r+rad+gap,a.y],
   ['top',a.x,a.t-rad-gap],['bottom',a.x,a.b+rad+gap]
  ];
  const clear=(r)=>bounds(r)&&!labelRects.some(k=>hits(r,k))&&!claimed.some(k=>hits(r,k));
  let best;
  const lane=lanes[i];
  if(lane){
   const found=choices.find(c=>c[0]===lane.dir), dir=lane.dir;
   const bx=lane.edge===undefined?found[1]:(lane.edge*scale+(dir==='left'?-1:1)*(rad+gap)),by=lane.edgeY===undefined?found[2]:(lane.edgeY*scale+(dir==='top'?-1:1)*(rad+gap));
   // Keep each family on the same side, rather than falling through to
   // another side for a single item. Small parallel shifts preserve the lane.
   for(const outward of [0,4,8,12,16,20,24])for(const along of (lane.straight?[0]:lane.key==='inner-tabs'?[0,-4,-8,-12,-16,-20,-24,-28,-32,4,8,12,16]:[0,-4,4,-8,8,-12,12,-16,16])){
    if(best)break;
    const x=bx+(dir==='left'?-outward:dir==='right'?outward:along);
    const y=by+(dir==='top'?-outward:dir==='bottom'?outward:along);
    const r=rect(x,y,rad+1,rad+1);
    if(clear(r)){
     const toText=dir==='left'?a.l-(x+rad):dir==='right'?(x-rad)-a.r:dir==='top'?a.t-(y+rad):(y-rad)-a.b;
     best={dir,x,y,r,leader:Math.max(gap,toText)};
    }
   }
  }
  for(const [dir,baseX,baseY] of choices){
   if(best)break;
   let dx=0,dy=0;
   if(dir==='left')dx=-1;if(dir==='right')dx=1;if(dir==='top')dy=-1;if(dir==='bottom')dy=1;
   for(const extra of [0,4,8,12]){
    const x=baseX+dx*extra,y=baseY+dy*extra,r=rect(x,y,rad+1,rad+1);
    if(clear(r)){best={dir,x,y,r,leader:gap+extra};break;}
   }
   if(best)break;
  }
  // Keep the label readable even in tight clusters. An untethered marker is put
  // on the closest unoccupied blank area, never directly atop a control label.
  if(!best){
   for(let dist=18;dist<=110&&!best;dist+=5)for(const [dx,dy] of [[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[1,-1],[-1,1],[1,1]]){
    const x=a.x+dx*dist,y=a.y+dy*dist,r=rect(x,y,rad+1,rad+1);
    if(clear(r)){best={dir:'detached',x,y,r,leader:0};break;}
   }
  }
  if(!best){button.hidden=true;continue;}
  button.hidden=false;claimed.push(best.r);button.dataset.dir=best.dir;
  button.style.left=best.x/width*100+'%';button.style.top=best.y/height*100+'%';
  button.style.setProperty?.('--pin-leader',best.leader+'px');
 }
}
let pictureObserver;
const phoneGuide=window.matchMedia?.('(max-width:950px) and (hover:none) and (pointer:coarse)');
let phoneRows=new Map(),phoneActive=-1;
function renderPhoneGuide(view){
 const list=$('nativeMobileGuide'),guide=$('nativeGuide');
 phoneRows=new Map();phoneActive=-1;
 guide.toggleAttribute?.('data-phone-guide',Boolean(phoneGuide?.matches));
 list.replaceChildren();
 if(!phoneGuide?.matches)return;
 function paragraph(parent,text){const el=document.createElement('p');el.textContent=text;parent.appendChild(el);return el;}
 for(const [i,pin] of view.pins.map((p,i)=>[i,p]).sort(([a,p],[b,q])=>pinNumber(p,a)-pinNumber(q,b)||a-b)){
  const details=document.createElement('details'),summary=document.createElement('summary');
  summary.textContent=pinNumber(pin,i)+' '+pin.name;
  details.appendChild(summary);list.appendChild(details);phoneRows.set(i,{details,summary});
  summary.addEventListener('click',()=>{phoneActive=i;});
  const body=document.createElement('div');body.className='phone-explanation';details.appendChild(body);
  const r=Object.hasOwn(rich,pin.name)?rich[pin.name]:{};
  paragraph(body,r.desc||pin.text);
  if(r.steps?.length){
   const ol=document.createElement('ol');body.appendChild(ol);
   for(const step of r.steps){const li=document.createElement('li');li.textContent=step;ol.appendChild(li);}
  }
  if(r.extra)paragraph(body,r.extra);
  if(r.tip)paragraph(body,r.tip);
  if(r.note)paragraph(body,r.note).className='warning';
  const target=pin.stageTarget||pin.open;
  if(target){
   const label=pin.stageTarget?pin.stageLabel+'タブを見てみる':'「'+views[target].name+'」'+((inlineShortViews.has(target)||inlineCaptionViews.has(target))?'を同じ画面で見る':'の画面を開く');
   button(body,label,()=>{phoneActive=i;selectedPin=i;followPin(target);$('nativeTitle').scrollIntoView?.({block:'start'});});
  }else if(['閉じる','詳細を閉じる','キャンセル','通常画面へ戻る'].includes(pin.name)&&(stack.length)){
   button(body,'元の画面に戻る',back);
  }
 }
 if(!view.pins.length&&view.info)paragraph(list,view.info);
}
const popupHelp={"source":[["Twitchの任意連携｜コピー","画面に表示されている有効な確認コードだけをコピーします。"],["Twitchの任意連携｜公式Twitch画面を開く","ブラウザで公式の確認画面を開きます。Twitch側で連携するアカウントと許可内容を確認してください。"],["Twitchの任意連携｜完了","認証処理が終わってから連携画面を閉じます。このボタンが認証を開始するわけではありません。"],["まとめて準備｜中止","確認が出ます。中止すると実行中の工程を止め、完了済みの工程・元動画・既存作品を残して保留します。"],["まとめて準備｜保留した準備を再開","保留した準備を再開します。"],["まとめて準備｜OK／OK（話者の名前・役割・色へ）","結果を確認して閉じます。話者分析も完了している場合は、対象作品と未保存の入力を確認してから③の話者設定を開きます。"],["まとめて準備｜次の準備を設定","結果画面から準備内容の設定画面に戻ります。この操作では新しい準備は始まりません。"],["まとめて準備｜保留計画を取り消す","保留中の計画を取り消します。以前に取得・保存した結果は残ります。"],["解析を中断","進行中の解析を途中で止めます。解析中だけ選べる操作です。"],["元動画の保存フォルダを開く","取得した元動画の保存先をエクスプローラーで開きます。"]],"subtitle":[["話者のアイコンを選ぶ｜名前・Twitch IDを検索","一覧にある候補を名前かTwitch IDで絞ります。"],["話者のアイコンを選ぶ｜コメントが多い順／名前順／ID順","アイコン候補の並び順を切り替えます。"],["話者のアイコンを選ぶ｜この名前・アイコンを使う","選択した候補を採用します。カードをダブルクリックしても採用できます。"],["話者の設定｜解除","選んでいたアイコンとの関連付けを外します。名前・役割・色は変わらず、保存で確定します。"],["コメントのアイコン｜一括選択","表示中の候補をまとめて選びます。絞り込み中は「検索結果を一括選択」になります。"],["BOT除外一覧｜除外を解除","選んだアカウントをBOT除外一覧から外します。コメントの元データを削除する操作ではありません。"],["Twitchスタンプ｜再取得","不足しているスタンプ画像だけを取り直します。取得済みの画像や手動登録した画像は残ります。"],["吹き出しコメントのアイコン反映｜カード左上のチェック","その人の吹き出しにアイコンを出すかどうかを選びます。設定は右上の×で閉じると保存されます。"],["各コメントの「表示中／非表示」","コメントの右側にある各行のボタンで、動画にそのコメントを出すかどうかを切り替えます。左の四角は表示方法を変える対象を選ぶ欄です。"]],"detail":[["プレビュー直接操作","オンにすると、対応する項目をプレビュー上で直接調整できます。操作前に選んでいる項目を確認します。"],["タイムライン｜カット","選択した項目によって動作が変わります。字幕・コメントは非表示になり、③で表示へ戻せます。つなぎ目を選んだ場合は演出だけを外します。"],["タイムライン｜リップルカット","対象の映像・音声の区間を取り除き、後ろの空きを詰めます。字幕・コメントだけを選んだ場合は時間を詰めません。"]],"assemble":[["AIトーク目次｜字幕全体から話題を見つける","現在の字幕をもとに話題の候補を探します。候補を開いただけでは採用されません。"],["AIトーク目次｜話題の印・表示設定","タイムラインで使う話題の目印の表示を確認します。"],["つなぎ目｜選択したつなぎ目演出を削除","タイムラインで選択したつなぎ目の演出だけを外します。元の映像・音声クリップは残ります。"],["OP / ED｜セット読込","選んだOP・EDセットを設定欄に読み込みます。作品への反映には「OP/ED設定を適用」を使います。"],["新しい作品","同じ素材を使って別の編集を始めたいときに、新しい作品を作ります。"],["つなぎ目｜時間プリセット／指定秒数","選んだつなぎ目の演出時間を既定値から選ぶか、秒数で指定します。「適用・保存」で反映します。"],["マーカー・クリップ情報","取得済みのマーカーとクリップの情報を開きます。一覧が空の場合は取得状況を確認してください。"],["OP / ED｜動画を選ぶ","OPまたはEDに使う動画ファイルを選びます。"],["OP / ED｜場所を指定し直す","参照するOP・EDと同じ素材の新しい保存場所を指定します。"],["OP / ED｜分割・個別追加設定を解除（共通設定へ）","切り目や各片の音量・追加フェードを解除して共通設定に戻します。元動画と尺は変えず、元に戻す操作を使えます。"],["OP / ED｜入力を破棄して閉じる","まだ保存していない入力を取り消し、設定画面を閉じます。"]],"hlogo":[["チャンネル名・ロゴ｜文字のみ","ロゴ画像を外し、文字だけにします。元の画像ファイルは削除しません。"]],"speaker":[["AI話者分析｜▶ 試聴","候補の声を聞いて、どの話者かを確認します。"],["AI振り分けを編集","すでにある振り分けを開いて、候補の名前・役割・色・アイコンを見直します。"],["AI振り分けを編集｜統合","組み合わせたい相手を選び、候補を同じグループにまとめます。音声ファイルは消しません。"],["AI振り分けを編集｜再分析","確認を読み、設定を保存して現行の設定で分析し直します。手動指定は保持し、中止や失敗では前回結果も残します。"],["分析中の中止","「AI話者分析」が分析中の表示に変わってから、同じボタンをもう一度押すと、この回の分析を止めます。登録済みの手動指定は残ります。"]],"textEffects":[["ミニテーマのレイアウト｜枠画像を登録","PNGまたはJPEGを枠に登録します。プレビューで位置と大きさを調整できます。"],["ミニテーマのレイアウト｜マイ設定に登録","次に追加するミニテーマの基準として登録します。編集中の作品への変更は別に保存します。"],["ミニテーマのレイアウト｜初期値に戻す","編集欄に標準の値を戻します。現在の作品に適用するには保存や一括反映が必要です。マイ設定は残ります。"],["＋ 新規登録","新しい字幕演出を設定し、あとから一覧で選べるようにします。"]],"settings-work-backup":[["作品バックアップ｜ファイルから別作品として復元","作品バックアップを選び、別の作品として復元します。元の作品を上書きする操作ではありません。"],["作品バックアップ｜復元した作品を開く","復元が完了した作品を開きます。個人設定の読み込みとは別の機能です。"],["素材・台帳を含む保存コピー（復元は準備中）","素材と台帳を含む保存コピーを作ります。ここからすぐ作業を再開できる案内ではありません。"],["保存コピーから復元準備（利用再開は準備中）","保存コピーから復元の準備をします。既存作品を上書きしたり、ここから直接利用を再開したりする操作ではありません。"]],"slogo":[["チャンネル名・ロゴ・ショート専用｜選んだ要素を外す","縦動画の編集リストから選んだ文字・画像を外します。横動画の編集とは別です。"],["プラットフォームUIの配置見本","縦画面の上に表示されるサービスのボタン位置を見本で確認し、ロゴなどの配置を調整します。"],["文字色を選択／縁1の色を選択／縁2の色を選択","選んだ文字要素の文字本体や、それぞれの縁の色を選びます。"]],"translation":[["自動翻訳を中止","この回の翻訳を止めます。保存済みの訳文と日本語は保持されます。"],["日本語字幕を書き出す","日本語の字幕を書き出します。"],["翻訳字幕を書き出す（SRT）","翻訳した字幕をSRTファイルとして保存します。"]],"bubble":[["閉じる（未保存の変更は反映しません）","保存していない入力は反映せず、コメントの位置設定を閉じます。"]],"flow":[["閉じる（未保存の変更は反映しません）","保存していない入力は反映せず、コメントの位置設定を閉じます。"]],"scroll":[["閉じる（未保存の変更は反映しません）","保存していない入力は反映せず、コメントの位置設定を閉じます。"]],"mosaic":[["モザイク（数値指定）","伏せたい範囲をプレビューで確認し、位置・大きさや粗さを数値で調整します。"]],"settings-03-overlap":[["現在の作品へこの設定を反映","コメントが重なったときの表示方法を、開いている作品にも反映します。"]],"settings-03-restore":[["途中の字幕を残す","中断した解析の途中結果を残したいときの設定を開きます。"]],"settings-05-video-effects":[["現在の演出を別名で保存","選んだ独立ズームの開始・終了と中心位置を、再利用できる設定として新しい名前で保存します。"],["選択中の同じ種類の演出へ適用","呼び出した独立ズームの設定を⑤で選んでいる同種の演出に適用します。"]],"settings-07-shorts":[["チャンネル名・ロゴの設定とマイ設定を開く","横動画やショートに共通で使うチャンネル名とロゴの設定一覧を開きます。"]],"settings-common-hotkeys":[["初期値を入力欄へ戻す","ショートカットを編集欄の初期値へ戻します。"],["ホットキーを保存","現在のショートカットの組み合わせを保存します。"]],"settings-common-my-settings":[["現在の設定を新規／別名保存","今の作品設定を新しい名前でマイ設定に保存します。"],["選択へ現在の設定を上書き","一覧から選んだマイ設定に、開いている作品の設定を上書きします。"],["名前変更","選んだマイ設定の名前を変えます。"],["素材参照の確認・指定し直し","設定が参照する素材を確認し、見つからない場合は指定し直します。"],["作品へ適用","選んだマイ設定を開いている作品に反映します。"]],"settings-file-locations":[["書き出し後のプレビュー整理…","書き出し後に使ったプレビューを整理するための設定を開きます。"],["作品の整理｜一覧を読み直す","保存されている作品一覧を更新します。"],["作品の整理｜選んだ作品を一覧から退避","作業一覧に出さないよう退避します。作品そのものを削除する操作ではありません。"],["作品の整理｜退避した作品を一覧へ戻す","退避済みの作品を通常の作業一覧へ戻します。"]],"trAudio":[["翻訳音声を準備（再生しません）","選んだ種類の翻訳音声を先に生成します。この操作だけでは再生しません。"],["一部の音声を準備","対象の一部から音声を準備します。"],["翻訳音声ミックスを書き出す（WAV）","現在の翻訳音声のミックスをWAV形式で保存します。"]],"trVoice":[["声一覧を更新","選べる声の一覧を読み直します。"],["未設定の声を自動割当","まだ声を設定していない話者に割り当てます。"]],"export":[["準備をやり直す","完成プレビューや書き出しの準備で受け取った案内を確認し、準備をもう一度試します。"]],"easyB":[["マーカー・クリップ情報","取得済みのTwitch情報を参照して、使う範囲を探す目安にします。"]]};
function drawPopupHelp(viewKey){
 const host=$('nativeGuide');
 host.querySelector?.('.guide-popup-reference')?.remove?.();
 const rows=popupHelp[viewKey]; if(!rows?.length)return;
 const el=document.createElement('details');el.className='guide-popup-reference';
 const s=document.createElement('summary');s.textContent='開いた画面のボタンも見る';el.appendChild(s);
 for(const [label,description] of rows){const row=document.createElement('details'), heading=document.createElement('summary'),p=document.createElement('p');heading.textContent=label;p.textContent=description;row.appendChild(heading);row.appendChild(p);el.appendChild(row);}
 host.appendChild(el);
}
const inlineCaptionViews=new Set(['caption']);
const inlineShortViews=new Set(['layout','shortBubble','shortFlow','shortScroll','shortCenter','shortEmphasis','shortSubtitle','shortMini','title']);
function draw(focusBack=false){
 const view=views[current];if(!view)return;
 $('nativeTitle').textContent=view.name;
 const img=$('nativeImage');
 const dims=pictureDimensions[view.file];
 if(dims){const [w,h]=dims;img.width=w;img.height=h;img.style.aspectRatio=w+' / '+h;
   img.parentElement.style.maxWidth='100%';}

 img.src='assets/guide-sakura/hp-'+view.file+'.jpg';img.alt=view.name+'。架空素材を使用したSPRの画面。';
 // An opaque HTML cover masks only the version string. All original geometry remains.
 const picture=img.parentElement;
 const stage=$('nativeStage'),backdrop=$('nativeBackdrop'),baseImage=$('nativeBackdropImage');
 if(stage&&backdrop&&baseImage&&dims){
  const base=(inlineCaptionViews.has(current)||inlineShortViews.has(current))?null:(stack.length?views[stack[0].current]:(selectedScreen==='easy'?views[easyReturnScreen]:null));
  const baseDims=base&&pictureDimensions[base.file];
  stage.dataset.compact=String(view.file.startsWith('easy-'));
  stage.dataset.popup=String(Boolean(baseDims));
  stage.style.setProperty?.('--guide-image-ratio',dims[0]/dims[1]);
  backdrop.hidden=!baseDims;
  if(baseDims){
   stage.style.setProperty?.('--guide-base-ratio',baseDims[0]/baseDims[1]);
   backdrop.dataset.mask=String(baseDims[0]===1920&&baseDims[1]===1032);
   const baseSrc='assets/guide-sakura/hp-'+base.file+'.jpg';
   if(baseImage.getAttribute?.('src')!==baseSrc)baseImage.src=baseSrc;
  }
 }
 if(picture.querySelector){
  picture.querySelector('.spr-version-mask')?.remove();
  picture.querySelector('.spr-easy-title-mask')?.remove();
  picture.querySelector('.spr-speaker-label')?.remove();
  if(view.file==='main-03-dialogue'||view.file==='main-03-caption-inline'){
   const label=document.createElement('span');label.className='spr-speaker-label';label.textContent='話者';label.setAttribute('aria-hidden','true');
   picture.style.containerType='inline-size';
   label.style.cssText='position:absolute;pointer-events:none;z-index:2;left:19.91%;top:37.57%;width:2.46%;height:2%;background:#fafafa;display:grid;place-items:center;color:#302b31;font:400 clamp(3px,0.67cqw,13px)/1 \"Yu Gothic UI\",sans-serif;';
   picture.appendChild(label);
  }
  if(view.file.startsWith('easy-')){
   const cover=document.createElement('span');cover.className='spr-easy-title-mask';
   cover.setAttribute('aria-hidden','true');picture.appendChild(cover);
  }
  if(dims&&dims[0]===1920&&dims[1]===1032){
   const cover=document.createElement('span');cover.className='spr-version-mask';cover.setAttribute('aria-hidden','true');
   cover.style.cssText='position:absolute;pointer-events:none;z-index:2;left:6.45%;top:.10%;width:86.40%;height:2.05%;background:#eff4f8';
   picture.appendChild(cover);
  }
 }
 const list=$('nativeIndex'),pins=$('nativePins'),tools=$('nativeViews');
 renderPhoneGuide(view);
 drawPopupHelp(current);
 pictureObserver?.disconnect();list.replaceChildren();pins.replaceChildren();tools.replaceChildren();
 const close=(stack.length)?button(tools,inlineShortViews.has(current)?'⑦の画面に戻る':inlineCaptionViews.has(current)?'③の画面に戻る':'閉じて戻る',back):null;
 tools.classList.toggle('guide-return-row',Boolean(close));
 if(close)close.className='guide-return';
 if(focusBack&&close)close.focus({preventScroll:true});
 const pick=(i)=>{selectedPin=i;const pin=view.pins[i];writeGuide(pin,pinNumber(pin,i));
  pins.querySelectorAll('button').forEach((b,n)=>{b.classList.toggle('active',n===i);b.setAttribute('aria-pressed',String(n===i));});
  list.replaceChildren();
  if(pin.stageTarget){
   const label=pin.stageLabel+'タブを見てみる';
   const link=button(list,label,()=>followPin(pin.stageTarget));
   link.className='guide-stage-link';
  }
 };
 if(view.pins.length){
  view.pins.forEach((pin,i)=>{const b=button(pins,String(pinNumber(pin,i)),()=>{mode='';pick(i);if(phoneGuide?.matches){const row=phoneRows.get(i);if(row){phoneActive=i;row.details.open=true;row.summary.focus({preventScroll:true});row.summary.scrollIntoView?.({block:'nearest'});}return;}if(pin.open)followPin(pin.open);else if((pin.name==='閉じる'||pin.name==='詳細を閉じる'||pin.name==='キャンセル'||pin.name==='通常画面へ戻る')&&(stack.length))back();});b.className='pin';b.dataset.nativePin=i;b.style.left=pin.x+'%';b.style.top=pin.y+'%';b.setAttribute('aria-label',pinNumber(pin,i)+' '+pin.name);});
  placePins(view,picture,pins);
  pictureObserver?.disconnect();
  if(typeof ResizeObserver==='function'){pictureObserver=new ResizeObserver(()=>placePins(view,picture,pins));pictureObserver.observe(picture);}
  pick(Math.min(selectedPin,view.pins.length-1));
 }else{
  writeGuide({name:view.name,text:view.info});

 }

}
const legacy=navigate;navigate=function(){legacy();const rootView=selectedScreen==='easy'?'easyA':selectedScreen;const on=selectedRank==='t3'&&!!views[rootView];
 if(!on){stack=[];return;}if(selectedScreen!=='easy')easyReturnScreen=selectedScreen;$('nativeGuide').hidden=false;$('available').hidden=true;$('pending').hidden=true;entry=current=rootView;mode='';selectedPin=0;stack=[];draw();
};
const routes={
 'guide-source-material':['source','PCの動画ファイルを取り込む'],'guide-source-analysis':['source','選択範囲をGPU解析／再開'],
 'guide-subtitle-correction':['caption'],'guide-subtitle-timing':['caption'],'guide-subtitle-duration':['caption'],
 'guide-comment-selection':['subtitle','コメントの表示方法（対象を選ぶ）'],'guide-comment-correction':['subtitle','コメントの本文'],'guide-comment-timing':['subtitle','コメントの本文'],
 'guide-export-review':['export','再生／一時停止'],'guide-export-save':['export','書き出し'],
 'guide-short-range':['short','複数区間をつなぐ'],'guide-short-preview':['short','縦プレビューを準備'],'guide-short-save':['short','書き出し'],'guide-short-layout':['layout']
};
function destination(){const id=location.hash.slice(1);if(id==='tier3-easy'){window.openTier3GuideAt(id);return;}if(selectedRank!=='t3')return;const route=routes[id];if(!route)return;const [key,name]=route;if(key!==current){enter(key);return;}const i=views[key].pins.findIndex(x=>x.name===name);if(i>=0){selectedPin=i;draw();}}
window.openTier3GuideAt=function(id){
 const help=$(id);if(!help)return false;
 const section=help.closest('section[id]');const key=section?.id?.slice(6);
 const map={source:['source'],assemble:['assemble'],text:['subtitle'],subtitle:['detail','textEffects'],effects:['detail'],export:['export'],short:['short'],translation:['detail','translation'],easy:['easy'],settings:['detail','settings']};
 const target=map[key];if(!target)return false;
 selectedRank='t3';selectedScreen=target[0];navigate();
 if(target[1])enter(target[1]);
 if(help.tagName==='DETAILS'){
  const label=help.querySelector('summary')?.textContent?.trim();
  const idx=views[current].pins.findIndex(pin=>pin.name===label);
  if(idx>=0){selectedPin=idx;draw();}
  else if(label)writeGuide({name:label,text:[...help.children].filter(n=>n.matches('p,ol,ul')).map(n=>n.textContent.trim()).join(' ')});
 }
 $('screenPanel').scrollIntoView({block:'start'});return true;
};
window.addEventListener('hashchange',()=>queueMicrotask(destination));
phoneGuide?.addEventListener?.('change',()=>{if(selectedRank==='t3'&&views[current])draw();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&(stack.length)){e.preventDefault();back();}});
navigate();queueMicrotask(destination);
})();
