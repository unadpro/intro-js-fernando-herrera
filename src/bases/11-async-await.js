const getImagen = async () => {
  try {
    const apiKey = "MGoccerr8MHzmtBp0PZuIUQ3aGGwMEyA";
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );

    const { data } = await resp.json();

    console.log(data);

    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;

    document.body.append(img);
  } catch (error) {
    console.log(error);
  }
};

getImagen();
