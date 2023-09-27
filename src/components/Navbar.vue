<template>
    <div>
      <nav class="navbar navbar-expand-lg  navbarBoja">
      <a class="navbar-brand" href="#"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <img :src="'/images/meni.png'" alt="" class = "meniDugme">
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a :class="'nav-link'" href="http://localhost:8080/" > <span :class = "funkcija('http://localhost:8080/')==1?'klasa1':''"> {{Pocetna}} </span><span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" :class = "funkcija('UMETNINA')==1?'klasa1':''">
             <span :class = "funkcija('http://localhost:8080/sveUmetnine')==1?'klasa1':''"> {{Umetnine}}</span>
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" :href="'http://localhost:8080/sveUmetnine/0'">{{Slike}}</a>
              <a class="dropdown-item" :href="'http://localhost:8080/sveUmetnine/1'">{{Skulpture}}</a>
              <a class="dropdown-item" :href="'http://localhost:8080/sveUmetnine/2'">{{Ostale}}</a>
            </div>
          </li>
           <li class="nav-item">
            <a class="nav-link" href="/umetnici"> <span :class = "funkcija1()==1?'klasa1':''">{{Umetnici}}</span></a>
          </li>       
           
           <li class="nav-item">
            <a class="nav-link" :href="'http://localhost:8080/oNama'+jezik" > <span :class = "funkcija('http://localhost:8080/oNama')==1?'klasa1':''">{{ONama}}</span></a>
          </li>      
          <li class="nav-item">
            <a class="nav-link" href="http://localhost:8080/mojNalog"> <span :class = "funkcija('http://localhost:8080/mojNalog')==1?'klasa1':''">{{MojNalog}}</span></a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <button class="btn btn-light navbarBojaDugme" type="submit" @click="promeniJezik(0)">SR</button>
          <button class="btn btn-light navbarBojaDugme" type="submit" @click="promeniJezik(1)">EN</button>
        </form>
      </div>
    </nav>
    </div>
    </template>
    
    <style scoped>
        .navbarBoja{
            background-color: rgb(144, 92, 76);
        }
        .nav-link{
            color:rgb(248, 248, 247);
        }
        .navbarBojaDugme{
            background-color:rgb(144, 92, 76);
            border-color: rgb(144, 92, 76);
            color:rgb(248, 248, 247);
        }
        .meniDugme{
          width:25px;
        }
        .klasa1 {
          font-weight: bold;
          font-style: italic;
          text-decoration: underline;
        }
        a {
          font-size: 22px;
        }
        .nav-item{
          margin-left:10px
        }
    </style>
    
    <script>
        export default{
          name:'Navbar',
          // mounted(){
          //   $(document).ready(function(){
          //     $(".active").removeClass("active");
          //     $(this).addClass("active");
          //   });
          // }  
          data(){
            return{
              renderComponent:'true',
              MojNalog:'',
              ONama:'',
              Umetnici:'',
              Ostale:'',
              Skulpture:'',
              Slike:'',
              Umetnine:'',
              Pocetna:''
            }
          },
          methods:{
            reloadPage() {
              window.location.reload();
            },
            promeniJezik(val){
              if (val == 1) localStorage.setItem('JEZIK', "EN");
              else localStorage.setItem('JEZIK', "SR");
              this.reloadPage();
            },
            funkcija(poc){
              let tren = window.location.href;
              if(tren == "http://localhost:8080/" && poc == "http://localhost:8080/") return 1;
              if((JSON.stringify(tren)).includes(poc) && poc != "http://localhost:8080/") return 1;
              return 0;
            },
            funkcija1(){
              let tren = window.location.href;
              if((JSON.stringify(tren)).includes("http://localhost:8080/umetnici")) {
                return 1;
              }
              return 0;
            }
          },
          created(){
            if(localStorage.getItem("TRENUTNA") == null){
              localStorage.setItem("TRENUTNA", "yo");
            }
            if(localStorage.getItem("JEZIK") == null){
              localStorage.setItem("JEZIK","SR");
            }
            this.jezik = localStorage.getItem("JEZIK");  
            if(this.jezik == "SR"){
              this.MojNalog = 'Moj nalog';
              this.ONama = 'O nama',
              this.Umetnici = 'Umetnici',
              this.Ostale = 'Ostale',
              this.Skulpture = 'Skulpture',
              this.Slike = 'Slike',
              this.Umetnine = 'Umetnine',
              this.Pocetna = 'Pocetna'
            }else{
              this.MojNalog = 'My Account';
              this.ONama = 'About Us',
              this.Umetnici = 'Artists',
              this.Ostale = 'Other',
              this.Skulpture = 'Sculptures',
              this.Slike = 'Paintings',
              this.Umetnine = 'Art Works',
              this.Pocetna = 'Home'
            }
          }      
        }
    </script>