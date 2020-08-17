document.getElementById("search-button").addEventListener('click', function () {
    const artistName = document.getElementById("search-area").value;
    console.log(artistName);
    fetch(`https://api.lyrics.ovh/suggest/` + `${artistName}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let mediaData = data.data[0].title;
        console.log(mediaData);
        const songTitleOne = data.data[0].title;
        const artistNameOne = data.data[0].artist.name;
        document.getElementById("title-one").innerText = `${songTitleOne}`;
        document.getElementById("artist-one").innerText = `${artistNameOne}`;
        fetch(`https://api.lyrics.ovh/v1/` + `${artistNameOne}/` + `${songTitleOne}`)
        .then(response2 => response2.json())
        .then(data2 => {
            console.log(data2);
        })

        // const temperatureData = data.main.temp;
        // document.getElementById('temperature').innerText = `${temperatureData} \xB0C`;
        // document.getElementById("city-name").innerText = data.name;
        // document.getElementById("feelsLike-temp").innerText = `Feels Like ${data.main.feels_like} \xB0C`;
        // document.getElementById("weather-description").innerText = data.weather[0].description;
        // document.getElementById("humidity").innerText = `Humidity ${data.main.humidity} %`;
        // document.getElementById("wind-speed").innerText = `Wind Speed ${data.wind.speed} km/h`;
    })
})