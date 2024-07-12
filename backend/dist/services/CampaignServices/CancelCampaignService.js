'use strict';
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(u(0x156)) / (-0x77d + -0x2674 + 0x2df2 * 0x1) * (parseInt(v(0x153)) / (-0x2148 + -0x7 * 0x17e + 0x2bbc)) + -parseInt(v(0x154)) / (-0x1 * 0x1157 + 0x1c97 + -0xb3d) * (-parseInt(v(0x161)) / (0x1a2f + 0xf34 + -0x59 * 0x77)) + -parseInt(v(0x166)) / (0x112e + 0x1894 * 0x1 + -0x29bd) + -parseInt(u(0x168)) / (-0x329 * 0x3 + 0x2f * -0x13 + 0x1 * 0xcfe) + -parseInt(u(0x155)) / (-0x2564 + 0x238d + 0x2 * 0xef) + -parseInt(v(0x16d)) / (0x75a + 0xb4 + -0x4f * 0x1a) + -parseInt(u(0x15b)) / (-0x677 * 0x5 + 0x2 * -0xd51 + 0x3afe) * (-parseInt(v(0x160)) / (-0x4a1 + -0xc * -0xb7 + -0x3e9));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x6 * -0x1653c + -0x40dab * -0x1 + -0x3cb * -0x42b));
var __importDefault = this && this[w(0x157) + x(0x13c)] || function (c) {
    const y = x;
    return c && c[y(0x13b)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x20a1 + 0x1a44 + 0x797);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[w(0x152)] = !![], Object[x(0x143) + x(0x170)](exports, w(0x13b), k);
const bull_1 = __importDefault(require(w(0x16c))), Campaign_1 = __importDefault(require(w(0x169) + w(0x158) + 'n')), AppError_1 = __importDefault(require(w(0x15e) + x(0x16b) + 'r')), CampaignContacts_1 = __importDefault(require(w(0x169) + x(0x158) + w(0x13f))), CancelCampaignService = async ({
        campaignId: i,
        tenantId: j
    }) => {
        const z = w, A = x, l = {
                'sPvAF': z(0x162) + z(0x15d) + z(0x13a),
                'QYJZM': z(0x165) + z(0x144) + z(0x150),
                'okgYV': function (p, q) {
                    return p(q);
                },
                'nKeZj': z(0x16f)
            }, m = {};
        m['id'] = i, m[z(0x14d)] = j;
        const n = {};
        n[z(0x145)] = m;
        const o = await Campaign_1[z(0x13d)][z(0x171)](n);
        if (!o)
            throw new AppError_1[(A(0x13d))](l[A(0x16a)], -0x1d89 * -0x1 + 0x1d * 0xa + -0x1d17);
        try {
            await (-0x173b + 0x6 * -0xad + 0x1b49, bull_1[A(0x13d)])(l[z(0x141)], {
                'redis': {
                    'port': l[A(0x148)](Number, process[A(0x159)][z(0x14a) + z(0x167)]),
                    'host': process[z(0x159)][z(0x16e) + A(0x140)],
                    'db': l[z(0x148)](Number, process[A(0x159)][z(0x142) + A(0x15c)]) || -0x12 * 0x8b + 0x1a0 + 0x828,
                    'password': process[z(0x159)][A(0x14a) + z(0x14c)] || undefined
                }
            })[z(0x14f)](A(0x164) + '_' + o['id'] + '*');
            const p = {};
            p[z(0x15f)] = null, p[z(0x163)] = null, p[z(0x14b)] = null, p[A(0x14e)] = 0x0, p[z(0x13e)] = null;
            const q = {};
            q[A(0x151)] = o['id'], q[A(0x13e)] = null;
            const r = {};
            r[z(0x145)] = q, await CampaignContacts_1[A(0x13d)][A(0x146)](p, r);
            const s = {};
            s[z(0x15a)] = l[z(0x149)], await o[A(0x146)](s);
        } catch (t) {
            throw new AppError_1[(A(0x13d))](z(0x147) + t, 0x1 * -0x1f45 + 0xea0 + -0x1239 * -0x1);
        }
    };
exports[w(0x13d)] = CancelCampaignService;
function a() {
    const B = [
        '438812HsYWxf',
        '3840639KUpxsM',
        '1070391MpOZCL',
        '4HbnXRb',
        '__importDe',
        'ls/Campaig',
        'env',
        'status',
        '7686WPwnng',
        'B_SESSION',
        'AIGN_NOT_E',
        '../../erro',
        'body',
        '10130rVAWnA',
        '4ykAMrE',
        'ERROR_CAMP',
        'mediaName',
        'campaginId',
        'SendMessag',
        '6810725RegsKB',
        'ORT',
        '2868732qndnSF',
        '../../mode',
        'sPvAF',
        'rs/AppErro',
        'bull',
        '2214168FXPvQS',
        'IO_REDIS_S',
        'canceled',
        'erty',
        'findOne',
        'XISTS',
        '__esModule',
        'fault',
        'default',
        'messageId',
        'nContacts',
        'ERVER',
        'QYJZM',
        'IO_REDIS_D',
        'defineProp',
        'eWhatsappC',
        'where',
        'update',
        'ERROR:\x20',
        'okgYV',
        'nKeZj',
        'IO_REDIS_P',
        'timestamp',
        'ASSWORD',
        'tenantId',
        'ack',
        'removeJobs',
        'ampaign',
        'campaignId',
        'value'
    ];
    a = function () {
        return B;
    };
    return a();
}