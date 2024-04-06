import fetch from "node-fetch";
import garbage from "./garbage.mjs";

async function getData(url, post=false, body=null) {
    const Token = "660a858a24615660a858a24619"
    const response = await fetch(url, {
        method: post?'POST':'GET',
        body,
        headers: {
            "X-Auth-Token": Token
        }
    });
    const res = await response.text();
    return(JSON.parse(res));
}

async function getAll() {
    const data = await getData("https://datsedenspace.datsteam.dev/player/universe")
    console.log(JSON.stringify(data));
}

async function travel() {
    const data = await getData("https://datsedenspace.datsteam.dev/player/travel", true, `{"planets": ["KDEKYVTB1"]}`)
    console.log(garbage(data))
}

//getAll();
//travel();

