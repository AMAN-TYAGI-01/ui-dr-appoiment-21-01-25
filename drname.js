document.getElementById("mybtn").addEventListener("click", mySearch);
async function mySearch()
{
   let inputt= document.getElementById("myinput").value;
   let api=`http://localhost:3000/input/?DRNAME=${inputt}`;
   const myObj= await fetch(api);
   const Data= await myObj.json();
   let TAB=`<table border="3px" bgcolor="orange" width="100%">
              <tr>
                <th>DRNAME</th>
                <th>DOCTORTYPE</th>
                <th>TIME</th>
                <th>ROOMNUMBER</th>
                <th>FEES</th>
                <th>ADDRESS</th>
                <th>HOSPITALNAME</th>
                <th>EXPERIENCE</th>
              </tr>  
             `
        Data.map((key)=>{
            TAB+=`
                 <tr>
                 <td>${key.DRNAME}</td>
                 <td>${key.DOCTORTYPE}</td>
                 <td>${key.TIME}</td>
                 <td>${key.ROOMNUMBER}</td>
                 <td>${key.FEES}</td>
                 <td>${key.ADDRESS}</td>
                 <td>${key.HOSPITALNAME}</td>
                 <td>${key.EXPERIENCE}</td>
                </tr> 
              `       
        })
        TAB+="</table>";
        document.getElementById("demo1").innerHTML=TAB;
}