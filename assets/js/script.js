let propiedades_alquiler = [
  {
    nombre: "Casa en Maitencillo",
    src: "assets/img/propiedad1.avif",
    descripcion: "Excelente propiedad ubicada en tranquilo condominio entre Marbella y Costamai, cuenta con dos pisos distribuidos en espacios amplios.",
    ubicacion: "Maitencillo",
    habitaciones: "4",
    costos: "$550.000",
    pets: true,
    smoke: true,
  },
  {
    nombre: "Casa en Zapallar",
    src: "assets/img/propiedad2.avif",
    descripcion: "Hermosa propiedad con vista al mar, en un sector tranquilo. Ideal para quienes buscan privacidad y comodidad.",
    ubicacion: "Zapallar",
    habitaciones: "3",
    costos: "$400.000",
    pets: false,
    smoke: true,
  },
  {
    nombre: "Casa en Papudo",
    src: "assets/img/propiedad3.avif",
    descripcion: "Cómoda casa con gran jardín y cercanía a la playa. Perfecta para familias que desean contemplar cerca del mar.",
    ubicacion: "Papudo",
    habitaciones: "5",
    costos: "$600.000",
    pets: true,
    smoke: false,
  },
  {
    nombre: "Casa en Concón",
    src: "assets/img/propiedad4.avif",
    descripcion: "Lujosa casa con piscina y áreas comunes. Ideal para pasar tiempo en familia y disfrutar de la tranquilidad.",
    ubicacion: "Concón",
    habitaciones: "6",
    costos: "$750.000",
    pets: true,
    smoke: true,
  },
  {
    nombre: "Casa en Las Docas",
    src: "assets/img/propiedad5.avif",
    descripcion: "Casa de campo con hermosos paisajes y acceso a actividades al aire libre. Perfecta para disfrutar de la naturaleza.",
    ubicacion: "Las Docas",
    habitaciones: "4",
    costos: "$500.000",
    pets: false,
    smoke: true,
  },
  {
    nombre: "Casa en Rancagua",
    src: "assets/img/propiedad6.avif",
    descripcion: "Propiedad con estilo moderno, ideal para quienes buscan una experiencia tranquila y cercana al campo.",
    ubicacion: "Rancagua",
    habitaciones: "3",
    costos: "$450.000",
    pets: true,
    smoke: false,
  },
];

let propiedades_ventas = [
  {
    nombre: "Casa en Maitencillo",
    src: "assets/img/propiedad7.avif",
    descripcion: "Elegante casa con vista al mar, ubicada en un exclusivo sector de Maitencillo. Incluye piscina y amplio jardín.",
    ubicacion: "Maitencillo",
    habitaciones: "5",
    costos: "25.500 UF",
    pets: false,
    smoke: false,
  },
  {
    nombre: "Casa en Zapallar",
    src: "assets/img/propiedad8.avif",
    descripcion: "Moderno departamento en la playa con excelentes terminaciones, perfecto para disfrutar todo el año.",
    ubicacion: "Zapallar",
    habitaciones: "3",
    costos: "18.200 UF",
    pets: true,
    smoke: true,
  },
  {
    nombre: "Casa en Quintero",
    src: "assets/img/propiedad9.avif",
    descripcion: "Espaciosa casa familiar en un sector tranquilo de Quintero. Cuenta con quincho y terraza con vista panorámica.",
    ubicacion: "Quintero",
    habitaciones: "4",
    costos: "22.300 UF",
    pets: true,
    smoke: false,
  },
  {
    nombre: "Casa en Algarrobo",
    src: "assets/img/propiedad10.avif",
    descripcion: "Penthouse de lujo en el corazón de Algarrobo. Con acceso directo a servicios y espacios comunes premium.",
    ubicacion: "Algarrobo",
    habitaciones: "3",
    costos: "30.000 UF",
    pets: true,
    smoke: false,
  },
  {
    nombre: "Casa en Olmué",
    src: "assets/img/propiedad11.avif",
    descripcion: "Exclusiva propiedad con una vista espectacular al campo. Ideal para quienes buscan paz y tranquilidad.",
    ubicacion: "Olmué",
    habitaciones: "6",
    costos: "28.000 UF",
    pets: false,
    smoke: true,
  },
  {
    nombre: "Casa en Limache",
    src: "assets/img/propiedad12.avif",
    descripcion: "Casa frente al valle, con acceso privado a senderos y una gran terraza para disfrutar de las vistas naturales.",
    ubicacion: "Limache",
    habitaciones: "4",
    costos: "21.500 UF",
    pets: true,
    smoke: true,
  },
];


const contenedor_ventas = document.getElementById("ventas");
const contenedor_arriendos = document.getElementById("arriendos");

const contenedor_ventasCompleto = document.getElementById("ventasFull");
const contenedor_arriendosCompleto = document.getElementById("arriendosFull");


let smoker = `<p class="green left"><i class="fas fa-smoking"></i> Se puede Fumar</p>`;
let noSmoker = `<p class="red left"><i class="fas fa-smoking-ban"></i> No se permite Fumar</p>`;

let pets = `<p class="green left"><i class="fas fa-paw"></i> Se permiten Mascotas</p>`;
let noPets = `<p class="red left"><i class="fa-solid fa-ban"></i> No se permiten Mascotas</p>`;


function mostrarPropiedades(array, contenedorReceptor, cantidadCards) { // paramétros :  selector de array, contenedor que recibe la información, cantidad de cards que quiero mostrar, 

  let inyector = ""; // Variable para acumular el HTML

  for (let edif of array.slice(0, cantidadCards)) {
    inyector += `
      <div class="card">
        <h3>${edif.nombre}</h3>
        <div class="ubiposs">
          <p class="ubi"><i class="fas fa-location-dot"></i> ${edif.ubicacion}</p>
        </div>
        <img src="${edif.src}" alt="Imagen de ${edif.nombre}">
        <span>${edif.costos}</span>
        <p>${edif.descripcion}</p>
        <p class="left"><i class="fas fa-bed"></i> ${edif.habitaciones} habitaciones</p>
        ${edif.pets ? pets : noPets}
        ${edif.smoke ? smoker : noSmoker}
      </div>
    `;
  }
  contenedorReceptor.innerHTML = inyector;
}

// condiciono la existencia de los contendores (para evitar ejecutar la función en una pagina que no tenga el id del contenedor receptor de los datos)
if (contenedor_ventas){
  mostrarPropiedades(propiedades_ventas, contenedor_ventas, 3)
}  
if (contenedor_ventasCompleto){
  mostrarPropiedades(propiedades_ventas, contenedor_ventasCompleto)
}
if (contenedor_arriendos){
  mostrarPropiedades(propiedades_alquiler, contenedor_arriendos, 3) 
}
if (contenedor_arriendosCompleto){
  mostrarPropiedades(propiedades_alquiler, contenedor_arriendosCompleto) // Argumentos de mi función :  selector de array , cantidad de objetos seleccionados, contenedor que recibe la información. 
}

let input1 = document.getElementById('input');
let enter = document.getElementById('enter');

enter.addEventListener('click', () => alert(`${input1.value} Subscrito exitósamente`))