import axios from "axios";
import url from "@/router/url";
import {
    getArray,
    setQuery,
    setData,
    getJson
} from "../resources/wordResource";
export default class WordRepository {
    async index(data) {
        let params = setQuery(data);
        let response = await axios.get(url("indexWords"), { params });
        if (response.status === 200) {
            return getArray(response.data);
        }
    }
    async store(data) {
        let json = setData(data);
        let response = await axios.post(url("storeWord"), json);
        if (response.status === 201) {
            console.log(response);
            return getJson(response.data.data);
        }
    }
    async update(data) {
        let json = setData(data);
        let response = await axios.put(url("updateWord", { word: data._id }), json);
        if (response.status === 201) {
            return getJson(response.data.data);
        }
    }
}