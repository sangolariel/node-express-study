const express = require('express')
const app = express()
const port = 5000

app.set('views', './views')

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index', { title: 'node-express-coder-tokyo', message: 'Node Express' })
})

const users = [
  {
    name: "Sang",
    age: 20,
  },
  {
    name: "Son",
    age: 20,
  },
  {
    name: "Quang",
    age: 20,
  }
]
app.get('/users', (req, res) => {
  res.render('users/index', {
    users
  })
})

app.get('/users/search', (req, res) => {
  const { q } = req.query
  const matchUser = users.filter((user) => user.name.indexOf(q) !== -1)
  res.render('users/index', {
    users: matchUser
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})