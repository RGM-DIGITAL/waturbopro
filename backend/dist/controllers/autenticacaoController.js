function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x7a0 + 0x2 * 0x6 + 0x1 * 0x8a9);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const w = [
        'post',
        'body',
        '1761952RfDIgC',
        'axios',
        'exports',
        'autenticar',
        '465790YVzDJD',
        'YZBnN',
        '250YdAhlb',
        'SENHA_API',
        '2383356ybfpnh',
        'password',
        'data',
        '5194xsMeGo',
        'USUARIO_AP',
        'username',
        'error',
        '2440984BwODsU',
        'env',
        '36021yexGoE',
        'status',
        'tenticação',
        'Erro\x20na\x20au',
        'json',
        '6502935OhKhGD',
        '99cWaVPP',
        '76qbqvce'
    ];
    a = function () {
        return w;
    };
    return a();
}
const s = b, v = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const g = -parseInt(q(0x116)) / (-0x2a0 * 0x3 + -0x8b7 + -0x6 * -0x2c4) * (parseInt(q(0x12c)) / (0xf8c + 0x446 * -0x9 + 0x16ec)) + -parseInt(r(0x11c)) / (-0x2 * -0x8ef + 0xecd + -0x20a8) * (parseInt(r(0x123)) / (-0x303 + -0x367 * -0x1 + -0x6 * 0x10)) + parseInt(r(0x121)) / (0xa7 * 0x3b + 0x1507 + 0x13d5 * -0x3) + parseInt(r(0x12e)) / (0x1ee7 + 0x1286 * -0x2 + 0x62b) + parseInt(r(0x11a)) / (0xc3e * -0x2 + -0x9e2 + 0x6e1 * 0x5) + parseInt(q(0x126)) / (0x11a9 + -0x10 * 0x4e + -0xcc1) + parseInt(q(0x122)) / (-0x219 + 0x17 * -0x71 + -0x5 * -0x275) * (-parseInt(q(0x12a)) / (-0x681 + 0xf63 + -0x8d8));
            if (g === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x6185 * -0x5 + -0xfdbb3 * -0x1 + -0x46173));
const axios = require(s(0x127));
async function autenticar(g, h) {
    const t = s, u = s, i = {};
    i[t(0x12b)] = u(0x11f) + u(0x11e);
    const j = i, {
            username: k,
            password: l
        } = g[t(0x125)];
    try {
        const m = {};
        m[u(0x118)] = process[t(0x11b)][u(0x117) + 'I'], m[t(0x12f)] = process[u(0x11b)][t(0x12d)];
        const n = await axios[u(0x124)](m);
        h[t(0x120)](n[u(0x115)]);
    } catch (o) {
        const p = {};
        p[t(0x119)] = j[u(0x12b)], h[u(0x11d)](-0xfa2 + 0x55a + 0xc3c)[t(0x120)](p);
    }
}
const f = {};
f[v(0x129)] = autenticar, module[v(0x128)] = f;