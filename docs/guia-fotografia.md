# Manual de Fotografía para Eventos Python Chile  
*Guía técnica para captura, edición y almacenamiento de material multimedia*  

---

## **Recomendaciones Esenciales**  

### 1. Composición Visual  
**Regla 30/70:**  
- 30% fotos verticales (retratos/keynotes emotivos)  
- 70% horizontales (grupos/pantallas de código)  

**Punto de interés:**  
Usar la [regla de los tercios](https://www.adobe.com/creativecloud/photography/technique/rule-of-thirds.html) dejando espacio a la izquierda/derecha (para superponer texto luego).  

**Iluminación mínima:**  
ISO 800 máximo para reducir ruido (evitar granulado en web).  

---

### 2. Especificaciones Técnicas  
**Formato Principal:**  
- JPEG (calidad 90-100%) → _Equilibrio universal entre calidad/peso_  
- Resolución: Mínimo 3000px (lado mayor)  

**Backup de Originales:**  
- Fotos RAW/editable → Carpeta `/RAW` (sin comprimir)  

---

### 3. Sistema de Nomenclatura  
`[EVENTO]_[AÑO]_[CIUDAD]_[NÚMERO].jpg`  
**Ejemplo:** `PYDAY_2024_VALPO_01.jpg`  

**Reglas Estructurales:**  
- ✅ **Mayúsculas obligatorias** *(evita errores técnicos y mejora legibilidad)*  
- Números con 2 dígitos: `01`, `02`, ... `99`  
- Sin espacios/caracteres especiales  

**Códigos Oficiales:**  
```python  
ciudades = ['VALPO', 'STGO', 'CPO']  # Valparaíso, Santiago, Copiapó  
eventos = ['PYDAY', 'PYSCHOOL', 'PYCON']  
```  

---

### 4. Metadatos y Privacidad  
- **Eliminar EXIF de ubicación** (geolocalización)  
- Descripción en Google Drive:  
  `"Foto de [Speaker/actividad] - [Evento] Chile [año]"`  

---

### 5. Herramientas Clave  
[**XnView MP**](https://www.xnview.com/en/) (gratis) para:  
- Conversión batch a JPEG  
- Eliminación EXIF  
- Renombrado masivo  

---

*¿Por qué MAYÚSCULAS?*  
→ **Compatibilidad universal** (Linux/macOS/Windows)  
→ **Mejor indexación** en motores de búsqueda  
→ **Prevención de errores** en scripts automatizados  
→ **Estándar profesional** (ISO/IEC 10918-1)  
