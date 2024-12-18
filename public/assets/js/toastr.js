!(function (e) {
  e(["jquery"], function (e) {
    return (function () {
      function t(e, t, n) {
        return f({
          type: O.error,
          iconClass: g().iconClasses.error,
          message: e,
          optionsOverride: n,
          title: t,
        });
      }
      function n(t, n) {
        return (
          t || (t = g()),
          (v = e("#" + t.containerId)),
          v.length ? v : (n && (v = c(t)), v)
        );
      }
      function i(e, t, n) {
        return f({
          type: O.info,
          iconClass: g().iconClasses.info,
          message: e,
          optionsOverride: n,
          title: t,
        });
      }
      function o(e) {
        w = e;
      }
      function s(e, t, n) {
        return f({
          type: O.success,
          iconClass: g().iconClasses.success,
          message: e,
          optionsOverride: n,
          title: t,
        });
      }
      function a(e, t, n) {
        return f({
          type: O.warning,
          iconClass: g().iconClasses.warning,
          message: e,
          optionsOverride: n,
          title: t,
        });
      }
      function r(e, t) {
        var i = g();
        v || n(i), l(e, i, t) || u(i);
      }
      function d(t) {
        var i = g();
        return (
          v || n(i),
          t && 0 === e(":focus", t).length
            ? void h(t)
            : void (v.children().length && v.remove())
        );
      }
      function u(t) {
        for (var n = v.children(), i = n.length - 1; i >= 0; i--) l(e(n[i]), t);
      }
      function l(t, n, i) {
        var o = i && i.force ? i.force : !1;
        return t && (o || 0 === e(":focus", t).length)
          ? (t[n.hideMethod]({
              duration: n.hideDuration,
              easing: n.hideEasing,
              complete: function () {
                h(t);
              },
            }),
            !0)
          : !1;
      }
      function c(t) {
        return (
          (v = e("<div/>")
            .attr("id", t.containerId)
            .addClass(t.positionClass)
            .attr("aria-live", "polite")
            .attr("role", "alert")),
          v.appendTo(e(t.target)),
          v
        );
      }
      function p() {
        return {
          tapToDismiss: !0,
          toastClass: "toast",
          containerId: "toast-container",
          debug: !1,
          showMethod: "fadeIn",
          showDuration: 300,
          showEasing: "swing",
          onShown: void 0,
          hideMethod: "fadeOut",
          hideDuration: 1e3,
          hideEasing: "swing",
          onHidden: void 0,
          extendedTimeOut: 1e3,
          iconClasses: {
            error: "toast-error",
            info: "toast-info",
            success: "toast-success",
            warning: "toast-warning",
          },
          iconClass: "toast-info",
          positionClass: "toast-top-right",
          timeOut: 5e3,
          titleClass: "toast-title",
          messageClass: "toast-message",
          target: "body",
          closeHtml: '<button type="button">&times;</button>',
          newestOnTop: !0,
          preventDuplicates: !1,
          progressBar: !1,
        };
      }
      function m(e) {
        w && w(e);
      }
      function f(t) {
        function i(t) {
          return !e(":focus", l).length || t
            ? (clearTimeout(O.intervalId),
              l[r.hideMethod]({
                duration: r.hideDuration,
                easing: r.hideEasing,
                complete: function () {
                  h(l),
                    r.onHidden && "hidden" !== b.state && r.onHidden(),
                    (b.state = "hidden"),
                    (b.endTime = new Date()),
                    m(b);
                },
              }))
            : void 0;
        }
        function o() {
          (r.timeOut > 0 || r.extendedTimeOut > 0) &&
            ((u = setTimeout(i, r.extendedTimeOut)),
            (O.maxHideTime = parseFloat(r.extendedTimeOut)),
            (O.hideEta = new Date().getTime() + O.maxHideTime));
        }
        function s() {
          clearTimeout(u),
            (O.hideEta = 0),
            l
              .stop(!0, !0)
              [r.showMethod]({
                duration: r.showDuration,
                easing: r.showEasing,
              });
        }
        function a() {
          var e = ((O.hideEta - new Date().getTime()) / O.maxHideTime) * 100;
          f.width(e + "%");
        }
        var r = g(),
          d = t.iconClass || r.iconClass;
        if (
          ("undefined" != typeof t.optionsOverride &&
            ((r = e.extend(r, t.optionsOverride)),
            (d = t.optionsOverride.iconClass || d)),
          r.preventDuplicates)
        ) {
          if (t.message === C) return;
          C = t.message;
        }
        T++, (v = n(r, !0));
        var u = null,
          l = e("<div/>"),
          c = e("<div/>"),
          p = e("<div/>"),
          f = e("<div/>"),
          w = e(r.closeHtml),
          O = { intervalId: null, hideEta: null, maxHideTime: null },
          b = {
            toastId: T,
            state: "visible",
            startTime: new Date(),
            options: r,
            map: t,
          };
        return (
          t.iconClass && l.addClass(r.toastClass).addClass(d),
          t.title && (c.append(t.title).addClass(r.titleClass), l.append(c)),
          t.message &&
            (p.append(t.message).addClass(r.messageClass), l.append(p)),
          r.closeButton &&
            (w.addClass("toast-close-button").attr("role", "button"),
            l.prepend(w)),
          r.progressBar && (f.addClass("toast-progress"), l.prepend(f)),
          l.hide(),
          r.newestOnTop ? v.prepend(l) : v.append(l),
          l[r.showMethod]({
            duration: r.showDuration,
            easing: r.showEasing,
            complete: r.onShown,
          }),
          r.timeOut > 0 &&
            ((u = setTimeout(i, r.timeOut)),
            (O.maxHideTime = parseFloat(r.timeOut)),
            (O.hideEta = new Date().getTime() + O.maxHideTime),
            r.progressBar && (O.intervalId = setInterval(a, 10))),
          l.hover(s, o),
          !r.onclick && r.tapToDismiss && l.click(i),
          r.closeButton &&
            w &&
            w.click(function (e) {
              e.stopPropagation
                ? e.stopPropagation()
                : void 0 !== e.cancelBubble &&
                  e.cancelBubble !== !0 &&
                  (e.cancelBubble = !0),
                i(!0);
            }),
          r.onclick &&
            l.click(function () {
              r.onclick(), i();
            }),
          m(b),
          r.debug && console && console.log(b),
          l
        );
      }
      function g() {
        return e.extend({}, p(), b.options);
      }
      function h(e) {
        v || (v = n()),
          e.is(":visible") ||
            (e.remove(),
            (e = null),
            0 === v.children().length && (v.remove(), (C = void 0)));
      }
      var v,
        w,
        C,
        T = 0,
        O = {
          error: "error",
          info: "info",
          success: "success",
          warning: "warning",
        },
        b = {
          clear: r,
          remove: d,
          error: t,
          getContainer: n,
          info: i,
          options: {},
          subscribe: o,
          success: s,
          version: "2.1.0",
          warning: a,
        };
      return b;
    })();
  });
})(
  "function" == typeof define && define.amd
    ? define
    : function (e, t) {
        "undefined" != typeof module && module.exports
          ? (module.exports = t(require("jquery")))
          : (window.toastr = t(window.jQuery));
      }
);
