# 📝 Guía del Sistema de Tipografía ECOTEC

## Introducción

Este documento describe el sistema de tipografía implementado en el proyecto ECOTEC. El sistema está diseñado para proporcionar consistencia visual, fácil mantenimiento y escalabilidad responsive en toda la aplicación.

## 📁 Ubicación de Archivos

- **Sistema principal**: `src/styles/_typography.scss`
- **Importación global**: `src/styles.scss`

## 🎯 Uso del Sistema

### 1. Variables CSS (Recomendado)

Usa variables CSS directamente en tus archivos SCSS:

```scss
.mi-titulo {
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
}
```

### 2. Clases de Utilidad

Aplica clases directamente en el HTML:

```html
<h1 class="text-4xl font-bold leading-tight">Título Principal</h1>
<p class="text-base font-regular leading-relaxed">Texto de contenido...</p>
```

### 3. Componentes Pre-diseñados

Usa componentes tipográficos listos para usar:

```html
<h1 class="page-title">Dashboard ECOTEC</h1>
<h2 class="section-title">Métricas de Segregación</h2>
<p class="body-text">Descripción del contenido...</p>
<span class="label">Etiqueta</span>
<div class="metric-value">84.5%</div>
```

## 📏 Escalas Disponibles

### Tamaños de Texto

| Variable | Tamaño (responsive) | Uso Recomendado |
|----------|---------------------|------------------|
| `--text-xs` | 10-12px | Textos muy pequeños, etiquetas |
| `--text-sm` | 12-14px | Textos secundarios, subtítulos |
| `--text-base` | 14-16px | Texto de cuerpo principal |
| `--text-lg` | 16-18px | Textos destacados |
| `--text-xl` | 18-20px | Subtítulos importantes |
| `--text-2xl` | 20-24px | Títulos de sección |
| `--text-3xl` | 24-30px | Valores métricos, títulos grandes |
| `--text-4xl` | 30-36px | Títulos de página |
| `--text-5xl` | 36-48px | Títulos hero |
| `--text-6xl` | 40-60px | Títulos principales |

### Pesos de Fuente

| Variable | Valor | Uso |
|----------|-------|-----|
| `--font-thin` | 100 | Muy ligero (decorativo) |
| `--font-extralight` | 200 | Extra ligero |
| `--font-light` | 300 | Ligero |
| `--font-regular` | 400 | **Normal (por defecto)** |
| `--font-medium` | 500 | Medio |
| `--font-semibold` | 600 | Semi-negrita |
| `--font-bold` | 700 | **Negrita** |
| `--font-extrabold` | 800 | Extra negrita |
| `--font-black` | 900 | Negro |

### Line Heights

| Variable | Valor | Uso |
|----------|-------|-----|
| `--leading-none` | 1 | Sin espacio extra |
| `--leading-tight` | 1.2 | **Títulos compactos** |
| `--leading-snug` | 1.375 | Títulos con espacio |
| `--leading-normal` | 1.5 | **Texto normal** |
| `--leading-relaxed` | 1.75 | Texto con espacio |
| `--leading-loose` | 2 | Espaciado máximo |

### Letter Spacing

| Variable | Valor | Uso |
|----------|-------|-----|
| `--tracking-tighter` | -0.05em | Muy junto |
| `--tracking-tight` | -0.025em | Junto |
| `--tracking-normal` | 0em | **Normal** |
| `--tracking-wide` | 0.025em | **Etiquetas, uppercase** |
| `--tracking-wider` | 0.05em | Más espaciado |
| `--tracking-widest` | 0.1em | Máximo espaciado |

## 🎨 Componentes Pre-diseñados

### Títulos y Textos

```html
<!-- Título de página principal -->
<h1 class="page-title">Dashboard Principal</h1>

<!-- Título de sección -->
<h2 class="section-title">Métricas de Segregación</h2>

<!-- Subtítulo -->
<h3 class="subtitle">Análisis mensual</h3>

<!-- Texto de cuerpo -->
<p class="body-text">Este es el contenido principal...</p>

<!-- Caption (texto pequeño) -->
<small class="caption">Última actualización: Hoy</small>

<!-- Etiqueta -->
<label class="label">Nombre de Usuario</label>

<!-- Texto destacado -->
<span class="highlight">¡Importante!</span>

<!-- Valor métrico -->
<div class="metric-value">84.5%</div>

<!-- Texto de botón -->
<button class="button-text">Guardar Cambios</button>
```

## 🔧 Mixins SCSS

### Aplicar tamaño de texto

```scss
.mi-elemento {
  @include text-size('xl'); // Usa var(--text-xl)
}
```

### Aplicar peso de fuente

```scss
.mi-elemento {
  @include font-weight('semibold'); // Usa var(--font-semibold)
}
```

### Truncar texto (1 línea)

```scss
.mi-titulo {
  @include truncate;
  // Equivale a:
  // overflow: hidden;
  // text-overflow: ellipsis;
  // white-space: nowrap;
}
```

### Truncar texto multilínea

```scss
.mi-descripcion {
  @include line-clamp(3); // Limita a 3 líneas
}
```

### Texto responsive fluido personalizado

```scss
.mi-texto-custom {
  @include fluid-text(14px, 20px, 320px, 1440px);
  // min: 14px, max: 20px, desde 320px hasta 1440px viewport
}
```

## 📋 Ejemplos Prácticos

### Ejemplo 1: Card de Métrica

```html
<div class="metric-card">
  <h3 class="label">Tasa de Segregación</h3>
  <div class="metric-value">84.5%</div>
  <p class="caption">KPI de cumplimiento</p>
</div>
```

```scss
.metric-card {
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  .label {
    // Ya tiene los estilos del sistema
    margin-bottom: 0.5rem;
  }

  .metric-value {
    // Ya tiene los estilos del sistema
    color: #10b981;
  }

  .caption {
    // Ya tiene los estilos del sistema
    margin-top: 0.25rem;
  }
}
```

### Ejemplo 2: Formulario

```html
<form>
  <div class="form-field">
    <label class="label">Nombre del Edificio</label>
    <input type="text" class="text-base" placeholder="Ingrese el nombre..." />
    <small class="caption">Máximo 50 caracteres</small>
  </div>
</form>
```

```scss
.form-field {
  margin-bottom: 1.5rem;

  .label {
    display: block;
    margin-bottom: 0.5rem;
  }

  input {
    width: 100%;
    padding: 0.75rem 1rem;
    font-size: var(--text-base);
    font-family: var(--font-sans);
    border: 1px solid #cbd5e1;
    border-radius: 8px;

    &:focus {
      outline: none;
      border-color: #10b981;
    }
  }

  .caption {
    display: block;
    margin-top: 0.5rem;
  }
}
```

### Ejemplo 3: Tabla de Datos

```html
<table>
  <thead>
    <tr>
      <th class="label">Sede</th>
      <th class="label">Edificio</th>
      <th class="label">Tasa</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="body-text">Villa María</td>
      <td class="body-text">Administrativo</td>
      <td class="highlight">92.5%</td>
    </tr>
  </tbody>
</table>
```

## 🎯 Buenas Prácticas

### ✅ Hacer

```scss
// ✅ Usar variables CSS
.titulo {
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
}

// ✅ Usar componentes pre-diseñados
<h1 class="page-title">Mi Título</h1>

// ✅ Combinar variables del sistema
.custom-text {
  font-size: var(--text-lg);
  font-weight: var(--font-medium);
  line-height: var(--leading-relaxed);
  letter-spacing: var(--tracking-wide);
}
```

### ❌ Evitar

```scss
// ❌ Valores hardcodeados
.titulo {
  font-size: 24px;
  font-weight: 700;
}

// ❌ Mezclar sistemas
.texto {
  font-size: 1.5rem; // No usar rem directamente
  font-weight: bold; // No usar keywords
}

// ❌ Repetir estilos
.titulo-1 {
  font-size: 24px;
  font-weight: 700;
}
.titulo-2 {
  font-size: 24px; // Duplicado innecesario
  font-weight: 700;
}
```

## 🔄 Migración de Código Existente

### Antes

```scss
.mi-componente {
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.5px;
}
```

### Después

```scss
.mi-componente {
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  line-height: var(--leading-normal);
  letter-spacing: var(--tracking-wide);
}
```

## 📱 Responsive Design

El sistema incluye tamaños responsive automáticos usando `clamp()`. Todos los tamaños de texto se adaptan al viewport automáticamente.

```scss
// ✅ Responsive automático
.titulo {
  font-size: var(--text-4xl); // Se adapta de 30px a 36px automáticamente
}

// ❌ No necesitas media queries para tamaños básicos
.titulo {
  font-size: var(--text-4xl);

  // ❌ NO NECESARIO
  @media (max-width: 768px) {
    font-size: var(--text-2xl);
  }
}
```

## 🎨 Personalización

Si necesitas agregar tamaños personalizados, edita `src/styles/_typography.scss`:

```scss
// Agregar nuevo tamaño
:root {
  --text-7xl: clamp(3rem, 8vw, 4.5rem); // 48-72px
}

// Agregar nuevo peso (si la fuente lo soporta)
:root {
  --font-ultra: 950;
}
```

## 📚 Recursos Adicionales

- **Variables CSS**: Las variables se definen en `:root` y están disponibles globalmente
- **Clases de utilidad**: Todas las clases están en `_typography.scss`
- **Componentes**: Los componentes pre-diseñados están listos para usar
- **Mixins**: Los mixins SCSS facilitan la aplicación de estilos

## 🆘 Soporte

Para cualquier duda sobre el sistema de tipografía:

1. Consulta este documento
2. Revisa `src/styles/_typography.scss` para ver todas las variables disponibles
3. Inspecciona componentes existentes que ya usan el sistema

## 📝 Notas Finales

- **Siempre prioriza** el uso de variables CSS sobre valores hardcodeados
- **Mantén la consistencia** usando el mismo tamaño para elementos similares
- **Documenta** cualquier adición o modificación al sistema
- **Revisa** periódicamente el código para identificar oportunidades de usar el sistema

---

**Última actualización**: Noviembre 2025
**Versión del sistema**: 1.0.0
