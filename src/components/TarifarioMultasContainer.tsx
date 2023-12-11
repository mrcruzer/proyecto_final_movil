import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {collection, getDocs, getDoc, deleteDoc} from 'firebase/firestore';
import {db} from '../firebaseConfig/firebase';


const TarifarioMultasContainer: React.FC = ({  }) => {
  const [tarifarioMultas, setTarifarioMultas] = useState([]);

  const tarifarioMultasCollection = collection(db, "multas");

  const getTarifarioMultas = async () => {
    const data = await getDocs(tarifarioMultasCollection);
    console.log(data);
  }

  useEffect( () => {
    getTarifarioMultas();
  }, []);

    return (
      <h1>Mostrar</h1>
    );
  };
  
  export default TarifarioMultasContainer;
  