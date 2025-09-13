const express = require('express')
const app = express()
const PORT = 8081

app.get('/operacao/:tipo', (req, res) => {
    try {
        const { tipo } = req.params
        const { numUm, numDois } = req.query

        if( isNaN(numUm) || numUm == undefined || isNaN(numDois) || numDois == undefined) {
            return console.log('Dados sao obrigatorios')
        }

        const numUmInt = parseInt(numUm)
        const numDoisInt = parseInt(numDois)
        let resultado;

        if ( tipo == 'soma' ) {
            resultado = numUmInt + numDoisInt
        } else if ( tipo == 'subtracao') {
            resultado = numUmInt - numDoisInt
        } else if ( tipo == 'multiplicacao' ) {
            resultado = numUmInt * numDoisInt
        } else {
            resultado = numUmInt / numDoisInt
        }

        res.status(200).send(
            `<h1>
                O resultado é : ${resultado}
            </h1>`
        )
        
    } catch (error) {
        console.error('Erro ao processar os resultados', error)
        res.status(500).send('Erro interno no servidor!')
    }
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})