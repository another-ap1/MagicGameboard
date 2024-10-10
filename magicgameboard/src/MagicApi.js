//This is where I will make api calls to the magic api write my functions here and
//pass them to whereever I need them.
import axios from "axios";

const BASE_URL = "https://api.scryfall.com";

class MagicApi {
  static async getCards(card){
    const res = await axios.get(`${BASE_URL}/cards/named?exact=${card}`);
    return res.data;
  }

//   static async getCardImg(){
//     const img = await axios.get(`${BASE_URL}`);
//     return img.data;
//   }
}

export default MagicApi;