

// ============== =========Ejercicio 1 ==========================

// Debajo tienes un <div> vacío. Crea, dentro de él, un formulario 
// con una <label>, un <input>, y su botón de enviar. Cuando envíes el
//  formulario, lo que hayas escrito deberá aparecer debajo del formulario
//   en una etiqueta <p>

// const divFormu = document.querySelector(".results-container");
// console.log(divFormu);

// const form = document.createElement("form");
// divFormu.appendChild(form);

// const label = document.createElement("label");
// label.id = 'nombre';
// label.textContent = 'Nombre';
// label.setAttribute('for', 'name');
// form.appendChild(label);

// const input = document.createElement("input");
// input.id = 'name';
// input.type = 'text';
// form.appendChild(input);

// const submit = document.createElement("input");
// submit.type = 'submit';
// form.appendChild(submit);

// form.addEventListener('submit', (event) => {
//     event.preventDefault(); 
//     const text = input.value.trim();
//     if (text !== '') {
//         const p = document.createElement('p');
//         p.textContent = text;
//         divFormu.appendChild(p);
//         input.value = ''; 
//     }
// });

// =======================Ejercicio 2 ==========================

// Dado el siguiente formulario, deberás realizar una validación 
// simple: si se envía el formulario vacío, deberás mostrar un 
// mensaje de error debajo que indique "Este campo es obligatorio".

// const container = document.querySelector("#ejercicio-2");
// const div = document.createElement("div");
// container.appendChild(div);

// const form = document.querySelector("#ejercicio-2 form");
// console.log(form);

// form.addEventListener('submit', (event) => {
//     event.preventDefault(); 
//     const input = form.querySelector('input[type="text"]');
//     const inputValue = input.value.trim();
//     const errorMessage = "ERROR: Este campo es obligatorio!";
//     if (inputValue === '') {
//         const div = document.createElement('div');
//         div.textContent = errorMessage;
//         div.style.color = 'red';
//         container.appendChild(div);
//     } else {
        
//     }
// });

// =======================Ejercicio 3 ==========================

// El siguiente formulario sólo acepta números. Cuando se introduzca un número, en el <div> que hay debajo deben aparecer tantos botones como el número que hayas introducido en el <input>. Además:
// Los botones deben contener como texto el número que le corresponda: 1 el primero, 2 el segundo, etc.
// Los botones pares tendrán un fondo de un color, los impares de otro.
// // Los botones con números múltiplos de 10 tendrán otro color distinto.


// const form = document.querySelector('#ejercicio-3 form');

// const divBotones = document.querySelector('#ejercicio-3 > div');
// console.log(divBotones);

// form.addEventListener('submit', (evento) => {
//   evento.preventDefault(); // evitar el comportamiento por defecto del formulario
  
// //   const numero = parseInt(document.querySelector('#numero').value); // obtener el número introducido por el usuario
//   const input = parseInt(form.querySelector( 'input[id="number"]').value);
  
//   divBotones.innerHTML = ''; // limpiar el contenido anterior del div
  
//   for (let i = 1; i <= input; i++) {
//     const boton = document.createElement('button'); // crear el botón
//     boton.classList.add('botones'); // agregar la clase CSS base
    
//     if (i % 2 === 0) {
//       boton.classList.add('botones-par'); // agregar la clase CSS para los botones pares
//     } else {
//       boton.classList.add('botones-impar'); // agregar la clase CSS para los botones impares
//     }
    
//     if (i % 10 === 0) {
//       boton.classList.add('botones-multiplo'); // agregar la clase CSS para los botones múltiplos de 10
//     }
    
//     boton.textContent = i; // agregar el número correspondiente como texto al botón
//     divBotones.appendChild(boton); // agregar el botón al div de botones
//   }
// });

// =======================Ejercicio 4 ==========================

// Crea, en el <div> que tienes debajo, un formulario de registro de usuarios que contenga los siguientes campos:
// Nombre (string)
// Email (string)
// Contraseña (password)
// Edad (number)
// Cuando se envíe el formulario, deberá aparecer aquí debajo la información de cada usuario.

//  const divContainer =  document.querySelector("#ejercicio-4 div");
//  console.log(divContainer);

// const form = document.createElement("form");
// divContainer.appendChild(form);

// // creo el label de nombre y añado al form
// const labelName = document.createElement('label')
// labelName.id = 'name';
// labelName.textContent = 'Nombre';
// labelName.setAttribute('for', 'nombre');
// form.appendChild(labelName);

// // creo el input del nombre y añado al form
// const inputName = document.createElement('input')
// inputName.id = 'nombre';
// inputName.type = 'text';
// inputName.setAttribute('name','name');
// form.appendChild(inputName);

// // creo el label Email y añado al form
// const labelEmail = document.createElement('label')
// labelEmail.id = 'email';
// labelEmail.textContent = 'Email';
// labelEmail.setAttribute('for', 'correo');
// form.appendChild(labelEmail);

// // Creo el input del Email y lo añado al form
// const inputEmail = document.createElement('input')
// inputEmail.id = 'correo';
// inputEmail.type = 'email';
// inputEmail.setAttribute('name','correo');
// form.appendChild(inputEmail);

// // Creo el label de la contraseña
// const labelContraseña = document.createElement('label')
// labelContraseña.id = 'contraseña';
// labelContraseña.textContent = 'Contraseña';
// labelContraseña.setAttribute('for', 'password');
// form.appendChild(labelContraseña);

// // Creo el input de la contraseña
// const inputContraseña = document.createElement('input')
// inputContraseña.id = 'password';
// inputContraseña.type = 'password';
// inputContraseña.setAttribute('name','password');
// form.appendChild(inputContraseña);

// // Creo el label de la edad 
// const labelEdad = document.createElement('label')
// labelEdad.id = 'age';
// labelEdad.textContent = 'Edad';
// labelEdad.setAttribute('for', 'edad');
// form.appendChild(labelEdad);

// // Creo el input de la edad
// const inputEdad = document.createElement('input')
// inputEdad.id = 'edad';
// inputEdad.type = 'number';
// inputEdad.setAttribute('name','edad');
// form.appendChild(inputEdad);

// // Creo el boton submit 

// const submit = document.createElement("input");
// submit.type = 'submit';
// form.appendChild(submit);

// // Creo el evento para el form 
// form.addEventListener('submit', (event) => {
//     event.preventDefault(); 
//     addValues(event);
// });

// function addValues(event) {
//     let form = event.target;
//     let name = form.elements["nombre"].value;
//     let correo = form.elements["correo"].value;
//     let password = form.elements["password"].value;
//     let edad = form.elements["edad"].value;
  
//     var paragraph = document.createElement("p");
//     paragraph.innerHTML = "Nombre: " + name + "<br>" + "Email: " + correo + "<br>" 
//     + "pasword: " + password + "<br>" + "edad: " + edad;
   
//     form.appendChild(paragraph);
//   }

// =======================Ejercicio 5 ==========================

// Ahora vamos a crear la mecánica de un <input>, pero sin un <input>. Aquí debajo tienes un 
// <div>. Cuando el usuario pulse una tecla, deberá aparecer en el div la letra que ha pulsado. 
// Si el usuario pulsa "c", luego "a", luego "s", luego "a", en el div deberá ir 
// apareciendo la palabra "casa". Cuando se pulse el botón de "Clear", deberá eliminarse todo
// el texto escrito hasta ese momento en el <div>.

const inputDiv = document.querySelector("#ejercicio-5 div");
const clearButton = document.querySelector("#ejercicio-5 button");
let inputText = "";

// Función que se ejecuta cuando se presiona una tecla
document.addEventListener("keydown", function(event) {
  inputText += event.key;
  inputDiv.textContent = inputText;
});

// Función que se ejecuta cuando se presiona el botón "Clear"
clearButton.addEventListener("click", function() {
  inputText = "";
  inputDiv.textContent = "";
});









