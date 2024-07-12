'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x1bb)) / (0x3 * -0x9fd + 0xce5 + 0x1113 * 0x1) + -parseInt(p(0x1c3)) / (0x2 * -0xe08 + 0x1983 + -0x1 * -0x28f) * (parseInt(o(0x1af)) / (0x1af * -0x6 + -0x32 * -0xe + 0x761 * 0x1)) + -parseInt(p(0x1b2)) / (-0x14 * 0xfc + 0x28c + -0x7a * -0x24) * (-parseInt(p(0x1b6)) / (-0x43 * -0x27 + -0x21c9 + 0x1799)) + parseInt(o(0x1b5)) / (-0x7 * -0x4ff + 0x27f * -0x9 + -0xc7c) + parseInt(p(0x1c7)) / (0x1fd + 0x162b + 0x1 * -0x1821) * (parseInt(p(0x1b3)) / (0x11ed + -0x3 * -0x6cd + 0x39 * -0xac)) + parseInt(p(0x1be)) / (0x215c + 0x5c * -0x33 + -0x1 * 0xeff) * (-parseInt(p(0x1bd)) / (-0x1399 * -0x1 + 0xe31 + 0x8 * -0x438)) + -parseInt(o(0x1b1)) / (-0x25e + -0x4 * 0x20a + 0xa91);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x62ec * -0x2b + 0x1483ef + 0x176d43 * -0x1));
function a() {
    const v = [
        'ls/Group',
        'ERR_GRUOP_',
        '1296615wpxVRp',
        '__importDe',
        '30NIIuZN',
        '1423665rjJtTU',
        'destroy',
        'findOne',
        '../../mode',
        'tenantId',
        '946TPAYUX',
        'defineProp',
        'default',
        'uMrFk',
        '4333ipPOsr',
        'UP_FOUND',
        '__esModule',
        'fault',
        'where',
        'value',
        'hnigG',
        'NO_EXISTS',
        '5793frCpcD',
        '../../erro',
        '16650029EbfbSc',
        '20eXLvMo',
        '872yANtTa',
        'rs/AppErro',
        '5412984AFTULV',
        '1533435fTYHZS',
        'erty',
        'ERR_NO_GRO'
    ];
    a = function () {
        return v;
    };
    return a();
}
var __importDefault = this && this[q(0x1bc) + q(0x1ca)] || function (c) {
    const s = q;
    return c && c[s(0x1c9)] ? c : { 'default': c };
};
const k = {};
k[r(0x1cc)] = !![], Object[r(0x1c4) + q(0x1b7)](exports, q(0x1c9), k);
const AppError_1 = __importDefault(require(r(0x1b0) + r(0x1b4) + 'r')), Group_1 = __importDefault(require(r(0x1c1) + q(0x1b9))), DeleteGroupService = async ({
        id: f,
        tenantId: g
    }) => {
        const t = r, u = q, h = {};
        h[t(0x1c6)] = t(0x1b8) + u(0x1c8), h[t(0x1cd)] = t(0x1ba) + u(0x1ae);
        const i = h, j = {};
        j['id'] = f, j[t(0x1c2)] = g;
        const l = {};
        l[u(0x1cb)] = j;
        const m = await Group_1[u(0x1c5)][u(0x1c0)](l);
        if (!m)
            throw new AppError_1[(u(0x1c5))](i[t(0x1c6)], -0x29a * 0xc + 0x7b9 + 0x1913);
        try {
            await m[u(0x1bf)]();
        } catch (n) {
            throw new AppError_1[(t(0x1c5))](i[u(0x1cd)], -0x264b + -0x21e5 + 0x49c4);
        }
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1f5d * -0x1 + 0x1 * -0x167f + -0x1bc5 * -0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[q(0x1c5)] = DeleteGroupService;