'use strict';
const k = b, l = b;
function a() {
    const q = [
        'removeColu',
        'DataTypes',
        '22233teQOzR',
        'oReplyId',
        'CASCADE',
        'Tickets',
        'defineProp',
        'all',
        '__esModule',
        'exports',
        'oldStepAut',
        '2221096gVQcBS',
        '7DcSEmL',
        '313021ghpxkw',
        'SET\x20NULL',
        'fechX',
        'StepsReply',
        'value',
        'INTEGER',
        'VcfyP',
        '4390225NTDBIP',
        '18HpPfKi',
        'GTgcQ',
        'ISwQf',
        'MdINW',
        '7569990vbLMLl',
        '308252edWQSM',
        '104uFTMGN',
        'SFCRt',
        'addColumn',
        'erty',
        'sequelize',
        '3549054qyreBi',
        'tzcym'
    ];
    a = function () {
        return q;
    };
    return a();
}
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0x14d)) / (0x1458 + 0x3db + -0x13 * 0x146) + parseInt(j(0x15a)) / (0x2613 + -0x3 * -0x741 + -0x3bd4) + -parseInt(j(0x142)) / (-0x3ae + 0x730 + 0x37f * -0x1) * (-parseInt(i(0x15b)) / (-0x1ac6 + -0x2209 + 0x1 * 0x3cd3)) + parseInt(j(0x154)) / (-0x152e * 0x1 + -0x1 * -0xf0b + -0x18a * -0x4) + -parseInt(j(0x13e)) / (0x2 * -0x339 + 0x5f9 + 0x7f) * (parseInt(i(0x14c)) / (0x2229 + 0x492 + -0x2 * 0x135a)) + -parseInt(i(0x14b)) / (0xbb3 + 0x939 + -0xe * 0x17e) * (-parseInt(i(0x155)) / (-0x171a + 0x3f1 * -0x7 + 0x1 * 0x32ba)) + -parseInt(i(0x159)) / (-0x1e33 + 0x1 * 0x21b5 + 0x4 * -0xde);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0xe179 + 0x137c6f * 0x1 + -0x73e32));
const g = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1453 + -0x92a + -0x3 * 0x34f);
        let h = e[f];
        return h;
    }, b(c, d);
}
g[k(0x151)] = !![], Object[l(0x146) + k(0x13c)](exports, k(0x148), g);
const sequelize_1 = require(k(0x13d));
module[k(0x149)] = {
    'up': d => {
        const m = l, n = k, e = {};
        e[m(0x157)] = n(0x145), e[m(0x13f)] = n(0x14a) + m(0x143);
        const f = e;
        return Promise[m(0x147)]([d[m(0x140) + 'mn'](f[m(0x157)], f[n(0x13f)])]);
    },
    'down': d => {
        const o = l, p = k, e = {};
        e[o(0x15c)] = p(0x145), e[o(0x153)] = p(0x14a) + p(0x143), e[o(0x156)] = p(0x150), e[p(0x158)] = p(0x144), e[o(0x14f)] = p(0x14e);
        const f = e;
        return d[o(0x15d)](f[o(0x15c)], f[o(0x153)], {
            'type': sequelize_1[o(0x141)][o(0x152)],
            'references': {
                'model': f[p(0x156)],
                'key': 'id'
            },
            'onUpdate': f[p(0x158)],
            'onDelete': f[p(0x14f)],
            'allowNull': !![],
            'defaultValue': null
        });
    }
};