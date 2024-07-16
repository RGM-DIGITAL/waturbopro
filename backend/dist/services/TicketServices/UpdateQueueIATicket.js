'use strict';
const t = b, u = b;
function a() {
    const y = [
        'value',
        '__importDe',
        'ZmNTK',
        'fault',
        'default',
        'update',
        'EtltM',
        '21606020nlzHRH',
        '13158mXkjyL',
        'is_chat_ia',
        'Emit',
        '1278wFTMUV',
        '3432lmMNDD',
        '1539pcmOsL',
        'payload',
        'ers/socket',
        'userId',
        'reload',
        '554jsDXdb',
        '181199NhUZJh',
        'queueId',
        'erty',
        'rs/AppErro',
        'chatFlowId',
        'ate',
        '__esModule',
        'ticket',
        'defineProp',
        'tenantId',
        'stepChatFl',
        '../../erro',
        'ticket:upd',
        'DsgoA',
        '4829545ZvEPUR',
        'KET_FOUND',
        '7815dGMOib',
        'ERR_NO_TIC',
        '812000uEMxaL',
        '2|3|4|0|1',
        '../../help',
        'type',
        'split'
    ];
    a = function () {
        return y;
    };
    return a();
}
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x1b5)) / (0x39e * 0x7 + -0x283 + -0x16ce) + parseInt(r(0x1b4)) / (-0x1 * -0x150a + 0x1a0 * -0x1 + -0x1368) * (-parseInt(s(0x1af)) / (-0x2248 + -0x7c * 0x46 + 0x4433)) + -parseInt(s(0x1c7)) / (-0x1 * -0xb27 + -0x2046 + 0x1523) + -parseInt(s(0x1c5)) / (-0x12e + -0x2644 + 0x2777) * (parseInt(s(0x1ad)) / (-0x7 * 0x20b + -0x97 * -0x2f + 0x31 * -0x46)) + -parseInt(s(0x1c3)) / (0xe86 + 0x4 * -0x858 + -0x12e1 * -0x1) + -parseInt(r(0x1ae)) / (0x1c90 + -0xf1 * 0x19 + -0x4ff) * (parseInt(s(0x1aa)) / (-0x9 * -0x329 + 0x1413 + -0x563 * 0x9)) + parseInt(r(0x1a9)) / (-0x1c1a + -0x177e * 0x1 + 0x33a2);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x880c2 + 0x96764 + 0x2 * -0x64f07));
var __importDefault = this && this[t(0x1cd) + u(0x1a5)] || function (c) {
    const v = u;
    return c && c[v(0x1bb)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x16c2 + -0x2639 + 0x3ea0);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[t(0x1cc)] = !![], Object[u(0x1bd) + t(0x1b7)](exports, t(0x1bb), k);
const AppError_1 = __importDefault(require(u(0x1c0) + t(0x1b8) + 'r')), socketEmit_1 = __importDefault(require(t(0x1c9) + u(0x1b1) + t(0x1ac))), UpdateQueueIATicket = async (g, h, i = null) => {
        const w = u, x = t, j = {};
        j[w(0x1c2)] = w(0x1c8), j[w(0x1ce)] = x(0x1c1) + x(0x1ba), j[x(0x1a8)] = w(0x1c6) + x(0x1c4);
        const l = j, m = l[w(0x1c2)][x(0x1cb)]('|');
        let n = -0xc57 + -0x1bb * 0x13 + 0x2d38;
        while (!![]) {
            switch (m[n++]) {
            case '0':
                const o = {};
                o[w(0x1be)] = h[x(0x1be)], o[x(0x1ca)] = l[x(0x1ce)], o[x(0x1b0)] = h, (0x1ff9 + 0x11fb * 0x1 + -0x31f4, socketEmit_1[w(0x1a6)])(o);
                continue;
            case '1':
                const p = {};
                p[w(0x1bc)] = h;
                return p;
            case '2':
                if (!h)
                    throw new AppError_1[(w(0x1a6))](l[x(0x1a8)], 0xa0 * 0x1d + 0x22d * -0x8 + 0xa * 0x16);
                continue;
            case '3':
                const q = {};
                q[w(0x1b6)] = g, q[x(0x1bf) + 'ow'] = null, q[x(0x1b9)] = null, q[x(0x1ab)] = ![], q[x(0x1b2)] = i, await h[x(0x1a7)](q);
                continue;
            case '4':
                await h[x(0x1b3)]();
                continue;
            }
            break;
        }
    };
exports[t(0x1a6)] = UpdateQueueIATicket;