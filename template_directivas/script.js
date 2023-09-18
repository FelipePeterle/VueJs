let app = new Vue({
	el:'#app',
	data:{
		aviso: true,
		divid:'qualquer',
		link:'https://www.linkedin.com/in/felipe-peterle-aa9601241/'
	},
	methods:{
		enviou:()=>{
			alert("ENVIOU!")
		},

		clicou:()=>{
			alert("É O CLICAS!")
		}
	}
});