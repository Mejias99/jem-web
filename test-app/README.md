> ⚠️ **Estado del proyecto**
>
> El proyecto ya ha superado la **fase de análisis conceptual y diseño visual** del cuestionario.  
> Actualmente se encuentra en **fase de diseño de la arquitectura del código** antes de comenzar la implementación.
>
> Próximas etapas del desarrollo:
>
> - Diseño de la arquitectura del código y organización de componentes en React  
> - Definición de la estructura de archivos del proyecto  
> - Implementación del cuestionario y su lógica de estado  
> - Desarrollo de estilos y maquetación  
> - Pruebas funcionales del algoritmo y del flujo del test  
> - Documentación técnica del proyecto

## Introducción

Este repositorio contiene el diseño y futura implementación de un **cuestionario interactivo desarrollado en React** cuyo objetivo es asignar a cada usuario una comisión de *Juventud en Marcha* en función de sus preferencias, motivaciones y forma de actuar.

El test plantea preguntas situacionales breves que conducen a un resultado personalizado, asociado a una de las comisiones del proyecto. Además de aportar una experiencia interactiva dentro de la web, la herramienta busca aumentar el engagement de los usuarios y facilitar su identificación con las distintas áreas de trabajo de la organización.

Actualmente el proyecto se encuentra **en fase de diseño de la lógica del cuestionario y de la arquitectura del código**, definiendo el sistema de puntuación, el mecanismo de desempate y la estructura de componentes que se implementará posteriormente en React.

## 🎯 Objetivo

El test plantea **preguntas situacionales y motivacionales** que generan un **resultado personalizado** asociado a perfiles juveniles (organizador, creativo, comunicador, movilizador, etc.).

La herramienta busca:

* **Aumentar el engagement** dentro de la web
* **Aportar dinamismo e interacción**
* **Reforzar la identificación** del usuario con el proyecto
* **Orientar a cada persona** hacia la comisión de JEM que mejor encaja con su perfil

Opcionalmente el sistema podrá integrarse con funcionalidades como:

* Registro de usuarios
* Guardado de resultados
* Estadísticas agregadas de participación

---

## 🧩 Comisiones del test

El cuestionario asigna una de las siguientes comisiones:

* **Comunicación**
* **Relaciones Internas**
* **Relaciones Externas**
* **Actividades**
* **Formación**
* **Logística / Tesorería**

---

## ⚙️ Diseño lógico del cuestionario

El test utiliza un **sistema de puntuación diseñado para evitar empates finales**, sin favorecer artificialmente ninguna comisión.

### 1️⃣ Fase base

Tres preguntas principales:

* **P1**
* **P2**
* **P5**

Cada respuesta suma **+10 puntos** a una comisión concreta.

Estas preguntas reparten puntuación directa entre:

* **Comunicación**
* **Relaciones Internas**
* **Relaciones Externas**
* **Actividades**
* **Formación**
* **Logística / Tesorería**

Si tras esta fase existe un **ganador único**, el cuestionario finaliza.

---

### 2️⃣ Sistema adaptativo de desempate

Si existe empate se activan preguntas adicionales.

Las preguntas **P3 y P4** añaden **+9 puntos** a bloques de comisiones relacionadas:

* **Actividades – Logística/Tesorería**
* **Relaciones Internas – Relaciones Externas**
* **Formación – Comunicación**

Si después de estas preguntas persiste un empate entre **exactamente dos comisiones**, se activa un **duelo específico**:

* **P6**
* **P7**
* **P8**

Estas preguntas otorgan **+9 puntos a una de las dos comisiones**, forzando un ganador.

---

### 3️⃣ Sistema de puntuación

El test utiliza **enteros (10 y 9)** en lugar de **decimales (1 y 0.9)**.

Esto evita problemas de **precisión con números flotantes en JavaScript** y mantiene la misma lógica de ponderación:

* **10** = peso principal
* **9** = peso de desempate

---

## ✅ Ventajas del diseño

* **Test muy corto** para la mayoría de usuarios (**3 preguntas**)
* Solo se alarga **si existe empate**
* **Ponderación clara y controlada**
* **Eliminación práctica de empates finales**
* Arquitectura **fácil de implementar con lógica de estado en React**

En términos estratégicos, el sistema funciona como un **mecanismo de segmentación interna presentado como experiencia lúdica**, optimizado para **claridad matemática y estabilidad técnica**.

## 🧱 Arquitectura (en definición)

El cuestionario se implementará utilizando React, aunque la arquitectura concreta de componentes y la gestión de estado aún se encuentran en fase de diseño.

---
