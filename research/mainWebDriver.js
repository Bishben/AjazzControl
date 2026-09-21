(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[931], {
    471: function(e, t, r) {
        var o = {
            "./cn/common.json": [2234, 234],
            "./en/common.json": [1249, 249]
        };
        function n(e) {
            if (!r.o(o, e))
                return Promise.resolve().then(function() {
                    var t = Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND",
                    t
                });
            var t = o[e]
              , n = t[0];
            return r.e(t[1]).then(function() {
                return r.t(n, 19)
            })
        }
        n.keys = function() {
            return Object.keys(o)
        }
        ,
        n.id = 471,
        e.exports = n
    },
    1470: function(e, t, r) {
        Promise.resolve().then(r.bind(r, 4452))
    },
    4452: function(e, t, r) {
        "use strict";
        r.r(t),
        r.d(t, {
            default: function() {
                return el
            }
        });
        var o = r(7437)
          , n = r(2265)
          , a = r(1505)
          , i = r(2635)
          , c = r(4457)
          , s = r(5350);
        r(4870);
        let d = "i18next"
          , l = () => navigator.language.toLowerCase().includes("zh") ? "cn" : "en";
        function u() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "common"
              , t = arguments.length > 1 ? arguments[1] : void 0
              , [r,o] = (0,
            c.fP)([d])
              , a = (0,
            i.$G)(e, t)
              , {i18n: s} = a;
            return (0,
            n.useEffect)( () => {
                let e = l()
                  , t = (null == r ? void 0 : r.i18next) || e;
                s.changeLanguage(t),
                (null == r ? void 0 : r.i18next) || o(d, t, {
                    path: "/"
                })
            }
            , [r, s, o]),
            {
                ...a,
                changeLanguage: e => {
                    s.changeLanguage(e),
                    o(d, e, {
                        path: "/"
                    })
                }
            }
        }
        a.ZP.use(i.Db).use((0,
        s.Z)( (e, t) => r(471)("./".concat(e, "/").concat(t, ".json")))).init({
            supportedLngs: ["cn", "en"],
            fallbackLng: "cn",
            fallbackNS: "common",
            defaultNS: "common",
            lng: void 0
        });
        var p = r(7530);
        function h() {
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            let e = arguments.length > 1 ? arguments[1] : void 0
              , t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
              , r = document.documentElement;
            Object.entries({
                "--primary-color": t && e ? e : "#10A8FD",
                "--bg-primary": "#0a0a0a",
                "--bg-secondary": "#1a1a1a",
                "--bg-tertiary": "#2a2a2a",
                "--text-primary": "#ffffff",
                "--text-secondary": "#b3b3b3",
                "--text-muted": "#666666",
                "--border-color": "#333333",
                "--border-light": "#444444",
                "--surface-hover": "#333333",
                "--surface-active": "#404040",
                "--overlay-bg": "rgba(0, 0, 0, 0.8)",
                "--glass-bg": "rgba(0, 0, 0, 0.3)",
                "--glass-border": "rgba(255, 255, 255, 0.1)"
            }).forEach(e => {
                let[t,o] = e;
                r.style.setProperty(t, o)
            }
            )
        }
        var g = r(7686);
        let f = (0,
        n.createContext)(void 0)
          , v = () => {
            let e = (0,
            n.useContext)(f);
            if (!e)
                throw Error("useDeviceConnection must be used within DeviceConnectionProvider");
            return e
        }
        ;
        function x(e) {
            let {children: t, readDeviceInfoWithRetry: a} = e
              , [i,c] = (0,
            n.useState)()
              , s = (0,
            n.useRef)([])
              , [d,l] = (0,
            n.useState)(new Map)
              , u = (0,
            n.useRef)(new Map)
              , h = (0,
            n.useCallback)( () => s.current.map(e => ({
                ...e,
                devices: e.devices.map(t => {
                    let r = "".concat(e.productType, "-").concat(t.deviceMode)
                      , o = d.get(r);
                    return o ? {
                        ...t,
                        online_status: o.online_status,
                        battery_value: o.battery_value,
                        charge_flag: o.charge_flag,
                        connect_status: o.connect_status
                    } : t
                }
                )
            })), [d])
              , v = (0,
            n.useCallback)( (e, t, r) => {
                let o = "".concat(e, "-").concat(t);
                l(n => {
                    let a = new Map(n)
                      , i = a.get(o);
                    if (!i) {
                        let r = s.current.find(t => t.productType === e)
                          , o = null == r ? void 0 : r.devices.find(e => e.deviceMode === t);
                        i = {
                            productType: e,
                            deviceMode: t,
                            online_status: 0,
                            battery_value: 0,
                            charge_flag: 0,
                            connect_status: (null == o ? void 0 : o.connect_status) || 0
                        }
                    }
                    return a.set(o, {
                        ...i,
                        ...r
                    }),
                    a
                }
                )
            }
            , [])
              , x = (0,
            n.useCallback)(e => {
                let t = "function" == typeof e ? e(h()) : e;
                s.current = t.map(e => ({
                    ...e,
                    devices: e.devices.map(t => {
                        var r, o;
                        return {
                            ...t,
                            online_status: (null === (o = g.R.find(t => t.productType === e.productType)) || void 0 === o ? void 0 : null === (r = o.devices.find(e => e.deviceMode === t.deviceMode)) || void 0 === r ? void 0 : r.online_status) || 0
                        }
                    }
                    )
                }));
                let r = new Map;
                t.forEach(e => {
                    e.devices.forEach(t => {
                        let o = "".concat(e.productType, "-").concat(t.deviceMode);
                        r.set(o, {
                            productType: e.productType,
                            deviceMode: t.deviceMode,
                            online_status: t.online_status,
                            battery_value: t.battery_value,
                            charge_flag: t.charge_flag,
                            connect_status: t.connect_status
                        })
                    }
                    )
                }
                ),
                l(r)
            }
            , [h])
              , m = (0,
            n.useCallback)(async () => {
                try {
                    let e = g.R.map(e => ({
                        ...e,
                        devices: e.devices.map(e => ({
                            ...e,
                            deviceMode: e.deviceMode,
                            vendorId: e.vendorId,
                            productId: e.productId,
                            productName: e.productName,
                            productUsage: e.productUsage,
                            productUsagePage: e.productUsagePage,
                            protocol: e.protocol,
                            charge_flag: e.charge_flag,
                            battery_value: e.battery_value,
                            connect_status: e.connect_status,
                            online_status: e.online_status
                        }))
                    }));
                    s.current = e;
                    let t = new Map;
                    return e.forEach(e => {
                        e.devices.forEach(r => {
                            let o = "".concat(e.productType, "-").concat(r.deviceMode);
                            t.set(o, {
                                productType: e.productType,
                                deviceMode: r.deviceMode,
                                online_status: r.online_status,
                                battery_value: r.battery_value,
                                charge_flag: r.charge_flag,
                                connect_status: r.connect_status
                            })
                        }
                        )
                    }
                    ),
                    l(t),
                    e
                } catch (e) {
                    return []
                }
            }
            , [])
              , b = (0,
            n.useCallback)( () => s.current && 0 !== s.current.length ? s.current.flatMap(e => e.devices.map(e => ({
                vendorId: parseInt(e.vendorId, 16),
                productId: parseInt(e.productId, 16),
                productName: e.productName,
                usagePage: parseInt(e.productUsagePage, 16) || 0,
                usage: parseInt(e.productUsage, 16) || 0,
                deviceMode: e.deviceMode
            }))) : [], [])
              , y = (0,
            n.useCallback)(async () => {
                try {
                    let e = g.R.flatMap(e => e.devices.map(e => ({
                        vendorId: parseInt(e.vendorId, 16),
                        productId: parseInt(e.productId, 16),
                        productName: e.productName,
                        usagePage: parseInt(e.productUsagePage, 16) || 0,
                        usage: parseInt(e.productUsage, 16) || 0,
                        deviceMode: e.deviceMode
                    })))
                      , t = await (0,
                    p._5)(e)
                      , o = new Map
                      , n = t.filter(e => 1 === e.deviceMode).length > 0;
                    if (n && a)
                        try {
                            let {connectAllDevicesHID: e} = await Promise.resolve().then(r.bind(r, 7530))
                              , n = await e(!1, [{
                                vendorId: 6700,
                                productId: 36863,
                                productName: "2.4 Wireless Device",
                                usagePage: 65282,
                                usage: 2,
                                deviceMode: 1
                            }], [{
                                vendorId: 6700,
                                productId: 36863,
                                deviceMode: 1
                            }]);
                            if (console.log("\uD83D\uDCE1 [授权列表] 找到 ".concat(n.length, " 个2.4G接收器")),
                            0 === n.length)
                                return g.R.map(e => ({
                                    ...e,
                                    devices: e.devices.map(e => ({
                                        ...e,
                                        connect_status: 0 === e.deviceMode && t.some(t => t.vendorId === parseInt(e.vendorId, 16) && t.productId === parseInt(e.productId, 16) && 0 === t.deviceMode) ? 1 : 0,
                                        online_status: e.online_status || 0
                                    }))
                                }));
                            let i = n.map(async e => {
                                try {
                                    let t = e.device
                                      , r = "".concat(t.vendorId, "-").concat(t.productId);
                                    u.current.set(r, t);
                                    let o = await a({
                                        vendorId: t.vendorId,
                                        productId: t.productId,
                                        productName: t.productName,
                                        usagePage: 65282,
                                        usage: 2,
                                        deviceMode: 1
                                    }, 2);
                                    return t.onListeners = [],
                                    o
                                } catch (e) {
                                    return console.error("❌ [授权列表] 读取2.4G接收器失败:", e),
                                    null
                                }
                            }
                            );
                            (await Promise.all(i)).forEach( (e, t) => {
                                if (e && 0 !== e.actualVendorId && 0 !== e.actualProductId) {
                                    let r = "".concat(e.actualVendorId, "-").concat(e.actualProductId);
                                    o.set(r, {
                                        vendorId: e.actualVendorId,
                                        productId: e.actualProductId,
                                        isOnline: e.isOnline
                                    }),
                                    console.log("✅ [授权列表] 接收器".concat(t + 1, "识别成功: 产品=").concat(r, ", 在线=").concat(e.isOnline))
                                } else
                                    console.warn("⚠️ [授权列表] 接收器".concat(t + 1, "未连接产品或读取失败"))
                            }
                            ),
                            console.log("\uD83D\uDCCA [授权列表] 共识别出 ".concat(o.size, " 个2.4G产品"))
                        } catch (e) {
                            console.error("❌ [授权列表] 2.4G设备识别异常:", e)
                        }
                    let i = (e, r, o) => {
                        let n = t.some(e => e.vendorId === r && e.productId === o && 0 === e.deviceMode);
                        if (n && 6700 === r && 27777 === o || 28289 === o || 28545 === o || 25217 === o || 25473 === o || 25729 === o || 25985 === o || 26241 === o)
                            return console.log("✅ [授权列表] 特殊设备 VID=1A2C PID=6C81 已授权，直接设置为在线"),
                            {
                                isAuthorized: n,
                                onlineStatus: 1
                            };
                        let a = n && void 0 === e.online_status ? 1 : e.online_status || 0;
                        return {
                            isAuthorized: n,
                            onlineStatus: a
                        }
                    }
                      , c = (e, t) => {
                        if (!n)
                            return {
                                isAuthorized: !1,
                                onlineStatus: 0
                            };
                        let r = e.devices.find(e => 0 === e.deviceMode);
                        if (!r)
                            return console.log("⚠️ [授权列表] ".concat(e.productDesc, " 没有USB设备配置")),
                            {
                                isAuthorized: !1,
                                onlineStatus: 0
                            };
                        let a = parseInt(r.vendorId, 16)
                          , i = parseInt(r.productId, 16)
                          , c = "".concat(a, "-").concat(i)
                          , s = o.get(c);
                        return s ? (console.log("✅ [授权列表] ".concat(e.productDesc, " 的2.4G已匹配, 在线=").concat(s.isOnline ? 1 : 0, " (实际产品=").concat(c, ")")),
                        {
                            isAuthorized: !0,
                            onlineStatus: s.isOnline ? 1 : 0
                        }) : {
                            isAuthorized: !1,
                            onlineStatus: 0
                        }
                    }
                      , s = g.R.map(e => ({
                        ...e,
                        devices: e.devices.map(t => {
                            let r = parseInt(t.vendorId, 16)
                              , o = parseInt(t.productId, 16)
                              , {isAuthorized: n, onlineStatus: a} = 1 === t.deviceMode ? c(e, t) : i(t, r, o);
                            return {
                                ...t,
                                connect_status: n ? 1 : 0,
                                online_status: a
                            }
                        }
                        )
                    }));
                    return x(s),
                    s
                } catch (e) {
                    return console.error("[授权列表] 获取授权设备信息失败:", e),
                    []
                }
            }
            , [a])
              , w = (0,
            n.useCallback)(async function(e) {
                let t, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (e && e.length > 0) {
                    let o = "".concat(e[0].vendorId, "-").concat(e[0].productId)
                      , n = u.current.get(o);
                    n && !r ? t = n : (t = await (0,
                    p.zu)(e, r)) && !r && u.current.set(o, t)
                } else
                    t = await (0,
                    p.zu)(e, r);
                return t ? (c(t),
                t) : null
            }, [])
              , I = (0,
            n.useCallback)( () => {
                i && c(void 0)
            }
            , [i])
              , _ = (0,
            n.useCallback)(e => {
                u.current.has(e) && u.current.delete(e)
            }
            , [])
              , D = h();
            return (0,
            o.jsx)(f.Provider, {
                value: {
                    connectedDevice: i,
                    deviceInfo: D,
                    connectDevice: w,
                    disconnectDevice: I,
                    loadDeviceInfo: m,
                    getAuthorizedDeviceInfo: y,
                    getFilterDevices: b,
                    setDeviceInfo: x,
                    updateDeviceState: v,
                    authorizedDevicesCache: u,
                    clearDeviceCache: _
                },
                children: t
            })
        }
        let m = [170, 85, 204, 51]
          , b = {
            WIRELESS_24G: 1,
            USB: 3
        }
          , y = {
            OFFLINE: 1,
            ONLINE: 2
        }
          , w = {
            OFFLINE: 0,
            USB: 1,
            WIRELESS_24G: 2
        }
          , I = (0,
        n.createContext)(void 0)
          , _ = () => {
            let e = (0,
            n.useContext)(I);
            if (!e)
                throw Error("useProductState must be used within ProductStateProvider");
            return e
        }
        ;
        function D(e) {
            let {children: t, onProductTimeout: r} = e
              , [a,i] = (0,
            n.useState)(null)
              , c = (0,
            n.useRef)(new Map)
              , s = (0,
            n.useRef)(r);
            (0,
            n.useEffect)( () => {
                s.current = r
            }
            , [r]);
            let d = (0,
            n.useCallback)( (e, t) => {
                i(r => {
                    if (r && r.productType === e) {
                        let n = {
                            ...r,
                            ...t
                        };
                        if (void 0 !== t.connectionStatus) {
                            var o;
                            let n = 1 === t.connectionStatus ? "在线" : "离线"
                              , a = 0 === t.currentMode ? "USB" : 1 === t.currentMode ? "2.4G" : "离线";
                            console.log("\uD83D\uDCCA [产品状态] 产品".concat(e, " 状态更新: ").concat(n, ", 模式=").concat(a, ", 电量=").concat(null !== (o = t.batteryValue) && void 0 !== o ? o : r.batteryValue, "%"))
                        }
                        return n
                    }
                    return r
                }
                )
            }
            , [])
              , l = (0,
            n.useCallback)(e => {
                let t = c.current.get(e);
                t ? (console.log("⏰ [超时检测] 产品".concat(e, " 重置超时检测（清除旧定时器）")),
                clearTimeout(t),
                c.current.delete(e)) : console.log("⏰ [超时检测] 产品".concat(e, " 启动超时检测（首次启动）"));
                let r = setTimeout(async () => {
                    console.warn("⚠️ [超时检测] 产品".concat(e, " 超时触发！已").concat(8e3, "ms未收到设备上报")),
                    c.current.delete(e),
                    s.current ? (console.log("\uD83D\uDD0D [超时检测] 产品".concat(e, " 开始执行超时回调...")),
                    await s.current(e)) : console.error("❌ [超时检测] 产品".concat(e, " 超时回调未设置！"))
                }
                , 8e3);
                c.current.set(e, r),
                console.log("✅ [超时检测] 产品".concat(e, " 超时检测已启动，将在").concat(8e3, "ms后触发 (当前共有").concat(c.current.size, "个产品在检测)"))
            }
            , [])
              , u = (0,
            n.useCallback)( () => {
                console.log("\uD83D\uDED1 [超时检测] 清除所有产品超时检测定时器 (共".concat(c.current.size, "个)")),
                c.current.forEach( (e, t) => {
                    clearTimeout(e),
                    console.log("\uD83D\uDED1 [超时检测] 清除产品".concat(t, "的超时检测定时器"))
                }
                ),
                c.current.clear()
            }
            , []);
            return (0,
            n.useEffect)( () => () => u(), [u]),
            (0,
            o.jsx)(I.Provider, {
                value: {
                    currentProduct: a,
                    setCurrentProduct: i,
                    updateProductState: d,
                    startProductTimeoutCheck: l,
                    clearProductTimeout: u
                },
                children: t
            })
        }
        let k = (0,
        n.createContext)(void 0)
          , F = () => {
            let e = (0,
            n.useContext)(k);
            if (!e)
                throw Error("useDeviceMonitoring must be used within DeviceMonitoringProvider");
            return e
        }
        ;
        function j(e) {
            let {children: t, connectedDevice: r} = e
              , a = (0,
            n.useRef)(null)
              , i = (0,
            n.useRef)(null)
              , c = (0,
            n.useRef)(r);
            (0,
            n.useEffect)( () => {
                c.current = r
            }
            , [r]);
            let s = (0,
            n.useCallback)( (e, t) => {
                try {
                    if (!e || e.length < 14 || !m.every( (t, r) => e[r] === t))
                        return null;
                    let r = e[5] || 0
                      , o = Math.max(0, Math.min(r, 100))
                      , n = e[6]
                      , a = n === b.USB || n === b.WIRELESS_24G
                      , i = e[7]
                      , c = e[8] << 8 | e[9]
                      , s = e[10] << 8 | e[11]
                      , d = Array.isArray(e) ? e : Array.from(e)
                      , l = t.parseFirmwareVersionFromStatus(d);
                    return {
                        batteryValue: o >= 95 ? 100 : o,
                        chargeFlag: i,
                        isOnline: a,
                        onlineFlag: n,
                        actualVendorId: c,
                        actualProductId: s,
                        firmwareVersion: l,
                        rawData: e instanceof Uint8Array ? e : new Uint8Array(e)
                    }
                } catch (e) {
                    return null
                }
            }
            , [])
              , d = (0,
            n.useCallback)(async () => {
                let e = c.current;
                if (e)
                    try {
                        let t = Date.now();
                        if (i.current && t - i.current.lastUpdateTime < 5e3)
                            return;
                        let r = await e.getDeviceStatusAndBattery()
                          , o = s(r, e);
                        o && (i.current = {
                            batteryValue: o.batteryValue,
                            chargeFlag: o.chargeFlag,
                            isOnline: o.isOnline,
                            firmwareVersion: o.firmwareVersion,
                            lastUpdateTime: Date.now()
                        })
                    } catch (e) {}
            }
            , [s])
              , l = (0,
            n.useCallback)( () => {
                a.current && (clearInterval(a.current),
                a.current = null)
            }
            , [])
              , u = (0,
            n.useCallback)( () => {
                a.current && clearInterval(a.current),
                d(),
                a.current = setInterval(d, 3e4)
            }
            , [d])
              , p = (0,
            n.useCallback)( (e, t) => {
                e.onListeners.some(e => "statu" === e.name) || e.onListeners.push({
                    name: "statu",
                    fb: e => {
                        try {
                            let r = e instanceof Uint8Array ? Array.from(e) : Array.isArray(e) ? e : [];
                            t(r)
                        } catch (e) {}
                    }
                })
            }
            , []);
            return (0,
            n.useEffect)( () => () => l(), [l]),
            (0,
            o.jsx)(k.Provider, {
                value: {
                    parseDeviceStatus: s,
                    updateDeviceStatus: d,
                    startDeviceMonitoring: u,
                    stopDeviceMonitoring: l,
                    addDeviceListener: p
                },
                children: t
            })
        }
        class S {
            static startMonitoring() {
                if (!this._isMonitoring && (this._isMonitoring = !0,
                !this._hasInitialized && navigator.hid))
                    try {
                        navigator.hid.addEventListener("connect", this.onConnect),
                        navigator.hid.addEventListener("disconnect", this.onDisconnect),
                        this._hasInitialized = !0
                    } catch (e) {
                        this._isMonitoring = !1
                    }
            }
            static stopMonitoring() {
                this._isMonitoring = !1
            }
            static cleanup() {
                if (navigator.hid && this._hasInitialized)
                    try {
                        navigator.hid.removeEventListener("connect", this.onConnect),
                        navigator.hid.removeEventListener("disconnect", this.onDisconnect),
                        this._listeners.connect.clear(),
                        this._listeners.disconnect.clear(),
                        this._listeners.remove.clear(),
                        this._hasInitialized = !1,
                        this._isMonitoring = !1
                    } catch (e) {}
            }
            static dispatchEvent(e, t) {
                let r = Array.from(this._listeners[e]);
                0 !== r.length && r.forEach(e => {
                    try {
                        e(t)
                    } catch (e) {}
                }
                )
            }
            static on(e, t) {
                t && "function" == typeof t && this._listeners[e] && this._listeners[e].add(t)
            }
            static off(e, t) {
                t && this._listeners[e] && this._listeners[e].delete(t)
            }
            static isMonitoring() {
                return this._isMonitoring
            }
        }
        function C(e) {
            let {children: t, onDeviceConnect: r, onDeviceDisconnect: a} = e;
            return !function(e) {
                let {onDeviceConnect: t, onDeviceDisconnect: r} = e
                  , o = (0,
                n.useRef)(t)
                  , a = (0,
                n.useRef)(r);
                (0,
                n.useEffect)( () => {
                    o.current = t
                }
                , [t]),
                (0,
                n.useEffect)( () => {
                    a.current = r
                }
                , [r]);
                let i = (0,
                n.useCallback)(async e => {
                    g.R.some(t => t.devices.some(t => parseInt(t.vendorId, 16) === e.vendorId && parseInt(t.productId, 16) === e.productId)) && await o.current(e)
                }
                , [])
                  , c = (0,
                n.useCallback)(e => {
                    g.R.some(t => t.devices.some(t => parseInt(t.vendorId, 16) === e.vendorId && parseInt(t.productId, 16) === e.productId)) && a.current(e)
                }
                , []);
                (0,
                n.useEffect)( () => {
                    if (navigator.hid)
                        return S.startMonitoring(),
                        S.on("connect", i),
                        S.on("disconnect", c),
                        () => {
                            S.off("connect", i),
                            S.off("disconnect", c)
                        }
                }
                , [i, c])
            }({
                onDeviceConnect: r,
                onDeviceDisconnect: a
            }),
            (0,
            o.jsx)(o.Fragment, {
                children: t
            })
        }
        S._listeners = {
            connect: new Set,
            disconnect: new Set,
            remove: new Set
        },
        S._isMonitoring = !1,
        S._hasInitialized = !1,
        S.onConnect = e => {
            if (!S._isMonitoring)
                return;
            let {device: t} = e;
            S.dispatchEvent("connect", t)
        }
        ,
        S.onDisconnect = e => {
            if (!S._isMonitoring)
                return;
            let {device: t} = e;
            S.dispatchEvent("disconnect", t),
            S.dispatchEvent("remove", t)
        }
        ;
        let A = (0,
        n.createContext)({});
        function M(e) {
            let {children: t, deviceInfoRef: r, connectedDeviceRef: a, handleDeviceReportRef: i, updateDeviceInfoByModeRef: c, productStateRef: s, readDeviceInfoWithRetryRef: d} = e
              , [l] = (0,
            n.useState)("1.0.1")
              , {t: g} = u("common")
              , [f,x] = (0,
            n.useState)([])
              , [m,I] = (0,
            n.useState)(0)
              , D = (0,
            n.useRef)(0)
              , [k,j] = (0,
            n.useState)(void 0);
            (0,
            n.useEffect)( () => {
                D.current = m
            }
            , [m]);
            let S = v()
              , M = _()
              , U = F()
              , E = f.length > 0 ? k : S.connectedDevice;
            (0,
            n.useEffect)( () => {
                r.current = S.deviceInfo
            }
            , [S.deviceInfo, r]),
            (0,
            n.useEffect)( () => {
                a.current = E
            }
            , [E, a]),
            (0,
            n.useEffect)( () => {
                s.current = M
            }
            , [M, s]);
            let P = () => {
                try {
                    let e = localStorage.getItem("backgroundSettings");
                    if (e)
                        return {
                            ...JSON.parse(e),
                            theme: "dark"
                        }
                } catch (e) {}
                return {
                    backgroundUrl: "./main_bkg.mp4",
                    opacity: 1,
                    brightness: 1,
                    blurIntensity: 0,
                    theme: "dark",
                    customBaseColor: "#10A8FD",
                    useCustomBaseColor: !1,
                    backgroundOpacity: 20
                }
            }
              , [z,N] = (0,
            n.useState)(P)
              , L = (0,
            n.useCallback)(e => {
                let t = e ? {
                    ...e,
                    theme: "dark"
                } : null;
                if (N(t),
                t)
                    try {
                        localStorage.setItem("backgroundSettings", JSON.stringify(t)),
                        h(t.theme || "dark", t.customBaseColor, t.useCustomBaseColor)
                    } catch (e) {}
            }
            , []);
            (0,
            n.useEffect)( () => {
                let e = P();
                e ? (N(e),
                h("dark", e.customBaseColor || "#10A8FD", e.useCustomBaseColor || !1)) : h("dark", "#10A8FD", !1)
            }
            , []);
            let T = e => new Promise(t => setTimeout(t, e))
              , W = (0,
            n.useCallback)(async function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2
                  , r = 0;
                for (; r <= t; )
                    try {
                        let t = await S.connectDevice([e], !1);
                        if (!t)
                            throw Error("连接失败");
                        let r = await Promise.race([t.getDeviceStatusAndBattery(), new Promise( (e, t) => setTimeout( () => t(Error("读取超时")), 2e3))])
                          , o = U.parseDeviceStatus(r, t);
                        if (o)
                            return o;
                        throw Error("解析失败")
                    } catch (e) {
                        if (++r > t)
                            return console.error("[设备读取] 读取失败，已达最大重试次数"),
                            null;
                        await T(500)
                    }
                return null
            }, [S, U]);
            (0,
            n.useEffect)( () => {
                d.current = W
            }
            , [W, d]);
            let R = (0,
            n.useCallback)( (e, t, r, o) => {
                console.log("\uD83D\uDCCA [设备信息] 产品".concat(e, " 更新设备信息: 模式=").concat(0 === t ? "USB" : 1 === t ? "2.4G" : "离线", ", 电量=").concat(r, "%, 充电=").concat(o)),
                t === w.USB ? (S.updateDeviceState(e, 0, {
                    online_status: 1,
                    battery_value: r,
                    charge_flag: o
                }),
                S.updateDeviceState(e, 1, {
                    online_status: 0,
                    battery_value: 0,
                    charge_flag: 0
                }),
                console.log("✅ [设备信息] 产品".concat(e, " USB在线, 2.4G离线"))) : t === w.WIRELESS_24G ? (S.updateDeviceState(e, 1, {
                    online_status: 1,
                    battery_value: r,
                    charge_flag: o
                }),
                S.updateDeviceState(e, 0, {
                    online_status: 0,
                    battery_value: 0,
                    charge_flag: 0
                }),
                console.log("✅ [设备信息] 产品".concat(e, " 2.4G在线, USB离线"))) : t === w.OFFLINE && (S.updateDeviceState(e, 0, {
                    online_status: 0,
                    battery_value: 0,
                    charge_flag: 0
                }),
                S.updateDeviceState(e, 1, {
                    online_status: 0,
                    battery_value: 0,
                    charge_flag: 0
                }),
                console.log("❌ [设备信息] 产品".concat(e, " 所有设备离线")))
            }
            , [S])
              , V = (0,
            n.useCallback)( (e, t) => {
                let o = f.find(o => {
                    let n = r.current.find(e => e.devices.some(e => parseInt(e.vendorId, 16) === o.vendorId && parseInt(e.productId, 16) === o.productId));
                    return (null == n ? void 0 : n.productType) === e && o.deviceMode === t
                }
                );
                return !!o && (j(o.device),
                I(t),
                !0)
            }
            , [f])
              , B = (0,
            n.useCallback)(e => {
                if (170 === e[0] && 14 === e[4]) {
                    let t = e[6] || 0
                      , o = Math.max(0, Math.min(e[5] || 0, 100))
                      , n = o >= 95 ? 100 : o
                      , i = e[7] || 0
                      , c = 0
                      , d = 0;
                    e.length >= 12 && (c = e[8] << 8 | e[9],
                    d = e[10] << 8 | e[11]);
                    let l = a.current;
                    if (!l) {
                        console.warn("⚠️ [设备上报] 当前连接设备为空，忽略上报数据");
                        return
                    }
                    let u = c || l.vendorId
                      , p = d || l.productId
                      , h = r.current.find(e => e.devices.some(e => parseInt(e.vendorId, 16) === u && parseInt(e.productId, 16) === p));
                    if (h) {
                        let e = t === b.USB ? w.USB : t === b.WIRELESS_24G ? w.WIRELESS_24G : w.OFFLINE
                          , r = e === w.OFFLINE ? y.OFFLINE : y.ONLINE
                          , o = 0 === e ? "USB" : 1 === e ? "2.4G" : "离线";
                        console.log("\uD83D\uDCE8 [设备上报] 产品".concat(h.productDesc, " 收到上报: 模式=").concat(o, ", 电量=").concat(n, "%, 充电=").concat(i, ", 状态=").concat(1 === r ? "在线" : "离线"));
                        let a = s.current[h.productType]
                          , c = !a || a.currentMode !== e;
                        if (c && console.log("\uD83D\uDD04 [设备上报] 产品".concat(h.productDesc, " 模式改变: ").concat((null == a ? void 0 : a.currentMode) === 0 ? "USB" : (null == a ? void 0 : a.currentMode) === 1 ? "2.4G" : "离线", " → ").concat(o)),
                        M.updateProductState(h.productType, {
                            connectionStatus: r,
                            currentMode: e,
                            batteryValue: n,
                            chargeFlag: i,
                            lastReportTime: Date.now()
                        }),
                        e !== w.OFFLINE ? M.startProductTimeoutCheck(h.productType) : console.log("⚠️ [设备上报] 产品".concat(h.productDesc, " 上报模式为离线，不重置超时检测")),
                        R(h.productType, e, n, i),
                        c && e !== w.OFFLINE && f.length > 0) {
                            let t = e === w.USB ? 0 : 1;
                            V(h.productType, t)
                        }
                    } else
                        console.warn("⚠️ [设备上报] 未找到匹配的产品 (VID=0x".concat(u.toString(16), ", PID=0x").concat(p.toString(16), ")"))
                } else {
                    var t, o;
                    console.warn("⚠️ [设备上报] 无效的上报数据格式 (header=0x".concat(null === (t = e[0]) || void 0 === t ? void 0 : t.toString(16), ", cmd=0x").concat(null === (o = e[4]) || void 0 === o ? void 0 : o.toString(16), ")"))
                }
            }
            , [M, R, V]);
            (0,
            n.useEffect)( () => {
                i.current = B
            }
            , [B, i]),
            (0,
            n.useEffect)( () => {
                c.current = R
            }
            , [R, c]);
            let K = (0,
            n.useCallback)(async function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                try {
                    if (!e || 0 === e.length)
                        return console.error("❌ [多设备模式] 缺少设备过滤器"),
                        !1;
                    let r = e.map(e => {
                        var t;
                        return {
                            vendorId: e.vendorId,
                            productId: e.productId,
                            deviceMode: null !== (t = e.deviceMode) && void 0 !== t ? t : 0
                        }
                    }
                    )
                      , o = await (0,
                    p.connectAllDevicesHID)(t, e, r);
                    if (0 === o.length)
                        return console.error("❌ [多设备模式] 没有找到设备"),
                        !1;
                    x(o);
                    let n = o.find(e => 0 === e.deviceMode) || o[0];
                    I(n.deviceMode),
                    j(n.device);
                    let a = S.deviceInfo.find(e => e.devices.some(e => parseInt(e.vendorId, 16) === n.vendorId && parseInt(e.productId, 16) === n.productId));
                    if (a && (M.setCurrentProduct({
                        productType: a.productType,
                        productDesc: a.productDesc,
                        productPic: a.productPic,
                        productUrl: a.productUrl,
                        connectionStatus: y.ONLINE,
                        currentMode: w.OFFLINE,
                        batteryValue: 0,
                        chargeFlag: 0,
                        lastReportTime: Date.now(),
                        devices: a.devices.map(e => ({
                            ...e,
                            protocol: String(e.protocol)
                        }))
                    }),
                    M.startProductTimeoutCheck(a.productType)),
                    o.forEach(e => {
                        e.device.onListeners.push({
                            name: "statu",
                            fb: e => {
                                170 === e[0] && 14 === e[4] && B(e)
                            }
                        })
                    }
                    ),
                    6700 === n.vendorId && 27777 === n.productId || 28289 === n.productId || 28545 === n.productId || 25217 === n.productId || 25473 === n.productId || 25729 === n.productId || 25985 === n.productId || 26241 === n.productId)
                        console.log("✅ [多设备模式] 特殊设备 VID=1A2C PID=6C81，跳过上报检测，直接标记为在线"),
                        a && (M.updateProductState(a.productType, {
                            connectionStatus: y.ONLINE,
                            currentMode: 0 === n.deviceMode ? w.USB : w.WIRELESS_24G,
                            batteryValue: 100,
                            chargeFlag: 0,
                            lastReportTime: Date.now()
                        }),
                        R(a.productType, 0 === n.deviceMode ? w.USB : w.WIRELESS_24G, 100, 0));
                    else
                        try {
                            let e = await n.device.getDeviceStatusAndBattery();
                            if (e && e.length > 0) {
                                let t = e instanceof Uint8Array ? e : new Uint8Array(e)
                                  , r = Array.from(t);
                                170 === r[0] && 14 === r[4] ? B(r) : a && (M.updateProductState(a.productType, {
                                    connectionStatus: y.OFFLINE,
                                    currentMode: w.OFFLINE,
                                    batteryValue: 0,
                                    chargeFlag: 0
                                }),
                                R(a.productType, w.OFFLINE, 0, 0))
                            } else
                                a && (M.updateProductState(a.productType, {
                                    connectionStatus: y.OFFLINE,
                                    currentMode: w.OFFLINE,
                                    batteryValue: 0,
                                    chargeFlag: 0
                                }),
                                R(a.productType, w.OFFLINE, 0, 0))
                        } catch (e) {
                            a && (M.updateProductState(a.productType, {
                                connectionStatus: y.OFFLINE,
                                currentMode: w.OFFLINE,
                                batteryValue: 0,
                                chargeFlag: 0
                            }),
                            R(a.productType, w.OFFLINE, 0, 0))
                        }
                    return U.startDeviceMonitoring(),
                    !0
                } catch (e) {
                    return console.error("❌ [多设备模式] 连接失败:", e),
                    !1
                }
            }, [S, U, M, B, f])
              , O = (0,
            n.useCallback)( () => {
                f.forEach(e => {
                    e.device.onListeners = []
                }
                ),
                M.clearProductTimeout(),
                M.setCurrentProduct(null),
                U.stopDeviceMonitoring(),
                S.disconnectDevice(),
                x([]),
                j(void 0),
                I(0)
            }
            , [S, U, M, f])
              , H = (0,
            n.useCallback)(async e => {
                await S.getAuthorizedDeviceInfo(),
                setTimeout(async () => {
                    f.length > 0 && O();
                    let e = S.getFilterDevices();
                    e.length > 0 && await K(e, !1)
                }
                , 500)
            }
            , [S, K, O, f])
              , G = (0,
            n.useCallback)(async e => {
                let t = "".concat(e.vendorId, "-").concat(e.productId);
                S.clearDeviceCache(t),
                await S.getAuthorizedDeviceInfo(),
                setTimeout(async () => {
                    f.length > 0 && O();
                    let e = S.getFilterDevices();
                    e.length > 0 && await K(e, !1)
                }
                , 500)
            }
            , [S, K, O, f])
              , Q = {
                softwareVersion: l,
                connectedDevice: E,
                allDevices: f,
                currentDeviceMode: m,
                connectDevice: K,
                disconnectDevice: O,
                switchDeviceMode: V,
                deviceInfo: S.deviceInfo,
                currentProduct: M.currentProduct,
                getFilterDevices: S.getFilterDevices,
                loadDeviceInfo: S.loadDeviceInfo,
                getAuthorizedDeviceInfo: S.getAuthorizedDeviceInfo,
                updateDeviceStatus: U.updateDeviceStatus,
                startDeviceMonitoring: U.startDeviceMonitoring,
                stopDeviceMonitoring: U.stopDeviceMonitoring,
                backgroundSettings: z,
                setBackgroundSettings: L,
                t: g
            };
            return (0,
            o.jsx)(A.Provider, {
                value: Q,
                children: (0,
                o.jsx)(C, {
                    onDeviceConnect: H,
                    onDeviceDisconnect: G,
                    children: t
                })
            })
        }
        var U = function(e) {
            let {children: t} = e
              , r = (0,
            n.useRef)([])
              , a = (0,
            n.useRef)(void 0)
              , i = (0,
            n.useRef)(null)
              , c = (0,
            n.useRef)(null)
              , s = (0,
            n.useRef)(null)
              , d = (0,
            n.useRef)(null)
              , l = (0,
            n.useCallback)(async function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                return d.current ? d.current(e, t) : null
            }, [])
              , u = (0,
            n.useCallback)(async e => {
                console.log("\uD83D\uDD0D [超时回调] 产品".concat(e, " 开始处理超时回调..."));
                let t = r.current.find(t => t.productType === e);
                if (!t) {
                    console.error("❌ [超时回调] 产品".concat(e, " 未找到，无法处理超时"));
                    return
                }
                console.log("\uD83D\uDCE6 [超时回调] 找到产品: ".concat(t.productDesc));
                let o = t.devices.find(e => 1 === e.online_status)
                  , n = a.current;
                if (console.log("\uD83D\uDD0C [超时回调] 在线设备:", o ? "模式=".concat(0 === o.deviceMode ? "USB" : "2.4G") : "无"),
                console.log("\uD83D\uDD0C [超时回调] 当前连接设备:", n ? "".concat(n.productName, " (VID=").concat(n.vendorId.toString(16), ", PID=").concat(n.productId.toString(16), ")") : "无"),
                !o || !n) {
                    console.warn("⚠️ [超时回调] 产品".concat(e, " 没有在线设备或当前连接设备，直接标记为离线")),
                    s.current && s.current.updateProductState(e, {
                        connectionStatus: y.OFFLINE,
                        currentMode: w.OFFLINE
                    }),
                    c.current && c.current(e, w.OFFLINE, 0, 0);
                    return
                }
                console.log("\uD83D\uDD0D [超时回调] 产品".concat(e, " 开始主动查询设备状态..."));
                try {
                    let t = await n.getDeviceStatusAndBattery();
                    if (console.log("\uD83D\uDCE5 [超时回调] 产品".concat(e, " 查询返回数据长度: ").concat((null == t ? void 0 : t.length) || 0)),
                    t && t.length > 0) {
                        var d, l, u;
                        let r = t instanceof Uint8Array ? t : new Uint8Array(t)
                          , o = Array.from(r);
                        if (console.log("\uD83D\uDCE5 [超时回调] 产品".concat(e, " 查询返回数据:"), "[0]=0x".concat(null === (d = o[0]) || void 0 === d ? void 0 : d.toString(16).padStart(2, "0"), ", ") + "[4]=0x".concat(null === (l = o[4]) || void 0 === l ? void 0 : l.toString(16).padStart(2, "0"), ", ") + "[6]=0x".concat(null === (u = o[6]) || void 0 === u ? void 0 : u.toString(16).padStart(2, "0"), " (模式标志)")),
                        170 === o[0] && 14 === o[4]) {
                            let t = o[6] || 0;
                            console.log("✅ [超时回调] 产品".concat(e, " 查询成功，设备").concat(1 === t || 3 === t ? "在线" : "离线", " (模式标志=0x").concat(t.toString(16).padStart(2, "0"), ")")),
                            i.current ? (console.log("\uD83D\uDCE4 [超时回调] 产品".concat(e, " 将查询结果传递给handleDeviceReport处理")),
                            i.current(o)) : console.error("❌ [超时回调] 产品".concat(e, " handleDeviceReport未设置！"))
                        } else
                            throw console.warn("⚠️ [超时回调] 产品".concat(e, " 查询返回无效数据，设备不在线")),
                            Error("查询返回无效数据")
                    } else
                        throw console.warn("⚠️ [超时回调] 产品".concat(e, " 查询结果为空")),
                        Error("查询结果为空")
                } catch (t) {
                    console.error("❌ [超时回调] 产品".concat(e, " 主动查询失败，标记为离线:"), t),
                    s.current && (console.log("\uD83D\uDCCA [超时回调] 产品".concat(e, " 更新产品状态为离线")),
                    s.current.updateProductState(e, {
                        connectionStatus: y.OFFLINE,
                        currentMode: w.OFFLINE
                    })),
                    c.current && (console.log("\uD83D\uDCCA [超时回调] 产品".concat(e, " 更新设备信息为离线")),
                    c.current(e, w.OFFLINE, 0, 0))
                }
            }
            , []);
            return (0,
            o.jsx)(x, {
                readDeviceInfoWithRetry: l,
                children: (0,
                o.jsx)(D, {
                    onProductTimeout: u,
                    children: (0,
                    o.jsx)(j, {
                        children: (0,
                        o.jsx)(M, {
                            deviceInfoRef: r,
                            connectedDeviceRef: a,
                            handleDeviceReportRef: i,
                            updateDeviceInfoByModeRef: c,
                            productStateRef: s,
                            readDeviceInfoWithRetryRef: d,
                            children: t
                        })
                    })
                })
            })
        }
          , E = r(8308)
          , P = r(4741);
        let z = () => {
            let e = (0,
            P.p)();
            return function(t, r) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "info"
                  , a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3e3
                  , i = {
                    success: {
                        bg: "rgba(16, 168, 253, 0.95)",
                        iconColor: "#10A8FD",
                        borderColor: "#10A8FD"
                    },
                    error: {
                        bg: "rgba(239, 68, 68, 0.95)",
                        iconColor: "#EF4444",
                        borderColor: "#EF4444"
                    },
                    warning: {
                        bg: "rgba(245, 158, 11, 0.95)",
                        iconColor: "#F59E0B",
                        borderColor: "#F59E0B"
                    },
                    info: {
                        bg: "rgba(16, 168, 253, 0.95)",
                        iconColor: "#10A8FD",
                        borderColor: "#10A8FD"
                    }
                }[n];
                e({
                    title: t,
                    description: r,
                    status: n,
                    duration: a,
                    isClosable: !0,
                    position: "top",
                    containerStyle: {
                        marginTop: "60px"
                    },
                    variant: "subtle",
                    render: () => (0,
                    o.jsxs)("div", {
                        style: {
                            background: i.bg,
                            backdropFilter: "blur(20px)",
                            border: "1px solid ".concat(i.borderColor),
                            borderRadius: "12px",
                            padding: "16px 20px",
                            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
                            color: "white",
                            minWidth: "300px",
                            maxWidth: "500px"
                        },
                        children: [(0,
                        o.jsx)("div", {
                            style: {
                                fontWeight: "bold",
                                fontSize: "16px",
                                marginBottom: r ? "8px" : "0"
                            },
                            children: t
                        }), r && (0,
                        o.jsx)("div", {
                            style: {
                                fontSize: "14px",
                                opacity: .9
                            },
                            children: r
                        })]
                    })
                })
            }
        }
        ;
        var N = r(2236)
          , L = r(5059)
          , T = r(4569)
          , W = r(1671)
          , R = r(9528)
          , V = r(4215)
          , B = r(9623)
          , K = r(4428)
          , O = r(6432)
          , H = r(6055)
          , G = r(1399);
        function Q() {
            var e, t, r, a, i;
            let {backgroundSettings: c, setBackgroundSettings: s, t: d} = (0,
            n.useContext)(A)
              , {i18n: l, changeLanguage: p} = u("common")
              , h = z()
              , [g,f] = (0,
            n.useState)(!1)
              , [v,x] = (0,
            n.useState)(!1)
              , m = (0,
            n.useRef)(null)
              , b = e => {
                p(e)
            }
            ;
            return (0,
            o.jsxs)(o.Fragment, {
                children: [(0,
                o.jsx)(N.I, {
                    ref: m,
                    type: "file",
                    accept: "image/*",
                    onChange: e => {
                        var t;
                        let r = null === (t = e.target.files) || void 0 === t ? void 0 : t[0];
                        if (r) {
                            if (!r.type.startsWith("image/")) {
                                h(d("30") || "文件类型错误", d("31") || "请选择图片文件", "error"),
                                m.current && (m.current.value = "");
                                return
                            }
                            if (r.size > 5242880) {
                                h(d("32") || "文件过大", d("33") || "文件大小不能超过 5MB", "error"),
                                m.current && (m.current.value = "");
                                return
                            }
                            let e = new FileReader;
                            e.onload = e => {
                                var t;
                                let r = null === (t = e.target) || void 0 === t ? void 0 : t.result;
                                s({
                                    ...c,
                                    backgroundUrl: r,
                                    opacity: (null == c ? void 0 : c.opacity) || 1,
                                    brightness: (null == c ? void 0 : c.brightness) || 1,
                                    blurIntensity: (null == c ? void 0 : c.blurIntensity) || 0
                                }),
                                f(!1),
                                h(d("38"), d("39"), "success"),
                                m.current && (m.current.value = "")
                            }
                            ,
                            e.readAsDataURL(r)
                        }
                    }
                    ,
                    style: {
                        display: "none"
                    }
                }), (0,
                o.jsx)(E.xu, {
                    position: "relative",
                    zIndex: 100,
                    children: (0,
                    o.jsxs)(E.xu, {
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
                        children: [(0,
                        o.jsxs)(E.xu, {
                            position: "relative",
                            zIndex: 2,
                            display: "flex",
                            alignItems: "center",
                            gap: 3,
                            children: [(0,
                            o.jsx)(E.xu, {
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
                                transition: "all 0.3s",
                                _hover: {
                                    transform: "scale(1.05)"
                                },
                                children: (0,
                                o.jsx)(L.E, {
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
                            }), (0,
                            o.jsx)(T.x, {
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
                                children: d("1") || "AJAZZ Software"
                            }), (0,
                            o.jsx)(E.xu, {
                                position: "absolute",
                                bottom: "-4px",
                                left: "0",
                                width: "100%",
                                height: "2px",
                                overflow: "hidden",
                                children: (0,
                                o.jsx)(E.xu, {
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
                        }), (0,
                        o.jsxs)(W.U, {
                            spacing: {
                                base: 1,
                                md: 2
                            },
                            zIndex: 9999,
                            children: [(0,
                            o.jsxs)(R.v, {
                                isOpen: g,
                                onClose: () => f(!1),
                                children: [(0,
                                o.jsxs)(V.j, {
                                    as: B.z,
                                    size: {
                                        base: "xs",
                                        md: "sm"
                                    },
                                    onClick: () => f(!g),
                                    leftIcon: (0,
                                    o.jsx)(G.H3h, {}),
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
                                    children: [(0,
                                    o.jsx)(E.xu, {
                                        display: {
                                            base: "none",
                                            sm: "inline"
                                        },
                                        children: d("34")
                                    }), (0,
                                    o.jsx)(E.xu, {
                                        display: {
                                            base: "inline",
                                            sm: "none"
                                        },
                                        children: d("35")
                                    })]
                                }), (0,
                                o.jsxs)(K.q, {
                                    bg: "rgba(36, 38, 43, 0.95)",
                                    backdropFilter: "blur(20px)",
                                    border: "1px solid rgba(16, 168, 253, 0.3)",
                                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
                                    borderRadius: "12px",
                                    minW: "150px",
                                    zIndex: 1e4,
                                    children: [(0,
                                    o.jsxs)(O.s, {
                                        onClick: () => {
                                            var e;
                                            null === (e = m.current) || void 0 === e || e.click()
                                        }
                                        ,
                                        fontSize: "sm",
                                        p: 3,
                                        borderRadius: "8px",
                                        color: "white",
                                        _hover: {
                                            bg: "rgba(16, 168, 253, 0.2)",
                                            color: "#10A8FD"
                                        },
                                        children: ["\uD83D\uDDBC️ ", d("36")]
                                    }), (0,
                                    o.jsxs)(O.s, {
                                        onClick: () => {
                                            s({
                                                backgroundUrl: "./main_bkg.mp4",
                                                opacity: 1,
                                                brightness: 1,
                                                blurIntensity: 0
                                            }),
                                            x(!1),
                                            f(!1)
                                        }
                                        ,
                                        fontSize: "sm",
                                        p: 3,
                                        borderRadius: "8px",
                                        color: "white",
                                        _hover: {
                                            bg: "rgba(16, 168, 253, 0.2)",
                                            color: "#10A8FD"
                                        },
                                        children: ["\uD83D\uDD04 ", d("37")]
                                    })]
                                })]
                            }), (0,
                            o.jsx)(E.xu, {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                position: "relative",
                                children: (0,
                                o.jsxs)(R.v, {
                                    children: [(0,
                                    o.jsx)(V.j, {
                                        as: B.z,
                                        rightIcon: (0,
                                        o.jsx)(H.v, {}),
                                        variant: "ghost",
                                        color: "white",
                                        _hover: {
                                            bg: "rgba(255, 255, 255, 0.2)"
                                        },
                                        _active: {
                                            bg: "rgba(255, 255, 255, 0.25)"
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
                                        children: "cn" === l.language || (null === (e = l.language) || void 0 === e ? void 0 : e.includes("zh")) ? "中文" : "English"
                                    }), (0,
                                    o.jsxs)(K.q, {
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
                                        children: [(0,
                                        o.jsxs)(O.s, {
                                            onClick: () => b("cn"),
                                            fontSize: "sm",
                                            p: 3,
                                            borderRadius: "8px",
                                            color: "white",
                                            bg: "cn" === l.language || (null === (t = l.language) || void 0 === t ? void 0 : t.includes("zh")) ? "rgba(16, 168, 253, 0.2)" : "transparent",
                                            _hover: {
                                                bg: "rgba(16, 168, 253, 0.2)",
                                                color: "#10A8FD"
                                            },
                                            _focus: {
                                                bg: "rgba(16, 168, 253, 0.2)",
                                                color: "#10A8FD"
                                            },
                                            children: ["中文", ("cn" === l.language || (null === (r = l.language) || void 0 === r ? void 0 : r.includes("zh"))) && " ✓"]
                                        }), (0,
                                        o.jsxs)(O.s, {
                                            onClick: () => b("en"),
                                            fontSize: "sm",
                                            p: 3,
                                            borderRadius: "8px",
                                            color: "white",
                                            bg: "en" !== l.language && ((null === (a = l.language) || void 0 === a ? void 0 : a.includes("zh")) || "cn" === l.language) ? "transparent" : "rgba(16, 168, 253, 0.2)",
                                            _hover: {
                                                bg: "rgba(16, 168, 253, 0.2)",
                                                color: "#10A8FD"
                                            },
                                            _focus: {
                                                bg: "rgba(16, 168, 253, 0.2)",
                                                color: "#10A8FD"
                                            },
                                            children: ["English", ("en" === l.language || !(null === (i = l.language) || void 0 === i ? void 0 : i.includes("zh")) && "cn" !== l.language) && " ✓"]
                                        })]
                                    })]
                                })
                            })]
                        })]
                    })
                })]
            })
        }
        var X = r(4285);
        function J(e) {
            let {device: t, onClick: r} = e
              , {t: a} = (0,
            n.useContext)(A)
              , i = "#10A8FD"
              , c = 6700 === t.vendorId && 27777 === t.productId || 28289 === t.productId || 28545 === t.productId || 25217 === t.productId || 25473 === t.productId || 25729 === t.productId || 25985 === t.productId || 26241 === t.productId;
            return (0,
            o.jsxs)(E.xu, {
                onClick: () => r(t),
                cursor: 1 === t.online_status ? "pointer" : "not-allowed",
                w: {
                    base: "360px",
                    sm: "440px",
                    md: "500px"
                },
                h: {
                    base: "360px",
                    sm: "440px",
                    md: "500px"
                },
                bg: 1 === t.online_status ? "rgba(20, 25, 30, 0.5)" : "rgba(20, 25, 30, 0.3)",
                backdropFilter: "blur(40px)",
                borderRadius: "24px",
                border: 1 === t.online_status ? "2px solid rgba(16, 168, 253, 0.3)" : "2px solid rgba(158, 158, 158, 0.3)",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5)",
                overflow: "hidden",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                opacity: 1 === t.online_status ? 1 : .7,
                _hover: {
                    transform: 1 === t.online_status ? "translateY(-12px) scale(1.03)" : "translateY(-4px) scale(1.01)",
                    borderColor: 1 === t.online_status ? i : "rgba(158, 158, 158, 0.5)",
                    boxShadow: 1 === t.online_status ? "0 20px 60px ".concat(i, "60, 0 0 0 1px ").concat(i, "40") : "0 15px 40px rgba(158, 158, 158, 0.3)"
                },
                _before: {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: "linear-gradient(90deg, transparent, ".concat(i, ", transparent)"),
                    opacity: 0,
                    transition: "opacity 0.4s"
                },
                sx: {
                    "&:hover::before": {
                        opacity: 1
                    }
                },
                children: [(0,
                o.jsxs)(E.xu, {
                    p: {
                        base: 4,
                        md: 5
                    },
                    textAlign: "center",
                    position: "relative",
                    children: [(0,
                    o.jsx)(T.x, {
                        fontSize: {
                            base: "22px",
                            md: "26px",
                            lg: "28px"
                        },
                        fontWeight: "bold",
                        color: "white",
                        letterSpacing: "wider",
                        noOfLines: 1,
                        children: t.productDesc
                    }), (0,
                    o.jsx)(E.xu, {
                        position: "absolute",
                        top: {
                            base: "8px",
                            md: "10px"
                        },
                        left: {
                            base: "8px",
                            md: "10px"
                        },
                        px: 2,
                        py: 1,
                        borderRadius: "full",
                        bg: 0 === t.deviceMode ? "rgba(16, 168, 253, 0.9)" : "rgba(255, 152, 0, 0.9)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        children: (0,
                        o.jsx)(T.x, {
                            fontSize: {
                                base: "11px",
                                md: "12px"
                            },
                            fontWeight: "medium",
                            color: "white",
                            children: 0 === t.deviceMode ? "USB" : "2.4G"
                        })
                    }), (0,
                    o.jsxs)(E.xu, {
                        position: "absolute",
                        top: {
                            base: "8px",
                            md: "10px"
                        },
                        right: {
                            base: "8px",
                            md: "10px"
                        },
                        px: 2,
                        py: 1,
                        borderRadius: "full",
                        bg: 1 === t.online_status ? "rgba(76, 175, 80, 0.9)" : "rgba(158, 158, 158, 0.9)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        children: [(0,
                        o.jsx)(E.xu, {
                            w: "8px",
                            h: "8px",
                            borderRadius: "full",
                            bg: 1 === t.online_status ? "#4CAF50" : "#9E9E9E",
                            boxShadow: 1 === t.online_status ? "0 0 8px rgba(76, 175, 80, 0.8)" : "none",
                            sx: {
                                "@keyframes pulse": {
                                    "0%, 100%": {
                                        opacity: 1
                                    },
                                    "50%": {
                                        opacity: .5
                                    }
                                },
                                animation: 1 === t.online_status ? "pulse 2s ease-in-out infinite" : "none"
                            }
                        }), (0,
                        o.jsx)(T.x, {
                            fontSize: {
                                base: "11px",
                                md: "12px"
                            },
                            fontWeight: "medium",
                            color: "white",
                            children: 1 === t.online_status ? a("48") || "在线" : a("49") || "离线"
                        })]
                    })]
                }), (0,
                o.jsx)(E.xu, {
                    flex: "1",
                    bg: "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    p: {
                        base: 6,
                        md: 8
                    },
                    position: "relative",
                    overflow: "hidden",
                    children: (0,
                    o.jsx)(L.E, {
                        src: t.productPic,
                        alt: t.productDesc,
                        maxH: "100%",
                        maxW: "100%",
                        objectFit: "contain",
                        filter: "drop-shadow(0 12px 24px rgba(0, 0, 0, 0.5))",
                        transition: "transform 0.4s",
                        _groupHover: {
                            transform: "scale(1.08)"
                        }
                    })
                }), (0,
                o.jsxs)(E.xu, {
                    p: {
                        base: 4,
                        md: 5
                    },
                    children: [1 === t.online_status ? (0,
                    o.jsx)(T.x, {
                        fontSize: {
                            base: "12px",
                            md: "13px"
                        },
                        color: i,
                        textAlign: "center",
                        mb: 3,
                        fontWeight: "medium",
                        opacity: .9,
                        children: a("62") || "点击进入配置"
                    }) : (0,
                    o.jsx)(T.x, {
                        fontSize: {
                            base: "12px",
                            md: "13px"
                        },
                        color: "rgba(255, 255, 255, 0.6)",
                        textAlign: "center",
                        mb: 3,
                        fontWeight: "medium",
                        children: a("61") || "请先激活设备"
                    }), (0,
                    o.jsxs)(X.k, {
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 3,
                        children: [c && (0,
                        o.jsxs)(E.xu, {
                            children: [(0,
                            o.jsxs)(E.xu, {
                                position: "relative",
                                w: "32px",
                                h: "32px",
                                flexShrink: 0,
                                children: [(0,
                                o.jsx)("svg", {
                                    viewBox: "0 0 1316 1024",
                                    width: "32",
                                    height: "32",
                                    style: {
                                        display: "block"
                                    },
                                    children: (0,
                                    o.jsx)("path", {
                                        d: "M1243.428571 329.142857c40.557714 0 73.142857 32.585143 73.142858 73.142857v219.428572c0 40.557714-32.585143 73.142857-73.142858 73.142857v91.428571c0 50.285714-41.142857 91.428571-91.428571 91.428572h-1060.571429A91.684571 91.684571 0 0 1 0 786.285714v-548.571428C0 187.428571 41.142857 146.285714 91.428571 146.285714h1060.571429C1202.285714 146.285714 1243.428571 187.428571 1243.428571 237.714286V329.142857z m0 292.571429v-219.428572h-73.142857V237.714286c0-10.276571-8.009143-18.285714-18.285714-18.285715h-1060.571429c-10.276571 0-18.285714 8.009143-18.285714 18.285715v548.571428c0 10.276571 8.009143 18.285714 18.285714 18.285715h1060.571429c10.276571 0 18.285714-8.009143 18.285714-18.285715V621.714286h73.142857z",
                                        fill: i
                                    })
                                }), (0,
                                o.jsx)(X.k, {
                                    position: "absolute",
                                    left: "3px",
                                    top: "10px",
                                    gap: "1px",
                                    children: Array.from({
                                        length: 4
                                    }).map( (e, r) => {
                                        let n = t.battery_value || 0;
                                        return (0,
                                        o.jsx)(E.xu, {
                                            w: Math.floor((n >= 95 ? 100 : n) / 100 * 4) > r ? "5px" : "0",
                                            h: "12px",
                                            bg: i,
                                            transition: "width 0.3s ease"
                                        }, r)
                                    }
                                    )
                                }), 1 === t.charge_flag && (0,
                                o.jsx)(E.xu, {
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    sx: {
                                        "@keyframes iconFlash": {
                                            "0%": {
                                                opacity: .4,
                                                transform: "translate(-50%, -50%) scale(0.8)"
                                            },
                                            "50%": {
                                                opacity: 1,
                                                transform: "translate(-50%, -50%) scale(1.2)"
                                            },
                                            "100%": {
                                                opacity: .4,
                                                transform: "translate(-50%, -50%) scale(0.8)"
                                            }
                                        },
                                        animation: "iconFlash 0.6s infinite ease-in-out"
                                    },
                                    children: (0,
                                    o.jsx)("svg", {
                                        width: "20",
                                        height: "20",
                                        viewBox: "0 0 24 24",
                                        fill: "#FFCC00",
                                        children: (0,
                                        o.jsx)("path", {
                                            d: "M13 4L7 13H12L11 20L17 11H12L13 4Z",
                                            stroke: i,
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })
                                    })
                                })]
                            }), (0,
                            o.jsx)(E.xu, {
                                w: "1px",
                                h: "16px",
                                bg: "rgba(255, 255, 255, 0.3)"
                            })]
                        }), (0,
                        o.jsxs)(X.k, {
                            alignItems: "center",
                            gap: 1.5,
                            children: [(0,
                            o.jsxs)(E.xu, {
                                w: "20px",
                                h: "20px",
                                flexShrink: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                children: [0 === t.deviceMode && (0,
                                o.jsxs)("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    style: {
                                        display: "block"
                                    },
                                    children: [(0,
                                    o.jsx)("path", {
                                        d: "M12 2v12m0 0l-5-5m5 5l5-5",
                                        stroke: "rgba(255, 255, 255, 0.7)",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }), (0,
                                    o.jsx)("circle", {
                                        cx: "7",
                                        cy: "20",
                                        r: "2",
                                        fill: "rgba(255, 255, 255, 0.7)"
                                    }), (0,
                                    o.jsx)("circle", {
                                        cx: "17",
                                        cy: "20",
                                        r: "2",
                                        fill: "rgba(255, 255, 255, 0.7)"
                                    }), (0,
                                    o.jsx)("rect", {
                                        x: "11",
                                        y: "14",
                                        width: "2",
                                        height: "4",
                                        fill: "rgba(255, 255, 255, 0.7)"
                                    })]
                                }), 1 === t.deviceMode && (0,
                                o.jsxs)("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    style: {
                                        display: "block"
                                    },
                                    children: [(0,
                                    o.jsx)("path", {
                                        d: "M8.5 16.5a5 5 0 017 0",
                                        stroke: "rgba(255, 255, 255, 0.7)",
                                        strokeWidth: "2",
                                        strokeLinecap: "round"
                                    }), (0,
                                    o.jsx)("path", {
                                        d: "M5 12.55a10.97 10.97 0 0114 0",
                                        stroke: "rgba(255, 255, 255, 0.7)",
                                        strokeWidth: "2",
                                        strokeLinecap: "round"
                                    }), (0,
                                    o.jsx)("path", {
                                        d: "M2 8.82a15.65 15.65 0 0120 0",
                                        stroke: "rgba(255, 255, 255, 0.7)",
                                        strokeWidth: "2",
                                        strokeLinecap: "round"
                                    }), (0,
                                    o.jsx)("circle", {
                                        cx: "12",
                                        cy: "20",
                                        r: "2",
                                        fill: "rgba(255, 255, 255, 0.7)"
                                    })]
                                }), 2 === t.deviceMode && (0,
                                o.jsx)("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    style: {
                                        display: "block"
                                    },
                                    children: (0,
                                    o.jsx)("path", {
                                        d: "M12 2l5 5-5 5m0-10L7 7l5 5m0 0l5 5-5 5m0-10L7 17l5 5",
                                        stroke: "rgba(255, 255, 255, 0.7)",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    })
                                })]
                            }), (0,
                            o.jsx)(T.x, {
                                fontSize: "16px",
                                fontWeight: "medium",
                                color: "rgba(255, 255, 255, 0.8)",
                                children: 0 === t.deviceMode ? a("64") || "有线连接" : 1 === t.deviceMode ? a("65") || "无线连接" : a("66") || "蓝牙连接"
                            })]
                        })]
                    })]
                })]
            })
        }
        function q(e) {
            let {devices: t, currentDeviceIndex: r, nextDeviceIndex: a, isTransitioning: i, showNextImage: c, onAddDevice: s} = e
              , {t: d} = (0,
            n.useContext)(A)
              , l = "#10A8FD";
            return (0,
            o.jsxs)(E.xu, {
                w: {
                    base: "95%",
                    sm: "90%",
                    md: "80%",
                    lg: "70%"
                },
                maxW: "1000px",
                position: "relative",
                mx: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                children: [(0,
                o.jsxs)(E.xu, {
                    position: "relative",
                    w: "100%",
                    h: "400px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    children: [(0,
                    o.jsx)(E.xu, {
                        position: "absolute",
                        bottom: "20px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        w: "80%",
                        h: "40px",
                        bg: "radial-gradient(ellipse, ".concat(l, "4D 0%, transparent 70%)"),
                        filter: "blur(20px)",
                        zIndex: 0,
                        sx: {
                            animation: "shadowPulse 3s ease-in-out infinite",
                            "@keyframes shadowPulse": {
                                "0%": {
                                    opacity: .6,
                                    transform: "translateX(-50%) scale(1)"
                                },
                                "50%": {
                                    opacity: 1,
                                    transform: "translateX(-50%) scale(1.1)"
                                },
                                "100%": {
                                    opacity: .6,
                                    transform: "translateX(-50%) scale(1)"
                                }
                            }
                        }
                    }), (0,
                    o.jsx)(E.xu, {
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        w: "100%",
                        h: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        opacity: i ? 0 : 1,
                        transition: "opacity 1s ease-in-out",
                        zIndex: 1,
                        children: (0,
                        o.jsx)(L.E, {
                            src: t[r].image,
                            alt: t[r].name,
                            maxW: "100%",
                            maxH: "100%",
                            objectFit: "contain",
                            style: {
                                filter: "drop-shadow(0px 12px 24px rgba(0, 0, 0, 0.4)) drop-shadow(0px 0px 30px ".concat(l, "33)")
                            }
                        })
                    }), (0,
                    o.jsx)(E.xu, {
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        w: "100%",
                        h: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        opacity: i && c ? 1 : 0,
                        transition: "opacity 1s ease-in-out",
                        zIndex: 2,
                        pointerEvents: "none",
                        children: (0,
                        o.jsx)(L.E, {
                            src: t[a].image,
                            alt: t[a].name,
                            maxW: "100%",
                            maxH: "100%",
                            objectFit: "contain",
                            style: {
                                filter: "drop-shadow(0px 12px 24px rgba(0, 0, 0, 0.4)) drop-shadow(0px 0px 30px ".concat(l, "33)")
                            }
                        })
                    })]
                }), (0,
                o.jsxs)(X.k, {
                    direction: "column",
                    align: "center",
                    mt: 12,
                    gap: 4,
                    children: [(0,
                    o.jsx)(B.z, {
                        onClick: s,
                        bg: l,
                        color: "black",
                        px: 8,
                        py: 3,
                        h: "56px",
                        borderRadius: "xl",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "2px solid ".concat(l),
                        boxShadow: "0 4px 20px ".concat(l, "80"),
                        fontWeight: "bold",
                        _hover: {
                            transform: "scale(1.05) translateY(-2px)",
                            boxShadow: "0 8px 30px ".concat(l, "CC"),
                            opacity: .9
                        },
                        _active: {
                            transform: "scale(0.98)"
                        },
                        transition: "all 0.3s",
                        position: "relative",
                        overflow: "hidden",
                        minW: "160px",
                        children: (0,
                        o.jsxs)(X.k, {
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                            gap: 2,
                            children: [(0,
                            o.jsx)(T.x, {
                                fontSize: "24px",
                                lineHeight: "1",
                                children: "+"
                            }), (0,
                            o.jsx)(T.x, {
                                fontWeight: "bold",
                                fontSize: "16px",
                                lineHeight: "1",
                                children: d("20") || "新增设备"
                            })]
                        })
                    }), (0,
                    o.jsx)(T.x, {
                        fontSize: "14px",
                        color: l,
                        fontWeight: "medium",
                        textShadow: "0 0 10px ".concat(l, "80"),
                        children: d("21") || "请连接设备"
                    }), (0,
                    o.jsx)(T.x, {
                        fontSize: "12px",
                        color: "rgba(255, 255, 255, 0.6)",
                        textAlign: "center",
                        maxW: "500px",
                        lineHeight: "1.6",
                        children: d("22") || "驱动无法识别蓝牙模式连接，请使用 USB 或 2.4G 接收器"
                    })]
                })]
            })
        }
        var $ = r(9102)
          , Y = r.n($)
          , Z = r(209)
          , ee = r(4873)
          , et = r(937)
          , er = r(2250)
          , eo = r(6926)
          , en = r(8633)
          , ea = r(8838)
          , ei = e => {
            let {isOpen: t, message: r="正在加载...", description: n="请稍候", showProgress: a=!1, progress: i=0} = e;
            return (0,
            o.jsxs)(Z.u_, {
                isOpen: t,
                onClose: () => {}
                ,
                isCentered: !0,
                closeOnOverlayClick: !1,
                closeOnEsc: !1,
                children: [(0,
                o.jsx)(ee.Z, {
                    bg: "blackAlpha.700",
                    backdropFilter: "blur(10px)"
                }), (0,
                o.jsx)(et.h, {
                    bg: "rgba(20, 25, 30, 0.95)",
                    border: "1px solid rgba(16, 168, 253, 0.3)",
                    borderRadius: "xl",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4), 0 0 20px rgba(16, 168, 253, 0.2)",
                    maxW: "400px",
                    children: (0,
                    o.jsx)(er.f, {
                        py: 8,
                        px: 6,
                        children: (0,
                        o.jsxs)(eo.g, {
                            spacing: 6,
                            align: "center",
                            children: [(0,
                            o.jsx)(en.$, {
                                thickness: "4px",
                                speed: "0.8s",
                                emptyColor: "rgba(255, 255, 255, 0.1)",
                                color: "#10A8FD",
                                size: "xl",
                                w: "60px",
                                h: "60px"
                            }), (0,
                            o.jsx)(T.x, {
                                fontSize: "lg",
                                fontWeight: "600",
                                color: "white",
                                textAlign: "center",
                                children: r
                            }), n && (0,
                            o.jsx)(T.x, {
                                fontSize: "sm",
                                color: "rgba(255, 255, 255, 0.6)",
                                textAlign: "center",
                                children: n
                            }), a && (0,
                            o.jsxs)(eo.g, {
                                spacing: 2,
                                w: "100%",
                                children: [(0,
                                o.jsx)(ea.E, {
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
                                }), (0,
                                o.jsxs)(T.x, {
                                    fontSize: "xs",
                                    color: "rgba(255, 255, 255, 0.5)",
                                    children: [Math.round(i), "%"]
                                })]
                            }), (0,
                            o.jsxs)("div", {
                                className: "jsx-18a4f88664e0e9a loading-dots",
                                children: [(0,
                                o.jsx)(Y(), {
                                    id: "18a4f88664e0e9a",
                                    children: "@-webkit-keyframes dot-pulse{0%,80%,100%{opacity:.3;-webkit-transform:scale(.8);transform:scale(.8)}40%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-moz-keyframes dot-pulse{0%,80%,100%{opacity:.3;-moz-transform:scale(.8);transform:scale(.8)}40%{opacity:1;-moz-transform:scale(1);transform:scale(1)}}@-o-keyframes dot-pulse{0%,80%,100%{opacity:.3;-o-transform:scale(.8);transform:scale(.8)}40%{opacity:1;-o-transform:scale(1);transform:scale(1)}}@keyframes dot-pulse{0%,80%,100%{opacity:.3;-webkit-transform:scale(.8);-moz-transform:scale(.8);-o-transform:scale(.8);transform:scale(.8)}40%{opacity:1;-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1)}}.loading-dots.jsx-18a4f88664e0e9a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:8px;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.loading-dots.jsx-18a4f88664e0e9a span.jsx-18a4f88664e0e9a{width:8px;height:8px;background:#10A8FD;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;-webkit-animation:dot-pulse 1.4s ease-in-out infinite;-moz-animation:dot-pulse 1.4s ease-in-out infinite;-o-animation:dot-pulse 1.4s ease-in-out infinite;animation:dot-pulse 1.4s ease-in-out infinite}.loading-dots.jsx-18a4f88664e0e9a span.jsx-18a4f88664e0e9a:nth-child(2){-webkit-animation-delay:.2s;-moz-animation-delay:.2s;-o-animation-delay:.2s;animation-delay:.2s}.loading-dots.jsx-18a4f88664e0e9a span.jsx-18a4f88664e0e9a:nth-child(3){-webkit-animation-delay:.4s;-moz-animation-delay:.4s;-o-animation-delay:.4s;animation-delay:.4s}"
                                }), (0,
                                o.jsx)("span", {
                                    className: "jsx-18a4f88664e0e9a"
                                }), (0,
                                o.jsx)("span", {
                                    className: "jsx-18a4f88664e0e9a"
                                }), (0,
                                o.jsx)("span", {
                                    className: "jsx-18a4f88664e0e9a"
                                })]
                            })]
                        })
                    })
                })]
            })
        }
        ;
        function ec(e) {
            let {isLoading: t, isMounted: r, authorizedDevices: a, devices: i, carouselState: c, onAddDevice: s, onDeviceClick: d} = e
              , {backgroundSettings: l, t: u} = (0,
            n.useContext)(A)
              , [p,h] = (0,
            n.useState)(!1)
              , g = "#10A8FD";
            return (0,
            o.jsxs)(E.xu, {
                w: "100%",
                h: "100vh",
                position: "relative",
                overflow: "hidden",
                children: [(0,
                o.jsx)(E.xu, {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    w: "100vw",
                    h: "100vh",
                    overflow: "hidden",
                    bg: "black",
                    zIndex: 0,
                    children: r ? (null == l ? void 0 : l.backgroundUrl) && (l.backgroundUrl.endsWith(".mp4") || l.backgroundUrl.endsWith(".webm")) && !p ? (0,
                    o.jsx)(E.xu, {
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        children: (0,
                        o.jsx)("video", {
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
                                left: 0,
                                opacity: (null == l ? void 0 : l.opacity) || 1,
                                filter: "brightness(".concat((null == l ? void 0 : l.brightness) || 1, ") blur(").concat((null == l ? void 0 : l.blurIntensity) || 0, "px)")
                            },
                            onError: () => {
                                h(!0)
                            }
                            ,
                            children: (0,
                            o.jsx)("source", {
                                src: l.backgroundUrl,
                                type: "video/mp4"
                            })
                        })
                    }) : (0,
                    o.jsx)(E.xu, {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        w: "100%",
                        h: "100%",
                        style: {
                            backgroundImage: (null == l ? void 0 : l.backgroundUrl) ? "url(".concat(l.backgroundUrl, ")") : "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            opacity: (null == l ? void 0 : l.opacity) || 1,
                            filter: "brightness(".concat((null == l ? void 0 : l.brightness) || 1, ") blur(").concat((null == l ? void 0 : l.blurIntensity) || 0, "px)")
                        }
                    }) : (0,
                    o.jsx)(E.xu, {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        w: "100%",
                        h: "100%",
                        style: {
                            background: "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }
                    })
                }), (0,
                o.jsxs)(E.xu, {
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
                        "@keyframes cableGrowLoop": {
                            "0%": {
                                height: "0",
                                opacity: .7
                            },
                            "50%": {
                                height: "calc(50vh - 340px)",
                                opacity: 1
                            },
                            "100%": {
                                height: "0",
                                opacity: .7
                            }
                        },
                        "@keyframes textureGrowLoop": {
                            "0%": {
                                height: "0",
                                opacity: 0
                            },
                            "50%": {
                                height: "calc(50vh - 340px)",
                                opacity: .6
                            },
                            "100%": {
                                height: "0",
                                opacity: 0
                            }
                        },
                        "@keyframes usbFollowCableEnd": {
                            "0%": {
                                top: "0px",
                                opacity: .7
                            },
                            "50%": {
                                top: "calc(50vh - 340px)",
                                opacity: 1
                            },
                            "100%": {
                                top: "0px",
                                opacity: .7
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
                            background: "".concat(g, "4D"),
                            borderRadius: "24px"
                        }
                    },
                    children: [(0,
                    o.jsx)(E.xu, {
                        position: "absolute",
                        top: "10px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "60px",
                        height: "calc(50vh - 300px)",
                        zIndex: 0,
                        pointerEvents: "none",
                        children: (0,
                        o.jsx)(E.xu, {
                            width: "100%",
                            height: "100%",
                            sx: {
                                ".cable-path": {
                                    position: "relative",
                                    width: "20px",
                                    height: "100%",
                                    margin: "0 auto"
                                },
                                ".cable-line": {
                                    position: "absolute",
                                    top: "0",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    width: "8px",
                                    height: "0",
                                    background: "linear-gradient(180deg, #555 0%, #666 20%, #777 40%, #666 60%, #555 80%, #444 100%)",
                                    borderRadius: "4px",
                                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.4), inset 1px 0 2px rgba(255, 255, 255, 0.1), inset -1px 0 2px rgba(0, 0, 0, 0.3)",
                                    animation: "cableGrowLoop 3s ease-in-out infinite",
                                    animationDelay: "0.5s"
                                },
                                ".cable-texture": {
                                    position: "absolute",
                                    top: "0",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    width: "6px",
                                    height: "0",
                                    background: "repeating-linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0px, rgba(255, 255, 255, 0.1) 1px, transparent 1px, transparent 4px)",
                                    borderRadius: "3px",
                                    animation: "textureGrowLoop 3s ease-in-out infinite",
                                    animationDelay: "0.5s"
                                },
                                ".usb-icon": {
                                    position: "absolute",
                                    top: "0",
                                    left: "50%",
                                    transform: "translateX(-50%) scale(1.5)",
                                    width: "40px",
                                    height: "40px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    zIndex: 10,
                                    animation: "usbFollowCableEnd 3s ease-in-out infinite",
                                    animationDelay: "0.5s",
                                    pointerEvents: "none"
                                }
                            },
                            children: (0,
                            o.jsxs)("div", {
                                className: "cable-path",
                                children: [(0,
                                o.jsx)("div", {
                                    className: "cable-line"
                                }), (0,
                                o.jsx)("div", {
                                    className: "cable-texture"
                                }), (0,
                                o.jsx)("div", {
                                    className: "usb-icon",
                                    children: (0,
                                    o.jsxs)("svg", {
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 1024 1024",
                                        fill: "none",
                                        children: [(0,
                                        o.jsx)("path", {
                                            d: "M448 661.438V1024h128V661.438z",
                                            fill: "#434A54"
                                        }), (0,
                                        o.jsx)("path", {
                                            d: "M362.656 0h298.688v341.328H362.656z",
                                            fill: "#E6E9ED"
                                        }), (0,
                                        o.jsx)("path", {
                                            d: "M597.344 768c0 23.562-19.124 42.688-42.688 42.688h-85.312c-23.562 0-42.688-19.124-42.688-42.688v-149.312c0-23.562 19.124-42.688 42.688-42.688h85.312c23.562 0 42.688 19.124 42.688 42.688V768z",
                                            fill: "#37BC9B"
                                        }), (0,
                                        o.jsx)("path", {
                                            d: "M725.344 640.124c0 23.562-19.124 42.624-42.688 42.624H341.344c-23.562 0-42.688-19.062-42.688-42.624V213.328h426.688v426.796z",
                                            fill: "#48CFAD"
                                        }), (0,
                                        o.jsx)("path", {
                                            d: "M469.344 85.328h-42.688c-11.782 0-21.312 9.562-21.312 21.344S414.876 128 426.656 128h42.688c11.782 0 21.312-9.546 21.312-21.328s-9.532-21.344-21.312-21.344zM597.344 85.328h-42.688c-11.782 0-21.312 9.562-21.312 21.344S542.876 128 554.656 128h42.688c11.782 0 21.312-9.546 21.312-21.328s-9.532-21.344-21.312-21.344z",
                                            fill: "#CCD1D9"
                                        })]
                                    })
                                })]
                            })
                        })
                    }), (0,
                    o.jsx)(E.xu, {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        minH: "calc(100vh - 160px)",
                        px: 4,
                        pt: 8,
                        children: t ? (0,
                        o.jsx)(E.xu, {
                            textAlign: "center",
                            children: (0,
                            o.jsx)(T.x, {
                                color: "white",
                                fontSize: "lg",
                                children: u("46") || "正在加载设备信息..."
                            })
                        }) : a.length > 0 ? (0,
                        o.jsxs)(E.xu, {
                            w: "100%",
                            maxW: "1400px",
                            px: {
                                base: 4,
                                md: 6
                            },
                            children: [(0,
                            o.jsx)(T.x, {
                                fontSize: {
                                    base: "28px",
                                    md: "36px",
                                    lg: "42px"
                                },
                                fontWeight: "bold",
                                color: "white",
                                textAlign: "center",
                                mb: {
                                    base: 8,
                                    md: 12
                                },
                                sx: {
                                    background: "linear-gradient(45deg, #10A8FD, #4FC3F7, #10A8FD)",
                                    backgroundSize: "200% 100%",
                                    animation: "textFlow 3s ease-in-out infinite",
                                    backgroundClip: "text",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    filter: "drop-shadow(0 0 20px rgba(16, 168, 253, 0.5))",
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
                                children: u("47") || "我的设备"
                            }), (0,
                            o.jsx)(X.k, {
                                gap: {
                                    base: 6,
                                    md: 8,
                                    lg: 10
                                },
                                flexWrap: "wrap",
                                justifyContent: "center",
                                mb: 8,
                                children: a.map( (e, t) => (0,
                                o.jsx)(J, {
                                    device: e,
                                    onClick: d
                                }, "".concat(e.productType, "-").concat(t)))
                            }), (0,
                            o.jsxs)(X.k, {
                                direction: "column",
                                align: "center",
                                mt: 8,
                                mb: 8,
                                gap: 4,
                                children: [(0,
                                o.jsx)(E.xu, {
                                    as: "button",
                                    onClick: s,
                                    bg: g,
                                    color: "black",
                                    px: 8,
                                    py: 3,
                                    h: "56px",
                                    borderRadius: "xl",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    border: "2px solid ".concat(g),
                                    boxShadow: "0 4px 20px ".concat(g, "80"),
                                    fontWeight: "bold",
                                    _hover: {
                                        transform: "scale(1.05) translateY(-2px)",
                                        boxShadow: "0 8px 30px ".concat(g, "CC"),
                                        opacity: .9
                                    },
                                    _active: {
                                        transform: "scale(0.98)"
                                    },
                                    transition: "all 0.3s",
                                    position: "relative",
                                    overflow: "hidden",
                                    minW: "160px",
                                    cursor: "pointer",
                                    children: (0,
                                    o.jsxs)(X.k, {
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "100%",
                                        gap: 2,
                                        children: [(0,
                                        o.jsx)(T.x, {
                                            fontSize: "24px",
                                            lineHeight: "1",
                                            children: "+"
                                        }), (0,
                                        o.jsx)(T.x, {
                                            fontWeight: "bold",
                                            fontSize: "16px",
                                            lineHeight: "1",
                                            children: u("20") || "新增设备"
                                        })]
                                    })
                                }), (0,
                                o.jsx)(T.x, {
                                    fontSize: "14px",
                                    color: g,
                                    fontWeight: "medium",
                                    textShadow: "0 0 10px ".concat(g, "80"),
                                    children: u("21") || "请连接设备"
                                }), (0,
                                o.jsx)(T.x, {
                                    fontSize: "12px",
                                    color: "rgba(255, 255, 255, 0.6)",
                                    textAlign: "center",
                                    maxW: "500px",
                                    lineHeight: "1.6",
                                    children: u("22") || "驱动无法识别蓝牙模式连接，请使用 USB 或 2.4G 接收器"
                                })]
                            })]
                        }) : (0,
                        o.jsx)(q, {
                            devices: i,
                            currentDeviceIndex: c.currentDeviceIndex,
                            nextDeviceIndex: c.nextDeviceIndex,
                            isTransitioning: c.isTransitioning,
                            showNextImage: c.showNextImage,
                            onAddDevice: s
                        })
                    }), (0,
                    o.jsxs)(E.xu, {
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
                        children: [(0,
                        o.jsx)(E.xu, {
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
                        }), (0,
                        o.jsx)(E.xu, {
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
                    })]
                }), (0,
                o.jsx)(ei, {
                    isOpen: t,
                    message: u("46") || "正在加载设备信息...",
                    description: u("63") || "正在初始化设备，请稍候"
                })]
            })
        }
        function es() {
            let {t: e} = (0,
            n.useContext)(A);
            return (0,
            o.jsx)(E.xu, {
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                children: (0,
                o.jsx)(E.xu, {
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
                    children: (0,
                    o.jsxs)(E.xu, {
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
                        children: [(0,
                        o.jsx)(E.xu, {
                            as: "a",
                            href: "https://beian.miit.gov.cn/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            textDecoration: "none",
                            color: "rgba(255, 255, 255, 0.8)",
                            transition: "color 0.3s ease",
                            _hover: {
                                color: "#10A8FD"
                            },
                            children: e("5")
                        }), (0,
                        o.jsx)(E.xu, {
                            display: {
                                base: "none",
                                sm: "block"
                            },
                            children: "|"
                        }), (0,
                        o.jsx)(E.xu, {
                            color: "rgba(255, 255, 255, 0.8)",
                            children: e("6")
                        })]
                    })
                })
            })
        }
        function ed() {
            let {deviceInfo: e} = (0,
            n.useContext)(A)
              , t = function() {
                let {connectDevice: e, deviceInfo: t, getAuthorizedDeviceInfo: r, loadDeviceInfo: o, t: a} = (0,
                n.useContext)(A)
                  , i = z()
                  , [c,s] = (0,
                n.useState)(!1)
                  , [d,l] = (0,
                n.useState)(!0)
                  , [u,p] = (0,
                n.useState)(0)
                  , [h,g] = (0,
                n.useState)(0)
                  , [f,v] = (0,
                n.useState)(!1)
                  , [x,m] = (0,
                n.useState)(!1)
                  , b = (0,
                n.useMemo)( () => {
                    if (!t || 0 === t.length)
                        return [];
                    let e = t.map(e => {
                        let t = e.devices.filter(e => 1 === e.connect_status);
                        if (0 === t.length)
                            return null;
                        let r = t.filter(e => 1 === e.online_status);
                        return {
                            ...r.length > 0 ? r[0] : t.find(e => 0 === e.deviceMode) || t[0],
                            productType: e.productType,
                            productPic: e.productPic,
                            productDesc: e.productDesc,
                            productUrl: e.productUrl
                        }
                    }
                    ).filter(e => null !== e)
                      , r = new Map;
                    return e.forEach(e => {
                        let t = e.productType;
                        if (r.has(t)) {
                            let o = r.get(t);
                            1 === e.online_status && 1 !== o.online_status && r.set(t, e)
                        } else
                            r.set(t, e)
                    }
                    ),
                    Array.from(r.values())
                }
                , [t])
                  , y = (0,
                n.useMemo)( () => t && t.length > 0 ? t.map(e => ({
                    id: e.productType,
                    name: e.productDesc,
                    image: e.productPic
                })) : [{
                    id: 101,
                    name: a("11") || "键盘",
                    image: "./products/kb_l102.png"
                }], [t, a]);
                return (0,
                n.useEffect)( () => {
                    s(!0)
                }
                , []),
                (0,
                n.useEffect)( () => {
                    if (!c)
                        return;
                    let t = !1;
                    return (async () => {
                        if (!t) {
                            l(!0);
                            try {
                                if (await o(),
                                t)
                                    return;
                                let n = await r();
                                if (t)
                                    return;
                                if (n && n.length > 0) {
                                    let t = [];
                                    if (n.forEach(e => {
                                        let r = e.devices.filter(e => 1 === e.connect_status);
                                        t.push(...r)
                                    }
                                    ),
                                    t.length > 0) {
                                        let r = t.map(e => ({
                                            vendorId: parseInt(e.vendorId, 16),
                                            productId: parseInt(e.productId, 16),
                                            productName: e.productName,
                                            usagePage: parseInt(e.productUsagePage, 16) || 0,
                                            usage: parseInt(e.productUsage, 16) || 0,
                                            deviceMode: e.deviceMode
                                        }));
                                        try {
                                            await e(r)
                                        } catch (e) {
                                            console.error("[useDeviceManager] 连接设备失败:", e)
                                        }
                                    }
                                }
                            } catch (e) {} finally {
                                t || l(!1)
                            }
                        }
                    }
                    )(),
                    () => {
                        t = !0
                    }
                }
                , [c]),
                (0,
                n.useEffect)( () => {
                    if (!c)
                        return;
                    let e = async () => {
                        let e = window.location.hash;
                        if (!e || "#" === e || "#/" === e) {
                            console.log("\uD83D\uDD04 [设备管理] 返回首页，刷新设备列表");
                            try {
                                await r()
                            } catch (e) {
                                console.error("[设备管理] 刷新设备列表失败:", e)
                            }
                        }
                    }
                    ;
                    return window.addEventListener("hashchange", e),
                    () => {
                        window.removeEventListener("hashchange", e)
                    }
                }
                , [c, r]),
                (0,
                n.useEffect)( () => {
                    y.forEach(e => {
                        document.createElement("img").src = e.image
                    }
                    )
                }
                , [y]),
                (0,
                n.useEffect)( () => {
                    if (y.length <= 1)
                        return;
                    let e = setInterval( () => {
                        let e = (u + 1) % y.length;
                        g(e),
                        v(!0),
                        setTimeout( () => {
                            p(e),
                            v(!1),
                            m(!1)
                        }
                        , 1e3)
                    }
                    , 5e3);
                    return () => clearInterval(e)
                }
                , [u, y.length]),
                (0,
                n.useEffect)( () => {
                    f && (m(!1),
                    requestAnimationFrame( () => {
                        requestAnimationFrame( () => {
                            m(!0)
                        }
                        )
                    }
                    ))
                }
                , [f]),
                {
                    isLoadingDevices: d,
                    isMounted: c,
                    authorizedDevices: b,
                    devices: y,
                    carouselState: {
                        currentDeviceIndex: u,
                        nextDeviceIndex: h,
                        isTransitioning: f,
                        showNextImage: x
                    },
                    handleAddNewDevice: (0,
                    n.useCallback)(async () => {
                        try {
                            let o = t.flatMap(e => e.devices.map(e => ({
                                vendorId: parseInt(e.vendorId, 16),
                                productId: parseInt(e.productId, 16),
                                productName: e.productName,
                                usagePage: parseInt(e.productUsagePage, 16) || 0,
                                usage: parseInt(e.productUsage, 16) || 0,
                                deviceMode: e.deviceMode
                            })));
                            o && o.length > 0 ? await e(o, !0) ? (await r(),
                            i(a("40") || "设备添加成功", a("41") || "设备已成功授权连接", "success")) : await r() : i(a("42") || "无可用设备", a("43") || "配置文件中未找到支持的设备", "error")
                        } catch (e) {
                            await r(),
                            i(a("44") || "设备添加失败", a("45") || "请检查设备连接后重试", "error")
                        }
                    }
                    , [t, e, r, i, a]),
                    handleDeviceClick: (0,
                    n.useCallback)(async e => {
                        if (1 !== e.online_status) {
                            i(a("60") || "设备未在线", a("61") || "请先激活设备（连接USB或打开2.4G接收器）", "warning");
                            return
                        }
                        if (e.productUrl) {
                            let r = t.find(t => t.productType === e.productType && t.productUrl === e.productUrl);
                            if (!r) {
                                i(a("44") || "设备连接失败", "未找到产品信息", "error");
                                return
                            }
                            let o = {
                                fromWebhub: !0,
                                productType: r.productType,
                                productPic: r.productPic,
                                productDesc: r.productDesc,
                                productUrl: r.productUrl,
                                devices: r.devices.map(e => ({
                                    deviceMode: e.deviceMode,
                                    vendorId: e.vendorId,
                                    productId: e.productId,
                                    productName: e.productName,
                                    productUsagePage: e.productUsagePage,
                                    productUsage: e.productUsage,
                                    protocol: e.protocol
                                }))
                            };
                            try {
                                sessionStorage.setItem("webhubProductInfo", JSON.stringify(o))
                            } catch (e) {}
                            let n = r.productUrl.replace(/^\.\//, "").replace(/\/index\.html$/, "");
                            window.location.hash = "#/keyboard/".concat(n)
                        }
                    }
                    , [t, i, a])
                }
            }()
              , {showIframe: r, iframeUrl: a} = function(e, t) {
                let[r,o] = (0,
                n.useState)(null)
                  , [a,i] = (0,
                n.useState)(null);
                return (0,
                n.useEffect)( () => {
                    let r = () => {
                        let r = window.location.hash;
                        if (r.startsWith("#/device/")) {
                            let e = r.replace("#/device/", "").split("?")
                              , t = e[0]
                              , n = new URLSearchParams(e[1] || "")
                              , a = new URL("./".concat(t, "/index.html"),window.location.origin);
                            n.forEach( (e, t) => {
                                a.searchParams.set(t, e)
                            }
                            ),
                            o(t),
                            i(a.toString())
                        } else if (r.startsWith("#/keyboard/")) {
                            let n = r.replace("#/keyboard/", "").split("?")[0]
                              , a = null
                              , c = e.find(e => !!e.productUrl && e.productUrl.replace(/^\.\//, "").replace(/\/index\.html$/, "") === n);
                            if (c && c.productUrl)
                                a = c.productUrl;
                            else {
                                let e = t.filter(e => e.productUrl.replace(/^\.\//, "").replace(/\/index\.html$/, "") === n);
                                e.length > 0 && (a = e[0].productUrl)
                            }
                            if (a) {
                                let e = a.replace(/^\.\//, "").replace(/\/index\.html$/, "")
                                  , t = new URL("./".concat(e, "/index.html"),window.location.origin);
                                o(e),
                                i(t.toString())
                            } else
                                o(null),
                                i(null)
                        } else if (r.startsWith("#/keyboard")) {
                            let t = r.split("?")
                              , n = new URLSearchParams(t[1] || "")
                              , a = n.get("vendorId") || ""
                              , c = n.get("productId") || ""
                              , s = n.get("deviceMode") || "0"
                              , d = a.toUpperCase()
                              , l = c.toUpperCase()
                              , u = e.find(e => {
                                let t = "string" == typeof e.vendorId ? e.vendorId.toUpperCase() : "number" == typeof e.vendorId ? e.vendorId.toString(16).toUpperCase().padStart(4, "0") : String(e.vendorId)
                                  , r = "string" == typeof e.productId ? e.productId.toUpperCase() : "number" == typeof e.productId ? e.productId.toString(16).toUpperCase().padStart(4, "0") : String(e.productId);
                                return t === d && r === l && e.deviceMode.toString() === s
                            }
                            );
                            if (u && u.productUrl) {
                                let e = u.productUrl.replace(/^\.\//, "").replace(/\/index\.html$/, "")
                                  , t = new URL("./".concat(e, "/index.html"),window.location.origin);
                                o(e),
                                i(t.toString())
                            } else
                                o(null),
                                i(null)
                        } else
                            r.startsWith("#/connectDevice"),
                            o(null),
                            i(null)
                    }
                    ;
                    r();
                    let n = () => {
                        r()
                    }
                      , a = e => {
                        e.data && "object" == typeof e.data && "CLEAR_HASH" === e.data.type && (o(null),
                        i(null),
                        "" !== window.location.hash && "#" !== window.location.hash ? window.location.hash = "" : r())
                    }
                    ;
                    return window.addEventListener("hashchange", n),
                    window.addEventListener("message", a),
                    () => {
                        window.removeEventListener("hashchange", n),
                        window.removeEventListener("message", a)
                    }
                }
                , [e, t]),
                {
                    showIframe: !!(r && a),
                    iframeUrl: a,
                    currentDeviceRoute: r
                }
            }(t.authorizedDevices, e);
            return r && a ? (0,
            o.jsx)(E.xu, {
                w: "100%",
                h: "100vh",
                position: "relative",
                overflow: "hidden",
                children: (0,
                o.jsx)(E.xu, {
                    as: "iframe",
                    src: a,
                    w: "100%",
                    h: "100%",
                    border: "none",
                    display: "block"
                })
            }) : (0,
            o.jsxs)(E.xu, {
                w: "100%",
                h: "100vh",
                position: "relative",
                overflow: "hidden",
                children: [(0,
                o.jsx)(Q, {}), (0,
                o.jsx)(ec, {
                    isLoading: t.isLoadingDevices,
                    isMounted: t.isMounted,
                    authorizedDevices: t.authorizedDevices,
                    devices: t.devices,
                    carouselState: t.carouselState,
                    onAddDevice: t.handleAddNewDevice,
                    onDeviceClick: t.handleDeviceClick
                }), (0,
                o.jsx)(es, {})]
            })
        }
        function el() {
            return (0,
            o.jsx)("main", {
                children: (0,
                o.jsx)(U, {
                    children: (0,
                    o.jsx)(ed, {})
                })
            })
        }
    },
    7530: function(e, t, r) {
        "use strict";
        r.d(t, {
            connectAllDevicesHID: function() {
                return m
            },
            zu: function() {
                return b
            },
            _5: function() {
                return x
            }
        });
        let o = {}
          , n = {}
          , a = e => () => Promise.race([new Promise( (t, r) => {
            e( (e, o) => {
                e ? r(e) : t(o)
            }
            )
        }
        ), new Promise( (e, t) => {
            setTimeout( () => {
                e([])
            }
            , 100)
        }
        )])
          , i = e => e.filter(e => {
            var t;
            return null === (t = e.collections) || void 0 === t ? void 0 : t.some(e => 65282 === e.usagePage && 2 === e.usage)
        }
        )
          , c = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            return t && 0 !== t.length ? e.filter(e => t.some(t => {
                if (void 0 !== t.vendorId && e.vendorId !== t.vendorId || void 0 !== t.productId && e.productId !== t.productId)
                    return !1;
                if (void 0 !== t.usagePage || void 0 !== t.usage) {
                    var r;
                    if (!(null === (r = e.collections) || void 0 === r ? void 0 : r.some(e => (void 0 === t.usagePage || e.usagePage === t.usagePage) && (void 0 === t.usage || e.usage === t.usage))))
                        return !1
                }
                return !0
            }
            )) : e
        }
          , s = () => self.crypto && self.crypto.randomUUID && self.crypto.randomUUID() || "path:".concat(Math.random())
          , d = e => {
            var t, r, o, n;
            let a = e._address || s();
            e._address = a;
            let i = 0
              , c = 0
              , d = 0
              , u = e.collections || []
              , p = u.find(e => 65282 === e.usagePage && 2 === e.usage);
            if (!p && u.length > 0 && (p = u[0]),
            p && (null === (t = p.outputReports) || void 0 === t ? void 0 : t.length)) {
                let e = p.outputReports[0];
                void 0 !== e.reportId && (null === (r = e.items) || void 0 === r ? void 0 : r[0]) && (i = e.reportId,
                c = e.items[0].reportSize || 0,
                d = e.items[0].reportCount || 0)
            }
            let h = {
                _device: e,
                interface: 2,
                vendorId: null !== (o = e.vendorId) && void 0 !== o ? o : -1,
                productId: null !== (n = e.productId) && void 0 !== n ? n : -1,
                address: a,
                productName: e.productName,
                reportId: i,
                reportSize: c,
                reportCount: d
            };
            return l.hid_cache[a] = h
        }
          , l = {
            hid_cache: {},
            requestDevice: async function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return (await navigator.hid.requestDevice({
                    filters: e
                })).map(d).sort( (e, t) => e.productId - t.productId)
            },
            getFilteredDevices: async () => {
                try {
                    let e = await navigator.hid.getDevices();
                    return i(e)
                } catch (e) {
                    return console.error("[设备读取] 获取设备失败:", e),
                    []
                }
            }
            ,
            getAuthorizedDevices: async function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                try {
                    let t = await navigator.hid.getDevices();
                    return c(t, e).map(d)
                } catch (e) {
                    return console.error("[设备读取] 获取已授权设备失败:", e),
                    []
                }
            },
            devices: async function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
                  , r = await l.getAuthorizedDevices(t);
                if (0 === r.length || e)
                    try {
                        let o = await l.requestDevice(t);
                        r = await l.getAuthorizedDevices(t),
                        e && o.length > 0 && console.log("✅ [WebHid] 用户选择了 ".concat(o.length, " 个新设备，当前已授权设备总数: ").concat(r.length))
                    } catch (e) {
                        return console.error("[设备读取] 请求设备失败:", e),
                        []
                    }
                return r
            }
        };
        class u {
            async open() {
                if (this._hidDevice && !this._hidDevice._device.opened) {
                    this.openPromise = this._hidDevice._device.open(),
                    this.setupListeners();
                    try {
                        await this.openPromise
                    } catch (e) {
                        console.error("[WebHid] 打开设备失败: ".concat(this.productName), e)
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
                }
                )
            }
            read(e) {
                if (n[this.address] = [],
                this.fastForwardGlobalBuffer(Date.now()),
                o[this.address].length > 0) {
                    var t;
                    e(void 0, null === (t = o[this.address].shift()) || void 0 === t ? void 0 : t.message)
                } else
                    n[this.address].push(t => e(void 0, t))
            }
            fastForwardGlobalBuffer(e) {
                let t = o[this.address].length;
                for (; t; )
                    if (t--,
                    o[this.address][0].currTime < e)
                        o[this.address].shift();
                    else
                        break
            }
            async hid_write(e) {
                var t;
                await this.openPromise;
                let r = new Uint8Array(e.slice(1));
                if (this.reportCount <= 0) {
                    console.error("[WebHid] ❌ reportCount无效(".concat(this.reportCount, ")，无法发送数据到 ").concat(this.productName));
                    return
                }
                let o = r.length > this.reportCount ? r.slice(0, this.reportCount) : r;
                await (null === (t = this._hidDevice) || void 0 === t ? void 0 : t._device.sendReport(this.reportId, o))
            }
            async hid_send_feature_report(e, t) {
                var r, o;
                await this.openPromise;
                let n = new Uint8Array(t.slice(1));
                return await (null === (r = this._hidDevice) || void 0 === r ? void 0 : r._device.sendFeatureReport(this.reportId, n)),
                await (null === (o = this._hidDevice) || void 0 === o ? void 0 : o._device.receiveFeatureReport(this.reportId))
            }
            async hid_get_feature_report(e, t) {
                var r;
                return await this.openPromise,
                new Uint8Array(t.slice(1)),
                await (null === (r = this._hidDevice) || void 0 === r ? void 0 : r._device.receiveFeatureReport(e))
            }
            constructor(e) {
                if (this.reportId = -1,
                this.reportSize = -1,
                this.reportCount = -1,
                this.interface = -1,
                this.vendorId = -1,
                this.productId = -1,
                this.productName = "",
                this.address = "",
                this.openPromise = Promise.resolve(),
                this.readP = a(e => this.read(e)),
                "demo" == e) {
                    this.vendorId = 39578,
                    this.productId = 47802,
                    this.productName = "Test";
                    return
                }
                this._hidDevice = l.hid_cache[e],
                this._hidDevice && (this.vendorId = this._hidDevice.vendorId,
                this.productId = this._hidDevice.productId,
                this.address = this._hidDevice.address,
                this.interface = this._hidDevice.interface,
                this.productName = this._hidDevice.productName,
                this.reportId = this._hidDevice.reportId,
                this.reportSize = this._hidDevice.reportSize,
                this.reportCount = this._hidDevice.reportCount,
                o[this.address] = o[this.address] || [],
                n[this.address] = n[this.address] || [],
                this._hidDevice._device.opened || this.open())
            }
        }
        let p = {}
          , h = {}
          , g = e => new u(e);
        class f {
            getProductId() {
                return this.getHID().productId
            }
            getConnectMode() {
                return 591 == this.getProductId() ? "USB" : "2.4G"
            }
            refresh(e) {
                this.address = e,
                p[e] = {
                    hid: g(e)
                }
            }
            get commandQueueWrapper() {
                return h[this.address] || (h[this.address] = {
                    isFlushing: !1,
                    commandQueue: []
                }),
                h[this.address]
            }
            async timeout(e) {
                return new Promise( (t, r) => {
                    this.commandQueueWrapper.commandQueue.push({
                        res: t,
                        rej: r,
                        args: () => new Promise(r => setTimeout( () => {
                            r(),
                            t(void 0)
                        }
                        , e))
                    }),
                    this.commandQueueWrapper.isFlushing || this.flushQueue()
                }
                )
            }
            async getDeviceData() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return new Promise( (t, r) => {
                    this.commandQueueWrapper.commandQueue.push({
                        res: t,
                        rej: r,
                        args: ["get", e]
                    }),
                    this.commandQueueWrapper.isFlushing || this.flushQueue()
                }
                )
            }
            async sendDeviceData() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return new Promise( (t, r) => {
                    this.commandQueueWrapper.commandQueue.push({
                        res: t,
                        rej: r,
                        args: ["get", e]
                    }),
                    this.commandQueueWrapper.isFlushing || this.flushQueue()
                }
                )
            }
            async flushQueue() {
                if (!0 !== this.commandQueueWrapper.isFlushing) {
                    for (this.commandQueueWrapper.isFlushing = !0; 0 !== this.commandQueueWrapper.commandQueue.length; ) {
                        let {res: e, rej: t, args: r} = this.commandQueueWrapper.commandQueue.shift();
                        if ("function" == typeof r)
                            await r(),
                            e();
                        else if ("send_report" == r[0])
                            try {
                                let[t,...o] = r
                                  , n = await this.webhid_send_report(...o);
                                e(n)
                            } catch (e) {
                                t(e)
                            }
                        else
                            try {
                                let[t,...o] = r
                                  , n = await this.webhid_write_command(...o);
                                e(n)
                            } catch (e) {
                                t(e)
                            }
                    }
                    this.commandQueueWrapper.isFlushing = !1
                }
            }
            getHID() {
                return p[this.address].hid
            }
            async webhid_read_command() {
                return this.getHID().readP()
            }
            async webhid_write_command() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                  , t = [...e]
                  , r = Array(33).fill(0);
                t.forEach( (e, t) => {
                    r[t] = e
                }
                );
                try {
                    await this.getHID().hid_write(r)
                } catch (e) {}
                return Array.from(await this.webhid_read_command())
            }
            async webhid_send_command() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                  , t = [...e]
                  , r = Array(33).fill(0);
                return t.forEach( (e, t) => {
                    r[t] = e
                }
                ),
                await this.getHID().write(r),
                "success"
            }
            async webhid_send_report() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                  , t = [...e]
                  , r = Array(33).fill(0);
                return t.forEach( (e, t) => {
                    r[t] = e
                }
                ),
                await this.getHID().send(0, r)
            }
            async sendReport() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return new Promise( (t, r) => {
                    this.commandQueueWrapper.commandQueue.push({
                        res: t,
                        rej: r,
                        args: ["send_report", e]
                    }),
                    this.commandQueueWrapper.isFlushing || this.flushQueue()
                }
                )
            }
            constructor(e) {
                if (this.test = !1,
                this.address = e,
                "demo" == e)
                    this.test = !0,
                    p[e] = {
                        hid: new u(e)
                    };
                else if (!p[e]) {
                    let t = g(e);
                    p[e] = {
                        hid: t
                    }
                }
            }
        }
        var v = r(7686);
        let x = async function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            return (await l.getAuthorizedDevices(e)).map(e => {
                let t = 0
                  , r = 0
                  , o = 0
                  , n = !1;
                for (let a of v.R) {
                    for (let i of a.devices) {
                        let a = parseInt(i.vendorId, 16)
                          , c = parseInt(i.productId, 16);
                        if (e.vendorId === a && e.productId === c) {
                            if (1 === i.deviceMode) {
                                if (e.productName && i.productName) {
                                    let a = e.productName.toLowerCase()
                                      , c = i.productName.toLowerCase();
                                    if (a.includes(c) || c.includes(a) || a.includes("2.4") && c.includes("2.4") || a.includes("wireless") && c.includes("wireless")) {
                                        t = i.deviceMode,
                                        r = parseInt(i.productUsagePage, 16) || 0,
                                        o = parseInt(i.productUsage, 16) || 0,
                                        n = !0;
                                        break
                                    }
                                }
                            } else {
                                if (e.productName && i.productName) {
                                    let a = e.productName.toLowerCase()
                                      , c = i.productName.toLowerCase();
                                    if (a.includes(c) || c.includes(a)) {
                                        t = i.deviceMode,
                                        r = parseInt(i.productUsagePage, 16) || 0,
                                        o = parseInt(i.productUsage, 16) || 0,
                                        n = !0;
                                        break
                                    }
                                }
                                t = i.deviceMode,
                                r = parseInt(i.productUsagePage, 16) || 0,
                                o = parseInt(i.productUsage, 16) || 0,
                                n = !0;
                                break
                            }
                        }
                    }
                    if (n)
                        break
                }
                return {
                    vendorId: e.vendorId,
                    productId: e.productId,
                    productName: e.productName || "",
                    usagePage: r,
                    usage: o,
                    deviceMode: t
                }
            }
            )
        }
          , m = async function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
              , r = arguments.length > 2 ? arguments[2] : void 0
              , o = await l.devices(e, t);
            if (0 === o.length)
                return [];
            let n = new Map;
            r && r.length > 0 && r.forEach(e => {
                let t = "".concat(e.vendorId, "-").concat(e.productId);
                n.set(t, e.deviceMode)
            }
            );
            let a = [];
            for (let e of o) {
                var i;
                let t = "".concat(e.vendorId, "-").concat(e.productId)
                  , r = null !== (i = n.get(t)) && void 0 !== i ? i : -1
                  , o = 0 === r ? "USB" : 1 === r ? "2.4G" : "Unknown";
                try {
                    let t = new y(new f(e.address));
                    a.push({
                        device: t,
                        deviceMode: r,
                        deviceModeName: o,
                        vendorId: e.vendorId,
                        productId: e.productId,
                        productName: e.productName || ""
                    })
                } catch (t) {
                    console.error("❌ [设备读取] 创建设备实例失败: ".concat(e.productName), t)
                }
            }
            return a
        }
          , b = async function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
              , t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , r = await l.devices(t, e);
            if (r.length > 1) {
                for (let t of r)
                    try {
                        let r = e.find(e => e.vendorId === t.vendorId && e.productId === t.productId);
                        if (!r)
                            continue;
                        if (0 === r.deviceMode)
                            return new y(new f(t.address))
                    } catch (e) {
                        continue
                    }
                for (let t of r)
                    try {
                        let r = e.find(e => e.vendorId === t.vendorId && e.productId === t.productId);
                        if (r && 1 === r.deviceMode)
                            return new y(new f(t.address))
                    } catch (e) {
                        continue
                    }
                for (let t of r)
                    try {
                        let r = e.find(e => e.vendorId === t.vendorId && e.productId === t.productId);
                        if (r && 2 === r.deviceMode)
                            return new y(new f(t.address))
                    } catch (e) {
                        continue
                    }
                return
            }
            if (1 == r.length)
                return new y(new f(r[0].address))
        };
        class y {
            addListeners() {
                this.api.getHID().addListeners(e => {
                    let t = new Uint8Array(e.data.buffer);
                    if (170 === t[0] && 14 === t[4]) {
                        if (this.isWriting)
                            return;
                        let e = this.onListeners.find(e => "statu" === e.name);
                        e && e.fb(t)
                    }
                }
                )
            }
            getReportId() {
                return this.api.getHID().reportId
            }
            async getConnectMode() {
                return this.api.getConnectMode()
            }
            async setData(e) {
                return this.isWriting = !0,
                this.writeTimeout && clearTimeout(this.writeTimeout),
                this.writeTimeout = setTimeout( () => {
                    this.isWriting = !1
                }
                , 100),
                this.api.sendDeviceData(e)
            }
            async delay(e) {
                return new Promise(t => setTimeout(t, e))
            }
            async getData(e) {
                return this.isWriting = !0,
                this.writeTimeout && clearTimeout(this.writeTimeout),
                this.writeTimeout = setTimeout( () => {
                    this.isWriting = !1
                }
                , 100),
                this.api.getDeviceData(e)
            }
            async getDeviceStatusAndBattery() {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                let e = Array(65).fill(0);
                e[1] = 170,
                e[2] = 85,
                e[3] = 204,
                e[4] = 51,
                e[5] = 14;
                let t = 0;
                for (; t < 5; ) {
                    try {
                        let t = await this.getData(e);
                        if (t && t.length > 0)
                            return t
                    } catch (e) {}
                    (t += 1) < 5 && await this.delay(100)
                }
                return Array(65).fill(0)
            }
            parseFirmwareVersionFromStatus(e) {
                if (!e || e.length < 14 || 170 !== e[0] || 85 !== e[1] || 204 !== e[2] || 51 !== e[3])
                    return "";
                let t = e[12]
                  , r = e[13];
                return "".concat(t >> 4 & 15, ".").concat(15 & t, ".").concat(10 * (r >> 4 & 15) + (15 & r))
            }
            async getFirmwareVersion() {
                try {
                    let e = await this.getDeviceStatusAndBattery();
                    return this.parseFirmwareVersionFromStatus(e)
                } catch (e) {
                    return ""
                }
            }
            async getBattery() {
                try {
                    let e = await this.getDeviceStatusAndBattery();
                    return Math.min(e[5] || 0, 100)
                } catch (e) {
                    return 0
                }
            }
            addReportListener(e, t) {
                this.onListeners.push({
                    name: e,
                    fb: t
                })
            }
            removeReportListener(e) {
                this.onListeners = this.onListeners.filter(t => t.name !== e)
            }
            constructor(e) {
                this.demoMode = !1,
                this.vendorId = 0,
                this.productId = 0,
                this.productName = "Test Keyboard",
                this.onListeners = [],
                this.mode = "usb",
                this.isWriting = !1,
                this.writeTimeout = null,
                this.api = e;
                let t = this.api.getHID();
                this.vendorId = t.vendorId,
                this.productId = t.productId,
                this.productName = t.productName,
                this.addListeners()
            }
        }
    },
    7686: function(e) {
        "use strict";
        e.exports = JSON.parse('{"R":[{"productType":101,"productPic":"./products/keyboard108.png","productDesc":"机械键盘AK108 V2","productUrl":"./xy-A-jazz-AK108-V2/index.html","devices":[{"deviceMode":0,"vendorId":"1A2C","productId":"A143","productName":"AK108","productUsagePage":"FF02","productUsage":"0002","firmwareVersion":"0.0.0","firmwareNewVersion":"0.0.0","firmwareFile":"./firmware/usb_keyboard_firmware.zip","protocol":1,"charge_flag":0,"battery_value":100,"connect_status":0,"online_status":0},{"deviceMode":1,"vendorId":"1A2C","productId":"8FFF","productName":"2.4 Wireless Device","productUsagePage":"FF02","productUsage":"0002","firmwareVersion":"0.0.0","firmwareNewVersion":"0.0.0","firmwareFile":"./firmware/dongle_keyboard_firmware.zip","protocol":1,"charge_flag":0,"battery_value":100,"connect_status":0,"online_status":0}]},{"productType":102,"productPic":"./products/keyboard820.png","productDesc":"AK820","productUrl":"./xy-A-jazz-AK820-V2/index.html","devices":[{"deviceMode":0,"vendorId":"1A2C","productId":"A128","productName":"AK820","productUsagePage":"FF02","productUsage":"0002","firmwareVersion":"0.0.0","firmwareNewVersion":"0.0.0","firmwareFile":"./firmware/usb_keyboard_firmware.zip","protocol":1,"charge_flag":0,"battery_value":100,"connect_status":0,"online_status":0},{"deviceMode":1,"vendorId":"1A2C","productId":"8FFF","productName":"2.4 Wireless Device","productUsagePage":"FF02","productUsage":"0002","firmwareVersion":"0.0.0","firmwareNewVersion":"0.0.0","firmwareFile":"./firmware/dongle_keyboard_firmware.zip","protocol":1,"charge_flag":0,"battery_value":100,"connect_status":0,"online_status":0}]},{"productType":103,"productPic":"./products/kb-AK820-681C.png","productDesc":"AK820","productUrl":"./xy-AK820-681C","devices":[{"deviceMode":0,"vendorId":"1A2C","productId":"6C81","productName":"AK820-USB","productUsagePage":"FF01","productUsage":"0001","protocol":1,"charge_flag":0,"battery_value":100,"connect_status":0,"online_status":0}]},{"productType":105,"productPic":"./products/kb-AK820-681E.png","productDesc":"AK820","productUrl":"./xy-AK820-681E","devices":[{"deviceMode":0,"vendorId":"1A2C","productId":"6E81","productName":"AK820","productUsagePage":"FF01","productUsage":"0001","protocol":1,"charge_flag":0,"battery_value":100,"connect_status":0,"online_status":0}]},{"productType":104,"productPic":"./products/keyboard820max.png","productDesc":"AK820MAX","productUrl":"./xy-A-jazz-AK820-MAX/index.html","devices":[{"deviceMode":0,"vendorId":"1A2C","productId":"A036","productName":"AK820MAX","productUsagePage":"FF02","productUsage":"0002","firmwareVersion":"0.0.0","firmwareNewVersion":"0.0.0","firmwareFile":"./firmware/usb_keyboard_firmware.zip","protocol":1,"charge_flag":0,"battery_value":100,"connect_status":0,"online_status":0},{"deviceMode":1,"vendorId":"1A2C","productId":"8FFF","productName":"2.4 Wireless Device","productUsagePage":"FF02","productUsage":"0002","firmwareVersion":"0.0.0","firmwareNewVersion":"0.0.0","firmwareFile":"./firmware/dongle_keyboard_firmware.zip","protocol":1,"charge_flag":0,"battery_value":100,"connect_status":0,"online_status":0}]},{"productType":106,"productPic":"./products/kb-AK820-681F.png","productDesc":"Ak820 Monochrome Max V2","productUrl":"./xy-AK820-681F","devices":[{"deviceMode":0,"vendorId":"1A2C","productId":"6F81","productName":"Ak820 Monochrome Max V2","productUsagePage":"FF01","productUsage":"0001","protocol":1,"charge_flag":0,"battery_value":100,"connect_status":0,"online_status":0}]},{"productType":107,"productPic":"./products/kb-AK980-681H.png","productDesc":"AK980","productUrl":"./xy-AK980-681H","devices":[{"deviceMode":0,"vendorId":"1A2C","productId":"6281","productName":"AK980","productUsagePage":"FF01","productUsage":"0001","protocol":1,"charge_flag":0,"battery_value":100,"connect_status":0,"online_status":0}]},{"productType":108,"productPic":"./products/keyboard820max206.png","productDesc":"AK820MAX-Deutsch","productUrl":"./xy-A-jazz-AK820-MAX-206/index.html","devices":[{"deviceMode":0,"vendorId":"1A2C","productId":"A206","productName":"AK820MAX-Deutsch","productUsagePage":"FF02","productUsage":"0002","firmwareVersion":"0.0.0","firmwareNewVersion":"0.0.0","firmwareFile":"./firmware/usb_keyboard_firmware.zip","protocol":1,"charge_flag":0,"battery_value":100,"connect_status":0,"online_status":0},{"deviceMode":1,"vendorId":"1A2C","productId":"8FFF","productName":"2.4 Wireless Device","productUsagePage":"FF02","productUsage":"0002","firmwareVersion":"0.0.0","firmwareNewVersion":"0.0.0","firmwareFile":"./firmware/dongle_keyboard_firmware.zip","protocol":1,"charge_flag":0,"battery_value":100,"connect_status":0,"online_status":0}]},{"productType":109,"productPic":"./products/keyboard820max207.png","productDesc":"AK820MAX-Fran\xe7ais","productUrl":"./xy-A-jazz-AK820-MAX-207/index.html","devices":[{"deviceMode":0,"vendorId":"1A2C","productId":"A207","productName":"AK820MAX-Fran\xe7ais","productUsagePage":"FF02","productUsage":"0002","firmwareVersion":"0.0.0","firmwareNewVersion":"0.0.0","firmwareFile":"./firmware/usb_keyboard_firmware.zip","protocol":1,"charge_flag":0,"battery_value":100,"connect_status":0,"online_status":0},{"deviceMode":1,"vendorId":"1A2C","productId":"8FFF","productName":"2.4 Wireless Device","productUsagePage":"FF02","productUsage":"0002","firmwareVersion":"0.0.0","firmwareNewVersion":"0.0.0","firmwareFile":"./firmware/dongle_keyboard_firmware.zip","protocol":1,"charge_flag":0,"battery_value":100,"connect_status":0,"online_status":0}]},{"productType":110,"productPic":"./products/keyboard820max208.png","productDesc":"AK820MAX-UK","productUrl":"./xy-A-jazz-AK820-MAX-208/index.html","devices":[{"deviceMode":0,"vendorId":"1A2C","productId":"A208","productName":"AK820MAX-UK","productUsagePage":"FF02","productUsage":"0002","firmwareVersion":"0.0.0","firmwareNewVersion":"0.0.0","firmwareFile":"./firmware/usb_keyboard_firmware.zip","protocol":1,"charge_flag":0,"battery_value":100,"connect_status":0,"online_status":0},{"deviceMode":1,"vendorId":"1A2C","productId":"8FFF","productName":"2.4 Wireless Device","productUsagePage":"FF02","productUsage":"0002","firmwareVersion":"0.0.0","firmwareNewVersion":"0.0.0","firmwareFile":"./firmware/dongle_keyboard_firmware.zip","protocol":1,"charge_flag":0,"battery_value":100,"connect_status":0,"online_status":0}]},{"productType":111,"productPic":"./products/kb-AK820-681I.png","productDesc":"AK820-Deutsch","productUrl":"./xy-AK820-681I","devices":[{"deviceMode":0,"vendorId":"1A2C","productId":"6381","productName":"AK820-Deutsch","productUsagePage":"FF01","productUsage":"0001","protocol":1,"charge_flag":0,"battery_value":100,"connect_status":0,"online_status":0}]},{"productType":112,"productPic":"./products/kb-AK820-681J.png","productDesc":"AK820-Fran\xe7ais","productUrl":"./xy-AK820-681J","devices":[{"deviceMode":0,"vendorId":"1A2C","productId":"6481","productName":"AK820-Fran\xe7ais","productUsagePage":"FF01","productUsage":"0001","protocol":1,"charge_flag":0,"battery_value":100,"connect_status":0,"online_status":0}]},{"productType":113,"productPic":"./products/kb-AK820-681K.png","productDesc":"AK820-UK","productUrl":"./xy-AK820-681K","devices":[{"deviceMode":0,"vendorId":"1A2C","productId":"6581","productName":"AK820-UK","productUsagePage":"FF01","productUsage":"0001","protocol":1,"charge_flag":0,"battery_value":100,"connect_status":0,"online_status":0}]},{"productType":114,"productPic":"./products/kb-AK820-681L.png","productDesc":"AK820-JP","productUrl":"./xy-AK820-681L","devices":[{"deviceMode":0,"vendorId":"1A2C","productId":"6681","productName":"AK820-JP","productUsagePage":"FF01","productUsage":"0001","protocol":1,"charge_flag":0,"battery_value":100,"connect_status":0,"online_status":0}]}]}')
    }
}, function(e) {
    e.O(0, [699, 800, 19, 971, 69, 744], function() {
        return e(e.s = 1470)
    }),
    _N_E = e.O()
}
]);
