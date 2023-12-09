export function obtenerIAsList(data) {
   let items = "";

   if (!data) {
      console.log("la lista de IAs se encuentra vacía");
      return;
   }

   data.forEach((item) => {
      let itemPattern = `
         <li>
            <div class="oculto">
               <button class="btnEdt" type="button" title="Editar Aptitud">
                     <i class="bi bi-pen"></i>
               </button>
               <button class="btnDel" type="button" title="Borrar Aptitud">
                     <b>X</b>
               </button>
            </div>
         <a href="${item.link}" target="_blank">
         <img src="${item.image}" title= "${item.nombre}" alt="${item.nombre} site">
         </li>`;
      items += itemPattern;
      console.log(item);
   });
   return items;
};