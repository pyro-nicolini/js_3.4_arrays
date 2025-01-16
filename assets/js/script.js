let propiedades_alquiler = [
  {
    nombre: "Maitencillo1",
    src: "assets/img/propiedad1.avif",
    desc: "Excelente propiedad ubicada en tranquilo condominio entre Marbella y Costamai, cuenta con dos pisos distribuidos en espacios amplios.",
    ubicación: "Maitencillo",
    habitaciones: "4",
    costos: "$550.000",
    pets: true,
    smoke: true,
  },
  {
    nombre: "Maitencillo2",
    src: "assets/img/propiedad2.avif",
    desc: "Hermosa propiedad con vista al mar, en un sector tranquilo. Ideal para quienes buscan privacidad y comodidad.",
    ubicación: "Maitencillo",
    habitaciones: "3",
    costos: "$400.000",
    pets: false,
    smoke: true,
  },
  {
    nombre: "Maitencillo3",
    src: "assets/img/propiedad3.avif",
    desc: "Cómoda casa con gran jardín y cercanía a la playa. Perfecta para familias que desean descansar cerca del mar.",
    ubicación: "Maitencillo",
    habitaciones: "5",
    costos: "$600.000",
    pets: true,
    smoke: false,
  },
  {
    nombre: "Maitencillo4",
    src: "assets/img/propiedad1.avif",
    desc: "Lujosa casa con piscina y áreas comunes. Ideal para pasar tiempo en familia y disfrutar de la tranquilidad.",
    ubicación: "Maitencillo",
    habitaciones: "6",
    costos: "$750.000",
    pets: true,
    smoke: true,
  },
  {
    nombre: "Maitencillo5",
    src: "assets/img/propiedad2.avif",
    desc: "Casa de campo con hermosos paisajes y acceso a actividades al aire libre. Perfecta para descansar y disfrutar de la naturaleza.",
    ubicación: "Maitencillo",
    habitaciones: "4",
    costos: "$500.000",
    pets: false,
    smoke: true,
  },
  {
    nombre: "Maitencillo6",
    src: "assets/img/propiedad3.avif",
    desc: "Propiedad con estilo moderno, ideal para quienes buscan una experiencia tranquila y cercana a la playa.",
    ubicación: "Maitencillo",
    habitaciones: "3",
    costos: "$450.000",
    pets: true,
    smoke: false,
  },
];
let propiedades_ventas = [
  {
    nombre: "Zapallar1",
    src: "assets/img/propiedad1.avif",
    desc: "Elegante casa con vista al mar, ubicada en un exclusivo sector de Zapallar. Incluye piscina y amplio jardín.",
    ubicación: "Zapallar",
    habitaciones: "5",
    costos: "25.500 UF",
    pets: false,
    smoke: false,
  },
  {
    nombre: "Concón2",
    src: "assets/img/propiedad2.avif",
    desc: "Moderno departamento en la playa con excelentes terminaciones, perfecto para disfrutar todo el año.",
    ubicación: "Concón",
    habitaciones: "3",
    costos: "18.200 UF",
    pets: true,
    smoke: true,
  },
  {
    nombre: "Reñaca3",
    src: "assets/img/propiedad3.avif",
    desc: "Espaciosa casa familiar en un sector tranquilo de Reñaca. Cuenta con quincho y terraza con vista panorámica.",
    ubicación: "Reñaca",
    habitaciones: "4",
    costos: "22.300 UF",
    pets: true,
    smoke: false,
  },
  {
    nombre: "Viña del Mar4",
    src: "assets/img/propiedad3.avif",
    desc: "Penthouse de lujo en el corazón de Viña del Mar. Con acceso directo a servicios y espacios comunes premium.",
    ubicación: "Viña del Mar",
    habitaciones: "3",
    costos: "30.000 UF",
    pets: true,
    smoke: false,
  },
  {
    nombre: "Valparaíso5",
    src: "assets/img/propiedad2.avif",
    desc: "Exclusiva propiedad con una vista espectacular al puerto. Ideal para quienes buscan vivir en el corazón de Valparaíso.",
    ubicación: "Valparaíso",
    habitaciones: "6",
    costos: "28.000 UF",
    pets: false,
    smoke: true,
  },
  {
    nombre: "Quintero6",
    src: "assets/img/propiedad1.avif",
    desc: "Casa frente al mar, con acceso privado a la playa y una gran terraza para disfrutar de las vistas del océano.",
    ubicación: "Quintero",
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


let smoker = `<p class="green"><i class="fas fa-smoking"></i> Se puede Fumar</p>`;
let noSmoker = `<p class="red"><i class="fas fa-smoking-ban"></i> No se permite Fumar</p>`;

let pets = `<p class="green"><i class="fas fa-paw"></i> Se permiten Mascotas</p>`;
let noPets = `<p class="red"><i class="fa-solid fa-ban"></i> No se permiten Mascotas</p>`;


function mostrarPropiedades(array, contenedorReceptor, cantidadCards) {

  let inyector = ""; // Variable para acumular el HTML

  for (let edif of array.slice(0, cantidadCards)) {
    inyector += `
      <div class="card">
        <h3>${edif.nombre}</h3>
        <div class="ubiposs">
          <p class="ubi"><i class="fas fa-location-dot"></i> ${edif.ubicación}</p>
        </div>
        <img src="${edif.src}" alt="Imagen de ${edif.nombre}">
        <span>${edif.costos}</span>
        <p>${edif.desc}</p>
        <p><i class="fas fa-bed"></i> ${edif.habitaciones} habitaciones</p>
        ${edif.pets ? pets : noPets}
        ${edif.smoke ? smoker : noSmoker}
      </div>
    `;
  }
  contenedorReceptor.innerHTML = inyector;
}

if (contenedor_ventas){
  mostrarPropiedades(propiedades_ventas, contenedor_ventas, 3)
}  
if (contenedor_ventasCompleto){
  mostrarPropiedades(propiedades_ventas, contenedor_ventasCompleto)
}

if (contenedor_arriendos){
  mostrarPropiedades(propiedades_alquiler, contenedor_arriendos, 3) // paramétros :  selector de array , cantidad de objetos seleccionados, contenedor que recibe la información. 
}
if (contenedor_arriendosCompleto){
  mostrarPropiedades(propiedades_alquiler, contenedor_arriendosCompleto) // paramétros :  selector de array , cantidad de objetos seleccionados, contenedor que recibe la información. 
}