# Encriptador/Desencriptador

## Descripción

Este proyecto es una aplicación web simple que permite a los usuarios encriptar y desencriptar mensajes utilizando un algoritmo básico de sustitución de texto. La aplicación está construida utilizando HTML, CSS y JavaScript, y cuenta con una interfaz de usuario interactiva que facilita la encriptación y desencriptación de textos.

## Características

- **Encriptar**: Convierte el texto ingresado en un formato encriptado usando un sencillo esquema de sustitución.
- **Desencriptar**: Reconvierte el texto encriptado al formato original.
- **Copiar al portapapeles**: Permite copiar el texto encriptado o desencriptado al portapapeles para usarlo en otras aplicaciones.
- **Interfaz amigable**: Diseño responsivo y fácil de usar con botones claros para las acciones de encriptar, desencriptar y copiar.

## Tecnologías Utilizadas

- **HTML5**: Estructura y organización del contenido.
- **CSS3**: Estilización y diseño visual.
- **JavaScript**: Lógica de negocio y manipulación dinámica del DOM.

## Estructura del Proyecto

```bash
Encriptador-Desencriptador/
├── index.html          # Estructura principal de la aplicación
├── index.css           # Estilos para la interfaz de usuario
├── app.js              # Lógica de encriptación/desencriptación y funcionalidad interactiva
├── logo.png            # Logo de la aplicación
├── muneco.png          # Imagen decorativa utilizada en la interfaz
└── README.md           # Documentación del proyecto

## Cómo Funciona

### Encriptación

La función de encriptación toma el texto ingresado y reemplaza ciertas letras por combinaciones específicas de caracteres según la siguiente regla:

- `e` se convierte en `enter`
- `i` se convierte en `imes`
- `a` se convierte en `ai`
- `o` se convierte en `ober`
- `u` se convierte en `ufat`

**Ejemplo**:

- **Entrada**: `hola`
- **Salida**: `hoberlai`

### Desencriptación

La función de desencriptación toma un texto previamente encriptado y lo restaura a su forma original:

- `enter` se convierte en `e`
- `imes` se convierte en `i`
- `ai` se convierte en `a`
- `ober` se convierte en `o`
- `ufat` se convierte en `u`

**Ejemplo**:

- **Entrada**: `hoberlai`
- **Salida**: `hola`

### Copiar al Portapapeles

La aplicación también permite al usuario copiar el texto encriptado o desencriptado al portapapeles para su uso en otras aplicaciones.

## Instalación y Uso

1. **Clonar el repositorio**:

    ```bash
    git clone https://github.com/tuusuario/encriptador-desencriptador.git
    ```

2. **Abrir el archivo `index.html` en un navegador web**.

3. **Usar la aplicación**:
    - Escribe el texto que deseas encriptar o desencriptar en el área de texto.
    - Haz clic en el botón correspondiente para realizar la acción.
    - Copia el resultado si lo necesitas utilizando el botón "Copiar".

## Créditos

Desarrollado por Edison Omar Garcia Taveras como parte del programa especial One de Alura LATAM.
