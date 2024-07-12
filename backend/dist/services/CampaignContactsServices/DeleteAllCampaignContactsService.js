'use strict';
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(s(0x75)) / (-0x2483 + 0x21e4 + 0x2a0) + -parseInt(s(0x69)) / (-0x1 * 0x229f + 0x4ae * 0x2 + 0x1945) * (-parseInt(s(0x6a)) / (-0x3f * -0x41 + -0x2329 * -0x1 + -0x3325 * 0x1)) + -parseInt(s(0x72)) / (0x95 * 0x33 + 0x1 * 0x1693 + -0x343e) + -parseInt(s(0x6d)) / (0x1 * 0x1677 + 0x158b + -0x2bfd) + parseInt(t(0x7a)) / (0x1 * -0x2702 + 0x24f * -0xc + 0x42bc) * (parseInt(t(0x6f)) / (-0x3c0 + 0x11bb + 0xdf4 * -0x1)) + parseInt(s(0x6e)) / (-0xb * 0x25 + -0x3a * 0x71 + 0x1b39) + -parseInt(t(0x79)) / (0xb * -0x257 + -0x1 * 0x1103 + -0x4c1 * -0x9);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x7f4af + 0x5 * 0x43b8 + -0x32516));
function a() {
    const z = [
        'TS_OR_NOT_',
        '__esModule',
        '2698fTynKP',
        '771gpmJfK',
        'campaignId',
        '__importDe',
        '1359640ntGhMH',
        '3684656SlZonk',
        '3087938igHimM',
        'rs/AppErro',
        'defineProp',
        '991016lNiVPM',
        'fault',
        'GN_CONTACT',
        '267592lESFZY',
        'ERR_CAMPAI',
        '../../mode',
        'VnnPL',
        '532494hHAMvF',
        '6lFZCIy',
        '../../erro',
        'erty',
        'findOne',
        'tenantId',
        'destroy',
        'nContacts',
        'default',
        'S_NOT_EXIS',
        'where',
        'ls/Campaig',
        'zPDWV',
        'value',
        'ACESSIBLE'
    ];
    a = function () {
        return z;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x21b3 + -0x17c6 + 0x543 * 0xb);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[u(0x6c) + v(0x73)] || function (c) {
    const w = u;
    return c && c[w(0x68)] ? c : { 'default': c };
};
const k = {};
k[u(0x86)] = !![], Object[v(0x71) + u(0x7c)](exports, u(0x68), k);
const CampaignContacts_1 = __importDefault(require(v(0x77) + v(0x84) + v(0x80))), AppError_1 = __importDefault(require(u(0x7b) + v(0x70) + 'r')), Campaign_1 = __importDefault(require(u(0x77) + u(0x84) + 'n')), DeleteAllCampaignContactsService = async ({
        campaignId: h,
        tenantId: i
    }) => {
        const x = u, y = v, j = {};
        j[x(0x78)] = y(0x76) + x(0x74) + x(0x82) + y(0x88) + y(0x87), j[x(0x85)] = x(0x76) + y(0x74) + 'S';
        const l = j;
        try {
            const m = {};
            m['id'] = h, m[y(0x7e)] = i;
            const n = {};
            n[x(0x83)] = m;
            const o = await Campaign_1[x(0x81)][x(0x7d)](n);
            if (o?.['id']) {
                const p = {};
                p[y(0x6b)] = h;
                const q = {};
                q[y(0x83)] = p, await CampaignContacts_1[y(0x81)][y(0x7f)](q);
            } else
                throw new AppError_1[(y(0x81))](l[x(0x78)], 0x541 * -0x7 + -0x133 + 0x278e);
        } catch (r) {
            throw new AppError_1[(x(0x81))](l[y(0x85)], 0x13 * -0xcc + -0x195b + -0x2a13 * -0x1);
        }
    };
exports[u(0x81)] = DeleteAllCampaignContactsService;