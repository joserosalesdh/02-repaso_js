const getImagen = async () => {
  try {
    const apiKey = "f0shnpakPTR6KEHildICW2qj4onA0tRk";
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );

    const { data } = await resp.json();

    const { url } = await data.images.original;

    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    // Manejo del error
  }
};

getImagen();

// peticion
//   .then((resp) => resp.json())
//   .then(({ data }) => {
//     const { url } = data.images.original;
//     const img = document.createElement("img");
//     img.src = url;
//     document.body.append(img);
//   })
//   .catch(console.warn);
