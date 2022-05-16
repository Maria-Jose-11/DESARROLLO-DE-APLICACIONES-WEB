let urlG = "https://jsonplaceholder.typicode.com/users";

const obtenerUsuario = async () => {
  try {
    let response = await fetch(urlG);

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


obtenerUsuario();

const pintarUsuarios = (data) => 
{
  let body = "";
  for (let i = 0; i < data.length; i++) 
  {
    body += `<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td></tr>`;
  }

  document.getElementById("data").innerHTML = body;
};