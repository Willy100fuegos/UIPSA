# UIPSA Dashboard - Sistema de Gestión de Seguridad Intramuros 👮‍♂️🏢

> **Plataforma integral de control operativo para servicios de Seguridad Privada.**
> *Digitalización de la fuerza de tarea: Del control de accesos físico a la inteligencia de datos en la nube.*

<div align="center">
  <img src="https://img.shields.io/badge/Cliente-UIPSA_Seguridad-1e293b?style=for-the-badge&logo=shield&logoColor=white" />
  <img src="https://img.shields.io/badge/Enfoque-Security_Ops-4f46e5?style=for-the-badge&logo=prometheus&logoColor=white" />
  <img src="https://img.shields.io/badge/Estado-Producci%C3%B3n-success?style=for-the-badge" />
</div>

---

## 🎯 Objetivo del Sistema

Este desarrollo responde a la necesidad de **UIPSA** de estandarizar la operación de sus oficiales en servicios intramuros (Plantas Industriales, Corporativos, Residenciales). El sistema reemplaza las bitácoras de papel y los reportes de WhatsApp por una **Central de Mando Digital** que permite:

1.  **Supervisión Remota:** Validar la presencia física de los guardias en tiempo real.
2.  **Trazabilidad:** Registrar cada rondín y evento con marca de tiempo inalterable.
3.  **Imagen Corporativa:** Entregar a los clientes reportes profesionales PDF en lugar de fotos dispersas.

---

## 💻 Módulos Funcionales

### 1. 📋 Control de Asistencia Biométrico/Digital
Sistema de "Check-In" geolocalizado para el inicio y fin de turno.
* **Validación:** El oficial debe estar dentro del perímetro (Geofence) para marcar asistencia.
* **Alertas:** Notificación a supervisores si un servicio queda descubierto (No-Show).

### 2. 🚶‍♂️ Seguimiento de Rondines (Patrol Tracking)
Módulo para la ejecución de recorridos de vigilancia programados.
* **Puntos de Control:** Escaneo de códigos QR colocados estratégicamente en las instalaciones.
* **Incidencias:** Opción para levantar reportes (puerta abierta, luminaria fundida) durante el recorrido con evidencia fotográfica.

### 3. 📝 Bitácora Operativa Digital
El corazón del sistema. Un feed en tiempo real de todas las novedades del servicio.
* **Entradas/Salidas:** Registro de visitantes y proveedores.
* **Materiales:** Control de ingreso y egreso de activos.
* **Novedades:** Reporte de consignas específicas del cliente.

### 4. 📊 Dashboard Gerencial
Tablero de inteligencia para la toma de decisiones.
* **KPIs:** Cumplimiento de rondines vs. Programados.
* **Heatmap:** Zonas con mayor incidencia de reportes.
* **Exportación:** Generación automática de la "Sábana de Asistencia" para nómina y facturación.

---

## 🛠️ Stack Tecnológico

Arquitectura diseñada para alta disponibilidad y bajo consumo de datos en campo.

| Capa | Tecnología | Función |
| :--- | :--- | :--- |
| **Frontend** | **HTML5 / Bootstrap 5** | Interfaz móvil ligera (PWA) para uso en celulares de gama media. |
| **Backend** | **PHP 8.x** | Lógica de negocio, procesamiento de bitácoras y generación de PDF. |
| **Base de Datos** | **MySQL** | Almacenamiento relacional de históricos y usuarios. |
| **Mapas** | **Leaflet JS** | Visualización de ubicaciones y geocercas de servicios. |
| **Documentos** | **FPDF** | Motor de renderizado para reportes legales impresos. |

---

## 🔄 Flujo de Valor (Workflow)

1.  **Despliegue:** El oficial llega al servicio y escanea el QR Maestro de Asistencia.
2.  **Operación:** Durante el turno, registra eventos en la Web App sin instalar nada (acceso vía navegador).
3.  **Supervisión:** El Centro de Control (C4) ve los registros en vivo en el Dashboard.
4.  **Cierre:** Al finalizar el turno, el sistema envía automáticamente el "Parte de Novedades" al cliente por correo.

---

## 🔒 Seguridad y Privacidad

* **Role-Based Access Control (RBAC):** Niveles de acceso diferenciados (Guardia, Supervisor, Cliente, Administrador).
* **Audit Logs:** Registro inmutable de todas las acciones para fines forenses.
* **Data Privacy:** Los datos sensibles del cliente están segregados y encriptados.

---

**Desarrollado por:**
**William Velázquez Valenzuela**
*Director de Tecnologías | Pixmedia Agency*
