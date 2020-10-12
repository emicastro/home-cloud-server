const express = require('express')
const cors = require('cors')

const port = process.env.PORT || 5000

const app = express()

// Middlewares
app.use(express.json())
app.use(cors())

// Routes
app.get('/', (req, res) => res.send('Home cloud API'))

// Server
app.listen(port, () => console.log('Server running on port', port))
