import { Auth } from "../Components/Auth"
import { Label } from "../Components/label"

export const Signup = ()=>{
    return (
        <>
            <div className="grid grid-cols-2">
                <Auth />
                <Label />
            </div>
        </>
    )
}