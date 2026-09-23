(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931], {
    4781: function(e, t, r) {
      var o = {
        "./cn/common.json": [2234, 234],
        "./en/common.json": [1249, 249]
      };

      function n(e) {
        if (!r.o(o, e)) return Promise.resolve().then(function() {
          var t = Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        });
        var t = o[e],
          n = t[0];
        return r.e(t[1]).then(function() {
          return r.t(n, 19)
        })
      }
      n.keys = function() {
        return Object.keys(o)
      }, n.id = 4781, e.exports = n
    },
    4538: function(e, t, r) {
      Promise.resolve().then(r.bind(r, 9049))
    },
    9049: function(e, t, r) {
      "use strict";
      r.r(t), r.d(t, {
        default: function() {
          return ro
        }
      });
      var o, n, i, a, l = r(7437),
        s = r(2265),
        c = r(29),
        d = r.n(c),
        u = r(448),
        x = r(8166),
        h = r(1002),
        p = r(3201),
        g = r(9292),
        m = r(2940),
        b = r(373),
        f = r(3296),
        y = e => {
          let {
            isOpen: t,
            message: r = "æ­£åœ¨å¤„ç†...",
            description: o = "è¯·ç¨å€™ï¼Œä¸è¦å…³é—­æˆ–åˆ·æ–°é¡µé¢",
            showProgress: n = !1,
            progress: i = 0
          } = e;
          return (0, l.jsxs)(u.u_, {
            isOpen: t,
            onClose: () => {},
            isCentered: !0,
            closeOnOverlayClick: !1,
            closeOnEsc: !1,
            children: [(0, l.jsx)(x.Z, {
              bg: "blackAlpha.700",
              backdropFilter: "blur(10px)"
            }), (0, l.jsx)(h.h, {
              bg: "rgba(20, 25, 30, 0.95)",
              border: "1px solid rgba(16, 168, 253, 0.3)",
              borderRadius: "xl",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4), 0 0 20px rgba(16, 168, 253, 0.2)",
              maxW: "400px",
              children: (0, l.jsx)(p.f, {
                py: 8,
                px: 6,
                children: (0, l.jsxs)(g.g, {
                  spacing: 6,
                  align: "center",
                  children: [(0, l.jsx)(m.$, {
                    thickness: "4px",
                    speed: "0.8s",
                    emptyColor: "rgba(255, 255, 255, 0.1)",
                    color: "#10A8FD",
                    size: "xl",
                    w: "60px",
                    h: "60px"
                  }), (0, l.jsx)(b.x, {
                    fontSize: "lg",
                    fontWeight: "600",
                    color: "white",
                    textAlign: "center",
                    children: r
                  }), o && (0, l.jsx)(b.x, {
                    fontSize: "sm",
                    color: "rgba(255, 255, 255, 0.6)",
                    textAlign: "center",
                    children: o
                  }), n && (0, l.jsxs)(g.g, {
                    spacing: 2,
                    w: "100%",
                    children: [(0, l.jsx)(f.E, {
                      value: i,
                      size: "sm",
                      borderRadius: "full",
                      w: "100%",
                      sx: {
                        "& > div": {
                          background: "linear-gradient(90deg, #10A8FD 0%, #3BBAFD 100%)"
                        }
                      },
                      bg: "rgba(255, 255, 255, 0.1)"
                    }), (0, l.jsxs)(b.x, {
                      fontSize: "xs",
                      color: "rgba(255, 255, 255, 0.5)",
                      children: [Math.round(i), "%"]
                    })]
                  }), (0, l.jsxs)("div", {
                    className: "jsx-18a4f88664e0e9a loading-dots",
                    children: [(0, l.jsx)(d(), {
                      id: "18a4f88664e0e9a",
                      children: "@-webkit-keyframes dot-pulse{0%,80%,100%{opacity:.3;-webkit-transform:scale(.8);transform:scale(.8)}40%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-moz-keyframes dot-pulse{0%,80%,100%{opacity:.3;-moz-transform:scale(.8);transform:scale(.8)}40%{opacity:1;-moz-transform:scale(1);transform:scale(1)}}@-o-keyframes dot-pulse{0%,80%,100%{opacity:.3;-o-transform:scale(.8);transform:scale(.8)}40%{opacity:1;-o-transform:scale(1);transform:scale(1)}}@keyframes dot-pulse{0%,80%,100%{opacity:.3;-webkit-transform:scale(.8);-moz-transform:scale(.8);-o-transform:scale(.8);transform:scale(.8)}40%{opacity:1;-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1)}}.loading-dots.jsx-18a4f88664e0e9a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:8px;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.loading-dots.jsx-18a4f88664e0e9a span.jsx-18a4f88664e0e9a{width:8px;height:8px;background:#10A8FD;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;-webkit-animation:dot-pulse 1.4s ease-in-out infinite;-moz-animation:dot-pulse 1.4s ease-in-out infinite;-o-animation:dot-pulse 1.4s ease-in-out infinite;animation:dot-pulse 1.4s ease-in-out infinite}.loading-dots.jsx-18a4f88664e0e9a span.jsx-18a4f88664e0e9a:nth-child(2){-webkit-animation-delay:.2s;-moz-animation-delay:.2s;-o-animation-delay:.2s;animation-delay:.2s}.loading-dots.jsx-18a4f88664e0e9a span.jsx-18a4f88664e0e9a:nth-child(3){-webkit-animation-delay:.4s;-moz-animation-delay:.4s;-o-animation-delay:.4s;animation-delay:.4s}"
                    }), (0, l.jsx)("span", {
                      className: "jsx-18a4f88664e0e9a"
                    }), (0, l.jsx)("span", {
                      className: "jsx-18a4f88664e0e9a"
                    }), (0, l.jsx)("span", {
                      className: "jsx-18a4f88664e0e9a"
                    })]
                  })]
                })
              })
            })]
          })
        },
        w = r(1576);
      let v = {},
        k = {},
        j = e => new w.h(e);
      class S {
        getProductId() {
          return this.getHID().productId
        }
        getConnectMode() {
          return 591 == this.getProductId() ? "USB" : "2.4G"
        }
        refresh(e) {
          this.address = e, v[e] = {
            hid: j(e)
          }
        }
        get commandQueueWrapper() {
          return k[this.address] || (k[this.address] = {
            isFlushing: !1,
            commandQueue: []
          }), k[this.address]
        }
        async timeout(e) {
          return new Promise((t, r) => {
            this.commandQueueWrapper.commandQueue.push({
              res: t,
              rej: r,
              args: () => new Promise(r => setTimeout(() => {
                r(), t(void 0)
              }, e))
            }), this.commandQueueWrapper.isFlushing || this.flushQueue()
          })
        }
        async getDeviceData() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return new Promise((t, r) => {
            this.commandQueueWrapper.commandQueue.push({
              res: t,
              rej: r,
              args: ["get", e]
            }), this.commandQueueWrapper.isFlushing || this.flushQueue()
          })
        }
        async sendDeviceData() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return new Promise((t, r) => {
            this.commandQueueWrapper.commandQueue.push({
              res: t,
              rej: r,
              args: ["get", e]
            }), this.commandQueueWrapper.isFlushing || this.flushQueue()
          })
        }
        async sendFastDeviceData() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return new Promise((t, r) => {
            this.commandQueueWrapper.commandQueue.push({
              res: t,
              rej: r,
              args: ["send", e]
            }), this.commandQueueWrapper.isFlushing || this.flushQueue()
          })
        }
        async flushQueue() {
          if (!0 !== this.commandQueueWrapper.isFlushing) {
            for (this.commandQueueWrapper.isFlushing = !0; 0 !== this.commandQueueWrapper.commandQueue.length;) {
              let {
                res: e,
                rej: t,
                args: r
              } = this.commandQueueWrapper.commandQueue.shift();
              if ("function" == typeof r) await r(), e();
              else if ("send_report" == r[0]) try {
                let [t, ...o] = r, n = await this.webhid_send_report(...o);
                e(n)
              } catch (e) {
                t(e)
              } else if ("send" == r[0]) try {
                let [t, ...o] = r, n = await this.webhid_send_command(...o);
                e(n)
              } catch (e) {
                t(e)
              } else try {
                let [t, ...o] = r, n = await this.webhid_write_command(...o);
                e(n)
              } catch (e) {
                t(e)
              }
            }
            this.commandQueueWrapper.isFlushing = !1
          }
        }
        getHID() {
          return v[this.address].hid
        }
        async webhid_read_command() {
          return this.getHID().readP()
        }
        async webhid_write_command() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = [...e],
            r = Array(33).fill(0);
          t.forEach((e, t) => {
            r[t] = e
          });
          try {
            await this.getHID().hid_write(r)
          } catch (e) {
            console.log(e)
          }
          return Array.from(await this.webhid_read_command())
        }
        async webhid_send_command() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = [...e],
            r = Array(33).fill(0);
          return t.forEach((e, t) => {
            r[t] = e
          }), await this.getHID().hid_write(r), "success"
        }
        async webhid_send_report() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = [...e],
            r = Array(33).fill(0);
          t.forEach((e, t) => {
            r[t] = e
          });
          let o = await this.getHID().send(0, r);
          return console.debug("Command for ".concat(this.address), t, o), o
        }
        async sendReport() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return new Promise((t, r) => {
            this.commandQueueWrapper.commandQueue.push({
              res: t,
              rej: r,
              args: ["send_report", e]
            }), this.commandQueueWrapper.isFlushing || this.flushQueue()
          })
        }
        constructor(e) {
          if (this.test = !1, this.address = e, "demo" == e) this.test = !0, v[e] = {
            hid: new w.h(e)
          };
          else if (!v[e]) {
            let t = j(e);
            v[e] = {
              hid: t
            }
          }
        }
      }
      let C = async function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return (await w.WebHid.getAuthorizedDevices(e)).map(e => {
            let t = 65282,
              r = 2;
            if (e._device && e._device.collections) {
              var o, n, i, a;
              let l = e._device.collections.find(e => 65282 === e.usagePage && 2 === e.usage);
              if (l) t = null !== (o = l.usagePage) && void 0 !== o ? o : 65282, r = null !== (n = l.usage) && void 0 !== n ? n : 2;
              else if (e._device.collections.length > 0) {
                let o = e._device.collections[0];
                t = null !== (i = o.usagePage) && void 0 !== i ? i : 65282, r = null !== (a = o.usage) && void 0 !== a ? a : 2
              }
            }
            return {
              vendorId: e.vendorId,
              productId: e.productId,
              usagePage: t,
              usage: r
            }
          })
        },
        D = async function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            r = arguments.length > 2 ? arguments[2] : void 0,
            o = await w.WebHid.devices(e, t);
          if (0 === o.length) return console.log("æ²¡æœ‰æ‰¾åˆ°è®¾å¤‡"), [];
          console.log("æ‰¾åˆ° ".concat(o.length, " ä¸ªè®¾å¤‡"));
          let n = new Map;
          r && r.length > 0 && r.forEach(e => {
            let t = "".concat(e.vendorId, "-").concat(e.productId);
            n.set(t, e.deviceMode)
          });
          let i = [];
          for (let e of o) {
            var a;
            let t = "".concat(e.vendorId, "-").concat(e.productId),
              r = null !== (a = n.get(t)) && void 0 !== a ? a : -1,
              o = 0 === r ? "USB" : 1 === r ? "2.4G" : "Unknown";
            try {
              let t = new I(new S(e.address));
              i.push({
                device: t,
                deviceMode: r,
                deviceModeName: o,
                vendorId: e.vendorId,
                productId: e.productId,
                productName: e.productName
              }), console.log("å·²åˆ›å»ºè®¾å¤‡å®žä¾‹: ".concat(o, " - ").concat(e.productName, " (VID: 0x").concat(e.vendorId.toString(16).toUpperCase(), ", PID: 0x").concat(e.productId.toString(16).toUpperCase(), ")"))
            } catch (t) {
              console.error("åˆ›å»ºè®¾å¤‡å®žä¾‹å¤±è´¥: ".concat(e.productName), t)
            }
          }
          return i.sort((e, t) => e.deviceMode !== t.deviceMode ? e.deviceMode - t.deviceMode : e.vendorId - t.vendorId), console.log("æˆåŠŸåˆ›å»º ".concat(i.length, " ä¸ªè®¾å¤‡å®žä¾‹")), i
        };
      class I {
        addListeners() {
          this.api.getHID().addListeners(e => {
            let t = new Uint8Array(e.data.buffer);
            if (170 === t[0] && 14 === t[4]) {
              if (this.isWriting) return;
              let e = this.onListeners.find(e => "statu" === e.name);
              null == e || e.fb(t)
            }
          })
        }
        getReportId() {
          return this.api.getHID().reportId
        }
        async getConnectMode() {
          return this.api.getConnectMode()
        }
        async setData(e) {
          return this.api.sendFastDeviceData(e)
        }
        async getData(e) {
          return this.isWriting = !0, this.writeTimeout && clearTimeout(this.writeTimeout), this.writeTimeout = setTimeout(() => {
            this.isWriting = !1
          }, 100), this.api.sendDeviceData(e)
        }
        async setFastData(e) {
          return this.isWriting = !0, this.writeTimeout && clearTimeout(this.writeTimeout), this.writeTimeout = setTimeout(() => {
            this.isWriting = !1
          }, 50), this.api.sendFastDeviceData(e)
        }
        async delay(e) {
          return new Promise(t => setTimeout(t, e))
        }
        async getBattery() {
          let e = Array(65).fill(0);
          e[1] = 170, e[2] = 85, e[3] = 204, e[4] = 51, e[5] = 14;
          let t = await this.getData(e);
          return console.log("result", t), await this.delay(6), t[5] || 0
        }
        async getDeviceStatusAndBattery() {
          arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          let e = Array(65).fill(0);
          e[1] = 170, e[2] = 85, e[3] = 204, e[4] = 51, e[5] = 14;
          let t = 0,
            r = null;
          for (; t < 5;) {
            try {
              let t = await this.getData(e);
              if (t && t.length > 0) return t
            } catch (e) {
              r = e, console.warn("èŽ·å–è®¾å¤‡çŠ¶æ€å¤±è´¥ï¼Œæ­£åœ¨é‡è¯• (".concat(t + 1, "/").concat(5, "):"), e)
            }(t += 1) < 5 && await this.delay(100)
          }
          return console.error("èŽ·å–è®¾å¤‡çŠ¶æ€å¤±è´¥ï¼Œè¶…è¿‡æœ€å¤§é‡è¯•æ¬¡æ•°:", r), Array(65).fill(0)
        }
        parseFirmwareVersionFromStatus(e) {
          if (!e || e.length < 14 || 170 !== e[0] || 85 !== e[1] || 204 !== e[2] || 51 !== e[3]) return "";
          let t = e[12],
            r = e[13];
          return 0 === t && 0 === r ? "" : "".concat(t >> 4 & 15, ".").concat(15 & t, ".").concat(10 * (r >> 4 & 15) + (15 & r))
        }
        async getFirmwareVersion() {
          try {
            let e = await this.getDeviceStatusAndBattery();
            return this.parseFirmwareVersionFromStatus(e)
          } catch (e) {
            return console.error("èŽ·å–å›ºä»¶ç‰ˆæœ¬å¤±è´¥:", e), ""
          }
        }
        async setProfile() {
          arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
        }
        async clearAllMacroData() {
          let e = Array(65).fill(0);
          e[1] = 170, e[2] = 85, e[3] = 204, e[4] = 51, e[5] = 15, e[6] = 0, await this.setData(e), await this.delay(50)
        }
        async clearFnOrTopMacroData(e) {
          let t = Array(65).fill(0);
          t[1] = 170, t[2] = 85, t[3] = 204, t[4] = 51, t[5] = 15, t[6] = 0, await this.setData(t), await this.delay(2)
        }
        async setKeyMacro(e, t, r) {
          await this.setProfile(e);
          let o = Array(65).fill(0);
          o[1] = 170, o[2] = 85, o[3] = 204, o[4] = 51, o[5] = 4, o[6] = r.layer + 1, o[7] = t, 0 === r.type ? (o[8] = r.code2, await this.setData(o), await this.delay(2)) : 1 === r.type ? await this.setShortcutKeyData(t, r) : 2 === r.type && console.warn("å®æŒ‰é”®éœ€è¦é€šè¿‡ setMacroKeyData æ–¹æ³•å•ç‹¬è®¾ç½®")
        }
        async setMacro(e, t, r, o) {
          let n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
          await this.setProfile(e), await this.setMacroKeyData(t, r, o, n)
        }
        async setShortcutKeyData(e, t) {
          let r = Array(512).fill(0);
          r[0] = t.layer + 1, r[1] = e, r[2] = 1;
          let o = this.generateShortcutEvents(r, t);
          r[3] = o;
          let n = 0;
          for (let e = 0; e < 3; e++) {
            let t = Array(65).fill(0);
            t[1] = 170, t[2] = 85, t[3] = 204, t[4] = 51, t[5] = e;
            for (let e = 0; e < 54; e++) t[6 + e] = r[n + e];
            n += 54, await this.setData(t), await this.delay(20)
          }
          await this.delay(10)
        }
        generateShortcutEvents(e, t) {
          let r = 4,
            o = 0,
            n = t.code1,
            i = t.code2;
          return 1 & n && (e[r++] = 224, e[r++] = this.getDelayTime(0, 10), o++), 2 & n && (e[r++] = 225, e[r++] = this.getDelayTime(0, 10), o++), 4 & n && (e[r++] = 226, e[r++] = this.getDelayTime(0, 10), o++), 8 & n && (e[r++] = 227, e[r++] = this.getDelayTime(0, 10), o++), e[r++] = i, e[r++] = this.getDelayTime(0, 10), o++, e[r++] = i, e[r++] = this.getDelayTime(1, 10), o++, 8 & n && (e[r++] = 227, e[r++] = this.getDelayTime(1, 10), o++), 4 & n && (e[r++] = 226, e[r++] = this.getDelayTime(1, 10), o++), 2 & n && (e[r++] = 225, e[r++] = this.getDelayTime(1, 10), o++), 1 & n && (e[r++] = 224, e[r++] = this.getDelayTime(1, 10), o++), o
        }
        async setMacroKeyData(e, t, r) {
          let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
            n = Array(512).fill(0);
          n[0] = t.layer + 1, n[1] = e, n[2] = o;
          let i = this.generateMacroEvents(n, r);
          n[3] = i;
          let a = 0;
          for (let e = 0; e < 3; e++) {
            let t = Array(65).fill(0);
            t[1] = 170, t[2] = 85, t[3] = 204, t[4] = 51, t[5] = e;
            for (let e = 0; e < 54; e++) t[6 + e] = n[a + e];
            a += 54, await this.setData(t), await this.delay(20)
          }
          await this.delay(10)
        }
        generateMacroEvents(e, t) {
          let r = 4,
            o = 0;
          for (let n of t) {
            if (2 === n.type) {
              let t = this.convertKeyCode(n.code);
              1 === n.action ? (e[r++] = t, e[r++] = this.getDelayTime(0, n.delay || 10), o++) : 2 === n.action && (e[r++] = t, e[r++] = this.getDelayTime(1, n.delay || 10), o++)
            } else if (1 === n.type) {
              let t = 0;
              if (1 === n.action || 2 === n.action) t = n.code || 1, 1 === n.action ? (e[r++] = t, e[r++] = this.getDelayTime(0, n.delay || 10), o++) : 2 === n.action && (e[r++] = t, e[r++] = this.getDelayTime(1, n.delay || 10), o++);
              else if (n.action >= 3 && n.action <= 6) {
                switch (n.action) {
                  case 3:
                  default:
                    t = 241;
                    break;
                  case 4:
                    t = 242;
                    break;
                  case 5:
                    t = 243;
                    break;
                  case 6:
                    t = 244
                }
                e[r++] = t, e[r++] = this.getDelayTime(0, n.delay || 10), o++
              } else console.warn("æœªçŸ¥çš„é¼ æ ‡åŠ¨ä½œç±»åž‹: ".concat(n.action))
            }
            if (o >= 60 || r >= 124) {
              console.warn("å®äº‹ä»¶æ•°é‡è¶…å‡ºé™åˆ¶ï¼ˆæœ€å¤§60ä¸ªåŠ¨ä½œï¼‰ï¼Œå·²æˆªæ–­");
              break
            }
          }
          return o
        }
        convertKeyCode(e) {
          return e
        }
        getDelayTime(e, t) {
          let r = 0,
            o = 0;
          return (t = Math.min(Math.max(t, 10), 31e3)) >= 10 && t <= 310 ? (r = 0, o = Math.max(1, Math.min(31, Math.round(t / 10)))) : t > 310 && t <= 1550 ? (r = 1, o = Math.max(1, Math.min(31, Math.round(t / 50)))) : t > 1550 && t <= 3100 ? (r = 2, o = Math.max(1, Math.min(31, Math.round(t / 100)))) : t > 3100 && t <= 31e3 && (r = 3, o = Math.max(1, Math.min(31, Math.round(t / 1e3)))), e << 7 | r << 5 | o
        }
        async setLightMode(e) {
          let t = Array(65).fill(0);
          t[1] = 170, t[2] = 85, t[3] = 204, t[4] = 51, t[5] = 7, 21 === e.mode ? (t[6] = 6, t[7] = 0, t[8] = 0, t[9] = 0) : (t[6] = e.mode - 1, t[7] = e.brightness - 1, t[8] = e.speed - 1, t[9] = e.direction), t[10] = e.colorindex, await this.setData(t), await this.delay(50), t[1] = 170, t[2] = 85, t[3] = 204, t[4] = 51, t[5] = 7, 21 === e.mode ? (t[6] = 6, t[7] = 0, t[8] = 0, t[9] = 0) : (t[6] = e.mode - 1, t[7] = e.brightness - 1, t[8] = e.speed - 1, t[9] = e.direction), t[10] = e.colorindex, await this.setData(t), await this.delay(10), 23 === e.mode && (t[1] = 170, t[2] = 85, t[3] = 204, t[4] = 51, t[5] = 11, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 0, await this.setData(t))
        }
        async setLightBoxMode(e) {
          let t = Array(65).fill(0);
          t[1] = 170, t[2] = 85, t[3] = 204, t[4] = 51, t[5] = 7, t[6] = e.mode + 128 - 1, t[7] = e.brightness + 128 - 1, t[8] = e.speed + 128 - 1, t[9] = e.direction + 128, t[10] = e.colorindex + 128, await this.setData(t), await this.delay(10), 23 === e.mode && (t[1] = 170, t[2] = 85, t[3] = 204, t[4] = 51, t[5] = 11, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 0, await this.setData(t))
        }
        async setUserLightAllKeysData(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          if (0 === e.length) return;
          let r = Array(600).fill(0);
          for (let t of e) {
            let e = t.index,
              o = t.color.replace("#", ""),
              n = parseInt(o.substring(0, 2), 16),
              i = parseInt(o.substring(2, 4), 16),
              a = parseInt(o.substring(4, 6), 16);
            r[3 * e + 0] = n, r[3 * e + 1] = i, r[3 * e + 2] = a
          }
          let o = Math.ceil(6);
          for (let e = 0; e < 2; e++) {
            let n = 0,
              i = Array(65).fill(0);
            i[1] = 170, i[2] = 85, i[3] = 204, i[4] = 51, i[5] = 11, i[6] = Math.max(1, Math.min(3, t)), i[7] = 0, i[8] = 0, i[9] = 0, i[10] = 0, await this.setData(i), await this.delay(10);
            for (let e = 0; e < o; e++) {
              let t = Array(65).fill(0);
              t[0] = 0, t[1] = 170, t[2] = 85, t[3] = 204, t[4] = 51, t[5] = 246 + e;
              for (let e = 0; e < 54 && !(n + e >= r.length); e++) t[6 + e] = r[n + e];
              n += 54, await this.setData(t), await this.delay(1)
            }
            0 === e && await this.delay(100)
          }
          let n = Array(65).fill(0);
          n[0] = 0, n[1] = 170, n[2] = 85, n[3] = 204, n[4] = 51, n[5] = 10, await this.setData(n), await this.delay(10), console.log("è‡ªå®šä¹‰ç¯å…‰æ•°æ®å·²ä¿å­˜åˆ°è®¾å¤‡")
        }
        async setAuroraLightData(e) {
          if (0 === e.length) return;
          let t = Array(600).fill(0);
          for (let r of e) {
            let e = r.index,
              o = r.color.replace("#", ""),
              n = parseInt(o.substring(0, 2), 16),
              i = parseInt(o.substring(2, 4), 16),
              a = parseInt(o.substring(4, 6), 16);
            t[3 * e + 0] = n, t[3 * e + 1] = i, t[3 * e + 2] = a
          }
          let r = 0;
          for (let e = 0; e <= 5; e++) {
            let o = Array(65).fill(0);
            o[0] = 0, o[1] = 170, o[2] = 85, o[3] = 204, o[4] = 51, o[5] = 240 + e;
            for (let e = 0; e < 54 && !(r + e >= t.length); e++) o[6 + e] = t[r + e];
            r += 54, await this.setFastData(o), await this.delay(1)
          }
        }
        async getAuroraLightData() {
          let e = [];
          for (let t = 0; t <= 5; t++) {
            let r = Array(65).fill(0);
            r[0] = 0, r[1] = 170, r[2] = 85, r[3] = 204, r[4] = 51, r[5] = 18, r[6] = 240 + t;
            let o = await this.getData(r);
            if (await this.delay(2), o.slice(0, 5).every(e => 0 === e)) return console.warn("âš ï¸ æ•°æ®åŒ… ".concat(t, " (0x").concat((240 + t).toString(16).toUpperCase(), ") çš„å‰5ä¸ªå­—èŠ‚å…¨éƒ¨ä¸º0ï¼Œè®¾å¤‡è¿”å›žæ— æ•ˆæ•°æ®")), [];
            let n = o.slice(5, 59);
            e.push(n)
          }
          return e
        }
        async setFnLayerMode(e) {
          let t = Array(65).fill(0);
          t[1] = 170, t[2] = 85, t[3] = 204, t[4] = 51, t[5] = 16, t[6] = e, await this.setData(t), await this.delay(2)
        }
        async setSleepLevel(e) {
          let t = Array(65).fill(0);
          t[1] = 170, t[2] = 85, t[3] = 204, t[4] = 51, t[5] = 12, t[6] = Math.max(1, Math.min(e, 4)), await this.setData(t), await this.delay(2)
        }
        async setResponseLevel(e) {
          let t = Array(65).fill(0);
          t[1] = 170, t[2] = 85, t[3] = 204, t[4] = 51, t[5] = 13, t[6] = Math.max(1, Math.min(e, 3)), await this.setData(t), await this.delay(2)
        }
        async restoreKeyboardFactorySettings() {
          let e = Array(65).fill(0);
          e[1] = 170, e[2] = 85, e[3] = 204, e[4] = 51, e[5] = 8, await this.setData(e), await this.delay(2)
        }
        cleanup() {
          this.writeTimeout && (clearTimeout(this.writeTimeout), this.writeTimeout = null)
        }
        constructor(e) {
          this.demoMode = !1, this.vendorId = 0, this.productId = 0, this.productName = "Test Keyboard", this.onListeners = [], this.mode = "usb", this.isWriting = !1, this.writeTimeout = null, this.api = e;
          let t = this.api.getHID();
          this.vendorId = t.vendorId, this.productId = t.productId, this.productName = t.productName, this.addListeners()
        }
      }
      var F = r(6550),
        E = r(3949),
        R = r(9087),
        A = r(740);
      r(1614);
      let M = "i18next",
        _ = () => navigator.language.toLowerCase().includes("zh") ? "cn" : "en";

      function L() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "common",
          t = arguments.length > 1 ? arguments[1] : void 0,
          [r, o] = (0, R.fP)([M]),
          n = (0, E.$G)(e, t),
          {
            i18n: i
          } = n;
        return (0, s.useEffect)(() => {
          let e = _(),
            t = (null == r ? void 0 : r.i18next) || e;
          i.changeLanguage(t), (null == r ? void 0 : r.i18next) || o(M, t, {
            path: "/"
          })
        }, [r, i, o]), { ...n,
          changeLanguage: e => {
            i.changeLanguage(e), o(M, e, {
              path: "/"
            })
          }
        }
      }
      F.ZP.use(E.Db).use((0, A.Z)((e, t) => r(4781)("./".concat(e, "/").concat(t, ".json")))).init({
        supportedLngs: ["cn", "en"],
        fallbackLng: "cn",
        fallbackNS: "common",
        defaultNS: "common",
        lng: void 0
      });
      let z = "configurations";

      function N() {
        return new Promise((e, t) => {
          let r = indexedDB.open("KeyboardAppDB", 1);
          r.onerror = () => {
            t(Error("æ— æ³•æ‰“å¼€ IndexedDB"))
          }, r.onsuccess = () => {
            e(r.result)
          }, r.onupgradeneeded = e => {
            let t = e.target.result;
            t.objectStoreNames.contains(z) || t.createObjectStore(z, {
              keyPath: "key"
            })
          }
        })
      }
      async function T(e, t) {
        try {
          let r = await N();
          return new Promise((o, n) => {
            let i = r.transaction([z], "readwrite").objectStore(z),
              a = {
                key: e,
                value: JSON.stringify(t),
                timestamp: Date.now()
              },
              l = i.put(a);
            l.onsuccess = () => {
              r.close(), o(!0)
            }, l.onerror = () => {
              r.close(), n(Error("ä¿å­˜ ".concat(e, " å¤±è´¥")))
            }
          })
        } catch (e) {
          return console.error("IndexedDB setItem é”™è¯¯:", e), !1
        }
      }
      async function O(e) {
        try {
          let t = await N();
          return new Promise((r, o) => {
            let n = t.transaction([z], "readonly").objectStore(z).get(e);
            n.onsuccess = () => {
              if (t.close(), n.result) try {
                let e = JSON.parse(n.result.value);
                r(e)
              } catch (e) {
                r(null)
              } else r(null)
            }, n.onerror = () => {
              t.close(), o(Error("è¯»å– ".concat(e, " å¤±è´¥")))
            }
          })
        } catch (e) {
          return console.error("IndexedDB getItem é”™è¯¯:", e), null
        }
      }
      async function W(e) {
        try {
          let t = localStorage.getItem(e);
          if (t) {
            let r = JSON.parse(t);
            if (await T(e, r)) return localStorage.removeItem(e), console.log("å·²å°† ".concat(e, " ä»Ž localStorage è¿ç§»åˆ° IndexedDB")), !0
          }
          return !1
        } catch (t) {
          return console.error("è¿ç§» ".concat(e, " å¤±è´¥:"), t), !1
        }
      }
      let B = "127.0.0.1",
        P = "/api/keyboard/musiceffect";
      (o = i || (i = {}))[o.SOLID_BLACK = 0] = "SOLID_BLACK", o[o.STATIC_GREEN_YELLOW_RED = 1] = "STATIC_GREEN_YELLOW_RED", o[o.STATIC_RAINBOW = 2] = "STATIC_RAINBOW", o[o.STATIC_RAINBOW_INVERSE = 3] = "STATIC_RAINBOW_INVERSE", o[o.ANIM_COLOR_WHEEL = 4] = "ANIM_COLOR_WHEEL", o[o.ANIM_SPECTRUM_CYCLE = 5] = "ANIM_SPECTRUM_CYCLE", o[o.SOLID_WHITE = 6] = "SOLID_WHITE", o[o.SOLID_RED = 7] = "SOLID_RED", o[o.SOLID_ORANGE = 8] = "SOLID_ORANGE", o[o.SOLID_YELLOW = 9] = "SOLID_YELLOW", o[o.SOLID_BLUE = 10] = "SOLID_BLUE", o[o.SOLID_GREEN = 11] = "SOLID_GREEN", o[o.SOLID_CYAN = 12] = "SOLID_CYAN", o[o.DANCE = 13] = "DANCE", o[o.SOLID_PURPLE = 14] = "SOLID_PURPLE", o[o.STATIC_GREEN_WHITE_RED = 15] = "STATIC_GREEN_WHITE_RED", o[o.STATIC_BLUE_CYAN_WHITE = 16] = "STATIC_BLUE_CYAN_WHITE", o[o.STATIC_RED_WHITE_BLUE = 17] = "STATIC_RED_WHITE_BLUE", o[o.ANIM_RAINBOW_SINUSOIDAL = 18] = "ANIM_RAINBOW_SINUSOIDAL", o[o.ANIM_RAINBOW_HSV = 19] = "ANIM_RAINBOW_HSV", o[o.ANIM_COLOR_WHEEL_2 = 20] = "ANIM_COLOR_WHEEL_2", o[o.ANIM_SINUSOIDAL_CYCLE = 21] = "ANIM_SINUSOIDAL_CYCLE", o[o.AMBILIGHT = 100] = "AMBILIGHT", (n = a || (a = {}))[n.NONE = 0] = "NONE", n[n.GREEN_YELLOW_RED = 1] = "GREEN_YELLOW_RED", n[n.RAINBOW = 2] = "RAINBOW", n[n.RAINBOW_INVERSE = 3] = "RAINBOW_INVERSE", n[n.COLOR_WHEEL = 4] = "COLOR_WHEEL", n[n.SPECTRUM_CYCLE = 5] = "SPECTRUM_CYCLE", n[n.SOLID_WHITE = 6] = "SOLID_WHITE", n[n.SOLID_RED = 7] = "SOLID_RED", n[n.SOLID_ORANGE = 8] = "SOLID_ORANGE", n[n.SOLID_YELLOW = 9] = "SOLID_YELLOW", n[n.SOLID_BLUE = 10] = "SOLID_BLUE", n[n.SOLID_GREEN = 11] = "SOLID_GREEN", n[n.SOLID_CYAN = 12] = "SOLID_CYAN";
      class U {
        async checkServer() {
          let e = this.isServerRunning,
            t = [];
          for (let e = 10560; e <= 10562; e++) t.push(fetch("http://".concat(B, ":").concat(e).concat(P, "/status"), {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            },
            signal: AbortSignal.timeout(300)
          }).then(t => t.ok ? {
            success: !0,
            port: e
          } : {
            success: !1,
            port: e
          }).catch(() => ({
            success: !1,
            port: e
          })));
          try {
            let r = (await Promise.all(t)).find(e => e.success);
            if (r) return this.serverPort = r.port, this.isServerRunning = !0, !e && this.isServerRunning && this.onReconnectCallback && this.onReconnectCallback(), !0
          } catch (e) {
            console.warn("[MusicRhythmService] ç«¯å£æ£€æµ‹å¼‚å¸¸:", e)
          }
          return this.isServerRunning = !1, this.serverPort = null, !1
        }
        getServiceStatus() {
          return {
            isRunning: this.isServerRunning,
            port: this.serverPort
          }
        }
        setReconnectCallback(e) {
          this.onReconnectCallback = e
        }
        async setConfig(e) {
          let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          if (!this.isServerRunning || !this.serverPort) return null;
          try {
            let o = "http://".concat(B, ":").concat(this.serverPort).concat(P, "?param=").concat(e.mode, "&").concat(e.amplitude, "&").concat(e.backmode, "&").concat(e.brightness, "&").concat(t ? 1 : 0, "&").concat(r ? 1 : 0),
              n = await fetch(o, {
                signal: AbortSignal.timeout(2e3)
              });
            if (!n.ok) throw Error("HTTPé”™è¯¯! çŠ¶æ€ç : ".concat(n.status));
            return await n.json()
          } catch (e) {
            return null
          }
        }
        async getData() {
          if (!this.isServerRunning || !this.serverPort) return null;
          let e = performance.now(),
            t = 0,
            r = 0;
          try {
            let o = "http://".concat(B, ":").concat(this.serverPort).concat(P),
              n = performance.now(),
              i = await fetch(o, {
                method: "GET",
                cache: "no-store",
                signal: AbortSignal.timeout(2e3)
              });
            if (t = performance.now() - n, !i.ok) throw Error("HTTPé”™è¯¯! çŠ¶æ€ç : ".concat(i.status));
            let a = performance.now(),
              l = await i.json();
            r = performance.now() - a;
            let s = performance.now() - e;
            return this.recordRequestTime(s, t, r), l
          } catch (n) {
            let o = performance.now() - e;
            return this.recordRequestTime(o, t, r), null
          }
        }
        recordRequestTime(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          this.requestCount++, this.requestTimes.push(e), t > 0 && (this.networkTimes.push(t), this.networkTimes.length > 100 && this.networkTimes.shift()), r > 0 && (this.parseTimes.push(r), this.parseTimes.length > 100 && this.parseTimes.shift()), this.requestTimes.length > 100 && this.requestTimes.shift();
          let o = Date.now();
          if (o - this.lastLogTime > 5e3) {
            let e = this.requestTimes.reduce((e, t) => e + t, 0) / this.requestTimes.length,
              t = Math.min(...this.requestTimes),
              r = Math.max(...this.requestTimes),
              n = {
                æ€» è€— æ—¶: "".concat(e.toFixed(2), "ms (").concat(t.toFixed(2), "-").concat(r.toFixed(2), "ms)"),
                æ€» è¯· æ±‚ æ•°: this.requestCount
              };
            if (this.networkTimes.length > 0) {
              let e = this.networkTimes.reduce((e, t) => e + t, 0) / this.networkTimes.length,
                t = this.parseTimes.length > 0 ? this.parseTimes.reduce((e, t) => e + t, 0) / this.parseTimes.length : 0;
              n.ç½‘ ç» œè€— æ—¶ = "".concat(e.toFixed(2), "ms"), n.JSONè§£ æž = "".concat(t.toFixed(2), "ms")
            }
            this.lastLogTime = o
          }
        }
        async sendKeyboardLayout(e) {
          if (!this.isServerRunning || !this.serverPort) return !1;
          try {
            let t = JSON.stringify(e),
              r = btoa(encodeURIComponent(t).replace(/%([0-9A-F]{2})/g, (e, t) => String.fromCharCode(parseInt(t, 16)))),
              o = "http://".concat(B, ":").concat(this.serverPort, "/api/keyboard/layout/base64?data=").concat(encodeURIComponent(r)),
              n = await fetch(o, {
                signal: AbortSignal.timeout(2e3)
              });
            if (!n.ok) throw Error("HTTPé”™è¯¯! çŠ¶æ€ç : ".concat(n.status));
            return await n.json(), !0
          } catch (e) {
            return !1
          }
        }
        startPolling() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 50,
            t = arguments.length > 1 ? arguments[1] : void 0,
            r = arguments.length > 2 ? arguments[2] : void 0;
          this.pollingInterval && this.stopPolling(), this.onDataCallback = t, this.onTimeoutCallback = r || null, this.isPolling = !1, this.lastSuccessTime = Date.now(), this.pollingInterval = setInterval(async () => {
            if (!this.isPolling) {
              this.isPolling = !0;
              try {
                let e = await this.getData();
                e && this.onDataCallback && (this.lastSuccessTime = Date.now(), this.onDataCallback(e))
              } finally {
                this.isPolling = !1
              }
            }
          }, e), this.timeoutCheckInterval = setInterval(() => {
            Date.now() - this.lastSuccessTime > 5e3 && (this.isServerRunning = !1, this.serverPort = null, this.onTimeoutCallback && this.onTimeoutCallback(), this.stopPolling())
          }, 1e3)
        }
        stopPolling() {
          if (this.pollingInterval && (clearInterval(this.pollingInterval), this.pollingInterval = null), this.timeoutCheckInterval && (clearInterval(this.timeoutCheckInterval), this.timeoutCheckInterval = null), this.onDataCallback = null, this.onTimeoutCallback = null, this.isPolling = !1, this.lastSuccessTime = 0, this.requestTimes.length > 0) {
            let e = this.requestTimes.reduce((e, t) => e + t, 0) / this.requestTimes.length,
              t = Math.min(...this.requestTimes),
              r = Math.max(...this.requestTimes);
            console.log("[MusicRhythmService] åœæ­¢è½®è¯¢ - æœ€ç»ˆæ€§èƒ½ç»Ÿè®¡:", {
              å¹³ å‡ è€— æ—¶: "".concat(e.toFixed(2), "ms"),
              æœ€ å° è€— æ—¶: "".concat(t.toFixed(2), "ms"),
              æœ€ å¤§ è€— æ—¶: "".concat(r.toFixed(2), "ms"),
              æ€» è¯· æ±‚ æ•°: this.requestCount
            })
          }
        }
        reset() {
          this.stopPolling(), this.isServerRunning = !1, this.serverPort = null, this.onReconnectCallback = null, this.requestTimes = [], this.networkTimes = [], this.parseTimes = [], this.requestCount = 0, this.lastLogTime = 0
        }
        async close() {
          if (!this.isServerRunning || !this.serverPort) return !1;
          try {
            let e = "http://".concat(B, ":").concat(this.serverPort, "/api/keyboard/musiceffect/close"),
              t = await fetch(e, {
                signal: AbortSignal.timeout(2e3)
              });
            if (!t.ok) throw Error("HTTPé”™è¯¯! çŠ¶æ€ç : ".concat(t.status));
            return this.stopPolling(), !0
          } catch (e) {
            return !1
          }
        }
        constructor() {
          this.serverPort = null, this.isServerRunning = !1, this.pollingInterval = null, this.onDataCallback = null, this.onTimeoutCallback = null, this.onReconnectCallback = null, this.isPolling = !1, this.lastSuccessTime = 0, this.timeoutCheckInterval = null, this.requestTimes = [], this.networkTimes = [], this.parseTimes = [], this.requestCount = 0, this.lastLogTime = 0
        }
      }
      let H = new U,
        K = async e => 101 === e ? await r.e(256).then(r.t.bind(r, 9256, 19)) : await r.e(341).then(r.t.bind(r, 2341, 19)),
        V = (e, t, r) => {
          if ("system" === e) {
            let e = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(e), document.documentElement.setAttribute("data-theme", e)
          } else document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(e), document.documentElement.setAttribute("data-theme", e);
          if (r && t) {
            document.documentElement.setAttribute("data-theme", "custom"), document.documentElement.style.setProperty("--custom-base-color", t);
            let e = t.replace("#", "");
            if (3 === e.length && (e = e.split("").map(e => e + e).join("")), 6 === e.length) {
              let t = parseInt(e.substr(0, 2), 16),
                r = parseInt(e.substr(2, 2), 16),
                o = parseInt(e.substr(4, 2), 16),
                n = "#".concat(Math.min(255, Math.floor(1.1 * t)).toString(16).padStart(2, "0")).concat(Math.min(255, Math.floor(1.1 * r)).toString(16).padStart(2, "0")).concat(Math.min(255, Math.floor(1.1 * o)).toString(16).padStart(2, "0"));
              document.documentElement.style.setProperty("--custom-base-color-hover", n)
            }
          } else document.documentElement.style.removeProperty("--custom-base-color"), document.documentElement.style.removeProperty("--custom-base-color-hover")
        },
        G = ["xi", "jin", "ping", "xjp", "gcd", "ä¹ ", "è¿‘", "å¹³", "ä¸­å›½", "æ“", "è‰¹", "å‚»", "ç¬”", "sb", "é€¼", "å…š", "å¤§å¤§"],
        Y = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : G;
          if (!e) return e;
          let r = e;
          return t.forEach(e => {
            let t = RegExp(e, "gi");
            r = r.replace(t, "*".repeat(e.length))
          }), r
        },
        Z = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : G;
          return !!e && t.some(t => RegExp(t, "gi").test(e))
        },
        J = [26, 4, 22, 7, 82, 81, 80, 79],
        q = [10, 9, 5, 25, 224, 226, 43, 44, 30, 31, 32, 33, 34, 35, 41],
        X = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 51, 52, 54, 55, 56, 82, 81, 80, 79],
        Q = [170, 85, 204, 51],
        $ = {
          USB_ONLINE: 3,
          WIRELESS_24G_ONLINE: 1
        },
        ee = {
          USB: 0,
          WIRELESS_24G: 1
        },
        et = {
          [ee.USB]: "USB",
          [ee.WIRELESS_24G]: "2.4G"
        };

      function er(e) {
        return !!e && !(e.length < 4) && Q.every((t, r) => e[r] === t)
      }
      async function eo(e) {
        let t, r, o, n, i = !1,
          a = 100,
          l = 0;
        try {
          let s = await e.device.getDeviceStatusAndBattery(e.deviceModeName);
          if (er(s)) {
            n = s, a = Math.min(s[5] || 0, 100);
            let c = s[6];
            if (i = c === $.USB_ONLINE || c === $.WIRELESS_24G_ONLINE, l = s[7] || 0, s.length >= 12) {
              let o = s && !(s.length < 12) && er(s) ? {
                vendorId: s[8] << 8 | s[9],
                productId: s[10] << 8 | s[11]
              } : null;
              o && (t = o.vendorId, r = o.productId, e.deviceMode === ee.WIRELESS_24G && console.log("è®¾å¤‡ ".concat(e.deviceModeName, " - å®žé™…VID/PID: 0x").concat(t.toString(16).toUpperCase(), "/0x").concat(r.toString(16).toUpperCase(), " ") + "(æŽ¥æ”¶å™¨VID/PID: 0x".concat(e.vendorId.toString(16).toUpperCase(), "/0x").concat(e.productId.toString(16).toUpperCase(), ")")))
            }
            s.length >= 14 && (o = en(s)) && console.log("è®¾å¤‡ ".concat(e.deviceModeName, " - å›ºä»¶ç‰ˆæœ¬: ").concat(o)), console.log("è®¾å¤‡ ".concat(e.deviceModeName, " - åœ¨çº¿: ").concat(i, ", ç”µé‡: ").concat(a, "%"))
          } else console.warn("è®¾å¤‡ ".concat(e.deviceModeName, " å“åº”æ ¼å¼ä¸æ­£ç¡®ï¼Œåˆ¤å®šä¸ºç¦»çº¿"))
        } catch (t) {
          console.warn("è®¾å¤‡ ".concat(e.deviceModeName, " é€šè®¯å¤±è´¥ï¼Œåˆ¤å®šä¸ºç¦»çº¿:"), t)
        }
        return { ...e,
          isOnline: i,
          batteryLevel: a,
          chargeFlag: l,
          actualVendorId: t,
          actualProductId: r,
          firmwareVersion: o,
          rawStatusData: n
        }
      }

      function en(e) {
        if (!e || e.length < 14 || !er(e)) return "";
        let t = e[12],
          r = e[13];
        return 0 === t && 0 === r ? "" : "".concat(t >> 4 & 15, ".").concat(15 & t, ".").concat(10 * (r >> 4 & 15) + (15 & r))
      }
      async function ei(e) {
        console.log("æ­£åœ¨æ£€æµ‹è®¾å¤‡åœ¨çº¿çŠ¶æ€...");
        let t = await Promise.all(e.map(eo)),
          r = t.find(e => e.deviceMode === ee.USB);
        if (!r) return console.log("æœªæ‰¾åˆ°USBè®¾å¤‡ï¼Œè·³è¿‡2.4Gè®¾å¤‡VID/PIDéªŒè¯"), t;
        let o = r.vendorId,
          n = r.productId;
        console.log("USBè®¾å¤‡åŸºå‡† - VID: 0x".concat(o.toString(16).toUpperCase(), ", PID: 0x").concat(n.toString(16).toUpperCase()));
        let i = t.filter(e => {
          if (e.deviceMode === ee.USB) return !0;
          if (e.deviceMode === ee.WIRELESS_24G) {
            let t = e.actualVendorId,
              r = e.actualProductId;
            if (!t || !r) return console.warn("âŒ 2.4Gè®¾å¤‡æ— æ³•è¯»å–å†…éƒ¨VID/PIDï¼Œå·²è¿‡æ»¤ - æŽ¥æ”¶å™¨: VID=0x".concat(e.vendorId.toString(16).toUpperCase(), ", PID=0x").concat(e.productId.toString(16).toUpperCase())), !1;
            if (t !== o || r !== n) return console.warn("âŒ 2.4Gè®¾å¤‡VID/PIDä¸åŒ¹é…ï¼Œå·²è¿‡æ»¤ - å†…éƒ¨å­˜å‚¨: VID=0x".concat(t.toString(16).toUpperCase(), ", PID=0x").concat(r.toString(16).toUpperCase(), " ") + "| æœŸæœ›: VID=0x".concat(o.toString(16).toUpperCase(), ", PID=0x").concat(n.toString(16).toUpperCase())), !1;
            console.log("âœ… 2.4Gè®¾å¤‡VID/PIDéªŒè¯é€šè¿‡ - å†…éƒ¨å­˜å‚¨: VID=0x".concat(t.toString(16).toUpperCase(), ", PID=0x").concat(r.toString(16).toUpperCase(), " ") + "| æŽ¥æ”¶å™¨: VID=0x".concat(e.vendorId.toString(16).toUpperCase(), ", PID=0x").concat(e.productId.toString(16).toUpperCase()))
          }
          return !0
        });
        return i.length < t.length && console.log("å·²è¿‡æ»¤ ".concat(t.length - i.length, " ä¸ªVID/PIDä¸åŒ¹é…çš„2.4Gè®¾å¤‡")), i
      }
      async function ea(e, t, r, o) {
        if (!r) return "";
        if (o) return console.log("\uD83D\uDCF1 å½“å‰å›ºä»¶ç‰ˆæœ¬ï¼ˆä½¿ç”¨ç¼“å­˜ï¼‰: ".concat(o)), o;
        try {
          console.log("âš ï¸ æœªæ‰¾åˆ°ç¼“å­˜çš„å›ºä»¶ç‰ˆæœ¬ï¼Œé‡æ–°è¯»å–è®¾å¤‡...");
          let r = await e.getDeviceStatusAndBattery(t),
            o = en(r);
          if (o) return console.log("\uD83D\uDCF1 å½“å‰å›ºä»¶ç‰ˆæœ¬ï¼ˆä»Žè®¾å¤‡çŠ¶æ€è§£æžï¼‰: ".concat(o)), o;
          if (o = await e.getFirmwareVersion()) return console.log("\uD83D\uDCF1 å½“å‰å›ºä»¶ç‰ˆæœ¬ï¼ˆä»Ž getFirmwareVersionï¼‰: ".concat(o)), o
        } catch (e) {
          console.warn("èŽ·å–å›ºä»¶ç‰ˆæœ¬å¤±è´¥:", e)
        }
        return ""
      }
      var el = r(8946),
        es = r.n(el);
      let ec = e => {
          let {
            t,
            currentConfigRef: r,
            deviceInfo: o,
            blockDeviceStatusPolling: n,
            unblockDeviceStatusPolling: i,
            setIsLoading: a,
            setLoadingMessage: l,
            setLoadingDescription: c
          } = e, [d, u] = (0, s.useState)(0), [x, h] = (0, s.useState)([]), [p, g] = (0, s.useState)([]), m = (0, s.useRef)({}), b = (0, s.useRef)([]), [f, y] = (0, s.useState)([]), w = (0, s.useRef)([]), [v, k] = (0, s.useState)({
            fnLayerMode: 0,
            sleepLevel: 1,
            responseLevel: 1,
            sleepTime: 0,
            sleepMode: 0,
            windowKeyLock: !1,
            altf4Lock: !1,
            altTabLock: !1
          }), [j, S] = (0, s.useState)(0), C = (0, s.useRef)([]), [D, I] = (0, s.useState)([]), [F, E] = (0, s.useState)([]), [R, A] = (0, s.useState)([]), [M, _] = (0, s.useState)(1), [L, z] = (0, s.useState)({
            group1: [],
            group2: [],
            group3: []
          }), [N, T] = (0, s.useState)(0), O = (0, s.useRef)([]), [W, B] = (0, s.useState)([]), [P, U] = (0, s.useState)([]), [H, V] = (0, s.useState)([]), [G, Y] = (0, s.useState)([]), [Z, Q] = (0, s.useState)(0), $ = (0, s.useCallback)(e => {
            w.current = e, y(e)
          }, []), ee = (0, s.useCallback)(async e => {
            let o = (null == e ? void 0 : e.deviceType) || 101;
            try {
              let e = await K(o);
              C.current = e.default.light.backlight, O.current = e.default.light.boxlight, m.current = e.default.layouts, b.current = e.default.layouts.keys;
              let n = b.current.map(e => ({
                  row: e.row,
                  col: e.col,
                  index: e.index,
                  name: e.name,
                  code: e.code,
                  color: J.includes(e.code) ? "#FFFFFF" : "#000000"
                })),
                i = b.current.map(e => ({
                  row: e.row,
                  col: e.col,
                  index: e.index,
                  name: e.name,
                  code: e.code,
                  color: q.includes(e.code) ? "#FFFFFF" : "#000000"
                })),
                a = b.current.map(e => ({
                  row: e.row,
                  col: e.col,
                  index: e.index,
                  name: e.name,
                  code: e.code,
                  color: X.includes(e.code) ? "#FFFFFF" : "#000000"
                }));
              if (A(n), z({
                  group1: es().cloneDeep(n),
                  group2: es().cloneDeep(i),
                  group3: es().cloneDeep(a)
                }), localStorage.getItem(r.current.profileName)) {
                let e;
                let t = parseInt(localStorage.getItem(r.current.profileName + "select") || "0", 10);
                t && u(t);
                let o = localStorage.getItem(r.current.profileName);
                o && (e = JSON.parse(o), g(e), e[t] && e[t].kbKeys && (w.current = e[t].kbKeys, S(e[t].curLightMode), T(e[t].curLightMode), y(e[t].kbKeys), I(e[t].lightInfo), B(e[t].lightBoxInfo), E(e[t].keyItemColor), k(e[t].funcInfo), e[t].customLightColors && z(e[t].customLightColors), e[t].customLightGroup && _(e[t].customLightGroup)))
              } else {
                let e = b.current.map(e => ({
                    index: e.index,
                    layer: 0,
                    keyValue: e.code,
                    keyName: e.name,
                    lang: "",
                    type: 0,
                    code1: 0,
                    code2: e.code,
                    code3: 0
                  })),
                  o = e.map(e => ({ ...e,
                    layer: 1
                  })),
                  l = [e, o];
                w.current = l, y(l);
                let s = C.current.map(e => ({ ...e,
                  name: e.name,
                  lang: e.lang,
                  mode: e.value,
                  brightness: 5,
                  speed: 3,
                  direction: e.direction ? 1 : 0,
                  colorful: 1,
                  colorindex: 7,
                  color_value1: 0,
                  color_value2: 0,
                  color_value3: 0,
                  color_value4: 0,
                  color_value5: 0,
                  color_value6: 0,
                  color_value7: 0,
                  color_value8: 0,
                  reserved: 0,
                  status: 0
                }));
                I(s), E(R);
                let c = O.current.map(e => ({ ...e,
                  name: e.name,
                  lang: e.lang,
                  mode: e.value,
                  brightness: 5,
                  speed: 3,
                  direction: e.direction ? 1 : 0,
                  colorful: 1,
                  colorindex: 7,
                  color_value1: 0,
                  color_value2: 0,
                  color_value3: 0,
                  color_value4: 0,
                  color_value5: 0,
                  color_value6: 0,
                  color_value7: 0,
                  color_value8: 0,
                  reserved: 0,
                  status: 0
                }));
                B(c);
                let d = [t("71"), t("72"), t("73")],
                  u = {
                    fnLayerMode: 0,
                    sleepLevel: 1,
                    responseLevel: 1,
                    sleepTime: 0,
                    sleepMode: 0,
                    windowKeyLock: !1,
                    altf4Lock: !1,
                    altTabLock: !1
                  };
                k(u);
                let x = d.map((e, t) => ({
                  name: e,
                  active: 0 === t,
                  curLightMode: 1,
                  curlLightBoxMode: 1,
                  kbKeys: es().cloneDeep(l),
                  lightInfo: es().cloneDeep(s),
                  lightBoxInfo: es().cloneDeep(c),
                  keyItemColor: es().cloneDeep(n),
                  funcInfo: es().cloneDeep(u),
                  customLightGroup: 1,
                  customLightColors: {
                    group1: es().cloneDeep(n),
                    group2: es().cloneDeep(i),
                    group3: es().cloneDeep(a)
                  }
                }));
                S(1), g(x), localStorage.setItem(r.current.profileName, JSON.stringify(x))
              }
            } catch (e) {
              console.error("åŠ è½½è®¾å¤‡ç±»åž‹ ".concat(o, " çš„é»˜è®¤é…ç½®å¤±è´¥:"), e)
            }
            try {
              let e;
              let o = localStorage.getItem(r.current.macroName);
              if (o) try {
                if (!(e = JSON.parse(o)) || e.length < 1) {
                  let o = [, ].fill(null).map((e, r) => ({
                    name: t("500") + " " + (r + 1),
                    type: 0,
                    count: 1,
                    webUrl: "",
                    delayTime: 10,
                    delayType: 1,
                    list: []
                  }));
                  e = e && e.length > 0 ? [...e, ...o.slice(e.length)] : o, localStorage.setItem(r.current.macroName, JSON.stringify(e))
                }
              } catch (o) {
                console.error("è§£æžå®é…ç½®å¤±è´¥:", o), e = [, ].fill(null).map((e, r) => ({
                  name: t("500") + " " + (r + 1),
                  type: 1,
                  count: 1,
                  webUrl: "",
                  delayTime: 10,
                  delayType: 1,
                  list: []
                })), localStorage.setItem(r.current.macroName, JSON.stringify(e))
              } else e = [, ].fill(null).map((e, r) => ({
                name: t("500") + " " + (r + 1),
                type: 1,
                count: 1,
                webUrl: "",
                delayTime: 10,
                delayType: 1,
                list: []
              })), localStorage.setItem(r.current.macroName, JSON.stringify(e));
              Y(e)
            } catch (e) {
              console.error("åŠ è½½é”®ç›˜æ•°æ®å¤±è´¥:", e)
            }
          }, [t, r]), et = (0, s.useCallback)(async e => {
            console.log("è®¾å¤‡ç”µé‡:", await e.getBattery())
          }, []), er = (0, s.useCallback)(async (e, t) => {
            a(!0), l("æ­£åœ¨åˆ‡æ¢é…ç½®..."), c("æ­£åœ¨åŒæ­¥é…ç½®åˆ°è®¾å¤‡ï¼Œè¯·ç¨å€™");
            try {
              localStorage.setItem(r.current.profileName + "select", e.toString()), u(e);
              let o = p[e];
              if (!o) {
                console.error("é…ç½®ä¸å­˜åœ¨:", e), a(!1);
                return
              }
              if (t) {
                n();
                try {
                  if (await t.setProfile(e), await t.delay(66), 23 !== o.curLightMode) {
                    let e = o.lightInfo.find(e => e.mode === o.curLightMode);
                    e && await t.setLightMode(e)
                  } else o.keyItemColor && o.keyItemColor.length > 0 && await t.setUserLightAllKeysData(o.keyItemColor);
                  await t.delay(66), o.funcInfo && ("number" == typeof o.funcInfo.fnLayerMode && await t.setFnLayerMode(o.funcInfo.fnLayerMode), await t.delay(66), "number" == typeof o.funcInfo.sleepLevel && await t.setSleepLevel(o.funcInfo.sleepLevel), await t.delay(66), "number" == typeof o.funcInfo.responseLevel && await t.setResponseLevel(o.funcInfo.responseLevel)), await t.delay(66), await t.clearAllMacroData(), await t.delay(500);
                  let r = b.current;
                  if (o.kbKeys && r)
                    for (let n = 0; n < o.kbKeys.length; n++) {
                      let i = o.kbKeys[n];
                      if (i)
                        for (let o = 0; o < i.length; o++) {
                          let n = i[o];
                          if (n && r[o]) {
                            if (0 === n.type && n.code2 === r[o].code) continue;
                            try {
                              if (2 === n.type) {
                                let i = G[n.code2];
                                if (i && i.list && i.list.length > 0) {
                                  let a = Math.min(i.count || 1, 255);
                                  await t.setMacro(e, r[o].code, n, i.list, a)
                                }
                              } else await t.setKeyMacro(e, r[o].code, n);
                              await t.delay(200)
                            } catch (e) {
                              console.error("æŒ‰é”® [".concat(o, "] åŒæ­¥å¤±è´¥:"), e)
                            }
                          }
                        }
                    }
                  S(1), await t.delay(100)
                } catch (e) {
                  console.error("é…ç½®åŒæ­¥å¤±è´¥:", e)
                } finally {
                  i()
                }
              }
              y(o.kbKeys), k(o.funcInfo), E(o.keyItemColor), I(o.lightInfo), S(o.curLightMode)
            } finally {
              a(!1)
            }
          }, [p, G, r, n, i, a, l, c]), eo = (0, s.useCallback)(e => {
            let t = p.map((t, r) => r === d ? { ...t,
              kbKeys: e
            } : t);
            g(es().cloneDeep(t)), localStorage.setItem(r.current.profileName, JSON.stringify(t))
          }, [p, d, r]), en = (0, s.useCallback)(e => {
            let t = p.map((t, r) => r === d ? { ...t,
              curLightMode: e
            } : t);
            g(es().cloneDeep(t)), localStorage.setItem(r.current.profileName, JSON.stringify(t))
          }, [p, d, r]), ei = (0, s.useCallback)(e => {
            let t = p.map((t, r) => r === d ? { ...t,
              lightInfo: e
            } : t);
            g(es().cloneDeep(t)), localStorage.setItem(r.current.profileName, JSON.stringify(t))
          }, [p, d, r]), ea = (0, s.useCallback)(e => {
            let t = p.map((t, r) => r === d ? { ...t,
              keyItemColor: e
            } : t);
            g(es().cloneDeep(t)), localStorage.setItem(r.current.profileName, JSON.stringify(t))
          }, [p, d, r]), el = (0, s.useCallback)(e => {
            let t = p.map((t, r) => r === d ? { ...t,
              customLightColors: e
            } : t);
            g(es().cloneDeep(t)), localStorage.setItem(r.current.profileName, JSON.stringify(t))
          }, [p, d, r]), ec = (0, s.useCallback)(e => {
            let t = p.map((t, r) => r === d ? { ...t,
              customLightGroup: e
            } : t);
            g(es().cloneDeep(t)), localStorage.setItem(r.current.profileName, JSON.stringify(t))
          }, [p, d, r]), ed = (0, s.useCallback)(e => {
            let t = p.map((t, r) => r === d ? { ...t,
              curLightBoxMode: e
            } : t);
            g(es().cloneDeep(t)), localStorage.setItem(r.current.profileName, JSON.stringify(t))
          }, [p, d, r]), eu = (0, s.useCallback)(e => {
            let t = p.map((t, r) => r === d ? { ...t,
              lightBoxInfo: e
            } : t);
            g(es().cloneDeep(t)), localStorage.setItem(r.current.profileName, JSON.stringify(t))
          }, [p, d, r]), ex = (0, s.useCallback)(e => {
            let t = p.map((t, r) => r === d ? { ...t,
              keyItemBoxColor: e
            } : t);
            g(es().cloneDeep(t)), localStorage.setItem(r.current.profileName, JSON.stringify(t))
          }, [p, d, r]), eh = (0, s.useCallback)(e => {
            let t = p.map((t, r) => r === d ? { ...t,
              funcInfo: e
            } : t);
            g(es().cloneDeep(t)), localStorage.setItem(r.current.profileName, JSON.stringify(t))
          }, [p, d, r]), ep = (0, s.useCallback)(async (e, t) => {
            if (!e) return
          }, []), eg = (0, s.useCallback)(async e => {
            a(!0), l("æ­£åœ¨æ¢å¤å‡ºåŽ‚è®¾ç½®..."), c("æ­£åœ¨é‡ç½®æ‰€æœ‰é…ç½®ï¼Œè¯·ç¨å€™ï¼Œä¸è¦å…³é—­é¡µé¢");
            try {
              localStorage.removeItem(r.current.profileName), localStorage.removeItem(r.current.profileName + "select"), localStorage.removeItem(r.current.macroName), localStorage.removeItem("musicRhythm_visualizerMode"), localStorage.removeItem("musicRhythm_amplitude"), localStorage.removeItem("musicRhythm_backgroundMode"), localStorage.removeItem("musicRhythm_backgroundBrightness"), u(0), await ee(o.current);
              let t = localStorage.getItem(r.current.profileName);
              if (t) {
                let e = JSON.parse(t);
                h(es().cloneDeep(e))
              }
              return S(1), T(1), e && await e.restoreKeyboardFactorySettings(), !0
            } catch (e) {
              return console.error("æ¢å¤å‡ºåŽ‚è®¾ç½®å¤±è´¥:", e), !1
            } finally {
              a(!1)
            }
          }, [r, o, ee, a, l, c]);
          return {
            profileIndex: d,
            setProfileIndex: u,
            profiles: x,
            setProfiles: h,
            keyboardProfiles: p,
            setKeyboardProfiles: g,
            keyLayoutInfoRef: m,
            keyItemLayoutRef: b,
            keyInfos: f,
            setKeyInfos: $,
            keyInfosRef: w,
            keyboardFuncInfo: v,
            setKeyboardFuncInfo: k,
            curLightMode: j,
            setCurLightMode: S,
            lightConfig: C,
            lightInfo: D,
            setLightInfo: I,
            keyItemColor: F,
            setKeyItemColor: E,
            keyLightColor: R,
            setKeyLightColor: A,
            customLightGroup: M,
            setCustomLightGroup: _,
            customLightColors: L,
            setCustomLightColors: z,
            curLightBoxMode: N,
            setCurLightBoxMode: T,
            lightBoxConfig: O,
            lightBoxInfo: W,
            setLightBoxInfo: B,
            keyItemBoxColor: P,
            setKeyItemBoxColor: U,
            keyLightBoxColor: H,
            setKeyLightBoxColor: V,
            macroProfiles: G,
            setMacroProfiles: Y,
            selectMacroProfile: Z,
            setSelectMacroProfile: Q,
            loadKeyboardDefaultConfig: ee,
            loadKeyboardData: et,
            activeProfile: er,
            updateKeyboardKeys: eo,
            updateCurLightMode: en,
            updateKeyboardLightInfo: ei,
            updateKeyboardKeyItemColor: ea,
            updateCustomLightColors: el,
            updateCustomLightGroup: ec,
            updateCurLightBoxMode: ed,
            updateKeyboardLightBoxInfo: eu,
            updateKeyboardKeyItemBoxColor: ex,
            updateKeyboardFuncInfo: eh,
            setKeyboardMacroData: ep,
            restoreKeyboardFactorySettings: eg
          }
        },
        ed = (0, s.createContext)({});
      var eu = function(e) {
          let {
            children: t
          } = e, [o, n] = (0, s.useState)(!1), [i] = (0, s.useState)("1.0.1"), [a, c] = (0, s.useState)(), [d, u] = (0, s.useState)([]), [x, h] = (0, s.useState)(0), p = (0, s.useRef)(0), [g, m] = (0, s.useState)(!0);
          (0, s.useEffect)(() => {
            p.current = x
          }, [x]);
          let [b, f] = (0, s.useState)(!1), [w, v] = (0, s.useState)(""), [k, j] = (0, s.useState)(!1), [S, I] = (0, s.useState)(!1), [F, E] = (0, s.useState)(""), [R, A] = (0, s.useState)(0), [M, _] = (0, s.useState)(0), [z, N] = (0, s.useState)(""), [B, P] = (0, s.useState)("0.0.0"), [U, K] = (0, s.useState)("0.0.0"), [J, q] = (0, s.useState)("0.0.0"), [X, Q] = (0, s.useState)(!1), [$, er] = (0, s.useState)(!1), [eo, en] = (0, s.useState)(!1), el = (0, s.useRef)(null), [es, eu] = (0, s.useState)("kb-keyremap"), [ex, eh] = (0, s.useState)({
            backgroundUrl: "./bkg/main_bkg.mp4",
            opacity: 100,
            brightness: 100,
            theme: "dark",
            customBaseColor: "#FFC800",
            useCustomBaseColor: !1,
            blurIntensity: 20,
            backgroundOpacity: 20
          }), [ep, eg] = (0, s.useState)(!1), [em, eb] = (0, s.useState)(!1), [ef, ey] = (0, s.useState)(""), [ew, ev] = (0, s.useState)(""), ek = (0, s.useRef)(0), ej = (0, s.useCallback)(() => {
            ek.current += 1
          }, []), eS = (0, s.useCallback)(() => {
            ek.current = Math.max(0, ek.current - 1)
          }, []), eC = (0, s.useRef)({
            profileName: "SF09_128_profiles_20260126",
            macroName: "SF09_128_macro_20260126"
          }), [eD, eI] = (0, s.useState)(!1), [eF, eE] = (0, s.useState)(0), [eR, eA] = (0, s.useState)(-1), [eM, e_] = (0, s.useState)("#FF0000"), [eL, ez] = (0, s.useState)(!1), [eN, eT] = (0, s.useState)("#FF0000"), [eO, eW] = (0, s.useState)(!1), [eB, eP] = (0, s.useState)(90), [eU, eH] = (0, s.useState)(0), eK = (0, s.useRef)(), {
            t: eV
          } = L("common"), {
            deviceInfoConfigRef: eG,
            currentProductRef: eY,
            usbDeviceRef: eZ,
            device24GRef: eJ,
            loadDeviceInfoConfig: eq,
            getDeviceStatus: eX,
            checkAuthorizedDevices: eQ
          } = function(e) {
            let {
              connectedDevice: t
            } = e, o = (0, s.useRef)(), n = (0, s.useRef)(), i = (0, s.useRef)(), a = (0, s.useRef)(), l = (0, s.useRef)(!1), c = (0, s.useCallback)(async () => {
              try {
                let e = await r.e(936).then(r.t.bind(r, 8936, 19)),
                  t = {
                    products: (e.default || e).products.map(e => ({ ...e,
                      devices: e.devices.map(e => ({ ...e,
                        vendorId: parseInt(e.vendorId, 16),
                        productId: parseInt(e.productId, 16),
                        productUsagePage: parseInt(e.productUsagePage, 16),
                        productUsage: parseInt(e.productUsage, 16),
                        firmwareVersion: e.firmwareVersion,
                        firmwareNewVersion: e.firmwareNewVersion,
                        firmwareFile: e.firmwareFile
                      }))
                    }))
                  };
                o.current = t;
                let l = null;
                try {
                  let e = sessionStorage.getItem("webhubProductInfo");
                  if (e) {
                    let r = JSON.parse(e);
                    r.fromWebhub && r.productType && (l = t.products.find(e => e.productType === r.productType)) && console.log("[useDeviceInfo] æ ¹æ® WebHub ä¼ é€’çš„ productType é€‰æ‹©äº§å“:", r.productType)
                  }
                } catch (e) {
                  console.warn("[useDeviceInfo] è¯»å– WebHub äº§å“ä¿¡æ¯å¤±è´¥:", e)
                }
                if (!l && t.products && t.products.length > 0 && (l = t.products[0]), l) {
                  n.current = l;
                  let e = l.devices.find(e => 0 === e.deviceMode),
                    t = l.devices.find(e => 1 === e.deviceMode);
                  i.current = e, a.current = t
                }
              } catch (e) {
                console.error("[useDeviceInfo] åŠ è½½è®¾å¤‡ä¿¡æ¯é…ç½®å¤±è´¥:", e)
              }
            }, []), d = (0, s.useCallback)(async () => {
              let e = !1,
                o = !1,
                n = "";
              try {
                let l = i.current,
                  s = a.current,
                  {
                    WebHid: c
                  } = await Promise.resolve().then(r.bind(r, 1576)),
                  d = await c.devices(!1, []);
                for (let r of (console.log("[useDeviceInfo] æ‰«æåˆ°çš„è®¾å¤‡åˆ—è¡¨:", d), d)) {
                  let i = r.vendorId.toString(16).toUpperCase().padStart(4, "0"),
                    a = r.productId.toString(16).toUpperCase().padStart(4, "0");
                  if (l) {
                    let r = l.vendorId.toString(16).toUpperCase().padStart(4, "0"),
                      o = l.productId.toString(16).toUpperCase().padStart(4, "0");
                    i === r && a === o && (e = !0, console.log("[useDeviceInfo] æ£€æµ‹åˆ°USBè®¾å¤‡è¿žæŽ¥:", i, a), t && t.vendorId.toString(16).toUpperCase().padStart(4, "0") === i && t.productId.toString(16).toUpperCase().padStart(4, "0") === a && (n = "USB"))
                  }
                  if (s) {
                    let e = s.vendorId.toString(16).toUpperCase().padStart(4, "0"),
                      r = s.productId.toString(16).toUpperCase().padStart(4, "0");
                    i === e && a === r && (o = !0, console.log("[useDeviceInfo] æ£€æµ‹åˆ°2.4Gè®¾å¤‡åœ¨çº¿:", i, a), t && t.vendorId.toString(16).toUpperCase().padStart(4, "0") === i && t.productId.toString(16).toUpperCase().padStart(4, "0") === a && (n = "2.4G"))
                  }
                }
                return console.log("[useDeviceInfo] è®¾å¤‡çŠ¶æ€æ£€æµ‹ç»“æžœ:", {
                  usbConnected: e,
                  device24GOnline: o,
                  currentMode: n
                }), {
                  usbConnected: e,
                  device24GOnline: o,
                  currentMode: n
                }
              } catch (e) {
                return console.error("[useDeviceInfo] èŽ·å–è®¾å¤‡çŠ¶æ€å¤±è´¥:", e), {
                  usbConnected: !1,
                  device24GOnline: !1,
                  currentMode: ""
                }
              }
            }, [t]), u = (0, s.useCallback)(async () => {
              if (l.current) {
                console.log("[useDeviceInfo] å·²ç»æ£€æŸ¥è¿‡æŽˆæƒè®¾å¤‡ï¼Œè·³è¿‡é‡å¤æ£€æŸ¥");
                return
              }
              l.current = !0;
              try {
                let e = n.current;
                if (!e || !e.devices || 0 === e.devices.length) {
                  console.log("[useDeviceInfo] å½“å‰äº§å“é…ç½®ä¸å­˜åœ¨æˆ–æ²¡æœ‰è®¾å¤‡é…ç½®");
                  return
                }
                let t = e.devices.map(e => ({
                  vendorId: e.vendorId,
                  productId: e.productId,
                  usagePage: "string" == typeof e.productUsagePage ? parseInt(e.productUsagePage, 16) : e.productUsagePage,
                  usage: "string" == typeof e.productUsage ? parseInt(e.productUsage, 16) : e.productUsage
                }));
                console.log("[useDeviceInfo] æž„å»ºçš„è®¾å¤‡è¿‡æ»¤å™¨:", t);
                let r = await C(t);
                if (console.log("[useDeviceInfo] å·²æŽˆæƒçš„è®¾å¤‡åˆ—è¡¨:", r), 0 === r.length) {
                  console.log("[useDeviceInfo] æ²¡æœ‰æ‰¾åˆ°å·²æŽˆæƒçš„è®¾å¤‡");
                  return
                }
                let o = await d();
                console.log("[useDeviceInfo] è®¾å¤‡çŠ¶æ€æ£€æµ‹ç»“æžœ:", o), (o.usbConnected || o.device24GOnline) && console.log("[useDeviceInfo] æ£€æµ‹åˆ°è®¾å¤‡å·²è¿žæŽ¥ï¼Œä½†éœ€è¦ç”¨æˆ·æ‰‹åŠ¨è¿žæŽ¥")
              } catch (e) {
                console.error("[useDeviceInfo] æ£€æŸ¥å·²æŽˆæƒè®¾å¤‡å¤±è´¥:", e), l.current = !1
              }
            }, [d]);
            return {
              deviceInfoConfigRef: o,
              currentProductRef: n,
              usbDeviceRef: i,
              device24GRef: a,
              loadDeviceInfoConfig: c,
              getDeviceStatus: d,
              checkAuthorizedDevices: u
            }
          }({
            connectedDevice: a
          }), e$ = (0, s.useCallback)(async () => {
            var e;
            if (await eq(), null === (e = eY.current) || void 0 === e ? void 0 : e.devices) {
              let e = eY.current.devices.find(e => 0 === e.deviceMode),
                t = eY.current.devices.find(e => 1 === e.deviceMode),
                r = (null == e ? void 0 : e.firmwareNewVersion) || (null == t ? void 0 : t.firmwareNewVersion);
              r && q(r), e && (A(e.vendorId), _(e.productId), console.log("é…ç½®æ–‡ä»¶ä¸­çš„USBè®¾å¤‡ - VID: 0x".concat(e.vendorId.toString(16).toUpperCase(), ", PID: 0x").concat(e.productId.toString(16).toUpperCase())))
            }
          }, [eq, eY]), {
            profileIndex: e0,
            setProfileIndex: e1,
            profiles: e2,
            setProfiles: e5,
            keyboardProfiles: e3,
            setKeyboardProfiles: e6,
            keyLayoutInfoRef: e4,
            keyItemLayoutRef: e8,
            keyInfos: e7,
            setKeyInfos: e9,
            keyInfosRef: te,
            keyboardFuncInfo: tt,
            setKeyboardFuncInfo: tr,
            curLightMode: to,
            setCurLightMode: tn,
            lightConfig: ti,
            lightInfo: ta,
            setLightInfo: tl,
            keyItemColor: ts,
            setKeyItemColor: tc,
            keyLightColor: td,
            setKeyLightColor: tu,
            customLightGroup: tx,
            setCustomLightGroup: th,
            customLightColors: tp,
            setCustomLightColors: tg,
            curLightBoxMode: tm,
            setCurLightBoxMode: tb,
            lightBoxConfig: tf,
            lightBoxInfo: ty,
            setLightBoxInfo: tw,
            keyItemBoxColor: tv,
            setKeyItemBoxColor: tk,
            keyLightBoxColor: tj,
            setKeyLightBoxColor: tS,
            macroProfiles: tC,
            setMacroProfiles: tD,
            selectMacroProfile: tI,
            setSelectMacroProfile: tF,
            loadKeyboardDefaultConfig: tE,
            activeProfile: tR,
            updateKeyboardKeys: tA,
            updateCurLightMode: tM,
            updateKeyboardLightInfo: t_,
            updateKeyboardKeyItemColor: tL,
            updateCustomLightColors: tz,
            updateCustomLightGroup: tN,
            updateCurLightBoxMode: tT,
            updateKeyboardLightBoxInfo: tO,
            updateKeyboardKeyItemBoxColor: tW,
            updateKeyboardFuncInfo: tB,
            setKeyboardMacroData: tP,
            restoreKeyboardFactorySettings: tU
          } = ec({
            t: eV,
            currentConfigRef: eC,
            deviceInfo: eK,
            blockDeviceStatusPolling: ej,
            unblockDeviceStatusPolling: eS,
            setIsLoading: eb,
            setLoadingMessage: ey,
            setLoadingDescription: ev
          }), {
            isDriverSwitchBlocking: tH,
            enforceMusicRhythmEntryDelay: tK,
            checkMusicPluginWithCache: tV
          } = function(e) {
            let {
              connectedDevice: t,
              currentTab: r,
              curLightMode: o,
              blockDeviceStatusPolling: n,
              unblockDeviceStatusPolling: i
            } = e, [a, l] = (0, s.useState)(!1), c = (0, s.useRef)(null), d = (0, s.useRef)(null), u = (0, s.useRef)(!1), x = (0, s.useRef)({
              lastCheckTime: 0,
              isRunning: !1,
              cacheValidDuration: 5e3
            }), h = (0, s.useCallback)(async () => (c.current || (console.log("[useMusicRhythm] \uD83C\uDFB5 åˆ‡æ¢è‡³éŸ³ä¹å¾‹åŠ¨æ¨¡å¼ï¼Œæ‰§è¡Œ 1s é©±åŠ¨ä¿æŠ¤å»¶æ—¶"), u.current = !0, l(!0), n(), c.current = new Promise(e => {
              d.current = setTimeout(() => {
                u.current = !1, d.current = null, c.current = null, l(!1), i(), console.log("[useMusicRhythm] âœ… é©±åŠ¨ä¿æŠ¤å»¶æ—¶ç»“æŸ"), e()
              }, 1e3)
            })), c.current), [n, i]), p = (0, s.useCallback)(async function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = Date.now(),
                r = x.current;
              if (!e && t - r.lastCheckTime < r.cacheValidDuration) return console.log("[useMusicRhythm] ä½¿ç”¨éŸ³ä¹æ’ä»¶æ£€æµ‹ç¼“å­˜:", r.isRunning), r.isRunning;
              console.log("[useMusicRhythm] æ£€æµ‹éŸ³ä¹å¾‹åŠ¨æ’ä»¶çŠ¶æ€...");
              let o = await H.checkServer();
              return r.lastCheckTime = t, r.isRunning = o, console.log("[useMusicRhythm] éŸ³ä¹æ’ä»¶æ£€æµ‹ç»“æžœ:", o), o
            }, []);
            (0, s.useEffect)(() => () => {
              d.current && (clearTimeout(d.current), d.current = null), u.current && (u.current = !1, c.current = null, i())
            }, [i]);
            let g = (0, s.useRef)(!1),
              m = (0, s.useRef)(!1);
            return (0, s.useEffect)(() => {
              let e = !!t && "kb-light" === r && 128 === o;
              if (!m.current) {
                m.current = !0, g.current = e;
                return
              }
              if (g.current && !e) {
                let e = t ? "kb-light" !== r ? "åˆ‡æ¢æ ‡ç­¾é¡µ" : "åˆ‡æ¢ç¯å…‰æ¨¡å¼" : "è®¾å¤‡æ–­å¼€";
                console.log("[useMusicRhythm] \uD83C\uDFB5 æ£€æµ‹åˆ°ç¦»å¼€éŸ³ä¹å¾‹åŠ¨æ¨¡å¼ï¼ˆ".concat(e, "ï¼‰ï¼Œå…³é—­éŸ³ä¹å¾‹åŠ¨æœåŠ¡"), {
                  connectedDevice: !!t,
                  currentTab: r,
                  curLightMode: o,
                  isMusicRhythm: 128 === o
                }), H.stopPolling(), H.close().then(e => {
                  e && console.log("[useMusicRhythm] âœ… éŸ³ä¹å¾‹åŠ¨æœåŠ¡å·²å…³é—­")
                }).catch(e => {
                  console.warn("[useMusicRhythm] âš ï¸ éŸ³ä¹å¾‹åŠ¨æœåŠ¡å…³é—­å¤±è´¥ï¼ˆå¯èƒ½æœªè¿è¡Œï¼‰:", e)
                }), t || (H.reset(), console.log("[useMusicRhythm] \uD83D\uDD04 éŸ³ä¹å¾‹åŠ¨æœåŠ¡çŠ¶æ€å·²é‡ç½®"))
              }
              g.current = e
            }, [t, r, o]), {
              isDriverSwitchBlocking: a,
              enforceMusicRhythmEntryDelay: h,
              checkMusicPluginWithCache: p
            }
          }({
            connectedDevice: a,
            currentTab: es,
            curLightMode: to,
            blockDeviceStatusPolling: ej,
            unblockDeviceStatusPolling: eS
          }), tG = (0, s.useCallback)(e => Y(e, G), []), tY = (0, s.useCallback)(e => Z(e, G), []), tZ = (0, s.useCallback)((e, t) => {
            let r = e.replace(/^v/i, "").trim(),
              o = t.replace(/^v/i, "").trim(),
              n = r.split(".").map(e => parseInt(e) || 0),
              i = o.split(".").map(e => parseInt(e) || 0),
              a = Math.max(n.length, i.length);
            for (; n.length < a;) n.push(0);
            for (; i.length < a;) i.push(0);
            for (let e = 0; e < a; e++) {
              if (i[e] > n[e]) return !0;
              if (i[e] < n[e]) break
            }
            return !1
          }, []), tJ = (0, s.useCallback)((e, t) => {
            el.current && (clearTimeout(el.current), el.current = null), en(e), e && t && (el.current = setTimeout(() => {
              en(!1), el.current = null
            }, t))
          }, []), tq = (0, s.useCallback)((e, t) => {
            if (!e || !t) return !1;
            let r = tZ(e, t);
            return r ? console.log("\uD83D\uDD14 å‘çŽ°æ–°ç‰ˆæœ¬: ".concat(e, " â†’ ").concat(t)) : console.log("âœ… å›ºä»¶å·²æ˜¯æœ€æ–°ç‰ˆæœ¬: ".concat(e)), r
          }, [tZ]);
          (0, s.useEffect)(() => () => {
            el.current && (clearTimeout(el.current), el.current = null)
          }, []), (0, s.useEffect)(() => {
            if (console.log("\uD83D\uDE80 [MainProvider] å¼€å§‹åˆå§‹åŒ–..."), ep) {
              console.log("âš ï¸ [MainProvider] å·²ç»åˆå§‹åŒ–è¿‡ï¼Œè·³è¿‡");
              return
            }(async () => {
              console.log("\uD83D\uDCCB [MainProvider] æ‰§è¡Œåˆå§‹åŒ–å‡½æ•°..."), console.log("âœ… [MainProvider] å®¢æˆ·ç«¯çŽ¯å¢ƒï¼Œæ£€æŸ¥ sessionStorage...");
              try {
                let e = sessionStorage.getItem("webhubProductInfo");
                if (console.log("\uD83D\uDCE6 [MainProvider] sessionStorage ä¸­çš„ webhubProductInfo:", e ? "å­˜åœ¨" : "ä¸å­˜åœ¨"), e) {
                  let t = JSON.parse(e);
                  console.log("\uD83D\uDCE6 [MainProvider] è§£æžåŽçš„äº§å“ä¿¡æ¯:", t), t.fromWebhub ? (console.log("\uD83D\uDD17 [MainProvider] æ£€æµ‹åˆ°ä»Ž WebHub è·³è½¬ï¼Œåˆ‡æ¢åˆ°å¤šè®¾å¤‡æ¨¡å¼"), console.log("\uD83D\uDCE6 [MainProvider] WebHub ä¼ é€’çš„äº§å“ä¿¡æ¯ï¼ˆåŒ…å«æ‰€æœ‰è®¾å¤‡ï¼‰:", t), n(!1), window.__webhubProductInfo = t) : console.log("âš ï¸ [MainProvider] äº§å“ä¿¡æ¯ä¸­æ²¡æœ‰ fromWebhub æ ‡å¿—")
                } else console.log("â„¹ï¸ [MainProvider] æœªæ‰¾åˆ° WebHub äº§å“ä¿¡æ¯ï¼Œä½¿ç”¨å•è®¾å¤‡æ¨¡å¼")
              } catch (e) {
                console.error("âš ï¸ [MainProvider] è¯»å– WebHub äº§å“ä¿¡æ¯å¤±è´¥:", e)
              }
              console.log("\uD83D\uDCCB [MainProvider] å¼€å§‹åŠ è½½è®¾å¤‡ä¿¡æ¯é…ç½®...");
              try {
                await e$(), console.log("âœ… [MainProvider] è®¾å¤‡ä¿¡æ¯é…ç½®åŠ è½½å®Œæˆ")
              } catch (e) {
                console.error("âŒ [MainProvider] è®¾å¤‡ä¿¡æ¯é…ç½®åŠ è½½å¤±è´¥:", e)
              } {
                let e = "bg_migration_completed";
                localStorage.getItem(e) || (await W("backgroundSettings"), localStorage.setItem(e, "true")), eI(!0)
              }
              let e = null;
              if (e = await O("backgroundSettings")) try {
                eh(e), V(e.theme || "dark", e.customBaseColor, e.useCustomBaseColor)
              } catch (e) {
                console.error("åŠ è½½èƒŒæ™¯è®¾ç½®å¤±è´¥:", e), V("dark")
              } else V("dark"); {
                let e = window.__webhubProductInfo;
                console.log("\uD83D\uDD0D [MainProvider] æ£€æŸ¥æ˜¯å¦éœ€è¦è‡ªåŠ¨è¿žæŽ¥è®¾å¤‡..."), console.log("\uD83D\uDCE6 [MainProvider] webhubProductInfo:", e ? "å­˜åœ¨" : "ä¸å­˜åœ¨"), e ? (console.log("\uD83D\uDE80 [MainProvider] è‡ªåŠ¨è¿žæŽ¥ WebHub ä¼ é€’çš„äº§å“è®¾å¤‡..."), setTimeout(async () => {
                  try {
                    console.log("â° [MainProvider] å»¶è¿Ÿ1ç§’åŽå¼€å§‹è¿žæŽ¥è®¾å¤‡..."), await t2(e)
                  } catch (e) {
                    console.error("âŒ [MainProvider] è‡ªåŠ¨è¿žæŽ¥è®¾å¤‡å¤±è´¥:", e)
                  }
                }, 1e3)) : console.log("â„¹ï¸ [MainProvider] æ²¡æœ‰ WebHub äº§å“ä¿¡æ¯ï¼Œä¸è‡ªåŠ¨è¿žæŽ¥è®¾å¤‡")
              }
              console.log("âœ… [MainProvider] åˆå§‹åŒ–å®Œæˆ"), eg(!0)
            })()
          }, []), (0, s.useEffect)(() => {
            ep && eD && T("backgroundSettings", ex).then(e => {
              e ? V(ex.theme, ex.customBaseColor, ex.useCustomBaseColor) : console.error("ä¿å­˜èƒŒæ™¯è®¾ç½®åˆ° IndexedDB å¤±è´¥")
            })
          }, [ex, ep, eD]);
          let tX = (0, s.useCallback)(e => {
              let t = d.find(t => t.deviceMode === e);
              return t ? (c(t.device), h(e), N(t.productName), v(0 === e ? "USB" : "2.4G"), !0) : (console.warn("è®¾å¤‡æ¨¡å¼ ".concat(0 === e ? "USB" : "2.4G", " æœªæ‰¾åˆ°")), !1)
            }, [d]),
            tQ = (0, s.useRef)(),
            t$ = (0, s.useCallback)(() => {
              if (console.log("\uD83D\uDD34 [handleDeviceOffline] è®¾å¤‡ç¦»çº¿ï¼Œæ‰§è¡Œè¿”å›žé€»è¾‘..."), !o) {
                try {
                  if (window.parent && window.parent !== window) {
                    try {
                      window.parent.location.hash && "" !== window.parent.location.hash && (window.parent.location.hash = "")
                    } catch (e) {}
                    try {
                      window.parent.postMessage({
                        type: "CLEAR_HASH",
                        action: "clearHash"
                      }, "*")
                    } catch (e) {}
                  } else window.location.href = "/"
                } catch (e) {
                  window.location.href = "/"
                }
                return
              }
              j(!1), I(!1), v("")
            }, [o]);
          (0, s.useEffect)(() => {
            tQ.current = t$
          }, [t$]);
          let t0 = function(e) {
              let {
                enabled: t,
                timeoutMs: r = 8e3,
                allDevices: o,
                currentDeviceMode: n,
                onAllDevicesOffline: i
              } = e, a = (0, s.useRef)(t), l = (0, s.useRef)(o), c = (0, s.useRef)(n), d = (0, s.useRef)(null), u = (0, s.useRef)(0);
              (0, s.useEffect)(() => {
                a.current = t
              }, [t]), (0, s.useEffect)(() => {
                l.current = o
              }, [o]), (0, s.useEffect)(() => {
                c.current = n
              }, [n]);
              let x = (0, s.useCallback)(async () => {
                  if (!a.current) return;
                  console.log("[DeviceOfflineTimeout] å¼€å§‹æ£€æµ‹è®¾å¤‡çŠ¶æ€...");
                  let e = l.current,
                    t = c.current;
                  if (0 === e.length) {
                    console.log("[DeviceOfflineTimeout] æ²¡æœ‰è®¾å¤‡ï¼Œè·³è¿‡æ£€æµ‹");
                    return
                  }
                  try {
                    let r = e.map(async e => {
                        try {
                          let t = await e.device.getDeviceStatusAndBattery(e.deviceModeName);
                          if (170 === t[0] && 85 === t[1] && 204 === t[2] && 51 === t[3]) {
                            let r = t[6];
                            return {
                              deviceInfo: e,
                              isOnline: 3 === r || 1 === r
                            }
                          }
                          return {
                            deviceInfo: e,
                            isOnline: !1
                          }
                        } catch (t) {
                          return console.warn("[DeviceOfflineTimeout] æ£€æµ‹è®¾å¤‡ ".concat(e.deviceModeName, " å¤±è´¥:"), t), {
                            deviceInfo: e,
                            isOnline: !1
                          }
                        }
                      }),
                      o = await Promise.all(r),
                      n = o.find(e => e.deviceInfo.deviceMode === t);
                    if (n) {
                      if (n.isOnline) console.log("[DeviceOfflineTimeout] âœ“ å½“å‰è®¾å¤‡ ".concat(n.deviceInfo.deviceModeName, " åœ¨çº¿"));
                      else {
                        console.warn("[DeviceOfflineTimeout] âŒ å½“å‰è®¾å¤‡ ".concat(n.deviceInfo.deviceModeName, " å·²ç¦»çº¿ï¼Œè¿”å›žé¦–é¡µ")), i();
                        return
                      }
                    }
                    o.some(e => e.isOnline) ? (console.log("[DeviceOfflineTimeout] è®¾å¤‡çŠ¶æ€æ­£å¸¸"), o.forEach(e => {
                      e.isOnline && console.log("  âœ“ ".concat(e.deviceInfo.deviceModeName, " åœ¨çº¿"))
                    })) : (console.warn("[DeviceOfflineTimeout] âŒ æ‰€æœ‰è®¾å¤‡éƒ½ç¦»çº¿ï¼Œè¿”å›žé¦–é¡µ"), i())
                  } catch (e) {
                    console.error("[DeviceOfflineTimeout] æ£€æµ‹è®¾å¤‡çŠ¶æ€å¤±è´¥:", e)
                  }
                }, [i]),
                h = (0, s.useCallback)(() => {
                  a.current && (d.current && (clearTimeout(d.current), d.current = null), u.current = Date.now(), d.current = setTimeout(async () => {
                    let e = Date.now() - u.current;
                    console.warn("[DeviceOfflineTimeout] â° è¶…æ—¶è§¦å‘ï¼å·² ".concat(e, "ms æœªæ”¶åˆ°è®¾å¤‡ä¸ŠæŠ¥")), await x()
                  }, r))
                }, [r, x]),
                p = (0, s.useCallback)(() => {
                  d.current && (clearTimeout(d.current), d.current = null, console.log("[DeviceOfflineTimeout] å·²æ¸…é™¤è¶…æ—¶æ£€æµ‹å®šæ—¶å™¨"))
                }, []),
                g = (0, s.useCallback)(() => {
                  a.current && (u.current = Date.now(), h())
                }, [h]),
                m = (0, s.useCallback)(() => {
                  console.warn("[DeviceOfflineTimeout] âš ï¸ æ”¶åˆ°è®¾å¤‡ç¦»çº¿ä¸ŠæŠ¥"), a.current ? (console.log("[DeviceOfflineTimeout] ç«‹å³æ£€æµ‹æ‰€æœ‰è®¾å¤‡çŠ¶æ€"), x()) : (console.log("[DeviceOfflineTimeout] è®¾å¤‡ç¦»çº¿ï¼Œç›´æŽ¥è¿”å›žé¦–é¡µ"), i())
                }, [x, i]);
              return (0, s.useEffect)(() => () => {
                d.current && clearTimeout(d.current)
              }, []), {
                startTimeout: h,
                clearTimeout: p,
                resetTimeout: g,
                handleDeviceOfflineReport: m,
                checkAllDevicesOnline: x
              }
            }({
              enabled: g,
              timeoutMs: 8e3,
              allDevices: d,
              currentDeviceMode: x,
              onAllDevicesOffline: t$
            }),
            t1 = (0, s.useCallback)(async function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              try {
                if (console.log("\uD83D\uDD0C å¼€å§‹è¿žæŽ¥è®¾å¤‡..."), E(""), await tV(!0)) {
                  let e = await H.close();
                  console.log(e ? "âœ… éŸ³ä¹å¾‹åŠ¨æœåŠ¡å·²å…³é—­" : "âš ï¸ éŸ³ä¹å¾‹åŠ¨æœåŠ¡å…³é—­å¤±è´¥")
                }
                H.reset(), a && (a.onListeners = []);
                let t = eY.current;
                if (!t && (console.warn("äº§å“é…ç½®æœªåŠ è½½ï¼Œæ­£åœ¨åŠ è½½è®¾å¤‡ä¿¡æ¯é…ç½®..."), await e$(), !(t = eY.current))) throw Error("æ— æ³•åŠ è½½äº§å“é…ç½®");
                if (!t.devices || 0 === t.devices.length) throw Error("äº§å“é…ç½®ä¸å­˜åœ¨æˆ–æ²¡æœ‰è®¾å¤‡é…ç½®");
                let r = t.devices.map(e => ({
                    vendorId: e.vendorId,
                    productId: e.productId,
                    deviceMode: e.deviceMode
                  })),
                  o = t.devices.map(e => {
                    let t = e.vendorId,
                      r = e.productId,
                      o = "string" == typeof e.productUsagePage ? parseInt(e.productUsagePage, 16) : e.productUsagePage,
                      n = "string" == typeof e.productUsage ? parseInt(e.productUsage, 16) : e.productUsage;
                    return void 0 === t || void 0 === r || void 0 === o || void 0 === n || isNaN(o) || isNaN(n) ? (console.error("è®¾å¤‡é…ç½®å­—æ®µæ— æ•ˆ:", {
                      vendorId: t,
                      productId: r,
                      usagePage: o,
                      usage: n
                    }), null) : {
                      vendorId: t,
                      productId: r,
                      usagePage: o,
                      usage: n
                    }
                  }).filter(e => null !== e);
                if (0 === o.length) throw Error("æ— æ³•æž„å»ºæœ‰æ•ˆçš„è®¾å¤‡è¿‡æ»¤å™¨");
                console.log("è®¾å¤‡è¿‡æ»¤å™¨:", o), console.log("è®¾å¤‡é…ç½®:", r);
                let n = await D(e, o, r);
                if (0 === n.length) throw Error("æ²¡æœ‰æ‰¾åˆ°è®¾å¤‡");
                console.log("æ‰¾åˆ° ".concat(n.length, " ä¸ªè®¾å¤‡")), u(n);
                let i = await ei(n),
                  l = function(e) {
                    let t = e.find(e => e.deviceMode === ee.USB && e.isOnline);
                    t || (t = e.find(e => e.deviceMode === ee.WIRELESS_24G && e.isOnline)), t || (t = e.find(e => e.deviceMode === ee.USB)), t || (t = e[0]);
                    let r = et[t.deviceMode] || "Unknown";
                    return console.log("ä½¿ç”¨ä¸»è®¾å¤‡: ".concat(r, " - ").concat(t.productName, " ") + "(åœ¨çº¿: ".concat(t.isOnline ? "âœ“" : "âœ—", ")")), t
                  }(i),
                  s = et[l.deviceMode] || "USB";
                c(l.device), h(l.deviceMode), N(l.productName), v(s), I(l.isOnline), eP(l.batteryLevel), eH(l.chargeFlag);
                let d = i.find(e => 0 === e.deviceMode);
                if (d) {
                  let e = d.actualVendorId || d.vendorId,
                    t = d.actualProductId || d.productId;
                  A(e), _(t), console.log("USBæ¨¡å¼è®¾å¤‡ - VID: 0x".concat(e.toString(16).toUpperCase(), ", PID: 0x").concat(t.toString(16).toUpperCase()))
                } else {
                  let e = l.actualVendorId || l.vendorId,
                    t = l.actualProductId || l.productId;
                  A(e), _(t), console.log("æœªæ‰¾åˆ°USBè®¾å¤‡ï¼Œä½¿ç”¨ä¸»è®¾å¤‡ - VID: 0x".concat(e.toString(16).toUpperCase(), ", PID: 0x").concat(t.toString(16).toUpperCase()))
                }
                console.log("è®¾å¤‡çŠ¶æ€ - åœ¨çº¿: ".concat(l.isOnline, ", ç”µé‡: ").concat(l.batteryLevel, "%, å……ç”µ: ").concat(l.chargeFlag));
                let x = {
                  vendorId: l.vendorId,
                  productId: l.productId,
                  productName: l.productName,
                  deviceType: 101,
                  deviceMode: l.deviceMode,
                  deviceId: "".concat(l.vendorId, "-").concat(l.productId),
                  firmwareVersion: "1.0.0",
                  chargeFlag: l.chargeFlag,
                  batteryValue: l.batteryLevel,
                  connectStatus: 1,
                  onlineStatus: l.isOnline ? 1 : 0
                };
                eK.current = x, await tE(x), j(!0);
                let g = function(e, t, r) {
                  if (!e || !e.devices) return r;
                  let o = e.devices.find(e => e.deviceMode === t);
                  return o && o.firmwareNewVersion ? (console.log("\uD83D\uDCE6 æœ€æ–°å›ºä»¶ç‰ˆæœ¬ï¼ˆæ¥è‡ªé…ç½®ï¼‰: ".concat(o.firmwareNewVersion)), o.firmwareNewVersion) : r
                }(eY.current, l.deviceMode, J);
                q(g);
                let m = await ea(l.device, l.deviceModeName, l.isOnline, l.firmwareVersion) || "0.0.0";
                return P(m), tq(m, g) ? (tJ(!0, 8e3), console.log("\uD83D\uDD14 å‡çº§æç¤ºå·²æ˜¾ç¤º: ".concat(m, " â†’ ").concat(g))) : (tJ(!1), console.log("âœ… å›ºä»¶å·²æ˜¯æœ€æ–°ç‰ˆæœ¬: ".concat(m))), n.forEach(e => {
                  e.deviceMode;
                  let t = e.deviceModeName;
                  e.device.onListeners.push({
                    name: "statu",
                    fb: e => {
                      if (170 === e[0] && 14 === e[4]) {
                        let t = e[6] || 0,
                          r = e[5] || 0,
                          o = Math.max(0, Math.min(r, 100)),
                          n = o >= 95 ? 100 : o,
                          i = e[7] || 0,
                          a = -1,
                          l = "",
                          s = !1;
                        if (3 === t) a = 0, l = "USB", s = !0;
                        else if (1 === t) a = 1, l = "2.4G", s = !0;
                        else if (0 === t) {
                          console.warn("âš ï¸ æ”¶åˆ°è®¾å¤‡ç¦»çº¿ä¸ŠæŠ¥ (modeFlag: 0x00)"), t0.handleDeviceOfflineReport();
                          return
                        }
                        if (-1 !== a && s) {
                          let e = p.current;
                          if (t0.resetTimeout(), a !== e) {
                            let t = et[e] || "Unknown";
                            console.log("\uD83D\uDD04 æ£€æµ‹åˆ°è®¾å¤‡åˆ‡æ¢: ".concat(t, " â†’ ").concat(l)), tX(a) ? (I(!0), eP(n), eH(i), console.log("âœ… å·²åˆ‡æ¢åˆ° ".concat(l, " è®¾å¤‡"))) : (console.error("âŒ åˆ‡æ¢åˆ° ".concat(l, " è®¾å¤‡å¤±è´¥ï¼ˆå¯èƒ½æ˜¯ WebHID æŽˆæƒé—®é¢˜ï¼‰ï¼ŒæŒ‰è®¾å¤‡ç¦»çº¿å¤„ç†")), tQ.current && tQ.current())
                          } else I(!0), eP(n), eH(i)
                        } else console.warn("âš ï¸ æ”¶åˆ°æœªçŸ¥è®¾å¤‡ä¸ŠæŠ¥ï¼ŒmodeFlag: 0x".concat(t.toString(16).toUpperCase()))
                      }
                    }
                  }), console.log("âœ… å·²ä¸º ".concat(t, " è®¾å¤‡æ·»åŠ çŠ¶æ€ç›‘å¬å™¨"))
                }), ! function(e) {
                  console.log("è®¾å¤‡è¿žæŽ¥æˆåŠŸ");
                  let t = e.find(e => e.deviceMode === ee.USB),
                    r = e.find(e => e.deviceMode === ee.WIRELESS_24G);
                  console.log("- USB è®¾å¤‡: ".concat(t ? "âœ“ (".concat(t.isOnline ? "åœ¨çº¿" : "ç¦»çº¿", ")") : "âœ—")), console.log("- 2.4G è®¾å¤‡: ".concat(r ? "âœ“ (".concat(r.isOnline ? "åœ¨çº¿" : "ç¦»çº¿", ")") : "âœ—"))
                }(i), t0.startTimeout(), !0
              } catch (e) {
                return console.error("âŒ è®¾å¤‡è¿žæŽ¥å¤±è´¥:", e), j(!1), I(!1), E(e instanceof Error ? e.message : "æœªçŸ¥é”™è¯¯"), !1
              }
            }, []),
            t2 = (0, s.useCallback)(async e => {
              console.log("\uD83D\uDD0C [connectDeviceFromWebHub] å‡½æ•°è¢«è°ƒç”¨"), console.log("\uD83D\uDCE6 [connectDeviceFromWebHub] æŽ¥æ”¶åˆ°çš„äº§å“ä¿¡æ¯:", e);
              try {
                if (console.log("\uD83D\uDD0C [WebHub] å¼€å§‹è¿žæŽ¥è®¾å¤‡ï¼ˆå·²æŽˆæƒï¼Œæ— éœ€å†æ¬¡æŽˆæƒï¼‰..."), console.log("\uD83D\uDCE6 [WebHub] ä½¿ç”¨äº§å“ä¿¡æ¯ï¼ˆåŒ…å«æ‰€æœ‰è®¾å¤‡ï¼‰:", e), !e.devices || 0 === e.devices.length) throw Error("WebHub ä¼ é€’çš„äº§å“ä¿¡æ¯ä¸å®Œæ•´ï¼šç¼ºå°‘è®¾å¤‡åˆ—è¡¨");
                let t = {
                  productType: e.productType,
                  productPic: e.productPic || "",
                  productDesc: e.productDesc || "",
                  productUrl: e.productUrl || "",
                  devices: e.devices.map(e => ({
                    deviceMode: "number" == typeof e.deviceMode ? e.deviceMode : parseInt(String(e.deviceMode || "0"), 10),
                    vendorId: "number" == typeof e.vendorId ? e.vendorId : parseInt(e.vendorId, 16),
                    productId: "number" == typeof e.productId ? e.productId : parseInt(e.productId, 16),
                    productName: e.productName || "",
                    productUsagePage: "number" == typeof e.productUsagePage ? e.productUsagePage : parseInt(e.productUsagePage || "FF02", 16),
                    productUsage: "number" == typeof e.productUsage ? e.productUsage : parseInt(e.productUsage || "0002", 16),
                    protocol: e.protocol || 1,
                    firmwareVersion: "",
                    firmwareNewVersion: "",
                    firmwareFile: ""
                  }))
                };
                return eY.current, eY.current = t, await t1(!1)
              } catch (e) {
                return console.error("âŒ [WebHub] è®¾å¤‡è¿žæŽ¥å¤±è´¥:", e), E((null == e ? void 0 : e.message) || "è¿žæŽ¥å¤±è´¥"), !1
              }
            }, [eY, t1, E]),
            t5 = {
              singleDeviceMode: o,
              setSingleDeviceMode: n,
              softwareVersion: i,
              deviceInfoConfigRef: eG,
              loadDeviceInfoConfig: e$,
              currentProductRef: eY,
              usbDeviceRef: eZ,
              device24GRef: eJ,
              getDeviceStatus: eX,
              connectedDevice: a,
              allDevices: d,
              currentDeviceMode: x,
              connectDevice: t1,
              disconnectDevice: (0, s.useCallback)(() => {
                console.log("[MainProvider] æ–­å¼€è®¾å¤‡è¿žæŽ¥"), t0.clearTimeout(), j(!1), I(!1), c(void 0)
              }, [t0]),
              switchDeviceMode: tX,
              demoMode: b,
              setDemoMode: f,
              setConnectMode: v,
              enableDeviceOfflineTimeout: g,
              setEnableDeviceOfflineTimeout: m,
              connectMode: w,
              deviceStatus: k,
              setDeviceStatus: j,
              deviceOnline: S,
              setDeviceOnline: I,
              deviceErrorCode: F,
              setDeviceErrorCode: E,
              blockDeviceStatusPolling: ej,
              unblockDeviceStatusPolling: eS,
              isDriverSwitchBlocking: tH,
              enforceMusicRhythmEntryDelay: tK,
              usbModeVendorId: R,
              usbModeProductId: M,
              setUsbModeVendorId: A,
              setUsbModeProductId: _,
              deviceName: z,
              setDeviceName: N,
              deviceVersion: B,
              setDeviceVersion: P,
              dongleVersion: U,
              setDongleVersion: K,
              deviceNewVersion: J,
              setDeviceNewVersion: q,
              currentTab: es,
              setCurrentTab: eu,
              backgroundSettings: ex,
              setBackgroundSettings: eh,
              localConfigFile: {
                profileName: eC.current.profileName,
                macroName: eC.current.macroName
              },
              setLocalConfigFile: e => {
                eC.current = {
                  profileName: e.profileName,
                  macroName: e.macroName
                }
              },
              profileIndex: e0,
              setProfileIndex: e1,
              profiles: e2,
              setProfiles: e5,
              fnLayer: eF,
              setFnLayer: eE,
              selectedKeyIndex: eR,
              setSelectedKeyIndex: eA,
              keyLayoutInfoRef: e4,
              keyItemLayoutRef: e8,
              keyInfos: e7,
              setKeyInfos: e9,
              keyboardFuncInfo: tt,
              setKeyboardFuncInfo: tr,
              macroProfiles: tC,
              setMacroProfiles: tD,
              selectMacroProfile: tI,
              setSelectMacroProfile: tF,
              setMacroData: () => {},
              curLightMode: to,
              setCurLightMode: tn,
              keyItemColor: ts,
              setKeyItemColor: tc,
              lightConfig: ti,
              lightInfo: ta,
              setLightInfo: tl,
              keyLightColor: td,
              setKeyLightColor: tu,
              currentColor: eM,
              setCurrentColor: e_,
              lightPreview: eL,
              setLightPreview: ez,
              customLightGroup: tx,
              setCustomLightGroup: th,
              customLightColors: tp,
              setCustomLightColors: tg,
              curLightBoxMode: tm,
              setCurLightBoxMode: tb,
              lightBoxConfig: tf,
              lightBoxInfo: ty,
              setLightBoxInfo: tw,
              keyItemBoxColor: tv,
              setKeyItemBoxColor: tk,
              keyLightBoxColor: tj,
              setKeyLightBoxColor: tS,
              currentBoxColor: eN,
              setCurrentBoxColor: eT,
              lightBoxPreview: eO,
              setLightBoxPreview: eW,
              battery: eB,
              chargeFlag: eU,
              activeProfile: async e => {
                "kb-keyremap" !== es && (console.log("\uD83D\uDCCB åˆ‡æ¢é…ç½®æ–¹æ¡ˆå‰ï¼Œå…ˆåˆ‡æ¢åˆ°æŒ‰é”®é¡µé¢ï¼ˆå½“å‰é¡µé¢ï¼š".concat(es, "ï¼‰")), "kb-light" === es && 128 === to && console.log("\uD83C\uDFB5 æ£€æµ‹åˆ°éŸ³ä¹å¾‹åŠ¨æ¨¡å¼ï¼Œåˆ‡æ¢é¡µé¢å°†åœæ­¢éŸ³ä¹å¾‹åŠ¨..."), eu("kb-keyremap"), await new Promise(e => setTimeout(e, 500)), console.log("âœ… å·²åˆ‡æ¢åˆ°æŒ‰é”®é¡µé¢ï¼Œå¼€å§‹åˆ‡æ¢é…ç½®...")), await tR(e, a)
              },
              updateKeyboardKeys: tA,
              updateCurLightMode: tM,
              updateKeyboardLightInfo: t_,
              updateKeyboardKeyItemColor: tL,
              updateCustomLightColors: tz,
              updateCustomLightGroup: tN,
              updateKeyboardFuncInfo: tB,
              setKeyboardMacroData: tP,
              restoreKeyboardFactorySettings: tU,
              updateCurLightBoxMode: tT,
              updateKeyboardLightBoxInfo: tO,
              updateKeyboardKeyItemBoxColor: tW,
              t: eV,
              filterSensitiveWords: tG,
              containsSensitiveWords: tY,
              upgradeWindowOpen: X,
              setUpgradeWindowOpen: e => Q(e),
              upgradeIAPMode: $,
              setUpgradeIAPMode: e => er(e),
              showUpgradeNotification: eo,
              setShowUpgradeNotification: e => en(e),
              setUpgradeNotificationWithTimer: tJ
            };
          return (0, l.jsxs)(ed.Provider, {
            value: t5,
            children: [t, (0, l.jsx)(y, {
              isOpen: em || tH,
              message: em ? ef : eV("690"),
              description: em ? ew : eV("691")
            })]
          })
        },
        ex = r(1718),
        eh = r(1183),
        ep = r(6),
        eg = r(3975),
        em = r(5779),
        eb = r(8022),
        ef = r(5687),
        ey = r(8321),
        ew = r(8314),
        ev = r(4619),
        ek = r(8530),
        ej = r(2319);
      let eS = {
          success: {
            bg: "rgba(16, 168, 253, 0.95)",
            color: "white",
            borderColor: "#10A8FD",
            icon: "âœ“"
          },
          warning: {
            bg: "rgba(220, 104, 3, 0.95)",
            color: "white",
            borderColor: "#DC6803",
            icon: "âš "
          },
          error: {
            bg: "rgba(220, 38, 38, 0.95)",
            color: "white",
            borderColor: "#DC2626",
            icon: "âœ•"
          },
          info: {
            bg: "rgba(16, 168, 253, 0.95)",
            color: "white",
            borderColor: "#10A8FD",
            icon: "â„¹"
          }
        },
        eC = e => {
          let {
            title: t,
            description: r,
            type: o,
            onClose: n
          } = e, i = eS[o];
          return (0, l.jsxs)(eh.x, {
            bg: i.bg,
            color: i.color,
            border: "2px solid ".concat(i.borderColor),
            borderRadius: "12px",
            backdropFilter: "blur(10px)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
            p: 4,
            pr: 8,
            position: "relative",
            minW: "300px",
            maxW: "500px",
            children: [(0, l.jsxs)(eh.x, {
              display: "flex",
              alignItems: "flex-start",
              gap: 3,
              children: [(0, l.jsx)(eh.x, {
                fontSize: "20px",
                fontWeight: "bold",
                mt: "2px",
                flexShrink: 0,
                children: i.icon
              }), (0, l.jsxs)(eh.x, {
                flex: 1,
                children: [(0, l.jsx)(eh.x, {
                  fontSize: "md",
                  fontWeight: "600",
                  mb: r ? 1 : 0,
                  children: t
                }), r && (0, l.jsx)(eh.x, {
                  fontSize: "sm",
                  opacity: .9,
                  mt: 1,
                  children: r
                })]
              })]
            }), (0, l.jsx)(ek.P, {
              position: "absolute",
              right: "8px",
              top: "8px",
              size: "sm",
              onClick: n,
              color: i.color,
              _hover: {
                bg: "rgba(255, 255, 255, 0.2)"
              }
            })]
          })
        },
        eD = () => {
          let e = (0, ej.p)();
          return function(t) {
            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
              o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "info";
            e({
              duration: "error" === o ? 3e3 : 2e3,
              isClosable: !0,
              position: "top",
              render: e => {
                let {
                  onClose: n
                } = e;
                return (0, l.jsx)(eC, {
                  title: t,
                  description: r,
                  type: o,
                  onClose: n
                })
              }
            })
          }
        };
      var eI = r(6680),
        eF = r(9089);
      class eE {
        static startMonitoring() {
          if (!this._isMonitoring && (this._isMonitoring = !0, !this._hasInitialized && navigator.hid)) try {
            navigator.hid.addEventListener("connect", this.onConnect), navigator.hid.addEventListener("disconnect", this.onDisconnect), this._hasInitialized = !0
          } catch (e) {
            console.error("å¯åŠ¨USBè®¾å¤‡ç›‘æŽ§å¤±è´¥:", e), this._isMonitoring = !1
          }
        }
        static stopMonitoring() {
          this._isMonitoring = !1
        }
        static cleanup() {
          if (navigator.hid && this._hasInitialized) try {
            navigator.hid.removeEventListener("connect", this.onConnect), navigator.hid.removeEventListener("disconnect", this.onDisconnect), this._listeners.connect.clear(), this._listeners.disconnect.clear(), this._listeners.remove.clear(), this._hasInitialized = !1, this._isMonitoring = !1
          } catch (e) {
            console.error("æ¸…ç†USBè®¾å¤‡ç›‘æŽ§èµ„æºå¤±è´¥:", e)
          }
        }
        static dispatchEvent(e, t) {
          let r = Array.from(this._listeners[e]);
          0 !== r.length && r.forEach(r => {
            try {
              r(t)
            } catch (t) {
              console.error("æ‰§è¡Œ".concat(e, "äº‹ä»¶å›žè°ƒæ—¶å‡ºé”™:"), t)
            }
          })
        }
        static on(e, t) {
          if (!t || "function" != typeof t) {
            console.error("æ— æ•ˆçš„å›žè°ƒå‡½æ•°");
            return
          }
          if (!this._listeners[e]) {
            console.error("ä¸æ”¯æŒçš„äº‹ä»¶ç±»åž‹: ".concat(e));
            return
          }
          this._listeners[e].add(t)
        }
        static off(e, t) {
          if (t) {
            if (!this._listeners[e]) {
              console.error("ä¸æ”¯æŒçš„äº‹ä»¶ç±»åž‹: ".concat(e));
              return
            }
            this._listeners[e].delete(t)
          }
        }
        static isMonitoring() {
          return this._isMonitoring
        }
      }
      eE._listeners = {
        connect: new Set,
        disconnect: new Set,
        remove: new Set
      }, eE._isMonitoring = !1, eE._hasInitialized = !1, eE.onConnect = e => {
        if (!eE._isMonitoring) return;
        let {
          device: t
        } = e;
        eE.dispatchEvent("connect", t)
      }, eE.onDisconnect = e => {
        if (!eE._isMonitoring) return;
        let {
          device: t
        } = e;
        eE.dispatchEvent("disconnect", t), eE.dispatchEvent("remove", t)
      };
      var eR = r(3378),
        eA = e => {
          let {
            currentLayer: t,
            onLayerChange: r,
            t: o,
            onResetSingleKey: n,
            onResetAllKeys: i
          } = e;
          return (0, l.jsxs)("div", {
            className: "absolute right-[-150px] top-1/2 transform -translate-y-1/2 flex flex-col gap-3",
            children: [(0, l.jsx)("button", {
              className: "w-[120px] h-12 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium\n          ".concat(0 === t ? "bg-[#10A8FD] text-white shadow-lg scale-105 border-2 border-[#10A8FD]" : "bg-[#252627] text-gray-200 hover:bg-[#10A8FD] hover:text-white border-2 border-transparent"),
              onClick: () => r(0),
              title: o("310"),
              children: o("310")
            }), (0, l.jsx)("button", {
              className: "w-[120px] h-12 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium\n          ".concat(1 === t ? "bg-[#10A8FD] text-white shadow-lg scale-105 border-2 border-[#10A8FD]" : "bg-[#252627] text-gray-200 hover:bg-[#10A8FD] hover:text-white border-2 border-transparent"),
              onClick: () => r(1),
              title: o("311"),
              children: o("311")
            }), (0, l.jsx)("div", {
              className: "h-px bg-gray-700 mx-2"
            }), (0, l.jsx)("button", {
              className: "w-[120px] h-12 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium\n          bg-[#252627] text-gray-200 hover:bg-[#DC6803] hover:text-white border-2 border-transparent hover:border-[#DC6803]",
              onClick: () => n(),
              title: o("292"),
              children: o("292")
            }), (0, l.jsx)("button", {
              className: "w-[120px] h-12 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium\n          bg-[#252627] text-gray-200 hover:bg-[#DC2626] hover:text-white border-2 border-transparent hover:border-[#DC2626]",
              onClick: () => i(),
              title: o("293"),
              children: o("293")
            })]
          })
        },
        eM = function(e) {
          let {
            visible: t = !0,
            logoText: r = "LOGO",
            logoImage: o,
            styleMode: n = "gradient",
            position: i = {
              right: "20px",
              top: "5px"
            }
          } = e;
          return t ? (0, l.jsx)("div", {
            className: "absolute",
            style: {
              right: i.right,
              left: i.left,
              top: i.top,
              bottom: i.bottom
            },
            children: (0, l.jsx)("div", {
              className: "flex items-center gap-2",
              children: o ? (0, l.jsx)(ev.E, {
                src: o,
                alt: "Logo",
                height: "24px",
                width: "auto",
                objectFit: "contain",
                sx: {
                  filter: "drop-shadow(0 0 8px rgba(255, 212, 92, 0.4))",
                  transition: "filter 0.3s ease"
                }
              }) : (0, l.jsx)(b.x, {
                fontSize: "20px",
                fontWeight: "bold",
                letterSpacing: "1px",
                textShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
                sx: { ...(() => {
                    switch (n) {
                      case "rainbow":
                        return {
                          background: "linear-gradient(90deg, #FFD45C, #ff8000, #ffff00, #00ff00, #00ffff, #0000ff, #8000ff, #FFD45C)",
                          backgroundSize: "200% auto",
                          animation: "rainbow 3s linear infinite",
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          filter: "saturate(1.5) brightness(1.2)",
                          "@keyframes rainbow": {
                            "0%": {
                              backgroundPosition: "0% center"
                            },
                            "100%": {
                              backgroundPosition: "200% center"
                            }
                          }
                        };
                      case "gradient":
                        return {
                          background: "linear-gradient(90deg, var(--primary-color), #FFD45C)",
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent"
                        };
                      case "solid":
                        return {
                          color: "#FFD45C"
                        };
                      default:
                        return {}
                    }
                  })(),
                  transition: "all 0.3s ease"
                },
                children: r
              })
            })
          }) : null
        },
        e_ = r(3370);
      let eL = (e, t) => t ? "rgba(60, 60, 60, 0.5)" : e ? "rgba(16, 168, 253, 0.2)" : "rgb(37, 38, 40)",
        ez = (e, t) => t ? "1px solid rgba(100, 100, 100, 0.3)" : e ? "2px solid #10A8FD" : "1px solid transparent",
        eN = (e, t) => t ? "none" : e ? "0 0 10px rgba(16, 168, 253, 0.3)" : "0 1px 2px rgba(0,0,0,0.1)",
        eT = (e, t, r) => r ? "text-gray-500 font-medium drop-shadow-sm" : t ? "font-medium drop-shadow-sm" : "text-gray-200 font-medium drop-shadow-sm",
        eO = e => {
          let t = e.replace("#", ""),
            r = parseInt(t.substr(0, 2), 16);
          return (299 * r + 587 * parseInt(t.substr(2, 2), 16) + 114 * parseInt(t.substr(4, 2), 16)) / 1e3 > 128 ? "text-black" : "text-white"
        };
      var eW = e => {
          let t, r, {
            keyItem: o,
            index: n,
            keyScale: i,
            keyInfo: a,
            isSelected: s,
            onClick: c,
            onContextMenu: d,
            onDrop: u,
            onDragStart: x,
            onDragOver: h,
            onMouseDown: p,
            onMouseUp: g,
            onMouseEnter: m,
            isCustomLightMode: b,
            customKeyColor: f,
            lightColor: y,
            isLocked: w = !1,
            t: v = e => e
          } = e;
          t = b && f ? f : y && "transparent" !== y ? y : eL(s, w), r = b && f || y && "transparent" !== y ? eO(t) : eT(a, s, w);
          let k = !s || w || b && f || y && "transparent" !== y ? {} : {
              color: "#10A8FD"
            },
            j = 2 === o.mode,
            S = o.w * i,
            C = o.h * i,
            D = j ? Math.min(S, C) : S,
            I = j ? D : C,
            F = (() => {
              if (!a) return o.name;
              let e = 2 === a.type,
                t = (() => {
                  let e = a.lang;
                  return null != e && String(e).length > 0
                })();
              if (!e && !t) return a.keyName || o.name;
              if (e) {
                let e = a.keyName || o.name;
                return e.includes("å®") ? e = e.replace(/å®/g, v("500")) : e.toLowerCase().includes("macro") && (e = e.replace(/macro/gi, v("500"))), e
              }
              let r = (() => {
                let e = a.lang;
                if (null != e && String(e).length > 0) return String(e);
                let t = a.keyName;
                if (t && /^\d+$/.test(String(t))) return String(t)
              })();
              if (r) {
                let e = v(r);
                if (e && String(e).trim().length > 0 && e !== r) return e
              }
              let n = a.keyName;
              return n && !/^\d+$/.test(String(n)) ? n : o.name
            })();
          return (0, l.jsx)(e_.u, {
            label: w ? "".concat(F, " (å·²é”å®š)") : F,
            placement: "top",
            hasArrow: !0,
            bg: "rgba(17, 18, 20, 0.95)",
            color: "white",
            fontSize: "sm",
            px: 3,
            py: 2,
            borderRadius: "md",
            border: "1px solid rgba(55, 60, 65, 0.8)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
            openDelay: 500,
            closeDelay: 100,
            children: (0, l.jsx)("div", {
              className: "absolute ".concat(w ? "cursor-not-allowed" : "cursor-pointer"),
              style: {
                left: o.x * i,
                top: o.y * i,
                width: D,
                height: I,
                padding: "1px",
                overflow: "hidden",
                borderRadius: j ? "50%" : "4px",
                opacity: w ? .6 : 1,
                transition: "opacity 0.2s ease"
              },
              onClick: e => c(n, e),
              onContextMenu: e => d(e, n),
              onDrop: e => u(e, n),
              onDragOver: h,
              onMouseDown: p,
              onMouseUp: g,
              onMouseEnter: m,
              draggable: !1,
              onDragStart: x,
              "data-index": n,
              children: (0, l.jsx)("div", {
                className: "h-full w-full keycap ".concat(j ? "rounded-full" : "rounded"),
                style: {
                  backgroundColor: t,
                  border: ez(s, w),
                  boxShadow: eN(s, w),
                  transition: "background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease"
                },
                children: (0, l.jsx)("div", {
                  className: "h-full w-full keycap-bg ".concat(j ? "rounded-full" : "rounded", " bg-transparent"),
                  style: {
                    transition: "color 0.2s ease"
                  },
                  children: (0, l.jsxs)("div", {
                    className: "key-content h-full w-full flex items-center justify-center text-xs ".concat(r, " relative"),
                    style: k,
                    children: [(0, l.jsx)("span", {
                      className: "text-center leading-none",
                      children: F
                    }), w && (0, l.jsx)("div", {
                      className: "absolute",
                      style: {
                        top: "2px",
                        right: "2px",
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        border: "2px solid #ef4444",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "rgba(0, 0, 0, 0.3)"
                      },
                      children: (0, l.jsx)("div", {
                        style: {
                          width: "8px",
                          height: "2px",
                          backgroundColor: "#ef4444",
                          transform: "rotate(-45deg)"
                        }
                      })
                    })]
                  })
                })
              })
            })
          })
        },
        eB = function() {
          let {
            fnLayer: e,
            setFnLayer: t,
            keyInfos: r,
            currentTab: o,
            t: n,
            selectedKeyIndex: i,
            setSelectedKeyIndex: a,
            setKeyInfos: c,
            updateKeyboardKeys: d,
            connectedDevice: u,
            blockDeviceStatusPolling: x,
            unblockDeviceStatusPolling: h,
            macroProfiles: p,
            profileIndex: g,
            curLightMode: m,
            currentColor: b,
            keyItemColor: f,
            setKeyItemColor: y,
            updateKeyboardKeyItemColor: w,
            keyLightColor: v,
            setKeyLightColor: k,
            lightPreview: j,
            customLightGroup: S,
            customLightColors: C,
            setCustomLightColors: D,
            updateCustomLightColors: I,
            keyLayoutInfoRef: F,
            keyItemLayoutRef: E
          } = (0, s.useContext)(ed), R = eD(), [A, M] = (0, s.useState)(!1), _ = (0, s.useRef)(!1), L = (0, s.useRef)(new Map), z = (0, s.useRef)(v), N = (0, s.useRef)(k), T = (0, s.useRef)(f), O = (0, s.useRef)({
            requestTimes: [],
            networkTimes: [],
            processTimes: [],
            requestCount: 0,
            skipCount: 0,
            lastLogTime: 0
          }), W = E.current, {
            bg_width: B,
            bg_height: P,
            key_scale: U
          } = F.current, H = () => r && 0 !== r.length && r[e] || [], K = e => i === e, V = t => 1 === e ? [53, 30, 31, 32, 45, 46, 20, 26, 8, 21, 49, 42, 52, 40, 27, 44, 227, 82, 81, 80, 79, 223].includes(t) : [223].includes(t), G = "kb-keyremap" === o, Y = "kb-light" === o, Z = Y && 23 === m, J = Y && 128 === m, q = async e => {
            x();
            try {
              await e()
            } catch (e) {
              console.error("è®¾å¤‡å†™å…¥å¤±è´¥:", e)
            } finally {
              h()
            }
          }, X = e => {
            var t;
            if (Z || J) return;
            let r = null === (t = W[e]) || void 0 === t ? void 0 : t.code;
            if (r && V(r)) {
              R(n("292"), n("164"), "warning");
              return
            }
            a(e)
          }, Q = async (t, o) => {
            var i;
            t.preventDefault();
            let a = null === (i = W[o]) || void 0 === i ? void 0 : i.code;
            if (a && V(a)) {
              R(n("292"), n("164"), "warning");
              return
            }
            let l = JSON.parse(t.dataTransfer.getData("keyCode"));
            if (2 === l.type) {
              let e = l.code2;
              if (e < 0 || e >= p.length || !p[e] || !p[e].list || 0 === p[e].list.length) {
                R(n("160"), n("161"), "warning");
                return
              }
            }
            let s = H(),
              x = [...r];
            x[e] || (x[e] = [...s]), x[e][o] = { ...x[e][o],
              index: W[o].index,
              keyName: l.name,
              lang: l.lang || "",
              type: l.type,
              code1: l.code1,
              code2: l.code2,
              code3: l.code3,
              layer: e
            }, c(x), d(x), u && await q(async () => {
              if (2 === l.type) {
                let t = p[l.code2];
                if (t && t.list && t.list.length > 0) {
                  let r = Math.min(t.count || 1, 255);
                  await u.setMacro(g, W[o].code, x[e][o], t.list, r)
                }
              } else await u.setKeyMacro(g, W[o].code, x[e][o])
            })
          }, $ = e => {
            e.preventDefault()
          }, ee = e => {
            let t = e.currentTarget.getAttribute("data-index");
            if (null !== t) {
              var r;
              let o = parseInt(t),
                i = null === (r = W[o]) || void 0 === r ? void 0 : r.code;
              if (i && V(i)) {
                e.preventDefault(), R(n("292"), n("164"), "warning");
                return
              }
              let a = H();
              e.dataTransfer.setData("keyCode", JSON.stringify(a[o]))
            }
          }, et = (e, t) => {
            e.preventDefault()
          }, er = async () => {
            let t = [...r];
            for (let e = 0; e <= 1; e++) t[e] = W.map(t => ({
              index: t.index,
              layer: e,
              keyValue: t.code,
              keyName: t.name,
              lang: "",
              type: 0,
              code1: 0,
              code2: t.code,
              code3: 0
            })), c(t), d(t);
            if (u) try {
              await u.clearFnOrTopMacroData(e)
            } catch (e) {
              R(n("293"), n("839"), "error");
              return
            }
            R(n("293"), n("840"), "success"), a(-1)
          }, eo = e => {
            if (!f || 0 === f.length) return "transparent";
            let t = f[e];
            return Z || J ? (null == t ? void 0 : t.color) || "#000000" : (null == t ? void 0 : t.color) || "transparent"
          }, en = e => {
            if (Z && !J) {
              var t;
              M(!0);
              let r = [...f];
              1 === S ? r = [...C.group1] : 2 === S ? r = [...C.group2] : 3 === S && (r = [...C.group3]);
              let o = (null === (t = r[e]) || void 0 === t ? void 0 : t.color) || "#000000";
              r[e] = { ...r[e],
                color: o && o === b ? "#000000" : b || "#FF0000"
              };
              let n = { ...C
              };
              1 === S ? n.group1 = r : 2 === S ? n.group2 = r : 3 === S && (n.group3 = r), T.current = r, D(n), I(n), y(r)
            }
          }, ei = (0, s.useCallback)(() => {
            if (A) {
              M(!1);
              let e = T.current;
              u && u.setUserLightAllKeysData(e, S)
            }
          }, [A, u, S]), ea = e => {
            if (Z && !J && A) {
              var t;
              let r = [...f];
              1 === S ? r = [...C.group1] : 2 === S ? r = [...C.group2] : 3 === S && (r = [...C.group3]);
              let o = (null === (t = r[e]) || void 0 === t ? void 0 : t.color) || "#000000";
              r[e] = { ...r[e],
                color: o && o === b ? "#000000" : b || "#FF0000"
              };
              let n = { ...C
              };
              1 === S ? n.group1 = r : 2 === S ? n.group2 = r : 3 === S && (n.group3 = r), T.current = r, D(n), I(n), y(r)
            }
          };
          (0, s.useEffect)(() => {
            if (!document.getElementById("kb-keyboard-styles")) {
              let e = document.createElement("style");
              e.id = "kb-keyboard-styles", e.innerHTML = "\n        @keyframes fadeIn {\n          from { opacity: 0; transform: translateY(-10px); }\n          to { opacity: 1; transform: translateY(0); }\n        }\n        .animate-fadeIn {\n          animation: fadeIn 0.2s ease-out forwards;\n        }\n        /* ç¦ç”¨æŒ‰é”®å…ƒç´ çš„ outline å’Œç„¦ç‚¹æ ·å¼ï¼Œé˜²æ­¢åˆ‡æ¢å±‚çº§æ—¶å‡ºçŽ°ç™½æ¡† */\n        .keyboard *:focus {\n          outline: none !important;\n        }\n        .keyboard * {\n          outline: none !important;\n        }\n        /* ä¼˜åŒ–è¿‡æ¸¡æ•ˆæžœï¼Œé¿å…é—ªçƒ */\n        .keycap {\n          transition: background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease !important;\n        }\n        /* å®Œå…¨ç¦ç”¨æŒ‰é”®çš„ focus-visible æ ·å¼ */\n        .keyboard *:focus-visible {\n          outline: none !important;\n          box-shadow: none !important;\n        }\n      ", document.head.appendChild(e)
            }
            return () => {
              let e = document.getElementById("kb-keyboard-styles");
              e && document.head.removeChild(e)
            }
          }, []), (0, s.useEffect)(() => (document.addEventListener("mouseup", ei), () => {
            document.removeEventListener("mouseup", ei)
          }), [ei]), (0, s.useEffect)(() => {
            Z || J || M(!1)
          }, [Z, J]), (0, s.useEffect)(() => {
            z.current = v, N.current = k
          }, [v, k]), (0, s.useEffect)(() => {
            if (!v || 0 === v.length) {
              L.current = new Map;
              return
            }
            let e = new Map;
            v.forEach((t, r) => {
              t && "number" == typeof t.index && e.set(t.index, r)
            }), L.current = e
          }, [v]), (0, s.useEffect)(() => {
            if ("kb-light" !== o || !j || Z || J || !u) return;
            let e = setInterval(async () => {
              let e = performance.now();
              if (_.current) {
                O.current.skipCount++;
                return
              }
              let t = z.current,
                r = N.current;
              if (!t || 0 === t.length) return;
              _.current = !0;
              let o = 0,
                n = 0;
              try {
                let e = performance.now(),
                  i = await u.getAuroraLightData();
                if (o = performance.now() - e, null == i ? void 0 : i.length) {
                  let e = performance.now(),
                    o = i.flat(),
                    a = [...t],
                    l = L.current,
                    s = 0;
                  for (let e = 0; e < o.length; e += 3) {
                    let t = o[e],
                      r = o[e + 1],
                      n = o[e + 2],
                      i = Math.floor(e / 3),
                      c = l.get(i);
                    if (void 0 !== c && a[c]) {
                      let e = "#".concat(t.toString(16).padStart(2, "0")).concat(r.toString(16).padStart(2, "0")).concat(n.toString(16).padStart(2, "0"));
                      a[c] = { ...a[c],
                        color: e
                      }, s++
                    }
                  }
                  n = performance.now() - e, s > 0 && r(a)
                }
              } catch (e) {} finally {
                _.current = !1;
                let t = performance.now() - e,
                  r = O.current;
                r.requestCount++, r.requestTimes.push(t), o > 0 && r.networkTimes.push(o), n > 0 && r.processTimes.push(n), r.requestTimes.length > 100 && r.requestTimes.shift(), r.networkTimes.length > 100 && r.networkTimes.shift(), r.processTimes.length > 100 && r.processTimes.shift()
              }
            }, 50);
            return () => {
              clearInterval(e), _.current = !1, O.current = {
                requestTimes: [],
                networkTimes: [],
                processTimes: [],
                requestCount: 0,
                skipCount: 0,
                lastLogTime: 0
              }
            }
          }, [o, j, u, Z, J]), (0, s.useEffect)(() => {
            if ("kb-light" !== o || !j || Z || J || !u) return;
            let e = () => {};
            return document.addEventListener("visibilitychange", e), () => {
              document.removeEventListener("visibilitychange", e)
            }
          }, [o, j, Z, J, u]);
          let el = (e, t) => {
              if (!Y || Z) return "transparent";
              if (J && v && v[t] || j && v && v[t]) return v[t].color || "transparent";
              let r = B / 2,
                o = P / 2,
                n = Math.sqrt(Math.pow((e.x + e.w / 2) * U - r, 2) + Math.pow((e.y + e.h / 2) * U - o, 2)) / Math.sqrt(Math.pow(r, 2) + Math.pow(o, 2));
              return "hsla(".concat(360 * n, ", ").concat(100, "%, ").concat(Math.max(30, 70 - 40 * n), "%, 0.9)")
            },
            es = (t, r) => {
              let o = H()[r],
                i = K(r),
                a = el(t, r),
                s = G && V(t.code);
              return (0, l.jsx)(eW, {
                keyItem: t,
                index: r,
                keyScale: U,
                keyInfo: o,
                isSelected: i,
                fnLayer: e,
                isCustomLightMode: Z,
                customKeyColor: eo(r),
                lightColor: a,
                isLocked: s,
                t: n,
                onClick: X,
                onContextMenu: et,
                onDrop: Q,
                onDragStart: ee,
                onDragOver: $,
                onMouseDown: () => {
                  Z && !J && en(r)
                },
                onMouseEnter: () => ea(r)
              }, r)
            };
          return (0, l.jsx)("div", {
            className: "w-full h-full flex items-center justify-center",
            children: (0, l.jsx)("div", {
              className: "flex flex-col items-center gap-2",
              children: (0, l.jsx)("div", {
                className: "keyboard relative",
                style: {
                  height: "".concat(P, "px"),
                  width: "".concat(B, "px")
                },
                children: (0, l.jsx)("div", {
                  className: "keyboard-bg-outer-wrapper h-full border border-gray-600 rounded p-2.5",
                  style: {
                    backgroundColor: "rgb(13, 14, 15)"
                  },
                  children: (0, l.jsxs)("div", {
                    className: "keyboard-bg-inner-wrapper h-full relative",
                    children: [W.map((e, t) => es(e, t)), "kb-keyremap" === o && (0, l.jsx)(eA, {
                      currentLayer: e,
                      t: n,
                      onLayerChange: e => {
                        t(e), a(-1)
                      },
                      onResetSingleKey: () => {
                        if (-1 === i) {
                          R(n("292"), n("837"), "warning");
                          return
                        }
                        let t = H(),
                          o = [...r];
                        o[e] || (o[e] = [...t]);
                        let a = W[i];
                        o[e][i] = {
                          index: a.index,
                          layer: e,
                          keyValue: a.code,
                          keyName: a.name,
                          lang: "",
                          type: 0,
                          code1: 0,
                          code2: a.code,
                          code3: 0
                        }, c(o), d(o), u && u.setKeyMacro(g, a.code, o[e][i]), R(n("292"), "".concat(n("838"), ": ").concat(a.name), "success")
                      },
                      onResetAllKeys: er
                    }), (0, l.jsx)(eM, {
                      visible: !1,
                      logoText: "èŠ¯è€€ç§‘æŠ€",
                      logoImage: "",
                      styleMode: "rainbow",
                      position: {
                        right: "90px",
                        top: "10px"
                      }
                    })]
                  })
                })
              })
            })
          })
        },
        eP = r(521),
        eU = JSON.parse('{"mQ":1150,"O$":340,"EL":50,"XP":[{"row":0,"col":0,"x":0,"y":0,"h":1,"w":1,"code":41,"index":0,"name":"ESC"},{"row":0,"col":1,"x":2,"y":0,"h":1,"w":1,"code":58,"index":2,"name":"F1"},{"row":0,"col":2,"x":3,"y":0,"h":1,"w":1,"code":59,"index":3,"name":"F2"},{"row":0,"col":3,"x":4,"y":0,"h":1,"w":1,"code":60,"index":4,"name":"F3"},{"row":0,"col":4,"x":5,"y":0,"h":1,"w":1,"code":61,"index":5,"name":"F4"},{"row":0,"col":5,"x":6.5,"y":0,"h":1,"w":1,"code":62,"index":6,"name":"F5"},{"row":0,"col":6,"x":7.5,"y":0,"h":1,"w":1,"code":63,"index":7,"name":"F6"},{"row":0,"col":7,"x":8.5,"y":0,"h":1,"w":1,"code":64,"index":8,"name":"F7"},{"row":0,"col":8,"x":9.5,"y":0,"h":1,"w":1,"code":65,"index":9,"name":"F8"},{"row":0,"col":9,"x":11,"y":0,"h":1,"w":1,"code":66,"index":10,"name":"F9"},{"row":0,"col":10,"x":12,"y":0,"h":1,"w":1,"code":67,"index":11,"name":"F10"},{"row":0,"col":11,"x":13,"y":0,"h":1,"w":1,"code":68,"index":12,"name":"F11"},{"row":0,"col":12,"x":14,"y":0,"h":1,"w":1,"code":69,"index":13,"name":"F12"},{"row":0,"col":13,"x":15.25,"y":0,"h":1,"w":1,"code":70,"index":14,"name":"Prtsc"},{"row":0,"col":14,"x":17.25,"y":0,"h":1,"w":1,"code":72,"index":15,"name":"Pause"},{"row":0,"col":15,"x":16.25,"y":0,"h":1,"w":1,"code":71,"index":16,"name":"Scrll"},{"row":1,"col":0,"x":0,"y":1.25,"h":1,"w":1,"code":53,"index":21,"name":"~"},{"row":1,"col":1,"x":1,"y":1.25,"h":1,"w":1,"code":30,"index":22,"name":"1"},{"row":1,"col":2,"x":2,"y":1.25,"h":1,"w":1,"code":31,"index":23,"name":"2"},{"row":1,"col":3,"x":3,"y":1.25,"h":1,"w":1,"code":32,"index":24,"name":"3"},{"row":1,"col":4,"x":4,"y":1.25,"h":1,"w":1,"code":33,"index":25,"name":"4"},{"row":1,"col":5,"x":5,"y":1.25,"h":1,"w":1,"code":34,"index":26,"name":"5"},{"row":1,"col":6,"x":6,"y":1.25,"h":1,"w":1,"code":35,"index":27,"name":"6"},{"row":1,"col":7,"x":7,"y":1.25,"h":1,"w":1,"code":36,"index":28,"name":"7"},{"row":1,"col":8,"x":8,"y":1.25,"h":1,"w":1,"code":37,"index":29,"name":"8"},{"row":1,"col":9,"x":9,"y":1.25,"h":1,"w":1,"code":38,"index":30,"name":"9"},{"row":1,"col":10,"x":10,"y":1.25,"h":1,"w":1,"code":39,"index":31,"name":"0"},{"row":1,"col":11,"x":11,"y":1.25,"h":1,"w":1,"code":45,"index":32,"name":"-"},{"row":1,"col":12,"x":12,"y":1.25,"h":1,"w":1,"code":46,"index":33,"name":"+"},{"row":1,"col":13,"x":13,"y":1.25,"h":1,"w":2,"code":42,"index":35,"name":"Backspace"},{"row":1,"col":14,"x":15.25,"y":1.25,"h":1,"w":1,"code":73,"index":35,"name":"Ins"},{"row":1,"col":15,"x":16.25,"y":1.25,"h":1,"w":1,"code":74,"index":36,"name":"Home"},{"row":1,"col":16,"x":17.25,"y":1.25,"h":1,"w":1,"code":75,"index":37,"name":"PgUp"},{"row":1,"col":17,"x":18.5,"y":1.25,"h":1,"w":1,"code":83,"index":38,"name":"Num"},{"row":1,"col":18,"x":19.5,"y":1.25,"h":1,"w":1,"code":84,"index":39,"name":"/"},{"row":1,"col":19,"x":20.5,"y":1.25,"h":1,"w":1,"code":85,"index":40,"name":"*"},{"row":1,"col":20,"x":21.5,"y":1.25,"h":1,"w":1,"code":86,"index":41,"name":"-"},{"row":2,"col":0,"x":0,"y":2.25,"h":1,"w":1.5,"code":43,"index":42,"name":"Tab"},{"row":2,"col":1,"x":1.5,"y":2.25,"h":1,"w":1,"code":20,"index":43,"name":"Q"},{"row":2,"col":2,"x":2.5,"y":2.25,"h":1,"w":1,"code":26,"index":44,"name":"W"},{"row":2,"col":3,"x":3.5,"y":2.25,"h":1,"w":1,"code":8,"index":45,"name":"E"},{"row":2,"col":4,"x":4.5,"y":2.25,"h":1,"w":1,"code":21,"index":46,"name":"R"},{"row":2,"col":5,"x":5.5,"y":2.25,"h":1,"w":1,"code":23,"index":47,"name":"T"},{"row":2,"col":6,"x":6.5,"y":2.25,"h":1,"w":1,"code":28,"index":48,"name":"Y"},{"row":2,"col":7,"x":7.5,"y":2.25,"h":1,"w":1,"code":24,"index":49,"name":"U"},{"row":2,"col":8,"x":8.5,"y":2.25,"h":1,"w":1,"code":12,"index":50,"name":"I"},{"row":2,"col":9,"x":9.5,"y":2.25,"h":1,"w":1,"code":18,"index":51,"name":"O"},{"row":2,"col":10,"x":10.5,"y":2.25,"h":1,"w":1,"code":19,"index":52,"name":"P"},{"row":2,"col":11,"x":11.5,"y":2.25,"h":1,"w":1,"code":47,"index":53,"name":"["},{"row":2,"col":12,"x":12.5,"y":2.25,"h":1,"w":1,"code":48,"index":54,"name":"]"},{"row":2,"col":13,"x":13.5,"y":2.25,"h":1,"w":1.5,"code":49,"index":55,"name":"\\\\"},{"row":2,"col":14,"x":15.25,"y":2.25,"h":1,"w":1,"code":76,"index":56,"name":"Del"},{"row":2,"col":15,"x":16.25,"y":2.25,"h":1,"w":1,"code":77,"index":57,"name":"End"},{"row":2,"col":16,"x":17.25,"y":2.25,"h":1,"w":1,"code":78,"index":58,"name":"PgDn"},{"row":2,"col":17,"x":18.5,"y":2.25,"h":1,"w":1,"code":95,"index":59,"name":"7"},{"row":2,"col":18,"x":19.5,"y":2.25,"h":1,"w":1,"code":96,"index":60,"name":"8"},{"row":2,"col":19,"x":20.5,"y":2.25,"h":1,"w":1,"code":97,"index":61,"name":"9"},{"row":2,"col":20,"x":21.5,"y":2.25,"h":2,"w":1,"code":87,"index":62,"name":"+"},{"row":3,"col":0,"x":0,"y":3.25,"h":1,"w":1.75,"type":0,"code":57,"code1":0,"code2":0,"code3":57,"index":63,"name":"Caps","color":"mod","state":1},{"row":3,"col":1,"x":1.75,"y":3.25,"h":1,"w":1,"code":4,"index":64,"name":"A"},{"row":3,"col":2,"x":2.75,"y":3.25,"h":1,"w":1,"code":22,"index":65,"name":"S"},{"row":3,"col":3,"x":3.75,"y":3.25,"h":1,"w":1,"code":7,"index":66,"name":"D"},{"row":3,"col":4,"x":4.75,"y":3.25,"h":1,"w":1,"code":9,"index":67,"name":"F"},{"row":3,"col":5,"x":5.75,"y":3.25,"h":1,"w":1,"code":10,"index":68,"name":"G"},{"row":3,"col":6,"x":6.75,"y":3.25,"h":1,"w":1,"code":11,"index":69,"name":"H"},{"row":3,"col":7,"x":7.75,"y":3.25,"h":1,"w":1,"code":13,"index":70,"name":"J"},{"row":3,"col":8,"x":8.75,"y":3.25,"h":1,"w":1,"code":14,"index":71,"name":"K"},{"row":3,"col":9,"x":9.75,"y":3.25,"h":1,"w":1,"code":15,"index":72,"name":"L"},{"row":3,"col":10,"x":10.75,"y":3.25,"h":1,"w":1,"code":51,"index":73,"name":";"},{"row":3,"col":11,"x":11.75,"y":3.25,"h":1,"w":1,"code":52,"index":74,"name":"\'"},{"row":3,"col":12,"x":12.75,"y":3.25,"h":1,"w":2.25,"code":40,"index":76,"name":"Enter"},{"row":3,"col":13,"x":18.5,"y":3.25,"h":1,"w":1,"code":92,"index":80,"name":"4"},{"row":3,"col":14,"x":19.5,"y":3.25,"h":1,"w":1,"code":93,"index":81,"name":"5"},{"row":3,"col":15,"x":20.5,"y":3.25,"h":1,"w":1,"code":94,"index":82,"name":"6"},{"row":4,"col":0,"x":0,"y":4.25,"h":1,"w":1.5,"code":225,"index":83,"name":"LeftShift"},{"row":4,"col":1,"x":1.5,"y":4.25,"h":1,"w":1,"code":100,"index":84,"name":"<>"},{"row":4,"col":2,"x":2.5,"y":4.25,"h":1,"w":1,"code":29,"index":85,"name":"Z"},{"row":4,"col":3,"x":3.5,"y":4.25,"h":1,"w":1,"code":27,"index":86,"name":"X"},{"row":4,"col":4,"x":4.5,"y":4.25,"h":1,"w":1,"code":6,"index":87,"name":"C"},{"row":4,"col":5,"x":5.5,"y":4.25,"h":1,"w":1,"code":25,"index":88,"name":"V"},{"row":4,"col":6,"x":6.5,"y":4.25,"h":1,"w":1,"code":5,"index":89,"name":"B"},{"row":4,"col":7,"x":7.5,"y":4.25,"h":1,"w":1,"code":17,"index":90,"name":"N"},{"row":4,"col":8,"x":8.5,"y":4.25,"h":1,"w":1,"code":16,"index":91,"name":"M"},{"row":4,"col":9,"x":9.5,"y":4.25,"h":1,"w":1,"code":54,"index":92,"name":"<"},{"row":4,"col":10,"x":10.5,"y":4.25,"h":1,"w":1,"code":55,"index":93,"name":">"},{"row":4,"col":11,"x":11.5,"y":4.25,"h":1,"w":1,"code":56,"index":94,"name":"?"},{"row":4,"col":12,"x":12.5,"y":4.25,"h":1,"w":1,"code":135,"index":95,"name":"\\\\"},{"row":4,"col":13,"x":13.5,"y":4.25,"h":1,"w":1.5,"code":229,"index":96,"name":"RightShift"},{"row":4,"col":14,"x":16.25,"y":4.25,"h":1,"w":1,"code":82,"index":99,"name":"â†‘"},{"row":4,"col":15,"x":18.5,"y":4.25,"h":1,"w":1,"code":89,"index":101,"name":"1"},{"row":4,"col":16,"x":19.5,"y":4.25,"h":1,"w":1,"code":90,"index":102,"name":"2"},{"row":4,"col":17,"x":20.5,"y":4.25,"h":1,"w":1,"code":91,"index":103,"name":"3"},{"row":4,"col":18,"x":21.5,"y":4.25,"h":2,"w":1,"code":88,"index":104,"name":"Enter"},{"row":5,"col":0,"x":0,"y":5.25,"h":1,"w":1,"code":224,"index":105,"name":"LeftCtrl"},{"row":5,"col":1,"x":1,"y":5.25,"h":1,"w":1,"code":227,"index":106,"name":"LeftWin"},{"row":5,"col":2,"x":2,"y":5.25,"h":1,"w":1,"code":226,"index":107,"name":"LeftAlt"},{"row":5,"col":5,"x":3,"y":5.25,"h":1,"w":8,"code":44,"index":110,"name":"Space"},{"row":5,"col":10,"x":11,"y":5.25,"h":1,"w":1,"code":230,"index":115,"name":"RightAlt"},{"row":5,"col":11,"x":12,"y":5.25,"h":1,"w":1,"code":231,"index":116,"name":"RightWin"},{"row":5,"col":12,"x":13,"y":5.25,"h":1,"w":1,"code":101,"index":117,"name":"App"},{"row":5,"col":13,"x":14,"y":5.25,"h":1,"w":1,"code":228,"index":118,"name":"RightCtrl"},{"row":5,"col":14,"x":15.25,"y":5.25,"h":1,"w":1,"code":80,"index":119,"name":"â†"},{"row":5,"col":15,"x":16.25,"y":5.25,"h":1,"w":1,"code":81,"index":120,"name":"â†“"},{"row":5,"col":16,"x":17.25,"y":5.25,"h":1,"w":1,"code":79,"index":121,"name":"â†’"},{"row":5,"col":17,"x":18.5,"y":5.25,"h":1,"w":2,"code":98,"index":122,"name":"0"},{"row":5,"col":18,"x":20.5,"y":5.25,"h":1,"w":1,"code":99,"index":124,"name":"."}]}'),
        eH = function(e) {
          let {
            macroProfiles: t,
            selectedKey: r,
            onKeySelect: o,
            keyBgColor: n,
            keyTextColor: i,
            keyBorderColor: a,
            selectedCardBorderColor: s,
            selectedCardBgColor: c,
            selectedTextColor: d,
            textColor: u,
            t: x,
            currentLayerKeys: h = [],
            onDragStart: p
          } = e, g = e => {
            let t = e;
            return t.includes("å®") ? t = t.replace(/å®/g, x("500")) : t.toLowerCase().includes("macro") && (t = t.replace(/macro/gi, x("500"))), t
          }, m = e => !!h && 0 !== h.length && h.some(t => t && 2 === t.type && t.code2 === e);
          return (0, l.jsx)(eh.x, {
            w: "100%",
            h: "100%",
            p: 3,
            children: (0, l.jsx)(eR.r, {
              templateColumns: "repeat(auto-fill, minmax(110px, 1fr))",
              gap: 2,
              w: "100%",
              children: t.map((e, t) => {
                let n = "macro-".concat(t),
                  i = g(e.name || "".concat(x("500"), " ").concat(t + 1)),
                  a = {
                    name: i,
                    code: n,
                    type: 2,
                    code1: 0,
                    code2: t,
                    code3: 0,
                    lang: ""
                  },
                  c = !e.list || 0 === e.list.length,
                  d = m(t),
                  u = r === n;
                return (0, l.jsxs)(eh.x, {
                  height: "70px",
                  px: 2.5,
                  py: 2,
                  textAlign: "center",
                  borderRadius: "md",
                  cursor: c ? "not-allowed" : "pointer",
                  bg: u ? "rgba(16, 168, 253, 0.15)" : c ? "rgba(37, 38, 40, 0.5)" : "rgba(37, 38, 40, 0.8)",
                  border: "1px solid",
                  borderColor: u ? s : d ? "rgba(56, 161, 105, 0.6)" : "rgba(55, 60, 65, 0.6)",
                  onClick: () => !c && o(a),
                  draggable: !c,
                  "data-index": t,
                  onDragStart: e => {
                    c || e.dataTransfer.setData("keyCode", JSON.stringify(a))
                  },
                  transition: "all 0.2s ease",
                  _hover: c ? {} : {
                    borderColor: u ? "#3BBAFD" : s,
                    transform: "translateY(-1px)",
                    boxShadow: u ? "0 4px 12px rgba(16, 168, 253, 0.3)" : "0 2px 8px rgba(0, 0, 0, 0.2)"
                  },
                  boxShadow: u ? "0 2px 8px rgba(16, 168, 253, 0.2)" : "0 1px 3px rgba(0, 0, 0, 0.2)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  opacity: c ? .5 : 1,
                  children: [d && !c && (0, l.jsx)(eh.x, {
                    position: "absolute",
                    top: "6px",
                    right: "6px",
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    bg: "#38A169",
                    boxShadow: "0 0 6px rgba(56, 161, 105, 0.6)"
                  }), (0, l.jsx)(b.x, {
                    color: u ? s : c ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0.85)",
                    fontSize: "sm",
                    fontWeight: u ? "600" : "500",
                    maxWidth: "100%",
                    isTruncated: !0,
                    title: i,
                    mb: 1,
                    children: i
                  }), (0, l.jsx)(b.x, {
                    color: c ? "rgba(255, 255, 255, 0.3)" : "rgba(255, 255, 255, 0.5)",
                    fontSize: "xs",
                    children: "".concat(e.list.length, " ").concat(x("245"))
                  }), d && !c && (0, l.jsx)(b.x, {
                    position: "absolute",
                    bottom: "2px",
                    fontSize: "10px",
                    color: "#38A169",
                    fontWeight: "500",
                    children: x("246")
                  })]
                }, n)
              })
            })
          })
        },
        eK = r(890);
      let eV = {
        Digit1: 30,
        Digit2: 31,
        Digit3: 32,
        Digit4: 33,
        Digit5: 34,
        Digit6: 35,
        Digit7: 36,
        Digit8: 37,
        Digit9: 38,
        Digit0: 39,
        KeyA: 4,
        KeyB: 5,
        KeyC: 6,
        KeyD: 7,
        KeyE: 8,
        KeyF: 9,
        KeyG: 10,
        KeyH: 11,
        KeyI: 12,
        KeyJ: 13,
        KeyK: 14,
        KeyL: 15,
        KeyM: 16,
        KeyN: 17,
        KeyO: 18,
        KeyP: 19,
        KeyQ: 20,
        KeyR: 21,
        KeyS: 22,
        KeyT: 23,
        KeyU: 24,
        KeyV: 25,
        KeyW: 26,
        KeyX: 27,
        KeyY: 28,
        KeyZ: 29,
        Comma: 54,
        Period: 55,
        Semicolon: 51,
        Quote: 52,
        BracketLeft: 47,
        BracketRight: 48,
        Backspace: 42,
        Backquote: 53,
        Slash: 56,
        Backslash: 49,
        Minus: 45,
        Equal: 46,
        IntlRo: 135,
        IntlYen: 137,
        AltLeft: 226,
        AltRight: 230,
        CapsLock: 57,
        ControlLeft: 224,
        ControlRight: 228,
        MetaLeft: 227,
        MetaRight: 231,
        OSLeft: 227,
        OSRight: 231,
        ShiftLeft: 225,
        ShiftRight: 229,
        ContextMenu: 101,
        Enter: 40,
        Space: 44,
        Tab: 43,
        Delete: 76,
        End: 77,
        Help: 117,
        Home: 74,
        Insert: 73,
        PageDown: 78,
        PageUp: 75,
        ArrowDown: 81,
        ArrowLeft: 80,
        ArrowRight: 79,
        ArrowUp: 82,
        Escape: 41,
        PrintScreen: 70,
        ScrollLock: 71,
        Pause: 72,
        AudioVolumeUp: 169,
        AudioVolumeDown: 170,
        AudioVolumeMute: 168,
        F1: 58,
        F2: 59,
        F3: 60,
        F4: 61,
        F5: 62,
        F6: 63,
        F7: 64,
        F8: 65,
        F9: 66,
        F10: 67,
        F11: 68,
        F12: 69,
        F13: 104,
        F14: 105,
        F15: 106,
        F16: 107,
        F17: 108,
        F18: 109,
        F19: 110,
        F20: 111,
        F21: 112,
        F22: 113,
        F23: 114,
        F24: 115,
        NumLock: 83,
        Numpad0: 98,
        Numpad1: 89,
        Numpad2: 90,
        Numpad3: 91,
        Numpad4: 92,
        Numpad5: 93,
        Numpad6: 94,
        Numpad7: 95,
        Numpad8: 96,
        Numpad9: 97,
        NumpadAdd: 87,
        NumpadComma: 54,
        NumpadDecimal: 99,
        NumpadDivide: 84,
        NumpadEnter: 88,
        NumpadEqual: 103,
        NumpadMultiply: 85,
        NumpadSubtract: 86
      };

      function eG(e) {
        return ({
          0: "Mouse L-Button",
          1: "Mouse M-Button",
          2: "Mouse R-Button",
          3: "Mouse Backward",
          4: "Mouse Forward"
        })[e] || "Mouse Button ".concat(e)
      }
      var eY = function(e) {
          let {
            selectedKey: t,
            onKeySelect: r,
            keyBgColor: o,
            keyTextColor: n,
            keyBorderColor: i,
            selectedCardBorderColor: a,
            selectedCardBgColor: c,
            selectedTextColor: d,
            textColor: u,
            t: x,
            presetShortcuts: h,
            onDragStart: p
          } = e, [g, m] = (0, s.useState)(""), [f, y] = (0, s.useState)({
            ctrl: !1,
            shift: !1,
            alt: !1,
            win: !1
          }), w = (0, s.useRef)(null), v = eD(), k = e => {
            y(t => ({ ...t,
              [e]: !t[e]
            }))
          };
          return (0, l.jsx)(ew.k, {
            direction: "column",
            height: "100%",
            w: "100%",
            p: 4,
            children: (0, l.jsxs)(ew.k, {
              direction: "column",
              align: "center",
              justify: "center",
              gap: 4,
              w: "100%",
              maxW: "900px",
              mx: "auto",
              children: [(0, l.jsx)(b.x, {
                fontSize: "sm",
                color: "rgba(255, 255, 255, 0.6)",
                textAlign: "center",
                mb: 2,
                children: x("235")
              }), (0, l.jsxs)(ew.k, {
                align: "center",
                justify: "center",
                gap: 2,
                minH: "60px",
                w: "100%",
                px: 4,
                py: 3,
                bg: "rgba(17, 18, 20, 0.6)",
                borderRadius: "lg",
                border: "1px solid rgba(55, 60, 65, 0.6)",
                children: [Object.entries(f).map(e => {
                  let [t, r] = e;
                  return r && (0, l.jsx)(eh.x, {
                    px: 3,
                    py: 1,
                    bg: a,
                    color: "white",
                    borderRadius: "md",
                    fontSize: "sm",
                    fontWeight: "600",
                    children: t.charAt(0).toUpperCase() + t.slice(1)
                  }, t)
                }), (f.ctrl || f.shift || f.alt || f.win) && g && (0, l.jsx)(b.x, {
                  color: a,
                  fontSize: "lg",
                  fontWeight: "bold",
                  children: "+"
                }), g ? (0, l.jsx)(eh.x, {
                  px: 3,
                  py: 1,
                  bg: "#FFA500",
                  color: "white",
                  borderRadius: "md",
                  fontSize: "sm",
                  fontWeight: "600",
                  children: g
                }) : (0, l.jsx)(b.x, {
                  color: "rgba(255, 255, 255, 0.3)",
                  fontSize: "sm",
                  children: x("236")
                })]
              }), (0, l.jsxs)(ew.k, {
                direction: "row",
                gap: 4,
                w: "100%",
                children: [(0, l.jsxs)(eh.x, {
                  flex: "1",
                  children: [(0, l.jsx)(b.x, {
                    fontSize: "xs",
                    color: "rgba(255, 255, 255, 0.5)",
                    mb: 2,
                    textTransform: "uppercase",
                    letterSpacing: "wider",
                    children: x("237")
                  }), (0, l.jsx)(eR.r, {
                    templateColumns: "repeat(2, 1fr)",
                    gap: 2,
                    children: [{
                      key: "ctrl",
                      label: "Ctrl"
                    }, {
                      key: "shift",
                      label: "Shift"
                    }, {
                      key: "alt",
                      label: "Alt"
                    }, {
                      key: "win",
                      label: "Win"
                    }].map(e => {
                      let {
                        key: t,
                        label: r
                      } = e;
                      return (0, l.jsx)(eb.z, {
                        onClick: () => k(t),
                        size: "sm",
                        h: "40px",
                        fontSize: "sm",
                        fontWeight: "500",
                        bg: f[t] ? "rgba(16, 168, 253, 0.15)" : "rgba(37, 38, 40, 0.8)",
                        color: f[t] ? a : "rgba(255, 255, 255, 0.7)",
                        border: "1px solid",
                        borderColor: f[t] ? a : "rgba(55, 60, 65, 0.6)",
                        _hover: {
                          bg: f[t] ? "rgba(16, 168, 253, 0.25)" : "rgba(45, 46, 48, 0.9)",
                          borderColor: a
                        },
                        _active: {
                          transform: "scale(0.97)"
                        },
                        transition: "all 0.2s",
                        borderRadius: "md",
                        children: r
                      }, t)
                    })
                  })]
                }), (0, l.jsxs)(eh.x, {
                  flex: "1",
                  children: [(0, l.jsx)(b.x, {
                    fontSize: "xs",
                    color: "rgba(255, 255, 255, 0.5)",
                    mb: 2,
                    textTransform: "uppercase",
                    letterSpacing: "wider",
                    children: x("238")
                  }), (0, l.jsx)(eK.I, {
                    ref: w,
                    value: g,
                    onKeyDown: e => {
                      e.preventDefault();
                      let t = {
                          Space: "SPACE",
                          Tab: "TAB",
                          Enter: "ENTER",
                          Escape: "ESC",
                          ArrowUp: "UP",
                          ArrowDown: "DOWN",
                          ArrowLeft: "LEFT",
                          ArrowRight: "RIGHT",
                          Home: "HOME",
                          End: "END",
                          PageUp: "PGUP",
                          PageDown: "PGDN",
                          Delete: "DEL",
                          Insert: "INS",
                          Backspace: "BKSP",
                          CapsLock: "CAPS",
                          ControlLeft: "LCTRL",
                          ControlRight: "RCTRL",
                          ShiftLeft: "LSHIFT",
                          ShiftRight: "RSHIFT",
                          AltLeft: "LALT",
                          AltRight: "RALT",
                          MetaLeft: "LWIN",
                          MetaRight: "RWIN",
                          OSLeft: "LWIN",
                          OSRight: "RWIN"
                        },
                        r = {
                          NumpadDivide: "/(K)",
                          NumpadMultiply: "*(K)",
                          NumpadSubtract: "-(K)",
                          NumpadAdd: "+(K)"
                        };
                      m(e.code in r ? r[e.code] : e.code in t ? t[e.code] : e.key in t ? t[e.key] : ["`", "~", "-", "_", "=", "+", "[", "{", "]", "}", "\\", "|", ";", ":", "'", '"', ",", "<", ".", ">", "/", "?"].includes(e.key) ? e.key : e.key.toUpperCase())
                    },
                    placeholder: x("239"),
                    readOnly: !0,
                    size: "lg",
                    h: "92px",
                    fontSize: "lg",
                    fontWeight: "500",
                    textAlign: "center",
                    bg: "rgba(37, 38, 40, 0.6)",
                    color: g ? "#FFA500" : "rgba(255, 255, 255, 0.7)",
                    borderColor: g ? "#FFA500" : "rgba(55, 60, 65, 0.6)",
                    border: "1px solid",
                    _focus: {
                      borderColor: "#FFA500",
                      bg: "rgba(37, 38, 40, 0.8)"
                    },
                    _placeholder: {
                      color: "rgba(255, 255, 255, 0.3)",
                      fontSize: "sm"
                    },
                    borderRadius: "md",
                    cursor: "pointer"
                  })]
                })]
              }), (0, l.jsxs)(ew.k, {
                gap: 3,
                mt: 2,
                children: [(0, l.jsx)(eb.z, {
                  onClick: () => {
                    m(""), y({
                      ctrl: !1,
                      shift: !1,
                      alt: !1,
                      win: !1
                    })
                  },
                  size: "md",
                  h: "36px",
                  px: 6,
                  fontSize: "sm",
                  fontWeight: "500",
                  bg: "rgba(37, 38, 40, 0.8)",
                  color: "rgba(255, 255, 255, 0.7)",
                  border: "1px solid rgba(55, 60, 65, 0.6)",
                  _hover: {
                    bg: "rgba(45, 46, 48, 0.9)",
                    borderColor: "rgba(255, 255, 255, 0.2)"
                  },
                  transition: "all 0.2s",
                  borderRadius: "md",
                  children: x("240")
                }), (0, l.jsx)(eb.z, {
                  onClick: () => {
                    if (!g.trim()) {
                      v(x("230"), x("231"), "warning");
                      return
                    }
                    if (["LCTRL", "RCTRL", "LSHIFT", "RSHIFT", "LALT", "RALT", "LWIN", "RWIN"].includes(g)) {
                      v(x("230"), "ä¿®é¥°é”®(Ctrl/Shift/Alt/Win)ä¸èƒ½ä½œä¸ºæ™®é€šæŒ‰é”®ï¼Œè¯·ä½¿ç”¨å·¦ä¾§çš„ä¿®é¥°é”®é€‰æ‹©", "warning");
                      return
                    }
                    let e = 0;
                    f.ctrl && (e |= 1), f.shift && (e |= 2), f.alt && (e |= 4), f.win && (e |= 8);
                    let t = {
                      A: 4,
                      B: 5,
                      C: 6,
                      D: 7,
                      E: 8,
                      F: 9,
                      G: 10,
                      H: 11,
                      I: 12,
                      J: 13,
                      K: 14,
                      L: 15,
                      M: 16,
                      N: 17,
                      O: 18,
                      P: 19,
                      Q: 20,
                      R: 21,
                      S: 22,
                      T: 23,
                      U: 24,
                      V: 25,
                      W: 26,
                      X: 27,
                      Y: 28,
                      Z: 29,
                      1: 30,
                      2: 31,
                      3: 32,
                      4: 33,
                      5: 34,
                      6: 35,
                      7: 36,
                      8: 37,
                      9: 38,
                      0: 39,
                      SPACE: 44,
                      TAB: 43,
                      ENTER: 40,
                      ESC: 41,
                      BKSP: 42,
                      UP: 82,
                      DOWN: 81,
                      LEFT: 80,
                      RIGHT: 79,
                      HOME: 74,
                      END: 77,
                      PGUP: 75,
                      PGDN: 78,
                      DEL: 76,
                      INS: 73,
                      F1: 58,
                      F2: 59,
                      F3: 60,
                      F4: 61,
                      F5: 62,
                      F6: 63,
                      F7: 64,
                      F8: 65,
                      F9: 66,
                      F10: 67,
                      F11: 68,
                      F12: 69,
                      "~": 53,
                      "`": 53,
                      "-": 45,
                      _: 45,
                      "=": 46,
                      "+": 46,
                      "[": 47,
                      "{": 47,
                      "]": 48,
                      "}": 48,
                      "\\": 49,
                      "|": 49,
                      ";": 51,
                      ":": 51,
                      "'": 52,
                      '"': 52,
                      ",": 54,
                      "<": 54,
                      ".": 55,
                      ">": 55,
                      "/": 56,
                      "?": 56,
                      "/(K)": 84,
                      "*(K)": 85,
                      "-(K)": 86,
                      "+(K)": 87,
                      CAPS: 57,
                      LCTRL: 224,
                      RCTRL: 228,
                      LSHIFT: 225,
                      RSHIFT: 229,
                      LALT: 226,
                      RALT: 230,
                      LWIN: 227,
                      RWIN: 231
                    }[
                      ["`", "~", "-", "_", "=", "+", "[", "{", "]", "}", "\\", "|", ";", ":", "'", '"', ",", "<", ".", ">", "/", "?", "/(K)", "*(K)", "-(K)", "+(K)"].includes(g) ? g : g.toUpperCase()
                    ];
                    if (!t) {
                      v(x("230"), x("232"), "warning");
                      return
                    }
                    let o = [];
                    f.ctrl && o.push("Ctrl"), f.shift && o.push("Shift"), f.alt && o.push("Alt"), f.win && o.push("Win"), r({
                      name: o.length > 0 ? "".concat(o.join("+"), "+").concat(g) : g,
                      code: "CUSTOM_".concat(Date.now()),
                      type: 1,
                      code1: e,
                      code2: t,
                      code3: 0,
                      lang: ""
                    }), m(""), y({
                      ctrl: !1,
                      shift: !1,
                      alt: !1,
                      win: !1
                    })
                  },
                  size: "md",
                  h: "36px",
                  px: 8,
                  fontSize: "sm",
                  fontWeight: "600",
                  bg: a,
                  color: "white",
                  _hover: {
                    bg: "#3BBAFD",
                    transform: "translateY(-1px)"
                  },
                  _active: {
                    transform: "translateY(0px)"
                  },
                  _disabled: {
                    opacity: .5,
                    cursor: "not-allowed"
                  },
                  isDisabled: !g,
                  transition: "all 0.2s",
                  borderRadius: "md",
                  children: x("241")
                })]
              })]
            })
          })
        },
        eZ = function(e) {
          let {
            onKeySelect: t,
            selectedKey: r,
            onDragStart: o
          } = e, [n, i] = (0, s.useState)(null), a = eU.mQ || 1050, c = eU.O$ || 350, d = eU.EL || 50, u = eU.XP, x = (e, t) => e ? "rgba(16, 168, 253, 0.2)" : "rgb(37, 38, 40)", h = e => e ? "2px solid #10A8FD" : "none", p = e => e ? "0 0 10px rgba(16, 168, 253, 0.3)" : "0 1px 2px rgba(0,0,0,0.1)", g = e => e ? "#10A8FD" : "rgb(229, 231, 235)";
          return (0, l.jsx)("div", {
            className: "rounded p-2.5",
            style: {
              width: "".concat(a, "px"),
              height: "".concat(c, "px"),
              backgroundColor: "rgba(30, 35, 40, 0.8)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
            },
            children: (0, l.jsx)("div", {
              className: "h-full relative",
              children: u.map((e, a) => {
                let s = "STD_".concat(a, "_").concat(e.code),
                  c = r === s,
                  u = n === e.index;
                return (0, l.jsx)("div", {
                  className: "absolute cursor-pointer transition-all duration-200",
                  style: {
                    left: "".concat(e.x * d, "px"),
                    top: "".concat(e.y * d, "px"),
                    width: "".concat(e.w * d, "px"),
                    height: "".concat(e.h * d, "px"),
                    padding: "1px"
                  },
                  onClick: () => {
                    t({
                      name: e.name,
                      code: s,
                      type: 0,
                      code1: 0,
                      code2: e.code,
                      code3: 0,
                      lang: ""
                    })
                  },
                  onMouseEnter: () => i(e.index),
                  onMouseLeave: () => i(null),
                  draggable: !0,
                  onDragStart: e => {
                    e.currentTarget.dataset.index = a.toString(), o && o(e)
                  },
                  "data-index": a,
                  children: (0, l.jsx)("div", {
                    className: "h-full w-full keycap rounded transition-all duration-300",
                    style: {
                      backgroundColor: x(c, u),
                      border: h(c),
                      boxShadow: p(c)
                    },
                    children: (0, l.jsx)("div", {
                      className: "h-full w-full keycap-bg rounded transition-colors duration-300 bg-transparent",
                      children: (0, l.jsx)("div", {
                        className: "key-content h-full w-full flex items-center justify-center relative",
                        style: {
                          fontSize: e.w > 2 ? "11px" : "10px",
                          color: g(c),
                          fontWeight: c ? 600 : 500
                        },
                        children: (0, l.jsx)("span", {
                          className: "text-center leading-none",
                          children: e.name
                        })
                      })
                    })
                  })
                }, "".concat(e.row, "-").concat(e.col, "-").concat(a))
              })
            })
          })
        };
      let eJ = {
          primary: {
            main: "#10A8FD",
            light: "#3BBAFD",
            dark: "#0E96E3",
            gradient: "linear-gradient(135deg, #10A8FD 0%, #0E96E3 100%)"
          },
          bg: {
            main: "rgba(20, 25, 30, 0.95)",
            secondary: "rgba(30, 35, 40, 0.8)",
            hover: "rgba(16, 168, 253, 0.08)",
            active: "rgba(16, 168, 253, 0.15)",
            selected: "rgba(16, 168, 253, 0.2)",
            card: "rgba(35, 40, 45, 0.6)"
          },
          border: {
            main: "rgba(16, 168, 253, 0.3)",
            light: "rgba(255, 255, 255, 0.1)",
            active: "#10A8FD",
            glow: "0 0 10px rgba(16, 168, 253, 0.3)"
          },
          text: {
            primary: "white",
            secondary: "rgba(255, 255, 255, 0.8)",
            tertiary: "rgba(255, 255, 255, 0.6)",
            muted: "rgba(255, 255, 255, 0.4)"
          },
          shadow: {
            sm: "0 2px 8px rgba(0, 0, 0, 0.2)",
            md: "0 4px 16px rgba(0, 0, 0, 0.3)",
            lg: "0 8px 32px rgba(0, 0, 0, 0.4)",
            glow: "0 0 20px rgba(16, 168, 253, 0.4)",
            inner: "inset 0 1px 0 rgba(255, 255, 255, 0.1)"
          }
        },
        eq = (0, eP.E)(eh.x),
        eX = (0, eP.E)(ew.k);
      var eQ = function() {
          let e = (0, s.useRef)(null),
            [t, o] = (0, s.useState)("41vh"),
            {
              connectedDevice: n,
              selectedKeyIndex: i,
              setSelectedKeyIndex: a,
              fnLayer: c,
              keyInfos: d,
              setKeyInfos: u,
              updateKeyboardKeys: x,
              macroProfiles: h,
              profileIndex: p,
              blockDeviceStatusPolling: g,
              unblockDeviceStatusPolling: m,
              t: f,
              keyLayoutInfoRef: y,
              keyItemLayoutRef: w
            } = (0, s.useContext)(ed),
            v = eD(),
            k = w.current,
            [j, S] = (0, s.useState)("standard"),
            [C, D] = (0, s.useState)(null),
            [I, F] = (0, s.useState)([]),
            [E, R] = (0, s.useState)(!0),
            A = (0, s.useRef)(!1),
            {
              isOpen: M,
              onOpen: _,
              onClose: L
            } = (0, ex.q)();
          (0, s.useRef)(null), (0, s.useEffect)(() => {
            (async () => {
              try {
                if (A.current && I.length > 0) return;
                R(!0);
                let e = await r.e(149).then(r.t.bind(r, 9149, 19)),
                  t = e.default || e,
                  o = t.find(e => "102" === e.id);
                t.find(e => "104" === e.id);
                let n = eU.XP.map((e, t) => ({
                    name: e.name,
                    code: "STD_".concat(t, "_").concat(e.code),
                    type: 0,
                    code1: 0,
                    code2: e.code,
                    code3: 0,
                    lang: e.lang || ""
                  })),
                  i = [{
                    id: "standard",
                    lang: "101",
                    label: "æ ‡å‡†æŒ‰é”®",
                    keycodes: n
                  }, o ? {
                    id: "media",
                    lang: o.lang || "å¤šåª’ä½“",
                    label: o.label || "å¤šåª’ä½“",
                    keycodes: o.keycodes
                  } : {
                    id: "media",
                    lang: "102",
                    label: "å¤šåª’ä½“",
                    keycodes: []
                  }, {
                    id: "shortcut",
                    lang: "103",
                    label: "ç»„åˆé”®",
                    keycodes: []
                  }, {
                    id: "macro",
                    lang: "105",
                    label: "å®",
                    keycodes: []
                  }].map(e => ({ ...e,
                    keycodes: e.keycodes.map((t, r) => t.code ? t : { ...t,
                      code: "".concat(t.name, "-").concat(e.id, "-").concat(r)
                    })
                  }));
                F(i), A.current = !0, R(!1)
              } catch (e) {
                console.error("Error loading key data:", e), R(!1)
              }
            })()
          }, []), (0, s.useEffect)(() => {
            D(null)
          }, [j]), (0, s.useEffect)(() => {
            let e = () => {
              o("41vh")
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, []);
          let z = () => {
              if (E) return [];
              let e = I.find(e => e.id === j);
              return e ? e.keycodes : []
            },
            N = () => d && 0 !== d.length && d[c] || [],
            T = async e => {
              g();
              try {
                await e()
              } catch (e) {
                console.error("è®¾å¤‡å†™å…¥å¤±è´¥:", e)
              } finally {
                m()
              }
            },
            O = async e => {
              if (D(e.code), -1 === i) return;
              if (2 === e.type) {
                let t = e.code2;
                if (t < 0 || t >= h.length || !h[t] || !h[t].list || 0 === h[t].list.length) {
                  v(f("160"), f("161"), "warning");
                  return
                }
              }
              let t = N(),
                r = [...d];
              r[c] || (r[c] = [...t]), r[c][i] = { ...r[c][i],
                index: k[i].index,
                keyName: e.name,
                lang: e.lang || "",
                type: e.type,
                code1: e.code1,
                code2: e.code2,
                code3: e.code3,
                layer: c
              }, u(r), console.log("newKeyInfos", r), x(r), n && await T(async () => {
                if (2 === e.type) {
                  let t = h[e.code2];
                  if (t && t.list && t.list.length > 0) {
                    let e = Math.min(t.count || 1, 255);
                    await n.setMacro(p, k[i].code, r[c][i], t.list, e)
                  }
                } else await n.setKeyMacro(p, k[i].code, r[c][i])
              })
            },
            W = e => {
              let t = e.target.dataset.index;
              e.dataTransfer.setData("keyCode", JSON.stringify(z()[t]))
            };
          return (0, l.jsxs)(eq, {
            ref: e,
            className: "w-full h-full flex flex-col",
            initial: {
              opacity: 0,
              y: 20
            },
            animate: {
              opacity: 1,
              y: 0
            },
            transition: {
              duration: .5,
              ease: "easeOut"
            },
            children: [(0, l.jsx)(eq, {
              style: {
                height: t,
                padding: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              },
              initial: {
                opacity: 0,
                scale: .95
              },
              animate: {
                opacity: 1,
                scale: 1
              },
              transition: {
                duration: .6,
                delay: .1,
                ease: "easeOut"
              },
              children: (0, l.jsx)(eB, {})
            }), (0, l.jsx)(eq, {
              p: 6,
              style: {
                flex: 1,
                backgroundColor: eJ.bg.main,
                borderRadius: "8px",
                margin: "0 10px 10px 10px",
                overflow: "hidden"
              },
              initial: {
                opacity: 0,
                y: 30
              },
              animate: {
                opacity: 1,
                y: 0
              },
              transition: {
                duration: .7,
                delay: .2,
                ease: "easeOut"
              },
              children: (0, l.jsxs)(eX, {
                direction: "row",
                height: "100%",
                width: "100%",
                gap: 4,
                initial: {
                  opacity: 0
                },
                animate: {
                  opacity: 1
                },
                transition: {
                  duration: .8,
                  delay: .3,
                  ease: "easeOut"
                },
                children: [(0, l.jsx)(eq, {
                  bg: eJ.bg.secondary,
                  borderRadius: "lg",
                  width: "150px",
                  maxHeight: "340px",
                  border: "1px solid ".concat(eJ.border.light),
                  p: 3,
                  initial: {
                    opacity: 0,
                    x: -30
                  },
                  animate: {
                    opacity: 1,
                    x: 0
                  },
                  transition: {
                    duration: .6,
                    delay: .4,
                    ease: "easeOut"
                  },
                  children: (0, l.jsx)(ew.k, {
                    direction: "column",
                    gap: 2,
                    height: "100%",
                    overflowY: "auto",
                    css: {
                      "&::-webkit-scrollbar": {
                        width: "4px"
                      },
                      "&::-webkit-scrollbar-track": {
                        background: "rgba(0, 0, 0, 0.1)",
                        borderRadius: "4px"
                      },
                      "&::-webkit-scrollbar-thumb": {
                        background: eJ.border.main,
                        borderRadius: "4px",
                        "&:hover": {
                          background: eJ.primary.main
                        }
                      }
                    },
                    children: !E && I.map(e => (0, l.jsx)(eh.x, {
                      bg: j === e.id ? eJ.bg.selected : "transparent",
                      color: j === e.id ? eJ.primary.main : eJ.text.secondary,
                      onClick: () => S(e.id),
                      cursor: "pointer",
                      borderRadius: "md",
                      fontWeight: j === e.id ? "600" : "normal",
                      fontSize: "sm",
                      height: "40px",
                      px: 3,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.2s",
                      borderLeft: j === e.id ? "3px solid ".concat(eJ.primary.main) : "3px solid transparent",
                      boxShadow: j === e.id ? eJ.border.glow : "none",
                      _hover: {
                        bg: j === e.id ? eJ.bg.selected : eJ.bg.hover,
                        color: eJ.text.primary
                      },
                      children: e.lang && !isNaN(Number(e.lang)) ? f(e.lang) : e.label
                    }, e.id))
                  })
                }), (0, l.jsx)(eq, {
                  flex: "1",
                  maxHeight: "340px",
                  overflowY: "auto",
                  css: {
                    "&::-webkit-scrollbar": {
                      width: "6px"
                    },
                    "&::-webkit-scrollbar-track": {
                      background: "rgba(0, 0, 0, 0.1)",
                      borderRadius: "8px"
                    },
                    "&::-webkit-scrollbar-thumb": {
                      background: eJ.border.main,
                      borderRadius: "8px",
                      "&:hover": {
                        background: eJ.primary.main
                      }
                    }
                  },
                  initial: {
                    opacity: 0,
                    y: 20
                  },
                  animate: {
                    opacity: 1,
                    y: 0
                  },
                  transition: {
                    duration: .8,
                    delay: .6,
                    ease: "easeOut"
                  },
                  children: E ? (0, l.jsx)(b.x, {
                    textAlign: "center",
                    color: eJ.text.primary,
                    children: "Loading..."
                  }) : "standard" === j ? (0, l.jsx)(eZ, {
                    selectedKey: C,
                    onKeySelect: O,
                    onDragStart: W
                  }) : "shortcut" === j ? (0, l.jsx)(eY, {
                    selectedKey: C,
                    onKeySelect: O,
                    keyBgColor: eJ.bg.card,
                    keyTextColor: eJ.text.primary,
                    keyBorderColor: eJ.border.light,
                    selectedCardBorderColor: eJ.primary.main,
                    selectedCardBgColor: eJ.bg.selected,
                    selectedTextColor: eJ.primary.main,
                    textColor: eJ.text.primary,
                    t: f,
                    presetShortcuts: z(),
                    onDragStart: W
                  }) : "macro" === j ? (0, l.jsx)(eH, {
                    macroProfiles: h,
                    selectedKey: C,
                    onKeySelect: O,
                    keyBgColor: eJ.bg.card,
                    keyTextColor: eJ.text.primary,
                    keyBorderColor: "transparent",
                    selectedCardBorderColor: eJ.primary.main,
                    selectedCardBgColor: eJ.bg.selected,
                    selectedTextColor: eJ.primary.main,
                    textColor: eJ.text.primary,
                    t: f,
                    currentLayerKeys: N(),
                    onDragStart: W
                  }) : (0, l.jsx)(eR.r, {
                    templateColumns: "repeat(auto-fill, minmax(120px, 120px))",
                    gap: "4px",
                    py: .5,
                    justifyContent: "center",
                    children: z().map((e, t) => (0, l.jsx)(eh.x, {
                      height: "36px",
                      width: "120px",
                      px: 2,
                      py: 2,
                      textAlign: "center",
                      borderRadius: "md",
                      cursor: "pointer",
                      bg: C === e.code ? eJ.bg.selected : eJ.bg.card,
                      border: "1px solid",
                      borderColor: C === e.code ? eJ.primary.main : eJ.border.light,
                      onClick: () => O(e),
                      "data-index": t,
                      draggable: !0,
                      onDragStart: W,
                      transition: "all 0.2s ease",
                      _hover: {
                        bg: C === e.code ? eJ.bg.active : eJ.bg.hover,
                        borderColor: C === e.code ? eJ.primary.light : eJ.border.main,
                        transform: "translateY(-1px)"
                      },
                      boxShadow: C === e.code ? eJ.border.glow : eJ.shadow.sm,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      my: 0,
                      overflow: "hidden",
                      children: (0, l.jsx)(b.x, {
                        color: C === e.code ? eJ.primary.main : eJ.text.primary,
                        fontSize: "sm",
                        fontWeight: C === e.code ? "600" : "normal",
                        maxWidth: "110px",
                        isTruncated: !0,
                        title: e.lang ? f(e.lang) : e.name,
                        children: 2 == e.type ? e.lang ? f(e.lang) + " " + (t + 1) : e.name : e.lang ? f(e.lang) : e.name
                      })
                    }, e.code))
                  })
                })]
              })
            })]
          })
        },
        e$ = r(6873),
        e0 = r(8289),
        e1 = r(9155),
        e2 = function(e) {
          let {
            color: t,
            onChange: r,
            presetColors: o = ["#FF0000", "#FFA500", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#FF00FF", "#FFFFFF", "#000000"],
            presetTitle: n = "é¢„è®¾é¢œè‰²",
            isColorSelected: i
          } = e, a = "180px", c = (0, e1.Z)(t), d = c.toRgb(), u = c.toHexString(), [x, h] = (0, s.useState)(String(d.r)), [p, g] = (0, s.useState)(String(d.g)), [m, f] = (0, s.useState)(String(d.b));
          (0, s.useEffect)(() => {
            h(String(d.r)), g(String(d.g)), f(String(d.b))
          }, [d.r, d.g, d.b]);
          let y = (e, t) => {
              "r" === e ? h(t) : "g" === e ? g(t) : "b" === e && f(t)
            },
            w = (e, t) => {
              let o = t.trim(),
                n = Math.max(0, Math.min(255, "" === o ? 0 : parseInt(o) || 0));
              "r" === e ? h(String(n)) : "g" === e ? g(String(n)) : "b" === e && f(String(n));
              let i = { ...d,
                [e]: n
              };
              r((0, e1.Z)(i).toHexString())
            },
            v = e => {
              let t = e;
              t.startsWith("#") || (t = "#" + t), (0, e1.Z)(t).isValid() && r(t)
            },
            k = (e, t) => {
              r(e)
            };
          return (0, l.jsxs)(ew.k, {
            gap: 6,
            children: [(0, l.jsx)(eh.x, {
              children: (0, l.jsx)(eh.x, {
                w: "280px",
                h: a,
                borderRadius: "lg",
                border: "2px solid #fff",
                overflow: "hidden",
                boxShadow: "0 2px 8px #0004",
                bg: "white",
                position: "relative",
                children: (0, l.jsx)(e0.gW, {
                  color: t,
                  onChange: e => {
                    r(e)
                  },
                  style: {
                    width: "100%",
                    height: "100%"
                  }
                })
              })
            }), (0, l.jsxs)(eh.x, {
              h: a,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              children: [(0, l.jsxs)(ew.k, {
                align: "center",
                gap: 3,
                children: [(0, l.jsx)(b.x, {
                  w: "24px",
                  color: "white",
                  fontSize: "lg",
                  fontWeight: "bold",
                  children: "R"
                }), (0, l.jsx)(eK.I, {
                  type: "number",
                  min: 0,
                  max: 255,
                  value: x,
                  onChange: e => y("r", e.target.value),
                  onBlur: e => w("r", e.target.value),
                  width: "160px",
                  height: "40px",
                  fontSize: "lg",
                  bg: "rgba(60, 60, 70, 0.9)",
                  color: "white",
                  borderRadius: "lg",
                  textAlign: "left",
                  pl: 4,
                  fontWeight: "bold",
                  border: "1px solid #555",
                  _focus: {
                    borderColor: "#10A8FD",
                    boxShadow: "0 0 0 2px #10A8FD"
                  }
                })]
              }), (0, l.jsxs)(ew.k, {
                align: "center",
                gap: 3,
                children: [(0, l.jsx)(b.x, {
                  w: "24px",
                  color: "white",
                  fontSize: "lg",
                  fontWeight: "bold",
                  children: "G"
                }), (0, l.jsx)(eK.I, {
                  type: "number",
                  min: 0,
                  max: 255,
                  value: p,
                  onChange: e => y("g", e.target.value),
                  onBlur: e => w("g", e.target.value),
                  width: "160px",
                  height: "40px",
                  fontSize: "lg",
                  bg: "rgba(60, 60, 70, 0.9)",
                  color: "white",
                  borderRadius: "lg",
                  textAlign: "left",
                  pl: 4,
                  fontWeight: "bold",
                  border: "1px solid #555",
                  _focus: {
                    borderColor: "#10A8FD",
                    boxShadow: "0 0 0 2px #10A8FD"
                  }
                })]
              }), (0, l.jsxs)(ew.k, {
                align: "center",
                gap: 3,
                children: [(0, l.jsx)(b.x, {
                  w: "24px",
                  color: "white",
                  fontSize: "lg",
                  fontWeight: "bold",
                  children: "B"
                }), (0, l.jsx)(eK.I, {
                  type: "number",
                  min: 0,
                  max: 255,
                  value: m,
                  onChange: e => y("b", e.target.value),
                  onBlur: e => w("b", e.target.value),
                  width: "160px",
                  height: "40px",
                  fontSize: "lg",
                  bg: "rgba(60, 60, 70, 0.9)",
                  color: "white",
                  borderRadius: "lg",
                  textAlign: "left",
                  pl: 4,
                  fontWeight: "bold",
                  border: "1px solid #555",
                  _focus: {
                    borderColor: "#10A8FD",
                    boxShadow: "0 0 0 2px #10A8FD"
                  }
                })]
              }), (0, l.jsxs)(ew.k, {
                align: "center",
                gap: 3,
                children: [(0, l.jsx)(b.x, {
                  w: "24px",
                  color: "white",
                  fontSize: "lg",
                  fontWeight: "bold",
                  children: "#"
                }), (0, l.jsx)(eK.I, {
                  value: u.replace("#", ""),
                  onChange: e => v("#" + e.target.value),
                  width: "160px",
                  height: "40px",
                  fontSize: "lg",
                  bg: "rgba(60, 60, 70, 0.9)",
                  color: "white",
                  borderRadius: "lg",
                  textAlign: "left",
                  pl: 4,
                  fontWeight: "bold",
                  maxLength: 6,
                  placeholder: "FE2727",
                  border: "1px solid #555",
                  _focus: {
                    borderColor: "#10A8FD",
                    boxShadow: "0 0 0 2px #10A8FD"
                  }
                })]
              })]
            }), (0, l.jsxs)(eh.x, {
              children: [(0, l.jsx)(b.x, {
                fontSize: "sm",
                color: "#fff9",
                mb: 3,
                fontWeight: "medium",
                children: n
              }), (0, l.jsx)(eR.r, {
                templateColumns: "repeat(3, 1fr)",
                gap: 2,
                w: "130px",
                children: o.map((e, r) => {
                  let o = i ? i(e, r) : (0, e1.Z)(t).toHexString().toUpperCase() === (0, e1.Z)(e).toHexString().toUpperCase();
                  return (0, l.jsx)(eh.x, {
                    w: "40px",
                    h: "40px",
                    borderRadius: "lg",
                    bg: e,
                    border: o ? "3px solid #fff" : "2px solid #fff4",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    _hover: {
                      transform: "scale(1.1)"
                    },
                    onClick: () => k(e, r)
                  }, "".concat(e, "-").concat(r))
                })
              })]
            })]
          })
        },
        e5 = r(1671),
        e3 = r(379);

      function e6(e) {
        let {
          onDownload: t,
          onRetry: r
        } = e, o = (0, ej.p)(), {
          t: n
        } = (0, s.useContext)(ed);
        return (0, l.jsx)(eh.x, {
          w: "100%",
          h: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 8,
          overflowY: "auto",
          sx: {
            "&::-webkit-scrollbar": {
              width: "8px"
            },
            "&::-webkit-scrollbar-track": {
              background: "rgba(0, 0, 0, 0.1)",
              borderRadius: "4px"
            },
            "&::-webkit-scrollbar-thumb": {
              background: "rgba(16, 168, 253, 0.3)",
              borderRadius: "4px"
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: "rgba(16, 168, 253, 0.5)"
            }
          },
          children: (0, l.jsx)(eh.x, {
            w: "100%",
            maxW: "700px",
            textAlign: "center",
            children: (0, l.jsxs)(g.g, {
              spacing: 6,
              children: [(0, l.jsx)(eh.x, {
                fontSize: "60px",
                background: "linear-gradient(135deg, #10A8FD 0%, #667eea 100%)",
                backgroundClip: "text",
                sx: {
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                },
                children: "â™«"
              }), (0, l.jsx)(b.x, {
                fontSize: "xl",
                fontWeight: "bold",
                color: "white",
                background: "linear-gradient(135deg, #10A8FD 0%, #667eea 100%)",
                backgroundClip: "text",
                sx: {
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                },
                children: n("770")
              }), (0, l.jsxs)(g.g, {
                spacing: 2,
                color: "rgba(255,255,255,0.7)",
                fontSize: "sm",
                children: [(0, l.jsx)(b.x, {
                  children: n("771")
                }), (0, l.jsx)(b.x, {
                  children: n("772")
                })]
              }), (0, l.jsx)(eh.x, {
                w: "100%",
                bg: "rgba(103, 126, 234, 0.15)",
                borderRadius: "lg",
                border: "1px solid rgba(103, 126, 234, 0.3)",
                p: 4,
                children: (0, l.jsxs)(g.g, {
                  spacing: 2.5,
                  align: "start",
                  fontSize: "sm",
                  color: "rgba(255,255,255,0.9)",
                  children: [(0, l.jsxs)(b.x, {
                    fontWeight: "bold",
                    color: "white",
                    fontSize: "sm",
                    children: ["\uD83D\uDCE5 ", n("773")]
                  }), (0, l.jsxs)(ew.k, {
                    align: "start",
                    gap: 2.5,
                    children: [(0, l.jsx)(eh.x, {
                      minW: "18px",
                      h: "18px",
                      borderRadius: "full",
                      bg: "#667eea",
                      color: "white",
                      fontSize: "xs",
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      children: "1"
                    }), (0, l.jsx)(b.x, {
                      flex: "1",
                      fontSize: "xs",
                      children: n("774")
                    })]
                  }), (0, l.jsxs)(ew.k, {
                    align: "start",
                    gap: 2.5,
                    children: [(0, l.jsx)(eh.x, {
                      minW: "18px",
                      h: "18px",
                      borderRadius: "full",
                      bg: "#667eea",
                      color: "white",
                      fontSize: "xs",
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      children: "2"
                    }), (0, l.jsx)(b.x, {
                      flex: "1",
                      fontSize: "xs",
                      children: n("775")
                    })]
                  }), (0, l.jsxs)(ew.k, {
                    align: "start",
                    gap: 2.5,
                    children: [(0, l.jsx)(eh.x, {
                      minW: "18px",
                      h: "18px",
                      borderRadius: "full",
                      bg: "#667eea",
                      color: "white",
                      fontSize: "xs",
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      children: "3"
                    }), (0, l.jsx)(b.x, {
                      flex: "1",
                      fontSize: "xs",
                      children: n("776")
                    })]
                  })]
                })
              }), (0, l.jsx)(eh.x, {
                w: "100%",
                bg: "rgba(16, 168, 253, 0.1)",
                borderRadius: "lg",
                border: "1px solid rgba(16, 168, 253, 0.2)",
                p: 4,
                children: (0, l.jsxs)(g.g, {
                  spacing: 1.5,
                  align: "start",
                  fontSize: "sm",
                  color: "rgba(255,255,255,0.8)",
                  children: [(0, l.jsxs)(b.x, {
                    fontWeight: "bold",
                    color: "white",
                    fontSize: "sm",
                    mb: 1,
                    children: ["âœ¨ ", n("777")]
                  }), (0, l.jsxs)(ew.k, {
                    align: "center",
                    gap: 2,
                    children: [(0, l.jsx)(eh.x, {
                      w: "5px",
                      h: "5px",
                      borderRadius: "full",
                      bg: "#10A8FD",
                      flexShrink: 0
                    }), (0, l.jsx)(b.x, {
                      fontSize: "xs",
                      children: n("778")
                    })]
                  }), (0, l.jsxs)(ew.k, {
                    align: "center",
                    gap: 2,
                    children: [(0, l.jsx)(eh.x, {
                      w: "5px",
                      h: "5px",
                      borderRadius: "full",
                      bg: "#10A8FD",
                      flexShrink: 0
                    }), (0, l.jsx)(b.x, {
                      fontSize: "xs",
                      children: n("779")
                    })]
                  }), (0, l.jsxs)(ew.k, {
                    align: "center",
                    gap: 2,
                    children: [(0, l.jsx)(eh.x, {
                      w: "5px",
                      h: "5px",
                      borderRadius: "full",
                      bg: "#10A8FD",
                      flexShrink: 0
                    }), (0, l.jsx)(b.x, {
                      fontSize: "xs",
                      children: n("780")
                    })]
                  }), (0, l.jsxs)(ew.k, {
                    align: "center",
                    gap: 2,
                    children: [(0, l.jsx)(eh.x, {
                      w: "5px",
                      h: "5px",
                      borderRadius: "full",
                      bg: "#10A8FD",
                      flexShrink: 0
                    }), (0, l.jsx)(b.x, {
                      fontSize: "xs",
                      children: n("781")
                    })]
                  })]
                })
              }), (0, l.jsxs)(ew.k, {
                gap: 3,
                w: "100%",
                mt: 3,
                children: [(0, l.jsx)(eb.z, {
                  flex: "1",
                  size: "md",
                  bg: "rgba(16, 168, 253, 0.2)",
                  color: "white",
                  border: "1px solid rgba(16, 168, 253, 0.5)",
                  _hover: {
                    bg: "rgba(16, 168, 253, 0.3)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 12px rgba(16, 168, 253, 0.4)"
                  },
                  transition: "all 0.2s",
                  onClick: () => {
                    r && r()
                  },
                  children: n("782")
                }), (0, l.jsx)(eb.z, {
                  flex: "1",
                  size: "md",
                  bgGradient: "linear(135deg, #10A8FD 0%, #667eea 100%)",
                  color: "white",
                  _hover: {
                    bgGradient: "linear(135deg, #0E96E3 0%, #5568d3 100%)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 12px rgba(16, 168, 253, 0.6)"
                  },
                  transition: "all 0.2s",
                  onClick: () => {
                    if (t) t();
                    else {
                      let e = document.createElement("a");
                      e.href = "/plugin/AuroraEngine.exe", e.download = "AuroraEngine.exe", document.body.appendChild(e), e.click(), document.body.removeChild(e), o({
                        title: n("786"),
                        description: n("787"),
                        status: "info",
                        duration: 5e3,
                        isClosable: !0,
                        position: "top"
                      })
                    }
                  },
                  children: n("783")
                })]
              }), (0, l.jsxs)(g.g, {
                spacing: 2,
                w: "100%",
                mt: 2,
                children: [(0, l.jsx)(eh.x, {
                  w: "100%",
                  bg: "rgba(255, 193, 7, 0.1)",
                  borderRadius: "md",
                  border: "1px solid rgba(255, 193, 7, 0.3)",
                  p: 2.5,
                  children: (0, l.jsxs)(ew.k, {
                    align: "center",
                    gap: 2,
                    children: [(0, l.jsx)(b.x, {
                      fontSize: "md",
                      flexShrink: 0,
                      children: "âš ï¸"
                    }), (0, l.jsx)(b.x, {
                      fontSize: "xs",
                      color: "rgba(255,255,255,0.7)",
                      children: n("784")
                    })]
                  })
                }), (0, l.jsx)(eh.x, {
                  w: "100%",
                  bg: "rgba(76, 175, 80, 0.1)",
                  borderRadius: "md",
                  border: "1px solid rgba(76, 175, 80, 0.3)",
                  p: 2.5,
                  children: (0, l.jsxs)(ew.k, {
                    align: "center",
                    gap: 2,
                    children: [(0, l.jsx)(b.x, {
                      fontSize: "md",
                      flexShrink: 0,
                      children: "\uD83D\uDCA1"
                    }), (0, l.jsx)(b.x, {
                      fontSize: "xs",
                      color: "rgba(255,255,255,0.7)",
                      children: n("785")
                    })]
                  })
                })]
              })]
            })
          })
        })
      }
      let e4 = (0, eP.E)(eh.x);
      var e8 = function(e) {
        let {
          initialVisualizerMode: t = i.ANIM_RAINBOW_SINUSOIDAL,
          initialAmplitude: r = 70,
          initialBackgroundMode: o = a.NONE,
          initialBackgroundBrightness: n = 100
        } = e, {
          t: c,
          connectedDevice: d,
          currentDeviceMode: u,
          deviceName: x,
          lightInfo: h,
          setLightInfo: p,
          updateKeyboardLightInfo: g,
          keyItemLayoutRef: f,
          keyLayoutInfoRef: y,
          keyItemColor: w,
          setKeyItemColor: v,
          keyLightColor: k,
          setKeyLightColor: j,
          curLightMode: S,
          currentTab: C,
          usbModeVendorId: D,
          usbModeProductId: I
        } = (0, s.useContext)(ed);
        null == f || f.current;
        let F = {
            VISUALIZER_MODE: "musicRhythm_visualizerMode",
            AMPLITUDE: "musicRhythm_amplitude",
            BACKGROUND_MODE: "musicRhythm_backgroundMode",
            BACKGROUND_BRIGHTNESS: "musicRhythm_backgroundBrightness"
          },
          [E, R] = (0, s.useState)(() => {
            try {
              let e = localStorage.getItem(F.VISUALIZER_MODE);
              return e ? parseInt(e) : t
            } catch (e) {
              return t
            }
          }),
          [A, M] = (0, s.useState)(() => {
            try {
              let e = localStorage.getItem(F.AMPLITUDE);
              return e ? parseInt(e) : r
            } catch (e) {
              return r
            }
          }),
          [_, L] = (0, s.useState)(() => {
            try {
              let e = localStorage.getItem(F.BACKGROUND_MODE);
              return e ? parseInt(e) : o
            } catch (e) {
              return o
            }
          }),
          [z, N] = (0, s.useState)(() => {
            try {
              let e = localStorage.getItem(F.BACKGROUND_BRIGHTNESS);
              return e ? parseInt(e) : n
            } catch (e) {
              return n
            }
          }),
          [T, O] = (0, s.useState)(!1),
          [W, B] = (0, s.useState)(!0),
          [P, U] = (0, s.useState)(!1),
          [K, V] = (0, s.useState)(null),
          [G, Y] = (0, s.useState)(!1),
          Z = (0, s.useRef)(null),
          J = (0, s.useRef)({
            visualizerMode: E,
            amplitude: A,
            backgroundMode: _,
            backgroundBrightness: z
          });
        (0, s.useEffect)(() => {
          J.current = {
            visualizerMode: E,
            amplitude: A,
            backgroundMode: _,
            backgroundBrightness: z
          }
        }, [E, A, _, z]), (0, s.useEffect)(() => {
          try {
            localStorage.setItem(F.VISUALIZER_MODE, E.toString()), localStorage.setItem(F.AMPLITUDE, A.toString()), localStorage.setItem(F.BACKGROUND_MODE, _.toString()), localStorage.setItem(F.BACKGROUND_BRIGHTNESS, z.toString())
          } catch (e) {
            console.error("[KBMusicRhythm] ä¿å­˜è®¾ç½®å¤±è´¥:", e)
          }
        }, [E, A, _, z]);
        let q = (0, s.useRef)(k),
          X = (0, s.useRef)(j),
          Q = (0, s.useRef)(d);
        (0, s.useEffect)(() => {
          q.current = k, X.current = j, Q.current = d
        }, [k, j, d]);
        let $ = (0, s.useRef)(new Map);
        (0, s.useEffect)(() => {
          if (!k) {
            $.current = new Map;
            return
          }
          let e = new Map;
          k.forEach((t, r) => {
            t && t.code && 0 !== t.code && e.set(t.code, r)
          }), $.current = e
        }, [k]);
        let ee = (0, s.useRef)(new Map),
          et = (0, s.useRef)(!1),
          er = (0, s.useMemo)(() => [{
            value: i.SOLID_BLACK,
            labelKey: "731"
          }, {
            value: i.STATIC_GREEN_YELLOW_RED,
            labelKey: "732"
          }, {
            value: i.STATIC_RAINBOW,
            labelKey: "733"
          }, {
            value: i.STATIC_RAINBOW_INVERSE,
            labelKey: "734"
          }, {
            value: i.ANIM_COLOR_WHEEL,
            labelKey: "735"
          }, {
            value: i.ANIM_SPECTRUM_CYCLE,
            labelKey: "736"
          }, {
            value: i.SOLID_WHITE,
            labelKey: "737"
          }, {
            value: i.SOLID_RED,
            labelKey: "738"
          }, {
            value: i.SOLID_ORANGE,
            labelKey: "739"
          }, {
            value: i.SOLID_YELLOW,
            labelKey: "740"
          }, {
            value: i.SOLID_BLUE,
            labelKey: "741"
          }, {
            value: i.SOLID_GREEN,
            labelKey: "742"
          }, {
            value: i.SOLID_CYAN,
            labelKey: "743"
          }, {
            value: i.DANCE,
            labelKey: "744"
          }, {
            value: i.SOLID_PURPLE,
            labelKey: "745"
          }, {
            value: i.STATIC_GREEN_WHITE_RED,
            labelKey: "746"
          }, {
            value: i.STATIC_BLUE_CYAN_WHITE,
            labelKey: "747"
          }, {
            value: i.STATIC_RED_WHITE_BLUE,
            labelKey: "748"
          }, {
            value: i.ANIM_RAINBOW_SINUSOIDAL,
            labelKey: "749"
          }, {
            value: i.ANIM_RAINBOW_HSV,
            labelKey: "750"
          }, {
            value: i.ANIM_COLOR_WHEEL_2,
            labelKey: "751"
          }, {
            value: i.ANIM_SINUSOIDAL_CYCLE,
            labelKey: "752"
          }, {
            value: i.AMBILIGHT,
            labelKey: "753"
          }], []),
          eo = (0, s.useMemo)(() => [{
            value: a.NONE,
            labelKey: "761"
          }, {
            value: a.GREEN_YELLOW_RED,
            labelKey: "732"
          }, {
            value: a.RAINBOW,
            labelKey: "733"
          }, {
            value: a.RAINBOW_INVERSE,
            labelKey: "734"
          }, {
            value: a.COLOR_WHEEL,
            labelKey: "735"
          }, {
            value: a.SPECTRUM_CYCLE,
            labelKey: "736"
          }, {
            value: a.SOLID_WHITE,
            labelKey: "737"
          }, {
            value: a.SOLID_RED,
            labelKey: "738"
          }, {
            value: a.SOLID_ORANGE,
            labelKey: "739"
          }, {
            value: a.SOLID_YELLOW,
            labelKey: "740"
          }, {
            value: a.SOLID_BLUE,
            labelKey: "741"
          }, {
            value: a.SOLID_GREEN,
            labelKey: "742"
          }, {
            value: a.SOLID_CYAN,
            labelKey: "743"
          }], []),
          en = (0, s.useCallback)(async () => {
            B(!0);
            let e = await H.checkServer();
            return O(e), B(!1), e
          }, []),
          ei = (0, s.useCallback)(async () => {
            let e = null == f ? void 0 : f.current,
              t = null == y ? void 0 : y.current;
            if (!e || 0 === e.length || !t) return !1;
            let r = {
                name: x || (null == d ? void 0 : d.productName) || "K".concat(e.length),
                vendorId: (null == d ? void 0 : d.vendorId) || 0,
                productId: (null == d ? void 0 : d.productId) || 0,
                usbModeVendorId: D,
                usbModeProductId: I,
                deviceMode: u,
                layouts: {
                  rows: t.height || 6,
                  cols: t.width || 18,
                  keys: e.map(e => ({
                    row: e.row,
                    col: e.col,
                    code: e.code,
                    index: e.index,
                    name: e.name || "Key".concat(e.index)
                  }))
                }
              },
              o = await H.sendKeyboardLayout(r);
            return o && U(!0), o
          }, [f, y, d, u, x, D, I]),
          ea = (0, s.useMemo)(() => "kb-light" === C && 128 === S && !!d, [C, S, d]),
          el = (0, s.useRef)({
            isPluginRunning: T,
            isLayoutSent: P,
            isMusicRhythmActive: ea,
            currentTab: C,
            curLightMode: S,
            currentDeviceMode: u,
            deviceName: x
          });
        (0, s.useEffect)(() => {
          el.current = {
            isPluginRunning: T,
            isLayoutSent: P,
            isMusicRhythmActive: ea,
            currentTab: C,
            curLightMode: S,
            currentDeviceMode: u,
            deviceName: x
          }
        }, [T, P, ea, C, S, u, x]);
        let es = (0, s.useCallback)(async function(e, t, r, o) {
            let n = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            if (Z.current && clearTimeout(Z.current), G && !n) return;
            let i = async () => {
              Y(!0);
              try {
                await H.setConfig({
                  mode: e,
                  amplitude: t,
                  backmode: r,
                  brightness: o
                }, ea)
              } finally {
                Y(!1)
              }
            };
            n ? await i() : Z.current = setTimeout(async () => {
              await i()
            }, 300)
          }, [G, ea]),
          ec = (0, s.useCallback)(() => {
            console.error("âš ï¸ éŸ³ä¹å¾‹åŠ¨æ•°æ®èŽ·å–è¶…æ—¶ï¼ˆè¶…è¿‡2ç§’ï¼‰ï¼Œæ’ä»¶å¯èƒ½å·²æ–­å¼€è¿žæŽ¥"), O(!1), U(!1)
          }, []),
          eu = (0, s.useCallback)(e => {
            if (!et.current) {
              et.current = !0;
              try {
                V(e);
                let t = q.current,
                  r = X.current,
                  o = $.current;
                if (e.keys && e.keys.length > 0 && t) {
                  let n = [...t],
                    i = new Map,
                    a = 0,
                    l = 0,
                    s = 0;
                  e.keys.forEach(e => {
                    if (0 === e.keyCode) {
                      s++;
                      return
                    }
                    let t = o.get(e.keyCode);
                    if (void 0 !== t && n[t]) {
                      let r = n[t].color;
                      n[t] = { ...n[t],
                        color: e.color
                      }, i.set(e.keyCode, e.color), r !== e.color && a++
                    } else ++l <= 3 && console.warn("[KBMusicRhythm] æœªæ‰¾åˆ°åŒ¹é…æŒ‰é”®: keyCode=".concat(e.keyCode, ", keyIndex=").concat(e.keyIndex))
                  }), i.size > 0 && (r(n), Q.current, i.forEach((e, t) => {
                    ee.current.set(t, e)
                  }))
                }
              } finally {
                et.current = !1
              }
            }
          }, []);
        (0, s.useEffect)(() => {
          let e = null == f ? void 0 : f.current;
          return (async () => {
            await en() && e && e.length > 0 && setTimeout(() => {
              ei()
            }, 100)
          })(), H.setReconnectCallback(() => {
            el.current, O(!0), U(!1), setTimeout(async () => {
              if (await ei()) {
                let e = J.current,
                  t = el.current;
                await H.setConfig({
                  mode: e.visualizerMode,
                  amplitude: e.amplitude,
                  backmode: e.backgroundMode,
                  brightness: e.backgroundBrightness
                }, t.isMusicRhythmActive), el.current.isMusicRhythmActive && H.startPolling(50, eu, ec)
              }
            }, 100)
          }), () => {
            console.log("[KBMusicRhythm] ç»„ä»¶å¸è½½ï¼Œåœæ­¢è½®è¯¢å¹¶é€šçŸ¥æœåŠ¡å™¨"), H.setReconnectCallback(null), H.stopPolling();
            let e = J.current;
            H.setConfig({
              mode: e.visualizerMode,
              amplitude: e.amplitude,
              backmode: e.backgroundMode,
              brightness: e.backgroundBrightness
            }, !1), Z.current && (clearTimeout(Z.current), Z.current = null)
          }
        }, [en, ei, f, y, d, ea, eu, ec]), (0, s.useEffect)(() => {
          T && (ea ? (console.log("[KBMusicRhythm] è¿›å…¥éŸ³ä¹å¾‹åŠ¨æ¨¡å¼ï¼ŒåŒæ­¥é…ç½®åˆ°æœåŠ¡å™¨ (shouldSend=1)"), H.setConfig({
            mode: E,
            amplitude: A,
            backmode: _,
            brightness: z
          }, !0)) : (console.log("[KBMusicRhythm] ç¦»å¼€éŸ³ä¹å¾‹åŠ¨æ¨¡å¼ï¼Œé€šçŸ¥æœåŠ¡å™¨åœæ­¢å‘é€æ•°æ® (shouldSend=0)"), H.stopPolling(), H.setConfig({
            mode: E,
            amplitude: A,
            backmode: _,
            brightness: z
          }, !1)))
        }, [ea, T, E, A, _, z]), (0, s.useEffect)(() => {
          if (T && P && ea) return console.log("[KBMusicRhythm] è¿›å…¥éŸ³ä¹å¾‹åŠ¨æ¨¡å¼ï¼Œå¼€å§‹è½®è¯¢æ•°æ®"), H.startPolling(50, eu, ec), () => {
            console.log("[KBMusicRhythm] åœæ­¢è½®è¯¢ï¼ˆç»„ä»¶æ¸…ç†æˆ–æ¡ä»¶å˜åŒ–ï¼‰"), H.stopPolling()
          }
        }, [T, P, ea, eu, ec]), (0, s.useEffect)(() => {
          let e = () => {
            if (document.hidden) {
              if (console.log("[KBMusicRhythm] é¡µé¢åˆ‡æ¢åˆ°åŽå°ï¼Œæš‚åœè½®è¯¢ï¼ˆé¿å…æµè§ˆå™¨é™åˆ¶å¯¼è‡´å¡é¡¿ï¼‰"), H.stopPolling(), T) {
                console.log("[KBMusicRhythm] é€šçŸ¥æœåŠ¡å™¨ï¼šé¡µé¢åˆ‡æ¢åˆ°åŽå° (isPageVisible=0)");
                let e = J.current;
                H.setConfig({
                  mode: e.visualizerMode,
                  amplitude: e.amplitude,
                  backmode: e.backgroundMode,
                  brightness: e.backgroundBrightness
                }, !0, !1)
              }
            } else if (T && P && ea) {
              console.log("[KBMusicRhythm] é¡µé¢åˆ‡æ¢å›žå‰å°ï¼Œæ¢å¤è½®è¯¢"), console.log("[KBMusicRhythm] é€šçŸ¥æœåŠ¡å™¨ï¼šé¡µé¢åˆ‡æ¢å›žå‰å° (isPageVisible=1)");
              let e = J.current;
              H.setConfig({
                mode: e.visualizerMode,
                amplitude: e.amplitude,
                backmode: e.backgroundMode,
                brightness: e.backgroundBrightness
              }, !0, !0), H.startPolling(50, eu, ec)
            }
          };
          return document.addEventListener("visibilitychange", e), () => {
            document.removeEventListener("visibilitychange", e)
          }
        }, [T, P, ea, eu, ec]);
        let ex = e => {
            M(e), es(E, e, _, z, !1)
          },
          ep = e => {
            N(e), es(E, A, _, e, !1)
          },
          eg = async () => {
            await en()
          },
          em = (e, t) => {
            if (e.preventDefault(), !d) return;
            let r = e.deltaY > 0 ? -1 : 1;
            if ("amplitude" === t) {
              let e = Math.max(0, Math.min(100, A + r));
              e !== A && ex(e)
            } else if ("brightness" === t) {
              let e = Math.max(0, Math.min(100, z + r));
              e !== z && ep(e)
            }
          };
        return W ? (0, l.jsx)(eh.x, {
          w: "100%",
          h: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          children: (0, l.jsxs)(ew.k, {
            direction: "column",
            align: "center",
            gap: 4,
            children: [(0, l.jsx)(m.$, {
              size: "xl",
              color: "#10A8FD",
              thickness: "4px"
            }), (0, l.jsx)(b.x, {
              fontSize: "lg",
              color: "white",
              children: c("722")
            })]
          })
        }) : T ? (0, l.jsx)(eh.x, {
          w: "100%",
          h: "100%",
          children: (0, l.jsxs)(ew.k, {
            direction: "column",
            gap: 6,
            h: "100%",
            children: [(0, l.jsx)(ew.k, {
              align: "center",
              justify: "space-between",
              children: (0, l.jsxs)(ew.k, {
                align: "center",
                children: [(0, l.jsx)(eh.x, {
                  w: "3px",
                  h: "20px",
                  borderRadius: "md",
                  mr: 3,
                  bg: "#10A8FD"
                }), (0, l.jsx)(b.x, {
                  fontSize: "lg",
                  fontWeight: "bold",
                  color: "white",
                  children: c("721")
                })]
              })
            }), (0, l.jsxs)(e4, {
              bg: "rgba(30, 35, 40, 0.3)",
              backdropFilter: "blur(10px)",
              borderRadius: "xl",
              p: 4,
              border: "1px solid rgba(16, 168, 253, 0.2)",
              initial: {
                opacity: 0,
                y: 10
              },
              animate: {
                opacity: 1,
                y: 0
              },
              transition: {
                duration: .4
              },
              children: [(0, l.jsxs)(eh.x, {
                mb: 4,
                children: [(0, l.jsx)(b.x, {
                  fontSize: "sm",
                  fontWeight: "bold",
                  color: "white",
                  mb: 2,
                  children: c("730")
                }), (0, l.jsx)(e5.P, {
                  value: E,
                  onChange: e => {
                    let t = parseInt(e.target.value);
                    R(t), es(t, A, _, z, !0)
                  },
                  bg: "rgba(30, 35, 40, 0.8)",
                  borderColor: "rgba(16, 168, 253, 0.5)",
                  color: "white",
                  size: "md",
                  isDisabled: !d,
                  _hover: {
                    borderColor: "#10A8FD"
                  },
                  _focus: {
                    borderColor: "#10A8FD",
                    boxShadow: "0 0 0 1px #10A8FD"
                  },
                  sx: {
                    option: {
                      bg: "rgba(30, 35, 40, 1)",
                      color: "white"
                    }
                  },
                  children: er.map(e => (0, l.jsx)("option", {
                    value: e.value,
                    children: c(e.labelKey)
                  }, e.value))
                })]
              }), (0, l.jsxs)(eh.x, {
                children: [(0, l.jsx)(b.x, {
                  fontSize: "sm",
                  fontWeight: "bold",
                  color: "white",
                  mb: 2,
                  children: c("725")
                }), (0, l.jsxs)(eh.x, {
                  onWheel: e => em(e, "amplitude"),
                  children: [(0, l.jsxs)(e3.iR, {
                    value: A,
                    onChange: ex,
                    min: 0,
                    max: 100,
                    step: 1,
                    isDisabled: !d,
                    children: [(0, l.jsx)(e3.Uj, {
                      bg: "rgba(107, 114, 128, 0.5)",
                      h: "6px",
                      children: (0, l.jsx)(e3.Ms, {
                        bg: "#10A8FD"
                      })
                    }), (0, l.jsx)(e3.gs, {
                      boxSize: 5,
                      bg: "#10A8FD",
                      border: "2px solid white",
                      _focus: {
                        boxShadow: "0 0 0 3px rgba(16, 168, 253, 0.3)"
                      }
                    })]
                  }), (0, l.jsx)(b.x, {
                    fontSize: "lg",
                    fontWeight: "bold",
                    color: "#10A8FD",
                    textAlign: "center",
                    mt: 2,
                    children: A
                  })]
                })]
              })]
            }), (0, l.jsxs)(e4, {
              bg: "rgba(30, 35, 40, 0.3)",
              backdropFilter: "blur(10px)",
              borderRadius: "xl",
              p: 4,
              border: "1px solid rgba(16, 168, 253, 0.2)",
              initial: {
                opacity: 0,
                y: 10
              },
              animate: {
                opacity: 1,
                y: 0
              },
              transition: {
                duration: .4,
                delay: .1
              },
              children: [(0, l.jsxs)(eh.x, {
                mb: 4,
                children: [(0, l.jsx)(b.x, {
                  fontSize: "sm",
                  fontWeight: "bold",
                  color: "white",
                  mb: 2,
                  children: c("760")
                }), (0, l.jsx)(e5.P, {
                  value: _,
                  onChange: e => {
                    let t = parseInt(e.target.value);
                    L(t), es(E, A, t, z, !0)
                  },
                  bg: "rgba(30, 35, 40, 0.8)",
                  borderColor: "rgba(16, 168, 253, 0.5)",
                  color: "white",
                  size: "md",
                  isDisabled: !d,
                  _hover: {
                    borderColor: "#10A8FD"
                  },
                  _focus: {
                    borderColor: "#10A8FD",
                    boxShadow: "0 0 0 1px #10A8FD"
                  },
                  sx: {
                    option: {
                      bg: "rgba(30, 35, 40, 1)",
                      color: "white"
                    }
                  },
                  children: eo.map(e => (0, l.jsx)("option", {
                    value: e.value,
                    children: c(e.labelKey)
                  }, e.value))
                })]
              }), (0, l.jsxs)(eh.x, {
                children: [(0, l.jsx)(b.x, {
                  fontSize: "sm",
                  fontWeight: "bold",
                  color: "white",
                  mb: 2,
                  children: c("727")
                }), (0, l.jsxs)(eh.x, {
                  onWheel: e => em(e, "brightness"),
                  children: [(0, l.jsxs)(e3.iR, {
                    value: z,
                    onChange: ep,
                    min: 0,
                    max: 100,
                    step: 1,
                    isDisabled: !d,
                    children: [(0, l.jsx)(e3.Uj, {
                      bg: "rgba(107, 114, 128, 0.5)",
                      h: "6px",
                      children: (0, l.jsx)(e3.Ms, {
                        bg: "#10A8FD"
                      })
                    }), (0, l.jsx)(e3.gs, {
                      boxSize: 5,
                      bg: "#10A8FD",
                      border: "2px solid white",
                      _focus: {
                        boxShadow: "0 0 0 3px rgba(16, 168, 253, 0.3)"
                      }
                    })]
                  }), (0, l.jsx)(b.x, {
                    fontSize: "lg",
                    fontWeight: "bold",
                    color: "#10A8FD",
                    textAlign: "center",
                    mt: 2,
                    children: z
                  })]
                })]
              })]
            })]
          })
        }) : (0, l.jsx)(e6, {
          onRetry: eg
        })
      };
      class e7 extends s.Component {
        static getDerivedStateFromError(e) {
          return {
            hasError: !0,
            error: e,
            errorInfo: null
          }
        }
        componentDidCatch(e, t) {
          console.error("\uD83D\uDD34 [MusicRhythmErrorBoundary] æ•èŽ·åˆ°é”™è¯¯:", e), console.error("\uD83D\uDD34 [MusicRhythmErrorBoundary] é”™è¯¯å †æ ˆ:", t.componentStack), this.setState({
            error: e,
            errorInfo: t
          })
        }
        render() {
          return this.state.hasError ? this.props.fallback ? this.props.fallback : (0, l.jsx)(eh.x, {
            w: "100%",
            h: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bg: "rgba(30, 35, 40, 0.5)",
            borderRadius: "xl",
            border: "1px solid rgba(255, 0, 0, 0.3)",
            children: (0, l.jsxs)(ew.k, {
              direction: "column",
              align: "center",
              gap: 4,
              p: 8,
              maxW: "500px",
              children: [(0, l.jsx)(b.x, {
                fontSize: "2xl",
                color: "red.400",
                children: "âš ï¸"
              }), (0, l.jsx)(b.x, {
                fontSize: "lg",
                fontWeight: "bold",
                color: "white",
                textAlign: "center",
                children: "éŸ³ä¹å¾‹åŠ¨åŠŸèƒ½å‡ºçŽ°é”™è¯¯"
              }), (0, l.jsx)(b.x, {
                fontSize: "sm",
                color: "rgba(255,255,255,0.7)",
                textAlign: "center",
                children: "æŠ±æ­‰ï¼ŒéŸ³ä¹å¾‹åŠ¨åŠŸèƒ½é‡åˆ°äº†ä¸€äº›é—®é¢˜ã€‚è¿™å¯èƒ½æ˜¯ç”±äºŽæ’ä»¶æœåŠ¡å¼‚å¸¸æˆ–ç½‘ç»œé—®é¢˜å¯¼è‡´çš„ã€‚"
              }), !1, (0, l.jsxs)(ew.k, {
                gap: 3,
                children: [(0, l.jsx)(eb.z, {
                  size: "md",
                  colorScheme: "cyan",
                  onClick: this.handleReset,
                  children: "é‡æ–°å°è¯•"
                }), (0, l.jsx)(eb.z, {
                  size: "md",
                  variant: "outline",
                  colorScheme: "whiteAlpha",
                  onClick: () => window.location.reload(),
                  children: "åˆ·æ–°é¡µé¢"
                })]
              })]
            })
          }) : this.props.children
        }
        constructor(e) {
          super(e), this.handleReset = () => {
            this.setState({
              hasError: !1,
              error: null,
              errorInfo: null
            })
          }, this.state = {
            hasError: !1,
            error: null,
            errorInfo: null
          }
        }
      }
      let e9 = (0, eP.E)(eh.x),
        te = (0, eP.E)(ew.k),
        tt = {
          æµ å…‰ æº¢ å½©: "â‰ˆ",
          ç¹ æ˜ Ÿç‚¹ ç‚¹: "âœ¦",
          ä¸ Šä¸‹ æ¶ Ÿæ¼ ª: "â¥®",
          ä¸€ é”® æ¿€ å…‰: "âž¤",
          å…‰ è°± å¾ ªçŽ¯: "â—¯",
          ä¸‡ èŠ± ç­’: "â—",
          å¸¸ äº®: "â—",
          å‘¼ å¸: "â—‹",
          äº¤ å‰ æµ å…‰: "âœ•",
          æµ® å…‰ æŽ å½±: "â—Ž",
          è¸ é› ªæ— ç—•: "â…",
          æ± Ÿå±± èŠ± å·: "âœ¿",
          è›‡ å½¢ èœ¿ èœ’: "âˆ¿",
          é¾™ å· é£ Žæš´: "â—‰",
          å·¦ å³ å†² å‡»: "â‡„",
          é›¨ è½ è½© åº­: "â‹®",
          æ—‹ è½¬ é£ Žè½¦: "âŠ›",
          æ­£ å¼¦ å…‰ æ³¢: "âˆ¿",
          çƒˆé©¬ å¥” è…¾: "â†’",
          å å­— äº¤ ç«: "âœš",
          è‡ ªå® šä¹‰ ç¯ å…‰: "âœŽ",
          éŸ³ ä¹ å¾‹ åŠ¨: "â™«",
          å…³ é—­ ç¯ å…‰: "\xa4"
        },
        tr = ["#FF0000", "#FFA500", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#FF00FF", "#FFFFFF", "#000000"],
        to = (e, t) => t.find(t => t.value === e) || null,
        tn = (e, t) => {
          let r = to(e, t);
          return r ? r.palette ? "palette" : r.gradientIndex ? "gradientIndex" : r.colorIndex ? "colorIndex" : null : null
        },
        ti = (e, t) => {
          let r = to(e, t);
          return r && r.speed
        },
        ta = (e, t) => {
          let r = to(e, t);
          return r && r.brightness
        };
      var tl = function() {
        let {
          t: e,
          connectedDevice: t,
          connectMode: r,
          deviceOnline: o,
          isDriverSwitchBlocking: n,
          enforceMusicRhythmEntryDelay: i,
          curLightMode: a,
          setCurLightMode: c,
          lightConfig: d,
          lightInfo: u,
          setLightInfo: x,
          updateKeyboardLightInfo: h,
          updateCurLightMode: p,
          currentColor: g,
          setCurrentColor: m,
          lightPreview: f,
          setLightPreview: y,
          keyItemColor: w,
          setKeyItemColor: v,
          customLightGroup: k,
          setCustomLightGroup: j,
          customLightColors: S,
          setCustomLightColors: C,
          updateCustomLightColors: D,
          updateCustomLightGroup: I
        } = (0, s.useContext)(ed), [F, E] = (0, s.useState)(a), [R, A] = (0, s.useState)(5), [M, _] = (0, s.useState)(4), [L, z] = (0, s.useState)("#FF0000"), [N, T] = (0, s.useState)(0);
        (0, s.useEffect)(() => {
          E(a);
          let e = u.find(e => e.mode === a);
          e && (void 0 !== e.brightness && A(e.brightness), void 0 !== e.speed && _(e.speed), void 0 !== e.colorindex && T(e.colorindex))
        }, [a, u]), (0, s.useEffect)(() => {
          23 === a && z(g)
        }, [a, g]), (0, s.useEffect)(() => {
          if (23 === a) {
            let e = [];
            1 === k ? e = S.group1 : 2 === k ? e = S.group2 : 3 === k && (e = S.group3), e && e.length > 0 && v(e)
          }
        }, [k, S, a, v]), (0, s.useEffect)(() => {
          "2.4G" === r && f && (console.log("æ£€æµ‹åˆ° 2.4G æ¨¡å¼ï¼Œè‡ªåŠ¨å…³é—­ç¯å…‰é¢„è§ˆ"), y(!1))
        }, [r, f, y]);
        let O = async e => {
            if (n) {
              console.warn("é©±åŠ¨æ­£åœ¨å‡†å¤‡ä¸­ï¼Œæš‚æ— æ³•åˆ‡æ¢ç¯å…‰æ¨¡å¼");
              return
            }
            if (E(e), c(e), p(e), 128 === e && f && y(!1), 128 === e && await i(), t) try {
              if (23 === e) {
                let e = [];
                1 === k ? e = S.group1 : 2 === k ? e = S.group2 : 3 === k && (e = S.group3), e && e.length > 0 ? (await t.setUserLightAllKeysData(e, k), console.log("å·²å‘é€è‡ªå®šä¹‰ç¯å…‰ç»„".concat(k, "æ•°æ®åˆ°è®¾å¤‡"))) : console.warn("è‡ªå®šä¹‰ç¯å…‰ç»„".concat(k, "é¢œè‰²æ•°æ®ä¸ºç©º"))
              } else {
                let r = u.find(t => t.mode === e);
                if (!r) {
                  console.error("æœªæ‰¾åˆ°ç¯å…‰æ¨¡å¼é…ç½®:", e);
                  return
                }
                await t.setLightMode(r)
              }
            } catch (e) {
              console.error("è®¾ç½®ç¯å…‰æ¨¡å¼å¤±è´¥:", e)
            }
          },
          W = async e => {
            A(e);
            let r = u.map(t => t.mode === F ? { ...t,
                brightness: e
              } : t),
              o = r.find(e => e.mode === F);
            if (!o) {
              console.error("æœªæ‰¾åˆ°ç¯å…‰æ¨¡å¼é…ç½®:", F);
              return
            }
            if (x(r), h(r), t) try {
              await t.setLightMode(o)
            } catch (e) {
              console.error("è®¾ç½®ç¯å…‰äº®åº¦å¤±è´¥:", e)
            }
          },
          B = async e => {
            _(e);
            let r = u.map(t => t.mode === F ? { ...t,
                speed: e
              } : t),
              o = r.find(e => e.mode === F);
            if (!o) {
              console.error("æœªæ‰¾åˆ°ç¯å…‰æ¨¡å¼é…ç½®:", F);
              return
            }
            if (x(r), h(r), t) try {
              await t.setLightMode(o)
            } catch (e) {
              console.error("è®¾ç½®ç¯å…‰é€Ÿåº¦å¤±è´¥:", e)
            }
          },
          P = (e, t) => {
            e.preventDefault();
            let r = e.deltaY > 0 ? -1 : 1;
            if ("brightness" === t) {
              let e = Math.max(1, Math.min(5, R + r));
              e !== R && W(e)
            } else if ("speed" === t) {
              let e = Math.max(1, Math.min(5, M + r));
              e !== M && B(e)
            }
          },
          U = async e => {
            T(e);
            let r = u.map(t => t.mode === F ? { ...t,
                colorindex: e
              } : t),
              o = r.find(e => e.mode === F);
            if (!o) {
              console.error("æœªæ‰¾åˆ°ç¯å…‰æ¨¡å¼é…ç½®:", F);
              return
            }
            if (x(r), h(r), t) try {
              await t.setLightMode(o)
            } catch (e) {
              console.error("è®¾ç½®é¢œè‰²ç´¢å¼•å¤±è´¥:", e)
            }
          },
          H = async e => {
            if (23 === a) m(e);
            else {
              z(e);
              let r = u.find(e => e.mode === F);
              if (r) {
                let o = parseInt(e.replace("#", ""), 16);
                if (r.color_value1 = o, x(u), h(u), t) try {
                  await t.setLightMode(r)
                } catch (e) {
                  console.error("è®¾ç½®é¢œè‰²å¤±è´¥:", e)
                }
              }
            }
          };
        return (0, l.jsx)(e9, {
          w: "100%",
          h: "100%",
          position: "relative",
          overflow: "hidden",
          initial: {
            opacity: 0,
            y: 20
          },
          animate: {
            opacity: 1,
            y: 0
          },
          transition: {
            duration: .5,
            ease: "easeOut"
          },
          children: (0, l.jsxs)(te, {
            direction: "column",
            h: "100%",
            initial: {
              opacity: 0,
              scale: .95
            },
            animate: {
              opacity: 1,
              scale: 1
            },
            transition: {
              duration: .6,
              delay: .1,
              ease: "easeOut"
            },
            children: [(0, l.jsx)(e9, {
              w: "100%",
              h: "auto",
              mb: 1,
              px: 0,
              pt: 1,
              pb: 1,
              position: "relative",
              borderRadius: "md",
              initial: {
                opacity: 0,
                y: 20
              },
              animate: {
                opacity: 1,
                y: 0
              },
              transition: {
                duration: .6,
                delay: .2,
                ease: "easeOut"
              },
              children: (0, l.jsx)(eh.x, {
                w: "100%",
                maxWidth: "1000px",
                mx: "auto",
                children: (0, l.jsx)(eB, {})
              })
            }), (0, l.jsx)(e9, {
              flex: "1",
              borderRadius: "sm",
              overflow: "hidden",
              p: 2,
              initial: {
                opacity: 0,
                y: 20
              },
              animate: {
                opacity: 1,
                y: 0
              },
              transition: {
                duration: .6,
                delay: .3,
                ease: "easeOut"
              },
              children: (0, l.jsxs)(ew.k, {
                gap: 2,
                h: "100%",
                children: [(0, l.jsxs)(e9, {
                  bg: "rgba(30, 35, 40, 0.5)",
                  backdropFilter: "blur(30px)",
                  borderRadius: "xl",
                  border: "1px solid rgba(16, 168, 253, 0.4)",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
                  p: 6,
                  flex: "1",
                  display: "flex",
                  flexDirection: "column",
                  initial: {
                    opacity: 0,
                    x: -20
                  },
                  animate: {
                    opacity: 1,
                    x: 0
                  },
                  transition: {
                    duration: .6,
                    delay: .4,
                    ease: "easeOut"
                  },
                  children: [(0, l.jsxs)(ew.k, {
                    align: "center",
                    justify: "space-between",
                    mb: 6,
                    children: [(0, l.jsxs)(ew.k, {
                      align: "center",
                      children: [(0, l.jsx)(eh.x, {
                        w: "3px",
                        h: "20px",
                        borderRadius: "md",
                        mr: 3,
                        bg: "#10A8FD"
                      }), (0, l.jsx)(b.x, {
                        fontSize: "lg",
                        fontWeight: "bold",
                        color: "white",
                        children: e("370")
                      })]
                    }), 128 !== F && "2.4G" !== r && (0, l.jsxs)(ew.k, {
                      align: "center",
                      gap: 2,
                      children: [(0, l.jsx)(b.x, {
                        fontSize: "sm",
                        color: "rgba(255,255,255,0.7)",
                        children: e("377")
                      }), (0, l.jsx)(e$.r, {
                        colorScheme: "cyan",
                        isChecked: f,
                        onChange: e => y(e.target.checked),
                        size: "md"
                      })]
                    })]
                  }), (0, l.jsx)(eh.x, {
                    flex: "1",
                    children: (0, l.jsx)(eR.r, {
                      templateColumns: "repeat(5, 1fr)",
                      gap: 3,
                      maxH: "400px",
                      overflowY: "auto",
                      css: {
                        "&::-webkit-scrollbar": {
                          width: "4px"
                        },
                        "&::-webkit-scrollbar-track": {
                          width: "6px",
                          background: "rgba(0,0,0,0.1)"
                        },
                        "&::-webkit-scrollbar-thumb": {
                          background: "rgba(255,255,255,0.3)",
                          borderRadius: "24px"
                        }
                      },
                      children: d.current.map((t, r) => (0, l.jsxs)(eh.x, {
                        p: 2,
                        borderRadius: "lg",
                        cursor: "pointer",
                        bg: F === t.value ? "#10A8FD" : "rgba(255,255,255,0.08)",
                        color: (t.value, "white"),
                        fontWeight: F === t.value ? "bold" : "normal",
                        fontSize: "sm",
                        border: F === t.value ? "2px solid #fff" : "2px solid transparent",
                        transition: "all 0.18s",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        minH: "50px",
                        _hover: {
                          bg: F === t.value ? void 0 : "rgba(255,255,255,0.16)"
                        },
                        onClick: () => O(t.value),
                        children: [(0, l.jsx)(eh.x, {
                          mr: 2,
                          fontSize: "lg",
                          children: tt[t.name] || "\uD83D\uDCA1"
                        }), (0, l.jsx)(b.x, {
                          fontSize: "sm",
                          color: (t.value, "white !important"),
                          children: e(t.lang)
                        })]
                      }, t.value))
                    })
                  })]
                }), (0, l.jsx)(e9, {
                  bg: "rgba(30, 35, 40, 0.5)",
                  backdropFilter: "blur(30px)",
                  borderRadius: "xl",
                  border: "1px solid rgba(16, 168, 253, 0.4)",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
                  p: 6,
                  flex: "1",
                  display: "flex",
                  flexDirection: "column",
                  initial: {
                    opacity: 0,
                    x: 20
                  },
                  animate: {
                    opacity: 1,
                    x: 0
                  },
                  transition: {
                    duration: .6,
                    delay: .5,
                    ease: "easeOut"
                  },
                  children: 128 === F ? o ? (0, l.jsx)(eh.x, {
                    w: "100%",
                    h: "100%",
                    children: (0, l.jsx)(e7, {
                      children: (0, l.jsx)(e8, {})
                    })
                  }) : (0, l.jsxs)(ew.k, {
                    w: "100%",
                    h: "100%",
                    align: "center",
                    justify: "center",
                    direction: "column",
                    color: "rgba(255,255,255,0.8)",
                    textAlign: "center",
                    children: [(0, l.jsx)(b.x, {
                      fontSize: "lg",
                      mb: 2,
                      children: e("49")
                    }), (0, l.jsx)(b.x, {
                      fontSize: "sm",
                      color: "rgba(255,255,255,0.6)",
                      children: e("377")
                    })]
                  }) : (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)(ew.k, {
                      align: "center",
                      mb: 6,
                      children: [(0, l.jsx)(eh.x, {
                        w: "3px",
                        h: "20px",
                        borderRadius: "md",
                        mr: 3,
                        bg: "#10A8FD"
                      }), (0, l.jsx)(b.x, {
                        fontSize: "lg",
                        fontWeight: "bold",
                        color: "white",
                        children: e("376")
                      })]
                    }), (ta(F, d.current) || ti(F, d.current)) && (0, l.jsx)(e9, {
                      bg: "rgba(30, 35, 40, 0.3)",
                      backdropFilter: "blur(10px)",
                      borderRadius: "xl",
                      p: 3,
                      mb: 6,
                      border: "1px solid rgba(16, 168, 253, 0.2)",
                      initial: {
                        opacity: 0,
                        y: 20
                      },
                      animate: {
                        opacity: 1,
                        y: 0
                      },
                      transition: {
                        duration: .6,
                        delay: .6,
                        ease: "easeOut"
                      },
                      children: (0, l.jsx)(ew.k, {
                        direction: "column",
                        gap: 4,
                        children: (0, l.jsxs)(ew.k, {
                          direction: "row",
                          gap: 3,
                          align: "center",
                          children: [ta(F, d.current) && (0, l.jsxs)(ew.k, {
                            flex: "1",
                            align: "center",
                            gap: 3,
                            children: [(0, l.jsx)(b.x, {
                              fontSize: "md",
                              fontWeight: "bold",
                              color: "white",
                              minW: "40px",
                              children: e("380")
                            }), (0, l.jsx)(eh.x, {
                              position: "relative",
                              flex: "1",
                              onWheel: e => P(e, "brightness"),
                              children: (0, l.jsxs)(ew.k, {
                                align: "center",
                                gap: 2,
                                flex: "1",
                                children: [
                                  [1, 2, 3, 4, 5].map(e => (0, l.jsx)(eh.x, {
                                    flex: "1",
                                    h: "24px",
                                    borderRadius: "sm",
                                    border: "1px solid rgba(255,255,255,0.3)",
                                    bg: e <= R ? "#10A8FD" : "#6B7280",
                                    cursor: "pointer",
                                    transition: "all 0.2s",
                                    _hover: {
                                      bg: e <= R ? "#0E96E3" : "#9CA3AF"
                                    },
                                    onClick: () => W(e)
                                  }, e)), (0, l.jsx)(b.x, {
                                    fontSize: "sm",
                                    fontWeight: "bold",
                                    color: "#10A8FD",
                                    ml: 4,
                                    minW: "20px",
                                    children: R
                                  })
                                ]
                              })
                            })]
                          }), ti(F, d.current) && (0, l.jsxs)(ew.k, {
                            flex: "1",
                            align: "center",
                            gap: 3,
                            children: [(0, l.jsx)(b.x, {
                              fontSize: "md",
                              fontWeight: "bold",
                              color: "white",
                              minW: "40px",
                              children: e("381")
                            }), (0, l.jsx)(eh.x, {
                              position: "relative",
                              flex: "1",
                              onWheel: e => P(e, "speed"),
                              children: (0, l.jsxs)(ew.k, {
                                align: "center",
                                gap: 2,
                                flex: "1",
                                children: [
                                  [1, 2, 3, 4, 5].map(e => (0, l.jsx)(eh.x, {
                                    flex: "1",
                                    h: "24px",
                                    borderRadius: "sm",
                                    border: "1px solid rgba(255,255,255,0.3)",
                                    bg: e <= M ? "#10A8FD" : "#6B7280",
                                    cursor: "pointer",
                                    transition: "all 0.2s",
                                    _hover: {
                                      bg: e <= M ? "#0E96E3" : "#9CA3AF"
                                    },
                                    onClick: () => B(e)
                                  }, e)), (0, l.jsx)(b.x, {
                                    fontSize: "sm",
                                    fontWeight: "bold",
                                    color: "#10A8FD",
                                    ml: 4,
                                    minW: "20px",
                                    children: M
                                  })
                                ]
                              })
                            })]
                          })]
                        })
                      })
                    }), "palette" === tn(F, d.current) && (0, l.jsxs)(eh.x, {
                      children: [(0, l.jsxs)(eh.x, {
                        mb: 4,
                        children: [(0, l.jsxs)(ew.k, {
                          align: "center",
                          mb: 3,
                          children: [(0, l.jsx)(eh.x, {
                            w: "3px",
                            h: "16px",
                            borderRadius: "md",
                            mr: 2,
                            bg: "#10A8FD"
                          }), (0, l.jsx)(b.x, {
                            fontSize: "md",
                            fontWeight: "bold",
                            color: "white",
                            children: "è‡ªå®šä¹‰ç»„åˆ«"
                          })]
                        }), (0, l.jsx)(ew.k, {
                          gap: 2,
                          children: [1, 2, 3].map(e => (0, l.jsx)(eh.x, {
                            flex: "1",
                            p: 3,
                            borderRadius: "lg",
                            cursor: "pointer",
                            bg: k === e ? "#10A8FD" : "rgba(255,255,255,0.08)",
                            color: "white",
                            fontWeight: k === e ? "bold" : "normal",
                            border: k === e ? "2px solid #fff" : "2px solid transparent",
                            transition: "all 0.18s",
                            textAlign: "center",
                            _hover: {
                              bg: k === e ? void 0 : "rgba(255,255,255,0.16)"
                            },
                            onClick: async () => {
                              if (j(e), I(e), t && 23 === a) try {
                                let r = [];
                                1 === e ? r = S.group1 : 2 === e ? r = S.group2 : 3 === e && (r = S.group3), r && r.length > 0 && (await t.setUserLightAllKeysData(r, e), console.log("å·²åˆ‡æ¢åˆ°è‡ªå®šä¹‰ç»„".concat(e, "å¹¶å‘é€æ•°æ®åˆ°è®¾å¤‡")))
                              } catch (e) {
                                console.error("åˆ‡æ¢è‡ªå®šä¹‰ç»„åˆ«å¤±è´¥:", e)
                              }
                            },
                            children: (0, l.jsxs)(b.x, {
                              children: ["è‡ªå®šä¹‰ ", e]
                            })
                          }, e))
                        })]
                      }), (0, l.jsxs)(ew.k, {
                        align: "center",
                        mb: 4,
                        children: [(0, l.jsx)(eh.x, {
                          w: "3px",
                          h: "16px",
                          borderRadius: "md",
                          mr: 2,
                          bg: "#10A8FD"
                        }), (0, l.jsx)(b.x, {
                          fontSize: "md",
                          fontWeight: "bold",
                          color: "white",
                          children: e("378")
                        })]
                      }), (0, l.jsx)(e2, {
                        color: 23 === a ? g : L,
                        onChange: H,
                        presetColors: tr,
                        presetTitle: e("378")
                      })]
                    }), "colorIndex" === tn(F, d.current) && (0, l.jsxs)(eh.x, {
                      children: [(0, l.jsxs)(ew.k, {
                        align: "center",
                        mb: 4,
                        children: [(0, l.jsx)(eh.x, {
                          w: "3px",
                          h: "16px",
                          borderRadius: "md",
                          mr: 2,
                          bg: "#10A8FD"
                        }), (0, l.jsx)(b.x, {
                          fontSize: "md",
                          fontWeight: "bold",
                          color: "white",
                          children: e("379")
                        })]
                      }), (0, l.jsx)(ew.k, {
                        gap: 2,
                        flexWrap: "wrap",
                        maxW: "600px",
                        children: [{
                          id: 0,
                          color: "#FF0000",
                          name: "çº¢è‰²"
                        }, {
                          id: 1,
                          color: "#00FF00",
                          name: "ç»¿è‰²"
                        }, {
                          id: 2,
                          color: "#0000FF",
                          name: "è“è‰²"
                        }, {
                          id: 3,
                          color: "#FFFF00",
                          name: "é»„è‰²"
                        }, {
                          id: 4,
                          color: "#FF00FF",
                          name: "æ´‹çº¢"
                        }, {
                          id: 5,
                          color: "#00FFFF",
                          name: "é’è‰²"
                        }, {
                          id: 6,
                          color: "#FFFFFF",
                          name: "ç™½è‰²"
                        }, {
                          id: 7,
                          gradient: "linear-gradient(135deg, #FF0000 0%, #00FF00 25%, #0000FF 50%, #FFFF00 75%, #FF00FF 100%)",
                          name: "å½©è‰²"
                        }].map(e => (0, l.jsx)(eh.x, {
                          w: "60px",
                          h: "40px",
                          borderRadius: "md",
                          bg: e.color,
                          background: e.gradient || e.color,
                          border: N === e.id ? "3px solid #10A8FD" : "2px solid rgba(255,255,255,0.3)",
                          cursor: "pointer",
                          transition: "all 0.2s",
                          boxShadow: N === e.id ? "0 0 10px rgba(16, 168, 253, 0.6)" : "none",
                          _hover: {
                            transform: "scale(1.05)",
                            boxShadow: "0 2px 8px rgba(16, 168, 253, 0.5)"
                          },
                          onClick: () => U(e.id)
                        }, e.id))
                      })]
                    }), "gradientIndex" === tn(F, d.current) && (0, l.jsxs)(eh.x, {
                      children: [(0, l.jsxs)(ew.k, {
                        align: "center",
                        mb: 4,
                        children: [(0, l.jsx)(eh.x, {
                          w: "3px",
                          h: "16px",
                          borderRadius: "md",
                          mr: 2,
                          bg: "#10A8FD"
                        }), (0, l.jsx)(b.x, {
                          fontSize: "md",
                          fontWeight: "bold",
                          color: "white",
                          children: e("379")
                        })]
                      }), (0, l.jsx)(ew.k, {
                        gap: 2,
                        flexWrap: "wrap",
                        maxW: "600px",
                        children: [{
                          id: 0,
                          gradient: "linear-gradient(to right, #FFFF00, #FF0000)"
                        }, {
                          id: 1,
                          gradient: "linear-gradient(to right, #FFFF00, #00FF00)"
                        }, {
                          id: 2,
                          gradient: "linear-gradient(to right, #8800FF, #0000FF)"
                        }, {
                          id: 3,
                          gradient: "linear-gradient(to right, #00FFFF, #00FF00)"
                        }, {
                          id: 4,
                          gradient: "linear-gradient(to right, #00FFFF, #0000FF)"
                        }, {
                          id: 5,
                          gradient: "linear-gradient(to right, #FFFFFF, #FF0000)"
                        }, {
                          id: 6,
                          gradient: "linear-gradient(to right, #FFFFFF, #00FF00)"
                        }, {
                          id: 7,
                          gradient: "linear-gradient(to right, #FFFFFF, #0000FF)"
                        }].map(e => (0, l.jsx)(eh.x, {
                          w: "60px",
                          h: "30px",
                          borderRadius: "md",
                          background: e.gradient,
                          border: N === e.id ? "2px solid #10A8FD" : "2px solid transparent",
                          cursor: "pointer",
                          transition: "all 0.2s",
                          boxShadow: N === e.id ? "0 0 8px rgba(16, 168, 253, 0.6)" : "none",
                          _hover: {
                            transform: "scale(1.05)",
                            boxShadow: "0 2px 8px rgba(16, 168, 253, 0.4)"
                          },
                          onClick: () => U(e.id)
                        }, e.id))
                      })]
                    })]
                  })
                })]
              })
            })]
          })
        })
      };
      let ts = (0, eP.E)(eh.x),
        tc = (0, eP.E)(ew.k),
        td = {
          æµ å…‰ æ¶ Ÿæ¼ ª: "â‰ˆ",
          å…‰ è°± å¾ ªçŽ¯: "âœ¦",
          å Œå‘ è¿½ æ‰˜: "â¥®",
          ä¸ ƒå½© å‘¼ å¸: "âž¤",
          ä¸ ƒå½© å¸¸ äº®: "â—¯",
          éœžå…‰ é£ žæŽ: "â—"
        },
        tu = ["#FF0000", "#FFA500", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#FF00FF", "#FFFFFF", "#000000"],
        tx = (e, t) => t.find(t => t.value === e) || null,
        th = (e, t) => {
          let r = tx(e, t);
          return r ? r.palette ? "palette" : r.gradientIndex ? "gradientIndex" : r.colorIndex ? "colorIndex" : null : null
        },
        tp = (e, t) => {
          let r = tx(e, t);
          return r && r.speed
        },
        tg = (e, t) => {
          let r = tx(e, t);
          return r && r.brightness
        };
      var tm = function() {
          let {
            t: e,
            connectedDevice: t,
            curLightBoxMode: r,
            setCurLightBoxMode: o,
            lightBoxConfig: n,
            lightBoxInfo: i,
            setLightBoxInfo: a,
            updateKeyboardLightBoxInfo: c,
            updateCurLightBoxMode: d,
            setCurrentBoxColor: u,
            lightBoxPreview: x,
            setLightBoxPreview: h
          } = (0, s.useContext)(ed), [p, g] = (0, s.useState)(r), [m, f] = (0, s.useState)(5), [y, w] = (0, s.useState)(4), [v, k] = (0, s.useState)("#FF0000"), [j, S] = (0, s.useState)(0);
          (0, s.useEffect)(() => {
            g(r);
            let e = i.find(e => e.mode === r);
            e && (void 0 !== e.brightness && f(e.brightness), void 0 !== e.speed && w(e.speed), void 0 !== e.colorindex && S(e.colorindex))
          }, [r, i]);
          let C = async e => {
              g(e), o(e), d(e);
              let r = i.find(t => t.mode === e);
              if (!r) {
                console.error("æœªæ‰¾åˆ°ç¯å…‰æ¨¡å¼é…ç½®:", e);
                return
              }
              if (t) try {
                await t.setLightBoxMode(r)
              } catch (e) {
                console.error("è®¾ç½®ç¯å…‰æ¨¡å¼å¤±è´¥:", e)
              }
            },
            D = async e => {
              f(e);
              let r = i.map(t => t.mode === p ? { ...t,
                  brightness: e
                } : t),
                o = r.find(e => e.mode === p);
              if (!o) {
                console.error("æœªæ‰¾åˆ°ç¯å…‰æ¨¡å¼é…ç½®:", p);
                return
              }
              if (a(r), c(r), t) try {
                await t.setLightBoxMode(o)
              } catch (e) {
                console.error("è®¾ç½®ç¯å…‰äº®åº¦å¤±è´¥:", e)
              }
            },
            I = async e => {
              w(e);
              let r = i.map(t => t.mode === p ? { ...t,
                  speed: e
                } : t),
                o = r.find(e => e.mode === p);
              if (!o) {
                console.error("æœªæ‰¾åˆ°ç¯å…‰æ¨¡å¼é…ç½®:", p);
                return
              }
              if (a(r), c(r), t) try {
                await t.setLightBoxMode(o)
              } catch (e) {
                console.error("è®¾ç½®ç¯å…‰é€Ÿåº¦å¤±è´¥:", e)
              }
            },
            F = (e, t) => {
              e.preventDefault();
              let r = e.deltaY > 0 ? -1 : 1;
              if ("brightness" === t) {
                let e = Math.max(1, Math.min(5, m + r));
                e !== m && D(e)
              } else if ("speed" === t) {
                let e = Math.max(1, Math.min(5, y + r));
                e !== y && I(e)
              }
            },
            E = async e => {
              S(e);
              let r = i.map(t => t.mode === p ? { ...t,
                  colorindex: e
                } : t),
                o = r.find(e => e.mode === p);
              if (!o) {
                console.error("æœªæ‰¾åˆ°ç¯å…‰æ¨¡å¼é…ç½®:", p);
                return
              }
              if (a(r), c(r), t) try {
                await t.setLightBoxMode(o)
              } catch (e) {
                console.error("è®¾ç½®é¢œè‰²ç´¢å¼•å¤±è´¥:", e)
              }
            },
            R = async e => {
              if (23 === r) u(e);
              else {
                k(e);
                let r = i.find(e => e.mode === p);
                if (r) {
                  let o = parseInt(e.replace("#", ""), 16);
                  if (r.color_value1 = o, a(i), c(i), t) try {
                    await t.setLightBoxMode(r)
                  } catch (e) {
                    console.error("è®¾ç½®é¢œè‰²å¤±è´¥:", e)
                  }
                }
              }
            };
          return (0, l.jsx)(ts, {
            w: "100%",
            h: "100%",
            position: "relative",
            overflow: "hidden",
            initial: {
              opacity: 0,
              y: 20
            },
            animate: {
              opacity: 1,
              y: 0
            },
            transition: {
              duration: .5,
              ease: "easeOut"
            },
            children: (0, l.jsx)(tc, {
              direction: "column",
              h: "100%",
              initial: {
                opacity: 0,
                scale: .95
              },
              animate: {
                opacity: 1,
                scale: 1
              },
              transition: {
                duration: .6,
                delay: .1,
                ease: "easeOut"
              },
              children: (0, l.jsx)(ts, {
                flex: "1",
                borderRadius: "sm",
                overflow: "hidden",
                p: 2,
                initial: {
                  opacity: 0,
                  y: 20
                },
                animate: {
                  opacity: 1,
                  y: 0
                },
                transition: {
                  duration: .6,
                  delay: .3,
                  ease: "easeOut"
                },
                children: (0, l.jsxs)(ew.k, {
                  gap: 2,
                  h: "100%",
                  children: [(0, l.jsxs)(ts, {
                    bg: "rgba(30, 35, 40, 0.5)",
                    backdropFilter: "blur(30px)",
                    borderRadius: "xl",
                    border: "1px solid rgba(16, 168, 253, 0.4)",
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
                    p: 6,
                    flex: "1",
                    display: "flex",
                    flexDirection: "column",
                    initial: {
                      opacity: 0,
                      x: -20
                    },
                    animate: {
                      opacity: 1,
                      x: 0
                    },
                    transition: {
                      duration: .6,
                      delay: .4,
                      ease: "easeOut"
                    },
                    children: [(0, l.jsx)(ew.k, {
                      align: "center",
                      justify: "space-between",
                      mb: 6,
                      children: (0, l.jsxs)(ew.k, {
                        align: "center",
                        children: [(0, l.jsx)(eh.x, {
                          w: "3px",
                          h: "20px",
                          borderRadius: "md",
                          mr: 3,
                          bg: "#10A8FD"
                        }), (0, l.jsx)(b.x, {
                          fontSize: "lg",
                          fontWeight: "bold",
                          color: "white",
                          children: e("370")
                        })]
                      })
                    }), (0, l.jsx)(eh.x, {
                      flex: "1",
                      children: (0, l.jsx)(eR.r, {
                        templateColumns: "repeat(5, 1fr)",
                        gap: 3,
                        maxH: "400px",
                        overflowY: "auto",
                        css: {
                          "&::-webkit-scrollbar": {
                            width: "4px"
                          },
                          "&::-webkit-scrollbar-track": {
                            width: "6px",
                            background: "rgba(0,0,0,0.1)"
                          },
                          "&::-webkit-scrollbar-thumb": {
                            background: "rgba(255,255,255,0.3)",
                            borderRadius: "24px"
                          }
                        },
                        children: n.current.map((t, r) => (0, l.jsxs)(eh.x, {
                          p: 2,
                          borderRadius: "lg",
                          cursor: "pointer",
                          bg: p === t.value ? "#10A8FD" : "rgba(255,255,255,0.08)",
                          color: (t.value, "white"),
                          fontWeight: p === t.value ? "bold" : "normal",
                          fontSize: "sm",
                          border: p === t.value ? "2px solid #fff" : "2px solid transparent",
                          transition: "all 0.18s",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          minH: "50px",
                          _hover: {
                            bg: p === t.value ? void 0 : "rgba(255,255,255,0.16)"
                          },
                          onClick: () => C(t.value),
                          children: [(0, l.jsx)(eh.x, {
                            mr: 2,
                            fontSize: "lg",
                            children: td[t.name] || "\uD83D\uDCA1"
                          }), (0, l.jsx)(b.x, {
                            fontSize: "sm",
                            color: (t.value, "white !important"),
                            children: e(t.lang)
                          })]
                        }, t.value))
                      })
                    })]
                  }), (0, l.jsxs)(ts, {
                    bg: "rgba(30, 35, 40, 0.5)",
                    backdropFilter: "blur(30px)",
                    borderRadius: "xl",
                    border: "1px solid rgba(16, 168, 253, 0.4)",
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
                    p: 6,
                    flex: "1",
                    display: "flex",
                    flexDirection: "column",
                    initial: {
                      opacity: 0,
                      x: 20
                    },
                    animate: {
                      opacity: 1,
                      x: 0
                    },
                    transition: {
                      duration: .6,
                      delay: .5,
                      ease: "easeOut"
                    },
                    children: [(0, l.jsxs)(ew.k, {
                      align: "center",
                      mb: 6,
                      children: [(0, l.jsx)(eh.x, {
                        w: "3px",
                        h: "20px",
                        borderRadius: "md",
                        mr: 3,
                        bg: "#10A8FD"
                      }), (0, l.jsx)(b.x, {
                        fontSize: "lg",
                        fontWeight: "bold",
                        color: "white",
                        children: e("376")
                      })]
                    }), (tg(p, n.current) || tp(p, n.current)) && (0, l.jsx)(ts, {
                      bg: "rgba(30, 35, 40, 0.3)",
                      backdropFilter: "blur(10px)",
                      borderRadius: "xl",
                      p: 3,
                      mb: 6,
                      border: "1px solid rgba(16, 168, 253, 0.2)",
                      initial: {
                        opacity: 0,
                        y: 20
                      },
                      animate: {
                        opacity: 1,
                        y: 0
                      },
                      transition: {
                        duration: .6,
                        delay: .6,
                        ease: "easeOut"
                      },
                      children: (0, l.jsx)(ew.k, {
                        direction: "column",
                        gap: 4,
                        children: (0, l.jsxs)(ew.k, {
                          direction: "row",
                          gap: 3,
                          align: "center",
                          children: [tg(p, n.current) && (0, l.jsxs)(ew.k, {
                            flex: "1",
                            align: "center",
                            gap: 3,
                            children: [(0, l.jsx)(b.x, {
                              fontSize: "md",
                              fontWeight: "bold",
                              color: "white",
                              minW: "40px",
                              children: e("380")
                            }), (0, l.jsx)(eh.x, {
                              position: "relative",
                              flex: "1",
                              onWheel: e => F(e, "brightness"),
                              children: (0, l.jsxs)(ew.k, {
                                align: "center",
                                gap: 2,
                                flex: "1",
                                children: [
                                  [1, 2, 3, 4, 5].map(e => (0, l.jsx)(eh.x, {
                                    flex: "1",
                                    h: "24px",
                                    borderRadius: "sm",
                                    border: "1px solid rgba(255,255,255,0.3)",
                                    bg: e <= m ? "#10A8FD" : "#6B7280",
                                    cursor: "pointer",
                                    transition: "all 0.2s",
                                    _hover: {
                                      bg: e <= m ? "#0E96E3" : "#9CA3AF"
                                    },
                                    onClick: () => D(e)
                                  }, e)), (0, l.jsx)(b.x, {
                                    fontSize: "sm",
                                    fontWeight: "bold",
                                    color: "#10A8FD",
                                    ml: 4,
                                    minW: "20px",
                                    children: m
                                  })
                                ]
                              })
                            })]
                          }), tp(p, n.current) && (0, l.jsxs)(ew.k, {
                            flex: "1",
                            align: "center",
                            gap: 3,
                            children: [(0, l.jsx)(b.x, {
                              fontSize: "md",
                              fontWeight: "bold",
                              color: "white",
                              minW: "40px",
                              children: e("381")
                            }), (0, l.jsx)(eh.x, {
                              position: "relative",
                              flex: "1",
                              onWheel: e => F(e, "speed"),
                              children: (0, l.jsxs)(ew.k, {
                                align: "center",
                                gap: 2,
                                flex: "1",
                                children: [
                                  [1, 2, 3, 4, 5].map(e => (0, l.jsx)(eh.x, {
                                    flex: "1",
                                    h: "24px",
                                    borderRadius: "sm",
                                    border: "1px solid rgba(255,255,255,0.3)",
                                    bg: e <= y ? "#10A8FD" : "#6B7280",
                                    cursor: "pointer",
                                    transition: "all 0.2s",
                                    _hover: {
                                      bg: e <= y ? "#0E96E3" : "#9CA3AF"
                                    },
                                    onClick: () => I(e)
                                  }, e)), (0, l.jsx)(b.x, {
                                    fontSize: "sm",
                                    fontWeight: "bold",
                                    color: "#10A8FD",
                                    ml: 4,
                                    minW: "20px",
                                    children: y
                                  })
                                ]
                              })
                            })]
                          })]
                        })
                      })
                    }), "palette" === th(p, n.current) && (0, l.jsxs)(eh.x, {
                      children: [(0, l.jsxs)(ew.k, {
                        align: "center",
                        mb: 4,
                        children: [(0, l.jsx)(eh.x, {
                          w: "3px",
                          h: "16px",
                          borderRadius: "md",
                          mr: 2,
                          bg: "#10A8FD"
                        }), (0, l.jsx)(b.x, {
                          fontSize: "md",
                          fontWeight: "bold",
                          color: "white",
                          children: e("378")
                        })]
                      }), (0, l.jsx)(e2, {
                        color: v,
                        onChange: R,
                        presetColors: tu,
                        presetTitle: e("378")
                      })]
                    }), "colorIndex" === th(p, n.current) && (0, l.jsxs)(eh.x, {
                      children: [(0, l.jsxs)(ew.k, {
                        align: "center",
                        mb: 4,
                        children: [(0, l.jsx)(eh.x, {
                          w: "3px",
                          h: "16px",
                          borderRadius: "md",
                          mr: 2,
                          bg: "#10A8FD"
                        }), (0, l.jsx)(b.x, {
                          fontSize: "md",
                          fontWeight: "bold",
                          color: "white",
                          children: e("379")
                        })]
                      }), (0, l.jsx)(ew.k, {
                        gap: 2,
                        flexWrap: "wrap",
                        maxW: "600px",
                        children: [{
                          id: 0,
                          color: "#FF0000",
                          name: "çº¢è‰²"
                        }, {
                          id: 1,
                          color: "#00FF00",
                          name: "ç»¿è‰²"
                        }, {
                          id: 2,
                          color: "#0000FF",
                          name: "è“è‰²"
                        }, {
                          id: 3,
                          color: "#FFFF00",
                          name: "é»„è‰²"
                        }, {
                          id: 4,
                          color: "#FF00FF",
                          name: "æ´‹çº¢"
                        }, {
                          id: 5,
                          color: "#00FFFF",
                          name: "é’è‰²"
                        }, {
                          id: 6,
                          color: "#FFFFFF",
                          name: "ç™½è‰²"
                        }, {
                          id: 7,
                          gradient: "linear-gradient(135deg, #FF0000 0%, #00FF00 25%, #0000FF 50%, #FFFF00 75%, #FF00FF 100%)",
                          name: "å½©è‰²"
                        }].map(e => (0, l.jsx)(eh.x, {
                          w: "60px",
                          h: "40px",
                          borderRadius: "md",
                          bg: e.color,
                          background: e.gradient || e.color,
                          border: j === e.id ? "3px solid #10A8FD" : "2px solid rgba(255,255,255,0.3)",
                          cursor: "pointer",
                          transition: "all 0.2s",
                          boxShadow: j === e.id ? "0 0 10px rgba(16, 168, 253, 0.6)" : "none",
                          _hover: {
                            transform: "scale(1.05)",
                            boxShadow: "0 2px 8px rgba(16, 168, 253, 0.5)"
                          },
                          onClick: () => E(e.id)
                        }, e.id))
                      })]
                    }), "gradientIndex" === th(p, n.current) && (0, l.jsxs)(eh.x, {
                      children: [(0, l.jsxs)(ew.k, {
                        align: "center",
                        mb: 4,
                        children: [(0, l.jsx)(eh.x, {
                          w: "3px",
                          h: "16px",
                          borderRadius: "md",
                          mr: 2,
                          bg: "#10A8FD"
                        }), (0, l.jsx)(b.x, {
                          fontSize: "md",
                          fontWeight: "bold",
                          color: "white",
                          children: e("379")
                        })]
                      }), (0, l.jsx)(ew.k, {
                        gap: 2,
                        flexWrap: "wrap",
                        maxW: "600px",
                        children: [{
                          id: 0,
                          gradient: "linear-gradient(to right, #FFFF00, #FF0000)"
                        }, {
                          id: 1,
                          gradient: "linear-gradient(to right, #FFFF00, #00FF00)"
                        }, {
                          id: 2,
                          gradient: "linear-gradient(to right, #8800FF, #0000FF)"
                        }, {
                          id: 3,
                          gradient: "linear-gradient(to right, #00FFFF, #00FF00)"
                        }, {
                          id: 4,
                          gradient: "linear-gradient(to right, #00FFFF, #0000FF)"
                        }, {
                          id: 5,
                          gradient: "linear-gradient(to right, #FFFFFF, #FF0000)"
                        }, {
                          id: 6,
                          gradient: "linear-gradient(to right, #FFFFFF, #00FF00)"
                        }, {
                          id: 7,
                          gradient: "linear-gradient(to right, #FFFFFF, #0000FF)"
                        }].map(e => (0, l.jsx)(eh.x, {
                          w: "60px",
                          h: "30px",
                          borderRadius: "md",
                          background: e.gradient,
                          border: j === e.id ? "2px solid #10A8FD" : "2px solid transparent",
                          cursor: "pointer",
                          transition: "all 0.2s",
                          boxShadow: j === e.id ? "0 0 8px rgba(16, 168, 253, 0.6)" : "none",
                          _hover: {
                            transform: "scale(1.05)",
                            boxShadow: "0 2px 8px rgba(16, 168, 253, 0.4)"
                          },
                          onClick: () => E(e.id)
                        }, e.id))
                      })]
                    })]
                  })]
                })
              })
            })
          })
        },
        tb = r(6400),
        tf = r(5331),
        ty = r(8906),
        tw = r(2535),
        tv = r(8218),
        tk = r(6878),
        tj = r(9599),
        tS = r(5112),
        tC = r(1380),
        tD = r(4099),
        tI = r(760);
      let tF = {
          primary: {
            main: "#10A8FD",
            light: "#3BBAFD",
            dark: "#0E96E3",
            gradient: "linear-gradient(135deg, #10A8FD 0%, #0E96E3 100%)"
          },
          bg: {
            main: "rgba(20, 25, 30, 0.95)",
            secondary: "rgba(30, 35, 40, 0.8)",
            hover: "rgba(16, 168, 253, 0.08)",
            active: "rgba(16, 168, 253, 0.15)",
            selected: "rgba(16, 168, 253, 0.2)",
            card: "rgba(35, 40, 45, 0.6)"
          },
          border: {
            main: "rgba(16, 168, 253, 0.3)",
            light: "rgba(255, 255, 255, 0.1)",
            active: "#10A8FD",
            glow: "0 0 10px rgba(16, 168, 253, 0.3)"
          },
          text: {
            primary: "white",
            secondary: "rgba(255, 255, 255, 0.8)",
            tertiary: "rgba(255, 255, 255, 0.6)",
            muted: "rgba(255, 255, 255, 0.4)"
          },
          shadow: {
            sm: "0 2px 8px rgba(0, 0, 0, 0.2)",
            md: "0 4px 16px rgba(0, 0, 0, 0.3)",
            lg: "0 8px 32px rgba(0, 0, 0, 0.4)",
            glow: "0 0 20px rgba(16, 168, 253, 0.4)",
            inner: "inset 0 1px 0 rgba(255, 255, 255, 0.1)"
          }
        },
        tE = (0, eP.E)(eh.x),
        tR = (0, eP.E)(tb.W);
      var tA = function() {
          var e, t, r;
          let {
            connectedDevice: o,
            deviceVersion: n,
            deviceNewVersion: i,
            deviceName: a,
            keyboardFuncInfo: c,
            setKeyboardFuncInfo: d,
            updateKeyboardFuncInfo: g,
            restoreKeyboardFactorySettings: m,
            setUpgradeWindowOpen: f,
            currentProductRef: y,
            currentDeviceMode: w,
            t: v
          } = (0, s.useContext)(ed), [k, j] = (0, s.useState)(null !== (e = null == c ? void 0 : c.fnLayerMode) && void 0 !== e ? e : 0), [S, C] = (0, s.useState)(null !== (t = null == c ? void 0 : c.sleepLevel) && void 0 !== t ? t : 1), [D, I] = (0, s.useState)(null !== (r = null == c ? void 0 : c.responseLevel) && void 0 !== r ? r : 1), {
            isOpen: F,
            onOpen: E,
            onClose: R
          } = (0, ex.q)(), {
            isOpen: A,
            onOpen: M,
            onClose: _
          } = (0, ex.q)();
          (0, s.useEffect)(() => {
            if (c) {
              var e, t, r;
              j(null !== (e = c.fnLayerMode) && void 0 !== e ? e : 0), C(null !== (t = c.sleepLevel) && void 0 !== t ? t : 1), I(null !== (r = c.responseLevel) && void 0 !== r ? r : 1)
            }
          }, [c]);
          let L = e => {
              let t = {
                  1: {
                    primary: v("610"),
                    secondary: v("611")
                  },
                  2: {
                    primary: v("612"),
                    secondary: v("613")
                  },
                  3: {
                    primary: v("614"),
                    secondary: v("615")
                  },
                  4: {
                    primary: v("682"),
                    secondary: v("682")
                  }
                },
                r = t[e] || t[1];
              return "".concat(v("616"), ": ").concat(r.primary, " | ").concat(v("617"), ": ").concat(r.secondary)
            },
            z = e => {
              let t = {
                  1: {
                    wired: "2-3ms",
                    wireless24g: "5-6ms",
                    bluetooth: "12-13ms"
                  },
                  2: {
                    wired: "4-5ms",
                    wireless24g: "7-8ms",
                    bluetooth: "14-15ms"
                  },
                  3: {
                    wired: "6-7ms",
                    wireless24g: "9-10ms",
                    bluetooth: "16-17ms"
                  }
                },
                r = t[e] || t[1];
              return "".concat(v("625"), ": ").concat(r.wired, " | ").concat(v("626"), ": ").concat(r.wireless24g, " | ").concat(v("627"), ": ").concat(r.bluetooth)
            },
            N = async e => {
              j(e);
              let t = { ...c,
                fnLayerMode: e
              };
              d(t), g(t), o && await o.setFnLayerMode(e)
            },
            T = async e => {
              C(e);
              let t = { ...c,
                sleepLevel: e
              };
              d(t), g(t), o && await o.setSleepLevel(e)
            },
            O = async e => {
              I(e);
              let t = { ...c,
                responseLevel: e
              };
              d(t), g(t), o && await o.setResponseLevel(e)
            },
            W = async () => {
              try {
                o && await m(o), R()
              } catch (e) {}
            },
            B = async () => {
              try {
                let e = y.current;
                if (!e || !e.devices) {
                  console.error("æ— æ³•èŽ·å–äº§å“é…ç½®");
                  return
                }
                let t = e.devices.find(e => e.deviceMode === w);
                if (!t || !t.firmwareFile) {
                  console.error("æ— æ³•èŽ·å–å›ºä»¶æ–‡ä»¶è·¯å¾„");
                  return
                }
                let r = t.firmwareFile;
                console.log("å¼€å§‹ä¸‹è½½å›ºä»¶: ".concat(r));
                let o = document.createElement("a");
                o.href = r, o.download = r.split("/").pop() || "firmware.zip", document.body.appendChild(o), o.click(), document.body.removeChild(o), console.log("âœ… å›ºä»¶ä¸‹è½½å·²å¼€å§‹"), _()
              } catch (e) {
                console.error("âŒ å›ºä»¶ä¸‹è½½å¤±è´¥:", e)
              }
            },
            P = (() => {
              if (!n || !i) return !1;
              let e = n.replace(/^v/i, "").trim(),
                t = i.replace(/^v/i, "").trim(),
                r = e.split(".").map(e => parseInt(e) || 0),
                o = t.split(".").map(e => parseInt(e) || 0),
                a = Math.max(r.length, o.length);
              for (; r.length < a;) r.push(0);
              for (; o.length < a;) o.push(0);
              for (let e = 0; e < a; e++) {
                if (o[e] > r[e]) return !0;
                if (o[e] < r[e]) break
              }
              return !1
            })();
          return (0, l.jsxs)(tR, {
            maxW: "container.lg",
            p: {
              base: 2,
              md: 4
            },
            initial: {
              opacity: 0,
              y: 20
            },
            animate: {
              opacity: 1,
              y: 0
            },
            transition: {
              duration: .5,
              ease: "easeOut"
            },
            children: [(0, l.jsxs)(tE, {
              bg: tF.bg.secondary,
              p: {
                base: 3,
                md: 4,
                lg: 6
              },
              borderRadius: "xl",
              backdropFilter: "blur(30px)",
              border: "1px solid ".concat(tF.border.main),
              boxShadow: "".concat(tF.shadow.lg, ", ").concat(tF.shadow.inner),
              initial: {
                opacity: 0,
                scale: .95
              },
              animate: {
                opacity: 1,
                scale: 1
              },
              transition: {
                duration: .6,
                delay: .1,
                ease: "easeOut"
              },
              children: [(0, l.jsxs)(tE, {
                mb: 6,
                initial: {
                  opacity: 0,
                  y: 20
                },
                animate: {
                  opacity: 1,
                  y: 0
                },
                transition: {
                  duration: .6,
                  delay: .2,
                  ease: "easeOut"
                },
                style: {
                  display: "none"
                },
                children: [(0, l.jsx)(tf.X, {
                  size: "md",
                  mb: 3,
                  color: tF.text.primary,
                  children: "FNå±‚æ¨¡å¼åˆ‡æ¢"
                }), (0, l.jsx)(ty.i, {
                  mb: 3,
                  borderColor: tF.border.main
                }), (0, l.jsx)(tw.NI, {
                  children: (0, l.jsx)(tv.E, {
                    onChange: e => N(parseInt(e)),
                    value: k.toString(),
                    children: (0, l.jsx)(ew.k, {
                      gap: 2,
                      children: [{
                        value: 0,
                        label: v("630"),
                        desc: v("631")
                      }, {
                        value: 1,
                        label: v("632"),
                        desc: v("633")
                      }].map(e => (0, l.jsxs)(eh.x, {
                        flex: "1",
                        p: 2,
                        bg: k === e.value ? tF.bg.selected : tF.bg.card,
                        borderRadius: "md",
                        border: "1px solid",
                        borderColor: k === e.value ? tF.primary.main : tF.border.light,
                        cursor: "pointer",
                        transition: "all 0.2s",
                        onClick: () => N(e.value),
                        _hover: {
                          borderColor: tF.primary.main,
                          bg: tF.bg.hover
                        },
                        children: [(0, l.jsx)(tk.Y, {
                          value: e.value.toString(),
                          size: "sm",
                          sx: {
                            ".chakra-radio__control": {
                              borderColor: k === e.value ? tF.primary.main : "gray.500",
                              _checked: {
                                bg: tF.primary.main,
                                borderColor: tF.primary.main
                              }
                            }
                          },
                          children: (0, l.jsx)(b.x, {
                            color: tF.text.primary,
                            fontWeight: k === e.value ? "600" : "normal",
                            fontSize: "xs",
                            children: e.label
                          })
                        }), (0, l.jsx)(b.x, {
                          fontSize: "xs",
                          color: tF.text.tertiary,
                          mt: .5,
                          ml: 5,
                          children: e.desc
                        })]
                      }, e.value))
                    })
                  })
                })]
              }), (0, l.jsxs)(tE, {
                mb: 6,
                initial: {
                  opacity: 0,
                  y: 20
                },
                animate: {
                  opacity: 1,
                  y: 0
                },
                transition: {
                  duration: .6,
                  delay: .3,
                  ease: "easeOut"
                },
                children: [(0, l.jsx)(tf.X, {
                  size: "md",
                  mb: 3,
                  color: tF.text.primary,
                  children: v("640")
                }), (0, l.jsx)(ty.i, {
                  mb: 3,
                  borderColor: tF.border.main
                }), (0, l.jsx)(tw.NI, {
                  children: (0, l.jsx)(tv.E, {
                    onChange: e => T(parseInt(e)),
                    value: S.toString(),
                    children: (0, l.jsx)(ew.k, {
                      gap: 2,
                      children: [1, 2, 3, 4].map(e => (0, l.jsxs)(eh.x, {
                        flex: "1",
                        p: 2,
                        bg: S === e ? tF.bg.selected : tF.bg.card,
                        borderRadius: "md",
                        border: "1px solid",
                        borderColor: S === e ? tF.primary.main : tF.border.light,
                        cursor: "pointer",
                        transition: "all 0.2s",
                        onClick: () => T(e),
                        _hover: {
                          borderColor: tF.primary.main,
                          bg: tF.bg.hover
                        },
                        children: [(0, l.jsx)(tk.Y, {
                          value: e.toString(),
                          size: "sm",
                          sx: {
                            ".chakra-radio__control": {
                              borderColor: S === e ? tF.primary.main : "gray.500",
                              _checked: {
                                bg: tF.primary.main,
                                borderColor: tF.primary.main
                              }
                            }
                          },
                          children: (0, l.jsxs)(b.x, {
                            color: tF.text.primary,
                            fontWeight: S === e ? "600" : "normal",
                            fontSize: "xs",
                            children: [v("641"), e, v("642")]
                          })
                        }), (0, l.jsx)(b.x, {
                          fontSize: "xs",
                          color: S === e ? tF.primary.main : tF.text.tertiary,
                          mt: .5,
                          ml: 5,
                          children: L(e)
                        })]
                      }, e))
                    })
                  })
                })]
              }), (0, l.jsxs)(tE, {
                mb: 6,
                initial: {
                  opacity: 0,
                  y: 20
                },
                animate: {
                  opacity: 1,
                  y: 0
                },
                transition: {
                  duration: .6,
                  delay: .4,
                  ease: "easeOut"
                },
                children: [(0, l.jsx)(tf.X, {
                  size: "md",
                  mb: 3,
                  color: tF.text.primary,
                  children: v("650")
                }), (0, l.jsx)(ty.i, {
                  mb: 3,
                  borderColor: tF.border.main
                }), (0, l.jsx)(tw.NI, {
                  children: (0, l.jsx)(tv.E, {
                    onChange: e => O(parseInt(e)),
                    value: D.toString(),
                    children: (0, l.jsx)(ew.k, {
                      gap: 2,
                      children: [1, 2, 3].map(e => (0, l.jsxs)(eh.x, {
                        flex: "1",
                        p: 2,
                        bg: D === e ? tF.bg.selected : tF.bg.card,
                        borderRadius: "md",
                        border: "1px solid",
                        borderColor: D === e ? tF.primary.main : tF.border.light,
                        cursor: "pointer",
                        transition: "all 0.2s",
                        onClick: () => O(e),
                        _hover: {
                          borderColor: tF.primary.main,
                          bg: tF.bg.hover
                        },
                        children: [(0, l.jsx)(tk.Y, {
                          value: e.toString(),
                          size: "sm",
                          sx: {
                            ".chakra-radio__control": {
                              borderColor: D === e ? tF.primary.main : "gray.500",
                              _checked: {
                                bg: tF.primary.main,
                                borderColor: tF.primary.main
                              }
                            }
                          },
                          children: (0, l.jsxs)(b.x, {
                            color: tF.text.primary,
                            fontWeight: D === e ? "600" : "normal",
                            fontSize: "xs",
                            children: [v("641"), e, v("642"), 1 === e ? "(".concat(v("643"), ")") : ""]
                          })
                        }), (0, l.jsx)(b.x, {
                          fontSize: "xs",
                          color: D === e ? tF.primary.main : tF.text.tertiary,
                          mt: .5,
                          ml: 5,
                          children: z(e)
                        })]
                      }, e))
                    })
                  })
                })]
              }), (0, l.jsxs)(tE, {
                mb: 4,
                initial: {
                  opacity: 0,
                  y: 20
                },
                animate: {
                  opacity: 1,
                  y: 0
                },
                transition: {
                  duration: .6,
                  delay: .5,
                  ease: "easeOut"
                },
                children: [(0, l.jsx)(tf.X, {
                  size: "md",
                  mb: 4,
                  color: tF.text.primary,
                  children: v("660")
                }), (0, l.jsx)(ty.i, {
                  mb: 4,
                  borderColor: tF.border.main
                }), (0, l.jsxs)(eh.x, {
                  mb: 6,
                  p: 4,
                  bg: tF.bg.card,
                  borderRadius: "lg",
                  border: "1px solid",
                  borderColor: tF.border.light,
                  children: [(0, l.jsxs)(ew.k, {
                    justify: "space-between",
                    align: "center",
                    mb: 3,
                    children: [(0, l.jsx)(tf.X, {
                      size: "sm",
                      color: tF.text.primary,
                      children: v("661")
                    }), P && (0, l.jsx)(eh.x, {
                      px: 2,
                      py: 1,
                      bg: "rgba(16, 168, 253, 0.2)",
                      borderRadius: "md",
                      border: "1px solid",
                      borderColor: tF.primary.main,
                      children: (0, l.jsxs)(b.x, {
                        fontSize: "xs",
                        color: tF.primary.main,
                        fontWeight: "bold",
                        children: ["\uD83D\uDD14 ", v("800")]
                      })
                    })]
                  }), (0, l.jsxs)(tj.K, {
                    spacing: 3,
                    children: [(0, l.jsxs)(ew.k, {
                      justify: "space-between",
                      children: [(0, l.jsxs)(b.x, {
                        color: tF.text.tertiary,
                        fontSize: "sm",
                        children: [v("662"), ":"]
                      }), (0, l.jsx)(b.x, {
                        color: tF.text.primary,
                        fontSize: "sm",
                        fontWeight: "medium",
                        children: a || "-K100"
                      })]
                    }), (0, l.jsxs)(ew.k, {
                      justify: "space-between",
                      align: "center",
                      children: [(0, l.jsxs)(b.x, {
                        color: tF.text.tertiary,
                        fontSize: "sm",
                        children: [v("663"), ":"]
                      }), (0, l.jsxs)(ew.k, {
                        align: "center",
                        gap: 2,
                        children: [(0, l.jsxs)(b.x, {
                          color: tF.text.primary,
                          fontSize: "sm",
                          fontWeight: "medium",
                          children: ["v", n || "0.0.10"]
                        }), P && (0, l.jsxs)(l.Fragment, {
                          children: [(0, l.jsx)(b.x, {
                            color: tF.primary.main,
                            fontSize: "sm",
                            children: "â†’"
                          }), (0, l.jsxs)(b.x, {
                            color: tF.primary.main,
                            fontSize: "sm",
                            fontWeight: "bold",
                            children: ["v", i]
                          })]
                        })]
                      })]
                    }), P && (0, l.jsxs)(eb.z, {
                      size: "sm",
                      bg: tF.primary.main,
                      color: "white",
                      w: "full",
                      mt: 2,
                      leftIcon: (0, l.jsx)(tS.J, {
                        viewBox: "0 0 24 24",
                        boxSize: "4",
                        children: (0, l.jsx)("path", {
                          fill: "currentColor",
                          d: "M12 2L7 7h4v10h2V7h4l-5-5zm7 18H5v2h14v-2z"
                        })
                      }),
                      _hover: {
                        bg: tF.primary.light,
                        transform: "translateY(-1px)",
                        boxShadow: "0 4px 12px rgba(16, 168, 253, 0.4)"
                      },
                      _active: {
                        transform: "translateY(0)"
                      },
                      onClick: () => {
                        M()
                      },
                      boxShadow: "0 2px 8px rgba(16, 168, 253, 0.3)",
                      children: ["\uD83D\uDE80 ", v("813"), " (v", n, " â†’ v", i, ")"]
                    })]
                  })]
                }), (0, l.jsxs)(eh.x, {
                  p: 4,
                  bg: tF.bg.card,
                  borderRadius: "lg",
                  border: "1px solid",
                  borderColor: tF.border.light,
                  children: [(0, l.jsx)(tf.X, {
                    size: "sm",
                    mb: 3,
                    color: tF.text.primary,
                    children: v("670")
                  }), (0, l.jsx)(b.x, {
                    fontSize: "sm",
                    color: tF.text.tertiary,
                    mb: 4,
                    children: v("671")
                  }), (0, l.jsx)(eb.z, {
                    onClick: E,
                    colorScheme: "red",
                    variant: "outline",
                    size: "md",
                    leftIcon: (0, l.jsxs)(tS.J, {
                      viewBox: "0 0 24 24",
                      boxSize: "4",
                      children: [(0, l.jsx)("path", {
                        fill: "currentColor",
                        d: "M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9H21ZM19 21H5V3H13V9H19V21Z"
                      }), (0, l.jsx)("path", {
                        fill: "currentColor",
                        d: "M12 15C13.1 15 14 15.9 14 17C14 18.1 13.1 19 12 19C10.9 19 10 18.1 10 17C10 15.9 10.9 15 12 15Z"
                      })]
                    }),
                    _hover: {
                      borderColor: tF.primary.main,
                      color: tF.primary.main
                    },
                    borderColor: "red.400",
                    color: "red.400",
                    children: v("670")
                  })]
                })]
              })]
            }), (0, l.jsxs)(u.u_, {
              isOpen: F,
              onClose: R,
              isCentered: !0,
              children: [(0, l.jsx)(x.Z, {
                bg: "rgba(0, 0, 0, 0.4)",
                backdropFilter: "blur(10px)"
              }), (0, l.jsxs)(h.h, {
                bg: tF.bg.secondary,
                boxShadow: tF.shadow.lg,
                borderRadius: "xl",
                border: "1px solid rgba(255, 68, 68, 0.3)",
                backdropFilter: "blur(12px)",
                children: [(0, l.jsxs)(tC.x, {
                  color: tF.text.primary,
                  children: [(0, l.jsx)(tS.J, {
                    viewBox: "0 0 24 24",
                    boxSize: "6",
                    color: "red.400",
                    mr: 2,
                    children: (0, l.jsx)("path", {
                      fill: "currentColor",
                      d: "M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM12 7C13.1 7 14 7.9 14 9V15C14 16.1 13.1 17 12 17C10.9 17 10 16.1 10 15V9C10 7.9 10.9 7 12 7ZM12 18C13.1 18 14 18.9 14 20C14 21.1 13.1 22 12 22C10.9 22 10 21.1 10 20C10 18.9 10.9 18 12 18Z"
                    })
                  }), v("673")]
                }), (0, l.jsx)(tD.o, {
                  color: tF.text.primary
                }), (0, l.jsxs)(p.f, {
                  color: tF.text.primary,
                  children: [(0, l.jsx)(b.x, {
                    mb: 4,
                    children: v("674")
                  }), (0, l.jsxs)(tj.K, {
                    spacing: 2,
                    mb: 4,
                    children: [(0, l.jsxs)(b.x, {
                      fontSize: "sm",
                      color: tF.text.secondary,
                      children: ["â€¢ ", v("675")]
                    }), (0, l.jsxs)(b.x, {
                      fontSize: "sm",
                      color: tF.text.secondary,
                      children: ["â€¢ ", v("676")]
                    }), (0, l.jsxs)(b.x, {
                      fontSize: "sm",
                      color: tF.text.secondary,
                      children: ["â€¢ ", v("677")]
                    }), (0, l.jsxs)(b.x, {
                      fontSize: "sm",
                      color: tF.text.secondary,
                      children: ["â€¢ ", v("678")]
                    })]
                  }), (0, l.jsx)(b.x, {
                    color: "red.400",
                    fontSize: "sm",
                    fontWeight: "medium",
                    children: v("679")
                  })]
                }), (0, l.jsxs)(tI.m, {
                  children: [(0, l.jsx)(eb.z, {
                    variant: "ghost",
                    mr: 3,
                    onClick: R,
                    color: tF.text.secondary,
                    _hover: {
                      bg: tF.bg.hover
                    },
                    children: v("680")
                  }), (0, l.jsx)(eb.z, {
                    bg: "#FF4444",
                    color: "white",
                    _hover: {
                      bg: "#FF6666"
                    },
                    onClick: W,
                    children: v("681")
                  })]
                })]
              })]
            }), (0, l.jsxs)(u.u_, {
              isOpen: A,
              onClose: _,
              isCentered: !0,
              children: [(0, l.jsx)(x.Z, {
                bg: "rgba(0, 0, 0, 0.4)",
                backdropFilter: "blur(10px)"
              }), (0, l.jsxs)(h.h, {
                bg: tF.bg.secondary,
                boxShadow: tF.shadow.lg,
                borderRadius: "xl",
                border: "1px solid ".concat(tF.primary.main),
                backdropFilter: "blur(12px)",
                children: [(0, l.jsx)(tC.x, {
                  color: tF.text.primary,
                  children: (0, l.jsxs)(ew.k, {
                    align: "center",
                    children: [(0, l.jsx)(tS.J, {
                      viewBox: "0 0 24 24",
                      boxSize: "6",
                      color: tF.primary.main,
                      mr: 2,
                      children: (0, l.jsx)("path", {
                        fill: "currentColor",
                        d: "M12 2L7 7h4v10h2V7h4l-5-5zm7 18H5v2h14v-2z"
                      })
                    }), "\uD83D\uDE80 ", v("820")]
                  })
                }), (0, l.jsx)(tD.o, {
                  color: tF.text.primary
                }), (0, l.jsxs)(p.f, {
                  color: tF.text.primary,
                  children: [(0, l.jsxs)(eh.x, {
                    mb: 4,
                    p: 3,
                    bg: tF.bg.card,
                    borderRadius: "md",
                    border: "1px solid",
                    borderColor: tF.border.light,
                    children: [(0, l.jsxs)(ew.k, {
                      justify: "space-between",
                      align: "center",
                      mb: 2,
                      children: [(0, l.jsxs)(b.x, {
                        fontSize: "sm",
                        color: tF.text.secondary,
                        children: [v("821"), ":"]
                      }), (0, l.jsxs)(b.x, {
                        fontSize: "md",
                        fontWeight: "bold",
                        color: tF.text.primary,
                        children: ["v", n]
                      })]
                    }), (0, l.jsx)(ew.k, {
                      justify: "center",
                      mb: 2,
                      children: (0, l.jsx)(tS.J, {
                        viewBox: "0 0 24 24",
                        boxSize: "5",
                        color: tF.primary.main,
                        children: (0, l.jsx)("path", {
                          fill: "currentColor",
                          d: "M7 10l5 5 5-5z"
                        })
                      })
                    }), (0, l.jsxs)(ew.k, {
                      justify: "space-between",
                      align: "center",
                      children: [(0, l.jsxs)(b.x, {
                        fontSize: "sm",
                        color: tF.text.secondary,
                        children: [v("822"), ":"]
                      }), (0, l.jsxs)(b.x, {
                        fontSize: "md",
                        fontWeight: "bold",
                        color: tF.primary.main,
                        children: ["v", i]
                      })]
                    })]
                  }), (0, l.jsxs)(eh.x, {
                    mb: 4,
                    p: 3,
                    bg: "rgba(255, 165, 0, 0.1)",
                    borderRadius: "md",
                    border: "1px solid rgba(255, 165, 0, 0.3)",
                    children: [(0, l.jsxs)(ew.k, {
                      align: "center",
                      mb: 2,
                      children: [(0, l.jsx)(tS.J, {
                        viewBox: "0 0 24 24",
                        boxSize: "5",
                        color: "orange.400",
                        mr: 2,
                        children: (0, l.jsx)("path", {
                          fill: "currentColor",
                          d: "M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM12 7C13.1 7 14 7.9 14 9V15C14 16.1 13.1 17 12 17C10.9 17 10 16.1 10 15V9C10 7.9 10.9 7 12 7ZM12 18C13.1 18 14 18.9 14 20C14 21.1 13.1 22 12 22C10.9 22 10 21.1 10 20C10 18.9 10.9 18 12 18Z"
                        })
                      }), (0, l.jsxs)(b.x, {
                        fontSize: "sm",
                        fontWeight: "bold",
                        color: "orange.400",
                        children: ["âš ï¸ ", v("823")]
                      })]
                    }), (0, l.jsxs)(tj.K, {
                      spacing: 2,
                      fontSize: "sm",
                      color: tF.text.secondary,
                      children: [(0, l.jsxs)(b.x, {
                        children: ["â€¢ ", v("824")]
                      }), (0, l.jsxs)(b.x, {
                        children: ["â€¢ ", v("825")]
                      }), (0, l.jsxs)(b.x, {
                        children: ["â€¢ ", v("826")]
                      }), (0, l.jsxs)(b.x, {
                        children: ["â€¢ ", v("827")]
                      }), (0, l.jsxs)(b.x, {
                        children: ["â€¢ ", v("828")]
                      })]
                    })]
                  }), (0, l.jsxs)(eh.x, {
                    p: 3,
                    bg: tF.bg.card,
                    borderRadius: "md",
                    border: "1px solid",
                    borderColor: tF.border.light,
                    children: [(0, l.jsxs)(b.x, {
                      fontSize: "sm",
                      fontWeight: "bold",
                      color: tF.text.primary,
                      mb: 2,
                      children: ["\uD83D\uDCCB ", v("829"), "ï¼š"]
                    }), (0, l.jsxs)(tj.K, {
                      spacing: 1,
                      fontSize: "sm",
                      color: tF.text.tertiary,
                      children: [(0, l.jsxs)(b.x, {
                        children: ["1. ", v("830")]
                      }), (0, l.jsxs)(b.x, {
                        children: ["2. ", v("831")]
                      }), (0, l.jsxs)(b.x, {
                        children: ["3. ", v("832")]
                      }), (0, l.jsxs)(b.x, {
                        children: ["4. ", v("833")]
                      })]
                    })]
                  }), (0, l.jsxs)(b.x, {
                    color: "orange.400",
                    fontSize: "sm",
                    fontWeight: "medium",
                    mt: 4,
                    textAlign: "center",
                    children: ["âš ï¸ ", v("834"), "ï¼"]
                  })]
                }), (0, l.jsxs)(tI.m, {
                  children: [(0, l.jsx)(eb.z, {
                    variant: "ghost",
                    mr: 3,
                    onClick: _,
                    color: tF.text.secondary,
                    _hover: {
                      bg: tF.bg.hover
                    },
                    children: v("835")
                  }), (0, l.jsx)(eb.z, {
                    bg: tF.primary.main,
                    color: "white",
                    _hover: {
                      bg: tF.primary.light,
                      boxShadow: "0 4px 12px rgba(16, 168, 253, 0.4)"
                    },
                    onClick: B,
                    leftIcon: (0, l.jsx)(tS.J, {
                      viewBox: "0 0 24 24",
                      boxSize: "4",
                      children: (0, l.jsx)("path", {
                        fill: "currentColor",
                        d: "M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"
                      })
                    }),
                    children: v("836")
                  })]
                })]
              })]
            })]
          })
        },
        tM = r(8559),
        t_ = r(773),
        tL = r(9634),
        tz = r(1808);
      let tN = function(e, t, r, o) {
          let n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
            i = tT(t);
          if (!(e.length > 0)) return [{ ...i,
            time: r,
            delay: 0
          }]; {
            let t = e.at(-1);
            if (void 0 === t) return []; {
              let a = e.slice(0, -1),
                l = o;
              o < 0 && ((l = r - (n > 0 ? n : t.time || 0)) > 5e3 ? l = 5e3 : (l < 0 || !isFinite(l)) && (l = 100));
              let s = [{ ...t,
                delay: o >= 0 ? o : l
              }, { ...i,
                time: r,
                delay: 0
              }];
              return a.length > 0 ? [...a, ...s] : s
            }
          }
        },
        tT = e => {
          if (e instanceof MouseEvent) {
            let t = eG(e.button),
              r = e.button,
              o = "mousedown" == e.type ? 1 : 2;
            return "wheel" === e.type && e instanceof WheelEvent && (e.deltaY > 0 ? (t = "Wheel D-Scroll", o = 3) : e.deltaY < 0 && (t = "Wheel U-Scroll", o = 4)), {
              name: t,
              code: r,
              type: 1,
              action: o,
              time: 0,
              delay: 0
            }
          } {
            let t = {
                AudioVolumeUp: "MEDIA_126",
                AudioVolumeDown: "MEDIA_127",
                AudioVolumeMute: "MEDIA_128",
                MediaPlayPause: "MEDIA_129",
                MediaStop: "MEDIA_130",
                MediaTrackPrevious: "MEDIA_131",
                MediaTrackNext: "MEDIA_132",
                LaunchMediaPlayer: "MEDIA_133",
                LaunchMail: "MEDIA_134",
                BrowserHome: "MEDIA_135",
                BrowserBack: "MEDIA_136",
                BrowserForward: "MEDIA_137",
                BrowserStop: "MEDIA_138",
                BrowserRefresh: "MEDIA_139",
                BrowserSearch: "MEDIA_140",
                BrowserFavorites: "MEDIA_141",
                LaunchApp2: "MEDIA_142",
                LaunchApp1: "MEDIA_143",
                BrightnessUp: "MEDIA_144",
                BrightnessDown: "MEDIA_145"
              },
              r = "";
            return {
              name: r = t[e.key] ? t[e.key] : "Space" === e.code ? "Space" : "Enter" === e.code ? "Enter" : "Tab" === e.code ? "Tab" : "Escape" === e.code ? "Esc" : "Backspace" === e.code ? "Backspace" : e.key.toUpperCase(),
              code: eV[e.code] || 0,
              type: 2,
              action: "keydown" == e.type ? 1 : 2,
              time: 0,
              delay: 0
            }
          }
        },
        tO = (0, eP.E)(eh.x);
      var tW = function(e) {
          let {
            isRecording: t,
            onToggleRecording: r,
            delayType: o,
            onDelayTypeChange: n,
            delayTime: i,
            onDelayTimeChange: a,
            recordCount: c,
            onRecordCountChange: d,
            onKeyboardInserted: g,
            onInsertMouse: m,
            disabled: f = !1,
            t: y
          } = e, {
            isOpen: w,
            onOpen: v,
            onClose: k
          } = (0, ex.q)(), [j, S] = (0, s.useState)("1"), [C, D] = (0, s.useState)("100"), [I, F] = (0, s.useState)(String(i)), [E, R] = (0, s.useState)(-1), [A, M] = (0, s.useState)(null), [_, L] = (0, s.useState)(!1), z = (0, s.useRef)(null);
          (0, s.useEffect)(() => {
            F(String(i))
          }, [i]);
          let N = (0, s.useCallback)(e => {
            _ && "1" === j && (e.preventDefault(), M(e))
          }, [_, j]);
          (0, s.useEffect)(() => (w && window.document.addEventListener("keydown", N), () => {
            window.document.removeEventListener("keydown", N)
          }), [w, N]), (0, s.useEffect)(() => {
            w && "1" === j && z.current && setTimeout(() => {
              var e;
              null === (e = z.current) || void 0 === e || e.focus()
            }, 100)
          }, [w, j]);
          let [T, O] = (0, s.useState)(String(c));
          return (0, s.useEffect)(() => {
            O(String(c))
          }, [c]), (0, s.useEffect)(() => {
            "1" === j ? R(-1) : (M(null), L(!1))
          }, [j]), (0, l.jsxs)(tO, {
            w: "320px",
            h: "100%",
            bg: "rgba(30, 35, 40, 0.5)",
            backdropFilter: "blur(30px)",
            borderRadius: "xl",
            border: "1px solid rgba(16, 168, 253, 0.4)",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
            display: "flex",
            flexDirection: "column",
            initial: {
              opacity: 0,
              x: 20
            },
            animate: {
              opacity: 1,
              x: 0
            },
            transition: {
              duration: .6,
              delay: .3,
              ease: "easeOut"
            },
            p: 4,
            gap: 4,
            children: [(0, l.jsxs)(ew.k, {
              align: "center",
              children: [(0, l.jsx)(eh.x, {
                w: "3px",
                h: "20px",
                borderRadius: "md",
                mr: 3,
                bg: "#10A8FD"
              }), (0, l.jsx)(b.x, {
                fontSize: "lg",
                fontWeight: "bold",
                color: "white",
                children: y("475")
              })]
            }), (0, l.jsx)(eb.z, {
              className: "btn-record",
              w: "100%",
              h: "48px",
              bg: t ? "rgba(255, 68, 68, 0.2)" : "rgba(16, 168, 253, 0.2)",
              color: t ? "#FF4444" : "#10A8FD",
              border: "2px solid ".concat(t ? "#FF4444" : "#10A8FD"),
              _hover: {
                bg: t ? "rgba(255, 68, 68, 0.3)" : "rgba(16, 168, 253, 0.3)"
              },
              fontSize: "md",
              fontWeight: "bold",
              onClick: r,
              isDisabled: f,
              children: t ? "â¹ " + y("450") : "âº " + y("451")
            }), (0, l.jsxs)(eh.x, {
              p: 4,
              bg: "rgba(255, 255, 255, 0.05)",
              borderRadius: "lg",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              children: [(0, l.jsx)(b.x, {
                fontSize: "sm",
                fontWeight: "bold",
                color: "white",
                mb: 3,
                children: y("452")
              }), (0, l.jsx)(tv.E, {
                value: o,
                onChange: n,
                children: (0, l.jsxs)(ew.k, {
                  flexDirection: "column",
                  gap: 3,
                  children: [(0, l.jsx)(tk.Y, {
                    value: "0",
                    colorScheme: "cyan",
                    children: (0, l.jsx)(b.x, {
                      fontSize: "sm",
                      color: "white",
                      children: y("453")
                    })
                  }), (0, l.jsx)(tk.Y, {
                    value: "1",
                    colorScheme: "cyan",
                    children: (0, l.jsx)(b.x, {
                      fontSize: "sm",
                      color: "white",
                      children: y("455")
                    })
                  }), (0, l.jsxs)(ew.k, {
                    align: "center",
                    justify: "space-between",
                    children: [(0, l.jsx)(tk.Y, {
                      value: "2",
                      colorScheme: "cyan",
                      children: (0, l.jsx)(b.x, {
                        fontSize: "sm",
                        color: "white",
                        children: y("456")
                      })
                    }), (0, l.jsxs)(t_.B, {
                      w: "100px",
                      ml: 2,
                      children: [(0, l.jsx)(eK.I, {
                        type: "number",
                        value: I,
                        onChange: e => {
                          F(e.target.value)
                        },
                        onBlur: e => {
                          let t = Math.max(0, Math.min(3e4, parseInt(e.target.value) || 0));
                          F(String(t)), a(t)
                        },
                        min: 0,
                        max: 3e4,
                        size: "sm",
                        bg: "rgba(0, 0, 0, 0.3)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        color: "white",
                        _focus: {
                          border: "1px solid #10A8FD"
                        }
                      }), (0, l.jsx)(tL.x, {
                        h: "32px",
                        children: (0, l.jsx)(b.x, {
                          fontSize: "xs",
                          color: "rgba(255,255,255,0.6)",
                          children: "ms"
                        })
                      })]
                    })]
                  })]
                })
              })]
            }), (0, l.jsxs)(eh.x, {
              p: 4,
              bg: "rgba(255, 255, 255, 0.05)",
              borderRadius: "lg",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              children: [(0, l.jsx)(b.x, {
                fontSize: "sm",
                fontWeight: "bold",
                color: "white",
                mb: 3,
                children: y("457")
              }), (0, l.jsxs)(ew.k, {
                align: "center",
                justify: "space-between",
                children: [(0, l.jsx)(tk.Y, {
                  isChecked: !0,
                  colorScheme: "cyan",
                  children: (0, l.jsx)(b.x, {
                    fontSize: "sm",
                    color: "white",
                    children: y("458")
                  })
                }), (0, l.jsxs)(t_.B, {
                  w: "100px",
                  ml: 2,
                  children: [(0, l.jsx)(eK.I, {
                    type: "number",
                    value: T,
                    onChange: e => {
                      O(e.target.value)
                    },
                    onBlur: () => {
                      let e = parseInt(T);
                      isNaN(e) || e < 1 ? (O("1"), d(1)) : e > 255 ? (O("255"), d(255)) : (O(String(e)), d(e))
                    },
                    onKeyDown: e => {
                      "Enter" === e.key && e.currentTarget.blur()
                    },
                    min: 1,
                    max: 255,
                    size: "sm",
                    bg: "rgba(0, 0, 0, 0.3)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    color: "white",
                    _focus: {
                      border: "1px solid #10A8FD"
                    }
                  }), (0, l.jsx)(tL.x, {
                    h: "32px",
                    children: (0, l.jsx)(b.x, {
                      fontSize: "xs",
                      color: "rgba(255,255,255,0.6)",
                      children: y("459")
                    })
                  })]
                })]
              })]
            }), (0, l.jsx)(eb.z, {
              w: "100%",
              h: "48px",
              bg: "rgba(16, 168, 253, 0.2)",
              color: "#10A8FD",
              border: "2px solid #10A8FD",
              _hover: {
                bg: "rgba(16, 168, 253, 0.3)"
              },
              fontSize: "md",
              fontWeight: "bold",
              onClick: () => {
                f || t || (S("1"), R(-1), M(null), L(!1), v())
              },
              isDisabled: f || t,
              leftIcon: (0, l.jsx)("svg", {
                width: "18",
                height: "18",
                viewBox: "0 0 24 24",
                fill: "none",
                children: (0, l.jsx)("path", {
                  d: "M12 5V19M5 12H19",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                })
              }),
              children: y("460")
            }), (0, l.jsxs)(u.u_, {
              isOpen: w,
              onClose: k,
              isCentered: !0,
              size: "md",
              children: [(0, l.jsx)(x.Z, {
                bg: "rgba(0, 0, 0, 0.4)",
                backdropFilter: "blur(10px)"
              }), (0, l.jsxs)(h.h, {
                bg: "rgba(30, 35, 36, 0.95)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                borderRadius: "xl",
                border: "1px solid rgba(16, 168, 253, 0.3)",
                backdropFilter: "blur(12px)",
                children: [(0, l.jsx)(tC.x, {
                  color: "white",
                  children: y("461")
                }), (0, l.jsx)(p.f, {
                  pb: 6,
                  children: (0, l.jsxs)(ew.k, {
                    direction: "column",
                    gap: 4,
                    children: [(0, l.jsxs)(eh.x, {
                      children: [(0, l.jsx)(b.x, {
                        fontSize: "sm",
                        fontWeight: "bold",
                        color: "white",
                        mb: 2,
                        children: y("462")
                      }), (0, l.jsx)(tv.E, {
                        value: j,
                        onChange: e => {
                          S(e), z.current && z.current.blur()
                        },
                        children: (0, l.jsx)(ew.k, {
                          gap: 4,
                          children: (0, l.jsx)(tk.Y, {
                            value: "1",
                            colorScheme: "cyan",
                            children: (0, l.jsxs)(ew.k, {
                              align: "center",
                              gap: 2,
                              children: [(0, l.jsxs)("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                children: [(0, l.jsx)("rect", {
                                  x: "2",
                                  y: "5",
                                  width: "20",
                                  height: "14",
                                  rx: "2",
                                  stroke: "currentColor",
                                  strokeWidth: "2"
                                }), (0, l.jsx)("line", {
                                  x1: "6",
                                  y1: "9",
                                  x2: "18",
                                  y2: "9",
                                  stroke: "currentColor",
                                  strokeWidth: "2"
                                }), (0, l.jsx)("line", {
                                  x1: "6",
                                  y1: "13",
                                  x2: "18",
                                  y2: "13",
                                  stroke: "currentColor",
                                  strokeWidth: "2"
                                }), (0, l.jsx)("line", {
                                  x1: "6",
                                  y1: "16",
                                  x2: "12",
                                  y2: "16",
                                  stroke: "currentColor",
                                  strokeWidth: "2"
                                })]
                              }), (0, l.jsx)(b.x, {
                                fontSize: "sm",
                                color: "white",
                                children: y("551")
                              })]
                            })
                          })
                        })
                      })]
                    }), (0, l.jsxs)(eh.x, {
                      children: [(0, l.jsx)(b.x, {
                        fontSize: "sm",
                        fontWeight: "bold",
                        color: "white",
                        mb: 2,
                        children: y("463")
                      }), "1" === j ? (0, l.jsxs)(ew.k, {
                        direction: "column",
                        gap: 2,
                        children: [(0, l.jsx)(eK.I, {
                          ref: z,
                          value: A ? tT(A).name : "",
                          placeholder: y(_ ? "464" : "465"),
                          readOnly: !0,
                          onFocus: () => {
                            L(!0)
                          },
                          onBlur: () => {
                            L(!1)
                          },
                          bg: _ ? "rgba(255, 165, 0, 0.1)" : "rgba(0, 0, 0, 0.3)",
                          border: "2px solid",
                          borderColor: _ ? "#FFA500" : A ? "#10A8FD" : "rgba(255, 255, 255, 0.2)",
                          color: A ? "#10A8FD" : "white",
                          _hover: {
                            borderColor: _ ? "#FFA500" : "#10A8FD"
                          },
                          _focus: {
                            borderColor: "#FFA500",
                            boxShadow: "0 0 0 1px #FFA500"
                          },
                          _placeholder: {
                            color: _ ? "#FFA500" : "rgba(255,255,255,0.5)"
                          },
                          cursor: "text",
                          textAlign: "center",
                          fontWeight: "medium",
                          fontSize: "md"
                        }), (0, l.jsx)(b.x, {
                          fontSize: "xs",
                          color: "rgba(255,255,255,0.5)",
                          textAlign: "center",
                          children: _ ? "\uD83C\uDFAF " + y("466") : A ? "âœ“ " + y("467") : "\uD83D\uDCA1 " + y("468")
                        })]
                      }) : (0, l.jsxs)(eg.v, {
                        matchWidth: !0,
                        children: [(0, l.jsx)(em.j, {
                          as: eb.z,
                          w: "100%",
                          bg: "rgba(0, 0, 0, 0.3)",
                          color: E >= 0 ? "#10A8FD" : "white",
                          border: "2px solid",
                          borderColor: E >= 0 ? "#10A8FD" : "rgba(255, 255, 255, 0.2)",
                          _hover: {
                            borderColor: "#10A8FD",
                            bg: "rgba(16, 168, 253, 0.05)"
                          },
                          _active: {
                            bg: "rgba(16, 168, 253, 0.1)"
                          },
                          rightIcon: (0, l.jsx)("svg", {
                            width: "12",
                            height: "12",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            children: (0, l.jsx)("path", {
                              d: "M6 9L12 15L18 9",
                              stroke: "currentColor",
                              strokeWidth: "2",
                              strokeLinecap: "round",
                              strokeLinejoin: "round"
                            })
                          }),
                          textAlign: "left",
                          fontWeight: "medium",
                          children: E >= 0 ? eG(E) : y("477")
                        }), (0, l.jsx)(ef.q, {
                          bg: "rgba(30, 35, 40, 0.95)",
                          backdropFilter: "blur(10px)",
                          border: "1px solid rgba(16, 168, 253, 0.4)",
                          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                          minW: "0",
                          children: [{
                            value: 0,
                            label: y("112")
                          }, {
                            value: 1,
                            label: y("114")
                          }, {
                            value: 2,
                            label: y("115")
                          }, {
                            value: 3,
                            label: y("117")
                          }, {
                            value: 4,
                            label: y("116")
                          }].map(e => (0, l.jsxs)(ey.s, {
                            bg: E === e.value ? "rgba(16, 168, 253, 0.2)" : "transparent",
                            color: E === e.value ? "#10A8FD" : "white",
                            _hover: {
                              bg: "rgba(16, 168, 253, 0.1)"
                            },
                            onClick: () => R(e.value),
                            children: [E === e.value && "âœ“ ", e.label]
                          }, e.value))
                        })]
                      })]
                    }), (0, l.jsxs)(eh.x, {
                      children: [(0, l.jsx)(b.x, {
                        fontSize: "sm",
                        fontWeight: "bold",
                        color: "white",
                        mb: 2,
                        children: y("546")
                      }), (0, l.jsxs)(t_.B, {
                        children: [(0, l.jsx)(eK.I, {
                          type: "number",
                          value: C,
                          onChange: e => {
                            D(e.target.value)
                          },
                          onBlur: e => {
                            D(String(Math.max(0, Math.min(1e4, parseInt(e.target.value) || 0))))
                          },
                          min: 0,
                          max: 1e4,
                          bg: "rgba(0, 0, 0, 0.3)",
                          border: "1px solid rgba(255, 255, 255, 0.2)",
                          color: "white",
                          _focus: {
                            border: "1px solid #10A8FD"
                          }
                        }), (0, l.jsx)(tL.x, {
                          children: (0, l.jsx)(b.x, {
                            fontSize: "sm",
                            color: "rgba(255,255,255,0.6)",
                            children: "ms"
                          })
                        })]
                      }), (0, l.jsx)(b.x, {
                        fontSize: "xs",
                        color: "rgba(255,255,255,0.5)",
                        mt: 1,
                        children: y("547")
                      })]
                    })]
                  })
                }), (0, l.jsxs)(tI.m, {
                  children: [(0, l.jsx)(eb.z, {
                    variant: "ghost",
                    onClick: k,
                    color: "rgba(255,255,255,0.8)",
                    _hover: {
                      bg: "rgba(255,255,255,0.1)"
                    },
                    mr: 3,
                    children: y("548")
                  }), (0, l.jsx)(eb.z, {
                    bg: "#10A8FD",
                    color: "white",
                    _hover: {
                      bg: "#00D8DD"
                    },
                    onClick: () => {
                      let e = parseInt(C) || 0;
                      "1" === j ? A && (g(A, e), k()) : E >= 0 && (m(E, e), k())
                    },
                    isDisabled: "1" === j && !A || "2" === j && E < 0,
                    children: y("476")
                  })]
                })]
              })]
            })]
          })
        },
        tB = function(e) {
          let {
            isOpen: t,
            onClose: r,
            title: o,
            message: n,
            type: i = "info",
            confirmText: a = "ç¡®å®š",
            onConfirm: c,
            showCancel: d = !1,
            cancelText: u = "å–æ¶ˆ"
          } = e, h = (0, s.useRef)(null), g = {
            error: {
              borderColor: "rgba(255, 68, 68, 0.3)",
              icon: "âŒ",
              buttonColor: "#FF4444",
              buttonHoverColor: "#FF6666"
            },
            warning: {
              borderColor: "rgba(255, 165, 0, 0.3)",
              icon: "âš ï¸",
              buttonColor: "#FFA500",
              buttonHoverColor: "#FFB520"
            },
            info: {
              borderColor: "rgba(16, 168, 253, 0.3)",
              icon: "â„¹ï¸",
              buttonColor: "#10A8FD",
              buttonHoverColor: "#0E96E3"
            },
            success: {
              borderColor: "rgba(72, 187, 120, 0.3)",
              icon: "âœ…",
              buttonColor: "#48BB78",
              buttonHoverColor: "#38A169"
            }
          }[i];
          return (0, l.jsx)(tz.aR, {
            isOpen: t,
            leastDestructiveRef: h,
            onClose: r,
            isCentered: !0,
            children: (0, l.jsx)(x.Z, {
              bg: "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(10px)",
              children: (0, l.jsxs)(tz._T, {
                bg: "rgba(30, 35, 36, 0.95)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                borderRadius: "xl",
                border: "1px solid ".concat(g.borderColor),
                backdropFilter: "blur(12px)",
                children: [(0, l.jsxs)(tC.x, {
                  fontSize: "lg",
                  fontWeight: "bold",
                  color: "white",
                  children: [g.icon, " ", o]
                }), (0, l.jsx)(p.f, {
                  color: "rgba(255,255,255,0.8)",
                  whiteSpace: "pre-wrap",
                  children: n
                }), (0, l.jsxs)(tI.m, {
                  children: [d && (0, l.jsx)(eb.z, {
                    ref: h,
                    onClick: r,
                    variant: "ghost",
                    color: "rgba(255,255,255,0.8)",
                    _hover: {
                      bg: "rgba(255,255,255,0.1)"
                    },
                    mr: 3,
                    children: u
                  }), (0, l.jsx)(eb.z, {
                    onClick: () => {
                      c && c(), r()
                    },
                    bg: g.buttonColor,
                    color: "white",
                    _hover: {
                      bg: g.buttonHoverColor
                    },
                    w: d ? "auto" : "100%",
                    children: a
                  })]
                })]
              })
            })
          })
        };
      let tP = {
          MAX_ACTIONS: 60
        },
        tU = {
          ITEM_HEIGHT: 60,
          BUFFER_SIZE: 5,
          SCROLL_DEBOUNCE: 16
        },
        tH = {
          INDEX: "50px",
          TYPE: "70px",
          ACTION: "70px",
          DELAY: "80px",
          OPERATIONS: "90px"
        },
        tK = {
          NONE: "0",
          RECORD: "1"
        },
        tV = {
          MOUSE: 1,
          KEYBOARD: 2
        },
        tG = {
          PRESS: 1,
          RELEASE: 2,
          SCROLL_DOWN: 3,
          SCROLL_UP: 4,
          SCROLL_LEFT: 5,
          SCROLL_RIGHT: 6
        };
      var tY = function() {
          let {
            t: e,
            macroProfiles: t,
            setMacroProfiles: r,
            selectMacroProfile: o,
            setSelectMacroProfile: n,
            localConfigFile: i,
            filterSensitiveWords: a,
            profiles: c,
            setProfiles: d,
            profileIndex: g,
            keyInfos: m,
            setKeyInfos: f,
            keyItemLayoutRef: y,
            updateKeyboardKeys: w,
            connectedDevice: v,
            blockDeviceStatusPolling: k,
            unblockDeviceStatusPolling: j
          } = (0, s.useContext)(ed), S = (0, s.useRef)(null), C = (0, s.useRef)(null), D = (0, s.useRef)(null), I = (0, s.useRef)(null), F = (0, s.useRef)(0), E = (0, s.useRef)(600), R = (0, s.useRef)(null), [A, M] = (0, s.useState)(0), [_, L] = (0, s.useState)(-1), [z, N] = (0, s.useState)(""), [T, O] = (0, s.useState)(null), {
            isOpen: W,
            onOpen: B,
            onClose: P
          } = (0, ex.q)(), [U, H] = (0, s.useState)(null), {
            isOpen: K,
            onOpen: V,
            onClose: G
          } = (0, ex.q)(), [Y, Z] = (0, s.useState)(null), {
            isOpen: J,
            onOpen: q,
            onClose: X
          } = (0, ex.q)(), [Q, $] = (0, s.useState)(null), {
            isOpen: ee,
            onOpen: et,
            onClose: er
          } = (0, ex.q)(), [eo, en] = (0, s.useState)("0"), [ei, ea] = (0, s.useState)(1), [el, es] = (0, s.useState)(null), [ec, eu] = (0, s.useState)(-1), [ep, ev] = (0, s.useState)(!1), ek = (0, s.useRef)(null), [ej, eS] = (0, s.useState)(!1), [eC, eD] = (0, s.useState)("1"), [eI, eF] = (0, s.useState)(100), [eE, eR] = (0, s.useState)(0), [eA, eM] = (0, s.useState)(1), eL = (0, s.useMemo)(() => o >= 0 && t[o] ? t[o].list : [], [o, t]), ez = (0, s.useMemo)(() => {
            let e = F.current,
              t = E.current;
            return {
              startIndex: Math.max(0, Math.floor(e / tU.ITEM_HEIGHT) - tU.BUFFER_SIZE),
              endIndex: Math.min(eL.length - 1, Math.ceil((e + t) / tU.ITEM_HEIGHT) + tU.BUFFER_SIZE)
            }
          }, [eL.length, A]), eN = (0, s.useMemo)(() => {
            let {
              startIndex: e,
              endIndex: t
            } = ez;
            return eL.slice(e, t + 1).map((t, r) => ({ ...t,
              originalIndex: e + r
            }))
          }, [eL, ez]), eT = (0, s.useMemo)(() => eL.length * tU.ITEM_HEIGHT, [eL.length]), eO = (0, s.useMemo)(() => ez.startIndex * tU.ITEM_HEIGHT, [ez.startIndex]), eW = t => {
            let r = t;
            return [
              ["å®", "Macro", "500"]
            ].forEach(t => {
              let [o, n, i] = t;
              r.includes(o) ? r = r.replace(RegExp(o, "g"), e(i)) : r.toLowerCase().includes(n.toLowerCase()) && (r = r.replace(RegExp(n, "gi"), e(i)))
            }), r
          }, eB = t => t.startsWith("MEDIA_") ? e(t.replace("MEDIA_", "")) : t, eP = t => t === tV.MOUSE ? e("550") : t === tV.KEYBOARD ? e("551") : e("552"), eU = t => {
            switch (t) {
              case tG.PRESS:
                return e("553");
              case tG.RELEASE:
                return e("554");
              case tG.SCROLL_DOWN:
                return e("555");
              case tG.SCROLL_UP:
                return e("556");
              case tG.SCROLL_LEFT:
                return e("557");
              case tG.SCROLL_RIGHT:
                return e("558");
              default:
                return e("552")
            }
          }, eH = (e, t) => {
            L(e), N(eW(t))
          }, eV = o => {
            let n = z.trim();
            if (!n) {
              Z({
                title: e("568"),
                message: e("569"),
                type: "warning"
              }), q(), L(-1);
              return
            }
            let l = a(n);
            if (t.some((e, t) => t !== o && e.name === l)) {
              Z({
                title: e("570"),
                message: e("571"),
                type: "warning"
              }), q();
              return
            }
            let s = t.map((e, t) => t === o ? { ...e,
              name: l
            } : e);
            r(s), localStorage.setItem(i.macroName, JSON.stringify(s));
            let u = c.map(e => {
              let t = e.kbKeys.map(e => e.map(e => 2 === e.type && e.code2 === o ? { ...e,
                keyName: l
              } : e));
              return { ...e,
                kbKeys: t
              }
            });
            d(u), localStorage.setItem(i.profileName, JSON.stringify(u)), u[g] && f(u[g].kbKeys), L(-1)
          }, eY = () => {
            L(-1), N("")
          }, eZ = e => {
            let t = new Blob([JSON.stringify(e, null, 2)], {
                type: "application/json"
              }),
              r = URL.createObjectURL(t),
              o = document.createElement("a");
            o.href = r, o.download = "".concat(e.name, ".json"), document.body.appendChild(o), o.click(), document.body.removeChild(o), URL.revokeObjectURL(r)
          }, eJ = e => {
            let r = t[e].name;
            O({
              type: "macro",
              index: e,
              name: r
            }), B()
          }, eq = async () => {
            var a;
            if (!T || "macro" !== T.type || void 0 === T.index) return;
            let l = T.index,
              s = c;
            if (!s || 0 === s.length) {
              let e = localStorage.getItem(i.profileName);
              if (e) try {
                s = JSON.parse(e)
              } catch (e) {
                console.error("è§£æžé…ç½®æ•°æ®å¤±è´¥:", e), s = []
              } else s = []
            }
            let u = t.filter((e, t) => t !== l);
            r(u), localStorage.setItem(i.macroName, JSON.stringify(u)), o === l ? n(u.length > 0 ? 0 : -1) : o > l && n(o - 1);
            let x = y.current || [],
              h = s.map(t => {
                let r = t.kbKeys.map(t => t.map((t, r) => {
                  if (2 === t.type) {
                    if (t.code2 === l) {
                      let e = x[r];
                      return e ? { ...t,
                        type: 0,
                        code1: 0,
                        code2: e.code,
                        code3: 0,
                        keyName: "",
                        layer: t.layer,
                        index: t.index
                      } : { ...t,
                        type: 0,
                        code1: 0,
                        code2: 0,
                        code3: 0,
                        keyName: ""
                      }
                    }
                    if (t.code2 > l) {
                      var o;
                      let r = t.code2 - 1,
                        n = (null === (o = u[r]) || void 0 === o ? void 0 : o.name) || "".concat(e("500"), " ").concat(r + 1);
                      return { ...t,
                        code2: r,
                        keyName: n
                      }
                    }
                  }
                  return t
                }));
                return { ...t,
                  kbKeys: r
                }
              });
            h.length > 0 && (d(h), localStorage.setItem(i.profileName, JSON.stringify(h)));
            let p = null === (a = h[g]) || void 0 === a ? void 0 : a.kbKeys;
            p && (f(p), w(p)), v && p && setTimeout(async () => {
              try {
                var e;
                k();
                let t = (null === (e = s[g]) || void 0 === e ? void 0 : e.kbKeys) || m;
                for (let e = 0; e < p.length; e++) {
                  let r = p[e],
                    o = t[e];
                  if (r && o)
                    for (let e = 0; e < r.length; e++) {
                      let t = r[e],
                        n = o[e];
                      if (t && x[e] && n && (n.type !== t.type || n.code2 !== t.code2)) try {
                        if (2 === t.type) {
                          let r = u[t.code2];
                          if (r && r.list && r.list.length > 0) {
                            let o = Math.min(r.count || 1, 255);
                            await v.setMacro(g, x[e].code, t, r.list, o)
                          }
                        } else await v.setKeyMacro(g, x[e].code, t);
                        await v.delay(10)
                      } catch (e) {
                        console.error("åŒæ­¥æŒ‰é”®å¤±è´¥:", e)
                      }
                    }
                }
              } catch (e) {
                console.error("è®¾å¤‡åŒæ­¥å¤±è´¥:", e)
              } finally {
                j()
              }
            }, 100), P(), O(null)
          }, eX = (0, s.useCallback)(e => {
            let t = e.target.scrollTop;
            F.current = t, R.current && clearTimeout(R.current), R.current = setTimeout(() => {
              M(e => e + 1)
            }, tU.SCROLL_DEBOUNCE)
          }, []), eQ = (0, s.useCallback)(() => {
            if (I.current) {
              let e = eT - E.current;
              requestAnimationFrame(() => {
                I.current && I.current.scrollTo({
                  top: Math.max(0, e),
                  behavior: "auto"
                })
              })
            }
          }, [eT]);
          (0, s.useEffect)(() => {
            let e;
            let t = () => {
              if (I.current) {
                let e = I.current.getBoundingClientRect().height;
                Math.abs(e - E.current) > 10 && (E.current = e, M(e => e + 1))
              }
            };
            t();
            let r = () => {
              clearTimeout(e), e = setTimeout(t, 100)
            };
            return window.addEventListener("resize", r), () => {
              window.removeEventListener("resize", r), clearTimeout(e), R.current && clearTimeout(R.current)
            }
          }, []), (0, s.useEffect)(() => {
            ej && eL.length > 0 && requestAnimationFrame(() => {
              setTimeout(() => {
                eQ()
              }, 50)
            })
          }, [eL.length, ej, eQ]);
          let e$ = () => {
              if (o < 0) return;
              let e = t.map((e, t) => t === o ? { ...e,
                list: []
              } : e);
              r(e), localStorage.setItem(i.macroName, JSON.stringify(e)), P(), O(null)
            },
            e0 = e => {
              var t;
              if (o < 0) return;
              let r = (null === (t = eL[e]) || void 0 === t ? void 0 : t.name) || "åŠ¨ä½œ";
              O({
                type: "action",
                index: e,
                name: r
              }), B()
            },
            e1 = () => {
              if (!T || "action" !== T.type || void 0 === T.index || o < 0) return;
              let e = T.index,
                n = t.map((t, r) => r === o ? { ...t,
                  list: t.list.filter((t, r) => r !== e)
                } : t);
              r(n), localStorage.setItem(i.macroName, JSON.stringify(n)), P(), O(null)
            },
            e2 = e => {
              if (o < 0) return;
              let t = eL[e];
              t && ($({
                index: e,
                action: t
              }), en(String(t.delay)), ea(t.action), t.type === tV.MOUSE ? (eu(t.code), es(null)) : (es(null), eu(-1)), ev(!1), et())
            },
            e5 = (0, s.useCallback)(e => {
              ep && Q && Q.action.type === tV.KEYBOARD && (e.preventDefault(), es(e))
            }, [ep, Q]);
          (0, s.useEffect)(() => (ee && window.document.addEventListener("keydown", e5), () => {
            window.document.removeEventListener("keydown", e5)
          }), [ee, e5]);
          let e3 = () => {
              if (!T) return {
                title: "",
                description: ""
              };
              switch (T.type) {
                case "macro":
                  return {
                    title: e("572"),
                    description: "".concat(e("573"), ' "').concat(T.name, '" ').concat(e("574"))
                  };
                case "clear":
                  return {
                    title: e("575"),
                    description: e("576")
                  };
                case "action":
                  return {
                    title: e("577"),
                    description: "".concat(e("578"), ' "').concat(T.name, '" ').concat(e("579"))
                  };
                default:
                  return {
                    title: "",
                    description: ""
                  }
              }
            },
            e6 = (0, s.useCallback)(e => {
              if (o < 0) return;
              let n = t.map((t, r) => r === o ? { ...t,
                list: e,
                delayType: parseInt(eC),
                delayTime: eI,
                count: eA
              } : t);
              r(n), localStorage.setItem(i.macroName, JSON.stringify(n))
            }, [o, t, eC, eI, eA, i.macroName, r]),
            e4 = (0, s.useCallback)((t, r) => {
              let n = tT(t);
              if (n && o >= 0) {
                let t = eL || [];
                if (t.length + 2 > tP.MAX_ACTIONS) {
                  H({
                    title: e("586"),
                    message: "".concat(e("587"), " ").concat(t.length, " ").concat(e("588"), "ï¼ˆ").concat(tP.MAX_ACTIONS, "ä¸ªï¼‰ã€‚\n\n").concat(e("589"))
                  }), V();
                  return
                }
                e6([...t, {
                  name: n.name,
                  code: n.code,
                  type: tV.KEYBOARD,
                  action: tG.PRESS,
                  delay: r,
                  time: 0
                }, {
                  name: n.name,
                  code: n.code,
                  type: tV.KEYBOARD,
                  action: tG.RELEASE,
                  delay: r,
                  time: 0
                }])
              }
            }, [o, eL, e6]);
          return (0, s.useEffect)(() => {
            ej && D.current && D.current.scrollIntoView({
              behavior: "smooth"
            })
          }, [ej, eL.length]), (0, s.useEffect)(() => {
            if (o >= 0 && t[o]) {
              var e;
              let r = t[o];
              void 0 !== r.delayType && eD(String(r.delayType)), void 0 !== r.delayTime && eF(r.delayTime), eM(null !== (e = r.count) && void 0 !== e ? e : 1)
            }
          }, [o]), (0, s.useEffect)(() => {
            if (o >= 0 && t[o]) {
              var e;
              let n = t[o],
                a = parseInt(eC),
                l = null !== (e = n.count) && void 0 !== e ? e : 1;
              if (n.delayType !== a || n.delayTime !== eI || l !== eA) {
                let e = t.map((e, t) => t === o ? { ...e,
                  delayType: a,
                  delayTime: eI,
                  count: eA
                } : e);
                r(e), localStorage.setItem(i.macroName, JSON.stringify(e))
              }
            }
          }, [eC, eI, eA, o, t, i.macroName]), (0, s.useEffect)(() => (ej ? window.oncontextmenu = e => {
            e.preventDefault()
          } : window.oncontextmenu = null, () => {
            window.oncontextmenu = null
          }), [ej]), (0, s.useEffect)(() => {
            if (!ej) return;
            let t = t => {
              if (t.preventDefault(), eL.length >= tP.MAX_ACTIONS) {
                H({
                  title: e("590"),
                  message: "".concat(e("591"), "ï¼ˆ").concat(tP.MAX_ACTIONS, "ä¸ªï¼‰ï¼Œ").concat(e("592"))
                }), V(), eS(!1);
                return
              }
              if (t instanceof KeyboardEvent) {
                if (t.repeat) return;
                let e = eL || [],
                  r = Math.floor(t.timeStamp),
                  o = eC === tK.NONE ? 0 : eC === tK.RECORD ? -1 : eI,
                  n = "MetaLeft" === t.code || "MetaRight" === t.code || "OSLeft" === t.code || "OSRight" === t.code,
                  i = "PrintScreen" === t.code;
                if (n && "keydown" === t.type) {
                  let n = tN(e, t, r, o, eE);
                  e6(n = tN(n, new KeyboardEvent("keyup", {
                    code: t.code,
                    key: t.key,
                    keyCode: t.keyCode,
                    which: t.which,
                    bubbles: !0,
                    cancelable: !0
                  }), r + 50, 50, r)), eR(r + 50)
                } else if (i && "keyup" === t.type) {
                  let n = tN(e, new KeyboardEvent("keydown", {
                    code: t.code,
                    key: t.key,
                    keyCode: t.keyCode,
                    which: t.which,
                    bubbles: !0,
                    cancelable: !0
                  }), r - 50, o, eE);
                  e6(n = tN(n, t, r, 50, r - 50)), eR(r)
                } else {
                  if (n && "keyup" === t.type || i && "keydown" === t.type) return;
                  e6(tN(e, t, r, o, eE)), eR(r)
                }
              } else {
                if (t.target instanceof HTMLButtonElement) {
                  var r, o;
                  if (null === (o = t.target) || void 0 === o ? void 0 : null === (r = o.classList) || void 0 === r ? void 0 : r.contains("btn-record")) return
                }
                let e = eL || [],
                  n = Math.floor(t.timeStamp);
                e6(tN(e, t, n, eC === tK.NONE ? 0 : eC === tK.RECORD ? -1 : eI, eE)), eR(n)
              }
            };
            return window.document.addEventListener("keydown", t), window.document.addEventListener("keyup", t), () => {
              window.document.removeEventListener("keydown", t), window.document.removeEventListener("keyup", t)
            }
          }, [ej, eE, eI, eC, eL]), (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)("input", {
              ref: S,
              type: "file",
              accept: ".json",
              style: {
                display: "none"
              },
              onChange: o => {
                var a;
                let l = null === (a = o.target.files) || void 0 === a ? void 0 : a[0];
                if (!l) return;
                let s = new FileReader;
                s.onload = o => {
                  try {
                    var a;
                    let l = null === (a = o.target) || void 0 === a ? void 0 : a.result,
                      s = JSON.parse(l);
                    if (!s.name || !Array.isArray(s.list)) throw Error(e("565"));
                    let c = s.name,
                      d = 1;
                    for (; t.some(e => e.name === c);) c = "".concat(s.name, " (").concat(d, ")"), d++;
                    s.name = c, (void 0 === s.count || null === s.count || s.count < 1) && (s.count = 1);
                    let u = [...t, s];
                    r(u), n(u.length - 1), localStorage.setItem(i.macroName, JSON.stringify(u))
                  } catch (t) {
                    Z({
                      title: e("566"),
                      message: e("567"),
                      type: "error"
                    }), q()
                  }
                }, s.readAsText(l), o.target.value = ""
              }
            }), (0, l.jsx)(eh.x, {
              w: "100%",
              h: "100%",
              position: "relative",
              overflow: "hidden",
              children: (0, l.jsxs)(ew.k, {
                w: "100%",
                h: "100%",
                gap: 2,
                p: 2,
                children: [(0, l.jsxs)(eh.x, {
                  w: "320px",
                  h: "100%",
                  bg: "rgba(30, 35, 40, 0.5)",
                  backdropFilter: "blur(30px)",
                  borderRadius: "xl",
                  border: "1px solid rgba(16, 168, 253, 0.4)",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
                  display: "flex",
                  flexDirection: "column",
                  children: [(0, l.jsxs)(ew.k, {
                    align: "center",
                    justify: "space-between",
                    p: 4,
                    borderBottom: "1px solid rgba(16, 168, 253, 0.2)",
                    children: [(0, l.jsxs)(ew.k, {
                      align: "center",
                      children: [(0, l.jsx)(eh.x, {
                        w: "3px",
                        h: "20px",
                        borderRadius: "md",
                        mr: 3,
                        bg: "#10A8FD"
                      }), (0, l.jsx)(b.x, {
                        fontSize: "lg",
                        fontWeight: "bold",
                        color: "white",
                        children: e("501")
                      })]
                    }), (0, l.jsxs)(ew.k, {
                      gap: 2,
                      children: [(0, l.jsx)(e_.u, {
                        label: e("502"),
                        placement: "top",
                        children: (0, l.jsx)(tM.h, {
                          "aria-label": e("502"),
                          icon: (0, l.jsx)("svg", {
                            width: "18",
                            height: "18",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            children: (0, l.jsx)("path", {
                              d: "M12 5V19M5 12H19",
                              stroke: "currentColor",
                              strokeWidth: "2",
                              strokeLinecap: "round",
                              strokeLinejoin: "round"
                            })
                          }),
                          size: "sm",
                          bg: "rgba(16, 168, 253, 0.1)",
                          color: "#10A8FD",
                          _hover: {
                            bg: "rgba(16, 168, 253, 0.2)"
                          },
                          onClick: () => {
                            let o = e("500"),
                              a = 0;
                            t.forEach(e => {
                              let t = e.name.match(/^(å®|Macro)\s+(\d+)$/i);
                              if (t) {
                                let e = parseInt(t[2], 10);
                                e > a && (a = e)
                              }
                            });
                            let l = a + 1,
                              s = [...t, {
                                name: "".concat(o, " ").concat(l),
                                type: 1,
                                count: 1,
                                webUrl: "",
                                delayTime: 100,
                                delayType: 1,
                                list: []
                              }];
                            r(s), n(s.length - 1), localStorage.setItem(i.macroName, JSON.stringify(s))
                          }
                        })
                      }), (0, l.jsx)(e_.u, {
                        label: e("503"),
                        placement: "top",
                        children: (0, l.jsx)(tM.h, {
                          "aria-label": e("503"),
                          icon: (0, l.jsxs)("svg", {
                            width: "18",
                            height: "18",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            children: [(0, l.jsx)("path", {
                              d: "M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15",
                              stroke: "currentColor",
                              strokeWidth: "2",
                              strokeLinecap: "round",
                              strokeLinejoin: "round"
                            }), (0, l.jsx)("path", {
                              d: "M7 10L12 15L17 10",
                              stroke: "currentColor",
                              strokeWidth: "2",
                              strokeLinecap: "round",
                              strokeLinejoin: "round"
                            }), (0, l.jsx)("path", {
                              d: "M12 15V3",
                              stroke: "currentColor",
                              strokeWidth: "2",
                              strokeLinecap: "round",
                              strokeLinejoin: "round"
                            })]
                          }),
                          size: "sm",
                          bg: "rgba(16, 168, 253, 0.1)",
                          color: "#10A8FD",
                          _hover: {
                            bg: "rgba(16, 168, 253, 0.2)"
                          },
                          onClick: () => {
                            var e;
                            null === (e = S.current) || void 0 === e || e.click()
                          }
                        })
                      })]
                    })]
                  }), (0, l.jsx)(eh.x, {
                    flex: "1",
                    overflowY: "auto",
                    p: 2,
                    minHeight: 0,
                    sx: {
                      "&::-webkit-scrollbar": {
                        width: "8px"
                      },
                      "&::-webkit-scrollbar-track": {
                        background: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "4px"
                      },
                      "&::-webkit-scrollbar-thumb": {
                        background: "rgba(16, 168, 253, 0.3)",
                        borderRadius: "4px",
                        "&:hover": {
                          background: "rgba(16, 168, 253, 0.5)"
                        }
                      },
                      scrollbarWidth: "thin",
                      scrollbarColor: "rgba(16, 168, 253, 0.3) rgba(255, 255, 255, 0.05)"
                    },
                    children: 0 === t.length ? (0, l.jsxs)(ew.k, {
                      direction: "column",
                      align: "center",
                      justify: "center",
                      h: "100%",
                      color: "rgba(255,255,255,0.5)",
                      children: [(0, l.jsx)(b.x, {
                        fontSize: "sm",
                        children: e("504")
                      }), (0, l.jsx)(b.x, {
                        fontSize: "xs",
                        mt: 2,
                        children: e("505")
                      })]
                    }) : (0, l.jsx)(ew.k, {
                      direction: "column",
                      gap: 2,
                      children: t.map((t, r) => {
                        var i;
                        return (0, l.jsxs)(eh.x, {
                          p: 3,
                          borderRadius: "lg",
                          bg: o === r ? "rgba(16, 168, 253, 0.2)" : "rgba(255, 255, 255, 0.05)",
                          border: o === r ? "1px solid #10A8FD" : "1px solid transparent",
                          cursor: "pointer",
                          sx: {
                            transition: "all 0.2s"
                          },
                          _hover: {
                            bg: o === r ? "rgba(16, 168, 253, 0.25)" : "rgba(255, 255, 255, 0.08)"
                          },
                          onClick: () => n(r),
                          children: [_ === r ? (0, l.jsx)(eK.I, {
                            value: z,
                            onChange: e => N(e.target.value),
                            onKeyDown: e => {
                              e.stopPropagation(), "Enter" === e.key && (e.preventDefault(), eV(r)), "Escape" === e.key && (e.preventDefault(), eY())
                            },
                            onBlur: () => eV(r),
                            autoFocus: !0,
                            size: "sm",
                            bg: "rgba(0, 0, 0, 0.3)",
                            border: "1px solid #10A8FD",
                            color: "white",
                            _focus: {
                              border: "1px solid #10A8FD"
                            },
                            mb: 2,
                            onClick: e => e.stopPropagation(),
                            onMouseDown: e => e.stopPropagation()
                          }) : (0, l.jsx)(b.x, {
                            fontSize: "md",
                            fontWeight: "bold",
                            color: "white",
                            mb: 2,
                            noOfLines: 1,
                            children: eW(t.name)
                          }), (0, l.jsxs)(ew.k, {
                            align: "center",
                            justify: "space-between",
                            children: [(0, l.jsxs)(b.x, {
                              fontSize: "xs",
                              color: "rgba(255,255,255,0.5)",
                              children: [(null === (i = t.list) || void 0 === i ? void 0 : i.length) || 0, " ", e("506")]
                            }), (0, l.jsxs)(ew.k, {
                              gap: 1,
                              children: [(0, l.jsx)(e_.u, {
                                label: e("507"),
                                placement: "top",
                                children: (0, l.jsx)(tM.h, {
                                  "aria-label": e("507"),
                                  onClick: e => {
                                    e.stopPropagation(), eH(r, t.name)
                                  },
                                  icon: (0, l.jsxs)("svg", {
                                    width: "14",
                                    height: "14",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    children: [(0, l.jsx)("path", {
                                      d: "M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13",
                                      stroke: "currentColor",
                                      strokeWidth: "2",
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round"
                                    }), (0, l.jsx)("path", {
                                      d: "M18.5 2.5C18.8978 2.10217 19.4374 1.87868 20 1.87868C20.5626 1.87868 21.1022 2.10217 21.5 2.5C21.8978 2.89782 22.1213 3.43739 22.1213 4C22.1213 4.56261 21.8978 5.10217 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z",
                                      stroke: "currentColor",
                                      strokeWidth: "2",
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round"
                                    })]
                                  }),
                                  size: "xs",
                                  variant: "ghost",
                                  color: "rgba(255,255,255,0.6)",
                                  _hover: {
                                    color: "#10A8FD",
                                    bg: "rgba(0,248,255,0.1)"
                                  }
                                })
                              }), (0, l.jsx)(e_.u, {
                                label: e("508"),
                                placement: "top",
                                children: (0, l.jsx)(tM.h, {
                                  "aria-label": e("508"),
                                  onClick: e => {
                                    e.stopPropagation(), eZ(t)
                                  },
                                  icon: (0, l.jsxs)("svg", {
                                    width: "14",
                                    height: "14",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    children: [(0, l.jsx)("path", {
                                      d: "M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15",
                                      stroke: "currentColor",
                                      strokeWidth: "2",
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round"
                                    }), (0, l.jsx)("path", {
                                      d: "M17 8L12 3L7 8",
                                      stroke: "currentColor",
                                      strokeWidth: "2",
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round"
                                    }), (0, l.jsx)("path", {
                                      d: "M12 3V15",
                                      stroke: "currentColor",
                                      strokeWidth: "2",
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round"
                                    })]
                                  }),
                                  size: "xs",
                                  variant: "ghost",
                                  color: "rgba(255,255,255,0.6)",
                                  _hover: {
                                    color: "#10A8FD",
                                    bg: "rgba(0,248,255,0.1)"
                                  }
                                })
                              }), (0, l.jsx)(e_.u, {
                                label: e("509"),
                                placement: "top",
                                children: (0, l.jsx)(tM.h, {
                                  "aria-label": e("509"),
                                  onClick: e => {
                                    e.stopPropagation(), eJ(r)
                                  },
                                  icon: (0, l.jsxs)("svg", {
                                    width: "14",
                                    height: "14",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    children: [(0, l.jsx)("path", {
                                      d: "M3 6H5H21",
                                      stroke: "currentColor",
                                      strokeWidth: "2",
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round"
                                    }), (0, l.jsx)("path", {
                                      d: "M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z",
                                      stroke: "currentColor",
                                      strokeWidth: "2",
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round"
                                    })]
                                  }),
                                  size: "xs",
                                  variant: "ghost",
                                  color: "rgba(255,255,255,0.6)",
                                  _hover: {
                                    color: "#FF4444",
                                    bg: "rgba(255,68,68,0.1)"
                                  }
                                })
                              })]
                            })]
                          })]
                        }, r)
                      })
                    })
                  })]
                }), (0, l.jsxs)(eh.x, {
                  flex: "1",
                  h: "100%",
                  bg: "rgba(30, 35, 40, 0.5)",
                  backdropFilter: "blur(30px)",
                  borderRadius: "xl",
                  border: "1px solid rgba(16, 168, 253, 0.4)",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
                  display: "flex",
                  flexDirection: "column",
                  children: [(0, l.jsxs)(ew.k, {
                    align: "center",
                    justify: "space-between",
                    p: 4,
                    borderBottom: "1px solid rgba(16, 168, 253, 0.2)",
                    children: [(0, l.jsxs)(ew.k, {
                      align: "center",
                      children: [(0, l.jsx)(eh.x, {
                        w: "3px",
                        h: "20px",
                        borderRadius: "md",
                        mr: 3,
                        bg: "#10A8FD"
                      }), (0, l.jsx)(b.x, {
                        fontSize: "lg",
                        fontWeight: "bold",
                        color: "white",
                        children: e("520")
                      })]
                    }), (0, l.jsx)(e_.u, {
                      label: e("521"),
                      placement: "top",
                      children: (0, l.jsx)(tM.h, {
                        "aria-label": e("521"),
                        icon: (0, l.jsxs)("svg", {
                          width: "18",
                          height: "18",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          children: [(0, l.jsx)("path", {
                            d: "M3 6H5H21",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          }), (0, l.jsx)("path", {
                            d: "M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          })]
                        }),
                        size: "sm",
                        bg: "rgba(255, 68, 68, 0.1)",
                        color: "#FF4444",
                        _hover: {
                          bg: "rgba(255, 68, 68, 0.2)"
                        },
                        onClick: () => {
                          o < 0 || (O({
                            type: "clear"
                          }), B())
                        },
                        isDisabled: o < 0 || 0 === eL.length
                      })
                    })]
                  }), (0, l.jsxs)(eh.x, {
                    flex: "1",
                    display: "flex",
                    flexDirection: "column",
                    p: 2,
                    minHeight: 0,
                    overflow: "hidden",
                    children: [(0, l.jsxs)(ew.k, {
                      px: 3,
                      py: 2,
                      mb: 2,
                      bg: "rgba(16, 168, 253, 0.1)",
                      borderRadius: "md",
                      border: "1px solid rgba(16, 168, 253, 0.2)",
                      fontSize: "xs",
                      fontWeight: "bold",
                      color: "#10A8FD",
                      children: [(0, l.jsx)(eh.x, {
                        w: tH.INDEX,
                        textAlign: "center",
                        children: e("525")
                      }), (0, l.jsx)(eh.x, {
                        w: tH.TYPE,
                        textAlign: "center",
                        children: e("526")
                      }), (0, l.jsx)(eh.x, {
                        flex: "1",
                        textAlign: "center",
                        children: e("527")
                      }), (0, l.jsx)(eh.x, {
                        w: tH.ACTION,
                        textAlign: "center",
                        children: e("528")
                      }), (0, l.jsx)(eh.x, {
                        w: tH.DELAY,
                        textAlign: "center",
                        children: e("529")
                      }), (0, l.jsx)(eh.x, {
                        w: tH.OPERATIONS,
                        textAlign: "center",
                        children: e("530")
                      })]
                    }), (0, l.jsx)(eh.x, {
                      ref: I,
                      flex: "1",
                      overflowY: "auto",
                      minHeight: 0,
                      position: "relative",
                      onScroll: eX,
                      sx: {
                        "&::-webkit-scrollbar": {
                          width: "8px"
                        },
                        "&::-webkit-scrollbar-track": {
                          background: "rgba(255, 255, 255, 0.05)",
                          borderRadius: "4px"
                        },
                        "&::-webkit-scrollbar-thumb": {
                          background: "rgba(16, 168, 253, 0.3)",
                          borderRadius: "4px",
                          "&:hover": {
                            background: "rgba(16, 168, 253, 0.5)"
                          }
                        },
                        scrollbarWidth: "thin",
                        scrollbarColor: "rgba(16, 168, 253, 0.3) rgba(255, 255, 255, 0.05)",
                        contain: "layout style paint",
                        willChange: "scroll-position"
                      },
                      children: o < 0 ? (0, l.jsx)(ew.k, {
                        direction: "column",
                        align: "center",
                        justify: "center",
                        h: "100%",
                        color: "rgba(255,255,255,0.5)",
                        children: (0, l.jsx)(b.x, {
                          fontSize: "sm",
                          children: e("531")
                        })
                      }) : 0 === eL.length ? (0, l.jsxs)(ew.k, {
                        direction: "column",
                        align: "center",
                        justify: "center",
                        h: "100%",
                        color: "rgba(255,255,255,0.5)",
                        children: [(0, l.jsx)(b.x, {
                          fontSize: "sm",
                          children: e("532")
                        }), (0, l.jsx)(b.x, {
                          fontSize: "xs",
                          mt: 2,
                          children: e("533")
                        })]
                      }) : (0, l.jsx)(eh.x, {
                        position: "relative",
                        h: "".concat(eT, "px"),
                        children: (0, l.jsx)(eh.x, {
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          transform: "translateY(".concat(eO, "px)"),
                          children: eN.map(t => {
                            let r = t.originalIndex;
                            return (0, l.jsx)(eh.x, {
                              mb: 1,
                              borderRadius: "md",
                              bg: "rgba(255, 255, 255, 0.05)",
                              border: "1px solid rgba(255, 255, 255, 0.1)",
                              _hover: {
                                bg: "rgba(255, 255, 255, 0.08)"
                              },
                              h: "".concat(tU.ITEM_HEIGHT, "px"),
                              minH: "".concat(tU.ITEM_HEIGHT, "px"),
                              children: (0, l.jsxs)(ew.k, {
                                align: "center",
                                px: 3,
                                py: 2,
                                children: [(0, l.jsx)(eh.x, {
                                  w: tH.INDEX,
                                  textAlign: "center",
                                  children: (0, l.jsx)(ew.k, {
                                    align: "center",
                                    justify: "center",
                                    w: "28px",
                                    h: "28px",
                                    mx: "auto",
                                    borderRadius: "md",
                                    bg: "rgba(16, 168, 253, 0.1)",
                                    color: "#10A8FD",
                                    fontSize: "xs",
                                    fontWeight: "bold",
                                    children: r + 1
                                  })
                                }), (0, l.jsx)(eh.x, {
                                  w: tH.TYPE,
                                  textAlign: "center",
                                  children: (0, l.jsx)(e_.u, {
                                    label: eP(t.type),
                                    placement: "top",
                                    children: (0, l.jsx)(eh.x, {
                                      display: "inline-flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      color: t.type === tV.MOUSE ? "#FFA500" : "#00FF00",
                                      children: t.type === tV.MOUSE ? (0, l.jsxs)("svg", {
                                        width: "18",
                                        height: "22",
                                        viewBox: "0 0 18 22",
                                        fill: "none",
                                        children: [(0, l.jsx)("rect", {
                                          x: "1",
                                          y: "1",
                                          width: "16",
                                          height: "20",
                                          rx: "7",
                                          stroke: "currentColor",
                                          strokeWidth: "2"
                                        }), (0, l.jsx)("line", {
                                          x1: "9",
                                          y1: "1",
                                          x2: "9",
                                          y2: "10",
                                          stroke: "currentColor",
                                          strokeWidth: "1.5"
                                        }), (0, l.jsx)("rect", {
                                          x: "7",
                                          y: "4",
                                          width: "4",
                                          height: "5",
                                          rx: "2",
                                          stroke: "currentColor",
                                          strokeWidth: "1.5"
                                        })]
                                      }) : (0, l.jsxs)("svg", {
                                        width: "20",
                                        height: "20",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        children: [(0, l.jsx)("rect", {
                                          x: "2",
                                          y: "5",
                                          width: "20",
                                          height: "14",
                                          rx: "2",
                                          stroke: "currentColor",
                                          strokeWidth: "2"
                                        }), (0, l.jsx)("line", {
                                          x1: "6",
                                          y1: "9",
                                          x2: "18",
                                          y2: "9",
                                          stroke: "currentColor",
                                          strokeWidth: "2"
                                        }), (0, l.jsx)("line", {
                                          x1: "6",
                                          y1: "13",
                                          x2: "18",
                                          y2: "13",
                                          stroke: "currentColor",
                                          strokeWidth: "2"
                                        }), (0, l.jsx)("line", {
                                          x1: "6",
                                          y1: "16",
                                          x2: "12",
                                          y2: "16",
                                          stroke: "currentColor",
                                          strokeWidth: "2"
                                        })]
                                      })
                                    })
                                  })
                                }), (0, l.jsx)(eh.x, {
                                  flex: "1",
                                  textAlign: "center",
                                  children: (0, l.jsx)(b.x, {
                                    fontSize: "sm",
                                    color: "white",
                                    fontWeight: "medium",
                                    noOfLines: 1,
                                    children: eB(t.name)
                                  })
                                }), (0, l.jsx)(eh.x, {
                                  w: tH.ACTION,
                                  textAlign: "center",
                                  children: (0, l.jsx)(e_.u, {
                                    label: eU(t.action),
                                    placement: "top",
                                    children: (0, l.jsx)(eh.x, {
                                      display: "inline-flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      color: t.action === tG.PRESS ? "#10A8FD" : "#9333EA",
                                      children: t.action === tG.PRESS ? (0, l.jsx)("svg", {
                                        width: "20",
                                        height: "20",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        children: (0, l.jsx)("path", {
                                          d: "M12 5V19M12 19L5 12M12 19L19 12",
                                          stroke: "currentColor",
                                          strokeWidth: "2",
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round"
                                        })
                                      }) : t.action === tG.RELEASE ? (0, l.jsx)("svg", {
                                        width: "20",
                                        height: "20",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        children: (0, l.jsx)("path", {
                                          d: "M12 19V5M12 5L5 12M12 5L19 12",
                                          stroke: "currentColor",
                                          strokeWidth: "2",
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round"
                                        })
                                      }) : (0, l.jsxs)("svg", {
                                        width: "20",
                                        height: "20",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        children: [(0, l.jsx)("circle", {
                                          cx: "12",
                                          cy: "12",
                                          r: "9",
                                          stroke: "currentColor",
                                          strokeWidth: "2"
                                        }), (0, l.jsx)("path", {
                                          d: "M12 8V12L15 15",
                                          stroke: "currentColor",
                                          strokeWidth: "2",
                                          strokeLinecap: "round"
                                        })]
                                      })
                                    })
                                  })
                                }), (0, l.jsx)(eh.x, {
                                  w: tH.DELAY,
                                  textAlign: "center",
                                  children: (0, l.jsx)(b.x, {
                                    fontSize: "xs",
                                    color: "rgba(255,255,255,0.7)",
                                    children: -1 === t.delay ? e("535") : t.delay
                                  })
                                }), (0, l.jsxs)(ew.k, {
                                  w: tH.OPERATIONS,
                                  justify: "center",
                                  gap: 1,
                                  children: [(0, l.jsx)(e_.u, {
                                    label: e("534"),
                                    placement: "top",
                                    children: (0, l.jsx)(tM.h, {
                                      "aria-label": e("534"),
                                      icon: (0, l.jsxs)("svg", {
                                        width: "14",
                                        height: "14",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        children: [(0, l.jsx)("path", {
                                          d: "M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13",
                                          stroke: "currentColor",
                                          strokeWidth: "2",
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round"
                                        }), (0, l.jsx)("path", {
                                          d: "M18.5 2.5C18.8978 2.10217 19.4374 1.87868 20 1.87868C20.5626 1.87868 21.1022 2.10217 21.5 2.5C21.8978 2.89782 22.1213 3.43739 22.1213 4C22.1213 4.56261 21.8978 5.10217 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z",
                                          stroke: "currentColor",
                                          strokeWidth: "2",
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round"
                                        })]
                                      }),
                                      size: "xs",
                                      variant: "ghost",
                                      color: "rgba(255,255,255,0.6)",
                                      _hover: {
                                        color: "#10A8FD",
                                        bg: "rgba(16,168,253,0.1)"
                                      },
                                      onClick: () => e2(r)
                                    })
                                  }), (0, l.jsx)(e_.u, {
                                    label: e("509"),
                                    placement: "top",
                                    children: (0, l.jsx)(tM.h, {
                                      "aria-label": e("509"),
                                      icon: (0, l.jsxs)("svg", {
                                        width: "14",
                                        height: "14",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        children: [(0, l.jsx)("path", {
                                          d: "M3 6H5H21",
                                          stroke: "currentColor",
                                          strokeWidth: "2",
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round"
                                        }), (0, l.jsx)("path", {
                                          d: "M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z",
                                          stroke: "currentColor",
                                          strokeWidth: "2",
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round"
                                        })]
                                      }),
                                      size: "xs",
                                      variant: "ghost",
                                      color: "rgba(255,255,255,0.6)",
                                      _hover: {
                                        color: "#FF4444",
                                        bg: "rgba(255,68,68,0.1)"
                                      },
                                      onClick: () => e0(r)
                                    })
                                  })]
                                })]
                              })
                            }, "".concat(o, "-").concat(r))
                          })
                        })
                      })
                    })]
                  })]
                }), (0, l.jsx)(tW, {
                  isRecording: ej,
                  onToggleRecording: () => {
                    if (o < 0) {
                      Z({
                        title: e("580"),
                        message: e("581"),
                        type: "warning"
                      }), q();
                      return
                    }
                    let t = !ej;
                    if (t) {
                      if (eL.length >= tP.MAX_ACTIONS) {
                        H({
                          title: e("582"),
                          message: "".concat(e("583"), " ").concat(eL.length, " ").concat(e("584"), "ï¼ˆ").concat(tP.MAX_ACTIONS, "ä¸ªï¼‰ã€‚\n\n").concat(e("585"))
                        }), V();
                        return
                      }
                      eS(t), eR(Date.now())
                    } else eS(t)
                  },
                  delayType: eC,
                  onDelayTypeChange: eD,
                  delayTime: eI,
                  onDelayTimeChange: eF,
                  recordCount: eA,
                  onRecordCountChange: eM,
                  onKeyboardInserted: e4,
                  onInsertMouse: (t, r) => {
                    if (o < 0 || ej) return;
                    let n = eL || [];
                    if (n.length + 2 > tP.MAX_ACTIONS) {
                      H({
                        title: e("586"),
                        message: "".concat(e("587"), " ").concat(n.length, " ").concat(e("588"), "ï¼ˆ").concat(tP.MAX_ACTIONS, "ä¸ªï¼‰ã€‚\n\n").concat(e("589"))
                      }), V();
                      return
                    }
                    let i = eG(t);
                    e6([...n, {
                      name: i,
                      code: t,
                      type: tV.MOUSE,
                      action: tG.PRESS,
                      delay: r,
                      time: 0
                    }, {
                      name: i,
                      code: t,
                      type: tV.MOUSE,
                      action: tG.RELEASE,
                      delay: r,
                      time: 0
                    }])
                  },
                  disabled: o < 0,
                  t: e
                })]
              })
            }), (0, l.jsxs)(u.u_, {
              isOpen: ee,
              onClose: er,
              isCentered: !0,
              size: "md",
              children: [(0, l.jsx)(x.Z, {
                bg: "rgba(0, 0, 0, 0.4)",
                backdropFilter: "blur(10px)"
              }), (0, l.jsxs)(h.h, {
                bg: "rgba(30, 35, 36, 0.95)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                borderRadius: "xl",
                border: "1px solid rgba(16, 168, 253, 0.3)",
                backdropFilter: "blur(12px)",
                children: [(0, l.jsx)(tC.x, {
                  color: "white",
                  children: e("540")
                }), (0, l.jsx)(p.f, {
                  pb: 6,
                  children: (0, l.jsx)(ew.k, {
                    direction: "column",
                    gap: 4,
                    children: Q && (0, l.jsxs)(l.Fragment, {
                      children: [(0, l.jsxs)(eh.x, {
                        children: [(0, l.jsx)(b.x, {
                          fontSize: "sm",
                          fontWeight: "bold",
                          color: "white",
                          mb: 2,
                          children: e("541")
                        }), (0, l.jsx)(eh.x, {
                          p: 3,
                          bg: "rgba(16, 168, 253, 0.1)",
                          borderRadius: "md",
                          border: "1px solid #10A8FD",
                          children: (0, l.jsx)(b.x, {
                            fontSize: "sm",
                            color: "white",
                            fontWeight: "medium",
                            children: Q.action.type === tV.MOUSE ? e("550") : e("551")
                          })
                        })]
                      }), (0, l.jsxs)(eh.x, {
                        children: [(0, l.jsx)(b.x, {
                          fontSize: "sm",
                          fontWeight: "bold",
                          color: "white",
                          mb: 2,
                          children: e("542")
                        }), Q.action.type === tV.KEYBOARD ? (0, l.jsxs)(eh.x, {
                          children: [(0, l.jsx)(eK.I, {
                            ref: ek,
                            placeholder: e("543"),
                            value: el ? eB(tT(el).name) : eB(Q.action.name),
                            readOnly: !0,
                            onFocus: () => {
                              ev(!0)
                            },
                            onBlur: () => {
                              ev(!1)
                            },
                            bg: "rgba(0, 0, 0, 0.3)",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            color: el ? "#10A8FD" : "white",
                            fontWeight: el ? "bold" : "normal",
                            _focus: {
                              border: "1px solid #10A8FD"
                            },
                            cursor: "text"
                          }), (0, l.jsx)(b.x, {
                            fontSize: "xs",
                            color: "rgba(255,255,255,0.5)",
                            mt: 1,
                            children: ep ? e("544") : e("545")
                          })]
                        }) : (0, l.jsxs)(eg.v, {
                          matchWidth: !0,
                          children: [(0, l.jsx)(em.j, {
                            as: eb.z,
                            w: "100%",
                            bg: "rgba(0, 0, 0, 0.3)",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            color: "white",
                            _hover: {
                              bg: "rgba(0, 0, 0, 0.4)"
                            },
                            _active: {
                              bg: "rgba(0, 0, 0, 0.5)"
                            },
                            textAlign: "left",
                            rightIcon: (0, l.jsx)(eh.x, {
                              as: "span",
                              display: "inline-block",
                              transform: "rotate(90deg)",
                              color: "rgba(255,255,255,0.6)",
                              children: "â€º"
                            }),
                            children: ec >= 0 ? eG(ec) : Q.action.name
                          }), (0, l.jsx)(ef.q, {
                            bg: "rgba(30, 35, 36, 0.98)",
                            border: "1px solid rgba(16, 168, 253, 0.3)",
                            minW: "0",
                            children: [0, 1, 2, 3, 4].map(e => (0, l.jsx)(ey.s, {
                              onClick: () => eu(e),
                              bg: "transparent",
                              color: "white",
                              _hover: {
                                bg: "rgba(16, 168, 253, 0.2)"
                              },
                              _focus: {
                                bg: "rgba(16, 168, 253, 0.2)"
                              },
                              children: eG(e)
                            }, e))
                          })]
                        })]
                      }), (0, l.jsxs)(eh.x, {
                        children: [(0, l.jsx)(b.x, {
                          fontSize: "sm",
                          fontWeight: "bold",
                          color: "white",
                          mb: 2,
                          children: e("528")
                        }), (0, l.jsxs)(eg.v, {
                          matchWidth: !0,
                          children: [(0, l.jsx)(em.j, {
                            as: eb.z,
                            w: "100%",
                            bg: "rgba(0, 0, 0, 0.3)",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            color: "white",
                            _hover: {
                              bg: "rgba(0, 0, 0, 0.4)"
                            },
                            _active: {
                              bg: "rgba(0, 0, 0, 0.5)"
                            },
                            textAlign: "left",
                            rightIcon: (0, l.jsx)(eh.x, {
                              as: "span",
                              display: "inline-block",
                              transform: "rotate(90deg)",
                              color: "rgba(255,255,255,0.6)",
                              children: "â€º"
                            }),
                            children: ei === tG.PRESS ? "â¬‡ï¸ " + e("553") : "â¬†ï¸ " + e("554")
                          }), (0, l.jsxs)(ef.q, {
                            bg: "rgba(30, 35, 36, 0.98)",
                            border: "1px solid rgba(16, 168, 253, 0.3)",
                            minW: "0",
                            children: [(0, l.jsxs)(ey.s, {
                              onClick: () => ea(tG.PRESS),
                              bg: "transparent",
                              color: "white",
                              _hover: {
                                bg: "rgba(16, 168, 253, 0.2)"
                              },
                              _focus: {
                                bg: "rgba(16, 168, 253, 0.2)"
                              },
                              children: ["â¬‡ï¸ ", e("553")]
                            }), (0, l.jsxs)(ey.s, {
                              onClick: () => ea(tG.RELEASE),
                              bg: "transparent",
                              color: "white",
                              _hover: {
                                bg: "rgba(16, 168, 253, 0.2)"
                              },
                              _focus: {
                                bg: "rgba(16, 168, 253, 0.2)"
                              },
                              children: ["â¬†ï¸ ", e("554")]
                            })]
                          })]
                        })]
                      }), (0, l.jsxs)(eh.x, {
                        children: [(0, l.jsx)(b.x, {
                          fontSize: "sm",
                          fontWeight: "bold",
                          color: "white",
                          mb: 2,
                          children: e("546")
                        }), (0, l.jsxs)(t_.B, {
                          children: [(0, l.jsx)(eK.I, {
                            type: "number",
                            value: eo,
                            onChange: e => {
                              en(e.target.value)
                            },
                            onBlur: e => {
                              en(String(Math.max(0, Math.min(1e4, parseInt(e.target.value) || 0))))
                            },
                            min: 0,
                            max: 1e4,
                            bg: "rgba(0, 0, 0, 0.3)",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            color: "white",
                            _focus: {
                              border: "1px solid #10A8FD"
                            }
                          }), (0, l.jsx)(tL.x, {
                            children: (0, l.jsx)(b.x, {
                              fontSize: "sm",
                              color: "rgba(255,255,255,0.6)",
                              children: "ms"
                            })
                          })]
                        }), (0, l.jsx)(b.x, {
                          fontSize: "xs",
                          color: "rgba(255,255,255,0.5)",
                          mt: 1,
                          children: e("547")
                        })]
                      })]
                    })
                  })
                }), (0, l.jsxs)(tI.m, {
                  children: [(0, l.jsx)(eb.z, {
                    variant: "ghost",
                    onClick: er,
                    color: "rgba(255,255,255,0.8)",
                    _hover: {
                      bg: "rgba(255,255,255,0.1)"
                    },
                    mr: 3,
                    children: e("548")
                  }), (0, l.jsx)(eb.z, {
                    bg: "#10A8FD",
                    color: "white",
                    _hover: {
                      bg: "#0E96E3"
                    },
                    onClick: () => {
                      if (!Q || o < 0) return;
                      let e = Q.action.name,
                        n = Q.action.code;
                      if (Q.action.type === tV.MOUSE) ec >= 0 && (n = ec, e = eG(ec));
                      else if (Q.action.type === tV.KEYBOARD && el) {
                        let t = tT(el);
                        n = t.code, e = t.name
                      }
                      let a = t.map((t, r) => {
                        if (r === o) {
                          let r = t.list.map((t, r) => r === Q.index ? { ...t,
                            name: e,
                            code: n,
                            action: ei,
                            delay: parseInt(eo) || 0
                          } : t);
                          return { ...t,
                            list: r
                          }
                        }
                        return t
                      });
                      r(a), localStorage.setItem(i.macroName, JSON.stringify(a)), er(), $(null), es(null), eu(-1)
                    },
                    children: e("549")
                  })]
                })]
              })]
            }), (0, l.jsx)(tz.aR, {
              isOpen: W,
              leastDestructiveRef: C,
              onClose: P,
              isCentered: !0,
              children: (0, l.jsx)(x.Z, {
                bg: "rgba(0, 0, 0, 0.4)",
                backdropFilter: "blur(10px)",
                children: (0, l.jsxs)(tz._T, {
                  bg: "rgba(30, 35, 36, 0.95)",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                  borderRadius: "xl",
                  border: "1px solid rgba(255, 68, 68, 0.3)",
                  backdropFilter: "blur(12px)",
                  children: [(0, l.jsx)(tC.x, {
                    fontSize: "lg",
                    fontWeight: "bold",
                    color: "white",
                    children: e3().title
                  }), (0, l.jsx)(p.f, {
                    color: "rgba(255,255,255,0.8)",
                    children: e3().description
                  }), (0, l.jsxs)(tI.m, {
                    children: [(0, l.jsx)(eb.z, {
                      ref: C,
                      onClick: P,
                      variant: "ghost",
                      color: "rgba(255,255,255,0.8)",
                      _hover: {
                        bg: "rgba(255,255,255,0.1)"
                      },
                      children: e("548")
                    }), (0, l.jsx)(eb.z, {
                      colorScheme: "red",
                      onClick: () => {
                        if (T) switch (T.type) {
                          case "macro":
                            eq();
                            break;
                          case "clear":
                            e$();
                            break;
                          case "action":
                            e1()
                        }
                      },
                      ml: 3,
                      bg: "#FF4444",
                      _hover: {
                        bg: "#FF6666"
                      },
                      children: e("470")
                    })]
                  })]
                })
              })
            }), (0, l.jsx)(tB, {
              isOpen: K,
              onClose: G,
              title: (null == U ? void 0 : U.title) || e("471"),
              message: (null == U ? void 0 : U.message) || "",
              type: "warning",
              confirmText: e("472")
            }), (0, l.jsx)(tB, {
              isOpen: J,
              onClose: X,
              title: (null == Y ? void 0 : Y.title) || e("471"),
              message: (null == Y ? void 0 : Y.message) || "",
              type: (null == Y ? void 0 : Y.type) || "info",
              confirmText: e("472")
            })]
          })
        },
        tZ = function() {
          let {
            changeLanguage: e,
            i18n: t
          } = L("common"), {
            t: r,
            battery: o,
            chargeFlag: n,
            connectMode: i,
            connectedDevice: a
          } = (0, s.useContext)(ed);
          (0, s.useEffect)(() => {
            console.log("Header chargeFlag:", n, typeof n)
          }, [n]);
          let [c, p] = (0, s.useState)(!1), [g, f] = (0, s.useState)(r("300")), [y, w] = (0, s.useState)(o);
          return (0, s.useEffect)(() => {
            if (1 === n) {
              let e = 0,
                t = setInterval(() => {
                  (e += 1) > 100 && (e = 0), w(e)
                }, 30);
              return () => clearInterval(t)
            }
            w(o)
          }, [n, o]), a && 6700 === a.vendorId && a.productId, (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(d(), {
              id: "53e361bec6f66215",
              children: ".custom-menu-list{background-color:white!important;background:white!important}.custom-menu-list div{background-color:white!important;background:white!important}.custom-menu-item:hover{background-color:rgba(16,168,253,.8)!important;color:white!important}.chakra-menu__menu-list{z-index:10000!important}@-webkit-keyframes pulse{0%{-webkit-transform:scale(1);transform:scale(1);opacity:.3}50%{-webkit-transform:scale(1.2);transform:scale(1.2);opacity:.5}100%{-webkit-transform:scale(1);transform:scale(1);opacity:.3}}@-moz-keyframes pulse{0%{-moz-transform:scale(1);transform:scale(1);opacity:.3}50%{-moz-transform:scale(1.2);transform:scale(1.2);opacity:.5}100%{-moz-transform:scale(1);transform:scale(1);opacity:.3}}@-o-keyframes pulse{0%{-o-transform:scale(1);transform:scale(1);opacity:.3}50%{-o-transform:scale(1.2);transform:scale(1.2);opacity:.5}100%{-o-transform:scale(1);transform:scale(1);opacity:.3}}@keyframes pulse{0%{-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1);opacity:.3}50%{-webkit-transform:scale(1.2);-moz-transform:scale(1.2);-o-transform:scale(1.2);transform:scale(1.2);opacity:.5}100%{-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1);opacity:.3}}.pulse-bg{-webkit-animation:pulse 2s infinite ease-in-out;-moz-animation:pulse 2s infinite ease-in-out;-o-animation:pulse 2s infinite ease-in-out;animation:pulse 2s infinite ease-in-out}@-webkit-keyframes fadeIn{from{opacity:0;-webkit-transform:scale(.9);transform:scale(.9)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-moz-keyframes fadeIn{from{opacity:0;-moz-transform:scale(.9);transform:scale(.9)}to{opacity:1;-moz-transform:scale(1);transform:scale(1)}}@-o-keyframes fadeIn{from{opacity:0;-o-transform:scale(.9);transform:scale(.9)}to{opacity:1;-o-transform:scale(1);transform:scale(1)}}@keyframes fadeIn{from{opacity:0;-webkit-transform:scale(.9);-moz-transform:scale(.9);-o-transform:scale(.9);transform:scale(.9)}to{opacity:1;-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1)}}.modal-fade-in{-webkit-animation:fadeIn.3s ease-out forwards;-moz-animation:fadeIn.3s ease-out forwards;-o-animation:fadeIn.3s ease-out forwards;animation:fadeIn.3s ease-out forwards}@-webkit-keyframes iconFlash{0%{opacity:.4;-webkit-transform:scale(.8);transform:scale(.8)}50%{opacity:1;-webkit-transform:scale(1.2);transform:scale(1.2)}100%{opacity:.4;-webkit-transform:scale(.8);transform:scale(.8)}}@-moz-keyframes iconFlash{0%{opacity:.4;-moz-transform:scale(.8);transform:scale(.8)}50%{opacity:1;-moz-transform:scale(1.2);transform:scale(1.2)}100%{opacity:.4;-moz-transform:scale(.8);transform:scale(.8)}}@-o-keyframes iconFlash{0%{opacity:.4;-o-transform:scale(.8);transform:scale(.8)}50%{opacity:1;-o-transform:scale(1.2);transform:scale(1.2)}100%{opacity:.4;-o-transform:scale(.8);transform:scale(.8)}}@keyframes iconFlash{0%{opacity:.4;-webkit-transform:scale(.8);-moz-transform:scale(.8);-o-transform:scale(.8);transform:scale(.8)}50%{opacity:1;-webkit-transform:scale(1.2);-moz-transform:scale(1.2);-o-transform:scale(1.2);transform:scale(1.2)}100%{opacity:.4;-webkit-transform:scale(.8);-moz-transform:scale(.8);-o-transform:scale(.8);transform:scale(.8)}}.flash-icon{-webkit-animation:iconFlash.6s infinite ease-in-out;-moz-animation:iconFlash.6s infinite ease-in-out;-o-animation:iconFlash.6s infinite ease-in-out;animation:iconFlash.6s infinite ease-in-out}@-webkit-keyframes titleGradient{0%{background-position:0%center}100%{background-position:200%center}}@-moz-keyframes titleGradient{0%{background-position:0%center}100%{background-position:200%center}}@-o-keyframes titleGradient{0%{background-position:0%center}100%{background-position:200%center}}@keyframes titleGradient{0%{background-position:0%center}100%{background-position:200%center}}.gradient-title{background:-webkit-linear-gradient(left,var(--primary-color)0%,#667eea 25%,#8B5CF6 50%,#667eea 75%,var(--primary-color)100%);background:-moz-linear-gradient(left,var(--primary-color)0%,#667eea 25%,#8B5CF6 50%,#667eea 75%,var(--primary-color)100%);background:-o-linear-gradient(left,var(--primary-color)0%,#667eea 25%,#8B5CF6 50%,#667eea 75%,var(--primary-color)100%);background:linear-gradient(90deg,var(--primary-color)0%,#667eea 25%,#8B5CF6 50%,#667eea 75%,var(--primary-color)100%);-webkit-background-size:200%auto;-moz-background-size:200%auto;-o-background-size:200%auto;background-size:200%auto;-webkit-animation:titleGradient 3s linear infinite;-moz-animation:titleGradient 3s linear infinite;-o-animation:titleGradient 3s linear infinite;animation:titleGradient 3s linear infinite;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;text-fill-color:transparent;display:inline-block;font-weight:bold;font-size:25px;letter-spacing:.5px;text-shadow:0px 0px 15px rgba(16,168,253,.3);padding:0 4px;line-height:1}"
            }), (0, l.jsxs)(eh.x, {
              className: "header",
              style: {
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(25px)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                boxShadow: "0 2px 15px rgba(0, 0, 0, 0.2)",
                height: "64px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 20px",
                color: "white",
                position: "relative",
                zIndex: 9e3
              },
              children: [(0, l.jsx)(eh.x, {
                className: "flex items-center gap-4",
                width: "33%",
                children: (0, l.jsx)(eh.x, {
                  className: "text-sm font-medium",
                  color: "white",
                  children: r("61") + i
                })
              }), (0, l.jsx)(eh.x, {
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                textAlign: "center",
                height: "40px",
                display: "flex",
                alignItems: "center",
                children: (0, l.jsx)(b.x, {
                  className: "gradient-title",
                  fontSize: "25px",
                  fontWeight: "bold",
                  letterSpacing: "1px",
                  children: "AJAZZ AK820 V2"
                })
              }), (0, l.jsx)(eh.x, {
                className: "flex items-center gap-4 justify-end",
                width: "33%"
              })]
            }), c && (0, l.jsxs)(u.u_, {
              isOpen: !0,
              onClose: () => {},
              isCentered: !0,
              blockScrollOnMount: !1,
              children: [(0, l.jsx)(x.Z, {
                bg: "rgba(0, 0, 0, 0.15)",
                backdropFilter: "blur(12px)"
              }), (0, l.jsx)(h.h, {
                bg: "rgba(27, 27, 27, 0.9)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                borderRadius: "xl",
                p: 6,
                maxW: "330px",
                border: "1px solid rgba(75, 85, 99, 0.3)",
                backdropFilter: "blur(12px)",
                className: "modal-fade-in",
                style: {
                  WebkitBackdropFilter: "blur(12px)",
                  transition: "all 0.3s ease"
                },
                children: (0, l.jsxs)(ew.k, {
                  direction: "column",
                  align: "center",
                  justify: "center",
                  children: [(0, l.jsxs)(eh.x, {
                    position: "relative",
                    width: "60px",
                    height: "60px",
                    mb: 4,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    children: [(0, l.jsx)(m.$, {
                      size: "xl",
                      thickness: "3px",
                      speed: "0.75s",
                      color: "var(--primary-color)",
                      position: "absolute"
                    }), (0, l.jsx)(eh.x, {
                      position: "absolute",
                      width: "40px",
                      height: "40px",
                      borderRadius: "full",
                      bg: "rgba(16, 168, 253, 0.1)",
                      className: "pulse-bg"
                    })]
                  }), (0, l.jsx)(b.x, {
                    fontSize: "md",
                    fontWeight: "medium",
                    textAlign: "center",
                    color: "white",
                    children: g
                  })]
                })
              })]
            })]
          })
        },
        tJ = r(7227);
      let tq = {
        primary: {
          main: "#10A8FD",
          light: "#3BBAFD",
          dark: "#0E96E3",
          gradient: "linear-gradient(135deg, #10A8FD 0%, #0E96E3 100%)"
        },
        bg: {
          main: "rgba(20, 25, 30, 0.95)",
          secondary: "rgba(30, 35, 40, 0.8)",
          hover: "rgba(16, 168, 253, 0.08)",
          active: "rgba(16, 168, 253, 0.15)",
          selected: "rgba(16, 168, 253, 0.2)",
          card: "rgba(35, 40, 45, 0.6)"
        },
        border: {
          main: "rgba(16, 168, 253, 0.3)",
          light: "rgba(255, 255, 255, 0.1)",
          active: "#10A8FD",
          glow: "0 0 10px rgba(16, 168, 253, 0.3)"
        },
        text: {
          primary: "white",
          secondary: "rgba(255, 255, 255, 0.8)",
          tertiary: "rgba(255, 255, 255, 0.6)",
          muted: "rgba(255, 255, 255, 0.4)"
        },
        shadow: {
          sm: "0 2px 8px rgba(0, 0, 0, 0.2)",
          md: "0 4px 16px rgba(0, 0, 0, 0.3)",
          lg: "0 8px 32px rgba(0, 0, 0, 0.4)",
          glow: "0 0 20px rgba(16, 168, 253, 0.4)",
          inner: "inset 0 1px 0 rgba(255, 255, 255, 0.1)"
        }
      };
      var tX = function() {
          let {
            setCurrentTab: e,
            currentTab: t,
            profileIndex: r,
            activeProfile: o,
            profiles: n,
            setProfiles: i,
            t: a,
            localConfigFile: c,
            filterSensitiveWords: d,
            singleDeviceMode: u,
            setDeviceStatus: x,
            disconnectDevice: h
          } = (0, s.useContext)(ed), p = (0, s.useCallback)(() => {
            let e = localStorage.getItem(c.profileName);
            if (e) try {
              let t = JSON.parse(e);
              if (t && t.length > 0) return t.map((e, t) => {
                let r = ["71", "72", "73"][t] || "7".concat(t + 1);
                return {
                  id: t,
                  name: e.name || "Default",
                  lang: r
                }
              })
            } catch (e) {
              console.error("è§£æžé…ç½®æ–‡ä»¶å¤±è´¥:", e)
            }
            return n && n.length > 0 ? n.map((e, t) => {
              let r = ["71", "72", "73"][t] || "7".concat(t + 1);
              return {
                id: t,
                name: e.name || "Default",
                lang: r
              }
            }) : [{
              id: 0,
              name: "Default",
              lang: "71"
            }, {
              id: 1,
              name: "Office",
              lang: "72"
            }, {
              id: 2,
              name: "Game",
              lang: "73"
            }]
          }, [n, c.profileName]), [m, f] = (0, s.useState)(() => p()), [y, w] = (0, s.useState)(null), [v, k] = (0, s.useState)("");
          (0, s.useEffect)(() => {
            f(p())
          }, [p]);
          let j = e => {
              let t = e;
              return [
                ["é»˜è®¤é…ç½®", "Default", "71"],
                ["åŠžå…¬é…ç½®", "Office", "72"],
                ["æ¸¸æˆé…ç½®", "Game", "73"]
              ].forEach(e => {
                let [r, o, n] = e;
                t.includes(r) ? t = t.replace(RegExp(r, "g"), a(n)) : t.toLowerCase().includes(o.toLowerCase()) && (t = t.replace(RegExp(o, "gi"), a(n)))
              }), t
            },
            S = (e, t) => {
              t.stopPropagation(), w(e.id), k(j(e.name))
            },
            C = e => {
              if (v.trim()) {
                let t = d(v.trim()),
                  r = localStorage.getItem(c.profileName);
                if (r) {
                  let o = JSON.parse(r);
                  o[e] && (o[e].name = t, localStorage.setItem(c.profileName, JSON.stringify(o)), n && n.length > 0 && i(n.map((r, o) => o === e ? { ...r,
                    name: t
                  } : r)), f(m.map(r => r.id === e ? { ...r,
                    name: t
                  } : r)))
                }
              }
              w(null), k("")
            },
            D = () => {
              w(null), k("")
            },
            I = e => {
              if (e && (e.preventDefault(), e.stopPropagation()), u) h();
              else if (window.parent && window.parent !== window) {
                try {
                  window.parent.location.hash && "" !== window.parent.location.hash && (window.parent.location.hash = "")
                } catch (e) {}
                try {
                  window.parent.postMessage({
                    type: "CLEAR_HASH",
                    action: "clearHash"
                  }, "*")
                } catch (e) {}
              } else window.location.href = "/"
            },
            F = [{
              id: "back-home",
              name: "è¿”å›žé¦–é¡µ",
              lang: "65",
              icon: (0, l.jsxs)("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                children: [(0, l.jsx)("path", {
                  d: "M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }), (0, l.jsx)("path", {
                  d: "M9 22V12H15V22",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                })]
              }),
              hasSubmenu: !1,
              isBackButton: !0
            }, {
              id: "profiles",
              name: "é…ç½®æ–‡ä»¶",
              lang: "51",
              icon: (0, l.jsx)("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "white",
                children: (0, l.jsx)("path", {
                  d: "M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z"
                })
              }),
              hasSubmenu: !0
            }, {
              id: "kb-light",
              name: "ç¯å…‰",
              lang: "52",
              icon: (0, l.jsx)("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "white",
                children: (0, l.jsx)("path", {
                  d: "M12 9C13.65 9 15 10.35 15 12C15 13.65 13.65 15 12 15C10.35 15 9 13.65 9 12C9 10.35 10.35 9 12 9ZM12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM2 13H4C4.55 13 5 12.55 5 12C5 11.45 4.55 11 4 11H2C1.45 11 1 11.45 1 12C1 12.55 1.45 13 2 13ZM20 13H22C22.55 13 23 12.55 23 12C23 11.45 22.55 11 22 11H20C19.45 11 19 11.45 19 12C19 12.55 19.45 13 20 13ZM11 2V4C11 4.55 11.45 5 12 5C12.55 5 13 4.55 13 4V2C13 1.45 12.55 1 12 1C11.45 1 11 1.45 11 2ZM11 20V22C11 22.55 11.45 23 12 23C12.55 23 13 22.55 13 22V20C13 19.45 12.55 19 12 19C11.45 19 11 19.45 11 20ZM5.99 4.58C5.6 4.19 4.96 4.19 4.58 4.58C4.19 4.97 4.19 5.61 4.58 5.99L5.64 7.05C6.03 7.44 6.67 7.44 7.05 7.05C7.44 6.66 7.44 6.02 7.05 5.64L5.99 4.58ZM18.36 16.95C17.97 16.56 17.33 16.56 16.95 16.95C16.56 17.34 16.56 17.98 16.95 18.36L18.01 19.42C18.4 19.81 19.04 19.81 19.42 19.42C19.81 19.03 19.81 18.39 19.42 18.01L18.36 16.95ZM19.42 5.99C19.81 5.6 19.81 4.96 19.42 4.58C19.03 4.19 18.39 4.19 18.01 4.58L16.95 5.64C16.56 6.03 16.56 6.67 16.95 7.05C17.34 7.44 17.98 7.44 18.36 7.05L19.42 5.99ZM7.05 18.36C7.44 17.97 7.44 17.33 7.05 16.95C6.66 16.56 6.02 16.56 5.64 16.95L4.58 18.01C4.19 18.4 4.19 19.04 4.58 19.42C4.97 19.81 5.61 19.81 5.99 19.42L7.05 18.36Z"
                })
              }),
              hasSubmenu: !1
            }, {
              id: "kb-keyremap",
              name: "æŒ‰é”®",
              lang: "53",
              icon: (0, l.jsxs)("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "white",
                children: [(0, l.jsx)("path", {
                  d: "M20 5H4C2.9 5 2 5.9 2 7V17C2 18.1 2.9 19 4 19H20C21.1 19 22 18.1 22 17V7C22 5.9 21.1 5 20 5ZM20 17H4V7H20V17Z"
                }), (0, l.jsx)("path", {
                  d: "M11 8H13V10H11V8Z"
                }), (0, l.jsx)("path", {
                  d: "M8 8H10V10H8V8Z"
                }), (0, l.jsx)("path", {
                  d: "M5 8H7V10H5V8Z"
                }), (0, l.jsx)("path", {
                  d: "M14 8H16V10H14V8Z"
                }), (0, l.jsx)("path", {
                  d: "M17 8H19V10H17V8Z"
                }), (0, l.jsx)("path", {
                  d: "M8 11H10V13H8V11Z"
                }), (0, l.jsx)("path", {
                  d: "M11 11H13V13H11V11Z"
                }), (0, l.jsx)("path", {
                  d: "M14 11H16V13H14V11Z"
                }), (0, l.jsx)("path", {
                  d: "M17 11H19V13H17V11Z"
                }), (0, l.jsx)("path", {
                  d: "M8 14H16V16H8V14Z"
                })]
              }),
              hasSubmenu: !1
            }, {
              id: "kb-macro",
              name: "å®",
              lang: "54",
              icon: (0, l.jsxs)("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "white",
                children: [(0, l.jsx)("path", {
                  d: "M19.8 10.7L4.2 5L3 7L15.5 11.8L13.5 17H10V19H14L17 11.5L18.5 12L19.8 10.7Z"
                }), (0, l.jsx)("path", {
                  d: "M17 3H7V5H17V3Z"
                }), (0, l.jsx)("path", {
                  d: "M21 19.01H3V21.01H21V19.01Z"
                })]
              }),
              hasSubmenu: !1
            }, {
              id: "kb-setting",
              name: "é”®ç›˜è®¾ç½®",
              lang: "55",
              icon: (0, l.jsxs)("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "white",
                children: [(0, l.jsx)("path", {
                  d: "M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
                }), (0, l.jsx)("path", {
                  d: "M6 8C7.1 8 8 7.1 8 6C8 4.9 7.1 4 6 4C4.9 4 4 4.9 4 6C4 7.1 4.9 8 6 8ZM6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM6 16C4.9 16 4 16.9 4 18C4 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16Z"
                }), (0, l.jsx)("path", {
                  d: "M18 8C19.1 8 20 7.1 20 6C20 4.9 19.1 4 18 4C16.9 4 16 4.9 16 6C16 7.1 16.9 8 18 8ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM18 16C16.9 16 16 16.9 16 18C16 19.1 16.9 20 18 20C19.1 20 20 19.1 20 18C20 16.9 19.1 16 18 16Z"
                })]
              }),
              hasSubmenu: !1
            }];
          return (0, l.jsxs)(eh.x, {
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            bg: tq.bg.main,
            backdropFilter: "blur(30px)",
            color: tq.text.primary,
            width: "320px",
            display: "flex",
            flexDirection: "column",
            zIndex: 1e3,
            overflow: "hidden",
            borderRight: "1px solid ".concat(tq.border.main),
            boxShadow: "".concat(tq.shadow.lg, ", ").concat(tq.shadow.inner),
            children: [(0, l.jsx)(eh.x, {
              py: 6,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: "1px solid ".concat(tq.border.light),
              bg: tq.bg.secondary,
              position: "relative",
              _after: {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "1px",
                background: tq.primary.gradient,
                opacity: .3
              },
              children: (0, l.jsx)(ev.E, {
                src: "./logo.png",
                alt: "Logo",
                maxW: "300px",
                maxH: "150px",
                objectFit: "contain",
                filter: "drop-shadow(".concat(tq.shadow.glow, ")"),
                transition: "all 0.3s",
                _hover: {
                  transform: "scale(1.05)",
                  filter: "drop-shadow(0 0 25px rgba(16, 168, 253, 0.6))"
                }
              })
            }), (0, l.jsx)(ew.k, {
              px: 6,
              py: 4,
              justifyContent: "center",
              alignItems: "center",
              borderBottom: "1px solid ".concat(tq.border.light),
              bg: tq.bg.card,
              position: "relative",
              children: (0, l.jsx)(b.x, {
                fontSize: "xl",
                fontWeight: "bold",
                textAlign: "center",
                color: tq.text.primary,
                bgGradient: tq.primary.gradient,
                bgClip: "text",
                letterSpacing: "wider",
                children: "AJAZZ AK820 V2"
              })
            }), (0, l.jsxs)(eh.x, {
              px: 4,
              py: 4,
              borderBottom: "1px solid ".concat(tq.border.light),
              children: [(0, l.jsx)(ew.k, {
                justify: "space-between",
                align: "center",
                mb: 3,
                children: (0, l.jsxs)(ew.k, {
                  align: "center",
                  gap: 2,
                  children: [(0, l.jsx)(eh.x, {
                    w: "3px",
                    h: "16px",
                    borderRadius: "full",
                    bg: tq.primary.gradient,
                    boxShadow: tq.border.glow
                  }), (0, l.jsx)(b.x, {
                    fontSize: "md",
                    fontWeight: "semibold",
                    color: tq.text.primary,
                    children: a("70")
                  })]
                })
              }), (0, l.jsx)(tJ.aV, {
                w: "100%",
                spacing: 1,
                children: m.map(e => (0, l.jsx)(tJ.HC, {
                  py: 2,
                  px: 4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  bg: r === e.id ? tq.bg.selected : "transparent",
                  borderLeft: r === e.id ? "3px solid ".concat(tq.primary.main) : "3px solid transparent",
                  borderRadius: "md",
                  transition: "all 0.2s ease",
                  _hover: {
                    bg: r === e.id ? tq.bg.active : tq.bg.hover
                  },
                  onClick: () => o(e.id),
                  children: y === e.id ? (0, l.jsx)(eK.I, {
                    value: v,
                    onChange: e => k(e.target.value),
                    onKeyDown: t => {
                      t.stopPropagation(), "Enter" === t.key ? C(e.id) : "Escape" === t.key && D()
                    },
                    onBlur: () => C(e.id),
                    autoFocus: !0,
                    size: "sm",
                    fontSize: "sm",
                    bg: "rgba(0, 0, 0, 0.3)",
                    border: "1px solid ".concat(tq.primary.main),
                    color: tq.text.primary,
                    _focus: {
                      border: "1px solid ".concat(tq.primary.main),
                      boxShadow: tq.border.glow
                    },
                    onClick: e => e.stopPropagation()
                  }) : (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)(ew.k, {
                      align: "center",
                      gap: 2,
                      flex: "1",
                      children: [(0, l.jsx)(eh.x, {
                        color: r === e.id ? tq.primary.main : tq.text.muted,
                        fontSize: "md",
                        transition: "color 0.2s",
                        children: "â€¢"
                      }), (0, l.jsx)(b.x, {
                        color: r === e.id ? tq.text.primary : tq.text.secondary,
                        fontWeight: r === e.id ? "600" : "normal",
                        fontSize: "sm",
                        transition: "all 0.2s",
                        children: j(e.name)
                      })]
                    }), (0, l.jsx)(tM.h, {
                      "aria-label": a("80"),
                      icon: (0, l.jsxs)("svg", {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [(0, l.jsx)("path", {
                          d: "M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round"
                        }), (0, l.jsx)("path", {
                          d: "M18.5 2.5C18.8978 2.10217 19.4374 1.87868 20 1.87868C20.5626 1.87868 21.1022 2.10217 21.5 2.5C21.8978 2.89782 22.1213 3.43739 22.1213 4C22.1213 4.56261 21.8978 5.10217 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round"
                        })]
                      }),
                      size: "xs",
                      variant: "ghost",
                      color: tq.text.tertiary,
                      _hover: {
                        color: tq.primary.main,
                        bg: tq.bg.hover
                      },
                      transition: "all 0.2s",
                      onClick: t => S(e, t)
                    })]
                  })
                }, e.id))
              })]
            }), (0, l.jsxs)(g.g, {
              spacing: 2,
              align: "stretch",
              p: 4,
              flex: "1",
              overflowY: "auto",
              css: {
                "&::-webkit-scrollbar": {
                  width: "4px"
                },
                "&::-webkit-scrollbar-track": {
                  background: "rgba(0, 0, 0, 0.2)",
                  borderRadius: "2px"
                },
                "&::-webkit-scrollbar-thumb": {
                  background: tq.primary.main,
                  borderRadius: "2px",
                  "&:hover": {
                    background: tq.primary.light
                  }
                }
              },
              children: [(0, l.jsxs)(ew.k, {
                align: "center",
                gap: 2,
                mb: 2,
                children: [(0, l.jsx)(eh.x, {
                  w: "3px",
                  h: "16px",
                  borderRadius: "full",
                  bg: tq.primary.gradient,
                  boxShadow: tq.border.glow
                }), (0, l.jsx)(b.x, {
                  fontSize: "md",
                  fontWeight: "semibold",
                  color: tq.text.primary,
                  children: a("50")
                })]
              }), F.filter(e => "profiles" !== e.id).map(r => (0, l.jsx)(eb.z, {
                variant: "ghost",
                justifyContent: "flex-start",
                width: "100%",
                h: "auto",
                py: 3,
                px: 4,
                borderRadius: "lg",
                leftIcon: r.icon,
                transition: "all 0.2s ease",
                _hover: {
                  bg: t !== r.id || r.isBackButton ? tq.bg.hover : tq.bg.active,
                  transform: r.isBackButton ? "translateX(-4px)" : "translateX(4px)"
                },
                _active: {
                  transform: r.isBackButton ? "translateX(-2px)" : "translateX(2px)"
                },
                color: t !== r.id || r.isBackButton ? tq.text.secondary : tq.primary.main,
                bg: t !== r.id || r.isBackButton ? "transparent" : tq.bg.selected,
                borderLeft: t !== r.id || r.isBackButton ? "4px solid transparent" : "4px solid ".concat(tq.primary.main),
                boxShadow: t !== r.id || r.isBackButton ? "none" : tq.border.glow,
                onClick: t => {
                  r.isBackButton ? I(t) : e(r.id)
                },
                fontWeight: t !== r.id || r.isBackButton ? "500" : "600",
                fontSize: "sm",
                sx: {
                  "& svg": {
                    transition: "all 0.2s",
                    filter: t !== r.id || r.isBackButton ? "none" : "drop-shadow(0 0 4px ".concat(tq.primary.main, ")")
                  }
                },
                children: a(r.lang)
              }, r.id))]
            })]
          })
        },
        tQ = r(8614);
      let t$ = (0, eP.E)(eh.x),
        t0 = (0, eP.E)(eb.z),
        t1 = e => {
          let {
            delay: t = 0
          } = e;
          return (0, l.jsx)(t$, {
            position: "absolute",
            width: "4px",
            height: "4px",
            bg: "#10A8FD",
            borderRadius: "full",
            initial: {
              scale: 0,
              opacity: 0
            },
            animate: {
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              x: [0, 200 * Math.random() - 100],
              y: [0, 200 * Math.random() - 100]
            },
            transition: {
              duration: 2,
              delay: t,
              repeat: 1 / 0,
              repeatDelay: 2 * Math.random()
            },
            style: {
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)"
            }
          })
        },
        t2 = e => {
          let {
            onComplete: t
          } = e, {
            t: r
          } = L("common"), [o, n] = (0, s.useState)(0);
          return (0, s.useEffect)(() => {
            let e, r, o;
            return e = setTimeout(() => {
              n(1)
            }, 1500), r = setTimeout(() => {
              n(2)
            }, 4e3), o = setTimeout(() => {
              t()
            }, 5e3), () => {
              clearTimeout(e), clearTimeout(r), clearTimeout(o)
            }
          }, []), (0, l.jsxs)(t$, {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bg: "linear-gradient(135deg, #0F0F23 0%, #1A1A2E 50%, #16213E 100%)",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            initial: {
              opacity: 1
            },
            animate: {
              opacity: 2 === o ? 0 : 1
            },
            transition: {
              duration: .5
            },
            children: [Array.from({
              length: 50
            }, (e, t) => (0, l.jsx)(t1, {
              delay: .1 * t
            }, t)), (0, l.jsx)(t$, {
              position: "absolute",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              bg: "radial-gradient(circle, rgba(16,168,253,0.1) 0%, transparent 70%)",
              initial: {
                scale: 0
              },
              animate: {
                scale: [0, 1.2, 1]
              },
              transition: {
                duration: 2,
                ease: "easeOut"
              }
            }), (0, l.jsx)(t$, {
              initial: {
                scale: 0,
                rotate: -180,
                opacity: 0
              },
              animate: {
                scale: 1,
                rotate: 0,
                opacity: 1
              },
              transition: {
                duration: 1.5,
                ease: "easeOut"
              },
              mb: 8,
              children: (0, l.jsx)(t$, {
                width: "150px",
                height: "150px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 10px 30px rgba(16,168,253,0.3)",
                borderRadius: "20px",
                bg: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
                animate: {
                  boxShadow: ["0 10px 30px rgba(16,168,253,0.3)", "0 10px 50px rgba(16,168,253,0.6)", "0 10px 30px rgba(16,168,253,0.3)"],
                  rotate: [0, 360]
                },
                transition: {
                  boxShadow: {
                    duration: 2,
                    repeat: 1 / 0
                  },
                  rotate: {
                    duration: 4,
                    repeat: 1 / 0,
                    ease: "linear"
                  }
                },
                children: (0, l.jsx)(ev.E, {
                  src: "./logo.png",
                  alt: "logo",
                  width: "120px",
                  height: "120px",
                  objectFit: "contain",
                  filter: "drop-shadow(0 0 20px rgba(16,168,253,0.5))"
                })
              })
            }), (0, l.jsx)(tQ.M, {
              children: o >= 1 && (0, l.jsxs)(t$, {
                initial: {
                  y: 50,
                  opacity: 0
                },
                animate: {
                  y: 0,
                  opacity: 1
                },
                exit: {
                  y: -50,
                  opacity: 0
                },
                transition: {
                  duration: .8,
                  ease: "easeOut"
                },
                textAlign: "center",
                children: [(0, l.jsx)(t$, {
                  fontSize: "32px",
                  fontWeight: "bold",
                  color: "white",
                  mb: 2,
                  animate: {
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  },
                  transition: {
                    duration: 3,
                    repeat: 1 / 0
                  },
                  sx: {
                    background: "linear-gradient(90deg, #10A8FD, #4FC3F7, #10A8FD)",
                    backgroundSize: "200% auto",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textAlign: "center"
                  },
                  children: r("5")
                }), (0, l.jsx)(t$, {
                  fontSize: "16px",
                  color: "rgba(255,255,255,0.8)",
                  initial: {
                    opacity: 0
                  },
                  animate: {
                    opacity: 1
                  },
                  transition: {
                    delay: .5,
                    duration: .8
                  },
                  children: r("6")
                })]
              })
            }), (0, l.jsxs)(t$, {
              position: "absolute",
              bottom: "80px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              children: [(0, l.jsx)(eh.x, {
                display: "flex",
                gap: 2,
                children: [0, 1, 2].map(e => (0, l.jsx)(t$, {
                  width: "8px",
                  height: "8px",
                  bg: "#10A8FD",
                  borderRadius: "full",
                  animate: {
                    scale: [1, 1.5, 1],
                    opacity: [.3, 1, .3]
                  },
                  transition: {
                    duration: 1.5,
                    repeat: 1 / 0,
                    delay: .2 * e
                  }
                }, e))
              }), (0, l.jsx)(eb.z, {
                size: "sm",
                variant: "ghost",
                color: "rgba(255,255,255,0.6)",
                _hover: {
                  color: "#10A8FD"
                },
                onClick: t,
                fontSize: "12px",
                children: r("7")
              })]
            })]
          })
        };

      function t5() {
        let {
          connectDevice: e,
          backgroundSettings: t,
          setBackgroundSettings: r,
          t: o,
          setConnectMode: n
        } = (0, s.useContext)(ed), {
          changeLanguage: i,
          i18n: a
        } = L("common"), c = eD(), [d, u] = (0, s.useState)(!0), [x, h] = (0, s.useState)(!1), [p, g] = (0, s.useState)(!1), [m, f] = (0, s.useState)(!1), [y, w] = (0, s.useState)(0), v = (0, s.useRef)(null), k = [{
          id: "device-1",
          name: "80",
          description: "81",
          image: "./products/mouse.png"
        }, {
          id: "device-2",
          name: "82",
          description: "83",
          image: "./products/mouse.png"
        }, {
          id: "device-3",
          name: "84",
          description: "85",
          image: "./products/mouse.png"
        }];
        (0, s.useEffect)(() => {
          (null == t ? void 0 : t.backgroundUrl) || r({ ...t,
            backgroundUrl: "./bkg/main_bkg.mp4"
          })
        }, [t, r]), (0, s.useEffect)(() => {
          let e = setInterval(() => {
            w(e => (e + 1) % k.length)
          }, 3e3);
          return () => clearInterval(e)
        }, []);
        let j = (0, s.useCallback)(() => {
            u(!1), setTimeout(() => {
              h(!0)
            }, 300)
          }, []),
          S = e => {
            i(e)
          },
          C = e => {
            r({ ...t,
              backgroundUrl: e
            })
          },
          D = (0, s.useCallback)(() => {
            n(""), e(!0)
          }, [e]);
        return (0, l.jsxs)(eh.x, {
          w: "100%",
          h: "100%",
          position: "relative",
          children: [(0, l.jsx)(eK.I, {
            ref: v,
            type: "file",
            accept: "image/*",
            onChange: e => {
              var t;
              let r = null === (t = e.target.files) || void 0 === t ? void 0 : t[0];
              if (r) {
                if (!r.type.startsWith("image/")) {
                  c(o("30"), o("31"), "error"), v.current && (v.current.value = "");
                  return
                }
                if (r.size > 5242880) {
                  c(o("32"), o("33"), "error"), v.current && (v.current.value = "");
                  return
                }
                let e = new FileReader;
                e.onload = e => {
                  var t;
                  C(null === (t = e.target) || void 0 === t ? void 0 : t.result), f(!1), v.current && (v.current.value = "")
                }, e.readAsDataURL(r)
              }
            },
            style: {
              display: "none"
            }
          }), (0, l.jsx)(tQ.M, {
            mode: "wait",
            children: d && (0, l.jsx)(t2, {
              onComplete: j
            })
          }), (0, l.jsx)(tQ.M, {
            mode: "wait",
            children: x && (0, l.jsxs)(t$, {
              w: "100%",
              h: "100%",
              initial: {
                opacity: 0,
                scale: .95
              },
              animate: {
                opacity: 1,
                scale: 1
              },
              transition: {
                duration: .8,
                ease: "easeOut"
              },
              children: [(0, l.jsx)(eh.x, {
                position: "fixed",
                top: 0,
                left: 0,
                w: "100vw",
                h: "100vh",
                overflow: "hidden",
                bg: "black",
                children: (null == t ? void 0 : t.backgroundUrl) && (t.backgroundUrl.endsWith(".mp4") || t.backgroundUrl.endsWith(".webm")) && !p ? (0, l.jsx)(eh.x, {
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  children: (0, l.jsx)("video", {
                    autoPlay: !0,
                    loop: !0,
                    muted: !0,
                    playsInline: !0,
                    style: {
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      position: "absolute",
                      top: 0,
                      left: 0
                    },
                    onError: () => {
                      g(!0)
                    },
                    children: (0, l.jsx)("source", {
                      src: t.backgroundUrl,
                      type: "video/mp4"
                    })
                  })
                }) : (0, l.jsx)(eh.x, {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  w: "100%",
                  h: "100%",
                  style: {
                    backgroundImage: (null == t ? void 0 : t.backgroundUrl) ? "url(".concat(t.backgroundUrl, ")") : "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                  }
                })
              }), (0, l.jsxs)(eh.x, {
                w: "100%",
                h: "100vh",
                position: "relative",
                zIndex: 1,
                overflowY: "auto",
                overflowX: "hidden",
                pb: {
                  base: "3.5rem",
                  md: "3.5rem"
                },
                sx: {
                  "@keyframes gradientShift": {
                    "0%": {
                      opacity: .7
                    },
                    "50%": {
                      opacity: .9
                    },
                    "100%": {
                      opacity: .7
                    }
                  },
                  "@keyframes floatEffect": {
                    "0%": {
                      transform: "translateY(0px)"
                    },
                    "50%": {
                      transform: "translateY(-10px)"
                    },
                    "100%": {
                      transform: "translateY(0px)"
                    }
                  },
                  "@keyframes particleFloat": {
                    "0%": {
                      transform: "translateY(0px) translateX(0px)"
                    },
                    "50%": {
                      transform: "translateY(-10px) translateX(5px)"
                    },
                    "100%": {
                      transform: "translateY(0px) translateX(0px)"
                    }
                  },
                  "@keyframes pulseGlow": {
                    "0%": {
                      opacity: .3
                    },
                    "50%": {
                      opacity: .8
                    },
                    "100%": {
                      opacity: .3
                    }
                  },
                  "&::-webkit-scrollbar": {
                    width: "3px"
                  },
                  "&::-webkit-scrollbar-track": {
                    width: "4px",
                    background: "rgba(0, 0, 0, 0.1)"
                  },
                  "&::-webkit-scrollbar-thumb": {
                    background: "rgba(255, 150, 0, 0.3)",
                    borderRadius: "24px"
                  }
                },
                children: [(0, l.jsx)(eh.x, {
                  position: "relative",
                  zIndex: 100,
                  children: (0, l.jsxs)(eh.x, {
                    h: {
                      base: "50px",
                      md: "60px"
                    },
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    px: {
                      base: 3,
                      md: 4,
                      lg: 6
                    },
                    position: "relative",
                    bg: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(25px)",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                    boxShadow: "0 2px 15px rgba(0, 0, 0, 0.2)",
                    children: [(0, l.jsxs)(t$, {
                      initial: {
                        x: -50,
                        opacity: 0
                      },
                      animate: {
                        x: 0,
                        opacity: 1
                      },
                      transition: {
                        delay: .2,
                        duration: .8
                      },
                      position: "relative",
                      zIndex: 2,
                      display: "flex",
                      alignItems: "center",
                      gap: 3,
                      children: [(0, l.jsx)(t$, {
                        w: {
                          base: "32px",
                          md: "36px",
                          lg: "40px"
                        },
                        h: {
                          base: "32px",
                          md: "36px",
                          lg: "40px"
                        },
                        borderRadius: "8px",
                        bg: "rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(16, 168, 253, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 4px 15px rgba(16, 168, 253, 0.2)",
                        whileHover: {
                          scale: 1.05
                        },
                        transition: {
                          duration: .3
                        },
                        children: (0, l.jsx)(ev.E, {
                          src: "./logo.png",
                          alt: "logo",
                          width: {
                            base: "22px",
                            md: "26px",
                            lg: "28px"
                          },
                          height: {
                            base: "22px",
                            md: "26px",
                            lg: "28px"
                          },
                          objectFit: "contain",
                          filter: "drop-shadow(0 0 8px rgba(16, 168, 253, 0.5))"
                        })
                      }), (0, l.jsx)(b.x, {
                        fontSize: {
                          base: "16px",
                          md: "24px",
                          lg: "32px"
                        },
                        fontWeight: "bold",
                        color: "white",
                        textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
                        sx: {
                          background: "linear-gradient(45deg, #10A8FD, #4FC3F7, #10A8FD, #42A5F5, #10A8FD)",
                          backgroundSize: "300% 100%",
                          animation: "textFlow 6s ease-in-out infinite",
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          filter: "drop-shadow(0 0 15px rgba(16, 168, 253, 0.4))",
                          "@keyframes textFlow": {
                            "0%": {
                              backgroundPosition: "0% 50%"
                            },
                            "50%": {
                              backgroundPosition: "100% 50%"
                            },
                            "100%": {
                              backgroundPosition: "0% 50%"
                            }
                          }
                        },
                        children: o("1")
                      }), (0, l.jsx)(eh.x, {
                        position: "absolute",
                        bottom: "-4px",
                        left: "0",
                        width: "100%",
                        height: "2px",
                        overflow: "hidden",
                        children: (0, l.jsx)(eh.x, {
                          position: "absolute",
                          top: "0",
                          left: "-100%",
                          width: "100%",
                          height: "100%",
                          bg: "linear-gradient(90deg, transparent, #10A8FD, #4FC3F7, #10A8FD, transparent)",
                          sx: {
                            animation: "underlineFlow 3s ease-in-out infinite",
                            "@keyframes underlineFlow": {
                              "0%": {
                                left: "-100%"
                              },
                              "100%": {
                                left: "100%"
                              }
                            }
                          }
                        })
                      })]
                    }), (0, l.jsxs)(ep.U, {
                      spacing: {
                        base: 1,
                        md: 2
                      },
                      zIndex: 9999,
                      children: [(0, l.jsxs)(eg.v, {
                        isOpen: m,
                        onClose: () => f(!1),
                        children: [(0, l.jsxs)(em.j, {
                          as: eb.z,
                          size: {
                            base: "xs",
                            md: "sm"
                          },
                          onClick: () => f(!m),
                          leftIcon: (0, l.jsx)(eF.H3h, {}),
                          style: {
                            background: "rgba(255, 255, 255, 0.1)",
                            backdropFilter: "blur(10px)",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            borderRadius: "8px",
                            color: "white"
                          },
                          _hover: {
                            background: "rgba(255, 255, 255, 0.2)",
                            transform: "translateY(-1px)"
                          },
                          fontSize: {
                            base: "11px",
                            md: "14px"
                          },
                          px: {
                            base: 2,
                            md: 3
                          },
                          children: [(0, l.jsx)(eh.x, {
                            display: {
                              base: "none",
                              sm: "inline"
                            },
                            children: o("34")
                          }), (0, l.jsx)(eh.x, {
                            display: {
                              base: "inline",
                              sm: "none"
                            },
                            children: o("35")
                          })]
                        }), (0, l.jsxs)(ef.q, {
                          bg: "rgba(36, 38, 43, 0.95)",
                          backdropFilter: "blur(20px)",
                          border: "1px solid rgba(16, 168, 253, 0.3)",
                          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
                          borderRadius: "12px",
                          minW: "150px",
                          zIndex: 1e4,
                          children: [(0, l.jsxs)(ey.s, {
                            onClick: () => {
                              var e;
                              null === (e = v.current) || void 0 === e || e.click()
                            },
                            fontSize: "sm",
                            p: 3,
                            borderRadius: "8px",
                            color: "white",
                            _hover: {
                              bg: "rgba(16, 168, 253, 0.2)",
                              color: "#10A8FD"
                            },
                            children: ["\uD83D\uDDBCï¸ ", o("36")]
                          }), (0, l.jsxs)(ey.s, {
                            onClick: () => {
                              C("./bkg/main_bkg.mp4"), g(!1), f(!1)
                            },
                            fontSize: "sm",
                            p: 3,
                            borderRadius: "8px",
                            color: "white",
                            _hover: {
                              bg: "rgba(16, 168, 253, 0.2)",
                              color: "#10A8FD"
                            },
                            children: ["\uD83D\uDD04 ", o("37")]
                          })]
                        })]
                      }), (0, l.jsx)(eh.x, {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                        children: (0, l.jsxs)(eg.v, {
                          children: [(0, l.jsx)(em.j, {
                            as: eb.z,
                            rightIcon: (0, l.jsx)(eI.v, {}),
                            variant: "ghost",
                            colorScheme: "blackAlpha",
                            _hover: {
                              bg: "rgba(0, 0, 0, 0.1)"
                            },
                            size: {
                              base: "xs",
                              md: "sm"
                            },
                            minW: "auto",
                            px: {
                              base: 2,
                              md: 3
                            },
                            py: 1,
                            fontSize: {
                              base: "11px",
                              md: "sm"
                            },
                            fontWeight: "normal",
                            bg: "rgba(255, 255, 255, 0.1)",
                            backdropFilter: "blur(10px)",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            borderRadius: "8px",
                            children: "cn" === a.language ? "ä¸­æ–‡" : "English"
                          }), (0, l.jsxs)(ef.q, {
                            bg: "rgba(36, 38, 43, 0.95)",
                            backdropFilter: "blur(20px)",
                            border: "1px solid rgba(16, 168, 253, 0.3)",
                            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
                            borderRadius: "12px",
                            minW: "120px",
                            zIndex: 1e4,
                            _focus: {
                              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)"
                            },
                            children: [(0, l.jsx)(ey.s, {
                              onClick: () => S("cn"),
                              fontSize: "sm",
                              p: 3,
                              borderRadius: "8px",
                              color: "white",
                              _hover: {
                                bg: "rgba(16, 168, 253, 0.2)",
                                color: "#10A8FD"
                              },
                              _focus: {
                                bg: "rgba(16, 168, 253, 0.2)",
                                color: "#10A8FD"
                              },
                              children: "ä¸­æ–‡"
                            }), (0, l.jsx)(ey.s, {
                              onClick: () => S("en"),
                              fontSize: "sm",
                              p: 3,
                              borderRadius: "8px",
                              color: "white",
                              _hover: {
                                bg: "rgba(16, 168, 253, 0.2)",
                                color: "#10A8FD"
                              },
                              _focus: {
                                bg: "rgba(16, 168, 253, 0.2)",
                                color: "#10A8FD"
                              },
                              children: "English"
                            })]
                          })]
                        })
                      })]
                    })]
                  })
                }), (0, l.jsx)(eh.x, {
                  w: "100%",
                  px: {
                    base: 2,
                    md: 6,
                    lg: 8,
                    xl: 8,
                    "2xl": 12
                  },
                  py: {
                    base: 2,
                    md: 4,
                    lg: 8,
                    xl: 8,
                    "2xl": 12
                  },
                  mt: {
                    base: "5px",
                    md: "10px",
                    lg: "20px",
                    xl: "20px",
                    "2xl": "30px"
                  },
                  children: (0, l.jsx)(t$, {
                    w: "100%",
                    maxW: {
                      base: "100%",
                      md: "900px",
                      lg: "1200px",
                      xl: "1200px",
                      "2xl": "1400px"
                    },
                    mx: "auto",
                    initial: {
                      y: 100,
                      opacity: 0
                    },
                    animate: {
                      y: 0,
                      opacity: 1
                    },
                    transition: {
                      delay: .4,
                      duration: .8
                    },
                    children: (0, l.jsx)(eh.x, {
                      bg: "rgba(30, 35, 40, 0.5)",
                      backdropFilter: "blur(30px)",
                      borderRadius: {
                        base: "12px",
                        md: "16px",
                        lg: "24px",
                        xl: "24px",
                        "2xl": "32px"
                      },
                      border: "1px solid rgba(16, 168, 253, 0.4)",
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
                      overflow: "hidden",
                      position: "relative",
                      children: (0, l.jsxs)(ew.k, {
                        direction: {
                          base: "column",
                          lg: "row"
                        },
                        align: "center",
                        p: {
                          base: 2,
                          sm: 3,
                          md: 4,
                          lg: 6,
                          xl: 6,
                          "2xl": 8
                        },
                        gap: {
                          base: 2,
                          sm: 3,
                          md: 4,
                          lg: 6,
                          xl: 6,
                          "2xl": 8
                        },
                        children: [(0, l.jsxs)(t$, {
                          flex: "1",
                          initial: {
                            x: -50,
                            opacity: 0
                          },
                          animate: {
                            x: 0,
                            opacity: 1
                          },
                          transition: {
                            delay: .6,
                            duration: .8
                          },
                          w: "100%",
                          children: [(0, l.jsxs)(eh.x, {
                            mb: {
                              base: 2,
                              sm: 2,
                              md: 3,
                              lg: 4,
                              xl: 4,
                              "2xl": 6
                            },
                            children: [(0, l.jsx)(b.x, {
                              fontSize: {
                                base: "16px",
                                sm: "18px",
                                md: "20px",
                                lg: "24px",
                                xl: "24px",
                                "2xl": "32px"
                              },
                              fontWeight: "bold",
                              color: "#10A8FD",
                              mb: {
                                base: 1,
                                md: 2,
                                lg: 2,
                                xl: 2,
                                "2xl": 3
                              },
                              children: o("20")
                            }), (0, l.jsxs)(b.x, {
                              fontSize: {
                                base: "11px",
                                sm: "12px",
                                md: "13px",
                                lg: "15px",
                                xl: "15px",
                                "2xl": "18px"
                              },
                              color: "rgba(255, 255, 255, 0.8)",
                              lineHeight: "1.4",
                              display: {
                                base: "none",
                                sm: "block"
                              },
                              children: [o("21"), o("22")]
                            })]
                          }), (0, l.jsxs)(eh.x, {
                            mb: {
                              base: 1,
                              sm: 2,
                              md: 3,
                              lg: 4,
                              xl: 4,
                              "2xl": 6
                            },
                            children: [(0, l.jsx)(b.x, {
                              fontSize: {
                                base: "13px",
                                sm: "14px",
                                md: "15px",
                                lg: "17px",
                                xl: "17px",
                                "2xl": "20px"
                              },
                              fontWeight: "semibold",
                              color: "white",
                              mb: {
                                base: 1,
                                md: 2,
                                lg: 2,
                                xl: 2,
                                "2xl": 3
                              },
                              children: o("23")
                            }), (0, l.jsx)(ew.k, {
                              direction: "column",
                              gap: {
                                base: 1,
                                sm: 1.5,
                                md: 2,
                                lg: 2,
                                xl: 2,
                                "2xl": 3
                              },
                              children: [{
                                icon: "âš¡",
                                text: o("24")
                              }, {
                                icon: "\uD83C\uDF08",
                                text: o("25")
                              }, {
                                icon: "\uD83C\uDFAE",
                                text: o("26")
                              }, {
                                icon: "\uD83D\uDD27",
                                text: o("27")
                              }].map((e, t) => (0, l.jsxs)(t$, {
                                initial: {
                                  x: -30,
                                  opacity: 0
                                },
                                animate: {
                                  x: 0,
                                  opacity: 1
                                },
                                transition: {
                                  delay: .8 + .1 * t,
                                  duration: .6
                                },
                                display: "flex",
                                alignItems: "center",
                                gap: {
                                  base: 1.5,
                                  md: 2,
                                  lg: 2,
                                  xl: 2,
                                  "2xl": 3
                                },
                                children: [(0, l.jsx)(b.x, {
                                  fontSize: {
                                    base: "12px",
                                    sm: "14px",
                                    md: "15px",
                                    lg: "16px",
                                    xl: "16px",
                                    "2xl": "18px"
                                  },
                                  children: e.icon
                                }), (0, l.jsx)(b.x, {
                                  fontSize: {
                                    base: "10px",
                                    sm: "11px",
                                    md: "12px",
                                    lg: "13px",
                                    xl: "13px",
                                    "2xl": "15px"
                                  },
                                  color: "rgba(255, 255, 255, 0.9)",
                                  lineHeight: "1.3",
                                  children: e.text
                                })]
                              }, t))
                            })]
                          })]
                        }), (0, l.jsxs)(t$, {
                          flex: "1",
                          initial: {
                            x: 50,
                            opacity: 0
                          },
                          animate: {
                            x: 0,
                            opacity: 1
                          },
                          transition: {
                            delay: .8,
                            duration: .8
                          },
                          position: "relative",
                          w: "100%",
                          children: [(0, l.jsx)(t$, {
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            w: "120%",
                            h: "120%",
                            bg: "radial-gradient(circle, rgba(16,168,253,0.1) 0%, transparent 70%)",
                            borderRadius: "50%",
                            animate: {
                              scale: [1, 1.1, 1]
                            },
                            transition: {
                              duration: 4,
                              repeat: 1 / 0,
                              ease: "easeInOut"
                            },
                            display: {
                              base: "none",
                              md: "block"
                            }
                          }), (0, l.jsx)(eh.x, {
                            position: "relative",
                            bg: "rgba(0, 0, 0, 0.25)",
                            backdropFilter: "blur(20px)",
                            borderRadius: {
                              base: "8px",
                              md: "12px",
                              lg: "16px",
                              xl: "16px",
                              "2xl": "20px"
                            },
                            p: {
                              base: 1.5,
                              sm: 2,
                              md: 3,
                              lg: 4,
                              xl: 4,
                              "2xl": 6
                            },
                            border: "1px solid rgba(16, 168, 253, 0.5)",
                            boxShadow: "0 10px 30px rgba(16, 168, 253, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
                            children: (0, l.jsx)(t$, {
                              whileHover: {
                                scale: 1.05
                              },
                              transition: {
                                duration: .3
                              },
                              children: (0, l.jsx)(ev.E, {
                                src: "./products/keyboard.png",
                                alt: "Keyboard",
                                w: "100%",
                                maxW: {
                                  base: "280px",
                                  sm: "320px",
                                  md: "400px",
                                  lg: "500px",
                                  xl: "500px",
                                  "2xl": "600px"
                                },
                                h: "auto",
                                objectFit: "contain",
                                filter: "drop-shadow(0 5px 15px rgba(0, 0, 0, 0.3))",
                                mx: "auto"
                              })
                            })
                          })]
                        })]
                      })
                    })
                  })
                }), (0, l.jsx)(eh.x, {
                  mt: {
                    base: 2,
                    sm: 3,
                    md: 4,
                    lg: 5,
                    xl: 5,
                    "2xl": 6
                  },
                  mb: {
                    base: 3,
                    sm: 4,
                    md: 5,
                    lg: 6,
                    xl: 6,
                    "2xl": 8
                  },
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  px: {
                    base: 2,
                    md: 4
                  },
                  children: (0, l.jsx)(t0, {
                    as: "button",
                    onClick: () => D(),
                    className: "connect-button",
                    bg: "rgba(16, 168, 253, 0.7)",
                    backdropFilter: "blur(15px)",
                    color: "#222",
                    fontWeight: "bold",
                    borderRadius: "999px",
                    px: {
                      base: 5,
                      sm: 6,
                      md: 7,
                      lg: 8,
                      xl: 8,
                      "2xl": 10
                    },
                    py: {
                      base: 1.5,
                      sm: 2,
                      md: 2.5,
                      lg: 3,
                      xl: 3,
                      "2xl": 4
                    },
                    fontSize: {
                      base: "13px",
                      sm: "14px",
                      md: "15px",
                      lg: "17px",
                      xl: "17px",
                      "2xl": "20px"
                    },
                    border: "1px solid rgba(16, 168, 253, 0.6)",
                    boxShadow: "0 4px 15px rgba(16,168,253,0.4), inset 0 1px 0 rgba(255, 255, 255, 0.25)",
                    _hover: {
                      bg: "rgba(230, 200, 77, 0.7)",
                      backdropFilter: "blur(20px)",
                      boxShadow: "0 6px 20px rgba(230, 200, 77, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.35)"
                    },
                    initial: {
                      y: 20,
                      opacity: 0
                    },
                    animate: {
                      y: 0,
                      opacity: 1
                    },
                    transition: {
                      delay: .8,
                      duration: .6
                    },
                    whileHover: {
                      scale: 1.05
                    },
                    whileTap: {
                      scale: .95
                    },
                    minH: {
                      base: "36px",
                      sm: "38px",
                      md: "42px",
                      lg: "48px",
                      xl: "48px",
                      "2xl": "56px"
                    },
                    w: {
                      base: "140px",
                      sm: "150px",
                      md: "auto"
                    },
                    children: (0, l.jsx)("span", {
                      children: o("16")
                    })
                  })
                }), (0, l.jsxs)(eh.x, {
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: {
                    base: "60px",
                    md: "80px",
                    lg: "120px",
                    xl: "120px",
                    "2xl": "160px"
                  },
                  overflow: "hidden",
                  zIndex: 1,
                  display: {
                    base: "none",
                    md: "block"
                  },
                  children: [(0, l.jsx)(eh.x, {
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    sx: {
                      backgroundImage: "url('./wave.svg')",
                      backgroundRepeat: "repeat-x",
                      backgroundPosition: "bottom",
                      backgroundSize: "1600px 120px",
                      animation: "wave1 25s linear infinite",
                      opacity: .6,
                      "@keyframes wave1": {
                        "0%": {
                          transform: "translateX(0)"
                        },
                        "100%": {
                          transform: "translateX(-1600px)"
                        }
                      }
                    }
                  }), (0, l.jsx)(eh.x, {
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    sx: {
                      backgroundImage: "url('./wave.svg')",
                      backgroundRepeat: "repeat-x",
                      backgroundPosition: "bottom",
                      backgroundSize: "1600px 120px",
                      animation: "wave2 35s linear infinite reverse",
                      opacity: .4,
                      "@keyframes wave2": {
                        "0%": {
                          transform: "translateX(0)"
                        },
                        "100%": {
                          transform: "translateX(-1600px)"
                        }
                      }
                    }
                  })]
                }), (0, l.jsx)(eh.x, {
                  position: "fixed",
                  bottom: 0,
                  width: "100%",
                  zIndex: 10,
                  children: (0, l.jsx)(eh.x, {
                    h: {
                      base: "2.5rem",
                      md: "3rem"
                    },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: {
                      base: "6px",
                      md: "12px"
                    },
                    bg: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(25px)",
                    borderTop: "1px solid rgba(255, 255, 255, 0.2)",
                    boxShadow: "0 -2px 15px rgba(0, 0, 0, 0.2)",
                    children: (0, l.jsxs)(eh.x, {
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: {
                        base: "6px",
                        md: "12px"
                      },
                      color: "rgba(255, 255, 255, 0.8)",
                      fontSize: {
                        base: "10px",
                        md: "12px"
                      },
                      px: 3,
                      textAlign: "center",
                      flexWrap: "wrap",
                      children: [(0, l.jsx)("a", {
                        href: "https://beian.miit.gov.cn/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: {
                          textDecoration: "none",
                          color: "rgba(255, 255, 255, 0.8)",
                          transition: "color 0.3s ease"
                        },
                        onMouseOver: e => e.currentTarget.style.color = "rgba(255, 255, 255, 1)",
                        onMouseOut: e => e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)",
                        children: o("2")
                      }), (0, l.jsx)(eh.x, {
                        display: {
                          base: "none",
                          sm: "block"
                        },
                        children: "|"
                      }), (0, l.jsx)(eh.x, {
                        color: "rgba(255, 255, 255, 0.8)",
                        children: o("3")
                      })]
                    })
                  })
                })]
              })]
            })
          })]
        })
      }
      var t3 = r(5008),
        t6 = r(1298),
        t4 = r(3146);

      function t8() {
        let e = (0, t3._)(["\n  0% { transform: translateY(0px); }\n  50% { transform: translateY(-5px); }\n  100% { transform: translateY(0px); }\n"]);
        return t8 = function() {
          return e
        }, e
      }

      function t7() {
        let e = (0, t3._)(["\n  0% { background-position: -200px 0; }\n  100% { background-position: 200px 0; }\n"]);
        return t7 = function() {
          return e
        }, e
      }
      let t9 = (0, t4.F4)(t8()),
        re = (0, t4.F4)(t7());
      var rt = function() {
          let {
            showUpgradeNotification: e,
            setShowUpgradeNotification: t,
            setUpgradeNotificationWithTimer: r,
            deviceVersion: o,
            deviceNewVersion: n,
            setCurrentTab: i,
            t: a
          } = (0, s.useContext)(ed), c = "#10A8FD", d = "white", u = "rgba(255, 255, 255, 0.6)", x = "rgba(16, 168, 253, 0.3)", h = (() => {
            if (!o || !n) return !1;
            let e = o.replace(/^v/i, "").trim(),
              t = n.replace(/^v/i, "").trim();
            if (e === t) return !1;
            let r = e.split(".").map(e => parseInt(e) || 0),
              i = t.split(".").map(e => parseInt(e) || 0),
              a = Math.max(r.length, i.length);
            for (; r.length < a;) r.push(0);
            for (; i.length < a;) i.push(0);
            for (let e = 0; e < a; e++) {
              if (i[e] > r[e]) return !0;
              if (i[e] < r[e]) break
            }
            return !1
          })(), p = e && h;
          return p ? (0, l.jsx)(t6.M, {
            direction: "top",
            in: p,
            style: {
              zIndex: 1e3
            },
            children: (0, l.jsx)(eh.x, {
              position: "fixed",
              top: "20px",
              right: "20px",
              w: "320px",
              bg: "rgba(20, 25, 30, 0.95)",
              borderRadius: "xl",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4), 0 0 20px rgba(16, 168, 253, 0.2)",
              backdropFilter: "blur(10px)",
              p: 5,
              color: d,
              animation: "".concat(t9, " 3s ease-in-out infinite"),
              border: "1px solid ".concat(x),
              _before: {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: "xl",
                background: "linear-gradient(45deg, transparent 30%, rgba(16, 168, 253, 0.2) 50%, transparent 70%)",
                backgroundSize: "200px 100%",
                animation: "".concat(re, " 3s ease-in-out infinite"),
                pointerEvents: "none"
              },
              children: (0, l.jsxs)(g.g, {
                spacing: 4,
                align: "stretch",
                position: "relative",
                zIndex: 1,
                children: [(0, l.jsxs)(g.g, {
                  align: "start",
                  spacing: 2,
                  children: [(0, l.jsxs)(ep.U, {
                    spacing: 3,
                    align: "center",
                    children: [(0, l.jsx)(eh.x, {
                      fontSize: "24px",
                      bg: "rgba(16, 168, 253, 0.2)",
                      p: 2,
                      borderRadius: "lg",
                      border: "1px solid ".concat(x),
                      children: "\uD83D\uDE80"
                    }), (0, l.jsxs)(g.g, {
                      align: "start",
                      spacing: 1,
                      flex: "1",
                      children: [(0, l.jsx)(b.x, {
                        fontWeight: "bold",
                        fontSize: "lg",
                        color: d,
                        children: a("800")
                      }), (0, l.jsx)(b.x, {
                        fontSize: "sm",
                        color: u,
                        children: a("801")
                      })]
                    })]
                  }), (0, l.jsx)(eh.x, {
                    w: "full",
                    bg: "rgba(16, 168, 253, 0.1)",
                    borderRadius: "md",
                    p: 3,
                    border: "1px solid ".concat(x),
                    children: (0, l.jsxs)(ep.U, {
                      justify: "space-between",
                      children: [(0, l.jsxs)(g.g, {
                        align: "start",
                        spacing: 0,
                        children: [(0, l.jsx)(b.x, {
                          fontSize: "xs",
                          color: u,
                          children: a("810")
                        }), (0, l.jsxs)(b.x, {
                          fontSize: "sm",
                          color: d,
                          fontWeight: "medium",
                          children: ["v", o]
                        })]
                      }), (0, l.jsx)(b.x, {
                        fontSize: "lg",
                        color: c,
                        children: "â†’"
                      }), (0, l.jsxs)(g.g, {
                        align: "end",
                        spacing: 0,
                        children: [(0, l.jsx)(b.x, {
                          fontSize: "xs",
                          color: u,
                          children: a("811")
                        }), (0, l.jsxs)(b.x, {
                          fontSize: "sm",
                          color: c,
                          fontWeight: "bold",
                          children: ["v", n]
                        })]
                      })]
                    })
                  })]
                }), (0, l.jsxs)(ep.U, {
                  spacing: 3,
                  children: [(0, l.jsx)(eb.z, {
                    flex: "1",
                    bg: "transparent",
                    color: u,
                    size: "sm",
                    borderRadius: "lg",
                    border: "1px solid ".concat(x),
                    _hover: {
                      bg: "rgba(255, 255, 255, 0.1)",
                      color: d,
                      borderColor: c
                    },
                    onClick: () => {
                      r(!1)
                    },
                    fontWeight: "medium",
                    children: a("812")
                  }), (0, l.jsx)(eb.z, {
                    flex: "2",
                    bg: c,
                    color: "white",
                    size: "sm",
                    borderRadius: "lg",
                    border: "none",
                    _hover: {
                      bg: "#3BBAFD",
                      transform: "translateY(-1px)",
                      boxShadow: "0 4px 12px rgba(16, 168, 253, 0.4)"
                    },
                    _active: {
                      transform: "translateY(0)"
                    },
                    onClick: () => {
                      r(!1), i("kb-setting")
                    },
                    fontWeight: "bold",
                    boxShadow: "0 2px 8px rgba(16, 168, 253, 0.3)",
                    children: a("813")
                  })]
                })]
              })
            })
          }) : null
        },
        rr = function() {
          let {
            deviceStatus: e,
            setDeviceStatus: t,
            deviceOnline: r,
            setDeviceOnline: o,
            currentTab: n,
            connectDevice: i,
            disconnectDevice: a,
            backgroundSettings: c,
            setBackgroundSettings: d,
            t: g,
            localConfigFile: m,
            setLocalConfigFile: f,
            connectMode: y,
            setConnectMode: w,
            singleDeviceMode: v,
            connectedDevice: k
          } = (0, s.useContext)(ed), {
            changeLanguage: j,
            i18n: S
          } = L("common"), C = (0, s.useRef)(e), D = (0, s.useRef)(y), [I, F] = (0, s.useState)(!1), E = (0, s.useRef)(null), R = (0, s.useRef)(void 0), A = (0, s.useRef)(!0), M = (0, s.useRef)(!1), _ = (0, s.useRef)(!1);
          (0, s.useEffect)(() => {
            _.current = I
          }, [I]), (0, s.useEffect)(() => {
            let e = R.current;
            if (A.current) {
              A.current = !1, R.current = r, r ? F(!1) : (F(!0), M.current = !0);
              return
            }
            return E.current && (clearTimeout(E.current), E.current = null), !0 !== e || r ? !1 === e && r && M.current ? E.current = setTimeout(() => {
              F(!1), E.current = null
            }, 1e3) : r && _.current && F(!1) : (F(!0), M.current = !0), R.current = r, () => {
              E.current && (clearTimeout(E.current), E.current = null)
            }
          }, [r]);
          let [z, N] = (0, s.useState)(!1), [T, O] = (0, s.useState)(!1), W = (0, s.useRef)(null), B = eD(), {
            isOpen: P,
            onOpen: U,
            onClose: H
          } = (0, ex.q)(), [K, V] = (0, s.useState)(0);
          (0, s.useEffect)(() => {
            C.current = e
          }, [e]), (0, s.useEffect)(() => {
            D.current = y
          }, [y]), (0, s.useEffect)(() => {
            (null == c ? void 0 : c.backgroundUrl) || d({ ...c,
              backgroundUrl: "./bkg/main_bkg.mp4"
            })
          }, [c, d]);
          let G = (0, s.useCallback)(e => {
              if (console.log("è®¾å¤‡å·²æ–­å¼€:", e.productName || "æœªçŸ¥è®¾å¤‡", {
                  vendorId: "0x".concat(e.vendorId.toString(16).toUpperCase()),
                  productId: "0x".concat(e.productId.toString(16).toUpperCase()),
                  currentMode: D.current
                }), 6700 === e.vendorId) {
                let r = D.current;
                if (k && e.vendorId === k.vendorId && e.productId === k.productId) {
                  if (console.log("âš ï¸ æ£€æµ‹åˆ°å½“å‰ ".concat(r, " è®¾å¤‡æ–­å¼€ï¼Œè¿”å›žé¦–é¡µ")), !v) {
                    try {
                      if (window.parent && window.parent !== window) {
                        try {
                          window.parent.location.hash && "" !== window.parent.location.hash && (window.parent.location.hash = "")
                        } catch (e) {}
                        try {
                          window.parent.postMessage({
                            type: "CLEAR_HASH",
                            action: "clearHash"
                          }, "*")
                        } catch (e) {}
                      } else window.location.href = "/"
                    } catch (e) {
                      window.location.href = "/"
                    }
                    return
                  }
                  a(), t(!1), o(!1), w(""), D.current = ""
                } else console.log("æ£€æµ‹åˆ°è®¾å¤‡æ–­å¼€ï¼Œä½†ä¸æ˜¯å½“å‰ä½¿ç”¨çš„è®¾å¤‡ (å½“å‰æ¨¡å¼: ".concat(r, ")ï¼Œå¿½ç•¥"))
              }
            }, [t, o, w, a, v]),
            Y = (0, s.useCallback)(e => {
              console.log("è®¾å¤‡å·²è¿žæŽ¥:", e.productName || "æœªçŸ¥è®¾å¤‡", {
                vendorId: "0x".concat(e.vendorId.toString(16).toUpperCase()),
                productId: "0x".concat(e.productId.toString(16).toUpperCase()),
                currentMode: D.current
              }), 6700 === e.vendorId && D.current
            }, []),
            Z = e => {
              j(e)
            };
          return (0, s.useEffect)(() => (eE.startMonitoring(), eE.on("disconnect", G), eE.on("connect", Y), () => {
            eE.off("disconnect", G), eE.off("connect", Y)
          }), [G, Y]), e || !v ? (0, l.jsxs)(eh.x, {
            className: "main-bg",
            style: {
              width: "100%",
              height: "100vh",
              position: "relative",
              overflow: "hidden",
              backgroundColor: "black"
            },
            children: [(0, l.jsx)("input", {
              ref: W,
              type: "file",
              accept: "image/*",
              onChange: e => {
                var t;
                let r = null === (t = e.target.files) || void 0 === t ? void 0 : t[0];
                if (r) {
                  if (!r.type.startsWith("image/")) {
                    B(g("30"), g("31"), "error"), W.current && (W.current.value = "");
                    return
                  }
                  if (r.size > 5242880) {
                    B(g("32"), g("33"), "error"), W.current && (W.current.value = "");
                    return
                  }
                  let e = new FileReader;
                  e.onload = e => {
                    var t;
                    let r = null === (t = e.target) || void 0 === t ? void 0 : t.result;
                    d({ ...c,
                      backgroundUrl: r
                    }), O(!1), W.current && (W.current.value = "")
                  }, e.readAsDataURL(r)
                }
              },
              style: {
                display: "none"
              }
            }), (0, l.jsx)(eh.x, {
              position: "absolute",
              top: 0,
              left: 0,
              w: "100vw",
              h: "100vh",
              overflow: "hidden",
              bg: "black",
              zIndex: 0,
              children: (null == c ? void 0 : c.backgroundUrl) && (c.backgroundUrl.endsWith(".mp4") || c.backgroundUrl.endsWith(".webm")) && !z ? (0, l.jsx)(eh.x, {
                position: "relative",
                width: "100%",
                height: "100%",
                children: (0, l.jsx)("video", {
                  autoPlay: !0,
                  loop: !0,
                  muted: !0,
                  playsInline: !0,
                  style: {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    top: 0,
                    left: 0
                  },
                  onError: () => {
                    console.log("è§†é¢‘åŠ è½½å¤±è´¥ï¼Œåˆ‡æ¢åˆ°é™æ€èƒŒæ™¯"), N(!0)
                  },
                  children: (0, l.jsx)("source", {
                    src: c.backgroundUrl,
                    type: "video/mp4"
                  })
                })
              }) : (0, l.jsx)(eh.x, {
                position: "absolute",
                top: 0,
                left: 0,
                w: "100%",
                h: "100%",
                style: {
                  backgroundImage: (null == c ? void 0 : c.backgroundUrl) ? "url(".concat(c.backgroundUrl, ")") : "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat"
                }
              })
            }), (0, l.jsx)(eh.x, {
              position: "relative",
              zIndex: 1,
              sx: {
                "@keyframes gradientShift": {
                  "0%": {
                    opacity: .7
                  },
                  "50%": {
                    opacity: .9
                  },
                  "100%": {
                    opacity: .7
                  }
                }
              },
              children: (0, l.jsxs)(eh.x, {
                className: "flex h-screen",
                children: [(0, l.jsx)(tX, {}), (0, l.jsxs)(eh.x, {
                  className: "flex flex-col flex-1",
                  ml: "320px",
                  sx: {
                    "&::-webkit-scrollbar": {
                      width: "3px"
                    },
                    "&::-webkit-scrollbar-track": {
                      width: "4px",
                      background: "rgba(0, 0, 0, 0.1)"
                    },
                    "&::-webkit-scrollbar-thumb": {
                      background: "rgba(255, 150, 0, 0.3)",
                      borderRadius: "24px"
                    }
                  },
                  children: [(0, l.jsx)(eh.x, {
                    position: "absolute",
                    top: 4,
                    right: 4,
                    zIndex: 9999,
                    children: (0, l.jsxs)(ep.U, {
                      spacing: 2,
                      children: [(0, l.jsxs)(eg.v, {
                        isOpen: T,
                        onClose: () => O(!1),
                        children: [(0, l.jsx)(em.j, {
                          as: eb.z,
                          size: "sm",
                          onClick: () => O(!T),
                          leftIcon: (0, l.jsx)(eF.H3h, {}),
                          style: {
                            background: "rgba(255, 255, 255, 0.1)",
                            backdropFilter: "blur(10px)",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            borderRadius: "8px",
                            color: "white"
                          },
                          _hover: {
                            background: "rgba(255, 255, 255, 0.2)",
                            transform: "translateY(-1px)"
                          },
                          children: g("34")
                        }), (0, l.jsxs)(ef.q, {
                          bg: "rgba(36, 38, 43, 0.95)",
                          backdropFilter: "blur(20px)",
                          border: "1px solid rgba(16, 168, 253, 0.3)",
                          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
                          borderRadius: "12px",
                          minW: "150px",
                          zIndex: 1e4,
                          children: [(0, l.jsxs)(ey.s, {
                            onClick: () => {
                              var e;
                              null === (e = W.current) || void 0 === e || e.click()
                            },
                            fontSize: "sm",
                            p: 3,
                            borderRadius: "8px",
                            color: "white",
                            _hover: {
                              bg: "rgba(16, 168, 253, 0.2)",
                              color: "#10A8FD"
                            },
                            children: ["\uD83D\uDDBCï¸ ", g("36")]
                          }), (0, l.jsxs)(ey.s, {
                            onClick: () => {
                              d({ ...c,
                                backgroundUrl: "./bkg/main_bkg.mp4"
                              }), N(!1), O(!1)
                            },
                            fontSize: "sm",
                            p: 3,
                            borderRadius: "8px",
                            color: "white",
                            _hover: {
                              bg: "rgba(16, 168, 253, 0.2)",
                              color: "#10A8FD"
                            },
                            children: ["\uD83D\uDD04 ", g("37")]
                          })]
                        })]
                      }), (0, l.jsxs)(eg.v, {
                        children: [(0, l.jsx)(em.j, {
                          as: eb.z,
                          rightIcon: (0, l.jsx)(eI.v, {}),
                          variant: "ghost",
                          colorScheme: "blackAlpha",
                          _hover: {
                            bg: "rgba(0, 0, 0, 0.1)"
                          },
                          size: "sm",
                          minW: "auto",
                          px: 2,
                          py: 1,
                          fontSize: "sm",
                          fontWeight: "normal",
                          bg: "rgba(255, 255, 255, 0.1)",
                          backdropFilter: "blur(10px)",
                          border: "1px solid rgba(255, 255, 255, 0.2)",
                          borderRadius: "8px",
                          color: "white",
                          children: "cn" === S.language ? "ä¸­æ–‡" : "English"
                        }), (0, l.jsxs)(ef.q, {
                          bg: "rgba(36, 38, 43, 0.95)",
                          backdropFilter: "blur(20px)",
                          border: "1px solid rgba(16, 168, 253, 0.3)",
                          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
                          borderRadius: "12px",
                          minW: "120px",
                          zIndex: 1e4,
                          _focus: {
                            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)"
                          },
                          children: [(0, l.jsx)(ey.s, {
                            onClick: () => Z("cn"),
                            fontSize: "sm",
                            p: 3,
                            borderRadius: "8px",
                            color: "white",
                            _hover: {
                              bg: "rgba(16, 168, 253, 0.2)",
                              color: "#10A8FD"
                            },
                            _focus: {
                              bg: "rgba(16, 168, 253, 0.2)",
                              color: "#10A8FD"
                            },
                            children: "ä¸­æ–‡"
                          }), (0, l.jsx)(ey.s, {
                            onClick: () => Z("en"),
                            fontSize: "sm",
                            p: 3,
                            borderRadius: "8px",
                            color: "white",
                            _hover: {
                              bg: "rgba(16, 168, 253, 0.2)",
                              color: "#10A8FD"
                            },
                            _focus: {
                              bg: "rgba(16, 168, 253, 0.2)",
                              color: "#10A8FD"
                            },
                            children: "English"
                          })]
                        })]
                      })]
                    })
                  }), (0, l.jsx)(tZ, {}), (0, l.jsx)(eh.x, {
                    className: "flex-1 overflow-auto",
                    pt: 4,
                    children: {
                      "kb-keyremap": (0, l.jsx)(eQ, {}),
                      "kb-light": (0, l.jsx)(tl, {}),
                      "kb-light-box": (0, l.jsx)(tm, {}),
                      "kb-macro": (0, l.jsx)(tY, {}),
                      "kb-setting": (0, l.jsx)(tA, {})
                    }[n]
                  })]
                })]
              })
            }), I && (0, l.jsx)(ew.k, {
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              bg: "rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(3px)",
              justifyContent: "center",
              alignItems: "center",
              zIndex: "1000",
              userSelect: "none",
              pointerEvents: "auto",
              onClick: e => e.stopPropagation(),
              children: (0, l.jsx)(b.x, {
                color: "white",
                fontSize: "lg",
                bg: "rgba(0, 0, 0, 0.6)",
                px: "5",
                py: "3",
                borderRadius: "md",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                children: g("49")
              })
            }), (0, l.jsx)(rt, {}), (0, l.jsxs)(u.u_, {
              isOpen: P,
              onClose: H,
              size: "full",
              blockScrollOnMount: !1,
              children: [(0, l.jsx)(x.Z, {
                bg: "rgba(0, 0, 0, 0.9)",
                pointerEvents: "none"
              }), (0, l.jsx)(h.h, {
                bg: "rgba(58, 58, 58, 0.98)",
                border: "none",
                borderRadius: "0",
                backdropFilter: "blur(20px)",
                w: "100vw",
                h: "100vh",
                maxW: "none",
                maxH: "none",
                m: 0,
                pointerEvents: "none",
                children: (0, l.jsxs)(p.f, {
                  p: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  w: "100%",
                  h: "100%",
                  pointerEvents: "auto",
                  children: [(0, l.jsx)(eh.x, {
                    mb: 6,
                    children: (0, l.jsx)(ev.E, {
                      src: "./logo.png",
                      alt: "AJAZZ",
                      h: {
                        base: "24px",
                        md: "28px",
                        lg: "32px"
                      },
                      w: "auto"
                    })
                  }), (0, l.jsx)(b.x, {
                    color: "white",
                    fontSize: {
                      base: "24px",
                      md: "32px",
                      lg: "36px"
                    },
                    fontWeight: "600",
                    mb: 6,
                    textAlign: "center",
                    children: g("40")
                  }), (0, l.jsxs)(b.x, {
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: {
                      base: "16px",
                      md: "18px",
                      lg: "20px"
                    },
                    mb: 4,
                    textAlign: "center",
                    maxW: "800px",
                    px: 4,
                    children: [g("41"), " ", (0, l.jsx)(b.x, {
                      as: "span",
                      color: "#10A8FD",
                      fontWeight: "700",
                      fontFamily: "monospace",
                      children: "L-Ctrl"
                    }), " + ", (0, l.jsx)(b.x, {
                      as: "span",
                      color: "#10A8FD",
                      fontWeight: "700",
                      fontFamily: "monospace",
                      children: "-"
                    }), " ", g("42")]
                  }), (0, l.jsxs)(b.x, {
                    color: "rgba(255, 255, 255, 0.6)",
                    fontSize: {
                      base: "14px",
                      md: "16px",
                      lg: "18px"
                    },
                    mb: 8,
                    textAlign: "center",
                    maxW: "800px",
                    px: 4,
                    fontFamily: "monospace",
                    children: [g("43"), ": ", K, " x ", window.innerHeight]
                  }), (0, l.jsx)(ew.k, {
                    justify: "center",
                    gap: 6,
                    children: (0, l.jsx)(eb.z, {
                      bg: "rgba(16, 168, 253, 0.2)",
                      color: "#10A8FD",
                      border: "2px solid #10A8FD",
                      _hover: {
                        bg: "rgba(16, 168, 253, 0.3)",
                        transform: "translateY(-2px)",
                        boxShadow: "0 8px 25px rgba(16, 168, 253, 0.3)"
                      },
                      _active: {
                        bg: "rgba(16, 168, 253, 0.4)"
                      },
                      onClick: H,
                      px: 8,
                      py: 4,
                      borderRadius: "12px",
                      fontSize: {
                        base: "16px",
                        md: "18px"
                      },
                      fontWeight: "600",
                      minW: "160px",
                      h: "auto",
                      children: g("45")
                    })
                  })]
                })
              })]
            })]
          }) : (0, l.jsx)(t5, {})
        };

      function ro() {
        return (0, l.jsx)("main", {
          children: (0, l.jsx)(eu, {
            children: (0, l.jsx)(rr, {})
          })
        })
      }
    },
    1576: function(e, t, r) {
      "use strict";
      r.d(t, {
        WebHid: function() {
          return d
        },
        h: function() {
          return u
        }
      });
      let o = {},
        n = {},
        i = e => () => Promise.race([new Promise((t, r) => {
          e((e, o) => {
            e ? r(e) : t(o)
          })
        }), new Promise((e, t) => {
          setTimeout(() => {
            e([])
          }, 100)
        })]),
        a = e => e.filter(e => {
          var t;
          return null === (t = e.collections) || void 0 === t ? void 0 : t.some(e => 65282 === e.usagePage && 2 === e.usage)
        }),
        l = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          return t && 0 !== t.length ? e.filter(e => t.some(t => {
            if (void 0 !== t.vendorId && e.vendorId !== t.vendorId || void 0 !== t.productId && e.productId !== t.productId) return !1;
            if (void 0 !== t.usagePage || void 0 !== t.usage) {
              var r;
              if (!(null === (r = e.collections) || void 0 === r ? void 0 : r.some(e => (void 0 === t.usagePage || e.usagePage === t.usagePage) && (void 0 === t.usage || e.usage === t.usage)))) return !1
            }
            return !0
          })) : e
        },
        s = () => self.crypto && self.crypto.randomUUID && self.crypto.randomUUID() || "path:".concat(Math.random()),
        c = e => {
          var t, r, o, n;
          let i = e._address || s();
          e._address = i;
          let a = 0,
            l = 0,
            c = 0;
          for (let o of e.collections || [])
            if (null === (t = o.outputReports) || void 0 === t ? void 0 : t.length) {
              let e = o.outputReports[0];
              if (void 0 !== e.reportId && (null === (r = e.items) || void 0 === r ? void 0 : r[0])) {
                a = e.reportId, l = e.items[0].reportSize || 0, c = e.items[0].reportCount || 0;
                break
              }
            }
          let u = {
            _device: e,
            interface: 2,
            vendorId: null !== (o = e.vendorId) && void 0 !== o ? o : -1,
            productId: null !== (n = e.productId) && void 0 !== n ? n : -1,
            address: i,
            productName: e.productName,
            reportId: a,
            reportSize: l,
            reportCount: c
          };
          return d.hid_cache[i] = u
        },
        d = {
          hid_cache: {},
          requestDevice: async function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
              t = await navigator.hid.requestDevice({
                filters: e
              });
            return t.forEach(c), t
          },
          getFilteredDevices: async function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            try {
              let t = await navigator.hid.getDevices(),
                r = a(t);
              if (e.length > 0) return l(r, e);
              return r
            } catch (e) {
              return []
            }
          },
          getAuthorizedDevices: async function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            try {
              let t = await navigator.hid.getDevices();
              return l(t, e).map(c)
            } catch (e) {
              return console.error("èŽ·å–å·²æŽˆæƒè®¾å¤‡å¤±è´¥:", e), []
            }
          },
          devices: async function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
              r = [];
            if (e) try {
              r = await d.requestDevice(t)
            } catch (e) {
              return []
            } else if (0 === (r = await d.getFilteredDevices(t)).length) try {
              r = await d.requestDevice(t)
            } catch (e) {
              return []
            }
            return r && 0 !== r.length ? r.map(c) : []
          }
        };
      class u {
        async open() {
          if (this._hidDevice && !this._hidDevice._device.opened) {
            this.openPromise = this._hidDevice._device.open(), this.setupListeners();
            try {
              await this.openPromise
            } catch (e) {
              console.log(e)
            }
          }
          return Promise.resolve()
        }
        addListeners(e) {
          this._hidDevice && (this._hidDevice._device.oninputreport = e)
        }
        setupListeners() {
          this._hidDevice && this._hidDevice._device.addEventListener("inputreport", e => {
            0 !== n[this.address].length ? n[this.address].shift()(new Uint8Array(e.data.buffer)) : o[this.address].push({
              currTime: Date.now(),
              message: new Uint8Array(e.data.buffer)
            })
          })
        }
        read(e) {
          if (n[this.address] = [], this.fastForwardGlobalBuffer(Date.now()), o[this.address].length > 0) {
            var t;
            e(void 0, null === (t = o[this.address].shift()) || void 0 === t ? void 0 : t.message)
          } else n[this.address].push(t => e(void 0, t))
        }
        fastForwardGlobalBuffer(e) {
          let t = o[this.address].length;
          for (; t;)
            if (t--, o[this.address][0].currTime < e) o[this.address].shift();
            else break
        }
        async hid_write(e) {
          var t, r;
          await this.openPromise;
          let o = new Uint8Array(e.slice(1));
          if (o.length > this.reportCount) {
            let e = o.slice(0, this.reportCount);
            await (null === (t = this._hidDevice) || void 0 === t ? void 0 : t._device.sendReport(this.reportId, e))
          } else await (null === (r = this._hidDevice) || void 0 === r ? void 0 : r._device.sendReport(this.reportId, o))
        }
        async hid_send_feature_report(e, t) {
          var r, o;
          await this.openPromise;
          let n = new Uint8Array(t.slice(1));
          return await (null === (r = this._hidDevice) || void 0 === r ? void 0 : r._device.sendFeatureReport(this.reportId, n)), await (null === (o = this._hidDevice) || void 0 === o ? void 0 : o._device.receiveFeatureReport(this.reportId))
        }
        async hid_get_feature_report(e, t) {
          var r;
          return await this.openPromise, new Uint8Array(t.slice(1)), await (null === (r = this._hidDevice) || void 0 === r ? void 0 : r._device.receiveFeatureReport(e))
        }
        constructor(e) {
          if (this.reportId = -1, this.reportSize = -1, this.reportCount = -1, this.interface = -1, this.vendorId = -1, this.productId = -1, this.productName = "", this.address = "", this.openPromise = Promise.resolve(), this.readP = i(e => this.read(e)), "demo" == e) {
            this.vendorId = 39578, this.productId = 47802, this.productName = "Test";
            return
          }
          this._hidDevice = d.hid_cache[e], this._hidDevice && (this.vendorId = this._hidDevice.vendorId, this.productId = this._hidDevice.productId, this.address = this._hidDevice.address, this.interface = this._hidDevice.interface, this.productName = this._hidDevice.productName, this.reportId = this._hidDevice.reportId, this.reportSize = this._hidDevice.reportSize, this.reportCount = this._hidDevice.reportCount, o[this.address] = o[this.address] || [], n[this.address] = n[this.address] || [], this._hidDevice._device.opened || this.open())
        }
      }
    }
  },
  function(e) {
    e.O(0, [699, 866, 749, 317, 971, 117, 744], function() {
      return e(e.s = 4538)
    }), _N_E = e.O()
  }
]);