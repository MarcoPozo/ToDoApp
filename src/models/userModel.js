import { db } from "../config/db.js";

export const getAllTaks = async () => {
  const [rows] = await db.execute("SELECT * FROM tasks");
  return rows;
};

export const createTaks = async (content) => {
  await db.execute("INSERT INTO tasks (content, completed) VALUES (?, ?)", [
    content,
    false,
  ]);
};

export const deleteTask = async (id) => {
  await db.execute("DELETE FROM tasks WHERE id = ?", [id]);
};

export const toggleTaks = async (id, completed) => {
  await db.execute("UPDATE tasks SET completed = ? WHERE id = ?", [
    completed,
    id,
  ]);
};
