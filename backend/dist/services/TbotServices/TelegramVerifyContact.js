'use strict';
const o = b, p = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x16 * -0x176 + -0x7b8 + -0x29ca * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0x1f1)) / (-0xf * 0x26f + -0x363 * -0xb + -0x1 * 0xbf) * (-parseInt(n(0x1fb)) / (-0xb * 0x198 + 0xbea + -0x14 * -0x48)) + -parseInt(m(0x20b)) / (0x1d8 + 0x6a5 + -0x87a) * (-parseInt(n(0x20c)) / (-0x553 * 0x4 + 0x3e7 * -0x3 + 0x2105)) + parseInt(n(0x1fa)) / (0x943 + 0x3 * 0x39e + -0x506 * 0x4) + -parseInt(m(0x206)) / (0x8d8 + -0x1 * -0x1ed7 + -0x47 * 0x8f) + parseInt(n(0x1ef)) / (0xc34 + 0x488 + -0x263 * 0x7) + parseInt(m(0x205)) / (-0x25eb * -0x1 + 0xe * 0x19 + 0xd * -0x305) + -parseInt(n(0x200)) / (-0x1 * 0x1fa2 + 0x81 + 0x1f2a * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xe * -0x18d73 + 0x1767e2 + 0xd7642));
var __importDefault = this && this[o(0x201) + p(0x1f7)] || function (c) {
    const q = p;
    return c && c[q(0x1fd)] ? c : { 'default': c };
};
const k = {};
function a() {
    const t = [
        '4LKeidV',
        'username',
        '../Contact',
        '12845714xkzwUa',
        'first_name',
        '11PzTsfd',
        'cRTZH',
        'ateContact',
        'Service',
        'default',
        '_id',
        'fault',
        'photo',
        'defineProp',
        '5744190EIdBrc',
        '4594EXYzZB',
        'reateOrUpd',
        '__esModule',
        'FLjrr',
        'erty',
        '25410123LLDlxp',
        '__importDe',
        'value',
        'last_name',
        'getChat',
        '6381296RaIOgu',
        '4165368mJASbT',
        'getFileLin',
        'small_file',
        'telegram',
        'Services/C',
        '2107236sUAcVW'
    ];
    a = function () {
        return t;
    };
    return a();
}
k[o(0x202)] = !![], Object[o(0x1f9) + o(0x1ff)](exports, o(0x1fd), k);
const CreateOrUpdateContactService_1 = __importDefault(require(p(0x1ee) + p(0x20a) + p(0x1fc) + o(0x1f3) + o(0x1f4))), VerifyContact = async (c, d) => {
        const r = p, s = o, e = {
                'FLjrr': function (j, l) {
                    return j(l);
                },
                'cRTZH': r(0x209)
            };
        let f;
        const g = await c[s(0x204)]();
        try {
            f = g[s(0x1f8)]?.[r(0x208) + r(0x1f6)] ? await c[s(0x209)][r(0x207) + 'k'](g[r(0x1f8)]?.[r(0x208) + s(0x1f6)]) : undefined;
        } catch (j) {
            f = undefined;
        }
        const h = {
                'name': g[s(0x1f0)] + '\x20' + g[s(0x203)] || g[r(0x20d)] || '',
                'number': '',
                'profilePicUrl': f ? e[s(0x1fe)](String, f) : undefined,
                'tenantId': d,
                'pushname': g[r(0x20d)] || '',
                'isUser': !![],
                'isWAContact': ![],
                'isGroup': ![],
                'origem': e[s(0x1f2)],
                'telegramId': g['id']
            }, i = await (0x186 + 0x4 * -0x2a1 + 0x8fe, CreateOrUpdateContactService_1[r(0x1f5)])(h);
        return i;
    };
exports[o(0x1f5)] = VerifyContact;