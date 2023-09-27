<template>
    <div class="onama">
      <div class="container">
          <div class="row">
              <div class="col-sm-0 col-md-2"></div>
              <div class = "col-12 col-md-8 boja">
                Website "Art House" is part of a practical work on a subject called Web Design. Original graphic design and intuitive user 
                interface is what seperates this website from others.
              </div>
              <div class="col-sm-0 col-md-2"></div>
          </div>
          <div class="row">
              <div class="col-12 col-md-4 d-flex justify-content-center align-items-center">
                   <img :src="'/images/umetninePodaci/delo2.jpg'" class = "slika" >
              </div>
              <div class="col-12 col-md-4 d-flex justify-content-center align-items-center">
                   <img :src="'/images/umetninePodaci/delo3.jpg'" class = "slika" >
              </div>
              <div class="col-12 col-md-4 d-flex justify-content-center align-items-center">
                   <img :src="'/images/umetninePodaci/delo8.jpg'" class = "slika" >
              </div>
          </div>
          <div class="row">
              <div class="col-1 col-md-2"></div>
              <div class="col-10 col-md-8">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3109.274659266787!2d20.47392482812448!3d44.80720511921592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7a9f5ee145d3%3A0x3ed89b5bb505d83!2sUniversity%20of%20Belgrade%20School%20of%20Electrical%20Engineering!5e0!3m2!1sen!2srs!4v1656506409956!5m2!1sen!2srs" style="border:2px solid rgb(144, 92, 76); width:90%; height:250px;" loading="lazy"></iframe>
              </div>
              <div class="col-1 col-md-2"></div>
          </div>
          <div class = "row">
              
              <div class="col-6 col-md-6">
                  <img src="/images/nagrade/nagrada3.png" class = "nagrada" alt = "not good">
              </div>
              <div class="col-6 col-md-6">
                  <img src="/images/nagrade/nagrada4.png" class = "nagrada"> 
              </div>
          </div>
          <div class="row">
              <div class="col-1 col-md-2"></div>
              <div class="col-10 col-md-8 boja " >
                Phone Number: +381 60 3921902
              </div>
              <div class="col-1 col-md-2"></div>
          </div><br><br><br>
      </div>
      
    </div>
  </template>
  
  <style scoped>
  .boja{
      color:#3D291Eff;
      margin:2%;
      font-size: 20px;
  }
  .slika{
      width:90%;
      margin:5%;
      border:3px solid rgb(216, 188, 182);
  }
  .nagrada{
      width:100px;
  }
  </style>
  
  <script>
  export default{
          name: 'ONamaEN',
          created(){
              if(localStorage.getItem("JEZIK") == null){
                  localStorage.setItem("JEZIK","SR");
              }
              if(localStorage.getItem("JEZIK") == "SR"){
                  this.$router.push('oNamaSR');
              }
          }
  }
  </script>