
// (function() {
//     if (window.hasRun) {
//       return;
//     }
//     window.hasRun = true;

//     function addColor(className) {
//       resetColoring();
//       let span = document.getElementsByTagName("span")
//       for (let thisSpan of span) {
//         thisSpan.style.backgroundColor = className
//       }
//     }
//     function resetColoring() {
//       let span = document.getElementsByTagName("span")
//       for (let thisSpan of span) {
//         thisSpan.removeAttribute("style")
//       }
//     }
//     browser.runtime.onMessage.addListener((message) => {
//       if (message.command === "applyColor") {
//         addColor(message.className);
//       } else if (message.command === "reset") {
//         resetColoring();
//       }
//     });
//   })();

(function() {
  browser.runtime.onMessage.addListener(function(){
    alert("message received")
  })
})()