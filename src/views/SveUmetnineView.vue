<template>
    <div>
        <SveUmetninePregled></SveUmetninePregled>
    </div>
</template>


<script>
import SveUmetninePregled from '../components/SveUmetninePregled.vue'

export default{
    name:"SveUmetnineView",
    components:{
        SveUmetninePregled
    },
    created(){
        localStorage.setItem("TRENUTNA", "UMETNINA");
    }
}
</script>
