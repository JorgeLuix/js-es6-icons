
const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    }
];

//funzione per creare le cards

function creatCard(filterIcons) {
    const card = document.querySelector('.row');
    card.innerHTML = '';
    let content = '';

filterIcons.forEach(element => {
    const tpl = ` <div class="col-12 col-sm-6 col-md-4 col-lg-3">
    <div class="card">
        <div class="card-body d-flex flex-column 
        justify-content-center align-items-center fs-3 py-4"
        style="color:${element.color}">
        <i class="${element.prefix}${element.family} ${element.prefix}${element.name}"></i>
        <span>${element.name}</span>
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
    const types = ['all', 'animal', 'vegetable', 'user'];

    types.forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.text = type
        select.add(option);
    });

    select.addEventListener('change', function() {
        const selectedType = this.value;
        let filteredIcons;
        if (selectedType === "all") {        
            filteredIcons = icons;
        } else {
            filteredIcons = filterIcons(icons, selectedType);
        }
        creatCard(filteredIcons);
    });
}
    addSelect();
    creatCard(icons);


