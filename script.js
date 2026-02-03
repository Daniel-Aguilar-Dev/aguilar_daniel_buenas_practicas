// Código comentado | Valores quemados

// Variables globales 
var registros = [];
var contador = 0;
//valores quemados

// valores quemados

//impresion de mensajes de salida

// Función principal de inicialización
function inicializar() {
    //impresion de mensajes de salida
    
    // Event listener para el formulario
    document.getElementById('registroForm').addEventListener('submit', function(e) {
        e.preventDefault();
        guardarRegistro();
    });
    
    //impresion de mensajes de salida
}

// Función para guardar un registro
function guardarRegistro() {
    //impresion de mensajes de salida
    
    // Obtener valores del formulario
    var nombre = document.getElementById('nombre').value;
    var apellido1 = document.getElementById('apellido1').value;
    var apellido2 = document.getElementById('apellido2').value;
    var telefono = document.getElementById('telefono').value;
    var curp = document.getElementById('curp').value;
    var email = document.getElementById('email').value;
    
    // impresion de mensajes de salida
    
    //mensajes de error
    
    
    //codigo comentado
    
    // Crear objeto de registro -  Validación de campos de entrada
   if (
        nombre === "" ||
        apellido1 === "" ||
        telefono === "" ||
        curp === "" ||
        email === ""
    ) {
        alert("Todos los campos obligatorios deben estar completos.");
        return;
    }
    var nuevoRegistro = {
        id: contador++,
        nombre: nombre,
        apellido1: apellido1,
        apellido2: apellido2,
        nombreCompleto: nombre + " " + apellido1 + " " + apellido2,
        telefono: telefono,
        curp: curp,
        email: email,
        fechaRegistro: new Date().toISOString(),
        // valores quemados
    };
    
    //impresion de mensajes de salida
    
    // Agregar al arreglo global
    registros.push(nuevoRegistro);
    
    //impresion de mensajes de salida
    
    // Mostrar en tabla
    agregarFilaTabla(nuevoRegistro);
    
    // Limpiar formulario
    document.getElementById('registroForm').reset();
    
    //impresion de mensajes de salida
    
    // Simulación de envío a servidor (hardcoded URL)
    enviarAServidor(nuevoRegistro);
}

// Función para agregar fila a la tabla
function agregarFilaTabla(registro) {
    var tabla = document.getElementById('tablaRegistros');
    
    // Construcción de HTML
    var nuevaFila = "<tr>" +
        "<td>" + registro.nombreCompleto + "</td>" +
        "<td>" + registro.telefono + "</td>" +
        "<td>" + registro.curp + "</td>" +
        "<td>" + registro.email + "</td>" +
        "</tr>";
    
   //impresion de mensajes de salida
    
    // Insertar directamente en la tabla
    tabla.innerHTML += nuevaFila;
    
    //impresion de mensajes de salida
}

// Función que simula envío a servidor
function enviarAServidor(datos) {
    //impresion de mensajes de salida
    
    //valores quemados y Contenido URL
    
    //impresion de mensajes de salida

}

// código comentado

// Función de diagnóstico (expone información del sistema)
function diagnosticoSistema() {
    //impresion de mensajes de salida
}

// Ejecutar diagnóstico al cargar
diagnosticoSistema();


//codigo comentado

// Variable global adicional
var ultimoRegistro = null;

// Inicializar cuando cargue el DOM
window.addEventListener('DOMContentLoaded', function() {
    //impresion de mensajes de salida
    inicializar();
    // Exponer variables globales en consola para "debugging"
    window.registros = registros;
    // valores quemados
    
    //impresion de mensajes de salida
});

// codigo comentado

// impresion de mensajes de salida