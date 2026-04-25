/// <reference types="vite/client" />

// Le enseñamos a TypeScript cómo manejar las importaciones de plantillas Handlebars
declare module "*.hbs?raw" {
  const content: string;
  export default content;
}

// Opcional: Por si en algún momento importas el .hbs sin el ?raw
declare module "*.hbs" {
  const content: string;
  export default content;
}
