# jbarr-v5

Sitio web de portafolio personal para Justin Barr Young - Gerente de Producto y Tecnólogo Creativo.

## Acerca del Proyecto

Este es un sitio web de portafolio personal construido con HTML, CSS (compilado desde SASS) y JavaScript. El sitio está alojado en GitHub Pages y presenta el trabajo y experiencia profesional de Justin Barr Young.

## Estructura del Proyecto

- `/docs` - Directorio donde reside la construcción del sitio que se publica en GitHub Pages
  - `index.html` - Página principal
  - `/css` - Archivos CSS compilados
  - `/images` - Imágenes y recursos
  - `/js` - Scripts de JavaScript
  - `CNAME` - Configuración de dominio personalizado
- `/scss` - Archivos fuente SASS (no se publican en GitHub Pages)
- `package.json` - Configuración de dependencias y scripts de Node.js
- `notes.md` - Notas de desarrollo y documentación interna

## Requisitos Previos

- [Node.js](https://nodejs.org/) (que incluye npm)
- Se recomienda instalar Node.js con [Homebrew](https://brew.sh/) en macOS: `brew install node`

## Instalación

### En una máquina nueva

1. Asegúrate de tener Node.js y npm instalados
2. Clona este repositorio
3. Instala las dependencias automáticamente:
   ```bash
   npm install
   ```

Esto instalará automáticamente:
- `sass` - Para compilar archivos SASS a CSS
- `live-server` - Para el servidor de desarrollo local

## Uso

### Ejecutar el Entorno de Desarrollo

Para trabajar en el sitio, necesitas ejecutar dos comandos en pestañas de terminal separadas:

1. **Compilador SASS** (observa cambios en archivos SASS):
   ```bash
   npm run sass
   ```

2. **Servidor de Desarrollo Local**:
   ```bash
   npm run start
   ```

Esto abrirá automáticamente el sitio en tu navegador predeterminado en `http://localhost:8080`.

### Scripts Disponibles

- `npm run sass` - Ejecuta SASS en modo observación, compilando automáticamente `scss/styles.scss` a `docs/css/styles.css` cuando detecta cambios
- `npm run start` - Inicia el servidor de desarrollo local con live-reload, usando `docs/index.html` como punto de entrada y montando el directorio `/docs` como raíz

## Despliegue

El sitio se despliega automáticamente a través de GitHub Pages desde el directorio `/docs` en la rama principal. Cualquier cambio enviado al directorio `/docs` se reflejará en el sitio en vivo.

### Archivos Publicados en GitHub Pages

- Todo el contenido del directorio `/docs`

### Archivos NO Publicados

- `package.json` y `node_modules`
- Archivos SASS en `/scss` (solo se publican los CSS compilados)
- `notes.md` y otros archivos de documentación de desarrollo

## Características

- Diseño responsivo para todos los tamaños de dispositivos
- Modo oscuro/claro con alternador de tema
- Animaciones y transiciones suaves
- Tipografía personalizada usando Google Fonts (Noto Serif y Lato)
- Construcción CSS modular usando SASS

## Tecnologías Utilizadas

- **HTML5** - Estructura y contenido
- **CSS3** - Estilos y diseño
- **SASS** - Preprocesador CSS para desarrollo modular
- **JavaScript** - Interactividad (alternador de tema)
- **Node.js & npm** - Gestión de dependencias y herramientas de desarrollo
- **live-server** - Servidor de desarrollo con recarga en vivo
- **GitHub Pages** - Alojamiento

## Tareas Pendientes

- [ ] Refactorizar main.scss en archivos SCSS individuales
- [ ] Explorar cómo realizar escaneo de accesibilidad con Axe
- [ ] Explorar automatización de scripts con herramientas como Gulp o Webpack

## Licencia

ISC

## Autor

Justin Barr Young
- Email: [justin@jbarr.co](mailto:justin@jbarr.co)
- GitHub: [@justinbyo](https://github.com/justinbyo)
- Sitio Web: [jbarr.co](https://jbarr.co)
