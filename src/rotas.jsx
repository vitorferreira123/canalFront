
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import App from './pages/inicial'

export  default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </BrowserRouter>
    )
}
