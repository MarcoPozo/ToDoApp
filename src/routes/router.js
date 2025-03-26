import { Router } from "express";
import {
  getAllTaks,
  createTaks,
  deleteTask,
  toggleTaks,
} from "../models/userModel.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const tasks = await getAllTaks();
    res.render("index", { title: "Inicio", tasks });
  } catch (error) {
    console.error("Error al cargar las tareas: ", error);
    res.status(500).send("Error al cargar tareas");
  }
});

router.post("/add-task", async (req, res) => {
  const { task } = req.body;
  if (!task || task.trim() === "") {
    return res.redirect("/");
  }

  try {
    await createTaks(task.trim());
    res.redirect("/");
  } catch (error) {
    console.error("Error al agregar la tarea:", error);
    res.status(500).send("Error interno del servidor");
  }
});

router.post("/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await deleteTask(id);
    res.redirect("/");
  } catch (error) {
    console.error("Error al eliminar la tarea:", error);
    res.status(500).send("Error al eliminar la tarea");
  }
});

router.post("/toggle/:id", async (req, res) => {
  const { id } = req.params;
  const { current } = req.body;

  try {
    const newState = current === "1" ? 0 : 1;
    await toggleTaks(id, newState);
    res.redirect("/");
  } catch (error) {
    console.error("Error al cambiar el estado:", error);
    res.status(500).send("Error interno del servidor");
  }
});

export default router;
