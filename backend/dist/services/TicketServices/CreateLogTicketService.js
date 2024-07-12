'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x1f7)) / (-0x157c + -0x1 * 0x208f + 0x360c) * (-parseInt(m(0x1f3)) / (0x1c69 + 0x2613 + -0x427a)) + parseInt(l(0x205)) / (-0x1b47 + 0x1 * 0x23ae + -0x2 * 0x432) * (parseInt(l(0x203)) / (0x190f + -0x156f * 0x1 + -0x39c)) + parseInt(l(0x1f1)) / (0x4c3 + 0x2076 + -0x2534) + -parseInt(l(0x1ee)) / (-0x1d00 + -0x5 * 0xcd + -0x59 * -0x5f) + parseInt(m(0x202)) / (-0x1b20 + 0x21b4 + -0x68d) * (-parseInt(l(0x1fc)) / (0x586 * -0x5 + 0x1be6 + -0x40)) + parseInt(m(0x1f9)) / (0x231 + -0x319 * 0x5 + 0xd55) * (-parseInt(l(0x1fe)) / (-0x1752 + 0x6 * 0x130 + -0x40f * -0x4)) + -parseInt(m(0x1f0)) / (0xcd + -0x1d7b * 0x1 + 0x1cb9);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1a0b * 0x35 + -0xa1 * 0xcd6 + 0x179220));
function a() {
    const s = [
        '../../mode',
        '1640UwLGXb',
        'value',
        'userId',
        'ticketId',
        '68061KqZJkX',
        '103444adaJQE',
        'create',
        '45DCyqXd',
        'defineProp',
        '7073166AnruZD',
        'erty',
        '5284972CaibTP',
        '6420170vayUzW',
        'ls/LogTick',
        '27288Yyesfg',
        'queueId',
        'default',
        'type',
        '80BRHEnG',
        'fault',
        '20511KUOvHD',
        '__importDe',
        '__esModule',
        '56paNyFJ'
    ];
    a = function () {
        return s;
    };
    return a();
}
var __importDefault = this && this[n(0x1fa) + n(0x1f8)] || function (c) {
    const p = o;
    return c && c[p(0x1fb)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2c2 * 0x5 + -0x1ffe + -0x1 * -0x2fb5);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[n(0x1ff)] = !![], Object[o(0x1ed) + n(0x1ef)](exports, o(0x1fb), k);
const LogTicket_1 = __importDefault(require(o(0x1fd) + n(0x1f2) + 'et')), CreateLogTicketService = async ({
        type: d,
        userId: e,
        ticketId: f,
        queueId: g
    }) => {
        const q = o, r = n, h = {};
        h[q(0x200)] = e, h[r(0x201)] = f, h[q(0x1f6)] = d, h[r(0x1f4)] = g, await LogTicket_1[r(0x1f5)][r(0x204)](h);
    };
exports[n(0x1f5)] = CreateLogTicketService;