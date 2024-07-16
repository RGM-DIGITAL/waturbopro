'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0x6a)) / (0x15f * -0x15 + -0x951 + -0x377 * -0xb) + -parseInt(q(0x84)) / (-0x1 * -0x22c7 + -0x24af * -0x1 + -0x44 * 0x10d) + -parseInt(q(0x67)) / (0x15 * -0xf + -0x844 + 0x982) * (-parseInt(q(0x82)) / (0x2ce * 0x4 + -0x6 * -0x29f + -0x1aee)) + -parseInt(q(0x75)) / (-0x89 * 0x26 + 0x1a2f * 0x1 + 0x175 * -0x4) + parseInt(r(0x74)) / (0x1 * -0x1b8d + 0x32f + -0x7 * -0x37c) + -parseInt(r(0x72)) / (-0x4b3 * -0x3 + -0x68c + 0x6 * -0x141) + parseInt(q(0x7f)) / (0x1418 + 0x2 * -0x926 + 0x1c4 * -0x1) * (parseInt(q(0x7a)) / (0x63 * -0x11 + -0x1bb * -0xc + 0x6 * -0x25c));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1d2b19 + 0xc2294 * -0x1 + -0xc40f * -0x49));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2594 + 0x1ada + -0x4007);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[s(0x6c) + s(0x68)] || function (c) {
    const u = t;
    return c && c[u(0x80)] ? c : { 'default': c };
};
const k = {};
k[s(0x81)] = !![], Object[s(0x6d) + t(0x70)](exports, t(0x80), k);
const AppError_1 = __importDefault(require(s(0x73) + t(0x78) + 'r')), Plan_1 = __importDefault(require(t(0x7c) + s(0x77))), UpdatePlanService = async e => {
        const v = t, w = s, f = {};
        f[v(0x83)] = w(0x7e) + w(0x76);
        const g = f, {
                id: h,
                name: i,
                maxUsers: j,
                maxConnections: l,
                value: m,
                isPublic: n
            } = e, o = await Plan_1[v(0x79)][w(0x6f)](h);
        if (!o)
            throw new AppError_1[(v(0x79))](g[w(0x83)], 0xd11 + -0x1c65 + -0x874 * -0x2);
        const p = {};
        return p[v(0x6e)] = i, p[v(0x71)] = j, p[w(0x69) + v(0x7b)] = l, p[w(0x81)] = m, p[v(0x6b)] = n, await o[v(0x7d)](p), o;
    };
function a() {
    const x = [
        'default',
        '981RdeKwz',
        'ions',
        '../../mode',
        'update',
        'ERR_NO_PLA',
        '54728TcvViJ',
        '__esModule',
        'value',
        '340948aKYCZJ',
        'SYOSH',
        '615368CIrEmU',
        '30HLgBUq',
        'fault',
        'maxConnect',
        '1598696DPJRsA',
        'isPublic',
        '__importDe',
        'defineProp',
        'name',
        'findByPk',
        'erty',
        'maxUsers',
        '9822351SiCtaB',
        '../../erro',
        '5120724bcMhBX',
        '6911150leVjqU',
        'N_FOUND',
        'ls/Plan',
        'rs/AppErro'
    ];
    a = function () {
        return x;
    };
    return a();
}
exports[s(0x79)] = UpdatePlanService;