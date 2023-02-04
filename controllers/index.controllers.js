
//Pool de conexiones

import { pool } from "../connect.js";

// Obtener todas las tareas
const getTasks =  async (req, res) => {
  try {
    const response = await pool.query("SELECT * FROM task");
    if(response.rows.length <= 0 ) {
            res.status(200).json({result: []});
            return;
    } 
    return res.status(200).json({result: response.rows});

  } catch (error) {
    return res.json({message: error});
  }
   
}

// Obtener una tarea por el id 
const getTask = async (req,res) => {
    try {
        const {id} = req.params;
        const response = await pool.query("SELECT * FROM task WHERE id = $1", [id]);
        if (response.rows.length <= 0 )  {
            return  res.status(404).json({message: "No existe esa tarea en el sistema."})
        }
        const result = response.rows[0];
        return res.status(200).json({result})
    } catch (error) {
        return res.json({message: error});
    }
} 

// Crear Tarea
const setTask = async (req, res) => {
    const {title,description,state} = req.body; 
    const date = Date.now();
    try {
        const response = await pool.query("INSERT INTO task (title, description,state,date) VALUES($1, $2, $3,$4) RETURNING *",[title, description, state, date]);
        return res.status(200).json({result: response.rows[0]})
    } catch (error) {
        return res.json({message: error});
    }
}
// Actualizar Tarea por id 

const putTask = async (req,res) => {
    const {id} = req.params;
    const {title, description,state} = req.body;
    try {
        const response = await pool.query("UPDATE task SET title = $1, description = $2, state = $3 WHERE id = $4 RETURNING *",[title, description,state,id]);
        if (response.rows.length === 0)
        return res.status(404).json({ message: "Task not found" });
        return res.status(200).json({message: "Tarea actualizada correctamente!!"});
    } catch (error) {
        return res.json({message: error});
    }
    
   
} 


// Eliminar todas las tareas
const deleteTasks = async (req,res) => {
    const response = await pool.query("DELETE FROM task");
    console.log(response.rows);
    res.status(200).json({message: "Todas las tareas han sido eleminadas"});
}

// Eliminar Tarea por id 
const deletTask = async (req,res) => {
    try {
        const {id} = req.params;
        const response = await pool.query("DELETE FROM task WHERE id = $1", [id]);
        if (response.rowCount === 0) {
            res.status(404).json({ message: "Task not found" });
            return;
        }
        res.status(200).json({message: "Tarea eliminada correctamente"})
    } catch (error) {
        res.json({message: error});
    }
} 

export  { getTasks, setTask, getTask, deleteTasks, deletTask, putTask}