class PlayerState {
  constructor() {
    //Custom pizzas
    this.pizzas = {
      p1: {
        pizzaId: 's001',
        hp: 75,
        maxHp: 100,
        xp: 0,
        maxXp: 100,
        level: 1,
        status: { type: 'saucy', expiresIn: 2 },
      },
      p2: {
        pizzaId: 'v001',
        hp: 35,
        maxHp: 100,
        xp: 0,
        maxXp: 125,
        level: 1,
        status: { type: 'saucy' },
      },
      p3: {
        pizzaId: 'c001',
        hp: 50,
        maxHp: 100,
        xp: 0,
        maxXp: 100,
        level: 1,
        status: {
          type: 'saucy',
        },
      },
      parmesan001: {
        pizzaId: 'parmesan001',
        hp: 100,
        maxHp: 100,
        xp: 10,
        maxXp: 100,
        level: 1,
        status: null,
      },
    }

    //Pizzas to b used
    this.lineup = ['p1']

    this.items = [
      { actionId: 'item_recoverHp', instanceId: 'item1' },
      // { actionId: 'item_recoverStatus', instanceId: 'item2' },
      // { actionId: 'item_recoverHp', instanceId: 'item2' },
      { actionId: 'item_recoverHp', instanceId: 'item2' },
    ]

    this.storyFlags = {}
  }

  addPizza(pizzaId) {
    const newId = `p${Date.now()}` + Math.floor(Math.random() * 99999)
    this.pizzas[newId] = {
      pizzaId,
      hp: 20,
      maxHp: 50,
      xp: 0,
      maxXp: 100,
      level: 1,
      status: null,
    }
    if (this.lineup.length < 3) {
      this.lineup.push(newId)
    }
    utils.emitEvent('LineupChanged')
    console.log(this)
  }

  swapLineup(oldId, incomingId) {
    const oldIndex = this.lineup.indexOf(oldId)
    this.lineup[oldIndex] = incomingId
    utils.emitEvent('LineupChanged')
  }

  moveToFront(futureFrontId) {
    this.lineup = this.lineup.filter(id => id !== futureFrontId)
    this.lineup.unshift(futureFrontId)
    utils.emitEvent('LineupChanged')
  }
}

const playerState = new PlayerState()
