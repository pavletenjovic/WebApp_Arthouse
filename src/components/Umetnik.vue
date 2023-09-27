<template>
    <div id = 'umetnik'>        
        <img :src="'/images/umetniciPodaci/umetnik'+mojUmetnik.idUmetnika+'.jpg'" class = "m" ><br>
        <h4>{{mojUmetnik.imeUmetnika}}</h4>
        <h6> {{ mojUmetnik.godineRodjenjaISmrti }} </h6>
        <hr>
    </div>
</template>

<style scoped>
#umetnik{
    color: #3D291Eff;
}
img{
    width:50%;
    /* border:3px solid hsla(39, 94%, 56%, 1); */
}
</style>

<script> 
    export default{
        name:'Umetnik',
        props:[
            'mojUmetnik'
        ]
    }
</script>
