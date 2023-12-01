import { API_URL } from "../../../../utils/httpRequest";
import { TOKEN } from "../../../../utils/httpRequest";
import axios, { formToJSON } from "axios";

const endpoint = "tematica";

let alertShow = false;

export const fetchData = async ()=>{
    if (!TOKEN) {
        window.location.href = '/'

        return null
    }

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TOKEN}`,
    }

    try{
        const response = await axios.get(`${API_URL}/${endpoint}/`, {headers})
        return response.data
    }catch(error){
        if (error.response && error.response.status === 401) {
            if (!alertShow) {
                alert('La sesion ha caducado. Seras redirigido al inicio de sesion.');
                alertShow = true;
                window.location.href = '/'
            }   
            return null;
        }
        console.error('error en el fetch', error);
        throw error;
    }
}

export const programaId = () => {
    const [datos, setDatos] = useState([])
  
    useEffect(()=>{
        const endpoint = 'programa';
  
        getDataFromEndpoin(endpoint)
        .then((data)=>{
            setDatos(data)
        })
        .catch((error)=>{
            console.log("[ERRORFETCH DATA]", error)
        })
    }, []);
  
    return datos
};

export const trimestreId = ()=>{
    const [datos, setDatos] = useState([])

    useEffect(()=>{
        const endpoint = 'trimestre';

        getDataFromEndpoin(endpoint)
        .then((data)=>{
            setDatos(data)
        })
        .catch((error)=>{
            console.log("[ERRORFETCH DATA]", error)
        })
    }, []);

    return datos
}

