var fs = require('fs');
// const planets = [["Earth","Roob-43",106],["Earth","Kunde",73],["Earth","Block",68],["Roob-43","Earth",81],["Roob-43","Moen",64],["Roob-43","KDEKYVTB1",28],["Roob-43","BeautifulWoodchuck",78],["Kunde","Earth",74],["Kunde","King",49],["Kunde","CleanBee42",65],["Kunde","Klocko-72",22],["Block","Earth",54],["Block","B2N1JGPZ8",18],["Moen","Roob-43",24],["Moen","PinkMirror",37],["Moen","Wolff-238",38],["KDEKYVTB1","Daniel",99],["KDEKYVTB1","Hirthe-232",99],["KDEKYVTB1","McKenzie",66],["BeautifulWoodchuck","Roob-43",96],["BeautifulWoodchuck","Flatley",59],["BeautifulWoodchuck","FrighteningWheelchair",7],["King","Kunde",7],["King","McDermott",56],["King","Tromp",79],["King","Christiansen-247",69],["CleanBee42","U08Y4VWL2",97],["Klocko-72","Kunde",46],["Klocko-72","Schaefer",41],["Klocko-72","ElderberryZealous64",73],["Klocko-72","1GF23Y4C7",5],["B2N1JGPZ8","Block",79],["B2N1JGPZ8","Rosenbaum-83",51],["B2N1JGPZ8","Schiller",41],["PinkMirror","Moen",23],["PinkMirror","NicheTurtle75",66],["PinkMirror","Stark",3],["Wolff-238","Moen",19],["Wolff-238","TastyPug",41],["Wolff-238","Rogahn",37],["Daniel","KDEKYVTB1",22],["Daniel","ElderberryPrickling5",42],["Hirthe-232","Hirthe",38],["Hirthe-232","Botsford",62],["McKenzie","KDEKYVTB1",8],["McKenzie","ShinyChimpanzee917",67],["McKenzie","Q8DZ5T2F1",90],["McKenzie","DisturbedGuitar87",36],["Flatley","BeautifulWoodchuck",26],["Flatley","MU2ZD78V6",12],["Flatley","Renner-22",26],["FrighteningWheelchair","HostelFighter",82],["FrighteningWheelchair","Wiza",29],["FrighteningWheelchair","PCUJMF9A5",86],["McDermott","King",45],["McDermott","Murray-133",76],["Tromp","King",88],["Tromp","Kulas-262",17],["Tromp","DamsonColorful",16],["Christiansen-247","LRXB29ZE9",17],["Christiansen-247","HungryWasp",80],["Christiansen-247","ZOB41QG88",53],["U08Y4VWL2","CleanBee42",94],["U08Y4VWL2","5HCY18KL5",41],["U08Y4VWL2","Kihn-143",23],["Schaefer","Klocko-72",94],["Schaefer","Barrows-204",58],["Schaefer","Cummings-110",61],["Schaefer","JEI259730",81],["ElderberryZealous64","Klocko-72",7],["ElderberryZealous64","PlumDifficult492",83],["ElderberryZealous64","BowTalker0",6],["1GF23Y4C7","TZMLWFQO4",65],["1GF23Y4C7","Borer",79],["1GF23Y4C7","PanickedJackal",87],["Rosenbaum-83","B2N1JGPZ8",72],["Rosenbaum-83","CarefulSocks",34],["Rosenbaum-83","Hoeger-122",19],["Schiller","PJ7FJIPE6",51],["NicheTurtle75","PinkMirror",39],["NicheTurtle75","V2VPTYB55",95],["NicheTurtle75","Gaylord",45],["NicheTurtle75","WBE4R6F67",23],["Stark","Dach-15",52],["Stark","EUFJNBMO7",91],["Stark","6ELWXCTD0",29],["TastyPug","Wolff-238",17],["TastyPug","Jones-225",77],["Rogahn","Wolff-238",7],["Rogahn","FamousRestaurant7",27],["Rogahn","4HW5M3J37",72],["Rogahn","EL9T347N9",66],["ElderberryPrickling5","Daniel",17],["ElderberryPrickling5","Swift-279",19],["ElderberryPrickling5","Price-85",47],["Hirthe","Hirthe-232",52],["Hirthe","Feil-36",83],["Hirthe","Kassulke-254",97],["Botsford","GrapeRich42",92],["Botsford","Harvey-291",58],["ShinyChimpanzee917","McKenzie",99],["ShinyChimpanzee917","Ondricka-257",60],["ShinyChimpanzee917","Smith",84],["Q8DZ5T2F1","Hyatt-284",71],["DisturbedGuitar87","McKenzie",12],["DisturbedGuitar87","P61UV2PQ1",52],["DisturbedGuitar87","BlackcurrantOrange",17],["DisturbedGuitar87","Huel",40],["MU2ZD78V6","Flatley",98],["MU2ZD78V6","Rodriguez",75],["Renner-22","YoungRaven",25],["Renner-22","Schamberger",19],["HostelFighter","FrighteningWheelchair",71],["HostelFighter","Upton",57],["HostelFighter","Weimann-161",49],["HostelFighter","DamsonPlain",19],["Wiza","Gottlieb",27],["Wiza","Herzog-35",59],["PCUJMF9A5","BonesCooker6",5],["PCUJMF9A5","Feeney-256",39],["PCUJMF9A5","5LKOV4698",76],["Murray-133","McDermott",50],["Murray-133","Boehm",79],["Murray-133","Schoen",74],["Kulas-262","Tromp",69],["Kulas-262","Q2S9H0WH9",9],["Kulas-262","Donnelly",95],["DamsonColorful","Tromp",93],["DamsonColorful","Predovic",49],["DamsonColorful","Eden",54],["LRXB29ZE9","Christiansen-247",63],["LRXB29ZE9","HungryWasp",20],["HungryWasp","ZOB41QG88",53],["ZOB41QG88","PlumDifficult492",29],["5HCY18KL5","U08Y4VWL2",28],["5HCY18KL5","Kihn-143",19],["Kihn-143","V2VPTYB55",40],["Barrows-204","Schaefer",53],["Barrows-204","Cummings-110",2],["Cummings-110","JEI259730",48],["JEI259730","Schaefer",31],["PlumDifficult492","ElderberryZealous64",62],["PlumDifficult492","BowTalker0",8],["BowTalker0","Rosenbaum-83",25],["TZMLWFQO4","1GF23Y4C7",68],["TZMLWFQO4","Borer",72],["Borer","PanickedJackal",76],["PanickedJackal","TastyPug",99],["CarefulSocks","Rosenbaum-83",59],["CarefulSocks","Hoeger-122",12],["Hoeger-122","Wolff-238",55],["PJ7FJIPE6","Schiller",8],["PJ7FJIPE6","TastyPug",61],["V2VPTYB55","NicheTurtle75",20],["V2VPTYB55","Gaylord",28],["Gaylord","NicheTurtle75",35],["Gaylord","WBE4R6F67",57],["WBE4R6F67","NicheTurtle75",3],["Dach-15","Stark",66],["Dach-15","EUFJNBMO7",67],["EUFJNBMO7","Stark",41],["EUFJNBMO7","6ELWXCTD0",76],["6ELWXCTD0","Stark",44],["6ELWXCTD0","PlumDifficult492",40],["Jones-225","TastyPug",63],["FamousRestaurant7","Rogahn",15],["FamousRestaurant7","4HW5M3J37",8],["4HW5M3J37","Rogahn",58],["4HW5M3J37","EL9T347N9",89],["EL9T347N9","PinkMirror",86],["Swift-279","ElderberryPrickling5",39],["Swift-279","Price-85",62],["Price-85","ElderberryPrickling5",39],["Feil-36","Hirthe",24],["Feil-36","Kassulke-254",67],["Kassulke-254","Jones-225",17],["GrapeRich42","Botsford",82],["GrapeRich42","Harvey-291",32],["Harvey-291","Predovic",75],["Ondricka-257","ShinyChimpanzee917",24],["Ondricka-257","Smith",44],["Smith","Rodriguez",55],["Hyatt-284","Q8DZ5T2F1",77],["Hyatt-284","Murray-133",54],["P61UV2PQ1","DisturbedGuitar87",7],["P61UV2PQ1","BlackcurrantOrange",20],["BlackcurrantOrange","DisturbedGuitar87",32],["BlackcurrantOrange","Huel",20],["Huel","Moen",36],["Rodriguez","MU2ZD78V6",48],["YoungRaven","Renner-22",6],["YoungRaven","Schamberger",77],["Schamberger","B2N1JGPZ8",85],["Upton","HostelFighter",44],["Upton","Weimann-161",45],["Weimann-161","HostelFighter",8],["Weimann-161","DamsonPlain",75],["DamsonPlain","Kulas-262",59],["Gottlieb","Wiza",60],["Gottlieb","Herzog-35",72],["Herzog-35","Murray-133",31],["BonesCooker6","PCUJMF9A5",47],["BonesCooker6","Feeney-256",7],["Feeney-256","5LKOV4698",30],["5LKOV4698","JEI259730",66],["Boehm","Murray-133",57],["Boehm","Schoen",44],["Schoen","PinkMirror",87],["Q2S9H0WH9","Kulas-262",7],["Q2S9H0WH9","Donnelly",21],["Donnelly","Kulas-262",32],["Predovic","DamsonColorful",86],["Predovic","Eden",77],["Eden","DamsonColorful",88]]

const planets = [];

// function fetchPlanets() {
//     const data = await getData("https://datsedenspace.datsteam.dev/player/universe")
//     const jsonData = JSON.stringify(JSON.parse(data)["universe"]);

//     fs.writeFile("test.txt", jsonData, function(err) {
//         if (err) {
//             console.log(err);
//         }
//     });
// }


console.log(planets);

// var jsonPlanets = JSON.parse(planets);

function createWeightedGraphOneWay(passages) {
    const weightedGraph = {};

    passages.forEach(([source, target, weight]) => {
        if (!weightedGraph[source]) {
            weightedGraph[source] = [];
        }
        weightedGraph[source].push({ target: String(target), weight: weight });
    });

    return weightedGraph;
}

function findClosestPath(weightedGraph, startPlanet, endPlanet) {
    const distances = {};
    const previous = {};
    const visited = {};
    const queue = [startPlanet];
    distances[startPlanet] = 0;

    while (queue.length) {
        const currentPlanet = queue.shift();
        visited[currentPlanet] = true;

        if (currentPlanet === endPlanet) {
            break;
        }

        if (!weightedGraph[currentPlanet]) {
            continue;
        }

        for (const { target, weight } of weightedGraph[currentPlanet]) {
            const totalDistance = distances[currentPlanet] + weight;

            if (distances[target] === undefined || totalDistance < distances[target]) {
                distances[target] = totalDistance;
                previous[target] = currentPlanet; // Store the previous planet for path reconstruction
            }

            if (!visited[target]) {
                queue.push(target);
            }
        }

        queue.sort((a, b) => distances[a] - distances[b]);
    }

    // Reconstructing the path
    let current = endPlanet;
    const path = [endPlanet];

    while (current !== startPlanet) {
        current = previous[current];
        path.unshift(current);
    }

    return path;
}

const weightedGraphOneWay = createWeightedGraphOneWay(planets);
console.log(weightedGraphOneWay);

console.log(weightedGraphOneWay["Weimann-161"]);
console.log(weightedGraphOneWay["HostelFighter"]);
console.log(weightedGraphOneWay["DamsonPlain"]);
console.log(weightedGraphOneWay["Kulas-262"]);
console.log(weightedGraphOneWay["Tromp"]);
console.log(weightedGraphOneWay["DamsonColorful"]);
console.log(weightedGraphOneWay["Eden"]);



console.log(findClosestPath(weightedGraphOneWay, "Weimann-161", "Eden"));