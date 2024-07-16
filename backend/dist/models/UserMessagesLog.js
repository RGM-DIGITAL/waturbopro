'use strict';
function b(c, d) {
    var e = a();
    return b = function (f, g) {
        f = f - (0xd86 + 0x4de + -0x119e);
        var h = e[f];
        return h;
    }, b(c, d);
}
var a4 = b, a7 = b;
(function (c, d) {
    var a2 = b, a3 = b, e = c();
    while (!![]) {
        try {
            var f = -parseInt(a2(0x104)) / (-0x67d + -0x17 * 0x29 + 0xa2d) + parseInt(a2(0x10a)) / (-0x1 * -0x13ca + -0xab9 * 0x2 + -0x6 * -0x47) * (parseInt(a2(0xe5)) / (-0x99 * 0x31 + -0x2684 + 0x43d0)) + parseInt(a2(0xe6)) / (0x4e1 * -0x2 + 0x1ad1 + -0x110b) * (-parseInt(a2(0x10b)) / (0x4 * 0x7ff + 0x1a6c + -0x3a63)) + -parseInt(a2(0xdf)) / (-0x14da * -0x1 + -0xd3c * -0x1 + -0x8 * 0x442) * (parseInt(a3(0x10d)) / (-0x41d + 0x1 * 0x21df + -0x1dbb)) + parseInt(a2(0xfc)) / (-0x25e * -0x6 + 0x26ca + -0x1a7b * 0x2) + parseInt(a2(0xee)) / (0x197a + 0x1a04 + -0x3375) + parseInt(a2(0x102)) / (-0x6 * -0x10b + -0xf97 * -0x2 + -0x2566);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2604 + -0x3472b * 0x1 + 0x72de8));
var __decorate = this && this[a4(0xe2)] || function (e, f, g, h) {
        var a5 = a4, a6 = a4, j = {
                'jqpee': function (o, p) {
                    return o < p;
                },
                'MdSyI': function (o, p) {
                    return o === p;
                },
                'YTLYP': function (o, p) {
                    return o === p;
                },
                'gVDbX': a5(0xd3),
                'pByYY': function (o, p) {
                    return o === p;
                },
                'jvDgH': a6(0xf1),
                'jnszJ': function (o, p) {
                    return o - p;
                },
                'bydJW': function (o, p) {
                    return o >= p;
                },
                'Cprya': function (o, p) {
                    return o < p;
                },
                'FgpSo': function (o, p) {
                    return o(p);
                },
                'LYZpB': function (o, p) {
                    return o > p;
                },
                'yRRpq': function (o, p, q, s) {
                    return o(p, q, s);
                },
                'vpyjD': function (o, p, q) {
                    return o(p, q);
                },
                'HLajS': function (o, p) {
                    return o > p;
                }
            }, k = arguments[a6(0xde)], l = j[a5(0xf0)](k, 0x47 * 0x16 + -0x120d + 0x1 * 0xbf6) ? f : j[a6(0xc9)](h, null) ? h = Object[a5(0xfa) + a5(0xec) + a5(0xcb)](f, g) : h, m;
        if (j[a5(0xd7)](typeof Reflect, j[a5(0xc8)]) && j[a5(0x10c)](typeof Reflect[a6(0xf9)], j[a6(0x10f)]))
            l = Reflect[a5(0xf9)](e, f, g, h);
        else {
            for (var n = j[a5(0xcc)](e[a5(0xde)], -0x527 + -0x13f2 + 0x191a); j[a6(0x107)](n, 0x1 * 0xd21 + 0x233a + 0x305b * -0x1); n--)
                if (m = e[n])
                    l = (j[a5(0xfb)](k, 0xa55 * -0x1 + -0x199c + -0x2ff * -0xc) ? j[a5(0xce)](m, l) : j[a5(0xfe)](k, 0x1 * -0x1890 + -0x2 * 0x11ec + 0x3c6b) ? j[a6(0x10e)](m, f, g, l) : j[a5(0xcf)](m, f, g)) || l;
        }
        return j[a6(0xed)](k, -0x23c1 + 0x4cf + 0x1ef5 * 0x1) && l && Object[a6(0xdb) + a6(0xda)](f, g, l), l;
    }, __metadata = this && this[a7(0xe8)] || function (d, e) {
        var a8 = a7, a9 = a4, f = {};
        f[a8(0xf2)] = function (h, i) {
            return h === i;
        }, f[a9(0xf7)] = a9(0xd3), f[a9(0x109)] = a8(0xf1);
        var g = f;
        if (g[a9(0xf2)](typeof Reflect, g[a8(0xf7)]) && g[a8(0xf2)](typeof Reflect[a8(0x101)], g[a8(0x109)]))
            return Reflect[a8(0x101)](d, e);
    }, __importDefault = this && this[a4(0xd5) + a4(0xd8)] || function (c) {
        var aa = a7;
        return c && c[aa(0xdc)] ? c : { 'default': c };
    }, a0 = {};
a0[a7(0xf3)] = !![], Object[a4(0xdb) + a7(0xda)](exports, a7(0xdc), a0);
const sequelize_typescript_1 = require(a7(0xef) + a4(0xd2)), Message_1 = __importDefault(require(a7(0xd9))), Ticket_1 = __importDefault(require(a7(0xca))), User_1 = __importDefault(require(a7(0xe1)));
let UserMessagesLog = class UserMessagesLog extends sequelize_typescript_1[a7(0xf6)] {
};
__decorate([
    sequelize_typescript_1[a7(0x106)],
    sequelize_typescript_1[a4(0xcd) + a4(0x110)],
    sequelize_typescript_1[a4(0xf8)],
    __metadata(a7(0xea) + 'e', Number)
], UserMessagesLog[a7(0xe0)], 'id', void (-0xa57 * 0x1 + -0xc4f + 0x16a6)), __decorate([
    (-0xbf2 + -0x1d2b + 0x291d * 0x1, sequelize_typescript_1[a4(0xeb)])(() => User_1[a7(0xd1)]),
    sequelize_typescript_1[a7(0xf8)],
    __metadata(a7(0xea) + 'e', Number)
], UserMessagesLog[a4(0xe0)], a7(0xd4), void (-0x126f * 0x1 + 0x2 * 0xecc + -0x1 * 0xb29)), __decorate([
    (-0x8 * -0x84 + -0x91c + 0x3a * 0x16, sequelize_typescript_1[a7(0xd6)])(() => User_1[a7(0xd1)]),
    __metadata(a4(0xea) + 'e', User_1[a4(0xd1)])
], UserMessagesLog[a4(0xe0)], a4(0x105), void (-0x142c * -0x1 + 0x58 * 0x60 + -0xd4b * 0x4)), __decorate([
    (-0xf95 + 0x1 * 0x8bf + 0x6d6, sequelize_typescript_1[a4(0xeb)])(() => Message_1[a4(0xd1)]),
    (0x12f6 + 0x605 * 0x3 + -0x2505, sequelize_typescript_1[a7(0xdd)])(null),
    sequelize_typescript_1[a4(0xc6)],
    sequelize_typescript_1[a4(0xf8)],
    __metadata(a4(0xea) + 'e', String)
], UserMessagesLog[a7(0xe0)], a4(0x100), void (-0x1fc7 * 0x1 + -0x2282 + 0x1 * 0x4249)), __decorate([
    (-0x5d4 + 0x896 * 0x1 + -0x2c2, sequelize_typescript_1[a4(0xd6)])(() => Message_1[a4(0xd1)], a4(0x100)),
    __metadata(a4(0xea) + 'e', Message_1[a4(0xd1)])
], UserMessagesLog[a4(0xe0)], a4(0x108), void (0x65 * -0x46 + 0x15 + 0x85 * 0x35)), __decorate([
    (-0x21ba + 0xa97 + -0x1723 * -0x1, sequelize_typescript_1[a4(0xeb)])(() => Ticket_1[a7(0xd1)]),
    (-0x1277 * 0x1 + -0x1d33 + 0x2faa, sequelize_typescript_1[a4(0xdd)])(null),
    sequelize_typescript_1[a4(0xc6)],
    sequelize_typescript_1[a4(0xf8)],
    __metadata(a7(0xea) + 'e', Number)
], UserMessagesLog[a4(0xe0)], a4(0xe4), void (-0x1 * -0x22b5 + -0x974 + -0x1941 * 0x1)), __decorate([
    (-0x223d * 0x1 + -0xa57 * -0x2 + 0xd8f, sequelize_typescript_1[a4(0xd6)])(() => Ticket_1[a7(0xd1)]),
    __metadata(a4(0xea) + 'e', Ticket_1[a7(0xd1)])
], UserMessagesLog[a7(0xe0)], a7(0xc7), void (-0x25 * -0x24 + -0x1bf6 + 0x16c2)), __decorate([
    sequelize_typescript_1[a4(0xf5)],
    (-0x7f2 * -0x1 + -0x1 * 0x1bf9 + 0x1407, sequelize_typescript_1[a4(0xf8)])(sequelize_typescript_1[a7(0xf4)][a4(0xe7)](-0x214d + 0x266 * -0xc + 0x4c7 * 0xd)),
    __metadata(a4(0xea) + 'e', Date)
], UserMessagesLog[a4(0xe0)], a4(0x103), void (0x16b9 + -0x59 * -0x21 + -0x3 * 0xb66)), __decorate([
    sequelize_typescript_1[a7(0xe9)],
    (-0x1fc6 + -0x1a39 + 0x39ff, sequelize_typescript_1[a4(0xf8)])(sequelize_typescript_1[a7(0xf4)][a4(0xe7)](0x20dc + 0x1d8a * -0x1 + -0x34c)),
    __metadata(a4(0xea) + 'e', Date)
], UserMessagesLog[a4(0xe0)], a4(0xfd), void (0x31d + 0x259 * 0x1 + -0x576));
function a() {
    var ab = [
        'function',
        'iVFDN',
        'value',
        'DataType',
        'CreatedAt',
        'Model',
        'ctFRS',
        'Column',
        'decorate',
        'getOwnProp',
        'Cprya',
        '2188256jPiimv',
        'updatedAt',
        'LYZpB',
        'freezeTabl',
        'messageId',
        'metadata',
        '3375300dMhQMw',
        'createdAt',
        '110462AONPdx',
        'user',
        'PrimaryKey',
        'bydJW',
        'message',
        'LrUpx',
        '562sXmivj',
        '105590RFGAYd',
        'pByYY',
        '14ihjejZ',
        'yRRpq',
        'jvDgH',
        'ent',
        'AllowNull',
        'ticket',
        'gVDbX',
        'MdSyI',
        './Ticket',
        'ptor',
        'jnszJ',
        'AutoIncrem',
        'FgpSo',
        'vpyjD',
        'eName',
        'default',
        'typescript',
        'object',
        'userId',
        '__importDe',
        'BelongsTo',
        'YTLYP',
        'fault',
        './Message',
        'erty',
        'defineProp',
        '__esModule',
        'Default',
        'length',
        '1145202mQxkCa',
        'prototype',
        './User',
        '__decorate',
        'Table',
        'ticketId',
        '477rLfkkF',
        '8KGBWEC',
        'DATE',
        '__metadata',
        'UpdatedAt',
        'design:typ',
        'ForeignKey',
        'ertyDescri',
        'HLajS',
        '1121724GEKiPm',
        'sequelize-',
        'jqpee'
    ];
    a = function () {
        return ab;
    };
    return a();
}
var a1 = {};
a1[a7(0xff) + a7(0xd0)] = !![], UserMessagesLog = __decorate([(0x6c4 * -0x1 + -0x20b * -0x3 + 0xa3 * 0x1, sequelize_typescript_1[a7(0xe3)])(a1)], UserMessagesLog), exports[a7(0xd1)] = UserMessagesLog;