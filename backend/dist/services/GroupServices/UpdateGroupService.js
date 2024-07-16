'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(v(0xd9)) / (0x12ec + -0x1aa0 + -0x1 * -0x7b5) + -parseInt(v(0xe9)) / (-0x15a9 * -0x1 + 0x1 * 0xf0d + 0x74 * -0x51) * (parseInt(v(0xec)) / (0x427 * 0x1 + -0x16dd + 0x12b9)) + -parseInt(w(0xdc)) / (0x1aa5 * -0x1 + -0x15d * -0x4 + -0x59 * -0x3d) * (parseInt(v(0xde)) / (-0x13bf + 0x12fe * -0x1 + 0x1 * 0x26c2)) + parseInt(v(0xdf)) / (-0x849 + 0x636 + 0x1 * 0x219) + parseInt(v(0xd5)) / (0x702 + 0x150 + -0x84b * 0x1) * (-parseInt(v(0xdd)) / (0x1288 + 0xd46 * 0x1 + -0x1fc6)) + parseInt(v(0xef)) / (-0x84f + 0x9 * -0x199 + 0x16b9) + parseInt(w(0xea)) / (0x2398 + 0x2 * 0x47 + -0x4 * 0x907);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2b1da + -0x118e8f * 0x1 + 0x1b5cdb));
function a() {
    const C = [
        'userId',
        'iqFxp',
        'defineProp',
        'isActive',
        'rs/AppErro',
        'reload',
        '18keozht',
        '28194090hYVfPZ',
        'gCSDn',
        '294024gSIyOR',
        '../../mode',
        'attributes',
        '1250253RHHvgX',
        'findOne',
        'where',
        'value',
        'bOMqN',
        '../../erro',
        'group',
        'ERR_NO_GRO',
        'tenantId',
        'bJbQZ',
        '1460669GhVVWi',
        '__importDe',
        '__esModule',
        'ls/Group',
        '734357tbOVFK',
        'erty',
        'UP_FOUND',
        '230876znmFlP',
        '40fEubDG',
        '85uKFTBB',
        '199110gVXyAQ',
        'default',
        'update',
        'fault'
    ];
    a = function () {
        return C;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1b0b + 0x1 * 0x20ba + -0x3af2);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[x(0xd6) + y(0xe2)] || function (c) {
    const z = x;
    return c && c[z(0xd7)] ? c : { 'default': c };
};
const k = {};
k[x(0xf2)] = !![], Object[y(0xe5) + y(0xda)](exports, x(0xd7), k);
const AppError_1 = __importDefault(require(x(0xf4) + y(0xe7) + 'r')), Group_1 = __importDefault(require(x(0xed) + y(0xd8))), UpdateGroupService = async ({
        groupData: h,
        groupId: i
    }) => {
        const A = y, B = y, j = {};
        j[A(0xeb)] = A(0xf5), j[B(0xf3)] = B(0xe6), j[B(0xe4)] = A(0xe3), j[B(0xd4)] = B(0xf6) + B(0xdb);
        const l = j, {
                group: m,
                isActive: n,
                userId: o,
                tenantId: p
            } = h, q = {};
        q['id'] = i, q[A(0xd3)] = p;
        const r = {};
        r[B(0xf1)] = q, r[B(0xee)] = [
            'id',
            l[A(0xeb)],
            l[B(0xf3)],
            l[B(0xe4)]
        ];
        const s = await Group_1[A(0xe0)][B(0xf0)](r);
        if (!s)
            throw new AppError_1[(A(0xe0))](l[B(0xd4)], -0x27b + -0x1b * 0xf + 0x4 * 0x169);
        const t = {};
        t[B(0xf5)] = m, t[B(0xe6)] = n, t[A(0xe3)] = o, await s[A(0xe1)](t);
        const u = {};
        return u[A(0xee)] = [
            'id',
            l[B(0xeb)],
            l[B(0xf3)],
            l[B(0xe4)]
        ], await s[A(0xe8)](u), s;
    };
exports[y(0xe0)] = UpdateGroupService;