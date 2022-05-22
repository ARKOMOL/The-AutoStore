import  { useEffect, useState } from 'react';

const UseParts = () => {
    const [parts,setParts] = useState([]);

    useEffect(()=>{
        // fetch('http://localhost:4000/parts')
        fetch('https://peaceful-shore-76688.herokuapp.com/parts')
        .then(res =>res.json())
        .then(data=> {
           
            setParts(data)
        })
    },[])


    return [parts,setParts];
};

export default UseParts;