const BASE_URL ='https://thatcopy.pw/catapi/rest/';

const getCats = async ()=>{
    console.log("getCats foi chamado")
    const data = await fetch(BASE_URL)
    .then((result) => result.json())
    .catch((err) => console.log(err))
    console.log(data.webpurl)
    return data.url;
};

const imgCat = document.getElementsByTagName('img')[0];
const loadImg = async() =>{
    console.log("loadImg foi chamado")
    imgCat.src =  await getCats();
}

const btnCat = document.getElementById("mudar-gato");
btnCat.addEventListener('click',loadImg)

// try {
    //     console.log("getCats foi chamado")
    //     const data = await fetch(BASE_URL);
    //     const json = await data.json();
    //     console.log(json.webpurl)
    //     return json.webpurl;
//     } catch (error) {
    //         console.log(error.message)
    //     }