document.getElementById("btn3").addEventListener("click", dataInsert);
async function dataInsert()
{
   let name=document.getElementById("nm").value;
   let num=document.getElementById("num").value;
   let email=document.getElementById("email").value;
   let app=document.getElementById("app").value;
   let api="http://localhost:3000/patient";

   const response= await fetch(api, {

    method: 'POST',
    headers: {
      'Content-Type': 'application/json' // Set content type to JSON
    },
    body: JSON.stringify({
        "Patientname":name,
        "Patientcontact":num,
        "Patientemail":email,
        "Appointmentdate":app
    })
   });
   alert("Data save!!!")
}