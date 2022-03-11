class Shop{
    constructor(){
        this.reset();

    }


    reset(){
        this.Donutsmade=0;
        this.Donutsearned=1;
        this.Autobakercost=100;
        this.Autobakerearned=0;
        this.Multiplercost=10;
        this.Multiplerearned=0;
        this.autobakeId=undefined;
        this.startgame;
        this.Updateshopcontrols= false;
        this.blowup;


    }

    
    Bakedonut(){
        this.Donutsmade+=this.Donutsearned;
    }

 
    
    multilpliercommand(){
        if (this.Donutsmade>= this.Multiplercost){
            this.Donutsmade-=this.Multiplercost;
            this.Multiplerearned++;
            this.Multiplercost=Math.round(this.Multiplercost *1.1);
            this.Donutsearned = Math.pow(1.2, this.Multiplerearned);

        }
        
    }

    Autobaker(){
        if(this.Donutsmade>=this.Autobakercost){
            this.Donutsmade-=this.Autobakercost;
            this.Autobakerearned++;
            this.Autobakercost=Math.round(this.Autobakercost*1.1)};

            if(this.autobakeId == undefined){
                this.autobakeId= self.setInterval(this.Autobaking, 4000);
              }

    }

    Autobaking = () => {

        console.log("autobake start");


       for(let i=0;i<this.Autobakerearned;i++){
           this.Bakedonut();
       }

    }

  


}