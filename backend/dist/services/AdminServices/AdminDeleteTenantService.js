'use strict';
const aq = b, ar = b;
function a() {
    const av = [
        'Wallet',
        'Tag',
        'default',
        '64RpXTrh',
        'value',
        'rs/AppErro',
        'ls/Whatsap',
        'ANT_FOUND',
        'findOne',
        'ls/Queue',
        '17111831wVZNGq',
        'ls/Setting',
        'ls/User',
        '../../erro',
        'NzGqJ',
        '2229394nXHBFp',
        'ls/Ticket',
        '7100612uZLQWS',
        'ls/Campaig',
        '__esModule',
        'ls/Tag',
        'defineProp',
        '3FaxFuH',
        'ls/ApiConf',
        '1125065Odusgm',
        'tenantId',
        '42pAmGri',
        '1966221pTQeBe',
        'ERR_NO_TEN',
        'ls/Tenant',
        'destroy',
        'fault',
        'ls/ChatFlo',
        'ls/Contact',
        'ls/ApiMess',
        'ls/AutoRep',
        '50ecTMMr',
        'ls/Message',
        '__importDe',
        'where',
        'erty',
        '10962zQUPxT',
        'age',
        '../../mode',
        'ls/FastRep',
        '440628cSDIiz'
    ];
    a = function () {
        return av;
    };
    return a();
}
(function (c, d) {
    const ao = b, ap = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(ao(0x8e)) / (-0xe * 0x126 + -0x250a * -0x1 + 0x5 * -0x431) + -parseInt(ao(0x70)) / (0x7 * 0x2df + 0x1e6 + -0x1 * 0x15fd) + -parseInt(ap(0x77)) / (-0x1 * 0x113b + 0x3c9 * 0x9 + -0x3b * 0x49) * (parseInt(ap(0x72)) / (0x473 * 0x5 + -0x12c + -0x9 * 0x257)) + -parseInt(ap(0x79)) / (-0xf * -0x142 + -0x1962 + 0xef * 0x7) * (-parseInt(ap(0x7b)) / (0x531 + -0x2 * -0xbc0 + 0x1 * -0x1cab)) + parseInt(ao(0x8a)) / (-0x9d * -0x29 + 0x1462 + 0xd * -0x380) * (parseInt(ao(0x64)) / (-0x58b + -0x5d1 * 0x2 + 0x1135)) + -parseInt(ap(0x7c)) / (0xf94 + 0x1e2f + 0x2dba * -0x1) * (-parseInt(ao(0x85)) / (-0x316 * 0x3 + 0xb3 * -0x27 + 0x17 * 0x197)) + parseInt(ap(0x6b)) / (0x653 + 0x8 * 0x125 + 0x1 * -0xf70);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x23d * -0x3f6 + 0x665af + 0x104782));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x8e6 + 0x1183 + -0x1 * 0x1a05);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[aq(0x87) + ar(0x80)] || function (c) {
    const as = ar;
    return c && c[as(0x74)] ? c : { 'default': c };
};
const k = {};
k[aq(0x65)] = !![], Object[aq(0x76) + aq(0x89)](exports, ar(0x74), k);
const AppError_1 = __importDefault(require(ar(0x6e) + aq(0x66) + 'r')), Tenant_1 = __importDefault(require(ar(0x8c) + ar(0x7e))), ApiConfig_1 = __importDefault(require(aq(0x8c) + ar(0x78) + 'ig')), ApiMessage_1 = __importDefault(require(aq(0x8c) + aq(0x83) + ar(0x8b))), AutoReply_1 = __importDefault(require(aq(0x8c) + ar(0x84) + 'ly')), Campaign_1 = __importDefault(require(ar(0x8c) + aq(0x73) + 'n')), ChatFlow_1 = __importDefault(require(aq(0x8c) + aq(0x81) + 'w')), ContactTag_1 = __importDefault(require(ar(0x8c) + ar(0x82) + aq(0x90))), ContactWallet_1 = __importDefault(require(aq(0x8c) + aq(0x82) + aq(0x8f))), Contact_1 = __importDefault(require(aq(0x8c) + ar(0x82))), FastReply_1 = __importDefault(require(aq(0x8c) + aq(0x8d) + 'ly')), Message_1 = __importDefault(require(ar(0x8c) + ar(0x86))), Queue_1 = __importDefault(require(aq(0x8c) + aq(0x6a))), Setting_1 = __importDefault(require(ar(0x8c) + aq(0x6c))), Tag_1 = __importDefault(require(ar(0x8c) + ar(0x75))), Ticket_1 = __importDefault(require(aq(0x8c) + ar(0x71))), User_1 = __importDefault(require(ar(0x8c) + aq(0x6d))), Whatsapp_1 = __importDefault(require(aq(0x8c) + aq(0x67) + 'p')), AdminDeleteTenantService = async ({tenantId: M}) => {
        const at = ar, au = aq, N = {};
        N[at(0x6f)] = au(0x7d) + at(0x68);
        const O = N, P = {};
        P['id'] = M;
        const Q = {};
        Q[au(0x88)] = P;
        const R = await Tenant_1[at(0x91)][at(0x69)](Q);
        if (!R)
            throw new AppError_1[(at(0x91))](O[at(0x6f)], 0x1e4a + 0x220d + 0x1 * -0x3ec3);
        const S = {};
        S[au(0x7a)] = M;
        const T = {};
        T[at(0x88)] = S, await ApiConfig_1[au(0x91)][at(0x7f)](T);
        const U = {};
        U[at(0x7a)] = M;
        const V = {};
        V[au(0x88)] = U, await ApiMessage_1[at(0x91)][at(0x7f)](V);
        const W = {};
        W[au(0x7a)] = M;
        const X = {};
        X[au(0x88)] = W, await AutoReply_1[at(0x91)][au(0x7f)](X);
        const Y = {};
        Y[at(0x7a)] = M;
        const Z = {};
        Z[au(0x88)] = Y, await Campaign_1[at(0x91)][at(0x7f)](Z);
        const a0 = {};
        a0[au(0x7a)] = M;
        const a1 = {};
        a1[au(0x88)] = a0, await ChatFlow_1[at(0x91)][at(0x7f)](a1);
        const a2 = {};
        a2[at(0x7a)] = M;
        const a3 = {};
        a3[at(0x88)] = a2, await ContactTag_1[au(0x91)][at(0x7f)](a3);
        const a4 = {};
        a4[at(0x7a)] = M;
        const a5 = {};
        a5[at(0x88)] = a4, await ContactWallet_1[at(0x91)][at(0x7f)](a5);
        const a6 = {};
        a6[au(0x7a)] = M;
        const a7 = {};
        a7[at(0x88)] = a6, await Contact_1[at(0x91)][at(0x7f)](a7);
        const a8 = {};
        a8[au(0x7a)] = M;
        const a9 = {};
        a9[au(0x88)] = a8, await FastReply_1[at(0x91)][au(0x7f)](a9);
        const aa = {};
        aa[au(0x7a)] = M;
        const ab = {};
        ab[au(0x88)] = aa, await Message_1[at(0x91)][au(0x7f)](ab);
        const ac = {};
        ac[at(0x7a)] = M;
        const ad = {};
        ad[au(0x88)] = ac, await Queue_1[au(0x91)][at(0x7f)](ad);
        const ae = {};
        ae[at(0x7a)] = M;
        const af = {};
        af[at(0x88)] = ae, await Setting_1[au(0x91)][au(0x7f)](af);
        const ag = {};
        ag[au(0x7a)] = M;
        const ah = {};
        ah[at(0x88)] = ag, await Tag_1[at(0x91)][au(0x7f)](ah);
        const ai = {};
        ai[at(0x7a)] = M;
        const aj = {};
        aj[at(0x88)] = ai, await Ticket_1[at(0x91)][au(0x7f)](aj);
        const ak = {};
        ak[au(0x7a)] = M;
        const al = {};
        al[at(0x88)] = ak, await User_1[au(0x91)][au(0x7f)](al);
        const am = {};
        am[at(0x7a)] = M;
        const an = {};
        an[at(0x88)] = am, await Whatsapp_1[at(0x91)][au(0x7f)](an), await R[au(0x7f)]();
    };
exports[aq(0x91)] = AdminDeleteTenantService;