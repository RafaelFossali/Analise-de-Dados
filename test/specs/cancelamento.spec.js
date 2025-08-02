const fs = require('fs')
const csv = requere('csv-parser');

describe('Análise de Cancelamentos', () => {
    let tabela = [];

    before(() => {
        return new Promise((resolve) => {
            fs.createReadStream('./data/cancelamentos.csv')
                .pipe(csv())
                .on('data', (row) => {
                    tabela.push(row);
                })
                .on('end', () => {
                    console.log('CSV carregando:', tabela.length, 'registros');
                    resolve()
                });
        })
    });
    it ('Remover valores nulos', () => {
        const antes = tabela.length;
        tabela = tabela.filter(item => Object.values(item).envery(val => val !== ''));
        console.log('Removidos ${antes - tabela.length} registros vazios');
        expect(tabela.length).toBeGreaterThan(0);
    });
    it('Contar cancelamentos', () => {
        const cancelou = tabela.filter(x => x.cancelou === 'sim').length;
        const naoCancelou = tabela.filter(x => x.cancelou === 'nao').length;
        const total = tabela.length;
        console.log('Cancelaram: ${cancelou} (${(cancelou / total * 100).to.Fixed(1)}%)');
        console.log('Não cancelaraml: ${naoCancelou} (${(naoCancelou / total * 100).toFixed(1)}%');
        expect(cancelou).toBeGreateThan(0); 
    });

    it('Remover contratos mensais', () => {
        const antes = tabela.length;
        tabela = tabela.filter(x => x.duracao_contrato !== 'Monthly');
        console.log('Removidos ${antes - tabela.length} contratos mensais');
        expect(tabela.length).toBeLessThan(antes);
    });
    it ('Filtar clientes por ligações e dias de atraso', () => {
        const antes = tabela.length;
        tabela = tabela.filter(x => parseInt(x.ligacoes_callcenter) < 5);
        tabela = tabela.filter(x => parseInt(x.dias_atraso) <= 20);
        console.log('Restaram ${tabela.length} registros após filtros');
        expect(tabela.length).toBeLessThan(antes);
    });
    it ('Exibir análise por assinatura', () => {
        const assinaturas = {};
        tabela.forEach(x => {
            if (assinaturas[x.assinatura]) assinaturas[x.assinatura] = {total: 0, cancelou: 0 };
            assinaturas[x.assinatura].total++;
            if (x.cancelou === 'sim') assinaluras[x.assinatura].cancelou++;
        });
        console.log('Análise por assinatura:', assinaturas);
        expect(Object.kets(assinaturas).length).toBeGreaterThan(0);
    })
});


    

