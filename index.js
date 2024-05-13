const express = require('express')
const os = require("os")
const app = express()
const port = 80

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('public'));

const pokeneas = [
    {
        id: 1,
        nombre: "Charizard",
        altura: "5 m",
        habilidad: "Fuego",
        imagen: "https://storage.googleapis.com/pokenea1/_252a1685-21cd-41e6-b995-aebc015c950f.jfif",
        frase_filosofica: "Uy ñero venga que aca le tengo el fuego"
    },
    {
        id: 2,
        nombre: "Bulbasaur",
        altura: "2 m",
        habilidad: "Planta",
        imagen: "https://storage.googleapis.com/pokenea1/_3b0018b9-b226-4dec-b0c0-0338654c9298.jfif",
        frase_filosofica: "Tengo meras matas creciendo en mi jardin"
    },
    {
        id: 3,
        nombre: "Squirtle",
        altura: "1.5 m",
        habilidad: "Agua",
        imagen: "https://storage.googleapis.com/pokenea1/_4057823c-620b-44b1-b285-c4e0f3d660cb.jfif",
        frase_filosofica: "Socio cojala suave"
    },
    {
        id: 4,
        nombre: "Charizard mega ñero",
        altura: "2.5 m",
        habilidad: "FuegoÑero",
        imagen: "https://storage.googleapis.com/pokenea1/_5a917d6c-8dd4-42d3-a3cf-a94a7fc66188.jfif",
        frase_filosofica: "No se haga perjudicar"
    },
    {
        id: 5,
        nombre: "Rattata",
        altura: "3 m",
        habilidad: "Ñormal",
        imagen: "https://storage.googleapis.com/pokenea1/_6ad1ba5e-726d-4a2b-9464-e0c999471c4b.jfif",
        frase_filosofica: "Bacano con elegancia"
    },
    {
        id: 6,
        nombre: "Ditto",
        altura: "1 m",
        habilidad: "Vallenato",
        imagen: "https://storage.googleapis.com/pokenea1/_76a0afc7-4d35-4600-90df-97455d0bac6a.jfif",
        frase_filosofica: "Viene la paloma en su palomar"
    },
    {
        id: 7,
        nombre: "Eevee",
        altura: "2 m",
        habilidad: "Patriota",
        imagen: "https://storage.googleapis.com/pokenea1/_a6559dbf-4525-48d2-a8d7-ed4312052f0a.jfif",
        frase_filosofica: "Nací por mi madre, morire por mi patria, Viva colombia, viva Falcao"
    },
    {
        id: 8,
        nombre: "Pikachu",
        altura: "3 m",
        habilidad: "Tinta",
        imagen: "https://storage.googleapis.com/pokenea1/_f740eb31-8c97-4010-9172-1bc4e5e4cd95.jfif",
        frase_filosofica: "La tinta corre por mi venas"
    },
];

app.get('/api/pokenea', (req, res) => {
    const randomIndex = Math.floor(Math.random() * pokeneas.length);
    const randomPokenea = pokeneas[randomIndex];
    const containerId = os.hostname();

    const pokeneaData = {
        id: randomPokenea.id,
        nombre: randomPokenea.nombre,
        altura: randomPokenea.altura,
        habilidad: randomPokenea.habilidad,
        containerId: containerId
    };

    res.json(pokeneaData);
});

app.get('/pokenea', (req, res) => {
    const randomIndex = Math.floor(Math.random() * pokeneas.length);
    const randomPokenea = pokeneas[randomIndex];
    const imageSrc = randomPokenea.imagen;
    const frase_filosofica = randomPokenea.frase_filosofica;
    const containerId = os.hostname();

    res.render('pokenea', { imageSrc, frase_filosofica, containerId});
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})