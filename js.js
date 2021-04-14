// Tabela de multiplicação:
let z = [];
for (let x = 0; x <= 10; x++) {
    z[x] = [];
    for (let y = 0; y <= 10; y++) {
        z[x][y] = x*y;
    }
}
console.table(z);


// Bônus:
const tabelaMultiplicação = n => {
    let z = [];
    for (let x = 0; x <= n; x++) {
        z[x] = [];
        for (let y = 0; y <= n; y++) {
            z[x][y] = x*y;
        }
    }
    console.table(z);
};