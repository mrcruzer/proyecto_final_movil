import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {collection, getDocs, getDoc, deleteDoc} from 'firebase/firestore';
import {db} from '../firebaseConfig/firebase';


const MultasContainer: React.FC = ({  }) => {
  
  const [multas, setMultas] = useState([]);

  const multasCollection = collection(db, "multas");

  const getMultas = async () => {
    const data = await getDocs(multasCollection);
    //console.log(data);
    setMultas(
      data.docs.map( (doc) => ( {...doc.data(),id:doc.id} ))
    )
    console.log(multas);
  }

  

  useEffect( () => {
    getMultas();
  }, []);

    return (
      <h1>Mostrar</h1>
    );
  };
  
  export default MultasContainer;
  