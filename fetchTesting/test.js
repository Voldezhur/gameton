async function fetchTest() {
    const response = await fetch("http://localhost:5000/testing");
    const res = await response.json();
    console.log(res);
}

fetchTest();