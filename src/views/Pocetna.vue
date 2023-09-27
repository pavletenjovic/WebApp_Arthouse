<template>
    <div class="home">
        <div class="container-fluid" style="width:100%">
            <div class="row">
                <div class="col-12 col-md-3 umetnine_stil">
                    <div>
                        <div class="glavni_tekst"> {{ leviTekst }} </div><br>
                        <div v-for='umetnina in sveUmet' :key="umetnina.idUmetnine" class="row">
                            <router-link :to='/umetninaDetalji/ + umetnina.idUmetnine'>
                                <Umetnina :mojaUmetnina='umetnina'></Umetnina>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 umetnici_stil">                    
                    <div class="glavni_tekst"> {{ srednjiTekst }} </div><br>
                    <div v-for='umtnk in sviUmetn' :key="umtnk.id" class="row">
                        <div class="col-md-12">
                            <Umetnik :mojUmetnik='umtnk'></Umetnik>
                        </div>
                    </div>                    
                </div>
                <div class="col-12 col-md-3 ponude_stil">
                    <div class="glavni_tekst"> {{ desniTekst }} </div><br>
                    <div v-for="ponude of this.poslednje" :key="ponude.id">
                        <router-link :to='/umetninaDetalji/ + ponude.idOglasa'> {{ ponude.imeUmetnine }} </router-link>
                        <br>
                        {{ ponude.korisnik }}
                        <br>
                        {{ ponude.ponuda }}
                    <hr>
                    </div>                
            
                    <div>
                        <div class="glavni_tekst"> {{ baneriTekst }} </div><br>
                        <div>
                            <a href="https://www.etf.bg.ac.rs/" class="bannerPoc">ETF</a>
                        </div>
                        <div>
                            <a href="https://rti.etf.bg.ac.rs/" class="bannerPoc">RTI katedra</a>
                        </div>
                        <div>
                            <a href="https://rti.etf.bg.ac.rs/rti/si2vd/" class="bannerPoc">Veb dizajn</a>

                        </div>
                        <div>
                            <a href="https://www.britishmuseum.org/" class="bannerPoc">Britanski muzej</a>
                        </div>
                        <br>
                        <br>
                        <br>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<style scoped>
.bannerPoc {
    color: rgb(0, 0, 0);
    font-size: 25px;
}
.ponude_stil {
    padding: 2%;
    padding-left: 3%;
    padding-right: 3%;
}
.umetnine_stil {
    padding: 2%;
    padding-left: 3%;
    padding-right: 3%;    
}
.umetnici_stil {
    margin-block-start: 2%;
    padding-left: 2%;
    padding-right: 2%;
}
.ponude_stil a {
    color: rgb(144, 92, 76);
}
a{
    text-decoration-color: white;
}
.glavni_tekst {
    font-size: 35px;
    font-weight: bold;
}
</style>
  
<script>
import Umetnina from '../components/Umetnina.vue'
import sveUmetnine from '../data/SveUmetnine.js'
import Umetnik from '../components/Umetnik.vue'
import sviUmetnici from '../data/SviUmetnici.js'
import svePonude from '@/data/ponude'

export default {
    name: 'Pocetna',
    components: {
        Umetnina,
        Umetnik
    },
    data() {
        return {
            sveUmet: [],
            sviUmetn: [],
            putanja: '',
            Name: '',
            Ukratko: '',
            jezik: '',
            poslednja3: [],
            renderComponent: '',
            leviTekst: '',
            srednjiTekst: '',
            desniTekst:'',
            baneriTekst:'',
            svePonude1: [],
            poslednje: []
        }
    },
    created() {
        localStorage.setItem("TRENUTNA", "POC");
        localStorage.setItem("korisnik", JSON.stringify('Jelica'))
        localStorage.setItem('korisnikIme', JSON.stringify('Jelica'))
        localStorage.setItem('korisnikMejl', JSON.stringify('jelica@etf.rs'))
        this.renderComponent = false;
        this.renderComponent = true;
        if (localStorage.getItem('ponude') == null) {
            localStorage.setItem('ponude', JSON.stringify(svePonude));
        }
        this.svePonude1 = JSON.parse(localStorage.getItem('ponude'));
        this.poslednje.push(this.svePonude1[this.svePonude1.length - 1])
        this.poslednje.push(this.svePonude1[this.svePonude1.length - 2])
        this.poslednje.push(this.svePonude1[this.svePonude1.length - 3])
        for (var i = 0; i < sveUmetnine.length; i++) {
            if (sveUmetnine[i].idUmetnine == 5 || sveUmetnine[i].idUmetnine == 9 || sveUmetnine[i].idUmetnine == 1) {
                this.sveUmet.push(sveUmetnine[i]);
            }
        }
        for (i = 0; i < sviUmetnici.length; i++) {
            if (sviUmetnici[i].idUmetnika == 3 || sviUmetnici[i].idUmetnika == 6 || sviUmetnici[i].idUmetnika == 1)
                this.sviUmetn.push(sviUmetnici[i]);
        }

        if (localStorage.getItem("JEZIK") == null) {
            localStorage.setItem("JEZIK", "SR");
        }
        if (localStorage.getItem("JEZIK") == "EN") {
            this.jezik = 'EN';
            document.title = 'Home';
            this.leviTekst = 'Newest art works';
            this.srednjiTekst = 'Newest artists';
            this.desniTekst = 'Newest offers';
            this.baneriTekst = 'Useful links';
        } else {
            this.jezik = 'SR';
            document.title = 'Pocetna';
            this.leviTekst = 'Nove umetnine';
            this.srednjiTekst = 'Novi umetnici';
            this.desniTekst = 'Nove ponude';
            this.baneriTekst = 'Korisni sajtovi';
        }
    }
}
</script>  