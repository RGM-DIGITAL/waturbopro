'use strict';
function a() {
    const av = [
        'ls/Queue',
        'ls/ChatFlo',
        'ls/Campaig',
        '1792182ifzUoR',
        'ls/Tag',
        'ls/Contact',
        'ls/AutoRep',
        'where',
        'ANT_FOUND',
        '__esModule',
        'erty',
        '599136MLvTYZ',
        'ls/ApiMess',
        '9441vQWNzn',
        'rs/AppErro',
        'ls/Ticket',
        'yKBxS',
        'default',
        'age',
        '__importDe',
        'ERR_NO_TEN',
        '109235LbhJZE',
        'destroy',
        '../../erro',
        '1017081znjYSe',
        'ls/Message',
        'defineProp',
        '5776hbPNZe',
        'Tag',
        '20aoNbFX',
        '../../mode',
        '679865SkKIET',
        'ls/Setting',
        'tenantId',
        'ls/Whatsap',
        'ls/Tenant',
        '10HtMCDO',
        '15137320qanTmV',
        'findOne',
        'value',
        'Wallet',
        'ls/User',
        'ls/ApiConf',
        'fault',
        '270WuAbhT',
        'ls/FastRep'
    ];
    a = function () {
        return av;
    };
    return a();
}
const aq = b, ar = b;
(function (c, d) {
    const ao = b, ap = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(ao(0x1df)) / (0x2 * 0x311 + -0x1 * 0x315 + -0xa * 0x4e) + -parseInt(ao(0x1f8)) / (-0x4bc + 0x1451 + -0x3 * 0x531) + -parseInt(ao(0x1d2)) / (-0x235d * -0x1 + 0x703 + 0x2d3 * -0xf) + parseInt(ap(0x1e4)) / (0x1141 * 0x1 + -0x2 * -0x125b + -0x35f3) * (-parseInt(ap(0x1e6)) / (0x1637 + 0x179 + -0x17ab)) + -parseInt(ao(0x1f3)) / (-0x819 * 0x1 + 0x1625 + -0x167 * 0xa) * (parseInt(ap(0x1dc)) / (0x10cb + -0x5d * 0x31 + 0x109)) + parseInt(ao(0x1e2)) / (-0x9 * -0x219 + -0x2df * 0x6 + 0x1 * -0x19f) * (parseInt(ap(0x1d4)) / (-0x2467 + 0x1a54 + -0xa1c * -0x1)) + parseInt(ao(0x1eb)) / (0x2566 + -0x1e6d + -0x6ef) * (parseInt(ao(0x1ec)) / (0x1e83 + 0x13bd * -0x1 + -0x29 * 0x43));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x105451 * -0x1 + -0x12f * -0xb85 + -0x1d1a * -0x72));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0x1186 + -0xb84 * -0x1 + 0xd9f * -0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[aq(0x1da) + ar(0x1f2)] || function (c) {
    const as = ar;
    return c && c[as(0x1d0)] ? c : { 'default': c };
};
const k = {};
k[ar(0x1ee)] = !![], Object[aq(0x1e1) + aq(0x1d1)](exports, ar(0x1d0), k);
const AppError_1 = __importDefault(require(ar(0x1de) + aq(0x1d5) + 'r')), Tenant_1 = __importDefault(require(ar(0x1e5) + aq(0x1ea))), ApiConfig_1 = __importDefault(require(aq(0x1e5) + ar(0x1f1) + 'ig')), ApiMessage_1 = __importDefault(require(aq(0x1e5) + ar(0x1d3) + aq(0x1d9))), AutoReply_1 = __importDefault(require(aq(0x1e5) + aq(0x1cd) + 'ly')), Campaign_1 = __importDefault(require(ar(0x1e5) + ar(0x1f7) + 'n')), ChatFlow_1 = __importDefault(require(ar(0x1e5) + aq(0x1f6) + 'w')), ContactTag_1 = __importDefault(require(aq(0x1e5) + ar(0x1cc) + aq(0x1e3))), ContactWallet_1 = __importDefault(require(aq(0x1e5) + ar(0x1cc) + ar(0x1ef))), Contact_1 = __importDefault(require(aq(0x1e5) + aq(0x1cc))), FastReply_1 = __importDefault(require(ar(0x1e5) + aq(0x1f4) + 'ly')), Message_1 = __importDefault(require(ar(0x1e5) + aq(0x1e0))), Queue_1 = __importDefault(require(aq(0x1e5) + aq(0x1f5))), Setting_1 = __importDefault(require(ar(0x1e5) + aq(0x1e7))), Tag_1 = __importDefault(require(ar(0x1e5) + ar(0x1f9))), Ticket_1 = __importDefault(require(ar(0x1e5) + aq(0x1d6))), User_1 = __importDefault(require(ar(0x1e5) + aq(0x1f0))), Whatsapp_1 = __importDefault(require(aq(0x1e5) + aq(0x1e9) + 'p')), AdminDeleteTenantService = async ({tenantId: M}) => {
        const at = aq, au = ar, N = {};
        N[at(0x1d7)] = at(0x1db) + au(0x1cf);
        const O = N, P = {};
        P['id'] = M;
        const Q = {};
        Q[au(0x1ce)] = P;
        const R = await Tenant_1[at(0x1d8)][au(0x1ed)](Q);
        if (!R)
            throw new AppError_1[(au(0x1d8))](O[at(0x1d7)], 0x32e * -0x4 + 0x213f + -0x1 * 0x12f3);
        const S = {};
        S[at(0x1e8)] = M;
        const T = {};
        T[at(0x1ce)] = S, await ApiConfig_1[at(0x1d8)][at(0x1dd)](T);
        const U = {};
        U[at(0x1e8)] = M;
        const V = {};
        V[at(0x1ce)] = U, await ApiMessage_1[at(0x1d8)][au(0x1dd)](V);
        const W = {};
        W[au(0x1e8)] = M;
        const X = {};
        X[au(0x1ce)] = W, await AutoReply_1[at(0x1d8)][au(0x1dd)](X);
        const Y = {};
        Y[at(0x1e8)] = M;
        const Z = {};
        Z[au(0x1ce)] = Y, await Campaign_1[au(0x1d8)][au(0x1dd)](Z);
        const a0 = {};
        a0[au(0x1e8)] = M;
        const a1 = {};
        a1[at(0x1ce)] = a0, await ChatFlow_1[at(0x1d8)][au(0x1dd)](a1);
        const a2 = {};
        a2[at(0x1e8)] = M;
        const a3 = {};
        a3[au(0x1ce)] = a2, await ContactTag_1[au(0x1d8)][at(0x1dd)](a3);
        const a4 = {};
        a4[au(0x1e8)] = M;
        const a5 = {};
        a5[au(0x1ce)] = a4, await ContactWallet_1[at(0x1d8)][at(0x1dd)](a5);
        const a6 = {};
        a6[au(0x1e8)] = M;
        const a7 = {};
        a7[au(0x1ce)] = a6, await Contact_1[at(0x1d8)][at(0x1dd)](a7);
        const a8 = {};
        a8[au(0x1e8)] = M;
        const a9 = {};
        a9[at(0x1ce)] = a8, await FastReply_1[au(0x1d8)][at(0x1dd)](a9);
        const aa = {};
        aa[at(0x1e8)] = M;
        const ab = {};
        ab[au(0x1ce)] = aa, await Message_1[at(0x1d8)][at(0x1dd)](ab);
        const ac = {};
        ac[at(0x1e8)] = M;
        const ad = {};
        ad[at(0x1ce)] = ac, await Queue_1[at(0x1d8)][au(0x1dd)](ad);
        const ae = {};
        ae[at(0x1e8)] = M;
        const af = {};
        af[au(0x1ce)] = ae, await Setting_1[at(0x1d8)][au(0x1dd)](af);
        const ag = {};
        ag[au(0x1e8)] = M;
        const ah = {};
        ah[au(0x1ce)] = ag, await Tag_1[au(0x1d8)][au(0x1dd)](ah);
        const ai = {};
        ai[at(0x1e8)] = M;
        const aj = {};
        aj[at(0x1ce)] = ai, await Ticket_1[au(0x1d8)][au(0x1dd)](aj);
        const ak = {};
        ak[at(0x1e8)] = M;
        const al = {};
        al[au(0x1ce)] = ak, await User_1[au(0x1d8)][at(0x1dd)](al);
        const am = {};
        am[at(0x1e8)] = M;
        const an = {};
        an[at(0x1ce)] = am, await Whatsapp_1[au(0x1d8)][at(0x1dd)](an), await R[au(0x1dd)]();
    };
exports[ar(0x1d8)] = AdminDeleteTenantService;