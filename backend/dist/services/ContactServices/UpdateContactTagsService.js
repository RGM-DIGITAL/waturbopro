'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(v(0x209)) / (-0x1fe2 + 0xd6b + 0x1278) + -parseInt(w(0x1e9)) / (-0x118d + -0x3c2 + 0x1551) + -parseInt(v(0x1f5)) / (0x19b5 * -0x1 + 0x132 + 0x1886) * (parseInt(v(0x1ea)) / (-0x1 * -0x106c + 0x2220 + 0x498 * -0xb)) + parseInt(w(0x1f6)) / (-0x8c5 + -0x3 * -0x356 + -0x3 * 0x68) * (-parseInt(w(0x1ed)) / (-0x3 * 0x5a3 + 0x1 * 0x1d5c + -0xc6d)) + parseInt(v(0x1f7)) / (-0x21da + -0x1 * -0x1835 + 0x9ac) + -parseInt(v(0x1ef)) / (-0xb2f * 0x1 + 0xc54 * 0x2 + 0x3 * -0x47b) + parseInt(w(0x200)) / (0x21c6 + -0x2 * -0x1060 + 0x1 * -0x427d) * (parseInt(w(0x20b)) / (-0x7df + -0xfae + 0x1797));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x9106 * 0xb + -0x732b1 + -0x165 * -0xdd3));
var __importDefault = this && this[x(0x214) + x(0x1ec)] || function (c) {
    const z = x;
    return c && c[z(0x20a)] ? c : { 'default': c };
};
const o = {};
o[y(0x1fd)] = !![], Object[x(0x1fb) + x(0x1fc)](exports, y(0x20a), o);
const AppError_1 = __importDefault(require(x(0x218) + y(0x20f) + 'r')), Contact_1 = __importDefault(require(y(0x202) + x(0x20c))), ContactTag_1 = __importDefault(require(x(0x202) + x(0x20c) + x(0x1f0))), UpdateContactService = async ({
        tags: h,
        contactId: i,
        tenantId: j
    }) => {
        const A = x, B = y, k = {};
        k[A(0x1ff)] = B(0x217), k[B(0x219)] = B(0x1fa), k[B(0x1f2)] = A(0x207), k[B(0x206)] = B(0x1f3) + B(0x1ee), k[A(0x216)] = A(0x201), k[B(0x208)] = B(0x20e), k[A(0x1fe)] = B(0x1f1), k[B(0x203)] = B(0x20d) + A(0x215);
        const l = k, m = {};
        m[B(0x204)] = j, m[A(0x1f9)] = i;
        const n = {};
        n[B(0x1e8)] = m, await ContactTag_1[A(0x211)][A(0x1eb)](n);
        const p = [];
        h[B(0x1f4)](t => {
            const C = A, D = A, u = {};
            u[C(0x213)] = !t['id'] ? t : t['id'], u[C(0x1f9)] = i, u[D(0x204)] = j, p[C(0x210)](u);
        }), await ContactTag_1[A(0x211)][A(0x212)](p);
        const q = {};
        q['id'] = i, q[A(0x204)] = j;
        const r = {};
        r[A(0x1e8)] = q, r[A(0x205)] = [
            'id',
            l[B(0x1ff)],
            l[B(0x219)],
            l[A(0x1f2)],
            l[A(0x206)]
        ], r[A(0x1f8)] = [
            l[B(0x216)],
            l[A(0x208)],
            {
                'association': l[A(0x1fe)],
                'attributes': [
                    'id',
                    l[B(0x1ff)]
                ]
            }
        ];
        const s = await Contact_1[B(0x211)][B(0x21a)](r);
        if (!s)
            throw new AppError_1[(A(0x211))](l[B(0x203)], -0x1e20 + -0x116b + 0x311f);
        return s;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x9d * -0x1b + 0x8cb * -0x3 + -0x5dd * -0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[y(0x211)] = UpdateContactService;
function a() {
    const E = [
        '483969jJuLFd',
        '__esModule',
        '790DaBHlv',
        'ls/Contact',
        'ERR_NO_CON',
        'tags',
        'rs/AppErro',
        'push',
        'default',
        'bulkCreate',
        'tagId',
        '__importDe',
        'TACT_FOUND',
        'IyPiz',
        'name',
        '../../erro',
        'kOKBc',
        'findOne',
        'where',
        '1151088ExeWfb',
        '4NzDdbh',
        'destroy',
        'fault',
        '1451238KMTjwb',
        'Url',
        '3971520XwjxLd',
        'Tag',
        'wallets',
        'ocaab',
        'profilePic',
        'forEach',
        '839955fUnSJh',
        '5CjREXy',
        '3794147SmlMtb',
        'include',
        'contactId',
        'number',
        'defineProp',
        'erty',
        'value',
        'opajP',
        'aWnVg',
        '108360OShkLY',
        'extraInfo',
        '../../mode',
        'EQrav',
        'tenantId',
        'attributes',
        'ejZeD',
        'email',
        'hUZWt'
    ];
    a = function () {
        return E;
    };
    return a();
}