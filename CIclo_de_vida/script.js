let app = new Vue({
    el:'#app',
    data:{
        nome:'Tuxas'
    },

    created:function(){
        alert(this.nome);
    }
    /*beforeCreate
    created

    beforeMount
    mounted
    
    beforeUpdate
    updated

    beforeDestroy
    destroyed
    }*/
    
})