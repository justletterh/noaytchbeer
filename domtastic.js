function ldt(s) {
    let topic = "DOMtastic";
    console.log(`[${topic}] - ${s}`);
}

domtastic(document).on("DOMContentLoaded", () => {
    ldt("Page Loaded!!!");
});
