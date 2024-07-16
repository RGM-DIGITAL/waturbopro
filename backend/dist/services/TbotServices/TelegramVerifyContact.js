'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0x1c0)) / (-0x162d + 0x2291 * 0x1 + -0xc63) + parseInt(n(0x1c5)) / (-0x9 * 0x38c + 0x37 * -0x6a + 0xdad * 0x4) * (parseInt(n(0x1c9)) / (0xbc9 + -0xe75 + -0x2af * -0x1)) + -parseInt(n(0x1d2)) / (-0x1a4e + 0xf9b * 0x2 + -0x4e4) + -parseInt(n(0x1c3)) / (-0x629 * 0x4 + -0x1 * 0x13 + 0x18bc) * (parseInt(m(0x1b4)) / (-0x58 * 0x45 + 0x1e0b * 0x1 + 0x64d * -0x1)) + -parseInt(m(0x1c4)) / (0x8b * 0x10 + 0x144d * 0x1 + -0x1cf6) * (parseInt(n(0x1bf)) / (0x5 * -0x6fb + -0x1480 + 0x376f * 0x1)) + -parseInt(m(0x1d1)) / (0x10d0 + -0x1cef + -0x2 * -0x614) * (parseInt(n(0x1c2)) / (0xbf * -0x2e + -0x6c * 0x59 + -0x138 * -0x3b)) + parseInt(m(0x1b2)) / (0x246f + -0x11 * -0x10c + -0x3630) * (parseInt(m(0x1ce)) / (-0x244 + 0x1f1 * 0x7 + -0xb47));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x45c81 + 0xe582d + -0x3 * 0x373fc));
var __importDefault = this && this[o(0x1b6) + o(0x1b8)] || function (c) {
    const q = o;
    return c && c[q(0x1b1)] ? c : { 'default': c };
};
const k = {};
k[o(0x1c7)] = !![], Object[p(0x1c1) + p(0x1cd)](exports, o(0x1b1), k);
const CreateOrUpdateContactService_1 = __importDefault(require(p(0x1ca) + p(0x1cf) + o(0x1b0) + o(0x1b7) + p(0x1b9))), VerifyContact = async (c, d) => {
        const r = o, s = o, e = {
                'vqiSa': function (j, l) {
                    return j(l);
                },
                'GuDwa': r(0x1c6)
            };
        let f;
        const g = await c[s(0x1b5)]();
        try {
            f = g[s(0x1d0)]?.[s(0x1c8) + r(0x1ba)] ? await c[s(0x1c6)][r(0x1be) + 'k'](g[r(0x1d0)]?.[s(0x1c8) + r(0x1ba)]) : undefined;
        } catch (j) {
            f = undefined;
        }
        const h = {
                'name': g[s(0x1cb)] + '\x20' + g[r(0x1bd)] || g[s(0x1bb)] || '',
                'number': '',
                'profilePicUrl': f ? e[s(0x1bc)](String, f) : undefined,
                'tenantId': d,
                'pushname': g[r(0x1bb)] || '',
                'isUser': !![],
                'isWAContact': ![],
                'isGroup': ![],
                'origem': e[s(0x1b3)],
                'telegramId': g['id']
            }, i = await (0x20e0 + -0x3ad + -0x1d33, CreateOrUpdateContactService_1[r(0x1cc)])(h);
        return i;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x95 * -0x26 + 0x1 * 0x1973 + -0x2de1);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const t = [
        '1176SLuklu',
        'Services/C',
        'photo',
        '9xFcJqy',
        '2558080VrVSch',
        'reateOrUpd',
        '__esModule',
        '412434IYSpdb',
        'GuDwa',
        '87582uhclLg',
        'getChat',
        '__importDe',
        'ateContact',
        'fault',
        'Service',
        '_id',
        'username',
        'vqiSa',
        'last_name',
        'getFileLin',
        '1892296PBtkBs',
        '475002TNXwNG',
        'defineProp',
        '1517110gZEJte',
        '350VQNWAb',
        '28eoQGoY',
        '71174YOsnCz',
        'telegram',
        'value',
        'small_file',
        '9Lvrzgm',
        '../Contact',
        'first_name',
        'default',
        'erty'
    ];
    a = function () {
        return t;
    };
    return a();
}
exports[p(0x1cc)] = VerifyContact;