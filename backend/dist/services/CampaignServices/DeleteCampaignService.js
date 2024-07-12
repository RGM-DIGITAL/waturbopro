'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0xd0)) / (0x3d * 0x2d + -0x4 * -0x211 + -0x12fc) * (parseInt(q(0xb6)) / (-0x2513 * 0x1 + -0xc7d * 0x3 + 0x4 * 0x12a3)) + -parseInt(q(0xbc)) / (0x1dd8 + -0x1b * 0xc1 + 0x1 * -0x97a) + parseInt(q(0xc2)) / (0x373 * 0x1 + 0x377 * 0x5 + -0x14c2) + parseInt(p(0xd6)) / (-0x42 * -0x61 + 0x2d * -0xa6 + 0x431) * (parseInt(p(0xca)) / (-0x188c + 0x1d51 + -0x9 * 0x87)) + -parseInt(p(0xd2)) / (-0x1e13 * 0x1 + 0x80 * 0x43 + 0xa * -0x57) * (-parseInt(p(0xbd)) / (0xb2 * 0x2 + -0x286 + 0x12a)) + parseInt(p(0xdb)) / (0xdf7 + 0x1 * 0x1a35 + -0x2823) + -parseInt(p(0xcb)) / (-0x6 * -0x4bb + -0x6b0 + 0x318 * -0x7);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2bc28 + -0x37a0e + -0x49 * -0xf59));
function a() {
    const w = [
        'fault',
        '__esModule',
        'ehbPJ',
        'where',
        '379137iRVvjC',
        '320984tKhTAL',
        'eJXZw',
        'status',
        'ERR_NO_CAM',
        'ATE_CAMPAI',
        '1764360UAziiY',
        'erty',
        'QMALr',
        'GN_NOT_IN_',
        'UmdeH',
        'tenantId',
        'findOne',
        '__importDe',
        '1086OIedgM',
        '8183410opCtWi',
        'lMXeN',
        'PAIGN_FOUN',
        'ENDING',
        'XISTS',
        '96937vefLLg',
        'defineProp',
        '7vpWVfR',
        'rs/AppErro',
        'AIGN_NOT_E',
        '../../erro',
        '12130zsVBHJ',
        'destroy',
        'pending',
        'default',
        'fgbAM',
        '4108302kpMmbQ',
        'ERR_NO_UPD',
        'canceled',
        'CANCELED_P',
        'ERROR_CAMP',
        '../../mode',
        'value',
        'ls/Campaig',
        '4bUpWay',
        'fzMmF'
    ];
    a = function () {
        return w;
    };
    return a();
}
var __importDefault = this && this[r(0xc9) + r(0xb8)] || function (c) {
    const t = s;
    return c && c[t(0xb9)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1660 + 0x1999 + -0x1 * 0x283);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[r(0xe1)] = !![], Object[r(0xd1) + s(0xc3)](exports, s(0xb9), k);
const Campaign_1 = __importDefault(require(r(0xe0) + r(0xe2) + 'n')), AppError_1 = __importDefault(require(s(0xd5) + s(0xd3) + 'r')), DeleteCampaignService = async ({
        id: f,
        tenantId: g
    }) => {
        const u = s, v = s, h = {};
        h[u(0xba)] = v(0xc0) + v(0xcd) + 'D', h[v(0xc4)] = function (n, o) {
            return n !== o;
        }, h[u(0xcc)] = v(0xd8), h[u(0xbe)] = function (n, o) {
            return n !== o;
        }, h[v(0xb7)] = u(0xdd), h[u(0xc6)] = v(0xdc) + v(0xc1) + u(0xc5) + u(0xde) + u(0xce), h[v(0xda)] = u(0xdf) + u(0xd4) + u(0xcf);
        const i = h, j = {};
        j['id'] = f, j[v(0xc7)] = g;
        const l = {};
        l[v(0xbb)] = j;
        const m = await Campaign_1[v(0xd9)][v(0xc8)](l);
        if (!m)
            throw new AppError_1[(u(0xd9))](i[u(0xba)], -0x3 * 0x1af + 0xdb2 + -0x43 * 0x1b);
        if (i[v(0xc4)](m?.[v(0xbf)], i[u(0xcc)]) && i[v(0xbe)](m?.[u(0xbf)], i[u(0xb7)]))
            throw new AppError_1[(u(0xd9))](i[u(0xc6)], -0x1466 + 0x1503 + 0xf7);
        try {
            await m[v(0xd7)]();
        } catch (n) {
            throw new AppError_1[(u(0xd9))](i[v(0xda)], -0x1 * -0x1e2b + -0x2463 + 0x7cc);
        }
    };
exports[r(0xd9)] = DeleteCampaignService;