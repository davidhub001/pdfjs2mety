/*! modernizr 3.2.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-addtest ! */
 !(function(n, e, o) {
    function t(n, e) {
      return typeof n === e;
    }
    function s() {
      var n, e, o, s, i, a, f;
      for (var l in r)
        if (r.hasOwnProperty(l)) {
          if (((n = []), (e = r[l]), e.name && (n.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length)))
            for (o = 0; o < e.options.aliases.length; o++) n.push(e.options.aliases[o].toLowerCase());
          for (s = t(e.fn, 'function') ? e.fn() : e.fn, i = 0; i < n.length; i++)
            (a = n[i]),
              (f = a.split('.')),
              f.length === 1 ? (Modernizr[f[0]] = s) : (!Modernizr[f[0]] || Modernizr[f[0]] instanceof Boolean || (Modernizr[f[0]] = new Boolean(Modernizr[f[0]])), (Modernizr[f[0]][f[1]] = s)),
              u.push((s ? '' : 'no-') + f.join('-'));
        }
    }
    function i(n) {
      var e = c.className,
        o = Modernizr._config.classPrefix || '';
      if ((d && (e = e.baseVal), Modernizr._config.enableJSClass)) {
        var t = new RegExp('(^|\\s)' + o + 'no-js(\\s|$)');
        e = e.replace(t, '$1' + o + 'js$2');
      }
      Modernizr._config.enableClasses && ((e += ' ' + o + n.join(' ' + o)), d ? (c.className.baseVal = e) : (c.className = e));
    }
    function a(n, e) {
      if (typeof n === 'object') for (var o in n) l(n, o) && a(o, n[o]);
      else {
        n = n.toLowerCase();
        var t = n.split('.'),
          s = Modernizr[t[0]];
        if ((t.length == 2 && (s = s[t[1]]), typeof s !== 'undefined')) return Modernizr;
        (e = typeof e === 'function' ? e() : e),
          t.length == 1 ? (Modernizr[t[0]] = e) : (!Modernizr[t[0]] || Modernizr[t[0]] instanceof Boolean || (Modernizr[t[0]] = new Boolean(Modernizr[t[0]])), (Modernizr[t[0]][t[1]] = e)),
          i([(e && e != 0 ? '' : 'no-') + t.join('-')]),
          Modernizr._trigger(n, e);
      }
      return Modernizr;
    }
    var r = [],
      f = {
        _version: '3.2.0',
        _config: {
          classPrefix: '',
          enableClasses: !0,
          enableJSClass: !0,
          usePrefixes: !0,
        },
        _q: [],
        on: function(n, e) {
          var o = this;
          setTimeout(function() {
            e(o[n]);
          }, 0);
        },
        addTest: function(n, e, o) {
          r.push({ name: n, fn: e, options: o });
        },
        addAsyncTest: function(n) {
          r.push({ name: null, fn: n });
        },
      },
      Modernizr = function() {};
    (Modernizr.prototype = f), (Modernizr = new Modernizr());
    var l,
      u = [];
    !(function() {
      var n = {}.hasOwnProperty;
      l =
        t(n, 'undefined') || t(n.call, 'undefined')
          ? function(n, e) {
              return e in n && t(n.constructor.prototype[e], 'undefined');
            }
          : function(e, o) {
              return n.call(e, o);
            };
    })();
    var c = e.documentElement,
      d = c.nodeName.toLowerCase() === 'svg';
    (f._l = {}),
      (f.on = function(n, e) {
        this._l[n] || (this._l[n] = []),
          this._l[n].push(e),
          Modernizr.hasOwnProperty(n) &&
            setTimeout(function() {
              Modernizr._trigger(n, Modernizr[n]);
            }, 0);
      }),
      (f._trigger = function(n, e) {
        if (this._l[n]) {
          var o = this._l[n];
          setTimeout(function() {
            var n, t;
            for (n = 0; n < o.length; n++) (t = o[n])(e);
          }, 0),
            delete this._l[n];
        }
      }),
      Modernizr._q.push(function() {
        f.addTest = a;
      }),
      s(),
      delete f.addTest,
      delete f.addAsyncTest;
    for (var p = 0; p < Modernizr._q.length; p++) Modernizr._q[p]();
    n.Modernizr = Modernizr;
  })(window, document);