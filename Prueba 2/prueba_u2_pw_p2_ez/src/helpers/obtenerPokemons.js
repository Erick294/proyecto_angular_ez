const obtenerPokemons = async () => {
    const vectorNombres = await convertirVectorNombres(obtenerVectorNumerico()); 
    const vectorObjetos = await convertirVectorNombres(obtenerVectorNumerico());
    return vectorObjetos;
}

function getNumeroAleatorio(min,max){
    max++;
    return Math.floor(Math.random()*(max-min)+min);
}

const obtenerVectorNumerico = () => {
    const arregloPokemonNumero = [getNumeroAleatorio(1,649),getNumeroAleatorio(1,649),getNumeroAleatorio(1,649),getNumeroAleatorio(1,649),getNumeroAleatorio(1,649)];
    return arregloPokemonNumero;
}

const convertirVectorNombres = async ([p1,p2,p3,p4, p5]=[]) =>{
    const data1 = await obtenerNombreAPI(p1);
    const data2 = await obtenerNombreAPI(p2);
    const data3 = await obtenerNombreAPI(p3);
    const data4 = await obtenerNombreAPI(p4);
    const data5 = await obtenerNombreAPI(p5);
    return [{nombre:data1.name, id:data1.id},
            {nombre:data2.name, id:data2.id},
            {nombre:data3.name, id:data3.id},
            {nombre:data4.name, id:data4.id},
            {nombre:data5.name, id:data5.id}];
}

const obtenerNombreAPI = async (id) =>{
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r=>r.json());
    return data;
}


//se necesita otro metodo fachada (cubre el metodo original) 
//para exportar (exponer) los metodos necesarios
const getPokemons = async() => {
    return await obtenerPokemons();
}

//se exporta el metodo
export default getPokemons;