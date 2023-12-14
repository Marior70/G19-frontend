import { API_URL, FRONTEND } from "../constantes.js";

import { Render } from "../render.js";
import { commentsToRender } from "./getComments.js";

const COMMENTS = new Render("dataList");
COMMENTS.fetchData(`${API_URL}comment`,
   commentsToRender,
   {
      method: 'GET',
      headers: {
         'Origin': `${FRONTEND}`,
         //'Authorization': `Bearer ${TOKEN_API}`
      }
   });