function lum(s) {
  let topic = "Umbrella";
  console.log(`[${topic}] - ${s}`);
}

u(document).on("DOMContentLoaded",() => {
  lum("Page Loaded!!!");
});