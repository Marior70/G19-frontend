import { APImrl_URI_BASE, TOKEN_APImrl,COMMENTS_SHEET, API_URL } from "../constantes.js";

import { Render } from "../render.js";
import { commentsToRender } from "./getComments.js";

const APImrl_URI = `${APImrl_URI_BASE}/${COMMENTS_SHEET}`;

const COMMENTS = new Render("dataList");
COMMENTS.fetchData(`${API_URL}comment`, 
   commentsToRender, 
   {
      method: 'GET',
      /* headers: {
         'Authorization': `Bearer ${TOKEN_API}`
      } */   
   });