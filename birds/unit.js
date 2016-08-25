var unit={
    extend:function(obj1,obj2) {
      for(var key in obj2){
          obj1[key]=obj2[key]
      }
    } ,
    anglarhu:function(du) {
     return Math.PI/180*du;
    } 
};