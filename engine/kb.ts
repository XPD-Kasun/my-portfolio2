class KeyboardController {

       private callbacks = {};

       subscribe(id, callback) {
              this.callbacks[id] = callback;
              console.log('subscribed');
       }

       trigger(key) {

              Object.keys(this.callbacks).forEach(id => this.callbacks[id](key));
       }
}

const kb = new KeyboardController();

export default kb;