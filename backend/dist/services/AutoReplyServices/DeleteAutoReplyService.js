'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xd5 * 0x6 + 0x1670 + -0xf95);
        let h = e[f];
        return h;
    }, b(c, d);
}
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(s(0x1ef)) / (-0xc * -0xd9 + -0x239f * 0x1 + 0x1974) + parseInt(t(0x1f0)) / (0x1 * -0x1081 + -0x7 * 0x25e + -0x1 * -0x2115) * (parseInt(t(0x1e0)) / (-0x1c * -0x11 + -0x1766 + 0x9 * 0x265)) + -parseInt(t(0x1dd)) / (0x18f * 0x16 + 0x6d * -0x17 + 0x3 * -0x829) + parseInt(t(0x1f8)) / (-0x382 * -0x1 + 0xd9 * -0xb + -0x2 * -0x2eb) * (-parseInt(s(0x1e9)) / (-0x15e4 + 0x129d + 0xa9 * 0x5)) + parseInt(t(0x1e6)) / (-0x1409 + -0x26c8 * -0x1 + -0x95c * 0x2) * (parseInt(s(0x1ea)) / (0x28e + -0x66 * 0x28 + 0xd6a)) + -parseInt(t(0x1ec)) / (-0xe5e + -0x1af5 * 0x1 + 0x295c * 0x1) + parseInt(s(0x1f7)) / (0x4 * 0x63c + 0x1 * 0x1831 + 0x3 * -0x105d) * (parseInt(t(0x1f9)) / (-0x7f * 0x49 + 0x12ed + 0x99 * 0x1d));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x33a47 + 0x4 * -0x119a + 0x67389));
var __importDefault = this && this[u(0x1eb) + u(0x1ee)] || function (c) {
    const w = v;
    return c && c[w(0x1de)] ? c : { 'default': c };
};
const k = {};
function a() {
    const z = [
        'destroy',
        '80AUyxEv',
        '1455YIWlvy',
        '265177OBiGvj',
        'erty',
        'XuLKb',
        'ERR_NO_AUT',
        'tenantId',
        'autoReplyI',
        'where',
        'UND',
        '132376fWYLTv',
        '__esModule',
        '../../erro',
        '315ZZKJpx',
        'rs/AppErro',
        'IONED_TICK',
        'ls/AutoRep',
        '../../mode',
        'O_REPLY_FO',
        '7YHWioa',
        'yoWGq',
        'EPLY_RELAT',
        '2154ffHgnj',
        '1171728JxLdEP',
        '__importDe',
        '2092122UrwwPD',
        'defineProp',
        'fault',
        '39504TAUoPF',
        '5018TibGpn',
        'ls/Ticket',
        'value',
        'findOne',
        'default',
        'ERR_AUTO_R'
    ];
    a = function () {
        return z;
    };
    return a();
}
k[v(0x1f2)] = !![], Object[v(0x1ed) + v(0x1fa)](exports, v(0x1de), k);
const AutoReply_1 = __importDefault(require(v(0x1e4) + u(0x1e3) + 'ly')), AppError_1 = __importDefault(require(u(0x1df) + u(0x1e1) + 'r')), Ticket_1 = __importDefault(require(v(0x1e4) + u(0x1f1))), DeleteAutoReplyService = async ({
        id: h,
        tenantId: i
    }) => {
        const x = u, y = v, j = {};
        j[x(0x1fb)] = y(0x1f5) + x(0x1e8) + x(0x1e2) + 'ET', j[y(0x1e7)] = y(0x1fc) + x(0x1e5) + x(0x200);
        const l = j, m = {};
        m['id'] = h, m[y(0x1fd)] = i;
        const n = {};
        n[x(0x1ff)] = m;
        const o = await AutoReply_1[x(0x1f4)][x(0x1f3)](n), p = {};
        p[x(0x1fe) + 'd'] = h;
        const q = {};
        q[x(0x1ff)] = p;
        const r = await Ticket_1[y(0x1f4)][y(0x1f3)](q);
        if (r)
            throw new AppError_1[(x(0x1f4))](l[y(0x1fb)], 0x1 * -0x7b1 + 0x1fc * -0x1 + 0xb41);
        if (!o)
            throw new AppError_1[(x(0x1f4))](l[x(0x1e7)], 0x2198 + 0x2401 + -0x4405);
        await o[y(0x1f6)]();
    };
exports[u(0x1f4)] = DeleteAutoReplyService;