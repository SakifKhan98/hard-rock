//first suggested song
document.getElementById("search-button").addEventListener('click', function () {
    const query = document.getElementById("search-area").value;
    fetch(`https://api.lyrics.ovh/suggest/` + `${query}`)
    .then(response => response.json())
    .then(data => {   
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
        document.getElementById("lyric-title").innerText = `${songTitleOne}`;
        document.getElementById("full-lyric").innerText = `${data2.lyrics}`;
    })
    })

    //second suggested song
    document.getElementById("search-button").addEventListener('click', function () {
        const query = document.getElementById("search-area").value;
        fetch(`https://api.lyrics.ovh/suggest/` + `${query}`)
        .then(response => response.json())
        .then(data => {
            window.songTitleTwo = data.data[1].title;
            window.artistNameTwo = data.data[1].artist.name;
            document.getElementById("title-two").innerText = `${songTitleTwo}`;
            document.getElementById("artist-two").innerText = `${artistNameTwo}`;
        })
    })
    document.getElementById("button-two").addEventListener('click', function () {
    
        fetch(`https://api.lyrics.ovh/v1/` + `${artistNameTwo}/` + `${songTitleTwo}`)
        .then(response2 => response2.json())
        .then(data2 => {
            document.getElementById("lyric-title").innerText = `${songTitleTwo}`;
            document.getElementById("full-lyric").innerText = `${data2.lyrics}`;
        })
        })

    //third suggested song

    document.getElementById("search-button").addEventListener('click', function () {
        const query = document.getElementById("search-area").value;
        fetch(`https://api.lyrics.ovh/suggest/` + `${query}`)
        .then(response => response.json())
        .then(data => {
            window.songTitleThree = data.data[2].title;
            window.artistNameThree = data.data[2].artist.name;
            document.getElementById("title-three").innerText = `${songTitleThree}`;
            document.getElementById("artist-three").innerText = `${artistNameThree}`;
        })
    })
    document.getElementById("button-three").addEventListener('click', function () {
    
        fetch(`https://api.lyrics.ovh/v1/` + `${artistNameThree}/` + `${songTitleThree}`)
        .then(response2 => response2.json())
        .then(data2 => {
            document.getElementById("lyric-title").innerText = `${songTitleThree}`;
            document.getElementById("full-lyric").innerText = `${data2.lyrics}`;
        })
        })

    //fourth suggested song

    document.getElementById("search-button").addEventListener('click', function () {
        const query = document.getElementById("search-area").value;
        fetch(`https://api.lyrics.ovh/suggest/` + `${query}`)
        .then(response => response.json())
        .then(data => {
            window.songTitleFour = data.data[3].title;
            window.artistNameFour = data.data[3].artist.name;
            document.getElementById("title-four").innerText = `${songTitleFour}`;
            document.getElementById("artist-four").innerText = `${artistNameFour}`;
        })
    })
    document.getElementById("button-four").addEventListener('click', function () {
    
        fetch(`https://api.lyrics.ovh/v1/` + `${artistNameFour}/` + `${songTitleFour}`)
        .then(response2 => response2.json())
        .then(data2 => {
            document.getElementById("lyric-title").innerText = `${songTitleFour}`;
            document.getElementById("full-lyric").innerText = `${data2.lyrics}`;
        })
        })

    //fifth suggested song

    document.getElementById("search-button").addEventListener('click', function () {
        const query = document.getElementById("search-area").value;
        fetch(`https://api.lyrics.ovh/suggest/` + `${query}`)
        .then(response => response.json())
        .then(data => {
            window.songTitleFive = data.data[4].title;
            window.artistNameFive = data.data[4].artist.name;
            document.getElementById("title-five").innerText = `${songTitleFive}`;
            document.getElementById("artist-five").innerText = `${artistNameFive}`;
        })
    })
    document.getElementById("button-five").addEventListener('click', function () {
    
        fetch(`https://api.lyrics.ovh/v1/` + `${artistNameFive}/` + `${songTitleFive}`)
        .then(response2 => response2.json())
        .then(data2 => {
            document.getElementById("lyric-title").innerText = `${songTitleFive}`;
            document.getElementById("full-lyric").innerText = `${data2.lyrics}`;
        })
        })

    //sixth suggested song

    document.getElementById("search-button").addEventListener('click', function () {
        const query = document.getElementById("search-area").value;
        fetch(`https://api.lyrics.ovh/suggest/` + `${query}`)
        .then(response => response.json())
        .then(data => {
            window.songTitleSix = data.data[5].title;
            window.artistNameSix = data.data[5].artist.name;
            document.getElementById("title-six").innerText = `${songTitleSix}`;
            document.getElementById("artist-six").innerText = `${artistNameSix}`;
        })
    })
    document.getElementById("button-six").addEventListener('click', function () {
    
        fetch(`https://api.lyrics.ovh/v1/` + `${artistNameSix}/` + `${songTitleSix}`)
        .then(response2 => response2.json())
        .then(data2 => {
            document.getElementById("lyric-title").innerText = `${songTitleSix}`;
            document.getElementById("full-lyric").innerText = `${data2.lyrics}`;
        })
        })

    //seventh suggested song

    document.getElementById("search-button").addEventListener('click', function () {
        const query = document.getElementById("search-area").value;
        fetch(`https://api.lyrics.ovh/suggest/` + `${query}`)
        .then(response => response.json())
        .then(data => {
            window.songTitleSeven = data.data[6].title;
            window.artistNameSeven = data.data[6].artist.name;
            document.getElementById("title-seven").innerText = `${songTitleSeven}`;
            document.getElementById("artist-seven").innerText = `${artistNameSeven}`;
        })
    })
    document.getElementById("button-seven").addEventListener('click', function () {
    
        fetch(`https://api.lyrics.ovh/v1/` + `${artistNameSeven}/` + `${songTitleSeven}`)
        .then(response2 => response2.json())
        .then(data2 => {
            document.getElementById("lyric-title").innerText = `${songTitleSeven}`;
            document.getElementById("full-lyric").innerText = `${data2.lyrics}`;
        })
        })
    //eighth suggested song

    document.getElementById("search-button").addEventListener('click', function () {
        const query = document.getElementById("search-area").value;
        fetch(`https://api.lyrics.ovh/suggest/` + `${query}`)
        .then(response => response.json())
        .then(data => {
            window.songTitleEight = data.data[7].title;
            window.artistNameEight = data.data[7].artist.name;
            document.getElementById("title-eight").innerText = `${songTitleEight}`;
            document.getElementById("artist-eight").innerText = `${artistNameEight}`;
        })
    })
    document.getElementById("button-eight").addEventListener('click', function () {
    
        fetch(`https://api.lyrics.ovh/v1/` + `${artistNameEight}/` + `${songTitleEight}`)
        .then(response2 => response2.json())
        .then(data2 => {
            document.getElementById("lyric-title").innerText = `${songTitleEight}`;
            document.getElementById("full-lyric").innerText = `${data2.lyrics}`;
        })
        })

    //ninth suggested song

    document.getElementById("search-button").addEventListener('click', function () {
        const query = document.getElementById("search-area").value;
        fetch(`https://api.lyrics.ovh/suggest/` + `${query}`)
        .then(response => response.json())
        .then(data => {
            window.songTitleNine = data.data[8].title;
            window.artistNameNine = data.data[8].artist.name;
            document.getElementById("title-nine").innerText = `${songTitleNine}`;
            document.getElementById("artist-nine").innerText = `${artistNameNine}`;
        })
    })
    document.getElementById("button-nine").addEventListener('click', function () {
    
        fetch(`https://api.lyrics.ovh/v1/` + `${artistNameNine}/` + `${songTitleNine}`)
        .then(response2 => response2.json())
        .then(data2 => {
            document.getElementById("lyric-title").innerText = `${songTitleNine}`;
            document.getElementById("full-lyric").innerText = `${data2.lyrics}`;
        })
        })

    //tenth suggested song

    document.getElementById("search-button").addEventListener('click', function () {
        const query = document.getElementById("search-area").value;
        fetch(`https://api.lyrics.ovh/suggest/` + `${query}`)
        .then(response => response.json())
        .then(data => {
            window.songTitleTen = data.data[9].title;
            window.artistNameTen = data.data[9].artist.name;
            document.getElementById("title-ten").innerText = `${songTitleTen}`;
            document.getElementById("artist-ten").innerText = `${artistNameTen}`;
        })
    })
    document.getElementById("button-ten").addEventListener('click', function () {
    
        fetch(`https://api.lyrics.ovh/v1/` + `${artistNameTen}/` + `${songTitleTen}`)
        .then(response2 => response2.json())
        .then(data2 => {
            document.getElementById("lyric-title").innerText = `${songTitleTen}`;
            document.getElementById("full-lyric").innerText = `${data2.lyrics}`;
        })
        })