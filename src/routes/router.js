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
    res.status(500).send("Error interno del servidor")
  }
});

export default router;
