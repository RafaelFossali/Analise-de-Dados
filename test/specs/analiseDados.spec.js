const fs = require('fs');
const parse = require('csv-parse');

describe('Análise de Dados - CSV', () => {
    it('Deve ler e validar os dados do arquivo CSV', async () => {
        const caminhoCSV = './data/produtos.csv'; // Ajuste conforme seu arquivo

        // Verifica se o arquivo existe
        if (!fs.existsSync(caminhoCSV)) {
            throw new Error(`Arquivo não encontrado: ${caminhoCSV}`);
        }

        // Lê o arquivo e processa os dados
        const dados = await new Promise((resolve, reject) => {
            const registros = [];
            fs.createReadStream(caminhoCSV)
                .pipe(parse({ delimiter: ',', columns: true, trim: true }))
                .on('data', (row) => registros.push(row))
                .on('end', () => resolve(registros))
                .on('error', (err) => reject(err));
        });

        // Valida que o CSV não está vazio
        expect(dados.length).toBeGreaterThan(0);

        // Exemplo de validação: verificar se todos os produtos têm nome e preço
        dados.forEach((item, index) => {
            expect(item.Nome).toBeDefined();
            expect(item.Preco).toBeDefined();
            expect(Number(item.Preco)).toBeGreaterThan(0);
            console.log(`✅ Produto ${index + 1}: ${item.Nome} - R$${item.Preco}`);
        });
    });
});
