const coinList = document.getElementById('list') // -> change it for table places
//const stripe = Stripe("pk_test_51LpDh5GTck0sdjJJB2jBz7La6RAo7wJrML0EEenMPzyNdHVGGgxv8kc5vEv9Wy9yy9wjY7AIEnz4Jo2zj8Tgdjvv00SyIxzIDb");


fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&fbclid=IwAR2seyvVJZbkupG8ZP75m6uh_cqGH5NeTLcq2l4v7cAPKCPF_jh-_Kvc9dg") //{mode: "no-cors"})
    .then(Response => Response.json())
    .then(coinArr => {
        for (let i = 0; i < 7; i++) {
            displayInfo(coinArr[i])
        }
    })

//coinObj.data.forEach(x => console.log(x))
// .then(coinArr => console.log(coinArr))

function displayInfo(coinObj) {
    // console.log(coinObj)
    //console.log(coinObj[0])
    // console.log(coinObj.name)
    // console.log(coinObj.symbol)
    // console.log(coinObj.image)
    // console.log(coinObj.current_price)
    // console.log(coinObj.price_change_percentage_24h)

    //->same as 
    //console.log(coinObj.name, coinObj.current_price, coinObj.image, coinObj.symbol)

    // check it on w3schools: for in, for of
    // for (x in obj)
    // x- is key

    const tr = document.createElement('tr')
    // //TODO: add star img. create Favorit colomn
    let td = document.createElement('td')
    tr.append(td)

    // added coin Img
    td = document.createElement('td')
    tr.append(td)
    const coinImg = document.createElement('img')
    td.append(coinImg)
    coinImg.src = coinObj.image

    //added coin Name
    td = document.createElement('td')
    tr.append(td)
    td.textContent = coinObj.name

    // added prices
    td = document.createElement('td')
    tr.append(td)
    td.textContent = coinObj.current_price

    //added persantage
    td = document.createElement('td')
    tr.append(td)
    td.textContent = coinObj.price_change_percentage_24h

    // This made an ERROR:
    // td = document.createElement('td')
    // tr.textContent = coinObj.price_change_percentage_24h

    coinList.append(tr);
}


