import {React, useState} from 'react'
import { useDispatch } from 'react-redux';
import { saveProduct } from '../features/productslice';
import { useNavigate , useLocation} from 'react-router-dom';

 

const Addproduct = () => {

    const [title, setTitle] = useState('');
    const [price,setPrice] = useState('');
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation()

    // const isAuthenticated = () => {
    //     // Cek apakah token ada di local storage
    //     return !!localStorage.getItem('authToken');
    //   };
    

    //   const redirectToLogin = () => {
    //     // localStorage.setItem('prevPath', {state:{from:location.pathname}});
    //     // Redirect ke halaman login dengan menyimpan lokasi terakhir
    //     navigate('/login', );
    //   };

      console.log (location)


    const createProduct =  async (e) => {
        e.preventDefault();

        // if (!isAuthenticated()) {
        //     // Jika tidak ada token, redirect ke halaman login
        //     redirectToLogin();
        //     return;
        //   }
      
        await dispatch(saveProduct({title, price}));
        navigate('/');
    }

  
    return (
    <div>
        <form className='box mt-5' onSubmit={createProduct}>
            <div className="field">
                <label className="label">Title</label>
                <div className="control">
                    <input type="text" className="input" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
            </div>
            <div className="field">
                <label className="label">Price</label>
                <div className="control">
                    <input type="text" className="input" placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className="field">
                    <button className="button is-success">Submit</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Addproduct