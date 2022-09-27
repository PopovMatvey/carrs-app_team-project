import { useState,useEffect } from "react";
import axios from 'axios';
import { IObjectPost } from "../types/IObjectPost";

export function useMailReserveForm() {

    async function featchMailreserveForm(object: IObjectPost) {
        try {
            const response = await axios.post('http://localhost:8000/mailing/',object);
        } catch (error) {
            console.log(error);
        }
    }

    return {featchMailreserveForm}
}