import { API_URL } from "../constantes.js";

const btnEnviar = document.querySelector('#btnEnviar');
const btnCancelar = document.querySelector('#btnCancelar');

btnEnviar.addEventListener('click', async () => {
   
   const FCOMMENT = document.querySelector('#fComments');
   
   let dataForm = new FormData(FCOMMENT);   
   dataForm.append('fecha', new Date().toString());
      
   let comm_request = new XMLHttpRequest();
   
   comm_request.open("POST", `${API_URL}comment/`, true);

   comm_request.onreadystatechange = function () {
      if (comm_request.readyState === 4) {
         if (comm_request.status === 201) {
            document.getElementById("nombre").value = '';
            document.getElementById("email").value = '';
            document.getElementById("comentario").value = '';
            alert("Gracias por sus comentarios");
            window.history.back();
         } else {
            console.error("Error al enviar comentarios: " + comm_request.status);
         }
      }
   };
   comm_request.setRequestHeader(
      'Origin', `${FRONTEND}`
      // 'Authorization',`Bearer ${TOKEN_API}`
   );
   comm_request.send(dataForm);
});


btnCancelar.addEventListener('click', () => {
   window.history.back()
});