const express = require('express')

const app = express()

app.use(express.json()) // permitir json

app.get('/', (req, res) => { // criar rota 
    res.send('Api is running')
})

// frontend
app.use(express.static(path.join(__dirname, 'public')))

// rotas
const userRoutes = require('./routes/userRoutes')
const linkRoute =  require('./routes/linkRoute')

app.use('/users', userRoutes)
app.use('/links', linkRoute)

app.listen(3030, () => { // liga o servidor
    console.log('Server is running on port 3030')
})