import {atomFamily, selectorFamily} from "recoil";
// import { TODOS } from "../../todo";
import axios from "axios";


export const TodoAtomFamily=atomFamily({
    key:"TodoAtomFamily",
    default:selectorFamily({
        key:"TodoSelectorFamily",
        get: (id) => async ({get}) =>{
            const res=await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
            return res.data.todo;
        }
    })
})
