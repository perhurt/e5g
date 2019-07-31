if (!window.electionMessageHandler) {
  window.electionMessageHandler = function electionMessageHandler(e) {
    if (e.origin.match(/^https?:\/\/.*elections\.(huffingtonpost\.com|huffpost\.net)/) || e.origin.match(/^https?:\/\/localhost(:\d+)?$/)) {
      if (e.data && e.data.location && e.data.frameHeight) {
        var frames = [].slice.call(document.querySelectorAll('iframe[src$="'+ e.data.location +'"]'));
        frames.forEach(function(frame) {
          frame.style.width = '100%';
          frame.style.border = 0;
          frame.style.height = e.data.frameHeight + 'px';
        })
      }
    }
  }
  window.addEventListener('message', electionMessageHandler);
}
