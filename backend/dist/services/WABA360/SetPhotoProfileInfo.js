'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1aa8 + -0xbb9 + 0x283e);
        let h = e[f];
        return h;
    }, b(c, d);
}
const q = b, r = b;
function a() {
    const v = [
        's/logger',
        'headers',
        '360_NOT_SE',
        'method',
        'rs/AppErro',
        'error',
        'gs/profile',
        '4284874YuXirx',
        '60YtZBpR',
        '8yiwnmv',
        'erty',
        'KuUCU',
        'API_URL_36',
        '__importDe',
        'defineProp',
        '../../erro',
        'default',
        '311591OcRTah',
        '/photo',
        'T_PHOTO:\x20',
        '5mTuKRr',
        'D360-API-K',
        'form-data',
        '2deDMQt',
        '90GbwiAZ',
        '4OvjLxs',
        'data',
        'fault',
        'axios',
        '4386348CWiYES',
        '../../util',
        'CVWRj',
        '/v1/settin',
        '406089WYyuLg',
        '2119273hiPfjd',
        'file',
        'url',
        'Content-Ty',
        'post',
        '__esModule',
        'value',
        '582841LwVFfm',
        'logger',
        'env',
        'multipart/',
        '756498gnWWiU'
    ];
    a = function () {
        return v;
    };
    return a();
}
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x1eb)) / (0x15c5 + 0x218a + -0x374e) * (parseInt(o(0x1f1)) / (0x96 + -0x1cdb * -0x1 + -0x1d6f)) + parseInt(o(0x207)) / (0x3 * 0x526 + -0x3d * -0x57 + -0x242a) * (parseInt(o(0x1f3)) / (-0x23 * 0x4c + 0x940 + 0x128)) + -parseInt(p(0x1ee)) / (-0x154 * 0x3 + 0x2 * 0xcb5 + 0x261 * -0x9) * (-parseInt(o(0x1f7)) / (-0x3c3 + 0x2111 * -0x1 + 0x24da)) + parseInt(o(0x203)) / (0x1 * 0x37f + -0x252f + 0x15 * 0x19b) * (-parseInt(o(0x1e3)) / (0x1aef + 0x8e0 * -0x1 + 0x1207 * -0x1)) + parseInt(o(0x1fb)) / (-0xd50 + 0x623 * -0x2 + 0x199f) * (-parseInt(p(0x1f2)) / (-0x43a * 0x2 + -0xce3 * -0x1 + -0x465)) + parseInt(o(0x1e1)) / (-0x81f + -0x6 * -0x459 + 0x7c * -0x25) + -parseInt(p(0x1e2)) / (0x1c + 0x59 * 0x5e + 0x21 * -0xfe) * (parseInt(p(0x1fc)) / (-0xd6d * -0x1 + 0x80 * -0x49 + -0xa * -0x250));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * -0xaa072 + -0x6bd74 + 0x1729da));
var __importDefault = this && this[q(0x1e7) + q(0x1f5)] || function (c) {
    const s = r;
    return c && c[s(0x201)] ? c : { 'default': c };
};
const k = {};
k[q(0x202)] = !![], Object[r(0x1e8) + q(0x1e4)](exports, r(0x201), k);
const axios_1 = __importDefault(require(q(0x1f6))), AppError_1 = __importDefault(require(q(0x1e9) + r(0x1de) + 'r')), logger_1 = require(r(0x1f8) + q(0x208)), SetPhotoProfileInfo = async ({
        file: f,
        apiKey: g
    }) => {
        const t = r, u = q, h = {};
        h[t(0x1e5)] = u(0x200), h[u(0x1f9)] = u(0x206) + u(0x1f0);
        const i = h, j = process[u(0x205)][u(0x1e6) + '0'] + (t(0x1fa) + u(0x1e0) + u(0x1ec));
        try {
            const l = {};
            l[u(0x1fd)] = f;
            const m = {};
            return m[t(0x1dd)] = i[u(0x1e5)], m[u(0x1fe)] = j, m[t(0x1f4)] = l, m[u(0x209)] = {}, m[u(0x209)][u(0x1ef) + 'EY'] = g, m[u(0x209)][t(0x1ff) + 'pe'] = i[t(0x1f9)], await (0x1 * -0x1793 + -0xd9b + 0x252e, axios_1[t(0x1ea)])(m), !![];
        } catch (n) {
            logger_1[u(0x204)][u(0x1df)](n);
            throw new AppError_1[(t(0x1ea))](t(0x20a) + t(0x1ed) + n);
        }
    };
exports[r(0x1ea)] = SetPhotoProfileInfo;