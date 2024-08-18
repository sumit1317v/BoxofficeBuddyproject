
// export default function AdminDashboard(){
//   return (
//     <div>
//       <h1>Hello Admin Dashboard</h1>
//     </div>
//   );
// }

import  { useState,useEffect } from "react";
import './admindash.css'

const AdminDashboard = () => {
  const [categories, setCategories] = useState([]);
  useEffect(()=>{
    fetch("")
    .then(resp=>resp.json()) //fullflied promise
    .then(categories=>setCategories(categories)) 
    .catch(error=>console.log(error.toString())) //rejected promise
}
,[])

  const handleDelete = (id) => {
    setCategories(categories.filter((category) => category.id !== id));
  };

  const handleEdit = (id) => {
    // Implement edit logic here, e.g., open a modal to update category details
    console.log(`Editing category with ID: ${id}`);
  };

  return (
    <div>
      <h1>Movie Categories</h1>
      
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Movie Category</th>
            <th>Desc</th>
            <th><button onClick={() => {}}>Add Movie Category</button></th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td>{category.desc}</td>
              <td>
                <button className="edit-button " onClick={() => handleEdit(category.id)}>Edit</button>
                <button className="delete-button" onClick={() => handleDelete(category.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;