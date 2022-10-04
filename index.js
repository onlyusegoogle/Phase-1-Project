const coinList = document.getElementById ('list') // => change it for table places


fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&fbclid=IwAR2seyvVJZbkupG8ZP75m6uh_cqGH5NeTLcq2l4v7cAPKCPF_jh-_Kvc9dg")
    .then(Response => Response.json())
    .then(coinArr => {
        for (let i=0; i<5; i++) {
            displayInfo(coinArr[i])
        }
     })
        //.then (coinArr => console.log(coinArr))
    

function displayInfo(coinObj) {

    //console.log(coinObj[0])

    // console.log(coinObj.name)
    // console.log(coinObj.current_price)
    // console.log(coinObj.image)
    // console.log(coinObj.symbol)
    // console.log(coinObj.price_change_percentage_24h)
    
    //->same as console.log(coinObj.name, coinObj.current_price, coinObj.image, coinObj.symbol)

// check it on w3schools: for in, for of
// for (x in obj)
// x- is key

    const tr = document.createElement ('tr')
//TODO: add star img. create Favorit colomn
    let td = document.createElement ('td')
    tr.append(td)
// added coin Img
    td = document.createElement ('td')
    tr.append(td)
    const coinImg = document.createElement ('img')
    td.append(coinImg)
    coinImg.src = coinObj.image
//added coin Name
    td = document.createElement ('td')
    tr.append(td)
    td.textContent = coinObj.name

//TODO: add pricec and percentage

   


    coinList.append(tr)

}


