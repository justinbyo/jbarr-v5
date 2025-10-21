# jbarr-v5

## De Projectu (About the Project)

Hoc projectum est locus interretialis personalis pro Justin Barr Young, Product Manager et Creative Technologist. Aedificatum est cum HTML, CSS (SASS), et JavaScript, et in GitHub Pages hospitatur.

## Res Importantes (Important Information)

- `/docs` est directio ubi aedificatio loci posita est et versionem loci quae viva fit repraesentat
- Projectum utitur SASS ad CSS generandum
- Projectum utitur live-server ad progressionem localem

## Apparatus Progressionis (Development Setup)

### Requisita (Prerequisites)

- Node.js et npm (per brew installari potest)

### Installatio in Nova Machina (Installation on New Machine)

1. Certifica te habere Node.js et npm (quod cum Node venit) per brew
2. Installa necessitates automatice:
   ```bash
   npm install
   ```

Hoc automatice installabit:
- `sass` - Ad SCSS in CSS compilandum
- `live-server` - Ad servitorem localem progressionis currendum

### Ambitus Progressionis Currens (Running the Development Environment)

Ad ambitus progressionis currendum, aperire duas tabulae terminalis novae:

1. Curre observatorem SASS (in prima tabula):
   ```bash
   npm run sass
   ```
   Hoc observabit mutationes in `/scss` et automatice compilabit ad `/docs/css`

2. Curre servitorem localem (in secunda tabula):
   ```bash
   npm run start
   ```
   Hoc aperiet servitorem localem et paginam aperiet in navigatro tuo

## Structura Projecti (Project Structure)

```
jbarr-v5/
├── docs/               # Directio aedificationis pro GitHub Pages
│   ├── index.html     # Pagina domestica principalis
│   ├── css/           # CSS compilatus
│   ├── images/        # Imagines
│   ├── js/            # JavaScript
│   └── CNAME          # Configuratio domini customati
├── scss/              # Fontes SASS
│   └── styles.scss    # Fasciculus SASS principalis
├── package.json       # Configuratio NPM et scripturae
└── notes.md           # Notae progressionis
```

## Mutationes Importantes Factae (Important Changes Made)

- Omnia quae in ramo `gh-pages` vivere debent in directionem `/docs` mota sunt ut res mundae sint
- Hoc includit `index.html`, CNAME, `/images`, et directionem `/css` compilatam
- Res quae in gh-pages vivere NON debent includunt:
  - `package.json` et modulos node
  - Omnem materiam SASS in `/scss`
- Scriptura `start` live-server renovata est ut `/docs` ut directionem principalem observaret:
  - `docs/index.html` utitur ut pagina domestica ad onerandum
  - `/docs` ut radicem localhost tractat
  - Vide: `"start": "live-server --entry-file=docs/index.html --mount=/:docs"`

## Scripturae Disponibiles (Available Scripts)

### `npm run sass`
Observat mutationes in `/scss` et automatice compilat CSS ad `/docs/css/styles.css`

### `npm run start`
Incipit servitorem progressionis localem qui paginam aperit in navigatro tuo et automatice reficit quando fasciculi mutantur

## Versio (Version)

Versio Actualis: 2.0.0

## Licentia (License)

ISC

---

*Facta cum cura in Los Angeles soleata* ☀️
