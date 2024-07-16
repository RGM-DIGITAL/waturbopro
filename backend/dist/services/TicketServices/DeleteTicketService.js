'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x167)) / (-0x95 * -0x3b + -0x184e + 0x18 * -0x6b) + parseInt(o(0x170)) / (-0x2481 + 0x7f * -0x1 + 0x2502 * 0x1) * (-parseInt(o(0x173)) / (0x13ab + -0x1a86 + -0x6de * -0x1)) + -parseInt(p(0x169)) / (0x1545 + 0x1fd6 + 0x3517 * -0x1) * (-parseInt(p(0x178)) / (0x23af + -0x1561 + -0x9f * 0x17)) + -parseInt(o(0x179)) / (0x11d4 + 0x3 * -0xab9 + 0xe5d) + -parseInt(p(0x16a)) / (0x34 * 0x95 + 0x1 * 0x198b + 0x14 * -0x2ca) * (parseInt(p(0x16c)) / (-0x1 * -0x1329 + -0x3 * 0x12d + -0xf9a)) + -parseInt(o(0x168)) / (0x11e1 + 0x1 * -0x1a1b + 0x843) + parseInt(p(0x15f)) / (-0x2370 + -0x20e7 * -0x1 + 0x293);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x41001 + 0x32d45 + 0x1 * 0x7bfc1));
var __importDefault = this && this[q(0x176) + r(0x164)] || function (c) {
    const s = q;
    return c && c[s(0x165)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x17 * 0x9f + -0x1 * 0x130a + 0x61c);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const v = [
        'vice',
        'gTicketSer',
        '52IDXcfe',
        'Daiqp',
        './ShowTick',
        '99318KrDDVn',
        'default',
        'userId',
        '__importDe',
        'defineProp',
        '1712635pJEsCr',
        '2641206fIASEk',
        'rs/AppErro',
        'cPMcY',
        'ticketId',
        'delete',
        'etService',
        '../../erro',
        '35591360TEpQuv',
        './CreateLo',
        'ERR_NO_TIC',
        'value',
        'type',
        'fault',
        '__esModule',
        'KET_FOUND',
        '695984UCUCtl',
        '8068707ILaYgZ',
        '4eAUfkq',
        '50113QOaQlv',
        'erty',
        '624GxreYv',
        'tenantId'
    ];
    a = function () {
        return v;
    };
    return a();
}
const k = {};
k[r(0x162)] = !![], Object[q(0x177) + r(0x16b)](exports, r(0x165), k);
const AppError_1 = __importDefault(require(r(0x15e) + q(0x17a) + 'r')), ShowTicketService_1 = __importDefault(require(r(0x172) + q(0x15d))), CreateLogTicketService_1 = __importDefault(require(q(0x160) + r(0x16f) + r(0x16e))), DeleteTicketService = async ({
        id: f,
        tenantId: g,
        userId: h
    }) => {
        const t = q, u = r, i = {};
        i[t(0x171)] = t(0x161) + u(0x166), i[t(0x17b)] = t(0x15c);
        const j = i, l = {};
        l['id'] = f, l[t(0x16d)] = g;
        const m = await (-0x1cba + -0x1b0d + 0x37c7, ShowTicketService_1[t(0x174)])(l);
        if (!m)
            throw new AppError_1[(u(0x174))](j[t(0x171)], -0x3 * -0x7c0 + 0x86f + -0x1e1b);
        const n = {};
        return n[u(0x175)] = h, n[t(0x15b)] = m['id'], n[t(0x163)] = j[t(0x17b)], await (0x2084 * -0x1 + 0xc1a + 0x146a, CreateLogTicketService_1[u(0x174)])(n), m;
    };
exports[r(0x174)] = DeleteTicketService;