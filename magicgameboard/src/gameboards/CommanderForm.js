// import React,{useState} from "react";

// import MagicApi from "../MagicApi";

// const CommanderForm = (getCard) => {

//     const [commander, setCommander] = useState("")

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try{
//             await MagicApi.getCard(commander);
//         }catch(e){
//             console.log(e)
//         }

//     }

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((data) => ({
//           ...data,
//           [name]: value
//         }));
//     };

//     return(
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <lablel>Commander:</lablel>
//                 <input 
//                     type="text"
//                     name="commander"
//                     id="commander"
//                     value={commander}
//                     onChange={handleChange}
//                     required/>
//                 <button type="submit" color="primary">Find</button>
//             </form>
//         </div>
//     )
// }

// export default CommanderForm;