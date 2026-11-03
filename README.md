# Proyectos de Alejandro Pico

[Abrir la página](https://alejandropico.github.io/Proyectos/)

Acceso directo a los proyectos públicos, del más reciente al más antiguo. Inversor queda excluido. Al final se incluye una sección de repositorios privados con enlaces únicamente a GitHub.

Página estática sin dependencias, fuentes externas, animaciones ni consultas a la API al abrir. Fichas compactas de esquinas rectas, descripciones breves y vista de lista. Los iconos no llevan marco añadido.

Temas Mañana, Tarde, Noche y Automático según la hora local del navegador: mañana de 06:00 a 14:00; tarde de 14:00 a 20:00; noche de 20:00 a 06:00. La elección se conserva en el navegador.

## Actualizar

Editar `projects.json` o `private-projects.json` y ejecutar `node build.mjs`. Subir también el `index.html` generado. Comprobar la visibilidad antes de cambiar un proyecto de sección. Los proyectos privados solo enlazan al repositorio.

Las fichas de aplicaciones cargan directamente `favicon.svg` desde la raíz de la aplicación publicada. Si falla, prueban `favicon.png`; por compatibilidad, después pueden usar una ruta antigua indicada en `icon`. Si no se encuentra ninguna imagen, aparecen las iniciales. Para nuevas aplicaciones basta con indicar su `url`: el campo `icon` es opcional. Los cambios de favicon se recogen desde cada proyecto, respetando la caché normal del navegador, sin copiar imágenes al catálogo ni consultar la API al abrirlo.

## Publicar

GitHub Pages desde la rama `main`, carpeta raíz. No requiere instalación ni compilación en el servidor.
