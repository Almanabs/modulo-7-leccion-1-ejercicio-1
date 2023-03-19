const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'Anahata4',
  port: 5432,
  database: 'modulo_5_leccion_1_ejercicio_1'
});

/*const connectionString = 'postgresql://postgres:Anahata4@localhost:5432/modulo_5_leccion_1_ejercicio_1';   connection string-----

const pool = new Pool({
  connectionString: connectionString
});*/

pool.query('SELECT * FROM finanzas_personales', (error, results) => {
  if (error) {
    console.log(error);
  } else {
    console.log(results.rows);
  }
});

