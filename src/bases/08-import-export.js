import{heroes} from '../data/heroes'

//import heroes2,{owner} from './data/heroes2';

//import heroes2 from './data/heroes2' //segunda forma de hacer la exportacion

//const { heroes } = require("./data/heroes");

const getHeroeById = (id) =>{
    return heroes.find( (c) => c.id === id)
}

//console.log(getHeroeById(2));

const getHeroesByOwner = (owner) => heroes.filter((f) => f.owner === owner );

//console.log(getHeroesByOwner('Marvel'));

export {getHeroeById,getHeroesByOwner}

