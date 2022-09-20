import { useState,useEffect } from "react";
import axios from 'axios';

export function useCarCard() {
    const [arrayCarCards,setArrayCarCards] = useState([]);

    async function featchCardCard() {
        try {
            const response = await axios.get('https://fakestoreapi.com/products?limit=5');

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