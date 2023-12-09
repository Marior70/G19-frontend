/* import { IAs_URI } from "../constantes.js";
import { Render } from "../render.js";
import { obtenerIAsList } from "./getIAs.js";

const ias = new Render("iaList");
ias.fetchData(IAs_URI, obtenerIAsList); */


import { APImrl_URI_BASE,IAS_SHEET, API_URL } from "../constantes.js";
import { Render } from "../render.js";
import { obtenerIAsList } from "./getIAs.js";

// const APImrl_URI = `${APImrl_URI_BASE}?sheet=${IAS_SHEET}`;

const ias = new Render("iaList");
ias.fetchData(`${API_URL}iasList/`, obtenerIAsList);