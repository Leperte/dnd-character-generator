const regions = [
   { 
    name: "Toran - Grandes Nações",
    sub: ["Império Tazuriano", "República de Taldoria", "República de Velanor", "Reino de Aniria"]
  },
   { 
    name: "Toran - Nações Livres",
    sub: ["Ilhas do Farol", "Ilhas da Passagem", "Ilhas de Doran", "Ilhas da Fratura"]
  },
   { 
    name: "Alara",
    sub: ["Plano Elemental do Fogo", "Plano Elemental do Ar", "Plano Elemental da Terra ", "Plano Elemental da Água", "Plano Féerico", "Plano das Sombras"]
  },
  { 
]

  const randomRegion = regions[Math.floor(Math.random() * regions.length)];
  const randomSubregion = randomRegion.subregion[Math.floor(Math.random() * randomRegiom.subregion.length)
];

console.log(randomRegion.name + " - " + randomSubregion);
