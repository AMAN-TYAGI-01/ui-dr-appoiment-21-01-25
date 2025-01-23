function dataUpdate(id)
{

    let name=document.getElementById("nm").value;
    let num=document.getElementById("num").value;
    let email=document.getElementById("email").value;
    let app=document.getElementById("app").value;

    let api=`http://localhost:3000/patient/${id}`;
    fetch(api, { 
        method: 'PUT', 
        headers: { 
          'Content-type': 'application/json'
        }, 
        body: JSON.stringify({
            "Patientname":name,
            "Patientcontact":num,
            "Patientemail":email,
            "Appointmentdate":app
        }) 
      }).then((res)=>{
        alert("data updated!!!");
    })
}



function myDel(id)
{
     let api=`http://localhost:3000/patient/${id}`;
     fetch(api, {method:'DELETE'}).then((res)=>{
        alert("Record Deleted!!!")
    })
}

async function myEdit(id)
{
    
    let api=`http://localhost:3000/patient/${id}`;

    const Obj= await fetch(api);
    //console.log(Obj);
    const MyData= await Obj.json();
   // console.log(MyData);

   document.getElementById("demo3").innerHTML=`
       Edit Rollno <input type="text" value="${MyData.name}" id="rno" >
       <br >
        Edit Name<input type="text" value="${MyData.num}" id="nm" >
       <br >
        Edit City <input type="text" value="${MyData.email}" id="ct" >
       <br >
        Edit Fees <input type="text" value="${MyData.app}" id="fs" >
       <br >
       <button onclick="dataUpdate(${MyData.id})"> Data update</button>

   
   
   `

}


async function dataShow(){
   let api="http://localhost:3000/patient";

   const Obj= await fetch(api);
   console.log(Obj);
   const Data= await Obj.json();
   console.log(Data);
   
   let Table=`<table>
                <tr bgcolor="orange">
                  <td> Patientname </td>
                   <td> Patientcontact </td>
                   <td> Patientemail </td>
                   <td> Appointmentdate</td> 
                   </tr> `;


        Data.map((key)=>{
             Table+=`<tr>
                       <td> ${key.Patientname} </td>
                         <td> ${key.Patientcontact} </td>
                         <td> ${key.Patientemail} </td>
                         <td> ${key.Appointmentdate} </td>
                              <td> 
                               
                                 <a href="#" onclick="myDel(${key.id})">
                                   <img src="dustbin.jpg" width="30" height="30" >
                                  </a>

                                  <a href="#" onclick="myEdit(${key.id})">
                                  <img src="pencil.jpg" width="30" height="30" >
                                </a>
                              
                              </td>
                       </tr>`       
        })

        Table+="</table>";
        document.getElementById("demo3").innerHTML=Table;
}



dataShow();