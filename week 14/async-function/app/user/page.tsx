import axios from "axios";

async function fetchUser(){
    await new Promise((r)=>setTimeout(r,5000));
    const response = await axios.get("http://localhost:3000/api/user");
    return response.data;
}

export default async function User(){
    const body = await fetchUser();

    return (
        <div className="flex flex-col justify-center h-screen">
            <div className="flex justify-center">
                <div className="border p-8 rounded">
                    <div>
                        Name: {body?.data.name}
                    </div>
                    <div>
                        Email: {body?.data.email}
                    </div>
                </div>
            </div>
        </div>
      );
}