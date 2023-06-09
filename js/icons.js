
const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: ''
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: ''
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: ''
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: ''
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: ''
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: ''
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: ''
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: ''
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: ''
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: ''
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: ''
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: ''
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: ''
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: ''
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: ''
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: ''
    }
];
//funzione per generare colori randomicamente.
//nel array di oggeti prima,dobbiammo svuotare il contenuto asegnato a "color".
function getRandomColor() {
    const hexIcons = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexIcons[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // assegnare un colore casuale a ciascuna icona
  icons.forEach(icon => {
    icon.color = getRandomColor();
  });

//funzione per creare le cards
function creatCard(filterIcons) {
    const card = document.querySelector('.row');
    card.innerHTML = '';
    let content = '';

filterIcons.forEach(element => {
    const tpl = ` <div class="col-12 col-sm-6 col-md-4 col-lg-3">
    <div class="card icon-card">
        <div class="card-body d-flex flex-column 
        justify-content-center align-items-center fs-3 py-4"
        style="color:${element.color}">
        <i class="${element.prefix}${element.family} ${element.prefix}${element.name}"></i>
        <span class="fw-bold" >${element.name}</span>
        </div>
    </div>
    </div>`;
    content += tpl;
});
card.innerHTML = content;
}
//funzione per filtrare le icone
function filterIcons(icons, type) {
    return icons.filter(icon => {
        return icon.type === type 
    })
}

// funzione per aggiungere select alla pagina
function addSelect() {
    const select = document.getElementById('type-select');
    const types = ['animal', 'vegetable', 'user'];

    types.forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.text = type
        select.add(option);
    });

    select.addEventListener('change', function() {
        const selectedType = this.value;
        let filteredIcons;
        if (selectedType === "all" || selectedType === icons.type) {        
            filteredIcons = icons;
        } else {
            filteredIcons = filterIcons(icons, selectedType);
        }
        creatCard(filteredIcons);
    });
}
    addSelect();
    creatCard(icons);


