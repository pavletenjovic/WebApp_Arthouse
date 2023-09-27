<template>
    <div>
    <h1 style="margin-block-start:20px"> <b>{{this.mojNalog}}</b></h1>
    <div id = "moji_podaci" class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <h2>{{ this.ime }}</h2>                
                <h2>{{ this.mejl }}</h2>
                <div><button @click="pregled()">PDF</button></div>
            </div>
         </div>
         
         <div class="row">
            <div class="col-12 col-md-6">
                <h3>{{ this.mojKom }}</h3>
                <div v-for="kom of this.mojiKomentari" :key="kom.id">
                    {{ kom.idOglasa }}
                    <br>
                    {{ kom.tekst }}
                    <br>
                    <button @click="obrisiKomentar(kom)"> {{ obrisiTekst }} </button>
                    <hr>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <h3> {{ this.mojePon }}</h3>
                <div v-for="pon of this.mojePonude" :key="pon.id">
                    {{ pon.imeUmetnine }}
                    <br>
                    {{ pon.ponuda }}
                    <br>
                    <button @click="obrisiPonudu(pon)"> {{ obrisiTekst }} </button>
                    <hr>
                </div>
            </div>
        </div>
    </div>
    <br>
    <br>
    <br>
    </div>
</template>

<style scoped>
    #moji_podaci{
        justify-content: center;
        margin-block-start: 2%;
    }

    #moji_podaci table{
        align-self: center;
        margin-block-start: 2%;
    }
    a {
        color:#3D291Eff;
        text-decoration: none;
    }
    .center{
        margin-left: auto;
        margin-right: auto;
    }
    .dugme {
        background-color:hsla(39, 94%, 56%, 1);
    }
    #drugiEl{
        display: inline-block;
        padding-left: 30px;
    }
</style>

<script>
import sviKomentari from "../data/komentari.js"
import sviJezici from '../data/jezici'
import svePonude from "../data/ponude"
import jsPDF from 'jspdf';

export default{
    name:"User",
    created(){
        if(localStorage.getItem("JEZIK") == "EN"){                
                document.title = 'My account'
            }        
        
        if(localStorage.getItem('komentari')==null){
            localStorage.setItem('komentari',JSON.stringify(sviKomentari));
        }
        this.komentariNiz = JSON.parse(localStorage.getItem('komentari'));
        
        this.ime = JSON.parse(localStorage.getItem('korisnik'));
        this.mejl = JSON.parse(localStorage.getItem('korisnikMejl'));
        this.mojiKomentari = this.komentariNiz.filter(kom => kom.kreator == this.ime);
        if(localStorage.getItem('ponude')==null){
            localStorage.setItem('ponude',JSON.stringify(svePonude));
        }
        this.ponude = JSON.parse(localStorage.getItem('ponude'));
        this.mojePonude = this.ponude.filter(pon => pon.korisnik == this.ime);
            //za proveru i podesavanje jezika
        if(localStorage.getItem('JEZIK')==null){
            localStorage.setItem('JEZIK', "SR");
        }
        this.jezik = localStorage.getItem('JEZIK') == "SR" ? 0:1;            
        this.reci= sviJezici.find(reci=>reci.component=="MojNalog");     
        if(localStorage.getItem("JEZIK") == null){
                  localStorage.setItem("JEZIK","SR");
              }
        if(localStorage.getItem("JEZIK") == "EN"){
            this.jezik = 'EN';
            document.title = 'My Account';
            this.mojNalog = 'My Account';
            this.mojKom = 'My Comments';
            this.mojePon = 'My Offers';
            this.obrisiTekst = 'Delete';
        }else{
            this.jezik = 'SR';
            document.title = 'Moj Nalog';
            this.mojNalog = 'Moj Nalog';
            this.mojKom = 'Moji Komentari';
            this.mojePon = 'Moje ponude';
            this.obrisiTekst = 'Obrisi';
        }
    },
    data(){
        return{
            mojUsername:'admin',        //hardkodovano
            komentariNiz:[],
            mojiKomentari:[],
            mojePonude: [],
            ponude: [],
            jezik:'',
            reci:[],
            ime: '',
            mejl: '',
            mojNalog: '',
            mojKom: '',
            mojePon: '',
            obrisiTekst:''
        }
    },
    methods:{
        obrisiPonudu(p){
            var index = this.mojePonude.indexOf(p)
            this.mojePonude.splice(index, 1)
            index = this.ponude.indexOf(p)
            this.ponude.splice(index, 1)
            localStorage.setItem('ponude', JSON.stringify(this.ponude))
            window.location.reload()
        },
        obrisiKomentar(k){
            var index = this.mojiKomentari.indexOf(k)
            this.mojiKomentari.splice(index, 1)
            index = this.komentariNiz.indexOf(k)
            this.komentariNiz.splice(index, 1)
            localStorage.setItem('komentari', JSON.stringify(this.komentariNiz))
            window.location.reload()
        },
        pregled(){
            const doc1 = new jsPDF();
            var i = 20;
            for(var j=0;j<this.mojePonude.length;j++){
                doc1.text('Umetnina: ' + this.mojePonude[j].imeUmetnine, 20, i);
                i+=10
                doc1.text('Ponuda: ' + this.mojePonude[j].ponuda, 20, i);
                i+=20
            }
            for(var k=0;k<this.mojiKomentari.length;k++){
                doc1.text('Komentar: ' + this.mojiKomentari[k].tekst, 20, i);
                i+=20;
            }
            doc1.save('mojePonudeIKomentari.pdf')
        }
    }
}
</script>
