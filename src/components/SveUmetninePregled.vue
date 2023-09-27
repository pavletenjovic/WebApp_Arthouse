<template>
    <div>
        <div class="container-fluid">
            <div class="row putanja">
               <span v-if="jezik=='SR'">Umetnine ></span> 
               <span v-if="jezik=='EN'">Art Works ></span>  
                 &nbsp;<a href="http://localhost:8080/sveUmetnine/0" class = "aput" v-if="idUmetnine==0"> {{vrstaUmetnine}}</a>
                <a href="http://localhost:8080/sveUmetnine/1" class = "aput" v-if="idUmetnine==1"> {{vrstaUmetnine}}</a>
                <a href="http://localhost:8080/sveUmetnine/2" class = "aput" v-if="idUmetnine==2"> {{vrstaUmetnine}}</a>
            </div>
        </div>

        <div class="container">
            <div class="row r1" >
                <div class="col-12 col-lg-5" >
                    <input type="text" placeholder  = "Search" size = '20' v-model = "tekst">
                    <button style = "margin:5px" @click = "trazi()">{{trazi1}}</button>
                </div>
                <div class="col-0 col-lg-3"></div>
                <div class="col-12 col-lg-4 " style = "padding-top:8px">
                    {{sortiraj}}
                    <select name="sortirajPo" id="sortirajPo" v-model = "sortKrit">
                        <option value="nzv">{{naziv}}</option>
                        <option value="umtnk">{{umetnik}}</option>
                    </select>
                </div>
            </div>
            <div v-for= 'umetnina in sveUmet' :key="umetnina.idUmetnine" class="row">
                <div class="col-sm-0  col-lg-3"> </div>
                <div class="col-sm-12  col-lg-6" >
                    <router-link :to='/umetninaDetalji/+umetnina.idUmetnine' >
                    <Umetnina :mojaUmetnina='umetnina'></Umetnina>
                    </router-link>
                </div>
                <div class="col-sm-0  col-lg-3"> </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
a:hover{
    text-decoration: underline;
    text-decoration-color: rgb(255, 255, 255);
}
.aput{
    font-style:italic;
    color:#3D291Eff;
}
.r1{
    background-color: #3D291Eff;
    padding: 5px;
    color:white;
    margin:10px;
    border-radius: 25px;
}
    
</style>

<script>
    import Umetnina from './Umetnina.vue'
    import sveUmetnine from '../data/SveUmetnine.js'

    export default{
        name: 'SveUmetninePregled',
        components:{
            Umetnina
        },
        data(){
            return{
                sveUmet: [],
                tekst:'',
                sortKrit:'',
                umetnik:'',
                naziv:'',
                sortiraj:'',
                trazi1:'',
                vrstaUmetnine:'',
                idUmetnine:'',
                jezik:''
            }
        },
        created(){
            if(localStorage.getItem("JEZIK") == null){
                localStorage.setItem("JEZIK","SR");
            }
            this.jezik = localStorage.getItem("JEZIK");
            this.idUmetnine = Number(this.$route.params.tip);
            if(localStorage.getItem("JEZIK") == "EN"){
                this.sortiraj = 'Sort by:';
                this.trazi1 = 'Search';
                this.umetnik = 'Artist';
                this.naziv = 'Name';
                document.title = 'Art Works'
                if(Number(this.$route.params.tip) == 0){
                    this.vrstaUmetnine = "Paintings";
                }else if(Number(this.$route.params.tip) == 1){
                    this.vrstaUmetnine = "Sculptures";
                }else{
                    this.vrstaUmetnine = "Other"
                }
            }else{
                this.sortiraj = 'Sortiraj po:';
                this.trazi1 = 'Trazi';
                this.umetnik = 'Umetnik';
                this.naziv = 'Naziv';
                document.title = 'Umetnine'
                if(Number(this.$route.params.tip) == 0){
                    this.vrstaUmetnine = "Slike";
                }else if(Number(this.$route.params.tip) == 1){
                    this.vrstaUmetnine = "Skulpture";
                }else{
                    this.vrstaUmetnine = "Ostale"
                }
            }

            for(var i = 0;i <sveUmetnine.length;i++){
                if(sveUmetnine[i].tip == Number(this.$route.params.tip)){
                    this.sveUmet.push(sveUmetnine[i]);
                }
            }
        },
        methods:{
            trazi(){
                if(this.tekst != '' || this.sortKrit != ''){
                    window.location.href = 'http://localhost:8080' + '/sveUmetnineRucno/'+Number(this.$route.params.tip)+ "/R"+this.tekst+"/R"+this.sortKrit;
                }
            }
        }
    }
</script>
