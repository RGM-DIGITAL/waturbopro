'use strict';
function a() {
    const y = [
        '2Ppqeqg',
        'length',
        'LEDXx',
        '1631548ueSyRJ',
        'where',
        '471522BFoqtI',
        '../../mode',
        'UoCus',
        '779247mCIOYI',
        'R_FOUND',
        'qtQdy',
        'value',
        'rOpenTicke',
        '3305979wLyQnH',
        'destroy',
        'tenantId',
        '16oTPVDp',
        'defineProp',
        '../../help',
        'DeletedUse',
        'Mhqut',
        '__esModule',
        'tickets',
        'findOne',
        '3189216jPVreU',
        '2166975BJImcb',
        'fault',
        '../../erro',
        'erty',
        'Gxmfa',
        'ls/User',
        '__importDe',
        '413186kVcttQ',
        'default',
        'open',
        'ERR_NO_USE',
        '$get',
        'tsStatus',
        'rs/AppErro',
        'ers/Update'
    ];
    a = function () {
        return y;
    };
    return a();
}
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x1ad)) / (-0x21d * 0xf + -0xef2 + 0x1753 * 0x2) * (-parseInt(s(0x1a5)) / (-0x1c * 0xc7 + -0x223 * 0xe + 0x33b0)) + -parseInt(s(0x1b2)) / (-0x59 * -0x2d + -0x7ed * -0x1 + -0x178f) + parseInt(s(0x1b0)) / (-0xd24 + 0x220c + -0xbf * 0x1c) + parseInt(s(0x19e)) / (0x1ade + -0x13 * -0x38 + -0x1 * 0x1f01) + -parseInt(s(0x19d)) / (0x244c + -0x235a + -0xec) + -parseInt(r(0x1b5)) / (0x1 * 0x175d + 0xeb3 + -0xd * 0x2ed) + parseInt(r(0x1bd)) / (-0x1 * 0x1b4 + -0x1 * 0xa27 + -0x11 * -0xb3) * (parseInt(r(0x1ba)) / (0x1 * 0x43 + -0x2454 + 0x241a));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xbc6 * 0xac + 0xa1d * 0x57 + 0xa0214));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x253d * -0x1 + 0x16 * -0x110 + -0x1 * 0xc41);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[t(0x1a4) + u(0x19f)] || function (c) {
    const v = t;
    return c && c[v(0x1c2)] ? c : { 'default': c };
};
const k = {};
k[t(0x1b8)] = !![], Object[u(0x1be) + t(0x1a1)](exports, u(0x1c2), k);
const User_1 = __importDefault(require(u(0x1b3) + u(0x1a3))), AppError_1 = __importDefault(require(t(0x1a0) + u(0x1ab) + 'r')), UpdateDeletedUserOpenTicketsStatus_1 = __importDefault(require(u(0x1bf) + u(0x1ac) + t(0x1c0) + u(0x1b9) + t(0x1aa))), DeleteUserService = async (f, g, h) => {
        const w = t, x = u, i = {};
        i[w(0x1b4)] = function (p, q) {
            return p !== q;
        }, i[x(0x1c1)] = w(0x1a8) + w(0x1b6), i[w(0x1b7)] = w(0x1c3), i[x(0x1af)] = x(0x1a7), i[x(0x1a2)] = function (p, q) {
            return p > q;
        };
        const j = i, l = {};
        l['id'] = f, l[x(0x1bc)] = g;
        const m = {};
        m[w(0x1b1)] = l;
        const n = await User_1[x(0x1a6)][x(0x19c)](m);
        if (!n || j[w(0x1b4)](g, n[w(0x1bc)]))
            throw new AppError_1[(w(0x1a6))](j[x(0x1c1)], 0x98f * 0x4 + 0x63 * -0x21 + -0x7f7 * 0x3);
        const o = await n[x(0x1a9)](j[w(0x1b7)], {
            'where': {
                'status': j[x(0x1af)],
                'tenantId': g
            }
        });
        j[w(0x1a2)](o[x(0x1ae)], 0x1 * 0xd37 + -0x9d9 + -0x35e) && (0x1 * -0x1b + -0x1486 + 0x14a1 * 0x1, UpdateDeletedUserOpenTicketsStatus_1[x(0x1a6)])(o, g, h), await n[x(0x1bb)]();
    };
exports[u(0x1a6)] = DeleteUserService;