function getInfo() {
    let stopId = document.getElementById("stopId").value;
    let stopNameDiv = document.getElementById("stopName");
    let busesDiv = document.getElementById("buses");
    busesDiv.innerHTML = ''; 

    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw "Error";
            }
            return response.json();
        })
        .then(data => {
            let busStopName = data.name;
            stopNameDiv.textContent = busStopName;

            Object.entries(data.buses).forEach(([busId, time]) => {
                let li = document.createElement("li");
                li.textContent = `Bus ${busId} arrives in ${time} minutes`;
                busesDiv.appendChild(li);
            });
        })
        .catch(error => {
            stopNameDiv.textContent = "Error";
        });
}