export function commentsToRender(data) {

   let items = "";

   if (!data) {
      console.log("la lista de comentarios recibidos se encuentra vacía");
      return;
   }

   data.forEach((item) => {
      let pattern = `
         <li>
         <article>
            <p>${item.fecha}</p>
            <p>${item.nombre}</p>
            <p>${item.comentario}</p>
         </article>
         </li> `;
      items += pattern;
   });

   return items;
}