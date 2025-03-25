import { db } from "../config/db.js";

export const getAllTaks = async () => {
  const [rows] = await db.execute("SELECT * FROM task");
  return rows;
};

export const createTaks = async (content) => {
  await db.execute("INSERT INTO task (content, complete) VALUES (?, ?", [
    content,
    false,
  ]);
};

export const deleteTask = async (id) => {
  await db.execute("DELETE FROM task WHERE id = ?", [id]);
};

export const toggleTaks = async (id, completed) => {
  await db.execute("UPDATE tasks SET completed = ? WHERE id = ?", [
    completed,
    id,
  ]);
};
