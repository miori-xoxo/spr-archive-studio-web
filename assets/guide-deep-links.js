/* Stable Q&A destinations. Preserve keys when replacing or extending screen guides. */
const guideRoutes = {
  'guide-source': {screen:'source'},
  'guide-source-material': {screen:'source', mock:'素材を用意する'},
  'guide-source-analysis': {screen:'source', mock:'内容を解析する'},
  'guide-assemble': {screen:'assemble'},
  'guide-subtitle': {screen:'subtitle'},
  'guide-subtitle-correction': {screen:'subtitle', view:'字幕の行内編集', control:'字幕の入力欄'},
  'guide-subtitle-timing': {screen:'subtitle', view:'字幕の行内編集', control:'表示をずらす'},
  'guide-subtitle-duration': {screen:'subtitle', view:'字幕の行内編集', control:'表示時間'},
  'guide-comment-selection': {screen:'subtitle', view:'一覧', control:'コメントの採否'},
  'guide-comment-correction': {screen:'subtitle', view:'コメントの行内編集', control:'コメントの入力欄'},
  'guide-comment-timing': {screen:'subtitle', view:'コメントの行内編集', control:'表示をずらす'},
  'guide-detail': {screen:'detail', rank:'t3'},
  'guide-export': {screen:'export'},
  'guide-export-review': {screen:'export', mock:'完成映像を確認する'},
  'guide-export-save': {screen:'export', mock:'動画を書き出す'},
  'guide-short': {screen:'short', rank:'t1'},
  'guide-short-range': {screen:'short', rank:'t1', view:'縦プレビュー完成', control:'範囲を確認・確定'},
  'guide-short-preview': {screen:'short', rank:'t1', view:'縦プレビュー完成', control:'縦プレビューを準備'},
  'guide-short-save': {screen:'short', rank:'t1', view:'縦プレビュー完成', control:'縦設定を保存'},
  'guide-short-layout': {screen:'short', rank:'t1', view:'配置設定', control:'字幕・コメントの配置'}
};
function openGuideDestination() {
  let key;
  try { key=decodeURIComponent(location.hash.slice(1)); } catch { return; }
  const route=Object.prototype.hasOwnProperty.call(guideRoutes,key)&&guideRoutes[key];
  if(!route)return;
  const ranks=['basic','t1','t2','t3'];
  if(route.rank&&ranks.indexOf(selectedRank)<ranks.indexOf(route.rank))selectedRank=route.rank;
  selectedScreen=route.screen;
  navigate();
  const choose=(selector,label)=>{
    const button=[...document.querySelectorAll(selector)].find(button=>button.textContent.replace(/^\d+\s*/,'')===label);
    if(button)button.click();
  };
  if(route.view)choose('#nativeViews button',route.view);
  if(route.control)choose('#nativeIndex button',route.control);
  if(route.mock)choose('#mockControls button',route.mock);
  const panel=document.getElementById('screenPanel');
  requestAnimationFrame(()=>{panel.scrollIntoView({block:'start'});panel.focus({preventScroll:true});});
}
window.addEventListener('hashchange',openGuideDestination);
// Reopen an already-selected destination after a manual screen change.
document.addEventListener('click',event=>{
  const anchor=event.target.closest('a[href^="#guide-"]');
  if(anchor&&anchor.hash===location.hash)openGuideDestination();
});
openGuideDestination();
