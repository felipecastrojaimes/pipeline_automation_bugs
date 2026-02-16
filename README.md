# Automatización de Pipeline - Bugs App

# EduSoft – Automatización del Proceso de Gestión de Bugs

## 📚 Contexto Académico

Este repositorio hace parte del proyecto integrador del curso **Modelamiento y Automatización de Procesos en Ingeniería de Software - UPB**.

El proyecto simula la evolución del proceso de gestión de bugs en la empresa ficticia **EduSoft**, desarrollado a lo largo de tres unidades:

- **Unidad 1:** Modelamiento del proceso AS-IS (manual).
- **Unidad 2:** Rediseño del proceso TO-BE optimizado con KPIs.
- **Unidad 3:** Automatización del proceso TO-BE mediante un pipeline CI/CD.

Este repositorio corresponde a la implementación práctica de la **Unidad 3**.

---

## 🎯 Propósito del Proyecto

Demostrar cómo un proceso de negocio (gestión de bugs) puede ser:

1. Modelado
2. Optimizado
3. Automatizado

utilizando herramientas reales de DevOps como **GitHub Actions**.

---

## 🧩 Estructura del Proyecto
```text
pipeline_automation_bugs/
│
├── .github/workflows/
│   └── bug-fix-pipeline.yml
│
├── bugService.js
├── test.js
├── package.json
└── README.md
```

---

## 📂 Descripción de los Archivos

### 1️⃣ bugService.js
Simula el módulo de negocio del sistema de gestión de bugs.

Contiene funciones para:
- Validar un reporte de bug.
- Cambiar el estado del bug a `FIXED`.

Representa la lógica del proceso modelado en las unidades anteriores.

---

### 2️⃣ test.js
Contiene pruebas automatizadas que verifican que el estado del bug cambie correctamente.

Este archivo es ejecutado por el pipeline en la etapa de **Integración Continua (CI)**.

---

### 3️⃣ package.json
Define el proyecto Node.js y el comando:
`
npm test
`

Permite que el pipeline ejecute pruebas automáticamente al detectar un commit.

---


### 4️⃣ bug-fix-pipeline.yml
Ubicado en:
`
.github/workflows/
`

Define el pipeline CI/CD que:

- Se ejecuta cuando hay un push o se cierra un Pull Request.
- Instala dependencias.
- Ejecuta pruebas automatizadas.
- Simula el despliegue.
- Simula la notificación al equipo.

Este archivo representa la **automatización del proceso TO-BE**.

---

## 🔄 Flujo Automatizado

1. El desarrollador corrige un bug.
2. Hace commit al repositorio.
3. El pipeline se activa automáticamente.
4. Se ejecutan pruebas automatizadas.
5. Si todo es exitoso:
   - Se simula el despliegue.
   - Se notifica al equipo.

Este flujo representa la implementación práctica de **CI/CD**.

---

## 📊 Relación con Mejora Continua (PDCA)

- **Plan:** Definición del proceso TO-BE optimizado.
- **Do:** Implementación del pipeline CI/CD.
- **Check:** Validación mediante pruebas automatizadas.
- **Act:** Ajustes al código o al pipeline en caso de fallos.

---

## 📈 KPIs que pueden medirse

- Tiempo promedio entre commit y despliegue.
- Porcentaje de ejecuciones exitosas del pipeline.
- Frecuencia de despliegues.
- Número de fallos detectados automáticamente.

---

## 🚀 Aprendizajes Clave

Este proyecto permite al estudiante:

- Entender la relación entre procesos de negocio y automatización.
- Aplicar conceptos de DevOps en un entorno real.
- Implementar un pipeline CI/CD funcional.
- Medir impacto mediante KPIs.
- Integrar modelamiento BPMN con automatización técnica.

---

## 🛠 Cómo Ejecutar Localmente

Instalar dependencias:
`
npm install
`

Ejecutar pruebas manualmente:
`
npm test
`


---

## 🧠 Conclusión

La automatización no reemplaza el proceso de negocio; lo fortalece.

Este repositorio demuestra cómo un proceso modelado y optimizado puede convertirse en un sistema automatizado medible y escalable mediante prácticas DevOps.


