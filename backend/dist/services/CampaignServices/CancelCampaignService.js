'use strict';
function a() {
    const B = [
        'AIGN_NOT_E',
        'fault',
        'removeJobs',
        'update',
        '1881730EuIASX',
        'tenantId',
        '194382mYyLhG',
        'body',
        'ERVER',
        'rs/AppErro',
        'ASSWORD',
        '14dNMOml',
        '2LXoKQC',
        'SendMessag',
        'NPeaQ',
        'XISTS',
        'IO_REDIS_P',
        'ack',
        '259632LZLMGG',
        'default',
        'findOne',
        'aaSXi',
        'ERROR_CAMP',
        '3547512eBXOdX',
        'status',
        'IO_REDIS_D',
        '278921CvxNhH',
        'where',
        '5446540LQMnJp',
        'bull',
        '1177548yYJLwb',
        'defineProp',
        'gBYzJ',
        'nContacts',
        'eWhatsappC',
        'env',
        'messageId',
        'ORT',
        'timestamp',
        'mediaName',
        'value',
        'uKBDU',
        'ls/Campaig',
        'canceled',
        '12tzomls',
        'B_SESSION',
        'erty',
        'campaginId',
        '../../erro',
        'ERROR:\x20',
        'ampaign',
        'iqUMB',
        'campaignId',
        'IO_REDIS_S',
        '../../mode',
        '__importDe',
        '__esModule'
    ];
    a = function () {
        return B;
    };
    return a();
}
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(u(0xe1)) / (0x14bb + -0xc * -0x254 + -0x1855 * 0x2) * (parseInt(v(0xd3)) / (0x2 * -0xeab + 0x1 * -0xd89 + -0x3 * -0xe4b)) + parseInt(v(0xcd)) / (0x12d + -0x1da6 + 0xe3e * 0x2) * (-parseInt(v(0xf3)) / (0x1 * 0xae5 + 0x2 * -0x66e + 0xd * 0x27)) + -parseInt(u(0xcb)) / (-0x1 * 0x31 + -0x16da + 0x1710) + -parseInt(u(0xe5)) / (-0x1904 + 0xc5 * 0x21 + 0xd * -0x7) * (-parseInt(u(0xd2)) / (-0x26f8 + 0xa63 * 0x1 + 0x1c9c)) + parseInt(v(0xd9)) / (0x1 * 0x1fb5 + 0xa * 0x9b + 0x2e7 * -0xd) + -parseInt(u(0xde)) / (-0x168a + -0x11cf * 0x1 + 0x2862) + parseInt(v(0xe3)) / (-0xf0e + 0x125a + 0x3 * -0x116);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x9c49 * -0xb + 0x3cdf * -0x1 + -0x1 * 0x22643));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x6b + -0xfe3 + 0x103a);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[w(0xc5) + x(0xc8)] || function (c) {
    const y = w;
    return c && c[y(0xc6)] ? c : { 'default': c };
};
const k = {};
k[x(0xef)] = !![], Object[w(0xe6) + w(0xf5)](exports, x(0xc6), k);
const bull_1 = __importDefault(require(x(0xe4))), Campaign_1 = __importDefault(require(x(0xc4) + x(0xf1) + 'n')), AppError_1 = __importDefault(require(w(0xf7) + w(0xd0) + 'r')), CampaignContacts_1 = __importDefault(require(w(0xc4) + w(0xf1) + x(0xe8))), CancelCampaignService = async ({
        campaignId: i,
        tenantId: j
    }) => {
        const z = x, A = w, l = {
                'NPeaQ': z(0xdd) + z(0xc7) + A(0xd6),
                'iqUMB': z(0xd4) + z(0xe9) + z(0xf9),
                'uKBDU': function (p, q) {
                    return p(q);
                },
                'aaSXi': function (p, q) {
                    return p(q);
                },
                'gBYzJ': z(0xf2)
            }, m = {};
        m['id'] = i, m[z(0xcc)] = j;
        const n = {};
        n[A(0xe2)] = m;
        const o = await Campaign_1[A(0xda)][z(0xdb)](n);
        if (!o)
            throw new AppError_1[(z(0xda))](l[z(0xd5)], -0xa83 + -0x7d2 + 0x13e9);
        try {
            await (0xc3a + 0xe4b + -0x49 * 0x5d, bull_1[A(0xda)])(l[z(0xfa)], {
                'redis': {
                    'port': l[A(0xf0)](Number, process[A(0xea)][z(0xd7) + z(0xec)]),
                    'host': process[A(0xea)][z(0xc3) + z(0xcf)],
                    'db': l[A(0xdc)](Number, process[z(0xea)][z(0xe0) + A(0xf4)]) || -0xc20 * -0x3 + -0x269b + 0x23d,
                    'password': process[z(0xea)][A(0xd7) + z(0xd1)] || undefined
                }
            })[z(0xc9)](z(0xf6) + '_' + o['id'] + '*');
            const p = {};
            p[A(0xce)] = null, p[z(0xee)] = null, p[A(0xed)] = null, p[A(0xd8)] = 0x0, p[z(0xeb)] = null;
            const q = {};
            q[A(0xc2)] = o['id'], q[z(0xeb)] = null;
            const r = {};
            r[A(0xe2)] = q, await CampaignContacts_1[A(0xda)][z(0xca)](p, r);
            const s = {};
            s[z(0xdf)] = l[z(0xe7)], await o[A(0xca)](s);
        } catch (t) {
            throw new AppError_1[(A(0xda))](z(0xf8) + t, 0x3ae + -0x248d * -0x1 + 0x26a7 * -0x1);
        }
    };
exports[w(0xda)] = CancelCampaignService;