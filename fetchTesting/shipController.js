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

    return path.slice(1);
}

function getGreedyTraversalOrder(startPlanet, weightedGraph) {
    const visited = {};
    const traversalOrder = [];
    const stack = [startPlanet];

    while (stack.length > 0) {
        const currentPlanet = stack.pop();

        if (!visited[currentPlanet]) {
            visited[currentPlanet] = true;
            traversalOrder.push(currentPlanet);

            const neighbors = weightedGraph[currentPlanet];

            if (neighbors) {
                neighbors.sort((a, b) => a.weight - b.weight);

                for (const neighbor of neighbors) {
                    if (!visited[neighbor.target]) {
                        stack.push(neighbor.target);
                    }
                }
            }
        }
    }

    return traversalOrder;
}

async function getData(url, post=false, body=null) {
    const serverUrl = "https://datsedenspace.datsteam.dev";
    const Token = "660a858a24615660a858a24619"
    
    const response = await fetch(serverUrl + url, {
        method: post?'POST':'GET',
        body,
        headers: {
            "X-Auth-Token": Token
        }
    });
    const res = await response.text();
    return(res);
}

async function getPlanets() {
    const weightedGraph = {};

    const universeData = await getData("/player/universe");
    const planets = JSON.parse(universeData)["universe"];

    planets.forEach(([source, target, weight]) => {
        if (!weightedGraph[source]) {
            weightedGraph[source] = [];
        }
        weightedGraph[source].push({ target: String(target), weight: weight });
    });

    return(weightedGraph);
}

async function getCurrentPlanet() {
    const universeData = await getData("/player/universe");
    const shipData = JSON.parse(universeData)["ship"];
    return(shipData.planet.name);
}

async function travel(paths, destination) {
    const currentPlanet = await getCurrentPlanet();
    const pathToDestination = await findClosestPath(paths, currentPlanet, destination)

    const path = JSON.stringify({"planets": pathToDestination})
    console.log(path);
    const data = await getData("/player/travel", true, path)
    console.log(data);
}

async function reset() {
    const serverUrl = "https://datsedenspace.datsteam.dev";
    const Token = "660a858a24615660a858a24619"
    
    const response = await fetch(serverUrl + '/player/reset', {
        method: "DELETE",
        headers: {
            "X-Auth-Token": Token
        }
    });

    const res = await response.text();
    return(res);
}

async function mainFunc () {
    // const paths = await getPlanets();
    // console.log(paths);

    // const pathToEden = await findClosestPath(paths, "Earth", "Eden");
    // console.log(pathToEden);

    // console.log(getGreedyTraversalOrder(paths, "Earth"));

    // travel(paths, "Eden");

    // const currentPlanet = await getCurrentPlanet();
    // console.log(currentPlanet);

    // const resetInfo = await reset();
    // console.log(resetInfo);
}

mainFunc();