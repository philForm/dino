
const injectElt = (itemTab, htmlAttribut) => {
    let elt = document.querySelector(htmlAttribut)
    for (let i = 0; i < itemTab.length; i++)
        elt.innerHTML += itemTab[i]
}

const dinos = [
    {
        articleId: "tyrannosaurus",
        title: "Le Tyrannosaure",
        description: "Tyrannosaurus, communément appelé tyrannosaure, est un genre éteint de       dinosaures théropodes appartenant à la famille des Tyrannosauridae et ayant vécu durant la partie supérieure du Maastrichtien, ...",
        image: "tyrannosaurus_rex.jpg",
        alt: "le tyrannosaure",
        wiki: 'https://fr.wikipedia.org/wiki/Tyrannosaurus'
    },
    {
        articleId: "stegosaurus",
        title: "Le Stegosaure",
        description: "Le stégosaure, nom vernaculaire du genre éteint Stegosaurus, désigne des dinosaures herbivores caractérisés par de grandes plaques osseuses alternées en deux rangées sur leur dos, de formes et tailles différant selon les espèces.",
        image: "stegosaurus.jpg",
        alt: "le stegosaure",
        wiki: 'https://fr.wikipedia.org/wiki/Stegosaurus'
    },
    {
        articleId: "diplodocus",
        title: "Le Diplodocus",
        description: "Diplodocus est un genre éteint de très grands dinosaures herbivores sauropodes de la famille des diplodocidés ayant vécu au Jurassique supérieur, il y a environ entre 154 et 152 Ma, en Amérique ...",
        image: "diplodocus.jpg",
        alt: "le diplodocus",
        wiki: 'https://fr.wikipedia.org/wiki/Diplodocus'
    },
    {
        articleId: "deinonychus",
        title: "Le Deinonychus",
        description: "Deinonychus est un genre éteint de dinosaures carnivores de la famille des Dromaeosauridae, dont une seule espèce est décrite : Deinonychus antirrhopus. Ce dinosaure long d'approximativement 3,40 mètres a vécu au Crétacé inférieur, entre environ 115 et 108 millions d'années.",
        image: "deinonychus.jpg",
        alt: "le deinonychus",
        wiki: 'https://fr.wikipedia.org/wiki/Deinonychus'
    },
    {
        articleId: "spinosaurus",
        title: "Le Spinosaure",
        description: "Spinosaurus est un genre de dinosaures théropodes appartenant à la famille éteinte des Spinosauridae et ayant vécu à l'Albien et au Cénomanien, dans ce qui est actuellement l'Afrique du Nord.",
        image: "spinosaurus_aegyptiacus.jpg",
        alt: "le spinosaure",
        wiki: 'https://fr.wikipedia.org/wiki/Spinosaurus'
    },
    {
        articleId: "caudipteryx",
        title: "Le Caudipteryx",
        description: "Caudipteryx est un genre éteint de petits dinosaures théropodes du clade des Oviraptorosauria et de la famille des Caudipteridae. Il vivait au Crétacé inférieur, il y a environ 125 millions d'années.",
        image: "caudipteryx.jpg",
        alt: "le caudipteryx",
        wiki: 'https://fr.wikipedia.org/wiki/Caudipteryx'
    }
]

let dinoArray = []

console.log(dinos)

console.log(dinos[1].title)


for (let item in dinos) {

    dinoArray.push(
        ` <article id="${dinos[item].articleId}">
                <div class="color">
                    <div>
                        <div>
                            <h2>${dinos[item].title}</h2>
                        </div>
                    </div>
                    <div class="align">
                        <p>
                            <img src="./images/${dinos[item].image}" alt="${dinos[item].alt}">
                        </p>
                        <div class="descrip">
                            <p>
                                ${dinos[item].description}
                            </p>
                        </div>
                    </div>
                    <p>
                        <a class="button" href="${dinos[item].wiki}" target="_blank">En savoir plus !</a>
                    </p>
                </div>
            </article>
        `
    )
}

injectElt(dinoArray, ".container>div>main")



