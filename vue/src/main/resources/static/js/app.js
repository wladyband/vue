var app = new Vue({
	el:'#app',
	data:{
		bancodedados:[]
	
	},
	methods:{
				
	},
	created:function(){
		var self = this;
			self.$http.get('https://swapi.co/api/planets/1/?format=json').then(function(response){
			console.log(response); 
			/*self.bancodedados = response.data;*/
			self.bancodedados = response.response.body;
		});
		
	}

	
});