let app = new Vue({
	el:'#app',
	data:{
		conta:'',
		aviso:'',
		resultado:'',
		timer:null
	},
	methods:{
		fazerConta:function(){
			this.aviso ='';

			this.resultado = eval(this.conta);
		}
	},
	//created:function(){
		//this.timer=null;
	//},
	watch:{
		conta:function(){
			this.aviso = 'Digitando...';

			if(this.timer != null){
				clearTimeout(this.timer);
			}

			this.timer = setTimeout(this.fazerConta, 1000);
		}
	}
});