import React from "react"
import Addproduct from "./components/addproduct.jsx"
import ShowProduct from "./components/ShowProduct.jsx"
import EditProduct from "./components/EditProduct.jsx"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import LoginPage from "./components/Login.jsx"
import ProtectedRoute from "./routes/ProtectedRoute.jsx"


const App = () => {

  return (
  
   
    <Routes>
      <Route path="/dashboard" element={<ShowProduct/>}/>
      <Route path="/edit/:id"  element= {<EditProduct/>}/>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoute/>}>
      <Route path="/add" element={<Addproduct/>}/>
      {/* <Route path="/add" element={<ProtectedRoute element={<Addproduct/>}/>}/> */}
      </Route>
    </Routes>
    
  )
}

export default App
