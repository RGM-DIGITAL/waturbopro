'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0x1e8)) / (-0x2aa * 0x4 + -0x14ee * -0x1 + -0xa45) * (parseInt(j(0x1e3)) / (-0x158a + 0x3d3 + -0x11b9 * -0x1)) + -parseInt(i(0x1db)) / (-0x1e94 + -0x4 * 0x1f5 + 0x266b) + parseInt(i(0x1dd)) / (0x1557 + -0x6bf * 0x3 + 0x116 * -0x1) * (-parseInt(i(0x1ee)) / (0x1 * 0x1623 + 0x1 * -0x8a8 + -0x6bb * 0x2)) + parseInt(j(0x1e0)) / (-0x266a + 0x191c + 0x4 * 0x355) * (-parseInt(i(0x1f4)) / (0x1f9d + -0x4 * -0x54f + -0x34d2)) + parseInt(j(0x1e6)) / (0x35a * 0x6 + -0x253 * 0x1 + -0x11c1) + -parseInt(i(0x1f0)) / (0x102d + 0x4d9 + -0x14fd) + parseInt(i(0x1dc)) / (-0x1cf4 + 0x1c76 * 0x1 + 0x88) * (parseInt(i(0x1d5)) / (-0x2 * -0x38 + -0x1 * -0x1817 + -0x187c));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2f174 + -0x39a1f * 0x1 + 0x41ea9));
const g = {};
function a() {
    const q = [
        '206TIgdIV',
        'addColumn',
        'SET\x20NULL',
        '1726712WSSdAK',
        '__esModule',
        '2598ZPrToM',
        'qiBIo',
        'sequelize',
        'CASCADE',
        'value',
        'INTEGER',
        '10okZTLS',
        'DataTypes',
        '2558970JRSpSG',
        'Whatsapps',
        'exports',
        'removeColu',
        '14dNphGr',
        'erty',
        '2486KrlDzz',
        'QEJBz',
        'wSaRl',
        'chatFlowId',
        'Mmteo',
        'UaqqU',
        '495687QptDan',
        '31430ZCHYuB',
        '772476GkWKwU',
        'klJAP',
        'ChatFlow',
        '393420iVecdt',
        'RCkDg',
        'defineProp'
    ];
    a = function () {
        return q;
    };
    return a();
}
g[k(0x1ec)] = !![], Object[k(0x1e2) + k(0x1d4)](exports, l(0x1e7), g);
const sequelize_1 = require(k(0x1ea));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x8 * -0x148 + -0x1244 + 0x9d8);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[k(0x1f2)] = {
    'up': d => {
        const m = k, n = k, e = {};
        e[m(0x1d6)] = n(0x1f1), e[n(0x1d9)] = n(0x1d8), e[m(0x1e1)] = n(0x1df), e[n(0x1da)] = n(0x1eb), e[n(0x1de)] = m(0x1e5);
        const f = e;
        return d[n(0x1e4)](f[n(0x1d6)], f[n(0x1d9)], {
            'type': sequelize_1[n(0x1ef)][m(0x1ed)],
            'references': {
                'model': f[m(0x1e1)],
                'key': 'id'
            },
            'onUpdate': f[m(0x1da)],
            'onDelete': f[m(0x1de)],
            'allowNull': !![],
            'defaultValue': null
        });
    },
    'down': d => {
        const o = l, p = l, e = {};
        e[o(0x1e9)] = p(0x1f1), e[p(0x1d7)] = p(0x1d8);
        const f = e;
        return d[p(0x1f3) + 'mn'](f[p(0x1e9)], f[p(0x1d7)]);
    }
};