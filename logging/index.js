(function () {
  var head = window.head || {};
  var Logging = function (src) {
    this.src = src + '?';
  };
  Logging.prototype.log = function (message) {
    var src = this.src + message;
    setTimeout(function () {
      var img = new Image();
      img.onload = img.onerror = function () {
        img = null;
      };
      img.src = src;
    }, 0);
  };
  head.getLogger = function (loggingUrl) {
    return new Logging(loggingUrl);
  };
  window.head = head;

  // ** error tracking out of the box
  var oldErrorHandler = window.onerror;
  window.onerror = function(msg, url, line){
    if (!url) {
      return false;
    }

    var logger = new Logging('REPLACE_ME');
    var message = [msg, url, line, navigator.userAgent, +new Date()].join('|');
    logger.log(message);

    if (oldErrorHandler) {
      return oldErrorHandler(msg, url, line);
    } else {
      return false;
    }
  }
}());
