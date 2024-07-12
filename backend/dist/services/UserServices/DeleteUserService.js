'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0xf0)) / (-0x1880 + 0x1445 * -0x1 + 0x2cc6 * 0x1) * (parseInt(s(0xeb)) / (0x28 * 0xe + 0x1889 + -0x1ab7)) + parseInt(r(0xce)) / (-0x3 * -0x1f6 + -0x24dd * -0x1 + 0x446 * -0xa) + -parseInt(s(0xe8)) / (-0x15 * 0x15c + 0xa96 + 0xb1 * 0x1a) + parseInt(s(0xf5)) / (-0x1acb * 0x1 + -0x9 * -0x12f + 0x1029) * (-parseInt(r(0xd1)) / (0x11c1 + -0xced + -0x4ce)) + parseInt(s(0xf2)) / (0x207b + -0x1fa * -0x3 + -0x2662) * (-parseInt(r(0xda)) / (-0x881 + -0x1 * 0xbc4 + 0x1 * 0x144d)) + -parseInt(s(0xf4)) / (-0x3e5 * 0x1 + -0x87c + 0xc6a) * (-parseInt(s(0xe4)) / (-0x30 * 0x3f + 0x1 * 0xb6c + 0x6e)) + -parseInt(r(0xdf)) / (0x1f4e + -0x48f * 0x5 + 0x2 * -0x43c) * (-parseInt(r(0xde)) / (-0x1dca + -0x1d07 + -0x139f * -0x3));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x582c3 + -0xb6f96 + 0x16f00a));
var __importDefault = this && this[t(0xf1) + u(0xdb)] || function (c) {
    const v = u;
    return c && c[v(0xcf)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1a * -0x4a + -0x4af + 0xcfe);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[u(0xe2)] = !![], Object[t(0xcc) + u(0xe3)](exports, t(0xcf), k);
const User_1 = __importDefault(require(t(0xdc) + t(0xd5))), AppError_1 = __importDefault(require(u(0xd7) + t(0xd9) + 'r')), UpdateDeletedUserOpenTicketsStatus_1 = __importDefault(require(t(0xe5) + t(0xcd) + t(0xdd) + t(0xf3) + t(0xec))), DeleteUserService = async (f, g, h) => {
        const w = u, x = u, i = {};
        i[w(0xcb)] = function (p, q) {
            return p !== q;
        }, i[w(0xe7)] = x(0xe0) + x(0xd8), i[x(0xe6)] = x(0xe1), i[x(0xee)] = x(0xd3), i[x(0xd4)] = function (p, q) {
            return p > q;
        };
        const j = i, l = {};
        l['id'] = f, l[x(0xef)] = g;
        const m = {};
        m[x(0xea)] = l;
        const n = await User_1[x(0xd2)][x(0xe9)](m);
        if (!n || j[w(0xcb)](g, n[x(0xef)]))
            throw new AppError_1[(w(0xd2))](j[x(0xe7)], 0x2272 + -0xab6 + -0x1628);
        const o = await n[w(0xd6)](j[w(0xe6)], {
            'where': {
                'status': j[w(0xee)],
                'tenantId': g
            }
        });
        j[x(0xd4)](o[x(0xed)], -0x1 * -0xe03 + 0x2bb * -0xd + 0x157c) && (0x146f * -0x1 + 0x2 * -0x7be + 0x23eb, UpdateDeletedUserOpenTicketsStatus_1[w(0xd2)])(o, g, h), await n[x(0xd0)]();
    };
function a() {
    const y = [
        '5302QByKGK',
        'ERR_NO_USE',
        'tickets',
        'value',
        'erty',
        '10utbcnO',
        '../../help',
        'fgLXj',
        'JQteG',
        '1081552fmaoTN',
        'findOne',
        'where',
        '556MHSUYg',
        'tsStatus',
        'length',
        'pmYLz',
        'tenantId',
        '599RdVoLx',
        '__importDe',
        '287931vitMkd',
        'rOpenTicke',
        '1893609KqRxXl',
        '1030ZasGId',
        'IPOdU',
        'defineProp',
        'ers/Update',
        '351195bRuumJ',
        '__esModule',
        'destroy',
        '19302FAPlvq',
        'default',
        'open',
        'oarhG',
        'ls/User',
        '$get',
        '../../erro',
        'R_FOUND',
        'rs/AppErro',
        '152otxkWD',
        'fault',
        '../../mode',
        'DeletedUse',
        '40164wbbblh'
    ];
    a = function () {
        return y;
    };
    return a();
}
exports[t(0xd2)] = DeleteUserService;