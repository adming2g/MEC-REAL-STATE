# MEC REAL STATE

Portal inmobiliario para República Dominicana, preparado para ES/EN, RD$/USD, catálogo, autenticación, favoritos, agenda y CRM.

## Ejecutar localmente
1. Instala Node.js 20+.
2. `npm install`
3. Copia `.env.example` a `.env.local` y configura Supabase cuando quieras activar backend real.
4. `npm run dev`
5. Abre `http://localhost:3000`.

## Backend
La carpeta `supabase/schema.sql` contiene el esquema inicial. Supabase ofrece Postgres, Auth y Storage integrados; el plan Free actual incluye límites para iniciar el proyecto, aunque los proyectos gratuitos pueden pausarse tras inactividad. Verifica límites actuales antes de producción.

## Deploy
El proyecto está preparado para Vercel + Supabase. Vercel ofrece un plan Hobby de $0/mes y despliegue Next.js; un dominio personalizado normalmente requiere registrar/comprar el dominio, mientras que el despliegue puede usar el subdominio proporcionado por la plataforma.

## Próximas integraciones
- Verificación por código alfanumérico de 4 caracteres.
- CAPTCHA real.
- SMTP transaccional.
- Google Maps/Mapbox.
- Upload de fotos, videos, planos y documentos.
- RBAC completo para SUPER ADMIN/ADMIN/ASESOR/CLIENTE/BROKER.
- CRM completo, comentarios privados, agenda y notificaciones.
