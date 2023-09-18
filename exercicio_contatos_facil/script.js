let app = new Vue({
	el:'#app',
	data:{
		frase:'Digite um nome:',
		nomeInput:'',
		lista:[]
	},
	methods:{
		adicionar:function(){
			if(this.nomeInput.length>0){
				this.lista.push(this.nomeInput);

				this.nomeInput = '';
		}
	}
	
}	
});