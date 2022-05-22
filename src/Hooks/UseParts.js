import  { useEffect, useState } from 'react';

const UseParts = () => {
    const [parts,setParts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:4000/parts')
        .then(res =>res.json())
        .then(data=> {
           
            setParts(data)
        })
    },[])


    return [parts,setParts];
};

export default UseParts;