import { API_URL } from "../constantes.js";

export async function obtenerIATypeList() {
   const IATypeListPromise = fetch(`${API_URL}iaFunction/`, {
      method: 'GET',
      // headers: {
      //  'Authorization': `Bearer ${TOKEN_API}`
      // } 
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
};