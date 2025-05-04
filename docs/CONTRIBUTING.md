# Guía para Contribuir

Bienvenido(a) y gracias por tu interés en mejorar el frontend del sitio PyDay Chile. Este documento tiene como objetivo orientarte sobre cómo trabajar en el proyecto y mantener la coherencia en el código, dado que se asume que los colaboradores cuentan con conocimientos básicos de Next.js, Tailwind CSS y CSS en general.

## Requisitos Básicos

Antes de iniciar, se recomienda tener al menos un conocimiento básico sobre:
- **Next.js**: Framework de React para renderizado del lado del servidor. Consulta la documentación oficial en [Next.js Docs](https://nextjs.org/docs).
- **Tailwind CSS**: Librería de utilidades para estilos. Revisa [Tailwind CSS Docs](https://tailwindcss.com/docs).
- **CSS**: Conceptos fundamentales de estilos y estructura en hojas de estilo.
- Uso de Git y GitHub para la colaboración en desarrollo.

Si tienes dudas técnicas, considera apoyarte en asistentes de IA como [ChatGPT](https://chat.openai.com/), [Claude AI](https://claude.ai/new) o [Deepseek](https://chat.deepseek.com/). Recuerda mencionar las versiones de las herramientas usadas en el proyecto para facilitar respuestas precisas y obtener ejemplos prácticos.

## Flujo de Trabajo

Para minimizar problemas futuros y mantener un flujo de colaboración ordenado, sigue estas pautas:

- **Clonado:**  
  Clona el repositorio en tu entorno de desarrollo local.

- **Trabajar en Ramas:**  
  Crea una rama nueva para cada funcionalidad, ajuste o corrección de errores. Evita trabajar directamente sobre la rama principal.

- **Mensajes de Commit:**  
  Utiliza mensajes claros y descriptivos. Se sugiere un formato como:
  - `feat: agregar nuevo componente X`
  - `fix: corregir bug en Y`
  Esto ayudará a entender rápidamente la finalidad de cada commit.

- **Pull Request (PR):**  
  Cuando envíes un PR:
  - Describe claramente qué cambio introduces y por qué.
  - Asegúrate de que los cambios se integren con la estructura establecida del repositorio.
  - Si modificas estilos o componentes (por ejemplo, cambios en Next.js o Tailwind), verifica manualmente la legibilidad, contraste (por ejemplo, con herramientas de accesibilidad) y consistencia visual en distintos navegadores.
  - Revisa si existen cambios pendientes o discusiones abiertas para evitar conflictos, especialmente si hay contribuciones previas o revisiones.

## Estructura del Proyecto

La estructura actual es la siguiente:

```bash
pyday-frontend/
├── public/            # Recursos estáticos, incluyendo imágenes
│   └── images/        
│       ├── gallery/   
│       ├── speakers/  
│       └── sponsors/  
│
├── src/
│   ├── app/           # Rutas y páginas (Next.js 13+ App Router)
│   ├── components/    # Componentes reutilizables
│   ├── data/          # Gestión del contenido
│   └── lib/           # Utilidades y helpers
│
└── tailwind.config.js  # Configuración personalizada de Tailwind CSS
```

**Importante:**
- **Nomenclatura:** Preferimos nombres de archivos y rutas en inglés, y de una sola palabra siempre que sea posible.
- **Estilos:** Evita crear archivos de estilo individuales innecesarios. Comprueba primero si puedes reutilizar `global.css` u otros estilos ya definidos para mantener una experiencia de usuario coherente.

## Uso de Recursos y Documentación

Para profundizar en las tecnologías utilizadas, consulta siempre la documentación oficial:
- **Next.js:** [Next.js Docs](https://nextjs.org/docs)
- **Tailwind CSS:** [Tailwind CSS Docs](https://tailwindcss.com/docs)
- **CSS:** [MDN Web Docs para CSS](https://developer.mozilla.org/es/docs/Web/CSS)

Además, si consideras que alguna herramienta o nueva IA puede ayudar a resolver problemas específicos o acelerar la solución de dudas, siéntete libre de probarla. Solo asegúrate de validar cualquier sugerencia con la documentación oficial o con el equipo.

## Propuestas y Mejoras

Si deseas proponer cambios en el flujo de trabajo, en la estructura del proyecto o en nuevas funcionalidades:
- Abre un "issue" detallando tu propuesta.
- Espera el feedback del equipo antes de implementar cambios significativos que puedan afectar la coherencia del proyecto.

## Comunicación y Soporte

Si tienes preguntas o necesitas aclaraciones:
- Participa en los issues del repositorio.
- Utiliza los canales de comunicación definidos por el equipo (por ejemplo, Discord, Slack u otros), en caso de que existan.

## Conclusión

Tu contribución es esencial para el éxito del proyecto. Seguiremos trabajando para afinar estos lineamientos y asegurarnos de que el código sea fácil de mantener y evolutivo. Gracias por aportar y por ayudar a que el PyDay Chile Website Frontend siga creciendo con calidad y consistencia.

---

Este documento puede actualizarse a medida que se vayan definiendo nuevos procesos o se detecten áreas de mejora. ¡Bienvenido(a) a la comunidad y a contribuir en este emocionante proyecto!
