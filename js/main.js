//Create JSON Object
const singers = [
    {
        name: "Stevie Nicks",
        dob: "05/26/1948",
        songs: "Landslide, Edge of Seventeen, Crystal",
        birthp: "Phoenix, AZ"
    },
    {
        name: "Ed Sheeran",
        dob: "02/17/1991",
        songs: "Sapphire, Azizam, Thinking Out Loud",
        birthp: "Halifax, UK" 
    },
    {
        name: "Taylor Swift",
        dob: "12/13/1989",
        songs: "You Need to Calm Down, Style, Wildest Dreams",
        birthp: "West Reading, PA"
    },
    {
        name: "Adele",
        dob: "05/05/1988",
        songs: "Hello, Set Fire to the Rain, Chasing Pavements",
        birthp: "London, UK"
    },
    {
        name: "Teddy Swims",
        dob: "09/25/1992",
        songs: "Lose Control, Bad Dreams, Broke",
        birthp: "Conyers, GA"
    },
    {
        name: "Jelly Roll",
        dob: "12/04/1984",
        songs: "I Am Not OK, Amen, Save Me",
        birthp: "Nashville, TN"
    },
    {
        name: "Lainey Wilson",
        dob: "05/19/1992",
        songs: "Wildflowers and WildHorses, Out of Oklahoma, Hold My Halo",
        birthp: "Baskin, LA"
    }
]

//Add data to table

window.onload = function sTable() {
    const tableBody = document.getElementById("singersTable");

    singers.forEach(singer => {
        let row =`
        <tr>
            <td>${singer.name}</td>
            <td>${singer.dob}</td>
             <td>${singer.songs}</td>
            <td>${singer.birthp}</td>
        </tr>
        `;

        tableBody.innerHTML += row;
    });
}