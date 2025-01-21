document.getElementById("book").addEventListener("click", mySearch);
async function mySearch()
{
   let api="http://localhost:3000/doctor/?bloodid=aman";
   const myObj= await fetch(api);
   const Data= await myObj.json();
   let TAB=`<table border="2" bgcolor="orange" width="100%" font-weight: bold; >
              <tr>
                <th> BLOODTYPE </th>
                <th> BLOODUNIT</th>
                <th> PRICE </th>
                <th> HOSPITALNAME </th>
                <th> BLOODLABADDRESS </th>

            </tr>  
             `
        Data.map((key)=>{
            TAB+=`
                 <tr>
                 <td>${key.BLOODTYPE}</td>
                 <td>${key.BLOODUNIT}</td>
                 <td>${key.PRICE}</td>
                 <td>${key.HOSPITALNAME}</td>
                 <td>${key.BLOODLABADDRESS}</td>
                </tr> 
              `       
        })
        TAB+="</table>";
        document.getElementById("demo").innerHTML=TAB;
}