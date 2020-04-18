var app = new vue({
	el: '#vues',
	data: {
	  name: 'Vue.js'
	},
	// define methods under the `methods` object
	methods: {
		iniciarsesion: function (event) {
		// `this` inside methods points to the Vue instance
		alert('Hello ' + this.name + '!')
		// `event` is the native DOM event
		if (event) {
		  alert(event.target.tagName)
		}
	  }
	}
  
  // yo


})