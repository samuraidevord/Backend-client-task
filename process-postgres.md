usuario: postgres=#
password:admin

Inicio del servicio: sudo service postgresql start
Acceso de usuario determinado: sudo -u postgres psql

Instalación en WSLA

sudo apt install postgresql postgresql-contrib
psql –versión

Inicio del servicio: sudo service postgresql start

Comptobación del estado: sudo service postgresql status

Finalización del servicio:  sudo service postgresql stop

Cambio de password: sudo passwd postgres

##### 

sudo service postgresql start -> sudo -u postgres psql


### Comandos 
|Descripción | Comando | 
| -- | -- |
|Creación de base de datos | `CREATE DATABASE name;` | 
|Listar todas las bases de datos dispomibles | `\l` |
| Seleccionar una base de datos | `\c name` |
| Crear un tabla | `CREATE TABLE name(value1,value2,value3)`|
| Listar tablas | `\d or \dt` |
| Inserta datos en la tabla | `INSERT TO name (attr1, attr2) VALUES (values1, values2)` |
| Seleccionar todo el contenido de una tabla | `SELECT * FROM tasks;`| 
| Cambiar password | `ALTER USER POSTGRES WITH PASSWORD 'ab12';`|

Password: 1ab12MXHG