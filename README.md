# Primera preentrega — Backend III

Backend de e-commerce orientado a practicar arquitectura por capas, autenticación y herramientas de observabilidad. Administra usuarios, productos, mascotas y carritos, e incluye generación de datos simulados.

## Funcionalidades

- Registro e inicio de sesión.
- Hash de contraseñas y autenticación con JWT.
- CRUD de productos, mascotas y carritos.
- Vistas renderizadas con Handlebars.
- Carga de archivos con Multer.
- Datos mock generados con Faker.
- Logging con Winston y manejo centralizado de errores.
- Envío de correo electrónico.

## Stack

- Node.js y Express
- MongoDB y Mongoose
- Handlebars
- JSON Web Tokens, bcrypt y sesiones
- Multer, Winston y Faker
- Mocha y ESLint

## Arquitectura

`src/routes/` define los endpoints, `src/controllers/` procesa las solicitudes, `src/daos/` abstrae persistencia y `src/models/` contiene los esquemas. Las utilidades transversales viven en `src/utils/`.

## Configuración

Crear `.env` con `PORT`, `MONGO_URI`, `SESSION_SECRET`, `JWT_PRIVATE_KEY`, `EMAIL_USER` y `EMAIL_PASS`.

## Ejecución

```bash
npm install
npm run dev
```

Otros comandos: `npm start`, `npm test`, `npm run lint`, `npm run build` y `npm run clean`.

> Proyecto educativo. Utilizar credenciales de prueba y mantener el archivo `.env` fuera de Git.