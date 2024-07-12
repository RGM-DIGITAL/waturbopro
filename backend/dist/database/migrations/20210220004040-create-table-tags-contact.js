'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x7 * -0x22a + -0x47 * -0x32 + -0x1b1a);
        let h = e[f];
        return h;
    }, b(c, d);
}
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x209)) / (-0x400 + 0x26f5 * -0x1 + 0x2af6) * (parseInt(s(0x204)) / (-0x3 * -0x925 + 0x2 * 0x1ac + 0x1ec5 * -0x1)) + parseInt(r(0x1f4)) / (0x230 * 0x1 + -0x2618 + 0x23eb) * (parseInt(r(0x20f)) / (-0x5 * -0xe3 + -0x1a2 + -0x1f * 0x17)) + parseInt(s(0x1fb)) / (-0x221a + 0x17ba + 0x377 * 0x3) + -parseInt(r(0x207)) / (0x21e1 + 0x1be6 * -0x1 + 0x5 * -0x131) + -parseInt(s(0x1f0)) / (0x1e58 + -0x1b05 + -0x34c) * (-parseInt(s(0x208)) / (-0x1 * 0x1acb + -0xd89 + -0x9 * -0x47c)) + -parseInt(r(0x203)) / (0x2 * -0x10a2 + -0x502 + 0x264f * 0x1) + -parseInt(r(0x20e)) / (0x21a4 + -0x32 * -0xc3 + -0x8f6 * 0x8) * (parseInt(r(0x1eb)) / (0x80b + -0x896 * -0x2 + 0x192c * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3fec * -0x2e + -0x40 * 0xde5 + 0x74791 * 0x3));
const q = {};
q[t(0x1f6)] = !![], Object[u(0x1fd) + u(0x1f8)](exports, t(0x206), q);
const sequelize_1 = require(u(0x1ee));
module[u(0x202)] = {
    'up': e => {
        const v = t, w = t, f = {};
        f[v(0x1f2)] = w(0x1f7) + 's', f[w(0x1fe)] = w(0x1ef), f[v(0x1ed)] = w(0x20d), f[v(0x1fc)] = v(0x1ff), f[w(0x210)] = v(0x200), f[w(0x205)] = v(0x1ea);
        const g = f, h = {};
        return h[v(0x20c)] = sequelize_1[v(0x1f5)][v(0x1fa)], h[v(0x20b) + v(0x1f3)] = !![], h[v(0x211)] = !![], h[w(0x20a)] = ![], e[w(0x1ec) + 'e'](g[v(0x1f2)], {
            'id': h,
            'tagId': {
                'type': sequelize_1[v(0x1f5)][v(0x1fa)],
                'references': {
                    'model': g[w(0x1fe)],
                    'key': 'id'
                },
                'onUpdate': g[w(0x1ed)],
                'onDelete': g[w(0x1fc)],
                'allowNull': ![]
            },
            'contactId': {
                'type': sequelize_1[v(0x1f5)][w(0x1fa)],
                'references': {
                    'model': g[v(0x210)],
                    'key': 'id'
                },
                'onUpdate': g[v(0x1ed)],
                'onDelete': g[w(0x1ed)],
                'allowNull': ![]
            },
            'tenantId': {
                'type': sequelize_1[v(0x1f5)][v(0x1fa)],
                'references': {
                    'model': g[v(0x205)],
                    'key': 'id'
                },
                'onUpdate': g[v(0x1ed)],
                'onDelete': g[w(0x1ed)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[w(0x1f5)][w(0x201)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[v(0x1f5)][v(0x201)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const x = t, y = u, e = {};
        e[x(0x1f9)] = y(0x1f7) + 's';
        const f = e;
        return d[y(0x1f1)](f[y(0x1f9)]);
    }
};
function a() {
    const z = [
        'sequelize',
        'Tags',
        '3876047HhruyR',
        'dropTable',
        'IXRpw',
        'ent',
        '8019iXVbDM',
        'DataTypes',
        'value',
        'ContactTag',
        'erty',
        'mDcga',
        'INTEGER',
        '2293045PPiOQr',
        'MCMCq',
        'defineProp',
        'OMpCz',
        'RESTRICT',
        'Contacts',
        'DATE',
        'exports',
        '5192784VCwfdU',
        '1064gxDzen',
        'mjhNd',
        '__esModule',
        '2988054npdhvU',
        '8NZBvps',
        '1123ZCubLB',
        'allowNull',
        'autoIncrem',
        'type',
        'CASCADE',
        '6533030kxSUWw',
        '852rZaWgb',
        'RfMKN',
        'primaryKey',
        'Tenants',
        '11juaTjU',
        'createTabl',
        'KMHsO'
    ];
    a = function () {
        return z;
    };
    return a();
}