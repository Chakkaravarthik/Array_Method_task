


fetchData("https://restcountries.com/v3.1/all");


async function fetchData(api){
   try{
    const res = await fetch(api);
    if(!res.ok){
        throw new Error('Network response was not ok');
    }
    const data = await res.json();

    //filter function - get all asian continents
    let asiancountries = data.filter((ele)=>ele.region==="Asia")
    console.log(asiancountries);

    //filter functio - population lessthan 2 lakhs 
    let population = data.filter((ele)=>ele.population<200000)
    console.log(population);

    //forEach method - print name ,capital, flag
    let printData = data.forEach((ele,i)=>{
        console.log(`Name: ${ele.name.common},capital: ${ele.capital},flag :${ele.flags.png}`);
    })
    

    //reduce method - total population
    let totalpopulation = data.reduce((acc,ele)=>{
        return acc + ele.population;
    },0)
    console.log(totalpopulation);

    //print country which uses US dollar as currency
    let dollardata = data.filter(ele => ele.currencies && ele.currencies.USD)
    let dollarCountry = dollardata.forEach((ele)=>{
        console.log(`USD using country :${ele.name.common}`)
    })
    console.log(dollarCountry)


   }
   catch(err){
    console.log(err);
  }

  
  
}

