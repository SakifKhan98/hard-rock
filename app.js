document.getElementById("search-button").addEventListener('click', function () {
    const artistName = document.getElementById("search-area").value;
    console.log(artistName);
    fetch(`https://api.lyrics.ovh/suggest/` + `${artistName}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let mediaData = data.data[0].title;
        console.log(mediaData);
        
        window.songTitleOne = data.data[0].title;
        window.artistNameOne = data.data[0].artist.name;
        document.getElementById("title-one").innerText = `${songTitleOne}`;
        document.getElementById("artist-one").innerText = `${artistNameOne}`;
    })
})
document.getElementById("button-one").addEventListener('click', function () {

    fetch(`https://api.lyrics.ovh/v1/` + `${artistNameOne}/` + `${songTitleOne}`)
    .then(response2 => response2.json())
    .then(data2 => {
        console.log(data2);
        document.getElementById("lyric-title").innerText = `${songTitleOne}`;
        document.getElementById("full-lyric").innerText = `${data2.lyrics}`;
    })
    })