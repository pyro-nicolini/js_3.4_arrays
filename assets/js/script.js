let propiedades_alquiler = [
  {
    nombre: "Maitencillo1",
    src: "assets/img/propiedad1.avif",
    desc: "Excelente propiedad ubicada en tranquilo condominio ubicado entre Marbella y Costamai, cuenta con dos pisos los cuales se distribuyen",
    ubicación: "Maintencillo",
    habitaciones: "4",
    costos: "13.900 UF",
    pets: true,
    smoking: true,
  },
  {
    nombre: "Maitencillo2",
    src: "assets/img/propiedad2.avif",
    desc: "Excelente propiedad ubicada en tranquilo condominio ubicado entre Marbella y Costamai, cuenta con dos pisos los cuales se distribuyen",
    ubicación: "Maintencillo",
    habitaciones: "4",
    costos: "13.900 UF",
    pets: true,
    smoking: true,
  },
  {
    nombre: "Maitencillo3",
    src: "assets/img/propiedad3.avif",
    desc: "Excelente propiedad ubicada en tranquilo condominio ubicado entre Marbella y Costamai, cuenta con dos pisos los cuales se distribuyen",
    ubicación: "Maintencillo",
    habitaciones: "4",
    costos: "13.900 UF",
    pets: true,
    smoking: true,
  },
  {
    nombre: "Maitencillo3",
    src: "assets/img/propiedad3.avif",
    desc: "Excelente propiedad ubicada en tranquilo condominio ubicado entre Marbella y Costamai, cuenta con dos pisos los cuales se distribuyen",
    ubicación: "Maintencillo",
    habitaciones: "4",
    costos: "13.900 UF",
    pets: true,
    smoking: true,
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
    smoking: false,
  },
  {
    nombre: "Concón2",
    src: "assets/img/propiedad2.avif",
    desc: "Moderno departamento en la playa con excelentes terminaciones, perfecto para disfrutar todo el año.",
    ubicación: "Concón",
    habitaciones: "3",
    costos: "18.200 UF",
    pets: true,
    smoking: true,
  },
  {
    nombre: "Reñaca3",
    src: "assets/img/propiedad3.avif",
    desc: "Espaciosa casa familiar en un sector tranquilo de Reñaca. Cuenta con quincho y terraza con vista panorámica.",
    ubicación: "Reñaca",
    habitaciones: "4",
    costos: "22.300 UF",
    pets: true,
    smoking: false,
  },
  {
    nombre: "Viña del Mar4",
    src: "assets/img/propiedad4.avif",
    desc: "Penthouse de lujo en el corazón de Viña del Mar. Con acceso directo a servicios y espacios comunes premium.",
    ubicación: "Viña del Mar",
    habitaciones: "3",
    costos: "30.000 UF",
    pets: true,
    smoking: false,
  },
];

const ventas = document.getElementById("ventas");
const arriendos = document.getElementById("arriendos");

let inyeccion_ventas = "";
let inyeccion_alquiler = "";

for (let edif of propiedades_alquiler) {
  inyeccion_alquiler += `
    <div class="card">
    <h3>${edif.nombre}</h3>
    <img src="${edif.src}" alt="Card image cap">
    <p>${edif.desc}</p>
    </div>
    `;
}

arriendos.innerHTML = inyeccion_alquiler;

for (let edif of propiedades_ventas) {
  inyeccion_ventas += `
    <div class="card">
    <h3>${edif.nombre}</h3>
    <img src="${edif.src}" alt="Card image cap">
    <p>${edif.desc}</p>
    </div>
    `;
}
ventas.innerHTML = inyeccion_ventas;
