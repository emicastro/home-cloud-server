const express = require('express')
const cors = require('cors')
const dirRouter = require('./routes/dir')
const contentRouter = require('./routes/content')
const uploadRouter = require('./routes/upload')
const downloadRouter = require('./routes/download')
const enoent = require('./middlewares/enoent')
const eexist = require('./middlewares/eexist')
const err = require('./middlewares/err')

const port = process.env.PORT || 5000

const app = express()

// Middlewares
app.use(express.json())
app.use(cors())

// Routes
app.get('/', (req, res) => res.send('Home cloud API'))
app.use('/dir', dirRouter)
app.use('/content', contentRouter)
app.use('/upload', uploadRouter)
app.use('/download', downloadRouter)

// Errors
app.use(enoent)
app.use(eexist)
app.use(err)

// Server
app.listen(port, () => console.log('Server running on port', port))
