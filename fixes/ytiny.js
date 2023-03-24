let e, p, f = undefined;
document.addEventListener('click', (e) => {
    console.log('click');
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    return true;
});
// setInterval(async () => {
//     e = document.getElementsByClassName('btn-play-pause')[0];
//     p = document.getElementsByTagName("video")[0];
//     if (e && p) {
//         if (!f) {
//             e.replaceWith(e.cloneNode(true));
//             f = true;
//             e.addEventListener('click', async () => {
//                 if (p.paused) {
//                     p.play();
//                 } else {
//                     p.pause();
//                 }
//             });
//         }
//     }
// }, 1000);
