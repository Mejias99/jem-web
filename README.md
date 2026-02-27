+51-0
# Juventud en Marcha Web

Este repositorio contiene la versión oficial del sitio web de **Juventud en Marcha**, cuyo objetivo es orientar a los usuarios hacia información general, proceso de inscripción o acceso para miembros existentes.

## Dependencias

- [Tailwind CSS](https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4) cargado desde CDN.
- Navegador moderno para visualizar el sitio.
- (Opcional) [Node.js](https://nodejs.org/) si se desea levantar un servidor local o personalizar el `tailwind.config.js`.

## Ejecución local

1. Clonar el repositorio y acceder al directorio:
   ```bash
   git clone <url-del-repo>
   cd jem-web
   ```
2. Servir la carpeta `public`:
   - Opción rápida: abrir `public/index.html` en el navegador.
   - Opción recomendada: usar un servidor estático como `npx http-server public`.

## Despliegue

Copiar el contenido de la carpeta `public` a cualquier servicio de hosting estático (ej. GitHub Pages, Netlify, Vercel). No se requiere compilación adicional.

## Estructura del proyecto

```text
jem-web/
├── public/
│   ├── index.html
│   ├── inscripcion.html
│   ├── info.html
│   ├── miembros.html
│   ├── tailwind.css
│   ├── tailwind.config.js
│   ├── js/
│   ├── assets/
│   └── partials/
└── src/
    └── js/
        └── main.js
```

## Guía de contribución

1. Haz un *fork* del repositorio y crea una rama descriptiva.
2. Realiza los cambios necesarios y verifica que el sitio se visualice correctamente.
3. Abre un Pull Request describiendo los cambios realizados.
4. El equipo revisará y fusionará tu contribución si cumple con los lineamientos del proyecto.

