console.log("Starting scripts.js");

const BakeDonutButton= document.getElementById("bakedonut");
const PurchasemultilplierButton= document.getElementById("multilplier");
const PurchaseautobakerButton= document.getElementById("automaker");
const ResetgameButton=document.getElementById("Resetgame");
const StartgameButton=document.getElementById("startgame");
const StopDoughBurglarsButton=document.getElementById("stopburglar");




const Donuts= document.getElementById("txtDonut");
const Multiplerson= document.getElementById("multiplertxt");
const autobaker= document.getElementById("automakertxt");
const autobakercost=document.getElementById("autocosttxt");
const multamount=document.getElementById("multcosttxt");
var coll = document.getElementsByClassName("collapsible");


function Updateshop(){
    console.log("UpdateShop");
    Donuts.value=Math.round(myShop.Donutsmade);
    Multiplerson.value=myShop.Multiplerearned;
    autobaker.value=myShop.Autobakerearned;
    autobakercost.vaule=myShop.Autobakercost;
    multamount.vaule=myShop.Multiplercost;
    multamount.innerText = "Cost of Multi: " + myShop.Multiplercost;
    autobakercost.innerText = "Cost of Autobaker: " + myShop.Autobakercost;
    
}

function Updateshopcontrols (state){
    BakeDonutButton.disabled = state;
    ResetgameButton.disabled = state;
    PurchasemultilplierButton.disabled = state;
    PurchaseautobakerButton.disabled = state;
}



let myShop = new Shop();


let  playgame = setInterval(Updateshop, 1000);
let timer= setInterval(myShop.blowup,10000);




if(!Updateshopcontrols.IsRunning){
    Updateshopcontrols(true);
    Updateshop();
  }
  



  StopDoughBurglarsButton.addEventListener("click", function(){
    console.log.apply("the stop button was clicked");
    
    });

StartgameButton.addEventListener("click", function(){
console.log("The game was started");
Updateshopcontrols()=true;
Updateshop();



});


ResetgameButton.addEventListener("click", function(){
    console.log("reset button was clicked")
    myShop.reset();
Updateshopcontrols.IsRunning=false;
    Updateshop();
});

BakeDonutButton.addEventListener("click", function(){
console.log("Bake was clicked");
myShop.Bakedonut();
Updateshop()

});

PurchasemultilplierButton.addEventListener("click",function(){
console.log("Purchase multipler was clicked");
myShop.multilpliercommand();
multamount.innerText = "Cost of Multi: " + myShop.Multiplercost;
Updateshop()

});

PurchaseautobakerButton.addEventListener("click", function(){
    console.log("Purchase autobaker was clicked");
    autobakercost.innerText = "Cost of Autobaker: " + myShop.Autobakercost + "Donuts";
    myShop.Autobaker();
   
    Updateshop()

});

var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }


