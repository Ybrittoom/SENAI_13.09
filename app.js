const express = require('express')
const app = express()
const PORT = 3000

app.get('/soma/:numUm/:numDois', (req, res) => {
    try {
        const { numUm, numDois } = req.params

        if (numUm == undefined || numDois == undefined || isNaN(numUm) || isNaN(numDois)) {
            return res.status(400).send('Dados numUm e numDois sao obrigatorios e precisa ser numero')
        }

        //os numeros vem em tipo string nas URL, tem que transformar em Numeros inteiros
        const numUmInt = parseInt(numUm)
        const numDoisInt = parseInt(numDois)
        res.status(200).send(
            `<h1>
                Ola, a soma dos numeros ${numUmInt} e numero ${numDoisInt} é: ${numUmInt + numDoisInt}!
            </h1>`
        )
    } catch (error) {
        console.error(`Erro ao processar a soma dos numeros: ${error}`)
        res.status(500).send('Erro interno no servidor!')
    }
})

//rota para subtraçao
app.get('/subtracao/:numUm/:numDois', (req, res) => {
    try {
        const { numUm, numDois } = req.params

        if ( numUm == undefined || numDois == undefined || isNaN(numUm) || isNaN(numDois)) {
            return res.status(400).send('Dados numUm e numDois sao obrigatorios e precisa ser numero')
        }

        const numUmInt = parseInt(numUm)
        const numDoisInt = parseInt(numDois)
        const resultado = numUmInt - numDoisInt
        res.status(200).send(`
            <h1>
                Ola, a subtraçao dos numeros ${numUmInt} e ${numDoisInt} é : ${resultado}
            </h1>
        `)
    } catch (error) {
        console.error('Erro ao processar a subtraçao: ', error)
        res.status(500).send('Erro interno no servidor')
    }
})

//rota da multiplicaçao
app.get('/multiplicacao/:numUm/:numDois', (req, res) => {
    try {
        const { numUm, numDois } = req.params

        if ( numUm == undefined || numDois == undefined || isNaN(numUm) || isNaN(numDois)) {
            return res.status(400).send('Dados numUm e numDois sao obrigatorios e precisa ser numero')
        }

        const numUmInt = parseInt(numUm)
        const numDoisInt = parseInt(numDois)
        const resultado = numUmInt * numDoisInt
        res.status(200).send(
            `<h1>
                A multiplicaçao dos numeros ${numUmInt} e ${numDoisInt} é: ${resultado}
            </h1>`
        )
    } catch (error) {
        console.error('Erro ao processar a multiplicaçao', error)
        res.status(500).send('Erro interno no servidor!')
    }
})

//rota para divisao
app.get('/divisao/:numUm/:numDois', (req, res) => {
    try {
        const { numUm, numDois } = req.params

        if ( numUm == undefined || numDois == undefined || isNaN(numUm) || isNaN(numDois)) {
            return res.status(400).send('Dados numUm e numDois sao obrigatorios e precisa ser numero')
        }

        const numUmInt = parseInt(numUm)
        const numDoisInt = parseInt(numDois)
        const resultado  = numUm / numDois 
        res.status(200).send(
            `<h1>
                A divisao dos numeros ${numUmInt} e ${numDoisInt} é: ${resultado}
            </h1>`
        )
    } catch (error) {
        console.error('Erro ao processar a divisao dos numero:', error)
        res.status(500).send('Erro interno no servidor')
    }
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})
