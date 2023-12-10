import { API_URL } from "../constantes.js";
import { Render } from "../render.js";
import { obtenerIAsList } from "./getIAs.js";

const ias = new Render("iaList");
ias.fetchData(`${API_URL}iasList/`,
obtenerIAsList,
   {
      method: 'GET',
      /* headers: {
         'Authorization': `Bearer ${TOKEN_API}`
      } */   
   });