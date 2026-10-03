# Dreamy Pijamas

Landing page de la tienda creada con Next.js, React, TypeScript y Tailwind CSS.

## Iniciar el proyecto

    npm install
    npm run dev

Luego abre http://localhost:3000.

## Personalizar la tienda

- Edita los productos, precios y categorías en app/page.tsx.
- Cambia WHATSAPP_NUMBER en app/page.tsx por el número real de la tienda, usando formato internacional sin el signo +.
- Para usar fotos propias, coloca los archivos en public/images/ y reemplaza la URL de cada producto por una ruta como /images/pijama-rosa.jpg.
- Los colores, tipografías, layout responsive, carruseles y skeleton de carga están en app/globals.css.
- Copia .env.example como .env.local y define NEXT_PUBLIC_SITE_URL con el dominio real antes de publicar.

Las imágenes incluidas son placeholders remotos para que la landing se vea completa desde el primer arranque.

## Arquitectura del código

- app/: rutas, metadata, sitemap, robots y manifest de Next.js.
- components/layout/: header y footer globales.
- components/home/: cada sección visual de la landing y sus componentes de catálogo.
- components/ui/: piezas pequeñas reutilizables, como logo y eyebrow.
- components/seo/: JSON-LD para buscadores.
- lib/products.ts: productos, categorías, beneficios y enlace de compra.
- lib/site-config.ts: dominio, WhatsApp y configuración general.
- app/globals.css: tokens de diseño y estilos compartidos.

Para agregar un producto nuevo, edita solamente lib/products.ts. Para cambiar el número de WhatsApp, edita WHATSAPP_NUMBER en lib/site-config.ts.

## Sobre la carpeta .next

.next/ es una carpeta generada automáticamente por Next.js. Sus archivos CSS y JavaScript de producción se minifican en una sola línea para reducir peso y mejorar la velocidad de carga. No se deben editar directamente.

El código editable está en app/, components/ y lib/. Para trabajar con estilos usa app/globals.css; para ver los cambios durante el desarrollo ejecuta npm run dev.

## SEO después de publicar

1. Verifica el dominio en Google Search Console.
2. Envía https://www.tudominio.com/sitemap.xml.
3. Revisa la indexación con la herramienta de inspección de URLs.
4. Crea y conecta un perfil de Google Business si la tienda tiene ubicación física.
5. Publica contenido útil de forma constante: guías para elegir pijamas, materiales, tallas y rutinas de descanso.
