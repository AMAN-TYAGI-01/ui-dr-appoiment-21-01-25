async function dataShow()
{
  let api="http://localhost:3000/patient";
  let Table="<table border='1'><tr><th>Patientname</th><th>Patientcontact</th><th>Patientemail</th><th>Appointmentdate</th></tr>";

      const myObj= await fetch(api);
      //console.log(myObj);
      const Data= await myObj.json();
    //   console.log(Data);
       Data.map((key)=>{
               Table+=`<tr>
                         <td> ${key.Patientname} </td>
                         <td> ${key.Patientcontact} </td>
                         <td> ${key.Patientemail} </td>
                         <td> ${key.Appointmentdate} </td>
                       </tr> `
           })
           Table+="</table>"
           document.getElementById("demo2").innerHTML=Table;
}
dataShow();