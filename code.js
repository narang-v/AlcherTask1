const searchbar = document.getElementById('searchbar');
filter = searchbar.value.toLowerCase();
let ch = [];
console.log(filter);

const loadcharacters = async() => {
    try {
        const res = await fetch('https://www.themoviedb.org/');
        ch = await res.json();
        displaycharacters(ch);
        console.log(ch);
    } catch (err) {
        console.error(err);
    }
};









/*let ch = [];

searchbar.addEventListener('keyup', (e) => {
    const searchstring = e.target.value.toLowercase();

    const filteredcharacters = ch.filter((character) => {
        return (character.name.toLowercase().includes(searchstring));
    });
    displaycharacters(filteredcharacters);
});

const loadcharacters = async() => {
    try {
        const res = await fetch('https://www.themoviedb.org/');
        ch = await res.json();
        displaycharacters(ch);
        console.log(ch);
    } catch (err) {
        console.error(err);
    }
};

const displaycharacters = (characters) => {
    const htmlstring = characters
        .map((character) => {
            return <li class = "character" >
                <
                h2 > $ { character.name } < /h2> <
                img src = "${character.image}" > < /img> <
                /li>;
        })
        .join('');
};

loadcharacter();*/