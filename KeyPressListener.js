class KeyPressListener {
  constructor(keyCode, callback) {
    let keySafe = true

    //Custom keydown event
    this.keydownFunction = event => {
      if (event.code === keyCode) {
        if (keySafe) {
          keySafe = false
          callback()
        }
      }
    }

    //Custom keyup event
    this.keyupFunction = event => {
      if (event.code === keyCode) {
        keySafe = true
      }
    }
    document.addEventListener('keydown', this.keydownFunction)
    document.addEventListener('keyup', this.keyupFunction)
  }

  unbind() {
    document.removeEventListener('keydown', this.keydownFunction)
    document.removeEventListener('keyup', this.keyupFunction)
  }
}
