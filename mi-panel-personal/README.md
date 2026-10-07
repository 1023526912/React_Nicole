# Mi Panel Personal

Trabajo de componentes en React. Estudiante: Nicole Bolivar.

## Abrir y ejecutar en VS Code

1. Instala Node.js 22 o superior si aún no lo tienes.
2. Extrae el ZIP. No trabajes directamente dentro del archivo comprimido.
3. En VS Code, selecciona **Archivo > Abrir carpeta** y abre `mi-panel-personal`, la carpeta que contiene `package.json`.
4. Selecciona **Terminal > Nueva terminal**.
5. Ejecuta:

```bash
npm install
npm run dev
```

6. Abre en el navegador la dirección que aparezca en la terminal, normalmente `http://localhost:5173`.
7. Para detener el servidor presiona **Ctrl + C** en la terminal.

La instalación inicial necesita internet. Si Windows bloquea `npm.ps1`, selecciona una terminal **Command Prompt (cmd)** en VS Code y vuelve a ejecutar los comandos.

## Cómo funciona

- `src/main.jsx` monta la aplicación en el elemento `root` de `index.html`.
- `src/App.jsx` importa y utiliza los tres componentes. Es el padre que envía las props.
- `Encabezado.jsx` muestra el título MI PANEL PERSONAL entre separadores.
- `Perfil.jsx` recibe `nombre`, `programa` y `ciudad`, y muestra sus valores.
- `Mensaje.jsx` recibe `mensaje` y lo muestra junto a una bombilla.
- `src/estilos.css` define la presentación.
- `RESPUESTAS.md` contiene las respuestas de la parte teórica.

Por ejemplo, `nombre="Nicole Bolivar"` en App envía ese texto a Perfil. Allí, `{nombre}` coloca el valor recibido en la pantalla. Los componentes se pueden reutilizar con otros datos.

Puedes cambiar nombre, programa y ciudad en `src/App.jsx` si tus datos son diferentes.

## Compilar

```bash
npm run build
```

Este comando genera `dist`. Para revisar esa compilación localmente, ejecuta `npm run preview`.
