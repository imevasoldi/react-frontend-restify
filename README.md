# Entrevista laboral
## Requisitos
* Crear en una nueva carpeta el siguiente sitio web
![alt text](https://github.com/newcombin/devskills/blob/main/design.png "Diseño web")
* Los datos del formulario deben ser enviados a la API, la tabla de la derecha debe recibir los datos de la misma al cargarse el sitio y luego de cada insercion exitosa
* El boton reset debe limpiar los campos del formulario
* El boton save debe enviar los datos a la API
* El número de seguro social (ssn), es único, y no puede repetirse en la lista.
* En caso de un intento de inserción erroneo, se debe informar dicho error

## API
La pagina debe poder comunicarse con la API de este repositorio. La misma consta de dos endpoints

* GET http://localhost:8081/api/members - para obtener los miembros
* POST http://localhost:8081/api/members - para añadir un nuevo miembro

### Start API server
* Clonar este repositorio
* Instalar las dependencias
* Usar el comando "serve" (sincronizar con node16)

### Validaciones de la API
* **firstName, lastName y address:** Mas de 1 caracter, sin espacios a los costados (trim)
* **ssn:** Tener el formato ###-##-#### (cada # es un numero, los guiones son obligatorios)
* Si el front no cumple las validaciones debe deshabilitar el boton de enviar

## Condiciones y tips
* Los colores y formas son solo a caracter ilustrativo
* No es necesario que sea mobile responsive
* No es necesaria compatibilidad con IE o Edge
* Puede usar ES6 sin problemas
* Puede usar HTML5 sin ningun problema
* Se puede usar google :D
* Se puede usar POSTMAN para verificar el funcionamento de la API
* Crear un archivo README.md para indicar como se debe utilizar su desarrollo
* Subir a un repositior git con privilegios publicos de lectura y compartir el link como resultado

### Correr el react-frontend

* Clonar el repo (git clone https://github.com/imevasoldi/react-frontend-restify.git)
* navegar a la carpeta "node16/react-frontend-restify"
* npm install
* npm run dev



