# TechnicalTest-Vidext

Este es un proyecto de **prueba técnica** desarrollado con [Next.js](https://nextjs.org) utilizando [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). El proyecto está diseñado para mostrar videos con funcionalidades de incremento/decremento de likes y vistas.

## Características

- Visualización de videos.
- Incremento y decremento de likes en los videos.
- Incremento de vistas en los videos.
- API RESTful para manejar las operaciones de los videos.

## Tecnologías utilizadas

- **Next.js**: Framework para aplicaciones web React, proporcionando renderizado del lado del servidor y generación estática.
- **TypeScript**: Superset de JavaScript que añade tipado estático y otros beneficios.
- **tRPC**: Un framework para construir APIs seguras y fáciles de usar en TypeScript.
- **Tailwind CSS**: Un framework de CSS que permite un diseño rápido y personalizable usando utilidades.

## Comenzando

Sigue estos pasos para configurar y ejecutar la aplicación localmente:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/dieego17/TechnicalTest-Vidext.git
   cd TechnicalTest-Vidext
   ```

2. Instala las dependencias:
   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```

3. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   ```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

Puedes empezar a editar la página modificando `app/page.tsx`. La página se actualizará automáticamente a medida que edites el archivo.

## API

La API de este proyecto tiene los siguientes puntos finales:

- **Obtener todos los videos**:
  - Ruta: `/api/trpc/getAllVideos`
  - Método: `GET`
  - Descripción: Retorna una lista de todos los videos disponibles.
  
  Ejemplo de uso:
  ```bash
  GET http://localhost:3000/api/trpc/getAllVideos
  ```

- **Incrementar los likes de un video**:
  - Ruta: `/api/trpc/incrementLikes`
  - Método: `POST`
  - Descripción: Incrementa el contador de likes de un video especificado por su `id`.
  - Cuerpo de la solicitud:
  ```json
  {
    "id": 1
  }
  ```

  Ejemplo de uso:
  ```bash
  POST http://localhost:3000/api/trpc/incrementLikes
  Content-Type: application/json
  Body: { "id": 1 }
  ```

- **Decrementar los likes de un video**:
  - Ruta: `/api/trpc/decrementLikes`
  - Método: `POST`
  - Descripción: Decrementa el contador de likes de un video especificado por su `id`.
  - Cuerpo de la solicitud:
  ```json
  {
    "id": 1
  }
  ```

  Ejemplo de uso:
  ```bash
  POST http://localhost:3000/api/trpc/decrementLikes
  Content-Type: application/json
  Body: { "id": 1 }
  ```

- **Incrementar las vistas de un video**:
  - Ruta: `/api/trpc/incrementViews`
  - Método: `POST`
  - Descripción: Incrementa el contador de vistas de un video especificado por su `id`.
  - Cuerpo de la solicitud:
  ```json
  {
    "id": 1
  }
  ```

  Ejemplo de uso:
  ```bash
  POST http://localhost:3000/api/trpc/incrementViews
  Content-Type: application/json
  Body: { "id": 1 }
  ```

### Respuesta de la API

Las respuestas de la API son objetos JSON que contienen el video actualizado con la cantidad de **likes** o **vistas** modificada. En caso de error (por ejemplo, si no se encuentra un video con el `id` especificado), se retorna un mensaje de error adecuado.

Ejemplo de respuesta exitosa:
```json
{
  "id": 1,
  "title": "Video 1",
  "likes": 10,
  "views": 100
}
```

## Despliegue en Vercel

La forma más fácil de desplegar tu aplicación Next.js es utilizando la [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app). Consulta la [documentación de despliegue de Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para más detalles.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, sigue los siguientes pasos para contribuir:

1. Haz un fork del proyecto.
2. Crea una nueva rama (git checkout -b feature/nueva-caracteristica).
3. Realiza tus cambios y haz commit (git commit -m 'Agregar nueva característica').
4. Sube tu rama (git push origin feature/nueva-caracteristica).
5. Abre un Pull Request.

## Capturas de pantalla

### Interfaz de Visualización de Videos
![image](https://github.com/user-attachments/assets/cc134472-1a33-4077-89d6-ee64fb00961f)

### Funcionalidad de Incremento de Likes
![image](https://github.com/user-attachments/assets/7e8354a0-8ed2-4dbf-b831-a75d64b12718)

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).
