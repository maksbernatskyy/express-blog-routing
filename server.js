const express = require('express')
const app = express()
const PORT = 3000
const postsRouter = require('./routers/posts')

app.use(express.static('public'))

app.use('/posts', postsRouter)

app.get('/', (req, res) => {
    res.send('Server del mio blog')
})

app.listen(PORT, ()=> {
    console.log(`Example app on port ${PORT}`)
})