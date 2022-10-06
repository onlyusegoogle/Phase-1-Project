const coinList = document.getElementById('list') // -> change it for table places

const stripe = Stripe("pk_test_51LpDh5GTck0sdjJJB2jBz7La6RAo7wJrML0EEenMPzyNdHVGGgxv8kc5vEv9Wy9yy9wjY7AIEnz4Jo2zj8Tgdjvv00SyIxzIDb");

//iFrame
const appearance = {
    theme: 'default',
};
elements = stripe.elements({ appearance, clientSecret: 'pi_3LpN6OGTck0sdjJJ3qk2PDzl_secret_PZ4EI0W264HiqirIrVmTOUE06' });
const paymentElement = elements.create("payment");
paymentElement.mount("#payment-element");

//API coin
fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&fbclid=IwAR2seyvVJZbkupG8ZP75m6uh_cqGH5NeTLcq2l4v7cAPKCPF_jh-_Kvc9dg")//, {mode: "no-cors"})
    // TODO -> fetch(('http://localhost:3000/market'))
    .then(Response => Response.json())
    .then(coinArr => {
        for (let i = 0; i < 10; i++) {
            displayInfo(coinArr[i])
        }
    })

//coinObj.data.forEach(x => console.log(x))
// .then(coinArr => console.log(coinArr))

function displayInfo(coinObj) {
    // -> console.log(coinObj)
    //-> doesn't work: console.log(coinObj[0])
    // console.log(coinObj.name)
    // console.log(coinObj.image)

    //->same as 
    //console.log(coinObj.name, coinObj.current_price, coinObj.image, coinObj.symbol)

    // check it on w3schools: for in, for of
    // for (x in obj)
    // x- is key
    const tr = document.createElement('tr')

    // -> add star img. created Favorit colomn
    td = document.createElement('td')
    tr.append(td)
    let emptyStar = document.createElement('img')
    emptyStar.src = './img/empty_star.png'
    // -> td.setAttribute('id', 'starButton')
    td.id = 'starButton'
    td.append(emptyStar)
    // -> Double click event and click event
    emptyStar.addEventListener("dblclick", () => {
        emptyStar.src = './img/empty_star.png'
        emptyStar.src = './img/filled_star.png'
        console.log("empty")
    })
    emptyStar.addEventListener("click", () => {
        emptyStar.src = './img/filled_star.png'
        emptyStar.src = './img/empty_star.png'
        console.log("emptyfiled")
    })

    // -> added coin Img
    td = document.createElement('td')
    tr.append(td)
    const coinImg = document.createElement('img')
    coinImg.className = "logo"
    td.append(coinImg)
    coinImg.src = coinObj.image

    // -> added symbol
    td = document.createElement('td')
    tr.append(td)
    td.textContent = coinObj.symbol

    // -> added coin Name
    td = document.createElement('td')
    tr.append(td)
    td.textContent = coinObj.name

    // -> added prices
    td = document.createElement('td')
    tr.append(td)
    td.textContent = `$ ${coinObj.current_price}`

    // -> added percantage
    td = document.createElement('td')
    tr.append(td)
    td.textContent = coinObj.price_change_percentage_24h

    



    // This made an ERROR:
    // td = document.createElement('td')
    // tr.textContent = coinObj.price_change_percentage_24h

    coinList.append(tr);
}