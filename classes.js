const classes = [
  { 
    name: "Bárbaro",
    subclasses: ["Berserker", "Arauto da Tempestade", "Coração Selvagem"]
  },
  { 
    name: "Bardo",
    subclasses: ["Colégio dos Sussurros", "Colégio do Glamour", "Colégio do Valor","Colégio do Conhecimento"]
  },
   { 
    name: "Bruxo",
    subclasses: ["Pacto da Arquifada", "Pacto da Lâmina Amaldiçoada", "Pacto do Celestial"]
  },
  { 
    name: "Clérigo",
    subclasses: ["Ordem da Vida", "Ordem da Forja", "Ordem da Ordem"]
  },
  { 
    name: "Druida",
    subclasses: ["Tribo dos Esporos", "Tribo da Lua", "Tribo dos Sonhos"]
  },
  { 
    name: "Guerreiro",
    subclasses: ["Cavaleiro", "Campeão", "Mestre de Batalha"]
  },
  { 
    name: "Feiticeiro",
    subclasses: ["Dracônico", "Magia Selvagem", "Alma Divina"]
  },
  { 
    name: "Ladino",
    subclasses: ["Assassino", "Ladrão", "Bucaneiro"]
  },
  { 
    name: "Mago",
    subclasses: ["Escola da Divinação", "Escola da Evocação", "Escola da Ilusão"]
  },
  { 
    name: "Monge",
    subclasses: ["Mestre Bêbado", "Mestre dos Elementos", "Mestre da Palma Aberta"]
  },
  { 
    name: "Paladino",
    subclasses: ["Juramento da Conquista", "Juramento da Vingança", "Juramento dos Antigos"]
  },
  { 
    name: "Patrulheiro",
    subclasses: ["Caçador", "Matador de Monstros", "Andarilho Féerico"]
  }
];

  const randomClass = classes[Math.floor(Math.random() * classes.length)];
  const randomSubclass = randomClass.subclasses[Math.floor(Math.random() * randomClass.subclasses.length)
];

console.log(randomClass.name + " - " + randomSubclass);
