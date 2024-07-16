'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x204)) / (-0x14f * 0xb + -0x10 * 0x167 + -0x5 * -0x75e) * (parseInt(l(0x1f6)) / (0x2 * -0x12f6 + -0x2 * 0x12e7 + -0x1 * -0x4bbc)) + -parseInt(m(0x1f7)) / (0x1ef + 0x1 * 0x349 + -0x535) * (-parseInt(l(0x1f1)) / (-0x245f + -0x2b * 0x7f + -0x39b8 * -0x1)) + parseInt(l(0x207)) / (-0x1 * 0x2304 + 0x443 * 0x3 + 0x1640) * (parseInt(l(0x1fe)) / (-0x5b9 + -0xde7 * 0x2 + -0xb2f * -0x3)) + -parseInt(m(0x209)) / (0x81 * 0x11 + -0x1dee + -0x1 * -0x1564) + parseInt(l(0x20b)) / (0x15 * -0x173 + -0x2677 + 0x44ee) + parseInt(l(0x201)) / (0x162f + 0x1ba6 + -0x31cc) * (-parseInt(l(0x202)) / (0x2572 * -0x1 + -0x2b * 0xad + 0x428b)) + -parseInt(m(0x1f2)) / (-0x21d9 + 0xdff * 0x1 + 0x1cf * 0xb);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1053a3 + -0x3 * 0x2cd3b + 0x5a7 * 0xb7));
const k = {};
function a() {
    const t = [
        '2751416ZNrKbd',
        '5916746HBCXad',
        'literal',
        '_uuid()',
        'value',
        '1198zHKfyE',
        '3pPcHZi',
        'all',
        'PtqXs',
        'exports',
        'UUID',
        'dervn',
        'sequelize',
        '3890316MyllTx',
        'ApiMessage',
        '__esModule',
        '11984121rmGePR',
        '10xvjxgP',
        'gen_random',
        '300xqsvSB',
        'Sequelize',
        'QSKyX',
        '10AnWLuJ',
        'erty',
        '483994LhzlEF',
        'changeColu',
        '7341008uetJEB',
        'SnbRW',
        'defineProp',
        'DataTypes'
    ];
    a = function () {
        return t;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x21e9 + 0x1 * 0x329 + 0x187 * -0x17);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[n(0x1f5)] = !![], Object[n(0x20d) + n(0x208)](exports, n(0x200), k);
const sequelize_1 = require(n(0x1fd));
module[n(0x1fa)] = {
    'up': d => {
        const p = o, q = o, e = {};
        e[p(0x20c)] = p(0x1ff) + 's', e[p(0x1f9)] = q(0x203) + q(0x1f4);
        const f = e;
        return Promise[q(0x1f8)]([d[q(0x20a) + 'mn'](f[p(0x20c)], 'id', {
                'allowNull': ![],
                'primaryKey': !![],
                'type': sequelize_1[q(0x20e)][q(0x1fb)],
                'defaultValue': sequelize_1[p(0x205)][q(0x1f3)](f[p(0x1f9)])
            })]);
    },
    'down': d => {
        const r = n, s = n, e = {};
        e[r(0x1fc)] = s(0x1ff) + 's', e[s(0x206)] = r(0x203) + s(0x1f4);
        const f = e;
        return Promise[s(0x1f8)]([d[s(0x20a) + 'mn'](f[r(0x1fc)], 'id', {
                'allowNull': ![],
                'primaryKey': !![],
                'type': sequelize_1[r(0x20e)][s(0x1fb)],
                'defaultValue': sequelize_1[s(0x205)][s(0x1f3)](f[s(0x206)])
            })]);
    }
};