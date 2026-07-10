# Plan B · Rediseño experimental 2026

Esta rama contiene una alternativa visual completa para el portfolio de Alejandro Pico.

## Objetivo

Mantener el contenido, los proyectos, los idiomas, el CV y las funciones de la versión principal, pero reinterpretarlos como un producto digital más editorial, técnico y contemporáneo.

## Cambios principales

- Navegación flotante y compacta.
- Portada de mayor impacto con jerarquía tipográfica y composición asimétrica.
- Panel de acceso rápido a proyectos y CV.
- Secciones numeradas y ritmo editorial.
- Perfil organizado como matriz de lectura.
- Propuesta de valor convertida en tres bloques principales.
- Proyectos presentados mediante una cuadrícula de doce columnas con jerarquías variables.
- Numeración, indicadores de apertura y respuestas visuales en las tarjetas.
- Conocimientos reorganizados en paneles técnicos compactos.
- CV convertido en dos líneas temporales estructuradas.
- Contacto rediseñado como panel final de producto.
- Respuesta visual al puntero en equipos de escritorio.
- Compatibilidad con modo claro, oscuro y variantes Aurora, Nebula y Solstice.
- Adaptación responsive y respeto por `prefers-reduced-motion`.

## Archivos específicos

- `plan-b.css`: sistema visual completo de la alternativa.
- `plan-b.js`: composición dinámica, textos auxiliares traducidos y microinteracciones.
- `script.js`: carga de la capa Plan B en esta rama.

## Previsualización

GitHub Pages publica normalmente una sola rama. Para revisar esta alternativa sin modificar `main`, se puede clonar el repositorio, cambiar a `Plan-B` y servirlo localmente:

```bash
git clone https://github.com/AlejandroPico/Portfolio.git
cd Portfolio
git switch Plan-B
python -m http.server 8000
```

Después, abrir `http://localhost:8000`.
