n=6
for(var h=1;h<=n;h++){
    var espacio="";
    for(var i=1;i<=n-h;i++){
        espacio+=" "
    }
   
    for(var j=1;j<=(h*2)-1;j++){
        espacio+="*"
     
     } 
  
  console.log(espacio)
}