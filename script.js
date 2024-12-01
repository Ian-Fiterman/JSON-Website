let contentGridElement = document.getElementById("contentGrid");

let jsonDatabase = [
    {
        title: "Black Square",
        picture_url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Kazimir_Malevich%2C_1915%2C_Black_Suprematic_Square%2C_oil_on_linen_canvas%2C_79.5_x_79.5_cm%2C_Tretyakov_Gallery%2C_Moscow.jpg/1280px-Kazimir_Malevich%2C_1915%2C_Black_Suprematic_Square%2C_oil_on_linen_canvas%2C_79.5_x_79.5_cm%2C_Tretyakov_Gallery%2C_Moscow.jpg",
        artist: "Kazimir Malevich",
        year: 1915,
        medium: "Oil on canvas",
        location: "Tretyakov Gallery",
        city: "Moscow",
        artwork_link:
            "https://www.tate.org.uk/art/artists/kazimir-malevich-1561/five-ways-look-malevichs-black-square",
    },
    {
        title: "Composition with Red, Blue and Yellow",
        picture_url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Piet_Mondriaan%2C_1930_-_Mondrian_Composition_II_in_Red%2C_Blue%2C_and_Yellow.jpg/1280px-Piet_Mondriaan%2C_1930_-_Mondrian_Composition_II_in_Red%2C_Blue%2C_and_Yellow.jpg",
        artist: "Piet Mondrian",
        year: 1931,
        medium: "Oil on canvas",
        location: "Kunsthaus Zürich",
        city: "Zurich",
        artwork_link:
            "https://www.dailyartmagazine.com/masterpiece-story-piet-mondrian-composition-with-red-blue-and-yellow/",
    },
    {
        title: "Homage to the Square: Apparition",
        picture_url:
            "https://www.guggenheim.org/wp-content/uploads/1959/01/61.1590_ph_web-1.jpg",
        artist: "Josef Albers",
        year: 1943,
        medium: "Oil on masonite",
        location: "Solomon R. Guggenheim Museum",
        city: "New York City",
        artwork_link: "https://www.guggenheim.org/artwork/173",
    },
    {
        title: "Spectrum Colors Arranged by Chance II",
        picture_url:
            "https://www.moma.org/media/W1siZiIsIjUyODAyNSJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MTQ0MFx1MDAzZSJdXQ.jpg?sha=0964c430f3efa1b4",
        artist: "Ellsworth Kelly",
        year: 1951,
        medium: "Cut-and-pasted color-coated paper and pencil on four sheets of paper",
        location: "Museum of Modern Art",
        city: "New York City",
        artwork_link: "https://www.moma.org/collection/works/37202",
    },
];

for (let i = 0; i < jsonDatabase.length; i++) {
    createElementProper(jsonDatabase[i]);
}

function createElementProper(incomingJSON) {
    let newContentElement = document.createElement("DIV");
    newContentElement.classList.add("contentItem");

    let newContentTitle = document.createElement("H3");
    let artworkLink = document.createElement("A");
    artworkLink.href = incomingJSON["artwork_link"];
    artworkLink.target = "_blank";
    artworkLink.innerText = incomingJSON["title"];
    newContentTitle.appendChild(artworkLink);
    newContentElement.appendChild(newContentTitle);

    let newImage = document.createElement("IMG");
    newImage.src = incomingJSON["picture_url"];
    newContentElement.appendChild(newImage);

    let newContentDetails = document.createElement("P");
    newContentDetails.innerText = `${incomingJSON["artist"]}, ${incomingJSON["year"]} - ${incomingJSON["medium"]}, located at the ${incomingJSON["location"]} in ${incomingJSON["city"]}`;
    newContentElement.appendChild(newContentDetails);

    contentGridElement.appendChild(newContentElement);
}
