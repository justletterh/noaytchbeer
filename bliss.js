function lbl(s) {
    let topic = "Bliss";
    console.log(`[${topic}] - ${s}`);
  }
  
  Bliss.ready().then(() => {
    lbl("Page Loaded!!!");
  });