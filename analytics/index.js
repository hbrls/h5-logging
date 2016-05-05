(function () {
  var head = window.head || {};
  var Modernizr = {};
  head.Modernizr = Modernizr;

  function addTest(key, func) {
    Modernizr[key] = func();
  }

  // modernizr/es6/promise
  addTest('promise', function () {
    return 'Promise' in window &&
    // Some of these methods are missing from
    // Firefox/Chrome experimental implementations
    'resolve' in window.Promise &&
    'reject' in window.Promise &&
    'all' in window.Promise &&
    'race' in window.Promise &&
    // Older version of the spec had a resolver object
    // as the arg rather than a function
    (function() {
      var resolve;
      new window.Promise(function(r) { resolve = r; });
      return typeof resolve === 'function';
    }());
  });

  // modernizr/network/xhr2
  addTest('xhr2', function () {
    return 'XMLHttpRequest' in window && 'withCredentials' in new XMLHttpRequest();
  });

  window.head = head;
}());
