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

export default router;
