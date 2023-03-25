var container=document.createElement("div");
container.className="container";
document.body.append(container);
var row=document.createElement("div");
row.className="row";

container.append(row);


var res=fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json()).then((data1)=>foo(data1)).catch((error)=>console.log (error));

async function getdata(){
  let res=await fetch('https://restcountries.com/v2/all');
  let res2=await res.json();
  for(i=0;i<res2.length;i++){
      try{
          weather(res2[i].latlng[0],res2[i].latlng[1])
      }
      catch (error){
         console.error(error);
      }
  }
}


async function weather(lat,lon){
  try {
      if(lon===undefined) throw new Error ("invalid coordinates")
      let res3= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8c0cd1df478e47ce8896ba0509fdd10d`)
      let res4=await res3.json();
      console.log(res4.main.temp);
  } catch (error) {
      console.log(error)
  }
}

getdata();

function foo (data1){
    console.log(data1);
 
    for (var i=0;i<data1.length;i++){
      row.innerHTML+=
      `<div class="col-md-4">
      <div class="card deck text-center text-black bg-light mb-3" style="width: 18rem;">
      <h5 class="card-title">${data1[i].name}</h5>
      <img src="${data1[i].flag}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Capital:${data1[i].capital} <br> Population:${data1[i].population} <br> Region:${data1[i].region}<br>Country code:${data1[i].alpha3Code} <br></p>
    <button type="button" class="btn btn-primary" onclick>click for weather</button>
  </div>
</div>
</div>`  
    }
    
}