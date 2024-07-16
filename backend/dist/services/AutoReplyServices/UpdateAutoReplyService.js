'use strict';
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(x(0x180)) / (0xeef * 0x1 + -0x2e3 + -0xc0b) * (-parseInt(x(0x188)) / (-0x18bd + -0x2482 + 0x3d41 * 0x1)) + parseInt(y(0x170)) / (-0x1648 + 0x173b + -0xf0) * (parseInt(y(0x17f)) / (-0x16f0 + 0xd91 + 0x1 * 0x963)) + -parseInt(y(0x18b)) / (0x5ff + 0x4 * -0x529 + 0xeaa) + -parseInt(x(0x192)) / (-0x125 * 0x2 + 0x2f5 * 0x3 + -0x68f) + parseInt(x(0x196)) / (-0x43 * 0x6e + 0x247f + -0x7ae) * (-parseInt(y(0x185)) / (0xf48 * 0x2 + 0x12ab + -0x1 * 0x3133)) + -parseInt(y(0x191)) / (-0x15bb * 0x1 + 0x18fb * 0x1 + -0x1 * 0x337) + parseInt(x(0x195)) / (0x1907 + 0x3 * 0xa97 + -0x38c2);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x714aa + 0x1 * -0xb30bc + 0x10fbd6));
var __importDefault = this && this[z(0x18e) + z(0x186)] || function (c) {
    const B = z;
    return c && c[B(0x174)] ? c : { 'default': c };
};
function a() {
    const E = [
        '__esModule',
        'ERR_NO_AUT',
        'GZrmh',
        'ls/AutoRep',
        'reload',
        'JwUOp',
        'attributes',
        'UND',
        'rs/AppErro',
        'userId',
        'hoSFN',
        '102880uObRwB',
        '5279iienJb',
        'hPvHA',
        'celularTes',
        'name',
        'defineProp',
        '56fYxWRy',
        'fault',
        'O_REPLY_FO',
        '514KNlhkp',
        'value',
        'default',
        '6738500BtrvBA',
        'FIqIy',
        'geXgH',
        '__importDe',
        'action',
        'tenantId',
        '11791854Awqnyw',
        '578688DJPeGz',
        'isActive',
        '../../mode',
        '21564770RDOiyj',
        '1458310pASWYS',
        '../../erro',
        'update',
        '180rrjpcg',
        'erty',
        'where',
        'findOne'
    ];
    a = function () {
        return E;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2 * -0x97 + 0x1ac6 + -0x1 * 0x1828);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[z(0x189)] = !![], Object[z(0x184) + z(0x171)](exports, A(0x174), k);
const AppError_1 = __importDefault(require(A(0x197) + A(0x17c) + 'r')), AutoReply_1 = __importDefault(require(z(0x194) + A(0x177) + 'ly')), UpdateAutoReplyService = async ({
        autoReplyData: h,
        autoReplyId: i,
        tenantId: j
    }) => {
        const C = A, D = A, l = {};
        l[C(0x18d)] = C(0x183), l[C(0x176)] = C(0x18f), l[D(0x17e)] = C(0x17d), l[D(0x18c)] = C(0x193), l[C(0x179)] = C(0x182) + 'te', l[C(0x181)] = C(0x175) + D(0x187) + C(0x17b);
        const m = l, {
                name: n,
                action: o,
                userId: p,
                isActive: q,
                celularTeste: r
            } = h, s = {};
        s['id'] = i, s[D(0x190)] = j;
        const t = {};
        t[D(0x172)] = s, t[C(0x17a)] = [
            'id',
            m[C(0x18d)],
            m[D(0x176)],
            m[D(0x17e)],
            m[C(0x18c)],
            m[D(0x179)]
        ];
        const u = await AutoReply_1[D(0x18a)][C(0x173)](t);
        if (!u)
            throw new AppError_1[(C(0x18a))](m[C(0x181)], 0x2 * -0x109e + 0x2698 + 0xf2 * -0x4);
        const v = {};
        v[C(0x183)] = n, v[C(0x18f)] = o, v[C(0x17d)] = p, v[D(0x193)] = q, v[C(0x182) + 'te'] = r, await u[D(0x198)](v);
        const w = {};
        return w[D(0x17a)] = [
            'id',
            m[D(0x18d)],
            m[C(0x176)],
            m[C(0x17e)],
            m[C(0x18c)],
            m[D(0x179)]
        ], await u[C(0x178)](w), u;
    };
exports[z(0x18a)] = UpdateAutoReplyService;