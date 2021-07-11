function lz(s) {
  let topic = "Zepto";
  console.log(`[${topic}] - ${s}`);
}

Zepto(document).ready(() => {
  lz("Page Loaded!!!");
});