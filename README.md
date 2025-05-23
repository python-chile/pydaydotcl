# 🐍 PyDay Chile Website Frontend

![PyDay Banner](public/images/banner-og.jpg)

**The official frontend for PyDay Chile** - A community-driven Python conference showcasing Chile's tech talent through talks, workshops, and networking events across multiple cities.

## ✨ Key Features

### 📍 Multi-City Experience
- Dynamic content routing for different conference locations
- Interactive map showing participating cities
- City-specific schedules and venue information

### 📸 Multimedia Hub
- Responsive image gallery with lazy loading
- Full-screen modal viewer with keyboard navigation
- Organized historical content by year/location
- Embedded video section with responsive players

### 🚀 Modern Web Practices
- Next.js 13+ App Router implementation
- Optimized WebP image delivery
- Responsive UI with Tailwind CSS
- Accessibility-first components (ARIA labels, keyboard nav)

### 🎤 Event Features
- Speaker profiles with social links
- Interactive schedule with filtering
- Sponsor showcase with tiered visibility
- Registration form with validation

## 🛠 Tech Stack

**Core**  
![Next.js](https://img.shields.io/badge/-Next.js-000?logo=next.js)  
![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?logo=tailwind-css)  
![React](https://img.shields.io/badge/-React-61DAFB?logo=react)

**Optimization**  
![Next Image](https://img.shields.io/badge/-Next_Image-000?logo=next.js)  
![Lazy Loading](https://img.shields.io/badge/-Lazy_Loading-FF6B6B)  
![WebP](https://img.shields.io/badge/-WebP-0095D5?logo=webp)

**Interactive**  
![Framer Motion](https://img.shields.io/badge/-Framer_Motion-0055FF)  
![React Hook Form](https://img.shields.io/badge/-React_Hook_Form-EC5990)

## 📂 Project Structure

```bash
pyday-frontend/
├── public/            # Optimized static assets
│   └── images/        # Organized media library
│       ├── gallery/   # Event photos by year/city
│       ├── speakers/  # Speaker headshots
│       └── sponsors/  # Partner logos
│
├── src/
│   ├── app/           # Next.js 13+ routing
│   ├── components/    # Reusable UI elements
│   ├── data/          # Content management
│   └── lib/           # Utilities & helpers
│
└── tailwind.config.js # Custom design system
```


## 🖼 Image Optimization

| Feature                | Implementation               | Benefit                          |
|------------------------|------------------------------|----------------------------------|
| **Modern Formats**     | WebP conversion              | 30% smaller than JPEG            |
| **Responsive SrcSet**  | Next.js Image component      | Device-appropriate sizes         |
| **Lazy Loading**       | Intersection Observer API    | Faster initial load              |
| **Blur Placeholders**  | Dynamic SVG generation       | Smooth loading experience        |

## ♿ Accessibility Commitment

- WCAG 2.1 AA compliant components
- Semantic HTML structure
- Keyboard-navigable interfaces
- Reduced motion preferences support
- ARIA labels for interactive elements

## 📌 Core Dependencies

- `next@15.3.1`: React framework for production
- `tailwindcss@4.1`: Utility-first CSS
- `framer-motion@10.16.0`: Smooth animations


## 🚦 Feature Management

Controla la visibilidad de funcionalidades mediante variables de entorno:

```env
# .env.local
NEXT_PUBLIC_FEATURE_REGISTRATION="false"    # Formulario de registro general
NEXT_PUBLIC_FEATURE_SPONSORS="true"        # Sección completa de patrocinios
NEXT_PUBLIC_FEATURE_SPONSOR_FORM="false"   # Formulario de patrocinio específico
```

### Variables Disponibles
| Variable                          | Descripción                                  | Valores Válidos |
|-----------------------------------|----------------------------------------------|-----------------|
| `NEXT_PUBLIC_FEATURE_REGISTRATION` | Habilita formulario de registro principal    | `true`/`false`  |
| `NEXT_PUBLIC_FEATURE_SPONSORS`     | Muestra sección completa de patrocinios      | `true`/`false`  |
| `NEXT_PUBLIC_FEATURE_SPONSOR_FORM` | Activa formulario de contacto para patrocinios | `true`/`false` |

### Flujo de Trabajo Recomendado
1. **Configurar variables** en `.env.local` (usar `true`/`false`)
2. **Reiniciar servidor** después de cambios
3. **Los CTAs alternativos** se mostrarán automáticamente cuando:
   - Una funcionalidad está deshabilitada (`false`)
   - Existe un link externo configurado en `cityData.js`

### Para Links Externos
```javascript
// Ejemplo en src/data/cities.js
valparaiso: {
  talkProposalLink: "https://..." // URL válida habilita CTA automático
}
```

**Nota:** Los botones alternativos (CTAs) se muestran solo cuando:
- La variable correspondiente está en `false`
- Existe un link configurado en los datos de la ciudad

**Cambios realizados:**
1. Sección dedicada a gestión de features
2. Tabla clara de variables
3. Explicación del comportamiento automático
4. Ejemplo práctico de configuración
5. Guía visual para no técnicos


**Version final del archivo .env.local:**
```env
# CONFIGURACIÓN DE FUNCIONALIDADES
# Valores permitidos: "true" (activado) | "false" (desactivado)

NEXT_PUBLIC_FEATURE_REGISTRATION="false"
NEXT_PUBLIC_FEATURE_SPONSORS="true"
NEXT_PUBLIC_FEATURE_SPONSOR_FORM="false"

# URL BASE DEL SITIO (no modificar en desarrollo)
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

## 🌍 Contributing

We welcome community contributions! Please see our [Contribution Guidelines](docs/CONTRIBUTING.md) and review our [Photography Style Guide](docs/guia-fotografia.md) for asset submissions.

---

**License**: Apache 2.0 (See [LICENSE](LICENSE))  
**Maintainer**: PyDay Chile Tech Committee  
📧 *pyday@pythonchile.cl*