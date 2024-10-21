//This is where I will make api calls to the magic api write my functions here and
//pass them to whereever I need them.
import axios from "axios";

const BASE_URL = "https://api.scryfall.com";
const header = {
  method: 'GET'
}

class MagicApi {
  //searching for a card name that you know
  static async getCards(card){
    const res = await axios.get(`${BASE_URL}/cards/named?exact=${card}`);
    return res.data;
  }

  //get just the card image
  static async getCardImage(card){
    const res = await axios.get(`${BASE_URL}/cards/named?exact=${card}`);
    return res.data.image_uris.art_crop;
  }

  //searching for a card name you dont know, returns simular to what you put in.
  static async searchCard(data){
    const {cardSearch} = data
    try{
      const res = await axios.get(`${BASE_URL}/cards/search?q=${cardSearch}`);
      return res;
    }catch(e){
      console.alert(e);
    }
  }

}

export default MagicApi;