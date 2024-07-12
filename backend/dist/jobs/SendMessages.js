'use strict';
const p = b, q = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x15 * -0x113 + 0x25af + -0x3b24);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(n(0x11e)) / (-0x15 * -0x1c9 + -0x181a + 0x6 * -0x23b) + -parseInt(o(0x120)) / (-0xd06 * -0x1 + 0x1cce * 0x1 + -0x29d2) + -parseInt(n(0x124)) / (-0x19b + -0x15fb + 0x1799) * (parseInt(o(0x12b)) / (-0x131a + -0x2db + 0x15f9)) + parseInt(n(0x12c)) / (-0x26ee + -0x1ef9 + 0x45ec) + parseInt(n(0x130)) / (-0x1 * 0x1fd4 + -0x241c + 0x43f6 * 0x1) + parseInt(o(0x12e)) / (0x1b53 + 0x1178 + -0x8f4 * 0x5) + parseInt(n(0x13c)) / (-0x829 * -0x3 + -0xe5 * 0x21 + 0x512) * (parseInt(o(0x125)) / (-0x1 * 0x23f9 + -0x897 + 0x2c99));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x692d6 + 0x53275 * 0x1 + 0x53ff7));
function a() {
    const u = [
        'getWbot',
        'logger',
        'defineProp',
        '../libs/wb',
        '../utils/l',
        'essagesSys',
        '\x20messages',
        'error',
        'eBaileys',
        '../service',
        'value',
        '233176VvNMHz',
        'Error\x20send',
        'leys',
        'UjkkJ',
        'default',
        '41472hjeMqc',
        'temWbotBai',
        '361706QSEdtf',
        'ot-baileys',
        '__importDe',
        's/WbotServ',
        '3svaYSG',
        '99bVcgYG',
        'fault',
        '__esModule',
        'ices/SendM',
        'sendMessag',
        'ogger',
        '2008796epgCZY',
        '1754980GiOnqv',
        'erty',
        '773577JZyYwf',
        'message',
        '679812ucznCv'
    ];
    a = function () {
        return u;
    };
    return a();
}
var __importDefault = this && this[p(0x122) + q(0x126)] || function (c) {
    const r = p;
    return c && c[r(0x127)] ? c : { 'default': c };
};
const k = {};
k[q(0x13b)] = !![], Object[q(0x133) + q(0x12d)](exports, q(0x127), k), exports[q(0x129) + q(0x139)] = void (0x15e8 + -0x2 * -0x1127 + -0x3836);
const wbot_baileys_1 = require(p(0x134) + p(0x121)), SendMessagesSystemWbotBaileys_1 = __importDefault(require(q(0x13a) + q(0x123) + q(0x128) + q(0x136) + q(0x11f) + p(0x11b))), logger_1 = require(p(0x135) + p(0x12a)), sendMessageBaileys = async (e, f, g = undefined) => {
        const s = q, t = q, h = {};
        h[s(0x11c)] = s(0x11a) + t(0x137);
        const i = h;
        try {
            const j = (0x2434 + 0x1a06 * 0x1 + -0x3e3a, wbot_baileys_1[s(0x131)])(e);
            await (-0x13fb + 0x39 * 0x19 + 0xe6a, SendMessagesSystemWbotBaileys_1[s(0x11d)])(j, f, g);
        } catch (l) {
            const m = {};
            m[s(0x12f)] = i[t(0x11c)], m[s(0x138)] = l, logger_1[t(0x132)][s(0x138)](m);
            throw new Error(l);
        }
    };
exports[q(0x129) + q(0x139)] = sendMessageBaileys;