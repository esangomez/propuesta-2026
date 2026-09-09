# Propuesta Académica 2026 — Colegio Santo Tomás

Versión web de la Propuesta Académica, pensada para leerse en el celular y para
que el contenido se pueda editar sin tocar el código.

Construida sobre el manual de marca del Colegio Santo Tomás (Eliana Tatángelo,
@demasiadografica).

## Qué incluye

```
contenido.js          todos los textos de la propuesta — es el archivo que se edita
index.html            diseño, maquetación y editor
assets/isotipo.svg    isotipo oficial, vectorial, en los cuatro colores corporativos
assets/fotos/         fotografías de la propuesta
```

## Publicar en GitHub Pages

1. Subir estos archivos a un repositorio (por ejemplo `propuesta-2026`).
2. Ir directo a `https://github.com/esangomez/propuesta-2026/settings/pages`.
   Es la vía más rápida. Si preferís navegar: pestaña **Settings** arriba del
   repositorio, y en la columna izquierda **Pages**, dentro del grupo
   *Code and automation*. Está bastante abajo en esa lista.
3. Ahí hay un bloque llamado **Build and deployment**, con dos desplegables.
   Le estás diciendo a GitHub de dónde tiene que sacar la página:
   - **Source** → elegir *Deploy from a branch*. Significa "publicá los archivos
     tal como están en el repositorio", sin ningún proceso previo. Es lo que
     corresponde acá, porque `index.html` ya está listo para abrirse.
   - **Branch** → elegir `main`. Es el nombre de la versión principal del
     repositorio, la única que vas a tener.
   - Al lado de `main` aparece un segundo desplegable con carpetas. Dejarlo en
     `/ (root)`, que quiere decir "la carpeta principal del repositorio". Ahí es
     donde está `index.html`. Si lo pusieras en `/docs`, GitHub buscaría la
     página dentro de una subcarpeta con ese nombre, que no existe.
   - Apretar **Save**.
4. A los dos minutos queda publicada en
   `https://esangomez.github.io/propuesta-2026/`.

Si no encontrás **Pages** en el menú, suele ser por una de estas dos razones:

- **El repositorio es privado.** Con una cuenta gratuita, Pages solo funciona en
  repositorios públicos. Se arregla en *Settings → General*, al final de la
  página, en *Change repository visibility*.
- **El repositorio está vacío.** Si todavía no subiste ningún archivo, la rama
  `main` no existe y el desplegable de *Branch* aparece sin opciones. Subí
  primero `index.html`, `README.md` y la carpeta `assets`, y volvé a Pages.

Para un dominio propio (por ejemplo `propuesta.santotomas.ar`), agregar un archivo
`CNAME` con ese nombre y apuntar el DNS a GitHub Pages.

## Editar el contenido

Todos los textos están en **`contenido.js`**. Es el único archivo que hay que
tocar para cambiar lo que se ve. `index.html` tiene el diseño y no hace falta
abrirlo nunca.

### Cambios chicos, directo en GitHub

1. Entrar al repositorio y abrir `contenido.js`.
2. Tocar el lápiz, arriba a la derecha.
3. Buscar el texto y cambiarlo.
4. Abajo, **Commit changes**. En dos minutos se ve en la web.

Funciona igual desde el celular.

Reglas para que no se rompa: el texto va entre comillas dobles, cada línea
termina en coma menos la última de cada bloque, y las comillas dobles dentro
de un texto se escriben `\"`. Si algo queda mal la página aparece en blanco;
se arregla deshaciendo el último cambio desde el historial del archivo.

### Cambios grandes, desde la página

Botón **Editar** en la propuesta: se modifica cualquier texto, se agregan o
quitan ítems y se cambian las fotos, viendo el resultado. Eso queda guardado
solo en ese navegador. Para publicarlo: **Exportar contenido**, **Copiar**, y
pegar en `contenido.js` reemplazando todo lo que haya. Lo que copia el botón
ya viene con la forma exacta del archivo.

### Los dos niveles

`contenido.js` tiene un bloque `niveles` con `primaria` y `secundaria`. Cada
uno lleva su horario, sus materias y su informe. El resto de la propuesta es
común a los dos.

## Aplicación del manual de marca

### Paleta corporativa

| Color | Hex | Uso en la pieza |
|---|---|---|
| Azul | `#00669c` | logotipo, jornada, inscripción, cierre |
| Celeste | `#55a1d9` | uniforme, talleres de verano |
| Rojo | `#e41a22` | año en portada, materias extracurriculares, beneficios |
| Verde | `#50b32b` | comedor, aranceles |
| Naranja | `#f99c02` | misión, medios de pago, contacto |
| Violeta | `#8f3f9c` | compromiso, equipo, materiales, documentación |
| Fondo | `#f4edec` | secciones alternas y portada |

Los seis colores se aplican sin variaciones, como pide el manual. Cada sección
toma uno como color de acento, de modo que el color cumple una función de
orientación y no de decoración.

### Tipografías

| Familia | Rol |
|---|---|
| M PLUS Rounded 1c | solo el logotipo, nunca texto corrido |
| Fraunces | títulos y números destacados |
| Gladiola | frases manuscritas: la cita de portada, la de Montessori, el cierre |
| Livvic | texto de corrido, listas, botones |

Gladiola es una tipografía paga de Melvastype y no está en Google Fonts, así que
no se puede servir desde la web. La pieza la pide primero: si quien mira la
página la tiene instalada, la ve; si no, cae en **Caveat Brush**, un pincel
gratuito de proporciones parecidas. Son cuatro frases en toda la propuesta.
Fraunces, Livvic y M PLUS Rounded 1c sí se cargan desde Google Fonts.

### Isotipo

`assets/isotipo.svg` es el archivo oficial de la carpeta de marca, en vectorial:
escala sin pixelarse en cualquier pantalla y sirve también de favicon. Se aplica
sobre fondo claro y sobre azul con una caja blanca detrás, para respetar el
contraste que pide el manual.

## Pendiente

- La cita de portada, de María Elena Walsh, viene del folleto anterior. Conviene
  revisar si sigue representando a la marca nueva.
- Sumar fotografías institucionales en talleres y uniforme.
- Si querés el logotipo completo (isotipo + nombre + bajada) en la portada en
  lugar del isotipo solo, está en la carpeta de marca como
  `Logotipo/Vectoriales/svg/Santo Tomás-01.svg`.
