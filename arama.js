function Ram(){
    const ramValue = document.getElementById("Ram").value;  
    const result = document.getElementById("result");
     
    if(ramValue >= 4  && ramValue <=6) {
    result.textContent="Yeterli değil"
    result.style.color = "red";
    }
    else if(ramValue < 4 ){
        result.textContent="Geçerli bir RAM giriniz.";
        result.style.color="red"; 
    }
    else if(ramValue > 6   && ramValue < 8){
        result.textContent="Geçerli bir RAM giriniz.";
        result.style.color="red"; 
    }
    else if(ramValue > 8   && ramValue < 16){
        result.textContent="Geçerli bir RAM giriniz.";
        result.style.color="red"; 
    }
    else if(ramValue > 16   && ramValue < 32)   {
        result.textContent="Geçerli bir RAM giriniz.";
        result.style.color="red"; 
    }

    else if(ramValue > 32  &&  ramValue < 64){
        result.textContent="Geçerli bir RAM giriniz.";
        result.style.color="red"; 
    }
    else if(ramValue == 8 ){
    result.textContent="Temel seviye"
    result.style.color="orange";
    }
    else if(ramValue == 16){
        result.textContent="iyi seviyede";
        result.style.color="green";
    }
    else if(ramValue > 64){
        result.textContent="Geçerli bir RAM giriniz";
        result.style.color="red";  
        }
    else if(ramValue == 32 || 64 ){
      result.textContent="Mükemmel seviyede";
      result.style.color="green";   
    }
    
}

function SSD(){
    let ssdValue = document.getElementById("SSD").value;
    const content = document.getElementById("content");
   
     if(ssdValue ==  0){
      content.textContent="Yok";
      content.style.color="red";    
    }else if(ssdValue > 0 && ssdValue < 256){
      content.textContent="Geçerli bir SSD giriniz";
      content.style.color="red";
    }else if(ssdValue > 256  && ssdValue < 512 ){
        content.textContent="Geçerli bir SSD giriniz";
        content.style.color="red";
    }else if(ssdValue > 512 && ssdValue < 1000 ){
        content.textContent="Geçerli bir SSD giriniz";
        content.style.color="red";
    }else if(ssdValue > 1000 && ssdValue < 2000){
        content.textContent="Geçerli bir SSD giriniz";
        content.style.color="red";
    }
     else if(ssdValue == 256){
         content.textContent="Temel seviye";
         content.style.color="orange";
    }
    else if(ssdValue == 512){
      content.textContent="iyi seviyede";
      content.style.color="green";
      
    }else if(ssdValue == 1000){
        content.textContent="Mükemmel seviyede";
        content.style.color="green";  
    }
    else if(ssdValue > 2000){
        content.textContent="Geçerli bir SSD giriniz";
        content.style.color="red";
    }   
    else if(ssdValue == 1000 || 2000 ){
        content.textContent="Mükemmel seviyede";
        content.style.color="green";    
    }
}
const lowProcessors =   ["intel i3","amd ryzen 3"];
const mediumProcessor = ["intel i5","amd ryzen 5",];
const goodProcessor =   ["intel i7","amd ryzen 7","m 1","m 2"];
const betterProcessor = ["intel i9","amd ryzen 9"];

function Processor(){
  const input = document.getElementById("processor").value.toLowerCase();
  const  data = document.getElementById("data");
  const processor1 = lowProcessors.includes(input);
  const processor2 = mediumProcessor.includes(input);
  const processor3 = goodProcessor.includes(input);
  const processor4 = betterProcessor.includes(input);

  if(processor1){       
    data.textContent="Düşük";   
    data.style.color="red";
    }
    if(processor2){
        data.textContent="Orta Seviyede";
        data.style.color="orange";
    }
    if(processor3){
        data.textContent="İyi seviyede";
        data.style.color="green";
    }
    if(processor4){
        data.textContent="Mükemmel seviye";
        data.style.color="green";
    }
    if(result.style.color == "red" && content.style.color == "red" && data.style.color =="red"){
        finish.textContent="Kapasiteniz yeterli değil";
        finish.style.color="red";
        document.getElementById("foto").style.display = "none";      
    }

    //  if(result.style.color == "orange" && content.style.color == "orange" && data.style.color  == "orange"){
    //      finish.textContent="Bilgisayarınız ile  orta düzey oyunları oynayabilirsiniz.";
    //      finish.style.color="orange";
    //  }
    // if(result.style.color == "green" && content.style.color == "green" && data.style.color == "green"){
    //     finish.textContent="Önerilen oyunlar:";
    //     finish.style.color="green";
    // }       
    
}   
function showİmage(){ 
    if(result.style.color == "green" && content.style.color == "green" && data.style.color == "green"){
           
           document.getElementById("cizgi");    
           cizgi.style.display = "block";
           document.getElementById("image");    
           image.style.display = "block";
    }
    if(result.style.color == "orange" && content.style.color == "orange" && data.style.color  == "orange"){
        document.getElementById("cizgi").style.display = "block";
        document.getElementById("legends").style.display = "block";

    }
}   





    