# 📝 ToDo List App con Node.js, Express y Tailwind CSS

Una aplicación de lista de tareas construida con Node.js, Express, EJS, Tailwind CSS y MySQL. Esta app permite crear, listar, actualizar (toggle) y eliminar tareas.

## 🚀 Tecnologías utilizadas

- Node.js + Express
- EJS (plantillas)
- Tailwind CSS (v4)
- MySQL (phpMyAdmin)
- Dotenv

## 📦 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/MarcoPozo/ToDoApp.git
```

2. Instala las dependencias:

```bash
npm install
```

3. Crea un archivo `.env` basado en `.env.example`:

```bash
cp .env.example .env
```

4. Crea la base de datos en tu phpMyAdmin o cliente MySQL.

5. Importa el archivo `database.sql` que se encuentra en la raíz del proyecto. Contiene la estructura de la tabla `tasks` usada por la app.

```sql
CREATE TABLE `tasks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) NOT NULL,
  `completed` tinyint(1) DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

6. Ejecuta el proyecto:

```bash
npm run dev
```

## 📁 Estructura del proyecto

```
.
├── src/
│   ├── config/          # Configuración de base de datos
│   ├── models/          # Lógica y consultas SQL
│   ├── routes/          # Rutas Express
│   ├── views/           # Vistas EJS (index + partials)
│   ├── public/          # Archivos estáticos (CSS, JS)
|   └── index.js         # Punto de entrada del servidor
├── .env.example         # Variables de entorno ejemplo
└── database.sql         # Script SQL para importar la tabla           
```

## ✨ Funcionalidades

- ✅ Crear nuevas tareas
- 📋 Listar todas las tareas
- 🔄 Cambiar estado (completada/pendiente)
- ❌ Eliminar tareas

## 🧠 Autor

**Marco Pozo** - [GitHub](https://github.com/MarcoPozo)

---

¡Gracias por visitar este proyecto! - MoonStudio 🌙✨