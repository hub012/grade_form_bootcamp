// 1- Crear clase con los siguentes atributos: Nombre Apellido Matricula Nota
// 2- Crear funcion para promediar notas.
// 3- Agregar estudiantes de ejemplos.
//-----------------------------------------------------------------------------
// 4- Agregar Boton de editar.
// 5- Agregar boton de eliminar.
// 6- Agregar funcion de grabar en local estorage.



let notas=[];

class Estudiante {
    constructor(nombre, apellido,matricula, nota){
        this.nombre=nombre;
        this.apellido=apellido;
        this.matricula=matricula;
        this.nota=nota;
    }
}

//crear tablas

let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

// Agrega toda la tabla a la etiqueta del cuerpo.
document.getElementById('body').appendChild(table);

let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerText = "Nombre";
let heading_2 = document.createElement('th');
heading_2.innerText = "Apellido";
let heading_3 = document.createElement('th');
heading_3.innerText = "Matricula";
let heading_4 = document.createElement('th');
heading_4.innerText = "Nota";
let heading_5 = document.createElement('th');
heading_4.innerText = "Botones de Accion";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
thead.appendChild(row_1);

// creamos ejemplos de estudiantes.

