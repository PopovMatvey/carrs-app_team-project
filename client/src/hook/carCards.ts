import { useState,useEffect } from "react";
import axios from 'axios';

export function useCarCard() {
    const [arrayCarCards,setArrayCarCards] = useState([]);

    async function featchCardCard() {
        try {
            const response = await axios.get('http://localhost:8000/products/');

            setArrayCarCards(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        featchCardCard();
    },[])

    return { arrayCarCards };
}