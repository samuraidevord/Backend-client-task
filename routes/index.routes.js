import { Router} from "express";
import { deleteTasks, deletTask, getTask, getTasks, putTask, setTask } from "../controllers/index.controllers.js";

const router = Router();

//Listado de Tareas
router.get('/tasks', getTasks)
// Listar una tarea por su id
router.get('/task/:id', getTask)
//Crear una tarea
router.post('/task',setTask);
// Actualizar una tarea por su id 
router.put('/task/:id', putTask)
// Eliminar todas las tareas
router.delete('/tasks', deleteTasks)

// Eliminar una tarea por su id
router.delete('/task/:id', deletTask)
export { router}