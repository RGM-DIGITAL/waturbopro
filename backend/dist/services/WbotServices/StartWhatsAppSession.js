'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x1a4)) / (-0x14a5 * -0x1 + -0x19a9 * 0x1 + 0x101 * 0x5) * (parseInt(p(0x1dd)) / (0x1b43 + 0xe3e * -0x2 + -0x9 * -0x23)) + parseInt(q(0x1b3)) / (0x1 * -0x1ad2 + 0x1 * -0x2707 + -0x1e * -0x232) + parseInt(q(0x1c0)) / (-0x24a + 0x16 * 0x15e + -0x3 * 0x942) + -parseInt(q(0x1b9)) / (0x6c4 * 0x1 + -0x19fd * 0x1 + 0x133e) * (parseInt(q(0x1df)) / (-0x248c + -0x85 * -0x1b + 0x168b)) + parseInt(p(0x192)) / (0x3 * -0x961 + -0x1b5 * -0x1 + -0x1 * -0x1a75) + parseInt(p(0x1ef)) / (-0x1 * -0xec7 + 0x232e + -0x31ed) * (-parseInt(q(0x19c)) / (0x1c23 + -0xaed + 0x112d * -0x1)) + -parseInt(p(0x1e5)) / (0x1dee * -0x1 + -0xdeb + 0x2be3) * (-parseInt(p(0x1be)) / (-0xb53 + -0x3 * -0xa12 + 0x12 * -0x10c));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2fcd9 * 0x4 + 0x9463d + 0x1 * -0xbf5ab));
var __importDefault = this && this[r(0x1a5) + r(0x1e9)] || function (c) {
    const t = s;
    return c && c[t(0x1e1)] ? c : { 'default': c };
};
const k = {};
k[r(0x1b5)] = !![], Object[r(0x1a8) + s(0x1c4)](exports, r(0x1e1), k), exports[r(0x19e) + s(0x1e0)] = void (0x2 * 0x614 + -0x5 * -0x14c + -0x12a4);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xa3d + -0x9fd + -0xd * -0x1a);
        let h = e[f];
        return h;
    }, b(c, d);
}
const wbotMessageListener_1 = require(r(0x19a) + r(0x1a6) + 'r'), socket_1 = require(r(0x1c7) + s(0x1c2)), logger_1 = require(s(0x1ce) + r(0x1b8)), AppError_1 = __importDefault(require(r(0x19d) + r(0x1da) + 'r')), StartInstaBotSession_1 = require(r(0x1b4) + r(0x198) + r(0x1b0) + r(0x1e6) + s(0x1c9)), StartTbotSession_1 = require(r(0x1aa) + s(0x1f9) + s(0x19b) + 'on'), StartWaba360_1 = require(s(0x1f3) + r(0x1c3) + s(0x1e2)), StartMessengerBot_1 = require(s(0x1c1) + s(0x1f7) + s(0x1ca) + r(0x1bb) + s(0x1d4)), wbot_baileys_1 = require(r(0x1c7) + r(0x1e7) + s(0x1cf)), wbotMonitor_1 = __importDefault(require(s(0x1ac) + s(0x1cd))), StartWhatsAppSession = async e => {
        const u = r, v = r, f = {};
        f[u(0x1ea)] = function (j, l) {
            return j === l;
        }, f[v(0x194)] = u(0x1e2), f[u(0x1d5)] = u(0x197), f[u(0x1c8)] = v(0x1d1), f[u(0x1d8)] = function (j, l) {
            return j === l;
        }, f[v(0x195)] = u(0x1a3), f[u(0x1db)] = function (j, l) {
            return j === l;
        }, f[v(0x1bd)] = u(0x1d2), f[u(0x1f5)] = u(0x1ec), f[v(0x1d3)] = function (j, l) {
            return j === l;
        }, f[v(0x1e3)] = v(0x1bf), f[v(0x1e4)] = function (j, l) {
            return j === l;
        }, f[v(0x1b1)] = v(0x1a7), f[v(0x1af)] = v(0x1f6), f[v(0x1e8)] = u(0x1f0), f[u(0x1f8)] = function (j, l) {
            return j !== l;
        }, f[u(0x199)] = u(0x1d0), f[u(0x1b7)] = function (j, l) {
            return j === l;
        }, f[u(0x19f)] = u(0x1c5), f[v(0x1a9)] = u(0x1b2), f[u(0x196)] = u(0x1d6) + v(0x1d9);
        const g = f, h = {};
        h[v(0x1f2)] = g[u(0x1d5)], await e[v(0x1d1)](h);
        const i = (-0xbb0 + -0x231 + 0xde1, socket_1[u(0x1ae)])();
        i[u(0x1ba)](e[v(0x1cb)] + (u(0x1c6) + v(0x1ed)), {
            'action': g[u(0x1c8)],
            'session': e
        });
        try {
            if (g[v(0x1d8)](e[u(0x193)], g[v(0x195)])) {
                if (g[v(0x1db)](g[u(0x1bd)], g[v(0x1f5)])) {
                    const l = {};
                    return l[u(0x1de)] = j, g && h[u(0x1e1)] ? i : l;
                } else {
                    const l = await (-0xb * -0xbc + -0x2340 + 0x2f * 0x94, wbot_baileys_1[v(0x1f4) + 'et'])(e);
                    await (-0x252 + 0x5 * -0x503 + 0x1b61, wbotMessageListener_1[u(0x1a1) + v(0x1ad) + u(0x1a2)])(l, e), (-0x35 * -0x67 + -0x5e7 + -0x1c * 0x8d, wbotMonitor_1[v(0x1de)])(l, e, e[v(0x1cb)]);
                }
            }
            g[u(0x1d3)](e[u(0x193)], g[v(0x1e3)]) && (g[v(0x1e4)](g[v(0x1b1)], g[v(0x1af)]) ? (-0x1 * 0x2141 + -0x2434 + 0x4575, e[u(0x1cc) + u(0x1f1)])(f) : (-0x198a + 0xfd6 + 0x9b4, StartTbotSession_1[v(0x1bc) + u(0x1ed)])(e)), g[u(0x1d8)](e[u(0x193)], g[v(0x1e8)]) && (g[v(0x1f8)](g[v(0x199)], g[u(0x199)]) ? g[u(0x1ea)](f[v(0x1b6)], g[u(0x194)]) && (0x1d36 + 0x1 * -0x1cb2 + -0x84, i[v(0x1ab) + '60'])(j) : (0x1116 + 0x2ab * 0x3 + -0x1917, StartInstaBotSession_1[u(0x1cc) + v(0x1f1)])(e)), g[v(0x1b7)](e[v(0x193)], g[v(0x19f)]) && (0x1ad + 0x228d + -0x121d * 0x2, StartMessengerBot_1[v(0x1d7) + u(0x1dc)])(e), g[u(0x1d8)](e[v(0x193)], g[v(0x1a9)]) && (g[v(0x1e4)](e[v(0x1b6)], g[u(0x194)]) && (0x1391 + -0x1c59 * -0x1 + -0x2fea, StartWaba360_1[v(0x1ab) + '60'])(e));
        } catch (o) {
            logger_1[u(0x1a0)][u(0x1eb)](u(0x19e) + u(0x1e0) + v(0x1ee) + o);
            throw new AppError_1[(u(0x1de))](g[v(0x196)], 0x1 * -0x1bf2 + 0x625 * -0x3 + 0x2ff5);
        }
    };
exports[r(0x19e) + r(0x1e0)] = StartWhatsAppSession;
function a() {
    const w = [
        '../WABA360',
        'initWASock',
        'XaRfU',
        'dYEKv',
        'erChannelS',
        'CxrLN',
        'vices/Star',
        '1591947dMwqmZ',
        'type',
        'Tngda',
        'XgulR',
        'RuPET',
        'OPENING',
        'amBotServi',
        'LbYZC',
        './wbotMess',
        'tTbotSessi',
        '1737jqeftN',
        '../../erro',
        'StartWhats',
        'OjqwM',
        'logger',
        'wbotMessag',
        'aileys',
        'whatsapp',
        '183hMMgJu',
        '__importDe',
        'ageListene',
        'JHGfI',
        'defineProp',
        'dJsGp',
        '../TbotSer',
        'StartWaba3',
        './wbotMoni',
        'eListenerB',
        'getIO',
        'XjiUQ',
        'ces/StartI',
        'fcKSI',
        'waba',
        '60105ctMBQZ',
        '../Instagr',
        'value',
        'wabaBSP',
        'QWKvN',
        's/logger',
        '66995WkTmZE',
        'emit',
        'artMesseng',
        'StartTbotS',
        'eczsl',
        '21546503bCmGZc',
        'telegram',
        '2357668uTylye',
        '../Messeng',
        '/socket',
        '/StartWaba',
        'erty',
        'messenger',
        ':whatsappS',
        '../../libs',
        'YpcDo',
        'sion',
        'ervices/St',
        'tenantId',
        'StartInsta',
        'tor',
        '../../util',
        'eys',
        'eUmdQ',
        'update',
        'pLKbM',
        'xjaky',
        'erBot',
        'vfRjV',
        'ERR_START_',
        'StartMesse',
        'fRmzA',
        'SESSION',
        'rs/AppErro',
        'fYRCZ',
        'ngerBot',
        '12202IEflBM',
        'default',
        '72jHkYWY',
        'AppSession',
        '__esModule',
        '360',
        'RiXRx',
        'XmBJY',
        '10ZGHIfH',
        'nstaBotSes',
        '/wbot-bail',
        'jSUju',
        'fault',
        'fvzgN',
        'error',
        'FQPsp',
        'ession',
        '\x20|\x20Error:\x20',
        '37768CDZdBq',
        'instagram',
        'BotSession',
        'status'
    ];
    a = function () {
        return w;
    };
    return a();
}