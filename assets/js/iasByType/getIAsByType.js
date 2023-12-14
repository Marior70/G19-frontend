import { API_URL } from "../constantes.js";

async function obtenerIATypeList() {
   const IATypeListPromise = fetch(`${API_URL}iaFunction/`, {
      method: 'GET',
      headers: {
         'Origin': `'${FRONTEND}'`,
         // 'Authorization': `Bearer ${TOKEN_API}`
      } 
   })
      .then((res) => res.json())
      .catch(error => {
         console.error('Error:', error);
      });

   try {
      const IATypeList = await IATypeListPromise;
      return IATypeList;
   } catch (error) {
      console.error('Error:', error);
   }
} 

export const IATypeList = obtenerIATypeList();

export function obtenerIAsByType(data) {

   let items = "";
   let iaTypeStartPattern = "";
   let iaFunctionID;   

   if (!data) {
      console.log("la lista de IAs se encuentra vacía");
      return;
   }

   const iaTypeEndPattern = `  </ul>
      </article>`;
   
   for (let iaType of IATypeList){
      iaTypeStartPattern = `
         <article class="byFunction">
            <header>
               <h2>${iaType.nombre}</h2>
               <img src="${iaType.image}" width="50">
            </header>
            <ul id="iaList">`;
      items += iaTypeStartPattern;
      data.forEach((item) => {
         let itemPattern = "";
         for (iaFunctionID in item.functionList){
            if (iaFunctionID == iaType.id) {
               itemPattern = `
                  < li >
                     <a href="${item.link}" target="_blank">
                        <img src="${item.image}" title="${item.nombre} alt="${item.nombre} site">
                     </a>
                  </li>`;
            }
         }
         items += itemPattern;
      });
      items += iaTypeEndPattern;

      return items;
   }
}