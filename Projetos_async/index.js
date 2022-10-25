const BASE_URL = 'https://api.thecatapi.com/v1/images/search';

const getCats = async ()=>{
    try {

    const data = await fetch(BASE_URL)
        .then((result) => result.json())
        .catch((err) => console.log(err))
    console.log(data)
    return data
        } catch (error) {
            console.log(error.message)
        }
};

const imgCat = document.getElementsByTagName('img')[0];
const loadImg = async() =>{
    let objeto =  await getCats();
    var result = objeto.map(function(obj) {
        return Object.keys(obj).map(function(key) {
            return obj[key];
        });
    });
    imgCat.src = result[0][1];
}

const btnCat = document.getElementById("mudar-gato");
btnCat.addEventListener('click',loadImg)



