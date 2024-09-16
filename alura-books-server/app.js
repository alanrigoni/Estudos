const express = require('express')
const rotaLivro = require('./rotas/livro')

const app = express()
const port = 8000

app.use('/livros', rotaLivro)

app.get('/', (req, res) => {
  res.send('Alan!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})