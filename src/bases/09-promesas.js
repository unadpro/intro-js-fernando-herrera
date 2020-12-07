//Promesas JS

import {getHeroeById,getHeroesByOwner} from './bases/08-import-export'
/*
const promesa = new Promise((resolve,reject) =>{
    setTimeout(() => {

        //console.log('2 Segundos despues');
        //resolve();
        const hero1 = getHeroeById(2)
        //console.log(hero1);

        const hero2 = getHeroesByOwner('Marvel')
        //console.log(hero2);

        resolve(hero2)
        //resolve({hero1,hero2});
        //reject('No se pudo encontrar el heroe');

    }, 2000);

});

promesa.then((heroe)=>{
    console.log('heroe',heroe);
}).catch(err => console.warn(err));

*/

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
    
            //console.log('2 Segundos despues');
            //resolve();
            const hero1 = getHeroeById(id)
            //console.log(hero1);
    
            //const hero2 = getHeroesByOwner('Marvel')
            //console.log(hero2);

            if (hero1){
                resolve(hero1)

            } else{

                reject(`Error el heroe ${id} no existe`)
            } 
    
            //resolve(hero1)
            //resolve({hero1,hero2});
            //reject('No se pudo encontrar el heroe');
    
        }, 2000);
    
    });

    
}

getHeroeByIdAsync(2)
    .then(hr => console.log('Heroe', hr))
    .catch(err => console.warn(err));


    getHeroeByIdAsync(2)
    .then(hr => console.log )
    .catch(err => console.warn);