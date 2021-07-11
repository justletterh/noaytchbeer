function ljq(s) {
  let topic = "jQuery";
  console.log(`[${topic}] - ${s}`);
}

jQuery(document).ready(() => {
  ljq("Page Loaded!!!");
});