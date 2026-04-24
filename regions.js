const regions = [
   { 
    name: "Toran - Grandes Nações",
    subregion: ["Império Tazuriano", "República de Taldoria", "República de Velanor", "Reino de Aniria"]
  },
   { 
    name: "Toran - Nações Livres",
    subregion: ["Ilhas do Farol", "Ilhas da Passagem", "Ilhas de Doran", "Ilhas da Fratura"]
  },
   { 
    name: "Alara",
    subregion: ["Plano Elemental do Fogo", "Plano Elemental do Ar", "Plano Elemental da Terra ", "Plano Elemental da Água", "Plano Féerico", "Plano das Sombras"]
  },
];

  const randomRegion = regions[Math.floor(Math.random() * regions.length)];
  const randomSubregion = randomRegion.subregion[Math.floor(Math.random() * randomRegion.subregion.length)];

console.log(randomRegion.name + " - " + randomSubregion);
