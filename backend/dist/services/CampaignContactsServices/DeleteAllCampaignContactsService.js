'use strict';
const u = b, v = b;
function a() {
    const z = [
        '1208795uljWUI',
        '85aAenGo',
        '316628OjaXlH',
        'where',
        '58404ydZOVC',
        '../../mode',
        '__importDe',
        'TS_OR_NOT_',
        'findOne',
        '2964312FOxkWh',
        '2CEYxTJ',
        '459CQNlFf',
        '11896OVRIFN',
        'defineProp',
        'fault',
        'rs/AppErro',
        'tenantId',
        'value',
        '3206382utGXNI',
        'destroy',
        '__esModule',
        'RFUgt',
        'GN_CONTACT',
        'campaignId',
        '../../erro',
        'default',
        'ACESSIBLE',
        'PQebM',
        'ERR_CAMPAI',
        'erty',
        'S_NOT_EXIS',
        '8529540jhmIkh',
        'ls/Campaig',
        'nContacts'
    ];
    a = function () {
        return z;
    };
    return a();
}
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(s(0x1bd)) / (0x6b * 0x27 + -0xa16 + -0x13e * 0x5) + -parseInt(s(0x1a3)) / (0x1ba2 + 0x1 * 0x46f + -0x200f) * (-parseInt(s(0x1ab)) / (0x1571 * 0x1 + 0x82c + 0x12 * -0x1a5)) + parseInt(t(0x19d)) / (-0x14a7 + -0x233 * -0x5 + 0x9ac) * (parseInt(t(0x1bc)) / (-0x6ec * -0x2 + -0xf63 * 0x2 + -0x1 * -0x10f3)) + parseInt(s(0x1a2)) / (0x624 + 0x51d + -0xb3b * 0x1) + -parseInt(s(0x1bb)) / (-0x1361 * -0x1 + 0x1d35 + 0x191 * -0x1f) + -parseInt(t(0x1a5)) / (0x2b * 0xc5 + -0xe94 + -0x127b) * (-parseInt(t(0x1a4)) / (-0x2236 + 0x2a9 + -0x137 * -0x1a)) + -parseInt(s(0x1b8)) / (0x25b6 + -0x184b + -0xd61);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xad891 + -0xd4665 * 0x1 + 0x206e6f));
var __importDefault = this && this[u(0x19f) + v(0x1a7)] || function (c) {
    const w = u;
    return c && c[w(0x1ad)] ? c : { 'default': c };
};
const k = {};
k[u(0x1aa)] = !![], Object[v(0x1a6) + v(0x1b6)](exports, v(0x1ad), k);
const CampaignContacts_1 = __importDefault(require(u(0x19e) + v(0x1b9) + v(0x1ba))), AppError_1 = __importDefault(require(u(0x1b1) + u(0x1a8) + 'r')), Campaign_1 = __importDefault(require(u(0x19e) + u(0x1b9) + 'n')), DeleteAllCampaignContactsService = async ({
        campaignId: h,
        tenantId: i
    }) => {
        const x = v, y = u, j = {};
        j[x(0x1b4)] = y(0x1b5) + x(0x1af) + x(0x1b7) + x(0x1a0) + y(0x1b3), j[y(0x1ae)] = y(0x1b5) + y(0x1af) + 'S';
        const l = j;
        try {
            const m = {};
            m['id'] = h, m[x(0x1a9)] = i;
            const n = {};
            n[x(0x1be)] = m;
            const o = await Campaign_1[x(0x1b2)][y(0x1a1)](n);
            if (o?.['id']) {
                const p = {};
                p[x(0x1b0)] = h;
                const q = {};
                q[y(0x1be)] = p, await CampaignContacts_1[y(0x1b2)][y(0x1ac)](q);
            } else
                throw new AppError_1[(y(0x1b2))](l[x(0x1b4)], 0x1bf5 + 0xb * 0xdb + 0x6 * -0x5f7);
        } catch (r) {
            throw new AppError_1[(y(0x1b2))](l[x(0x1ae)], 0x1 * 0x4bd + 0x1 * -0x26f4 + 0x23cb);
        }
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x439 + 0x53c + -0x4d * -0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[v(0x1b2)] = DeleteAllCampaignContactsService;