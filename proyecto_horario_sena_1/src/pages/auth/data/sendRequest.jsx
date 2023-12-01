export const fetchDataTiposDoc = async ()=>{

    if (!TOKEN){
      window.location.href = '/login'
  
      return null
    }
  
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${TOKEN}`,
    }
    try{
      const response = await axios.get(`${API_URL}/tipodoc/`, {headers})
      return response.data
    }catch (error){
      console.error("error en el fetch", error)
      throw error;
    }
  }