function lex(s) {
    let topic = "ExtJS";
    console.log(`[${topic}] - ${s}`);
}

Ext.onReady(() => {
    lex("Page Loaded!!!");
});