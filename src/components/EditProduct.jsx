import {React, useState} from 'react'
import { useDispatch } from 'react-redux';


const EditProduct = () => {

    const [title, setTitle] = useState('');
    const [price,setPrice] = useState('');
    
    const dispatch = useDispatch();

    return (
    <div>
        <form className='box mt-5' onSubmit>
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
                    <button className="button is-success">Update</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default EditProduct