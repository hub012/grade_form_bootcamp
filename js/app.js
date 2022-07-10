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
class Tabla{
    constructor(){
        this.table = document.createElement('table');
        this.thead = document.createElement('thead');
        this.tbody = document.createElement('tbody');
    }
    
    crearTabla(){
        this.table.append(this.thead);
        this.table.append( this.tbody);

        // Agrega toda la tabla a la etiqueta del cuerpo.
        document.getElementById('body').append(this.table);
    }
    
    agregarCabecera(){
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
        heading_5.innerText = "Botones de Accion";

        row_1.appendChild(heading_1);
        row_1.appendChild(heading_2);
        row_1.appendChild(heading_3);
        row_1.appendChild(heading_4);
        row_1.appendChild(heading_5);
        this.thead.appendChild(row_1);
    }

    agregarFila(estudiante){
        let row = document.createElement('tr');
        let row_data_1 = document.createElement('td');
        row_data_1.innerText = estudiante.nombre;
        let row_data_2 = document.createElement('td');
        row_data_2.innerText = estudiante.apellido;
        let row_data_3 = document.createElement('td');
        row_data_3.innerText = estudiante.matricula;
        let row_data_4 = document.createElement('td');
        row_data_4.innerText = estudiante.nota;

        //botones
        let row_data_5 = document.createElement('td');
        row_data_5.append(this.agregarBotones());
        
        

        row.appendChild(row_data_1);
        row.appendChild(row_data_2);
        row.appendChild(row_data_3);
        row.appendChild(row_data_4);
        row.appendChild(row_data_5);
        this.tbody.appendChild(row);
    }
    agregarBotones(){
        let botones_div = document.createElement('div');
        let eliminar_btn = this.crearBoton('delete', "waves-effect waves-light btn-small", "material-icons left");
        botones_div.append(eliminar_btn);
        let eliminar = document.createElement('a');
        eliminar.classList.add('waves-effect', 'waves-light', 'btn-small');
        let eliminar_icon = document.createElement('i');
        eliminar_icon.innerText = "delete";
        eliminar_icon.classList.add('material-icons', 'left');
        eliminar.append(eliminar_icon);
        
        return botones_div;
    }

    crearBoton(tipo_boton, clases_a, clases_i){
        let boton = document.createElement('a');
        const myArray = clases_a.split(" ");
        console.log(myArray);
        boton.classList.add(myArray);
        let icono = document.createElement('i');
        icono.innerText = tipo_boton;
        icono.classList.add(clases_i.trim().split(/\s+/));
        boton.append(icono);
        return boton;
    }

    editarFila(estudiante){

    }

    eliminarFila(estudiante){

    }
}

const tabla = new Tabla();
tabla.crearTabla();
tabla.agregarCabecera();
const estudiante = new Estudiante("lol", "lol", "90", "90");
tabla.agregarFila(estudiante);
