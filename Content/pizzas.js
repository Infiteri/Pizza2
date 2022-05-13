const PizzaTypes = {
  normal: 'normal',
  spicy: 'spicy',
  veggie: 'veggie',
  fungi: 'fungi',
  chill: 'chill',
  parmesan: 'parmesan',
}

const Pizzas = {
  s001: {
    name: 'Slice Samurai',
    description: 'Pizza desc here',
    type: PizzaTypes.spicy,
    src: 'images/characters/pizzas/s001.png',
    icon: 'images/icons/spicy.png',
    actions: ['sliceSamurai1', 'saucyStatus', 'clumsyStatus'],
  },
  s002: {
    name: 'Bacon Brigade',
    description: 'A salty warrior who fears nothing',
    type: PizzaTypes.spicy,
    src: 'images/characters/pizzas/s002.png',
    icon: 'images/icons/spicy.png',
    actions: ['damage1', 'saucyStatus', 'clumsyStatus'],
  },
  v001: {
    name: 'Call Me Kale',
    description: 'Pizza desc here',
    type: PizzaTypes.veggie,
    src: 'images/characters/pizzas/v001.png',
    icon: 'images/icons/veggie.png',
    actions: ['damage1'],
    right: () => {
      return 'help'
    },
  },
  f001: {
    name: 'Portobello Express',
    description: 'Pizza desc here',
    type: PizzaTypes.fungi,
    src: 'images/characters/pizzas/f001.png',
    icon: 'images/icons/fungi.png',
    actions: ['damage1'],
  },

  c001: {
    name: 'Crimsoning',
    description: 'Pizza desc here',
    type: PizzaTypes.fungi,
    src: 'images/characters/pizzas/c001.png',
    icon: 'images/icons/fungi.png',
    actions: ['damage1'],
  },

  parmesan001: {
    name: 'Parmsan The Top',
    description: 'Parmsan The Top',
    type: PizzaTypes.parmesan,
    src: 'images/characters/pizzas/parmesan001.png',
    icon: 'images/icons/cheesw.png',
    actions: ['damage1'],
  },
}
