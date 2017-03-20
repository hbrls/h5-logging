HOWTO
==

```javascript
var logger = head.getLogger('http://www.yourdomain.com/path/to/log/controller');
var message = 'Hello H5 Logging!';
logger.log(message);

head.logger.log('Hello Default Logger');
```

参考资料
==

1. [JSTracker：前端异常数据采集](http://taobaofed.org/blog/2015/10/28/jstracker-how-to-collect-data/)
2. [浏览器端 JavaScript 异常监控](http://www.infoq.com/cn/presentations/javascript-exception-monitoring-for-dummies-in-browser-side)
3. [Capture and report JavaScript errors with window.onerror](https://blog.sentry.io/2016/01/04/client-javascript-reporting-window-onerror.html)
4. https://github.com/BetterJS/badjs-report
5. https://github.com/logentries/le_js

MIT LICENSE
==
