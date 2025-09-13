const express = require('express')
const app = express()
const PORT = 8080

app.get('/calculadora', (req, res) => {
    const { operacao, numUm, numDois } = req.query

    const numUmInt = parseInt(numUm)
    const numDoisInt = parseInt(numDois)
    let resultado;

    if ( operacao == 'soma') {
        resultado = numUmInt + numDoisInt
    } else if ( operacao == 'subtracao') {
        resultado = numUmInt - numUmInt
    } else if ( operacao == 'multiplicacao') {
        resultado = numUmInt * numDoisInt
    } else {
        resultado = numUmInt / numDoisInt
    }

    res.status(200).send(
        `<h1>
            O resultado é : ${resultado}
        </h1>`
    )
})


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})