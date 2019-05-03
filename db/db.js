const mysql = require('mysql');

const db = mysql.createConnection({
  hostname: localhost,
  user: 'root',
  password: 'password',
  database: 'todos'
});

db.connect((err, res) => {
  if (err) console.error(err)
  else console.log('connected')
})
const makeTodo = (newTodo, callback) => {
  db.query(`INSERT INTO todolist (todo) VALUES (${newTodo})`)

}
const talkToDB = db.makeTodo('thin from post request', (err, data) => {
  if (err) res.status(400).send('We goofed')
  else res.send(data)
})


module.exports = { 
  db: db,
  makeTodo: makeTodo
} 