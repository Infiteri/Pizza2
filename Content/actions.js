const Actions = {
  damage1: {
    name: 'Whomp!',
    description: 'Pillowy punch of dough',
    success: [
      { type: 'textMessage', text: '{CASTER} uses {ACTION}!' },
      { type: 'animation', animation: 'spin' },
      { type: 'stateChange', damage: 10 },
    ],
  },
  saucyStatus: {
    name: 'Tomato Squeeze',
    description: 'Applies the Saucy status',
    success: [
      { type: 'textMessage', text: '{CASTER} uses {ACTION}!' },
      { type: 'animation', animation: 'spin' },
      { type: 'stateChange', damage: 20 },
    ],
  },
  clumsyStatus: {
    name: 'Olive Oil',
    description: 'Slippery mess of deliciousness',
    success: [
      { type: 'textMessage', text: '{CASTER} uses {ACTION}!' },
      { type: 'animation', animation: 'glob', color: '#dafd2a' },
      { type: 'stateChange', status: { type: 'clumsy', expiresIn: 3 } },
      { type: 'textMessage', text: '{TARGET} is slipping all around!' },
    ],
  },

  sliceSamurai1: {
    name: 'Slicing enemies',
    description: 'I will slice your enemies',
    success: [
      { type: 'textMessage', text: 'Slicing {TARGET}!' },
      { type: 'animation', animation: 'spin' },
      { type: 'stateChange', damage: 20 },
    ],
  },

  //Items
  item_recoverStatus: {
    name: 'Heating Lamp',
    description: 'Feeling fresh and warm',
    targetType: 'friendly',
    success: [
      { type: 'textMessage', text: '{CASTER} uses a {ACTION}!' },
      {
        type: 'stateChange',
        recover: 35,
      },
      { type: 'textMessage', text: 'Feeling fresh!' },
    ],
  },

  item_recoverHp: {
    name: 'Parmesan',
    targetType: 'friendly',
    success: [
      { type: 'textMessage', text: '{CASTER} sprinkles on some {ACTION}!' },
      { type: 'stateChange', recover: 10 },
      { type: 'textMessage', text: '{CASTER} recovers HP!' },
    ],
  },
}
