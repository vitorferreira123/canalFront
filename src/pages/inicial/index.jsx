import './index.scss';
import Axios from 'axios';
import { useState } from 'react';

export default function App() {
    const [canalNome, setCanalNome] = useState('');
    const [canalNumero, setCanalNumero] = useState('');
    const [aberto, setAberto] = useState(false);

    async function inserirCanal() {
        const url = `http://localhost:5001/canal`;

        let resp = await Axios.post(url, {
                nome: canalNome,
                numero: canalNumero,
                aberto: aberto
            });

            
        setCanalNome(resp.data.nome || ''); 
        setCanalNumero(resp.data.numero || '');
        setAberto(resp.data.aberto !== undefined ? resp.data.aberto : false); 
    }

    async function exclurCanal() {
        const url = `http://localhost:5001/canal/:id`

        let resp = await Axios.delete(url, {
            
        });
    }

    return (
        <div className='App'>
            <h1>Inserir Canal</h1>
            <div className='fuboca'>
                <div className='in'>
                    <input
                        className='in1'
                        type="text"
                        placeholder='Insira o nome do canal'
                        value={canalNome}
                        onChange={(e) => setCanalNome(e.target.value)}
                    />
                    <input
                        className='in2'
                        type="number"
                        placeholder='Insira o número do canal'
                        value={canalNumero}
                        onChange={(e) => setCanalNumero(e.target.value)}
                    />
                </div>
                <div>
                    <div className='checkbox'>
                        <p>Aberto:</p>
                        <input
                            type="checkbox"
                            checked={aberto}
                            onChange={e => setAberto(e.target.checked)}
                        />
                        <button className='b1' onClick={inserirCanal}>Inserir</button>
                        <button className='b1' onClick={exclurCanal}>deletar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
