let url = "https://api.giphy.com/v1/gifs/random?api_key=JFxM4euCNTAHbogxeVRFErjY7WPPjv4r&tag=burrito";

const obtenerUsuarios = async () => {
  try {
    let response = await fetch(url);

    if(!response.ok)
    {
        throw new Error("Ourrio un Error al realizar la petición")
    }

    let data = await response.json();

    console.table(data);
    pintarUsuarios(data);

  } catch (error) 
  {
    console.log(error);
  }
};

