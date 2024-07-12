'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(n(0x10b)) / (-0x744 + -0x3 * 0x212 + 0xd7b) + -parseInt(o(0xfd)) / (0x679 * 0x3 + -0x11 * 0x11b + 0x9e * -0x1) * (-parseInt(n(0x10d)) / (-0xe8e + 0x22ac + 0x1 * -0x141b)) + -parseInt(n(0xf9)) / (0x28 * -0xf8 + 0x1 * 0xb5d + 0x1b67) * (-parseInt(o(0x102)) / (0x13cc + -0x3ee * 0x7 + 0x7bb)) + parseInt(o(0x117)) / (-0x662 + -0x1894 + 0x1efc) * (-parseInt(n(0xfb)) / (-0x1 * 0x2659 + 0x15c5 + -0x147 * -0xd)) + -parseInt(o(0x116)) / (-0xf5b + -0xe20 + -0x1 * -0x1d83) * (-parseInt(o(0xfc)) / (0xd7c + -0x1 * 0x2587 + 0x1814)) + parseInt(o(0x11a)) / (0x612 + -0x1529 + 0xf21) + -parseInt(o(0xfe)) / (0xeb4 * -0x1 + -0x6 * -0x4a7 + 0xd2b * -0x1) * (parseInt(n(0x112)) / (-0x1b5 + -0xca3 + 0xe64));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x8c1 * -0x1fc + 0xedb5c + -0x5da49 * -0x3));
const m = {};
function a() {
    const v = [
        'vJqcO',
        'tIvkF',
        '36756aOAVuI',
        'groupId',
        'sQFnd',
        'DataTypes',
        '7098208IkHCyl',
        '6MObiWL',
        'all',
        'Users',
        '5370390jOnSam',
        'PvaGL',
        'InternalMe',
        'erty',
        'TKTFD',
        'DHLFg',
        'ceQoD',
        'CASCADE',
        'exports',
        'defineProp',
        'ssage',
        '2296aERunX',
        'value',
        '1323553ONJlxg',
        '9NbWYPD',
        '156wlCgsr',
        '15895lVkjWk',
        'INTEGER',
        'WdqZQ',
        'sequelize',
        '12915XFabld',
        'VJSTC',
        'bJwCK',
        'Groups',
        'pCntr',
        'efTjd',
        'receiverId',
        'SET\x20NULL',
        'Ildnh',
        '1300914UYpKCZ',
        'SNmGh',
        '53583jHCZqO',
        '__esModule',
        'changeColu'
    ];
    a = function () {
        return v;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1a * 0xeb + 0x39e + 0xd45 * -0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
m[p(0xfa)] = !![], Object[q(0xf7) + q(0x11d)](exports, q(0x10e), m);
const sequelize_1 = require(q(0x101));
module[p(0xf6)] = {
    'up': d => {
        const r = q, s = q, e = {};
        e[r(0xf3)] = r(0x11c) + s(0xf8), e[r(0x106)] = s(0x113), e[r(0x114)] = s(0x105), e[s(0x104)] = s(0xf5), e[s(0x103)] = r(0x108), e[s(0x107)] = s(0x119), e[r(0x111)] = r(0x109);
        const f = e;
        return Promise[r(0x118)]([
            d[r(0x10f) + 'mn'](f[s(0xf3)], f[r(0x106)], {
                'type': sequelize_1[r(0x115)][s(0xff)],
                'references': {
                    'model': f[r(0x114)],
                    'key': 'id'
                },
                'onUpdate': f[s(0x104)],
                'onDelete': f[s(0x104)],
                'allowNull': !![]
            }),
            d[r(0x10f) + 'mn'](f[r(0xf3)], f[s(0x103)], {
                'type': sequelize_1[r(0x115)][s(0xff)],
                'references': {
                    'model': f[s(0x107)],
                    'key': 'id'
                },
                'onUpdate': f[s(0x104)],
                'onDelete': f[s(0x111)],
                'allowNull': !![]
            })
        ]);
    },
    'down': d => {
        const t = p, u = p, e = {};
        e[t(0x11b)] = u(0x11c) + u(0xf8), e[t(0x10c)] = t(0x113), e[t(0x10a)] = t(0x105), e[t(0xf4)] = u(0xf5), e[u(0xf2)] = u(0x108), e[t(0x100)] = u(0x119), e[u(0x110)] = t(0x109);
        const f = e;
        return Promise[t(0x118)]([
            d[u(0x10f) + 'mn'](f[u(0x11b)], f[t(0x10c)], {
                'type': sequelize_1[u(0x115)][t(0xff)],
                'references': {
                    'model': f[t(0x10a)],
                    'key': 'id'
                },
                'onUpdate': f[t(0xf4)],
                'onDelete': f[u(0xf4)],
                'allowNull': !![]
            }),
            d[u(0x10f) + 'mn'](f[u(0x11b)], f[u(0xf2)], {
                'type': sequelize_1[t(0x115)][t(0xff)],
                'references': {
                    'model': f[t(0x100)],
                    'key': 'id'
                },
                'onUpdate': f[t(0xf4)],
                'onDelete': f[t(0x110)],
                'allowNull': !![]
            })
        ]);
    }
};