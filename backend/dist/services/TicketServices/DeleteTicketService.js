'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x107 + -0xfd6 + 0x1080);
        let h = e[f];
        return h;
    }, b(c, d);
}
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x1c6)) / (-0x1 * -0x133e + -0xdb7 + -0x2c3 * 0x2) + parseInt(p(0x1cb)) / (0x1bb9 + -0x3 * -0x68e + -0xfcb * 0x3) * (-parseInt(o(0x1c4)) / (0x259f + 0x840 + 0x1 * -0x2ddc)) + parseInt(p(0x1d0)) / (0xe23 * 0x1 + -0x2e * 0x24 + -0x7a7) * (-parseInt(o(0x1be)) / (-0x4 * 0x914 + -0x204 * 0xf + -0x4291 * -0x1)) + -parseInt(p(0x1bc)) / (-0xd * -0xc6 + 0xa1 * -0x4 + -0x784) + -parseInt(p(0x1c3)) / (-0x1be6 + 0x346 * -0xb + -0x3fef * -0x1) * (parseInt(o(0x1c2)) / (0x20 * -0x5d + 0x272 * -0x2 + 0x108c)) + -parseInt(o(0x1c8)) / (0xcdb * 0x1 + 0x22c4 + -0x2f96 * 0x1) + parseInt(p(0x1d1)) / (0xbcc + -0x1cf1 * -0x1 + -0x28b3);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x70ba3 + -0x4d * 0x3feb + 0x16f3f2 * 0x1));
var __importDefault = this && this[q(0x1ba) + r(0x1ca)] || function (c) {
    const s = r;
    return c && c[s(0x1c7)] ? c : { 'default': c };
};
function a() {
    const v = [
        '826808ydTQom',
        '49ZWaaZU',
        '1383PfNIOC',
        'userId',
        '24517OnlvGl',
        '__esModule',
        '11645109XUbvlb',
        'ERR_NO_TIC',
        'fault',
        '2978pSJHoR',
        'KET_FOUND',
        'tenantId',
        'etService',
        './ShowTick',
        '414196srTUeR',
        '52383780UnSdFZ',
        'erty',
        '../../erro',
        'type',
        'vice',
        './CreateLo',
        'ticketId',
        'gTicketSer',
        'vEsOs',
        'value',
        '__importDe',
        'default',
        '5526870mNDxqP',
        'rs/AppErro',
        '45flAOTv',
        'UeYnx',
        'defineProp',
        'delete'
    ];
    a = function () {
        return v;
    };
    return a();
}
const k = {};
k[q(0x1b9)] = !![], Object[r(0x1c0) + q(0x1b1)](exports, q(0x1c7), k);
const AppError_1 = __importDefault(require(r(0x1b2) + r(0x1bd) + 'r')), ShowTicketService_1 = __importDefault(require(r(0x1cf) + r(0x1ce))), CreateLogTicketService_1 = __importDefault(require(r(0x1b5) + q(0x1b7) + q(0x1b4))), DeleteTicketService = async ({
        id: f,
        tenantId: g,
        userId: h
    }) => {
        const t = r, u = q, i = {};
        i[t(0x1b8)] = u(0x1c9) + t(0x1cc), i[t(0x1bf)] = u(0x1c1);
        const j = i, l = {};
        l['id'] = f, l[u(0x1cd)] = g;
        const m = await (-0x15c1 + -0x159e + -0x1 * -0x2b5f, ShowTicketService_1[t(0x1bb)])(l);
        if (!m)
            throw new AppError_1[(t(0x1bb))](j[u(0x1b8)], 0x1a49 * -0x1 + -0x189b + 0x2e * 0x124);
        const n = {};
        return n[t(0x1c5)] = h, n[u(0x1b6)] = m['id'], n[t(0x1b3)] = j[u(0x1bf)], await (-0x2501 + 0x1ca2 * -0x1 + 0x41a3, CreateLogTicketService_1[t(0x1bb)])(n), m;
    };
exports[q(0x1bb)] = DeleteTicketService;