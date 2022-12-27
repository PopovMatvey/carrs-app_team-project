import React from "react";
import axios from 'axios';
import { IObjectPost } from "../types/IObjectPost";
import { mailingUrl } from "../data/urlsData";

export function useMailReserveForm() {

    async function featchMailreserveForm(object: IObjectPost) {
        try {
            const response = await axios.post(mailingUrl,object);

            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return { featchMailreserveForm }
}