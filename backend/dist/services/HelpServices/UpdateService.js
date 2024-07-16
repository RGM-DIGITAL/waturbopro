'use strict';
const n = b, o = b;
function a() {
    const s = [
        '../../mode',
        'fault',
        '68ibYQqR',
        '6077880styrfq',
        '16733810vDYwwR',
        '__esModule',
        'update',
        'ls/Help',
        '__importDe',
        'ERR_NO_HEL',
        '9785979xiAZKx',
        'default',
        '../../erro',
        'RMlPJ',
        '22qKvafd',
        'defineProp',
        '3398358TEBQey',
        'value',
        'erty',
        '260595eBExlB',
        '47KmGTmc',
        '14414Htapue',
        '1032hcwTxI',
        'P_FOUND',
        '54642zYuTlk',
        'findByPk',
        'rs/AppErro'
    ];
    a = function () {
        return s;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2462 + -0x1 * -0x62 + -0x22d9);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x1f5)) / (0x95f * 0x2 + 0x1778 * 0x1 + 0x5 * -0x871) * (-parseInt(l(0x1f6)) / (-0x77b + -0x1409 + 0x1b86)) + -parseInt(l(0x1f1)) / (-0x460 + 0x1e42 + -0x25 * 0xb3) + -parseInt(m(0x1fe)) / (-0x1 * -0x4ff + 0x2067 + -0xa * 0x3bd) * (parseInt(l(0x1f4)) / (0x20 * -0x102 + 0xd * -0x30 + -0x6f1 * -0x5)) + parseInt(m(0x1ff)) / (-0x1802 + -0x2349 + 0xbdd * 0x5) + parseInt(m(0x1f9)) / (-0x11b6 + -0x1006 + 0xc9 * 0x2b) * (-parseInt(m(0x1f7)) / (-0x1fb4 + 0x1607 * -0x1 + -0x1 * -0x35c3)) + -parseInt(m(0x1eb)) / (-0x1 * -0x1079 + -0x1 * -0xa8b + 0x1 * -0x1afb) + parseInt(l(0x200)) / (0x8bb + -0x8dc + 0x2b) * (parseInt(m(0x1ef)) / (-0x1f35 * 0x1 + 0x2a5 * -0xb + 0x3c57));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1ad13 * -0x7 + 0x19 * 0x518d + -0xac3bd));
var __importDefault = this && this[n(0x204) + n(0x1fd)] || function (c) {
    const p = o;
    return c && c[p(0x201)] ? c : { 'default': c };
};
const k = {};
k[o(0x1f2)] = !![], Object[o(0x1f0) + n(0x1f3)](exports, n(0x201), k);
const AppError_1 = __importDefault(require(o(0x1ed) + o(0x1fb) + 'r')), Help_1 = __importDefault(require(o(0x1fc) + n(0x203))), UpdateService = async d => {
        const q = o, r = o, e = {};
        e[q(0x1ee)] = q(0x205) + q(0x1f8);
        const f = e, {id: g} = d, h = await Help_1[q(0x1ec)][r(0x1fa)](g);
        if (!h)
            throw new AppError_1[(q(0x1ec))](f[r(0x1ee)], -0x23b4 + -0x26f1 + 0x4c39);
        return await h[q(0x202)](d), h;
    };
exports[n(0x1ec)] = UpdateService;