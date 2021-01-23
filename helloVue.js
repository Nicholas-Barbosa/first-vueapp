 var app1 = new Vue({
            el: "#app",
            data: {
                message: "Hello World!"
            }
        });
 var app2 = new Vue({
 	el:"#app-2",
 	data:{
 		message:'You loaded this page on ' + new Date().toLocaleString()
 	}
 });

 var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: false
  }
	});

 var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
	})

 var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
	})

 var appAxios = new Vue({
 	el:"#appAxios",
 	data:{
 		info:null
 	},
 	mounted(){
 		axios.get('http://localhost:8080/conhecimentos').then(response => (this.info = response))
 	}
 })