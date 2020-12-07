const apiKey = 'MGoccerr8MHzmtBp0PZuIUQ3aGGwMEyA';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion.then( (resp) => {
//     //console.log(resp);
//     resp.json().then((data)=> {
//         console.log(data);
//     })
// }).catch(console.warn)

//promesas en cadena
peticion
.then( resp => resp.json())
.then(({data})=> { 
    //console.log(data.images.original.url);
    const {url} = data.images.original;

    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);

})
.catch(console.warn);


