window.startCreative = function () {
    if (window.frameUpdate) {
      window.frameUpdate();
    }
    document.body.addEventListener("click",
function() {
    window.openLink('clickTag1');
});
  }