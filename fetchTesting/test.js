const Token = "660a858a24615660a858a24619"

async function fetchUniverse() {
    const response = await fetch("https://datsedenspace.datsteam.dev/player/universe", {
        headers: {
            "X-Auth-Token": Token
        }
    });
    const res = await response.json();
    console.log(res);
}

async function fetchShip() {
    const response = await fetch("https://datsedenspace.datsteam.dev/player/universe", {
        headers: {
            "X-Auth-Token": Token
        }
    });
    const res = await response.text();
    console.log(JSON.parse(res)["ship"]);
}

async function goTo() {
    const response = await fetch
}

fetchShip();