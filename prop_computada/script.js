let app = new Vue({
	el:'#app',
	data:{
		nome:'Felipe'
	},
	computed:{
		nomeInvertido:function(){
			return this.nome.split('').reverse().join('');
		}
	}
});