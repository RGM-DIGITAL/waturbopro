'use strict';
function a() {
    const E = [
        'oVBtk',
        'detail',
        'Finalized\x20',
        'fault',
        'count',
        'Invoices',
        '../models/',
        'Tenant',
        'ate',
        'error',
        'pxtlc',
        'name',
        'iDqrF',
        'removeOnFa',
        '../utils/l',
        'info',
        '141LFNThH',
        'ogger',
        'createdAt',
        'like',
        'defineProp',
        'zqGRD',
        '7044548DTqAFS',
        'Iwkfk',
        'format',
        'removeOnCo',
        '2974992wElWXz',
        'diff',
        '__importDe',
        'JMeJR',
        'findAll',
        'SiBLz',
        'DD/MM/yyyy',
        'open',
        '5248iJWPzB',
        '161388ilRGmp',
        'planId',
        '348983zXsukS',
        'erty',
        'duration',
        '1127595vsnjCp',
        'fy\x20Invoice',
        'moment',
        'repeat',
        'map',
        'Verify\x20Inv',
        '__esModule',
        'value',
        'jobId',
        '192aGWoPo',
        'findByPk',
        'wFKGl',
        'TCIpa',
        'Error\x20Veri',
        'mplete',
        'create',
        'Plan',
        'status',
        'logger',
        'dueDate',
        'iated',
        'YYYY-MM-DD',
        'sequelize',
        'updatedAt',
        'every',
        'message',
        'asDays',
        'tenantId',
        '4234764jmdVus',
        'oices\x20Init',
        'InvoiceCre',
        'default'
    ];
    a = function () {
        return E;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1c0d + 0xba * 0x2b + 0x27 * -0xb);
        let h = e[f];
        return h;
    }, b(c, d);
}
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(v(0x1a7)) / (-0x190e * -0x1 + -0x1fc6 + 0x6b9 * 0x1) + parseInt(w(0x1a4)) / (0x24cb * -0x1 + 0x523 + 0x1faa) * (parseInt(w(0x192)) / (-0xea5 + 0x20fe + -0x1 * 0x1256)) + -parseInt(v(0x19c)) / (0x11 * -0x107 + 0x8 * 0xea + 0xa2b) + parseInt(v(0x1aa)) / (0x392 * -0x9 + -0x5 * -0x48b + 0x4b8 * 0x2) + parseInt(v(0x1c6)) / (0x6 * -0x572 + -0x486 + -0x1 * -0x2538) + parseInt(v(0x198)) / (0x742 + 0x2236 + 0x1 * -0x2971) + parseInt(w(0x1b3)) / (-0x2463 * 0x1 + 0x4 * -0x22d + 0x1 * 0x2d1f) * (-parseInt(v(0x1a5)) / (-0x16 * -0x1bb + 0x5ad * 0x6 + -0x4817));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x43eb * -0x39 + 0xc5b * -0xa3 + 0xf3d0));
var __importDefault = this && this[x(0x19e) + x(0x185)] || function (c) {
    const z = x;
    return c && c[z(0x1b0)] ? c : { 'default': c };
};
const k = {};
k[x(0x1b1)] = !![], Object[y(0x196) + y(0x1a8)](exports, y(0x1b0), k);
const Tenant_1 = __importDefault(require(x(0x188) + x(0x189))), Plan_1 = __importDefault(require(y(0x188) + x(0x1ba))), logger_1 = require(y(0x190) + x(0x193)), moment_1 = __importDefault(require(x(0x1ac))), Invoices_1 = __importDefault(require(x(0x188) + y(0x187))), sequelize_1 = require(y(0x1c0)), l = {};
l[x(0x1c2)] = (-0x1efd + 0x5 * 0x109 + -0x4 * -0x683) * (0x3b * 0x9b + -0x1a11 * -0x1 + -0x1de * 0x1f);
const m = {};
m[x(0x19b) + y(0x1b8)] = !![], m[y(0x18f) + 'il'] = ![], m[x(0x1b2)] = y(0x1c8) + x(0x18a), m[y(0x1ad)] = l, exports[x(0x1c9)] = {
    'key': y(0x1c8) + x(0x18a),
    'options': m,
    async 'handle'() {
        const A = x, B = x, e = {};
        e[A(0x19f)] = A(0x1a2), e[B(0x199)] = function (g, h) {
            return g < h;
        }, e[A(0x1b6)] = function (g, h) {
            return g + h;
        }, e[A(0x1b5)] = A(0x1bf), e[B(0x197)] = function (g, h) {
            return g === h;
        }, e[A(0x18c)] = A(0x1a3), e[B(0x1a1)] = A(0x1af) + B(0x1c7) + A(0x1be), e[B(0x18e)] = B(0x184) + B(0x187), e[A(0x1ca)] = B(0x1b7) + A(0x1ab) + 's';
        const f = e;
        try {
            logger_1[A(0x1bc)][A(0x191)](f[A(0x1a1)]);
            const g = await Tenant_1[B(0x1c9)][B(0x1a0)]();
            g[A(0x1ae)](async h => {
                const C = A, D = B, {dueDate: i} = h, j = (-0x223a * 0x1 + 0xb3 * 0x1 + 0x2187, moment_1[C(0x1c9)])(i)[D(0x19a)](), n = (0x1 * 0x17d5 + -0x5 * 0x56c + 0x347, moment_1[C(0x1c9)])()[D(0x19a)](), o = (0x1870 + 0x2440 + -0x8 * 0x796, moment_1[C(0x1c9)])((-0x1780 + -0xe09 + -0x3 * -0xc83, moment_1[D(0x1c9)])())[D(0x19a)](f[C(0x19f)]), p = (-0x875 + 0x265d + -0x1de8, moment_1[C(0x1c9)])(i)[C(0x19a)](f[C(0x19f)]), q = (-0x1 * 0x525 + -0x26c9 + -0x2bee * -0x1, moment_1[C(0x1c9)])(p, f[D(0x19f)])[C(0x19d)]((-0xd * 0x292 + 0x629 + 0x1b41 * 0x1, moment_1[C(0x1c9)])(o, f[C(0x19f)])), r = moment_1[D(0x1c9)][D(0x1a9)](q)[D(0x1c4)]();
                if (f[D(0x199)](r, -0x21e6 + -0x2087 + 0x4281)) {
                    const s = await Plan_1[C(0x1c9)][C(0x1b4)](h[D(0x1a6)]), t = await Invoices_1[C(0x1c9)][D(0x186)]({
                            'where': {
                                'tenantId': h['id'],
                                'dueDate': { [sequelize_1['Op'][D(0x195)]]: f[D(0x1b6)]((0x1 * -0xb + 0x14ee + -0x14e3, moment_1[C(0x1c9)])(i)[D(0x19a)](f[D(0x1b5)]), '%') }
                            }
                        });
                    if (f[D(0x197)](t, 0x1f5 * 0x5 + 0x1695 + -0x205e)) {
                        const u = {};
                        u[C(0x1cb)] = s[D(0x18d)], u[D(0x1bb)] = f[D(0x18c)], u[D(0x1b1)] = s[C(0x1b1)], u[C(0x1c1)] = n, u[D(0x194)] = n, u[D(0x1bd)] = j, u[D(0x1c5)] = h['id'], await Invoices_1[D(0x1c9)][C(0x1b9)](u);
                    }
                }
            }), logger_1[A(0x1bc)][B(0x191)](f[A(0x18e)]);
        } catch (h) {
            const i = {};
            i[B(0x1c3)] = f[A(0x1ca)], i[B(0x18b)] = h, logger_1[B(0x1bc)][B(0x18b)](i);
            throw new Error(h);
        }
    }
};