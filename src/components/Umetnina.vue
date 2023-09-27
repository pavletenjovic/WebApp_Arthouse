<template>
    <div id = 'umetnina'>        
        <img :src="'/images/umetninePodaci/delo'+mojaUmetnina.idUmetnine+'.jpg'" class = "m" ><br>
        {{mojaUmetnina.ime}}, {{umetnik.imeUmetnika}}, {{ mojaUmetnina.godina }}
        <hr>
    </div>
</template>

<style scoped>
#umetnina{
    color: #3D291Eff;
}
img{
    width:90%;
    /* border:3px solid hsla(39, 94%, 56%, 1); */
}
</style>

<script> 
import sviUmetnici from '../data/SviUmetnici';
    export default{
        name:'Umetnina',
        props:[
            'mojaUmetnina'
        ],
        created(){
            this.umetnik = this.umetnici.find(umetnik=>umetnik.idUmetnika==this.mojaUmetnina.idUmetnika);
            
        },
        data(){
            return{
                umetnici:sviUmetnici,
                umetnik:''
            }
        }
    }
</script>
