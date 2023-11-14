function compareLists(){
  let listaA = document.getElementById("listaA").value.replace(/[^a-zA-Z0-9._\n,]/g, "").replace(/,\s+/g, ",").split(",");
  let listaB = document.getElementById("listaB").value.replace(/[^a-zA-Z0-9._\n,]/g, "").replace(/,\s+/g, ",").split(",");
  
  let onlyA = [];
  let onlyB = [];
  let both = [];

  for(let i = 0; i < listaA.length; i++){
    let itemA = listaA[i].trim();
    if(itemA !== ""){
      if(listaB.includes(itemA)){
        both.push(itemA);
      } else{
        onlyA.push(itemA);
        }
      }
    }

    for(let i = 0; i < listaB.length; i++){
      let itemB = listaB[i].trim();
      if(itemB !== ""){
      if(!listaA.includes(itemB)){
        onlyB.push(itemB);
      }
    }
  }

  document.getElementById("onlyA").innerHTML = `Dados só na lista A:<br>${onlyA.join("<br>")}.`;
  document.getElementById("both").innerHTML = `Dados em ambas as listas:<br>${both.join("<br>")}.`;
  document.getElementById("onlyB").innerHTML = `Dados só na lista B:<br>${onlyB.join("<br>")}.`;
}
