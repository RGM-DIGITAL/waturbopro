'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0xb3)) / (0x1d33 + -0x246f * -0x1 + -0x35 * 0x13d) + -parseInt(r(0xa3)) / (-0x1556 + -0x43 * -0x48 + 0x280) + parseInt(r(0xae)) / (0x1757 + 0xaae + -0x3 * 0xb56) + -parseInt(r(0xb1)) / (-0x2697 + -0xcbb * -0x1 + 0x19e0) * (parseInt(s(0x9e)) / (-0x50d + -0x1ba4 + 0x20b6)) + -parseInt(s(0x9c)) / (0x5be + 0x2492 + 0x2 * -0x1525) + -parseInt(s(0xb0)) / (0x1 * -0x1429 + 0x2175 + -0x1 * 0xd45) * (-parseInt(s(0xaf)) / (0x1 * 0x2437 + 0x316 + 0x9 * -0x45d)) + parseInt(s(0x9f)) / (-0x3 * -0xa99 + 0x1a61 * 0x1 + 0x79 * -0x7b) * (parseInt(r(0x95)) / (-0x71f * 0x1 + 0xbdb * -0x2 + 0x1edf));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * -0xb49fb + 0x73c9 * -0x7 + -0x1 * -0x1db091));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2c0 + 0x14b1 + -0x493 * 0x5);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[t(0x96) + t(0xb2)] || function (c) {
    const v = t;
    return c && c[v(0xa2)] ? c : { 'default': c };
};
function a() {
    const y = [
        'name',
        '1876539jDXHHI',
        '2452880OQJTvS',
        '21ZxNmkJ',
        '4utTnIQ',
        'fault',
        '1427169GbPZpt',
        'where',
        '../../mode',
        'include',
        'ntacts',
        'oumVo',
        '30fIIZeu',
        '__importDe',
        'HabOG',
        'value',
        'campaignId',
        'default',
        'order',
        '11351046ydrPPo',
        'campaignCo',
        '2938515hYNTVp',
        '12381651fctvlL',
        'ASC',
        'ls/Contact',
        '__esModule',
        '1534848mEbRgn',
        'findAll',
        'gAwKu',
        'defineProp',
        'tenantId',
        'nContacts',
        'model',
        'ls/Campaig',
        'erty',
        'required'
    ];
    a = function () {
        return y;
    };
    return a();
}
const k = {};
k[t(0x98)] = !![], Object[u(0xa6) + t(0xab)](exports, t(0xa2), k);
const CampaignContacts_1 = __importDefault(require(t(0xb5) + u(0xaa) + t(0xa8))), Contact_1 = __importDefault(require(u(0xb5) + t(0xa1))), ListCampaignContactsService = async ({
        campaignId: h,
        tenantId: i
    }) => {
        const w = t, x = t, j = {};
        j[w(0x94)] = x(0x9d) + w(0x93), j[x(0xa5)] = w(0xad), j[w(0x97)] = w(0xa0);
        const l = j, m = {};
        m[x(0xa7)] = i;
        const n = {};
        n[w(0x99)] = h;
        const o = {};
        o[w(0xa9)] = CampaignContacts_1[w(0x9a)], o['as'] = l[x(0x94)], o[w(0xb4)] = n, o[x(0xac)] = !![];
        const p = {};
        p[x(0xb4)] = m, p[w(0x92)] = [o], p[x(0x9b)] = [[
                l[w(0xa5)],
                l[w(0x97)]
            ]];
        const q = await Contact_1[w(0x9a)][x(0xa4)](p);
        return q;
    };
exports[t(0x9a)] = ListCampaignContactsService;