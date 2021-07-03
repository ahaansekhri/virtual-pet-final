class Food{
    constructor(foodStock,lastFed){
      this.image = loadImage("Milk.png")
    }
    
     getFoodStock(){
      foodStock  = database.ref('Food');
      foodStock.on("value",function(data){
         foodS = data.val();
      })  
    }
    
     updateFoodStock(x){
      database.ref('/').update({Food:foodS-x, FeedTime:hour()});

    }

    addFoodStock(x){
      if(foodS<30){
        x++;
        database.ref('/').update({Food:x});
      }

      else{
        text("Enough food no more", 50,50);
      }
    }

    garden(){
      background(garden,550,500);
    }
    bedroom(){
      background(bedroom,550,500);
    }
    washroom(){
      background(washroom,550,500);
    }

      display(){ 
        var x=50;
        var y=40;
        if(foodS!=0 && foodS <= 30){ 
          for (var i=0;i<foodS;i++){ 
            if(i%10==0){
              y+=65;
              x=40;
            } 
            image(this.image,x,y,70,70) 
            x+=30 
          } 
        } 
      }
    }