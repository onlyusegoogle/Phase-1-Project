
fetch ("https://api.binance.com")
.then (Response => Response.json())
.then (coinArr => coinList (coinArr))

