# Alejandro Pico · Portfolio

Portfolio personal y profesional de **Alejandro Pico Perez**, publicado con GitHub Pages.

Este repositorio contiene una página estática diseñada para presentar perfil profesional, trayectoria, conocimientos técnicos, proyectos publicados y vías de contacto. El objetivo no es funcionar solo como una tarjeta personal, sino como un escaparate vivo de trabajo real: proyectos navegables, repositorios públicos, tecnologías utilizadas y evolución técnica.

## Sitio publicado

**GitHub Pages:** https://alejandropico.github.io/Portfolio/

## Objetivo del proyecto

El portfolio está pensado para mostrar de forma clara:

- quién soy y qué puedo aportar a una empresa;
- mi trayectoria técnica, funcional y operativa;
- proyectos publicados y accesibles desde GitHub Pages;
- conocimientos de desarrollo, sistemas, bases de datos, arquitectura, metodologías y herramientas;
- CV descargable en español e inglés;
- formulario de contacto mediante cliente de correo.

## Secciones principales

- **Perfil:** presentación personal y orientación profesional.
- **Mi valor en la empresa:** síntesis de capacidades técnicas, funcionales y operativas.
- **Proyectos:** tarjetas enlazadas a proyectos publicados y repositorios.
- **Conocimientos:** tecnologías, herramientas, lenguajes, sistemas, bases de datos, frameworks, arquitectura y metodologías.
- **CV:** formación, experiencia y descarga de currículum.
- **Contacto:** formulario basado en `mailto:`.

## Proyectos enlazados

El portfolio enlaza a varios proyectos propios publicados en GitHub Pages:

- **Oblitus est scientia** — archivo editorial y divulgativo.
- **ISS Tracker** — seguimiento visual de la Estación Espacial Internacional.
- **Tabla de Nucleídos** — visor interactivo de nucleídos e isótopos.
- **Cams** — mosaico de cámaras en directo.
- **Diagrama Estelar** — visualización astronómica del diagrama Hertzsprung-Russell.
- **Fórmulas** — biblioteca y simuladores matemáticos.
- **Fractales** — explorador visual de estructuras fractales.

## Tecnologías utilizadas

El proyecto está construido como web estática, sin framework pesado:

- **HTML5** para estructura semántica.
- **CSS3** para diseño responsive, modo claro/oscuro y estética tipo glass/liquid glass.
- **JavaScript vanilla** para navegación, tema, selector de idiomas, animaciones y carga modular.
- **GitHub Pages** para publicación.

## Funcionalidades destacadas

- Diseño responsive.
- Modo claro, oscuro y automático.
- Selector oculto de variantes visuales mediante `Alt + clic` sobre el botón de tema.
- Persistencia de tema, variante visual e idioma mediante `localStorage`.
- Selector de idioma modular con manifiesto en `i18n/languages.js`.
- Idiomas separados en archivos individuales dentro de `i18n/`.
- Barra de progreso de scroll.
- Resaltado de sección activa en navegación.
- Animación sutil de aparición al hacer scroll.
- Tarjetas de proyecto clicables.
- Iconos locales para tecnologías y herramientas.
- Metadatos SEO, Open Graph, Twitter Card y JSON-LD.

## Estructura del repositorio

```text
.
├── index.html
├── styles.css
├── glass-ui.css
├── layout-polish.css
├── theme-variants.css
├── script.js
├── skills-icons.js
├── favicon.svg
├── README.md
├── CV/
│   ├── CV ES - Alejandro Pico.pdf
│   ├── CV EN - Alejandro Pico.pdf
│   └── Alejandro Pico.svg
├── Icons/
│   └── *.svg
└── i18n/
    ├── index.js
    ├── core.js
    ├── languages.js
    ├── es.js
    ├── ca.js
    ├── en.js
    ├── fr.js
    ├── de.js
    ├── pt.js
    ├── it.js
    ├── tags.js
    ├── language-picker.js
    └── language-picker.css
```

## Sistema de idiomas

Los idiomas se gestionan desde la carpeta `i18n/`.

Cada idioma tiene su propio archivo:

```text
i18n/es.js
i18n/ca.js
i18n/en.js
i18n/fr.js
i18n/de.js
i18n/pt.js
i18n/it.js
```

El manifiesto `i18n/languages.js` declara qué idiomas están disponibles. Para añadir un nuevo idioma:

1. crear un archivo `i18n/xx.js` con el mismo formato que los existentes;
2. añadir una entrada en `i18n/languages.js`;
3. revisar textos de proyectos, etiquetas, CV y contacto.

## Organización JavaScript

La funcionalidad principal se ha consolidado para evitar archivos sueltos innecesarios:

- `script.js`: navegación móvil, tema, variantes visuales ocultas, tarjetas clicables, progreso de scroll, animación de entrada y carga del sistema i18n.
- `skills-icons.js`: renderizado de conocimientos e iconos técnicos.
- `i18n/index.js`: cargador modular de idiomas.
- `i18n/core.js`: motor de traducción de textos principales.
- `i18n/language-picker.js`: selector visual de idiomas.
- `i18n/tags.js`: traducción de etiquetas de proyectos.

## Conocimientos representados

La sección de conocimientos incluye lenguajes, bases de datos, frameworks, herramientas, sistemas, DevOps, IA, navegadores y conceptos de arquitectura/metodología como:

- Arquitectura hexagonal.
- Microservicios.
- Modelo Vista Controlador.
- API REST.
- Scrum.
- DDD.
- CI/CD.

## Despliegue

El proyecto se publica mediante **GitHub Pages** desde la rama `main`.

No requiere instalación ni build. Para ejecutarlo localmente basta con abrir `index.html` en un navegador o servir la carpeta con un servidor estático simple.

Ejemplo con Python:

```bash
python -m http.server 8000
```

Después abrir:

```text
http://localhost:8000
```

## Estado

Proyecto en evolución. La intención es mantenerlo como portfolio activo, añadiendo proyectos, refinando el diseño y actualizando el CV y los conocimientos conforme avance mi perfil técnico.

## Autor

**Alejandro Pico Perez**

- GitHub: https://github.com/AlejandroPico
- LinkedIn: https://www.linkedin.com/in/alejandro-pico-perez-a70681210/
- Email: alejandro.picoperez@gmail.com
