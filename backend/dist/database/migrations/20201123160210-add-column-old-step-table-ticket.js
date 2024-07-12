'use strict';
const l = b, m = b;
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(j(0x119)) / (-0x25dd + -0x9 * -0x11d + 0x1bd9) + -parseInt(j(0x131)) / (-0x21d0 + -0x2 * -0x29b + -0x2 * -0xe4e) + parseInt(k(0x11f)) / (0x1b9 * 0x6 + -0x8a5 * -0x3 + -0x22 * 0x111) + -parseInt(k(0x11a)) / (-0x25c2 * -0x1 + -0xf8 + -0x416 * 0x9) * (parseInt(j(0x135)) / (0x77 * -0x15 + -0x152 * 0x13 + 0x116f * 0x2)) + -parseInt(k(0x117)) / (-0x15dc + 0xb * 0x1a + 0x14c4) * (parseInt(j(0x12c)) / (0xc15 + -0xe9e * -0x2 + -0xa * 0x421)) + parseInt(k(0x121)) / (-0x1deb + -0x1369 + 0x18ae * 0x2) + -parseInt(j(0x11b)) / (0x188a + -0x717 * 0x3 + -0x33c * 0x1) * (-parseInt(k(0x124)) / (-0x196f + 0x1f93 + -0x1 * 0x61a));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x83 * 0x208b + -0xc57c8 + 0x924fb));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x4 * -0x79d + 0x29 + -0x3 * -0xa75);
        let h = e[f];
        return h;
    }, b(c, d);
}
const i = {};
function a() {
    const r = [
        'uxKQT',
        '12780520werKdo',
        'dXctX',
        'all',
        '3500kjVqtu',
        'sequelize',
        'StepsReply',
        'oldStepAut',
        'WsWqv',
        'FWvCu',
        'DataTypes',
        'value',
        '56gplAuF',
        '__esModule',
        'hLAnn',
        'nSQpa',
        'erty',
        '768612yGJVbL',
        'SET\x20NULL',
        'oReplyId',
        'CASCADE',
        '22625kkdRew',
        'exports',
        'INTEGER',
        'Tickets',
        '970098eIEeMo',
        'defineProp',
        '1101769PqUnaF',
        '312gRMIeY',
        '4401Iwfbtk',
        'addColumn',
        'removeColu',
        'MKEJS',
        '125952cJgFka'
    ];
    a = function () {
        return r;
    };
    return a();
}
i[l(0x12b)] = !![], Object[l(0x118) + m(0x130)](exports, m(0x12d), i);
const sequelize_1 = require(l(0x125));
module[l(0x114)] = {
    'up': d => {
        const n = l, o = l, e = {};
        e[n(0x129)] = o(0x116), e[n(0x11e)] = o(0x127) + n(0x133), e[o(0x12f)] = o(0x126), e[n(0x122)] = o(0x134), e[o(0x128)] = o(0x132);
        const f = e;
        return Promise[n(0x123)]([d[n(0x11c)](f[o(0x129)], f[o(0x11e)], {
                'type': sequelize_1[o(0x12a)][n(0x115)],
                'references': {
                    'model': f[o(0x12f)],
                    'key': 'id'
                },
                'onUpdate': f[n(0x122)],
                'onDelete': f[o(0x128)],
                'allowNull': !![],
                'defaultValue': null
            })]);
    },
    'down': d => {
        const p = m, q = l, e = {};
        e[p(0x120)] = p(0x116), e[p(0x12e)] = p(0x127) + p(0x133);
        const f = e;
        return d[p(0x11d) + 'mn'](f[q(0x120)], f[p(0x12e)]);
    }
};