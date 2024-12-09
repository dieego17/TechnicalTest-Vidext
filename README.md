# TechnicalTest-Vidext

Este es un proyecto de **prueba técnica** desarrollado con [Next.js](https://nextjs.org) utilizando [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). El proyecto está construido con **Next.js**, **TypeScript**, **tRPC** para la API, y **Tailwind CSS** para los estilos.

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

Las respuestas de la API son objetos JSON que contienen el video actualizado con la cantidad de **likes** o **vistas** modificada. En caso de error (por ejemplo, si no se encuentra un video con el `id` proporcionado), la API responderá con un mensaje de error.

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

La forma más fácil de desplegar tu aplicación Next.js es utilizando la [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Consulta la [documentación de despliegue de Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para más detalles.

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).
