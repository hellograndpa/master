const servicesArray = [{
    serviceType: 'Pasear al Perro',
    points: 10,
    description: 'Intentar sacar al perro almenos 2 veces al día',
    logo: 'pets',
  },
  {
    serviceType: 'Llevar al médico',
    points: 20,
    description: 'Tengo que visitar al médico almenos 1 vez por semana',
    logo: 'local_hospital',
  },
  {
    serviceType: 'Preparar la cena',
    points: 30,
    description: 'yami yami',
    logo: 'restaurant',
  },
  {
    serviceType: 'Hacer la colada',
    points: 40,
    description: 'no puedo con eso',
    logo: 'toys',
  },
  {
    serviceType: 'Ayudarme con la limpieza general',
    points: 50,
    description: 'volando voy volando vengo',
    logo: 'person_add',
  },
  {
    serviceType: 'Acompañar al mercado',
    points: 50,
    description: 'volando voy volando vengo',
    logo: 'person_add',
  },
  {
    serviceType: 'Pasear por el barrio',
    points: 20,
    description: 'volando voy volando vengo',
    logo: 'person_add',
  },
  {
    serviceType: 'Desayunar juntos',
    points: 20,
    description: 'volando voy volando vengo',
    logo: 'person_add',
  },
];

const featuresArray = {
  calefaccion: false,
  ac: false,
  piscina: false,
  terraza: false,
  ascensor: false,
  wifi: false,
};

const electroArray = {
  cocina: false,
  nevera: false,
  lavadora: false,
  secadora: false,
  secadorDePelo: false,
  horno: false,
  microondas: false,
  aspiradora: false,
  batidora: false,
  tostadora: false,
};

const sevicesIncludedArray = {
  agua: false,
  aguaCaliene: false,
  electricidad: false,
  internet: false,
  utensiliosBano: false,
  desayuno: false,
  cenas: false,
  utensiliosCocina: false,
  cama: false,
};

let socketsUsers = [];

module.exports = {
  servicesArray,
  featuresArray,
  electroArray,
  sevicesIncludedArray,
  socketsUsers,
};