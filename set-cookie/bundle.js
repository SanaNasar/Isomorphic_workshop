(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var cookie = require('cookie'); //access the dependencies
var setter = require('./lib/setter');

module.exports = function setCookie(name, value, options) { // exports a funxtion which takes in name, value and options
  var cookieStr = cookie.serialize(name, value, options);
  setter(cookieStr, options && options.res);
  // cookie.log(cookieStr);
};
},{"./lib/setter":2,"cookie":3}],2:[function(require,module,exports){
module.exports = function setter(cookieStr, res) {
  if (res === null) throw new ArgumentError('Gimme a res plzz.');

  // document.cookie = cookieStr; setting the cookie which will default to index.js
  res.setHeader('Set-Cookie: ' + cookieStr);

};
},{}],3:[function(require,module,exports){

/// Serialize the a name value pair into a cookie string suitable for
/// http headers. An optional options object specified cookie parameters
///
/// serialize('foo', 'bar', { httpOnly: true })
///   => "foo=bar; httpOnly"
///
/// @param {String} name
/// @param {String} val
/// @param {Object} options
/// @return {String}
var serialize = function(name, val, opt){
    opt = opt || {};
    var enc = opt.encode || encode;
    var pairs = [name + '=' + enc(val)];

    if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge)) throw new Error('maxAge should be a Number');
        pairs.push('Max-Age=' + maxAge);
    }

    if (opt.domain) pairs.push('Domain=' + opt.domain);
    if (opt.path) pairs.push('Path=' + opt.path);
    if (opt.expires) pairs.push('Expires=' + opt.expires.toUTCString());
    if (opt.httpOnly) pairs.push('HttpOnly');
    if (opt.secure) pairs.push('Secure');

    return pairs.join('; ');
};

/// Parse the given cookie header string into an object
/// The object has the various cookies as keys(names) => values
/// @param {String} str
/// @return {Object}
var parse = function(str, opt) {
    opt = opt || {};
    var obj = {}
    var pairs = str.split(/; */);
    var dec = opt.decode || decode;

    pairs.forEach(function(pair) {
        var eq_idx = pair.indexOf('=')

        // skip things that don't look like key=value
        if (eq_idx < 0) {
            return;
        }

        var key = pair.substr(0, eq_idx).trim()
        var val = pair.substr(++eq_idx, pair.length).trim();

        // quoted values
        if ('"' == val[0]) {
            val = val.slice(1, -1);
        }

        // only assign once
        if (undefined == obj[key]) {
            try {
                obj[key] = dec(val);
            } catch (e) {
                obj[key] = val;
            }
        }
    });

    return obj;
};

var encode = encodeURIComponent;
var decode = decodeURIComponent;

module.exports.serialize = serialize;
module.exports.parse = parse;

},{}],4:[function(require,module,exports){
var setCookie = require('./');

setCookie('foobar', 'this is a value');
},{"./":1}]},{},[4])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi91c3IvbG9jYWwvbGliL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvc25hc2FyL2lzb21vcnBoaWNfSlMvSXNvbW9ycGhpY193b3Jrc2hvcC9zZXQtY29va2llL2luZGV4LmpzIiwiL1VzZXJzL3NuYXNhci9pc29tb3JwaGljX0pTL0lzb21vcnBoaWNfd29ya3Nob3Avc2V0LWNvb2tpZS9saWIvc2V0dGVyL2luZGV4LmpzIiwiL1VzZXJzL3NuYXNhci9pc29tb3JwaGljX0pTL0lzb21vcnBoaWNfd29ya3Nob3Avc2V0LWNvb2tpZS9ub2RlX21vZHVsZXMvY29va2llL2luZGV4LmpzIiwiL1VzZXJzL3NuYXNhci9pc29tb3JwaGljX0pTL0lzb21vcnBoaWNfd29ya3Nob3Avc2V0LWNvb2tpZS90ZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRUE7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBjb29raWUgPSByZXF1aXJlKCdjb29raWUnKTsgLy9hY2Nlc3MgdGhlIGRlcGVuZGVuY2llc1xudmFyIHNldHRlciA9IHJlcXVpcmUoJy4vbGliL3NldHRlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldENvb2tpZShuYW1lLCB2YWx1ZSwgb3B0aW9ucykgeyAvLyBleHBvcnRzIGEgZnVueHRpb24gd2hpY2ggdGFrZXMgaW4gbmFtZSwgdmFsdWUgYW5kIG9wdGlvbnNcbiAgdmFyIGNvb2tpZVN0ciA9IGNvb2tpZS5zZXJpYWxpemUobmFtZSwgdmFsdWUsIG9wdGlvbnMpO1xuICBzZXR0ZXIoY29va2llU3RyLCBvcHRpb25zICYmIG9wdGlvbnMucmVzKTtcbiAgLy8gY29va2llLmxvZyhjb29raWVTdHIpO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldHRlcihjb29raWVTdHIsIHJlcykge1xuICBpZiAocmVzID09PSBudWxsKSB0aHJvdyBuZXcgQXJndW1lbnRFcnJvcignR2ltbWUgYSByZXMgcGx6ei4nKTtcblxuICAvLyBkb2N1bWVudC5jb29raWUgPSBjb29raWVTdHI7IHNldHRpbmcgdGhlIGNvb2tpZSB3aGljaCB3aWxsIGRlZmF1bHQgdG8gaW5kZXguanNcbiAgcmVzLnNldEhlYWRlcignU2V0LUNvb2tpZTogJyArIGNvb2tpZVN0cik7XG5cbn07IiwiXG4vLy8gU2VyaWFsaXplIHRoZSBhIG5hbWUgdmFsdWUgcGFpciBpbnRvIGEgY29va2llIHN0cmluZyBzdWl0YWJsZSBmb3Jcbi8vLyBodHRwIGhlYWRlcnMuIEFuIG9wdGlvbmFsIG9wdGlvbnMgb2JqZWN0IHNwZWNpZmllZCBjb29raWUgcGFyYW1ldGVyc1xuLy8vXG4vLy8gc2VyaWFsaXplKCdmb28nLCAnYmFyJywgeyBodHRwT25seTogdHJ1ZSB9KVxuLy8vICAgPT4gXCJmb289YmFyOyBodHRwT25seVwiXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gbmFtZVxuLy8vIEBwYXJhbSB7U3RyaW5nfSB2YWxcbi8vLyBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuLy8vIEByZXR1cm4ge1N0cmluZ31cbnZhciBzZXJpYWxpemUgPSBmdW5jdGlvbihuYW1lLCB2YWwsIG9wdCl7XG4gICAgb3B0ID0gb3B0IHx8IHt9O1xuICAgIHZhciBlbmMgPSBvcHQuZW5jb2RlIHx8IGVuY29kZTtcbiAgICB2YXIgcGFpcnMgPSBbbmFtZSArICc9JyArIGVuYyh2YWwpXTtcblxuICAgIGlmIChudWxsICE9IG9wdC5tYXhBZ2UpIHtcbiAgICAgICAgdmFyIG1heEFnZSA9IG9wdC5tYXhBZ2UgLSAwO1xuICAgICAgICBpZiAoaXNOYU4obWF4QWdlKSkgdGhyb3cgbmV3IEVycm9yKCdtYXhBZ2Ugc2hvdWxkIGJlIGEgTnVtYmVyJyk7XG4gICAgICAgIHBhaXJzLnB1c2goJ01heC1BZ2U9JyArIG1heEFnZSk7XG4gICAgfVxuXG4gICAgaWYgKG9wdC5kb21haW4pIHBhaXJzLnB1c2goJ0RvbWFpbj0nICsgb3B0LmRvbWFpbik7XG4gICAgaWYgKG9wdC5wYXRoKSBwYWlycy5wdXNoKCdQYXRoPScgKyBvcHQucGF0aCk7XG4gICAgaWYgKG9wdC5leHBpcmVzKSBwYWlycy5wdXNoKCdFeHBpcmVzPScgKyBvcHQuZXhwaXJlcy50b1VUQ1N0cmluZygpKTtcbiAgICBpZiAob3B0Lmh0dHBPbmx5KSBwYWlycy5wdXNoKCdIdHRwT25seScpO1xuICAgIGlmIChvcHQuc2VjdXJlKSBwYWlycy5wdXNoKCdTZWN1cmUnKTtcblxuICAgIHJldHVybiBwYWlycy5qb2luKCc7ICcpO1xufTtcblxuLy8vIFBhcnNlIHRoZSBnaXZlbiBjb29raWUgaGVhZGVyIHN0cmluZyBpbnRvIGFuIG9iamVjdFxuLy8vIFRoZSBvYmplY3QgaGFzIHRoZSB2YXJpb3VzIGNvb2tpZXMgYXMga2V5cyhuYW1lcykgPT4gdmFsdWVzXG4vLy8gQHBhcmFtIHtTdHJpbmd9IHN0clxuLy8vIEByZXR1cm4ge09iamVjdH1cbnZhciBwYXJzZSA9IGZ1bmN0aW9uKHN0ciwgb3B0KSB7XG4gICAgb3B0ID0gb3B0IHx8IHt9O1xuICAgIHZhciBvYmogPSB7fVxuICAgIHZhciBwYWlycyA9IHN0ci5zcGxpdCgvOyAqLyk7XG4gICAgdmFyIGRlYyA9IG9wdC5kZWNvZGUgfHwgZGVjb2RlO1xuXG4gICAgcGFpcnMuZm9yRWFjaChmdW5jdGlvbihwYWlyKSB7XG4gICAgICAgIHZhciBlcV9pZHggPSBwYWlyLmluZGV4T2YoJz0nKVxuXG4gICAgICAgIC8vIHNraXAgdGhpbmdzIHRoYXQgZG9uJ3QgbG9vayBsaWtlIGtleT12YWx1ZVxuICAgICAgICBpZiAoZXFfaWR4IDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGtleSA9IHBhaXIuc3Vic3RyKDAsIGVxX2lkeCkudHJpbSgpXG4gICAgICAgIHZhciB2YWwgPSBwYWlyLnN1YnN0cigrK2VxX2lkeCwgcGFpci5sZW5ndGgpLnRyaW0oKTtcblxuICAgICAgICAvLyBxdW90ZWQgdmFsdWVzXG4gICAgICAgIGlmICgnXCInID09IHZhbFswXSkge1xuICAgICAgICAgICAgdmFsID0gdmFsLnNsaWNlKDEsIC0xKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG9ubHkgYXNzaWduIG9uY2VcbiAgICAgICAgaWYgKHVuZGVmaW5lZCA9PSBvYmpba2V5XSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBvYmpba2V5XSA9IGRlYyh2YWwpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIG9ialtrZXldID0gdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb2JqO1xufTtcblxudmFyIGVuY29kZSA9IGVuY29kZVVSSUNvbXBvbmVudDtcbnZhciBkZWNvZGUgPSBkZWNvZGVVUklDb21wb25lbnQ7XG5cbm1vZHVsZS5leHBvcnRzLnNlcmlhbGl6ZSA9IHNlcmlhbGl6ZTtcbm1vZHVsZS5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4iLCJ2YXIgc2V0Q29va2llID0gcmVxdWlyZSgnLi8nKTtcblxuc2V0Q29va2llKCdmb29iYXInLCAndGhpcyBpcyBhIHZhbHVlJyk7Il19
