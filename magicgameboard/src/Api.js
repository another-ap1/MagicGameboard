import axios from "axios";
import MagicApi from "./MagicApi";

const BASE_URL = "http://localhost:3001";



//fetching data from the database in postgres functions have been named accordingly to what they do
class UserApi {
    //Fetching user information
    static async signup(data) {
        let res = await axios.post(`${BASE_URL}/users/addUser`, data);
        return res;
    };

    static async getAll(){
        let res = await axios.get(`${BASE_URL}/users`)
        return res;
    };

    static async editUser(data){
        let res = await axios.patch(`${BASE_URL}/users/edit`, data);
        return res;
    };

    static async deleteUser(data){
        let res = await axios.delete(`${BASE_URL}/users/delete`, {data});
        console.log(res);
        return res;
    };

    //fetching deck information
    static async getDecks(data){
        const {id} = data;
        let res = await axios.get(`${BASE_URL}/decks/${id}`);
        return res.data;
    };

    static async addDeck(data){
        let res = await axios.post(`${BASE_URL}/decks/addDeck`, data);
        return res;
    };

    static async deleteDeck(data){
        let res = await axios.delete(`${BASE_URL}/decks/deleteDeck`, {data});
        return res;
    };

}

export default UserApi;