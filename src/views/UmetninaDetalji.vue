<template>
    <div>
    <div :class = "boja">
        <div class="container-fluid">
            <div class="row putanja">
               <span v-if="jezik=='SR'">Umetnine ></span> 
               <span v-if="jezik=='EN'">Art Works ></span>  
                 &nbsp;<a href="http://localhost:8080/sveUmetnine/0" class = "aput" v-if="idUmetnine==0"> {{vrstaUmetnine}}</a>
                <a href="http://localhost:8080/sveUmetnine/1" class = "aput" v-if="idUmetnine==1"> {{vrstaUmetnine}}</a>
                <a href="http://localhost:8080/sveUmetnine/2" class = "aput" v-if="idUmetnine==2"> {{vrstaUmetnine}}</a>
                &nbsp;> {{umetnina.ime}}
            </div>
        </div>

        <div class="container">                    
            <div class="row prviRed">
                    <div class="col-sm-12 col-md-6"> 
                        <!--<img :src="'/images/umetninePodaci/delo'+umetnina.idUmetnine+'.jpg'" >-->
                        <div id="carouselExampleControls" class="carousel slide " data-bs-ride="carousel" style = "keyboard:true">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img class="d-block w-100" :src="'/images/umetninePodaci/delo' + umetnina.idUmetnine + '.jpg'" alt="First slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100 " :src="'/images/umetninePodaci/delo' + umetnina.idUmetnine + umetnina.idUmetnine + '.jpg'"   alt="Second slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" :src="'/images/umetninePodaci/delo' + umetnina.idUmetnine +
                                        umetnina.idUmetnine + umetnina.idUmetnine + '.jpg'" alt="Third slide">
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon klasa" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>

                    <div class="col-sm-12 col-md-6 align-items-center detaljiSlike"> 
                        <div class="row">
                            <div class="col">
                                <h2 id = "opisID" >{{ umtnk }}</h2>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                            <h4 id = "opisID" >{{ umetnina.ime }}</h4>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                            <h6>{{ godine }}: {{ umetnina.godina }}</h6>
                            </div>
                        </div> 
                        <div class="row">
                            <div class="col">
                            <h6>{{ vrednost }}: {{ umetnina.vrednost }}e</h6>
                            </div>
                            <br>
                        </div>
                    </div>
            </div>

            <div class="row">
                <div class="col-12 col-md-6">
                    <iframe width="340" height="200" :src=umetnina.src1 title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div> <br>
                <div class="col-12 col-md-6">
                    <iframe width="340" height="200" :src=umetnina.src2 title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div> 
            </div>
            <br>
            <br>
            <br>
            <div class="row">
                <div class="col-12 col-md-6">
                    <div style="padding-bottom: 4%;">
                        <input type="text" v-model="this.novaPonuda">
                        <button @click="dodajPonudu()">{{ ponudaTekst }}</button>
                    </div>
                    <div v-for="p of this.ponude" :key="p.id" sty>
                        {{ p.korisnik }}
                        <br>
                        {{ p.ponuda }}
                        <br>
                        <hr>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div style="padding-bottom: 4%;">
                        <input type="text" v-model="this.novKomentar">
                        <button @click="dodajKometar()">{{ komentarTekst }} </button>
                    </div>
                    <div v-for="p of this.komentari" :key="p.id">
                        {{ p.kreator }}
                        <br>
                        {{ p.tekst }}
                        <br>
                        <hr>
                    </div>
                </div>
            </div>
    </div>
    </div>   
    <br>
    <br>
    </div>
</template>

<style scoped>
    h3, h6, h5{
        color:#3D291Eff
    }
    h6{
        text-align: center;
    }
    img{
        height: 370px;
        width: 500px;
        object-fit: contain;
    }
    .detaljiSlike{
        margin-top: 10%;
    }
    #opisID{
        margin-left:7px;
    }
    #carouselExampleControls{
        height:100%;
    }
    .prviRed{
        margin-top: 5%;
        margin-bottom: 5%;
    }
    .putanja{
        font-style:italic;
        font-size:120%;
        margin-left:4%;
        margin-top: 7px;
        color:#3D291Eff;
    }
    .aput{
        font-style:italic;
        color:#3D291Eff;
    }

</style>

<script>
    import sveUmetnine from '../data/SveUmetnine.js'
    import sviUmetnici from '../data/SviUmetnici.js';
    import svePonude from '../data/ponude';
    import sviKomentari from '../data/komentari';

    export default{
        name: 'UmetninaDetalji',
        created(){ // prilikom kreiranja komponente se ovo izvrsava
            var id = Number(this.$route.params.id); // ovako se uzima parametar iz url-a
            this.umetnina = this.umetnine.find(umetnina=>umetnina.idUmetnine==id);
            this.umetnik = this.umetnici.find(umetnik=>umetnik.idUmetnika==this.umetnina.idUmetnika);
            if(localStorage.getItem('ponude')==null){
                localStorage.setItem('ponude',JSON.stringify(svePonude));
            }
            this.svePonude1 = JSON.parse(localStorage.getItem('ponude'));
            this.ponude = this.svePonude1.filter(pon => pon.idOglasa == id);
            if(localStorage.getItem('komentari')==null){
                localStorage.setItem('komentari',JSON.stringify(sviKomentari));
            }
            this.sviKomentari1 = JSON.parse(localStorage.getItem('komentari'));
            this.komentari = this.sviKomentari1.filter(kom => kom.idOglasa == id);
            if(localStorage.getItem("JEZIK") == null){
                localStorage.setItem("JEZIK","SR");
            }
            this.jezik = localStorage.getItem("JEZIK");
            this.idUmetnine = this.umetnina.tip;
            this.umtnk = this.umetnik.imeUmetnika;
            if(localStorage.getItem("JEZIK") == "EN"){
                this.godine = 'Year';
                this.vrednost = "Value";
                document.title = 'Art Work';
                this.ponudaTekst = 'Submit offer';
                this.komentarTekst = 'Submit comment';
                if(this.umetnina.tip == 0){
                    this.vrstaUmetnine = "Paintings";
                } else if(this.umetnina.tip == 1){
                    this.vrstaUmetnine = "Sculptures";
                } else {
                    this.vrstaUmetnine = "Other"
                }
            }else{
                this.godine = 'Godina';
                this.vrednost = "Vrednost";
                document.title = 'Umetnina';
                this.ponudaTekst = 'Dodaj ponudu';
                this.komentarTekst = 'Dodaj komentar';
                if(this.umetnina.tip == 0){
                    this.vrstaUmetnine = "Slike";
                }else if(this.umetnina.tip == 1){
                    this.vrstaUmetnine = "Skulpture";
                }else{
                    this.vrstaUmetnine = "Ostale"
                }
            }
        },
        data(){
            return{
                umetnine: sveUmetnine,
                umetnina: {},
                godine: '',
                vrednost:'',
                umtnk:'',
                vrstaUmetnine:'',
                idUmetnine:'',
                jezik:'',
                umetnici:sviUmetnici,
                umetnik:'',
                sviKomentari1: [],
                komentari: [],
                svePonude1: [],
                ponude: [],
                novaPonuda: '',
                novKomentar: '',
                ponudaTekst:'',
                komentarTekst:''
            }
        },
        methods:{
            dodajKometar(){
                var id = sviKomentari[sviKomentari.length-1].id
                id+=1
                var ime = JSON.parse(localStorage.getItem('korisnik'))
                var id1 = Number(this.$route.params.id)
                this.sviKomentari1.push({
                    id: id,
                    idOglasa: id1,
                    kreator: ime,
                    tekst: this.novKomentar
                })
                localStorage.setItem('komentari', JSON.stringify(this.sviKomentari1))
                window.location.reload()
            },
            dodajPonudu(){
                var id = sviKomentari[svePonude.length-1].id
                id+=1
                var ime = JSON.parse(localStorage.getItem('korisnik'))
                var id1 = Number(this.$route.params.id)
                var imeUmetnine = sveUmetnine.find(pon=> pon.idUmetnine == id1).ime
                this.svePonude1.push({
                    id: id,
                    idOglasa: id1,
                    korisnik: ime,
                    imeUmetnine: imeUmetnine,
                    ponuda: this.novaPonuda
                })
                localStorage.setItem('ponude', JSON.stringify(this.svePonude1))
                window.location.reload()
            }
        }
    }
</script>