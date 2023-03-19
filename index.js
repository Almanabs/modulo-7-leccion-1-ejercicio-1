const { Pool } = require('pg');
const express = require('express');
const { engine } = require('express-handlebars');




const app = express();

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'Anahata4',
  port: 5432,
  database: 'modulo_5_leccion_1_ejercicio_1'
});

app.engine('hbs', engine({

  defaultLayout: 'main',
  extname: '.hbs'
}));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  pool.query('SELECT * FROM finanzas_personales', (error, results) => {
    if (error) {
      console.log(error);
    } else {
      res.render('home', { finanzas: results.rows });
    }
  });
});

app.listen(3000, () => console.log("Servidor escuchando en http://localhost:3000"))



