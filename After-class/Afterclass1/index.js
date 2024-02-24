document.addEventListener("DOMContentLoaded", function(){
    let characterlist = document.getElementById('character-list');

    fetch("https://rickandmortyapi.com/api/character")
    .then((response)=>response.json())
    .then((data) => {
        data.results.forEach(character => {
                let characterElement = document.createElement('div');
                characterElement.classList.add('character');

                characterElement.innerHTML = `
                <img src="${character.image}" alt="${character.name}">
                <p>${character.name}</p>`;

                characterlist.appendChild(characterElement);



    
        });
    });
});

//con esto ves que te trae: .then((response)=>console.log(response))
//el response.json() te convierte todo a json, y se muestra correctamente