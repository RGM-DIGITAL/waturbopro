'use strict';
const a1 = b, a2 = b;
(function (c, d) {
    const Z = b, a0 = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(Z(0x137)) / (-0x22bd + 0x643 + 0x1c7b) * (parseInt(a0(0x114)) / (-0x156b + 0x3f6 + -0x1177 * -0x1)) + parseInt(Z(0x13b)) / (-0xd8d * 0x1 + -0x2 * -0x49d + -0xb9 * -0x6) + -parseInt(Z(0x157)) / (-0x200a * 0x1 + -0x145f + 0x346d * 0x1) * (parseInt(Z(0x13d)) / (-0x7f * 0x4a + -0x4af + 0x296a)) + parseInt(Z(0x14b)) / (-0xa3 * 0x21 + 0x19b5 * -0x1 + 0x2ebe) + -parseInt(Z(0x14d)) / (0x1 * -0x23e3 + -0xde9 + -0x31d3 * -0x1) + parseInt(Z(0x155)) / (-0x2 * 0x43f + -0x8a * 0x25 + 0xe3c * 0x2) * (-parseInt(Z(0x11e)) / (0x1b * -0x1 + 0x89 * -0x3b + 0x1fb7)) + -parseInt(Z(0x13f)) / (-0x1cab + -0xe3c * 0x1 + 0x2af1) * (-parseInt(Z(0x141)) / (0x7fb + 0xc61 + 0x2e7 * -0x7));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xa * -0x73b0 + -0x3a5e1 + -0x22555 * -0x8));
var __importDefault = this && this[a1(0x11f) + a2(0x110)] || function (c) {
    const a3 = a1;
    return c && c[a3(0x14f)] ? c : { 'default': c };
};
const o = {};
o[a1(0x136)] = !![], Object[a2(0x112) + a2(0x151)](exports, a2(0x14f), o);
const Message_1 = __importDefault(require(a1(0x13a) + a1(0x10f))), Ticket_1 = __importDefault(require(a1(0x13a) + a1(0x13c))), socketEmit_1 = __importDefault(require(a1(0x111) + a2(0x11c) + a2(0x12e))), Contact_1 = __importDefault(require(a1(0x13a) + a2(0x12a)));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x8e * -0x35 + -0xda3 + 0xa * -0x179);
        let h = e[f];
        return h;
    }, b(c, d);
}
function extractMessageId(d) {
    const a4 = a1, a5 = a1, e = {};
    e[a4(0x138)] = a4(0x128) + a4(0x158) + a4(0x130) + a4(0x116);
    const f = e;
    try {
        const g = JSON[a5(0x124)](d);
        return g[a4(0x148)][a4(0x135) + a5(0x15d)][a4(0x148)][a4(0x12d) + a4(0x127)][a5(0x142)]['id'];
    } catch (h) {
        throw new Error(f[a4(0x138)]);
    }
}
function a() {
    const a8 = [
        'where',
        '40tvBMnX',
        'ticket',
        '48sIKrPg',
        'trair\x20mess',
        'tenantId',
        'fromMe',
        'contactId',
        'yWDSF',
        'age',
        'RVLeq',
        'mediaType',
        'edited',
        'body',
        'wFhcH',
        'NG_MESSAGE',
        'riginal\x20nã',
        'ls/Message',
        'fault',
        '../../help',
        'defineProp',
        'yIrZX',
        '22530qYOvxI',
        'payload',
        'ataJson',
        'hbPmu',
        'dataJson',
        'cJEaG',
        'chat:updat',
        'WWCws',
        'ers/socket',
        'HTaKs',
        '1606302kXFQHC',
        '__importDe',
        'type',
        'quotedMsg',
        'messageId',
        'create',
        'parse',
        'YALMm',
        'DXxUe',
        'ssage',
        'Erro\x20ao\x20ex',
        'riLhE',
        'ls/Contact',
        'ERR_CREATI',
        'NsoIz',
        'protocolMe',
        'Emit',
        'chat:creat',
        'ageId\x20do\x20d',
        'awPyV',
        'include',
        'rGMlc',
        'default',
        'editedMess',
        'value',
        '12lTGubu',
        'LfzHv',
        'update',
        '../../mode',
        '3140304wtBSPJ',
        'ls/Ticket',
        '396240abQDVA',
        'OTZAg',
        '570990JGKfwx',
        'model',
        '253PUWDNO',
        'key',
        'fdiUv',
        'contact',
        'Mensagem\x20o',
        'Qcigp',
        'o\x20encontra',
        'message',
        'findOne',
        'boWSW',
        '989706ScwZOf',
        'IMnKV',
        '1589077ZMfPBW',
        'tjNSq',
        '__esModule',
        'pYTjs',
        'erty',
        'YhuHP',
        'qtyfc'
    ];
    a = function () {
        return a8;
    };
    return a();
}
const CreateMessageService = async ({
    messageData: v,
    tenantId: w
}) => {
    const a6 = a2, a7 = a1, x = {
            'cJEaG': a6(0x156),
            'DXxUe': a6(0x144),
            'HTaKs': a6(0x121),
            'yIrZX': a6(0x128) + a7(0x158) + a7(0x130) + a6(0x116),
            'qtyfc': function (G, H) {
                return G === H;
            },
            'RVLeq': a6(0x135) + a6(0x15d),
            'rGMlc': function (G, H) {
                return G(H);
            },
            'yWDSF': a7(0x11a) + 'e',
            'WWCws': a6(0x145) + a6(0x10e) + a6(0x147) + 'da',
            'YhuHP': function (G, H) {
                return G !== H;
            },
            'NsoIz': a6(0x129),
            'boWSW': function (G, H) {
                return G === H;
            },
            'YALMm': a6(0x14c),
            'pYTjs': a7(0x131),
            'Qcigp': a6(0x10c),
            'tjNSq': a6(0x143),
            'hbPmu': a6(0x12b) + a6(0x10d),
            'OTZAg': a6(0x12f) + 'e'
        };
    if (x[a7(0x153)](v[a6(0x109)], x[a6(0x15e)]) && v[a7(0x118)]) {
        const G = v[a7(0x118)], H = x[a6(0x133)](extractMessageId, G), I = {};
        I[a6(0x122)] = H, I[a7(0x159)] = w;
        const J = {};
        J[a7(0x154)] = I;
        const K = await Message_1[a7(0x134)][a6(0x149)](J);
        if (K) {
            const L = {};
            L[a7(0x10a)] = v[a6(0x10b)], await K[a7(0x139)](L);
            const M = {};
            return M[a6(0x159)] = w, M[a7(0x120)] = x[a6(0x15c)], M[a7(0x115)] = K, (0x504 + 0x2 * -0xfb5 + 0x1a66, socketEmit_1[a6(0x134)])(M), K;
        } else
            throw new Error(x[a6(0x11b)]);
    }
    const y = {};
    y[a7(0x122)] = v[a7(0x122)], y[a7(0x159)] = w;
    const z = {};
    z[a6(0x154)] = y;
    let A = await Message_1[a7(0x134)][a6(0x149)](z);
    if (!A) {
        const N = { ...v };
        N[a6(0x159)] = w, A = await Message_1[a7(0x134)][a7(0x123)](N);
    } else {
        if (x[a6(0x152)](x[a6(0x12c)], x[a7(0x12c)])) {
            const P = {};
            P[a6(0x159)] = i;
            const Q = {};
            Q[a6(0x140)] = z[a6(0x134)], Q['as'] = x[a6(0x119)], Q[a7(0x154)] = P, Q[a7(0x132)] = [x[a6(0x126)]];
            const R = {};
            R[a7(0x140)] = P[a7(0x134)], R['as'] = x[a6(0x11d)], R[a7(0x132)] = [x[a7(0x126)]], y = [
                Q,
                R
            ];
        } else
            await A[a7(0x139)](v);
    }
    let B;
    if (!v[a7(0x15a)]) {
        const P = {};
        P[a6(0x159)] = w;
        const Q = {};
        Q[a7(0x140)] = Ticket_1[a7(0x134)], Q['as'] = x[a6(0x119)], Q[a6(0x154)] = P, Q[a7(0x132)] = [x[a6(0x126)]];
        const R = {};
        R[a7(0x140)] = Message_1[a7(0x134)], R['as'] = x[a7(0x11d)], R[a6(0x132)] = [x[a6(0x126)]];
        const S = {};
        S['id'] = v[a6(0x15b)];
        const T = {};
        T[a6(0x140)] = Contact_1[a6(0x134)], T['as'] = x[a7(0x126)], T[a7(0x154)] = S, B = [
            Q,
            R,
            T
        ];
    } else {
        if (x[a7(0x14a)](x[a6(0x125)], x[a7(0x150)])) {
            const V = {};
            return V[a7(0x134)] = j, y && z[a6(0x14f)] ? i : V;
        } else {
            const V = {};
            V[a6(0x159)] = w;
            const W = {};
            W[a7(0x140)] = Ticket_1[a7(0x134)], W['as'] = x[a6(0x119)], W[a7(0x154)] = V, W[a7(0x132)] = [x[a7(0x126)]];
            const X = {};
            X[a6(0x140)] = Message_1[a7(0x134)], X['as'] = x[a7(0x11d)], X[a7(0x132)] = [x[a6(0x126)]], B = [
                W,
                X
            ];
        }
    }
    const C = {};
    C[a6(0x122)] = v[a6(0x122)], C[a6(0x159)] = w;
    const D = {};
    D[a6(0x154)] = C, D[a6(0x132)] = B;
    const E = await Message_1[a7(0x134)][a6(0x149)](D);
    if (!E) {
        if (x[a6(0x153)](x[a6(0x146)], x[a7(0x14e)]))
            throw new d(x[a7(0x113)]);
        else
            throw new Error(x[a7(0x117)]);
    }
    const F = {};
    return F[a7(0x159)] = w, F[a6(0x120)] = x[a6(0x13e)], F[a7(0x115)] = E, (-0xe * 0x1a3 + 0x2431 + -0x21 * 0x67, socketEmit_1[a6(0x134)])(F), A;
};
exports[a2(0x134)] = CreateMessageService;