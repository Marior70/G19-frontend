import { APImrl_URI_BASE,IA_TYPES_SHEET, API_URL } from "../constantes.js";
import { Render } from "../render.js";
import { obtenerIAsByType } from "./getIAsByType.js";

// const APImrl_URI = `${APImrl_URI_BASE}/${IA_TYPES_SHEET}`;

const iasByFunction = new Render("iaByFunctionList");
iasByFunction.fetchData(`${API_URL}iaFunction/`,
obtenerIAsByType, 
{
   method: 'GET',
   /* headers: {
      'Authorization': `Bearer ${TOKEN_API}`
   } */   
});