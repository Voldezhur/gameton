async function fetchUniverse() {
    const response = await fetch("https://datsedenspace.datsteam.dev/player/universe", {
        headers: {
            "X-Auth-Token": "660a858a24615660a858a24619"
        }
    });
    const res = await response.json();
    return (res);
}

fetchUniverse();