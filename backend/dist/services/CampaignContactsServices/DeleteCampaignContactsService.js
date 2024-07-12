'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0x8d)) / (-0x1b81 + -0x23c7 + 0x3f49) + parseInt(u(0x92)) / (-0x1859 * -0x1 + 0x590 * -0x3 + -0x7a7 * 0x1) * (parseInt(t(0x8b)) / (-0x3 * -0xa9a + -0x54f + -0x1a7c)) + -parseInt(u(0x94)) / (0x2e3 + 0x2d9 + -0x5b8) + -parseInt(t(0x8c)) / (0xef + 0x1709 + -0x17f3 * 0x1) + -parseInt(t(0x8f)) / (0x116 + -0xd49 * 0x2 + 0x1982) + parseInt(u(0x7f)) / (0x19f1 + -0x2af * -0x1 + 0x1c99 * -0x1) + parseInt(t(0x91)) / (0x3d7 + -0x3 * 0xb2b + 0x9e6 * 0x3);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x56aef + 0x6e21e + 0x2ea83 * 0x1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1ee6 + 0xd8 + -0xa2e * -0x3);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[v(0x82) + w(0x99)] || function (c) {
    const x = w;
    return c && c[x(0x84)] ? c : { 'default': c };
};
function a() {
    const A = [
        'ERR_CAMPAI',
        '991152ZeVqKZ',
        '../../mode',
        '2179544bJdPHr',
        '822442fuHVTn',
        'ACTS_NOT_F',
        '1383640TXtpwI',
        'model',
        'erty',
        'PAIGN_CONT',
        'GN_CONTACT',
        'fault',
        'nuXaA',
        'OUND',
        'ERR_NO_CAM',
        'findOne',
        'default',
        'contactId',
        'ls/Campaig',
        'where',
        'tenantId',
        'destroy',
        'include',
        '2842049JbeRNd',
        'nContacts',
        'value',
        '__importDe',
        'defineProp',
        '__esModule',
        'rs/AppErro',
        'required',
        'CQvOS',
        'campaignId',
        '../../erro',
        'S_NOT_EXIS',
        '3jwACPe',
        '310785BTGzRN',
        '229258SSBuqX'
    ];
    a = function () {
        return A;
    };
    return a();
}
const k = {};
k[w(0x81)] = !![], Object[w(0x83) + v(0x96)](exports, v(0x84), k);
const CampaignContacts_1 = __importDefault(require(v(0x90) + v(0xa0) + v(0x80))), AppError_1 = __importDefault(require(v(0x89) + v(0x85) + 'r')), Campaign_1 = __importDefault(require(v(0x90) + v(0xa0) + 'n')), DeleteCampaignContactsService = async ({
        campaignId: h,
        contactId: i,
        tenantId: j
    }) => {
        const y = v, z = v, l = {};
        l[y(0x87)] = y(0x9c) + z(0x97) + y(0x93) + y(0x9b), l[z(0x9a)] = z(0x8e) + z(0x98) + z(0x8a) + 'TS';
        const m = l, n = {};
        n[y(0x88)] = h, n[y(0x9f)] = i;
        const o = {};
        o['id'] = h, o[y(0x7c)] = j;
        const p = {};
        p[z(0x95)] = Campaign_1[z(0x9e)], p[z(0x86)] = !![], p[y(0xa1)] = o;
        const q = {};
        q[z(0xa1)] = n, q[y(0x7e)] = [p];
        const r = await CampaignContacts_1[z(0x9e)][y(0x9d)](q);
        if (!r)
            throw new AppError_1[(z(0x9e))](m[z(0x87)], -0x8 * 0x6 + -0x4 * 0x2e2 + 0xd4c);
        try {
            await r[z(0x7d)]();
        } catch (s) {
            throw new AppError_1[(z(0x9e))](m[z(0x9a)], 0x133b + 0x11 * 0x1f4 + -0x32db);
        }
    };
exports[v(0x9e)] = DeleteCampaignContactsService;