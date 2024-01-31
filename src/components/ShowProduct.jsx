import {React, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProduct, productSelector} from '../features/productslice';
import {Link, useNavigate} from "react-router-dom"

const ShowProduct = () => {
    
// const location = useLocation  
const dispatch = useDispatch();
const products = useSelector(productSelector.selectAll) 
const navigate = useNavigate

// const handleBayar = (e) => {
//   e.preventDefault();
//   Window.sessionStorage.setItem("LastOrder");
//   Navigate ("/add")
// }


useEffect(() => {
  dispatch(getProduct());
},[dispatch]);




return (
    <div className='box mt-5'>
      <Link to={"/add"} className='button is-success'>Add New</Link>
      <table className='table is-striped is-fullwidth'>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
            <td>{index + 1}</td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>
              <Link to={`edit/${product.id}`} className='button is-info is-small'>Edit</Link>
              <button className='button is-danger is-small'>Delete</button>
            </td>
          </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  )
}

export default ShowProduct