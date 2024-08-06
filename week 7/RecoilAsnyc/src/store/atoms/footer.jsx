import axios from "axios";
import {atom, selector } from "recoil";

export const footerAtom= atom({
    key:"RecoilFooter",
    default:selector({
        key:"defaultValue",
        get:async()=>{
            const res=await axios.get("https://sum-server.100xdevs.com/notifications");
            return res.data;
        }
    })
});

export const footerSelector=selector({
    key:"footerSelector",
    get:({get})=>{
        const notifications=get(footerAtom);
        return notifications.network+notifications.jobs+notifications.messaging+notifications.notifications;
    }
});