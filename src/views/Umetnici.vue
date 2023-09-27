<template>
    <div class="container stil">
        <div v-for="um of this.umetnici" :key="um.id" class="row">
            <div class="col-sm-0  col-lg-3"> </div>
            <div class="col-sm-12  col-lg-6">
                <img :src="'/images/umetniciPodaci/umetnik' + um.idUmetnika + '.jpg'" class="m col-md-12"><br>
                <h4>{{ um.imeUmetnika }} </h4>                
                {{ um.godineRodjenjaISmrti }}
                <br>
                <span :hidden="this.jezik === 'SR'">{{ um.bioEN }}</span>
                <span :hidden="this.jezik == 'EN'">{{ um.bioSRB }}</span>

                <br>
                <button @click="pregled(um)"> {{ pregledDela }}</button>
                <hr>
            </div>
        </div>
        <div id="pdf-container">

        </div>
    </div>
</template>

<style scoped>
.stil{
    padding: 2%;
}
/* button {
    background-color: rgb(216, 188, 182);
} */
</style>

<script>
import sviUmetnici from '../data/SviUmetnici'
import sveUmetnine from '../data/SveUmetnine'
import jsPDF from 'jspdf';

export default {
    name: 'Umetnici',
    data() {
        return {
            umetnici: [],
            jezik: '',
            pregledDela: ''
        }
    },
    created() {
        if (localStorage.getItem('sviUmetnici') == null) {
            localStorage.setItem('sviUmetnici', JSON.stringify(sviUmetnici))
        }
        this.umetnici = JSON.parse(localStorage.getItem('sviUmetnici'))
        if (localStorage.getItem("JEZIK") == null) {
            localStorage.setItem("JEZIK", "SR");
        }
        if (localStorage.getItem("JEZIK") == "EN") {
            this.jezik = 'EN';
            document.title = 'Artists';
            this.pregledDela = 'Art work summary'
        } else {
            this.jezik = 'SR';
            document.title = 'Umetnici';
            this.pregledDela = 'Pregled dela';
        }
    },
    methods: {
        pregled(umetnik) { 
            var umetnine= []
                // umetnine = sveUmetnine.filter(um => um.imeUmetnika == umetnik.imeUmetnika);
                for(var c=0;c<sveUmetnine.length;c++){
                    if(sveUmetnine[c].idUmetnika == umetnik.idUmetnika){
                        umetnine.push({
                            id: sveUmetnine[c].idUmetnine,
                            ime: sveUmetnine[c].ime,
                            godina: sveUmetnine[c].godina,
                            vrednost: sveUmetnine[c].vrednost
                        })
                    }
                }
                localStorage.setItem('um', JSON.stringify(umetnine))
                const doc = new jsPDF();
                var i = 20
                doc.text(umetnik.imeUmetnika+'', 80, 5)
                for(var j = 0; j<umetnine.length; j++){
                    doc.text('Ime: ' + umetnine[j].ime, 20, i);
                    i+=10
                    doc.text('Godina: ' +umetnine[j].godina+'', 20, i)
                    i+=10
                    doc.text('Vrednost: ' +umetnine[j].vrednost+'', 20, i)
                    i+=10
                    doc.text('----------------------------------------------', 20, i)
                    i+=10
                    doc.addImage('/images/umetninePodaci/delo' + umetnine[j].id + '.jpg', "JPEG", 15, i, 80, 80);
                    i+=100;
                }
                doc.save('umetnine.pdf')
        }
    }
}
</script>