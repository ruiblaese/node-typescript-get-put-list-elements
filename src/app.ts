import axios from 'axios'
import endpoints from "endpoint.json";
import lista from "lista-registros.json";
import config from "config-axios.json";

(async () => {

  console.log(endpoints);
  console.log(lista);

  try {

    for (let index = 0; index < lista.length; index++) {
      const id = lista[index];

      for (let indexEndpoint = 0; indexEndpoint < endpoints.length; indexEndpoint++) {
        const endpoint = endpoints[indexEndpoint];

        const endpointGet = endpoint.get.replace(":id", id);
        const responseGet = await axios.get(endpointGet, config)
        console.log("Get -> " + endpointGet + " -> " + JSON.stringify(responseGet.data));

        const endpointPost = endpoint.post.replace(":id", id, config);
        const response = await axios.put(endpointPost,
          responseGet.data
        )
        console.log("Post -> " + endpointPost + " -> " + JSON.stringify(response.data));
        console.log("");

      }

    }

  } catch (error) {
    console.log("Error:" + error);
  }

})();
