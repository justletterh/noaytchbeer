function lmoo(s) {
    let topic = "MooTools";
    console.log(`[${topic}] - ${s}`);
}
  
window.addEvent('domready', () => {
    lmoo("Page Loaded!!!");
});