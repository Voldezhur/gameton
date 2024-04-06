const Token = "660a858a24615660a858a24619"
var fs = require('fs');

async function getData(url) {
    const response = await fetch(url, {
        headers: {
            "X-Auth-Token": Token
        }
    });
    const res = await response.text();
    return res;
}

async function writeUniverse() {
    const data = await getData("https://datsedenspace.datsteam.dev/player/universe")
    const jsonData = JSON.stringify(JSON.parse(data)["universe"]);

    fs.writeFile("test.txt", jsonData, function(err) {
        if (err) {
            console.log(err);
        }
    });
}

async function fetchShip() {
    const data = await getData("https://datsedenspace.datsteam.dev/player/universe")
    console.log(JSON.parse(data)["ship"]);
}

async function goTo() {
    const res = await fetch("https://datsedenspace.datsteam.dev/player/universe", {
        headers: {
            "X-Auth-Token": Token
        }
    });

    const universe = await res.text();
    const planets = JSON.parse(universe)["universe"];
    console.log(planets);
    
    // Запрос на полет
    const flightRes = await fetch("https://datsedenspace.datsteam.dev/player/travel", {
        method: 'POST',
        headers: {
            "X-Auth-Token": Token
        },
        body: {
            "planets": [
                "Daniel"
            ]
        }
    });

    const flightResponse = await flightRes.text();
    console.log(flightResponse);
}

// goTo();
// fetchShip();

writeUniverse();