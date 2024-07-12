'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x1ef)) / (0x1013 + -0x1a20 + -0xd * -0xc6) * (-parseInt(m(0x1f9)) / (-0xf99 + -0xbaa + 0x1b45 * 0x1)) + -parseInt(l(0x1f7)) / (-0x1206 + -0x2376 + 0x357f) * (-parseInt(l(0x1f8)) / (-0x6 * -0xb8 + -0xed * 0x5 + 0x5 * 0x11)) + parseInt(l(0x1e9)) / (0x432 + 0x17d4 * 0x1 + 0x1c01 * -0x1) + -parseInt(m(0x1ee)) / (-0x4ca * 0x1 + -0x405 * -0x7 + -0x1753) + parseInt(m(0x1f4)) / (0x11c3 * -0x1 + -0x1a5b * 0x1 + 0x2c25) * (-parseInt(l(0x201)) / (-0x755 + -0x1d9f * -0x1 + -0x1642)) + -parseInt(m(0x1e6)) / (-0xc57 + 0xe54 + -0x4 * 0x7d) + parseInt(m(0x203)) / (0x6b8 * -0x2 + -0x92f * 0x2 + 0x1fd8) * (parseInt(l(0x1e1)) / (-0x1 * 0x1cc9 + -0x1 * 0x24e5 + -0x5 * -0xd25));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x102bfe + 0x1b * -0xcd9f + 0x30c4d6));
var __importDefault = this && this[n(0x1fa) + o(0x1f0)] || function (c) {
    const p = o;
    return c && c[p(0x1de)] ? c : { 'default': c };
};
const k = {};
k[o(0x1e0)] = !![], Object[o(0x1f3) + n(0x1f6)](exports, n(0x1de), k), exports[n(0x1e8) + n(0x1e7)] = void (-0xb40 + 0x20f5 + -0x15b5);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x3 * 0x789 + 0x262b + -0xdb2);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const u = [
        '\x20within\x2010',
        'ERR_FETCH_',
        '9389313yDAUBf',
        'sage',
        'GetWbotMes',
        '6490275vmPwGL',
        'AppError',
        'sages',
        '../errors/',
        './GetTicke',
        '680820HfaEzZ',
        '1dHWuzt',
        'fault',
        'PPlVz',
        'log',
        'defineProp',
        '1064ujeHIf',
        './../model',
        'erty',
        '3iAtCwj',
        '3796612jpXXIY',
        '2605738fWzZqT',
        '__importDe',
        'LUMCC',
        'WAPP_MSG',
        's/Message',
        'findByPk',
        'Cannot\x20fou',
        'tWbotBaile',
        '55032bhvVIw',
        'default',
        '1517710PqIhwv',
        '__esModule',
        'nd\x20message',
        'value',
        '143CzBUKv',
        '0\x20last\x20mes',
        'pijOp'
    ];
    a = function () {
        return u;
    };
    return a();
}
const AppError_1 = __importDefault(require(n(0x1ec) + n(0x1ea))), GetTicketWbotBaileys_1 = __importDefault(require(o(0x1ed) + n(0x200) + 'ys')), Message_1 = __importDefault(require(o(0x1f5) + o(0x1fd))), GetWbotMessage = async (c, d) => {
        const q = n, r = n, e = {
                'LUMCC': function (i) {
                    return i();
                },
                'PPlVz': q(0x1ff) + r(0x1df) + r(0x1e4) + r(0x1e2) + r(0x1eb),
                'pijOp': r(0x1e5) + r(0x1fc)
            }, f = await (-0x1426 + 0x1202 + 0x224, GetTicketWbotBaileys_1[r(0x202)])(c);
        let g = 0x11e5 * -0x1 + -0x636 + 0x182f;
        const h = async () => {
            const s = r, t = r, i = await Message_1[s(0x202)][t(0x1fe)](d);
            return i;
        };
        try {
            const i = await e[r(0x1fb)](h);
            if (!i)
                throw new Error(e[r(0x1f1)]);
            return i;
        } catch (j) {
            console[r(0x1f2)](j);
            throw new AppError_1[(r(0x202))](e[r(0x1e3)]);
        }
    };
exports[n(0x1e8) + n(0x1e7)] = GetWbotMessage, exports[n(0x202)] = exports[o(0x1e8) + n(0x1e7)];