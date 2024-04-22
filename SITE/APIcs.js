// Credenciales de usuario
//const usuario = "JonayRA";
//const contraseña = "Thalesulaval1!";

// URL del servicio web
const url1 = "https://cognitiveshadow.com/#/login";

// Datos de inicio de sesión
const datosInicioSesion = {
  Username: usuario,
  Password: contraseña
};

// Configuración de la solicitud
const opcionesSolicitud = {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
    // Puedes necesitar agregar más encabezados según los requisitos del servicio web
  },
  body: JSON.stringify(datosInicioSesion)
};

// Realizar la solicitud
fetch(url1, opcionesSolicitud)
  .then(response => {
    // console.log(response); 
    return response.text();
  })
  .then(data => {
    // Manipular la respuesta del servidor
    console.log(data);

    // console.log("Contenido de la respuesta:", data);

    if (data.authenticated) {
      console.log("Successful login");
      // Puedes realizar más acciones después de un inicio de sesión exitoso
    } else {
      // console.error("Error al iniciar sesión:", data.error);
    }


  })
  .catch(error => {
    console.error("Error al iniciar sesión:", error);
  });



let myheaders = new Headers();

  // headers.set('Authorization', 'Basic ' + btoa(usuario + ":" + contraseña));
  myheaders.append('Authorization', 'Basic ' + btoa(usuario + ":" + contraseña));
  myheaders.append('x-requested-with', 'XMLHttpRequest');
  myheaders.append('Content-Type', 'application/json');
  myheaders.append('origin', 'https://cognitiveshadow.com');
  myheaders.append('accept', 'application/json');


let requestBody = {
  //decisions: {
  //  "Waypoint": waypointDecided
  //},
  learning: true,
  predictionMode: "ACTIVE",
  features: {
  "Consommation dessus": 0.8328,
  "Consommation droite": 0.0324,
  "Consommation gauche": 0.4075,
  "Consommation route": 0.7881,
  "Dist jaune-dessus": 0.325,
  "Dist jaune-droite": 0.8012,
  "Dist jaune-gauche": 0.4344,
  "Dist jaune-route": 0.225,
  "Dist rouge-dessus": 0.9416,
  "Dist rouge-droite": 0.1627,
  "Dist rouge-gauche": 0.8773,
  "Dist rouge-route": 0.1617,
  "Future dist jaune-droite": 0.9107,
  "Future dist jaune-gauche": 0.5691,
  "Future dist jaune-route": 0.6687,
  "Future dist rouge-droite": 0.9201,
  "Future dist rouge-gauche": 0.9377,
  "Future dist rouge-route": 0.7518
  }
};

participant = 221;

url3 = 'https://cognitiveshadow.com/api/problems/190/users/' + participant.toString() + '/recommend';


var requestOptions = {
  method: 'POST',
  headers: myheaders,
  body: JSON.stringify(requestBody)
  // mode: 'cors',
  // credentials: 'include',
};

fetch(url3, requestOptions)
  .then(response => response.json())
  .then(data => {
    // Manipular la respuesta del servidor
    console.log(data.predictions[0]);
  })





/*let myheaders = new Headers();

// headers.set('Authorization', 'Basic ' + btoa(usuario + ":" + contraseña));
myheaders.append('Authorization', 'Basic ' + btoa(usuario + ":" + contraseña));
myheaders.append('x-requested-with', 'XMLHttpRequest');
myheaders.append('Content-Type', 'application/json');
myheaders.append('origin', 'https://cognitiveshadow.com');
myheaders.append('accept', 'application/json');


let requestBody = {
  decisions: {
    "Detection Likelihood": 2
  },
  learning: true,
  predictionMode: "ACTIVE",
  features: {
    "Depth (feet)": 4889,
    "Wind Speed (mph)": 59,
    "Wave Height (feet)": 3,
    "Air Temperature (celsius)": 21,
    "Relative Humidity (%)": 87
  }
};


url3 = 'https://cognitiveshadow.com/api/problems/192/users/7/capture';


var requestOptions = {
  method: 'POST',
  headers: myheaders,
  body: JSON.stringify(requestBody)
  // mode: 'cors',
  // credentials: 'include',
};

fetch(url3, requestOptions)

url3 = 'https://cognitiveshadow.com/api/problems/192/users/7/capture';


var requestOptions = {
  method: 'POST',
  headers: myheaders,
  body: JSON.stringify(requestBody)
  // mode: 'cors',
  // credentials: 'include',
};

fetch(url3, requestOptions)*/


/*fetch("https://cognitiveshadow.com/api/problems/192/users/7/capture", {
  "headers": {
    headers
  },
  // "referrer": "https://cognitiveshadow.com/",
  // "referrerPolicy": "strict-origin-when-cross-origin",
  // "body": "{\"sessionIdentifier\":\"\",\"decisions\":{\"Detection Likelihood\":3},\"learning\":true,\"predictionMode\":\"ACTIVE\",\"features\":{\"Depth (feet)\":4889,\"Wind Speed (mph)\":59,\"Wave Height (feet)\":3,\"Air Temperature (celsius)\":21,\"Relative Humidity (%)\":87}}",
  "method": "GET",
  //"mode": "cors",
  //"credentials": "include"
});*/






/*fetch("https://cognitiveshadow.com/api/problems/192/users/7/capture/?", {
  //"mode": "no-cors",
  // "credentials": "include",
  "headers": {
    "content-type": "application/json",
    //"username": usuario,
    //"password": contraseña
  },
  // "referrer": "https://cognitiveshadow.com/",
  // "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"sessionIdentifier\":\"\",\"decisions\":{\"Detection Likelihood\":3},\"learning\":true,\"predictionMode\":\"ACTIVE\",\"features\":{\"Depth (feet)\":5000,\"Wind Speed (mph)\":9,\"Wave Height (feet)\":20,\"Air Temperature (celsius)\":25,\"Relative Humidity (%)\":100}}",
  "method": "POST"
  // 
  

});*/
























/*const url2 = "https://cognitiveshadow.com/#/problems/192/users/7/capture";

const datosPost = {
  sessionIdentifier: '',
  decisions: {
    'Detection Likelihood': 2
  },
  learning: true,
  predictionMode: 'ACTIVE',
  features: {
    'Depth (feet)': 80,
    'Wind Speed (mph)': 5,
    'Wave Height (feet)': 10,
    'Air Temperature (celsius)': 10,
    'Relative Humidity (%)': 80
  }
};

fetch(url2, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    // Otros encabezados según sea necesario
  },
  //credentials: 'include',  // Incluir credenciales en la solicitud si es necesario
  body: JSON.stringify(datosPost),
})
  .then(response => response.text())
  .then(data => {
    // Manipular la respuesta del servidor
    console.log(data);
  })
  .catch(error => {
    console.error('Error en la solicitud:', error);
  });*/



























// const urlAntesDeNavegar = window.location.href;

// window.location.href = "https://cognitiveshadow.com/#/problems/25#Overview";

// Manejar el evento popstate para verificar si la navegación ha sido exitosa
/* window.addEventListener('popstate', function(event) {
  // Compara la URL actual con la URL antes de navegar
  if (window.location.href === urlAntesDeNavegar) {
    console.log('La navegación fue exitosa');
  } else {
    console.log('La navegación no fue exitosa');
  }
}); */ 
/*
// URL de la página después de iniciar sesión
const urlDespuesDeIniciarSesion = "https://cognitiveshadow.com/#/problems/192/users/7#Capture";

// Configuración de la solicitud después de iniciar sesión
const opcionesSolicitudDespuesDeIniciarSesion = {
  method: "GET",  // Puede ser GET, POST u otro según lo que requiera la página
  headers: {
    // Puedes necesitar agregar más encabezados según los requisitos del servicio web
    "Content-Type": "application/json",
    // Agrega cualquier otra información de autenticación si es necesaria
  },
  // Puedes agregar más opciones según sea necesario
};

// Realizar la solicitud después de iniciar sesión
fetch(urlDespuesDeIniciarSesion, opcionesSolicitudDespuesDeIniciarSesion)
  .then(response => response.text())
  .then(html => {
    // Crear un elemento temporal para analizar el HTML
    const elementoTemp = document.createElement('div');
    elementoTemp.innerHTML = html;

    // Agregar un setTimeout para esperar a que la página se cargue completamente
    setTimeout(() => {
      // Buscar el botón por su id
      const boton = elementoTemp.querySelector('mat-button-toggle-44-button');

      // Verificar si se encontró el botón
      if (boton) {
        // Disparar un evento de clic en el botón
        boton.click();
        console.log("Clic en el botón realizado");
      } else {
        console.error("No se encontró el botón con el ID especificado");
      }

      // Puedes realizar más acciones después de "apretar" el botón
    }, 2000); // Esperar 2 segundos (ajusta el tiempo según sea necesario)
  })
  .then(data => {
    // Manipular la respuesta del servidor después de iniciar sesión
    //console.log(data);

    // Ahora, puedes buscar los elementos en la página y realizar acciones en consecuencia
    // Por ejemplo, seleccionar un botón y rellenar campos de texto
    // ...

    // Puedes realizar más acciones después de interactuar con la página
  })
  .catch(error => {
    console.error("Error al interactuar con la página después de iniciar sesión:", error);
  });
*/



//function enviarCasoCS(distRD,distRG,distRR,distRDessus,distJD,distJG,distJR,distJDessus,futDistRD,futDistRG,futDistRR,futDistRDessus,futDistJD,futDistJG,futDistJR,futDistJDessus,combDessus,combD,combG,combI,combR){



//}

//function pedirPrediccionCS(distRD,distRG,distRR,distRDessus,distJD,distJG,distJR,distJDessus,futDistRD,futDistRG,futDistRR,futDistRDessus,futDistJD,futDistJG,futDistJR,futDistJDessus,combDessus,combD,combG,combI,combR)


/*

fetch("https://cognitiveshadow.com/api/problems/192/users/7/capture", {
  "headers": {
    "accept": "application/json, text/plain, *//*",
    "accept-language": "en-GB,en;q=0.9,es-ES;q=0.8,es;q=0.7,pt;q=0.6",
    "content-type": "application/json",
    "sec-ch-ua": "\"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-by": "application"
  },
  "referrer": "https://cognitiveshadow.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"sessionIdentifier\":\"\",\"decisions\":{\"Detection Likelihood\":2},\"learning\":true,\"predictionMode\":\"ACTIVE\",\"features\":{\"Depth (feet)\":80,\"Wind Speed (mph)\":3,\"Wave Height (feet)\":5,\"Air Temperature (celsius)\":10,\"Relative Humidity (%)\":80}}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
*/


