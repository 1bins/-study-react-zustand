import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../pages/home';
import DataTest from "../pages/data";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/data' element={<DataTest/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;