//This is where I will make api calls to the magic api write my functions here and
//pass them to whereever I need them.
import axios from "axios";

const BASE_URL = "https://api.scryfall.com";

class MagicApi {
  //searching for a card name that you know
  static async getCards(card){
    const res = await axios.get(`${BASE_URL}/cards/named?exact=${card}`);
    return res.data;
  }
  //searching for a card name you dont know, returns simular to what you put in.
  static async searchCard(card){
    const res = await axios.get(`${BASE_URL}/cards/named?fuzzy=${card}`);
    return res.data;
  }

}

export default MagicApi;