 
 import React  from "react";
import "./TableData.css";
import Json from "./json.json";

class TableData extends React.Component{
   render(){
      return<div className="tablecontainer">
         <h1>Online Shoping</h1>

         
         <table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Price</th>
      <th>Image</th>
    </tr>
  </thead>
  <tbody>
   
 {Json.map((item)=>(
   <tr key={item.name}>
   <td>{item.name}</td>
   <td>{item.price}</td>

   <td>
      <img src={item.image}  className="PhoneImages" alt="Not Visible"/>
   </td>
  </tr>
 ))}


     
 
  </tbody>
</table>



  
      </div>
      
      


    
         
  
    

    


   }
}

export default TableData;