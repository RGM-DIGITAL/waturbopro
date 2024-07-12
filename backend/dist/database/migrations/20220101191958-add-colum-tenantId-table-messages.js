'use strict';
const l = b, m = b;
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(j(0x71)) / (0x1d09 + 0xa5 * 0x16 + -0x2b36) * (-parseInt(j(0x7b)) / (-0xf36 + 0x1404 + -0x4cc * 0x1)) + -parseInt(j(0x8c)) / (-0x1fb2 + 0x1 * -0x4a9 + 0x245e) * (-parseInt(k(0x75)) / (0x2221 * -0x1 + -0x79 * -0x2b + -0x2 * -0x6e9)) + parseInt(j(0x8a)) / (0x128a + 0x17e1 * 0x1 + -0x192 * 0x1b) + parseInt(k(0x8d)) / (0x38e + 0x2 * -0x32e + 0xb5 * 0x4) + parseInt(k(0x7c)) / (0x1 * -0x806 + -0x34 * -0x71 + -0xee7) * (parseInt(k(0x78)) / (0x5e2 + -0x1888 + -0x12ae * -0x1)) + -parseInt(j(0x91)) / (-0xafd + 0x1 * -0x2261 + -0x2d67 * -0x1) * (parseInt(j(0x7e)) / (0x133 * -0x19 + -0x1 * 0x120f + 0x3014)) + -parseInt(k(0x89)) / (-0xa4 * -0x13 + 0x1e0c + -0x2a2d);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x7a3d9 + 0x166ab + 0x19b * 0x8db));
const i = {};
i[l(0x70)] = !![], Object[m(0x8e) + l(0x84)](exports, m(0x87), i);
const sequelize_1 = require(m(0x7f));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x3 * -0xb1e + 0x43 * -0x29 + -0x162f);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const r = [
        'OARWQ',
        'sKVzp',
        '3307293xtTWcd',
        'value',
        '10559HQdtjQ',
        'yOSvo',
        'sllon',
        'Tenants',
        '4epBSmK',
        'RzzCC',
        'all',
        '7265568lqsUIr',
        'Messages',
        'yozWz',
        '22einjml',
        '7ZzxlCt',
        'removeColu',
        '10KDwAyC',
        'sequelize',
        'tenantId',
        'DataTypes',
        'restrict',
        'CASCADE',
        'erty',
        'addColumn',
        'CSiFM',
        '__esModule',
        'INTEGER',
        '22340219kNRaHg',
        '3835465frsOmX',
        'exports',
        '1063497aOqZdR',
        '4651968dDgpIO',
        'defineProp'
    ];
    a = function () {
        return r;
    };
    return a();
}
module[l(0x8b)] = {
    'up': d => {
        const n = l, o = l, e = {};
        e[n(0x72)] = n(0x79), e[n(0x73)] = o(0x80), e[o(0x76)] = o(0x74), e[n(0x7a)] = o(0x83), e[n(0x8f)] = n(0x82);
        const f = e;
        return Promise[o(0x77)]([d[n(0x85)](f[n(0x72)], f[n(0x73)], {
                'type': sequelize_1[n(0x81)][n(0x88)],
                'references': {
                    'model': f[o(0x76)],
                    'key': 'id'
                },
                'onUpdate': f[n(0x7a)],
                'onDelete': f[o(0x8f)],
                'allowNull': !![],
                'defaultValue': null
            })]);
    },
    'down': d => {
        const p = m, q = l, e = {};
        e[p(0x90)] = p(0x79), e[p(0x86)] = q(0x80);
        const f = e;
        return Promise[p(0x77)]([d[q(0x7d) + 'mn'](f[q(0x90)], f[q(0x86)])]);
    }
};