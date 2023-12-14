import { API_URL } from "../constantes.js";

const btnEnviar = document.querySelector('#btnNewIA');
const btnCancelar = document.querySelector('#btnCancelarNewIA');

btnEnviar.addEventListener('click', async () => {
   
   const FNEW_IA = document.querySelector('#fNewIa');
   
   let dataForm = new FormData(FNEW_IA);   
   let comm_request = new XMLHttpRequest();
   
   comm_request.open("POST", `${API_URL}iaslist/`, true);

   comm_request.onreadystatechange = function () {
      if (comm_request.readyState === 4) {
         if (comm_request.status === 201) {
            document.getElementById("nombre").value = '';
            document.getElementById("image").value = '';
            document.getElementById("link").value = '';
            alert("IA creada correctamente");
            window.history.back();
         } else {
            console.error("Error al crear nueva IA: " + comm_request.status);
         }
      }
   };
   comm_request.setRequestHeader(
      'Origin', '`${FRONTEND}`'
      // 'Authorization',`Bearer ${TOKEN_API}`
   );
   comm_request.send(dataForm);
});


btnCancelar.addEventListener('click', () => {
   window.history.back()
});