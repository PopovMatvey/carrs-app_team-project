import { useState,useEffect } from "react";
import axios from 'axios';
import { productsUrl } from "../data/urlsData";

export function useCarCard() {
    const [arrayCarCards,setArrayCarCards] = useState([]);

    async function featchCardCard() {
        try {
            const response = await axios.get(productsUrl);

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