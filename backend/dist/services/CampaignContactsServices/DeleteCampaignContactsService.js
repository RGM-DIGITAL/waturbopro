'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0x1f1)) / (-0x1993 * -0x1 + -0x34 * -0x1e + -0x1faa) * (parseInt(t(0x1d2)) / (-0x19 * 0xbe + 0x63d * -0x2 + -0x1 * -0x1f0a)) + -parseInt(t(0x1e2)) / (-0x18d7 * 0x1 + -0x63b + 0x1f15) * (parseInt(u(0x1d4)) / (-0x5c2 + -0xcbb * -0x1 + -0x6f5)) + parseInt(u(0x1f2)) / (0x3d * 0x4 + -0x1e80 + 0x1d91) + parseInt(u(0x1f5)) / (-0xad2 + -0xb4e + 0x1626) * (parseInt(t(0x1d8)) / (-0xbc1 + 0x1087 + -0x1b * 0x2d)) + parseInt(u(0x1d3)) / (0x1 * -0x9a9 + 0x27b * 0x7 + -0x7ac) * (-parseInt(t(0x1f7)) / (-0x52c * 0x2 + -0x1c05 + 0x1 * 0x2666)) + -parseInt(u(0x1e7)) / (-0x1839 + -0x2 * 0xcc7 + 0x31d1) + parseInt(u(0x1e6)) / (-0x692 + 0x1 * 0x22cd + -0x1c30);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0x22475 + -0x25b60 * -0x4 + -0x2659e));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x181b + 0x230e + -0x923);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[v(0x1f8) + v(0x1d1)] || function (c) {
    const x = v;
    return c && c[x(0x1e0)] ? c : { 'default': c };
};
const k = {};
k[w(0x1e3)] = !![], Object[w(0x1db) + w(0x1eb)](exports, v(0x1e0), k);
const CampaignContacts_1 = __importDefault(require(v(0x1ea) + w(0x1e9) + v(0x1f6))), AppError_1 = __importDefault(require(v(0x1d9) + w(0x1ec) + 'r')), Campaign_1 = __importDefault(require(w(0x1ea) + v(0x1e9) + 'n')), DeleteCampaignContactsService = async ({
        campaignId: h,
        contactId: i,
        tenantId: j
    }) => {
        const y = w, z = w, l = {};
        l[y(0x1e1)] = y(0x1ef) + y(0x1de) + y(0x1da) + z(0x1df), l[z(0x1ee)] = z(0x1dc) + y(0x1ed) + z(0x1e8) + 'TS';
        const m = l, n = {};
        n[y(0x1dd)] = h, n[y(0x1d0)] = i;
        const o = {};
        o['id'] = h, o[z(0x1f0)] = j;
        const p = {};
        p[y(0x1d5)] = Campaign_1[z(0x1d7)], p[z(0x1f4)] = !![], p[y(0x1e4)] = o;
        const q = {};
        q[z(0x1e4)] = n, q[z(0x1d6)] = [p];
        const r = await CampaignContacts_1[z(0x1d7)][y(0x1f3)](q);
        if (!r)
            throw new AppError_1[(y(0x1d7))](m[z(0x1e1)], -0x1 * 0x1ccf + -0x528 + 0x238b);
        try {
            await r[z(0x1e5)]();
        } catch (s) {
            throw new AppError_1[(y(0x1d7))](m[y(0x1ee)], -0x97f + 0x206b + -0x1558);
        }
    };
function a() {
    const A = [
        'tenantId',
        '2merDDI',
        '2628295UCJYXb',
        'findOne',
        'required',
        '42FUpjkr',
        'nContacts',
        '666xirZOJ',
        '__importDe',
        'contactId',
        'fault',
        '599054EJUACo',
        '60632lIwYwE',
        '8MGEzLU',
        'model',
        'include',
        'default',
        '324877HMVekE',
        '../../erro',
        'ACTS_NOT_F',
        'defineProp',
        'ERR_CAMPAI',
        'campaignId',
        'PAIGN_CONT',
        'OUND',
        '__esModule',
        'PhLxq',
        '321681kHLomQ',
        'value',
        'where',
        'destroy',
        '11216238pDmoby',
        '1754750vQAltc',
        'S_NOT_EXIS',
        'ls/Campaig',
        '../../mode',
        'erty',
        'rs/AppErro',
        'GN_CONTACT',
        'aoUiG',
        'ERR_NO_CAM'
    ];
    a = function () {
        return A;
    };
    return a();
}
exports[v(0x1d7)] = DeleteCampaignContactsService;