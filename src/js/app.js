var app = new Vue({
  el: '#app', 
  data: {
    message: 'HELLO VUE !'
  }
});

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'Vous avez affiché cette page le ' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Apprendre JavaScript' },
      { text: 'Apprendre Vue' },
      { text: 'Créer quelque chose de génial' }
    ]
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js !'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('') 
      // split('') récupère chaque char
      // reverse() transpose chaque caractère, le premier devient le dernier et vice versa
      // join('') relie les mots (qui avaient été divisés en char par split) et les concatène ac les espaces
    }
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue !'
  }
})

// COMPONENTS 

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}, {{ todo.cat }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Légumes', cat: '(Légumes)'},
      { id: 1, text: 'Fromage', cat: '(Produits laitiers)' },
      { id: 2, text: 'Chocolat', cat: '(Sucreries)' }
    ]
  }
});