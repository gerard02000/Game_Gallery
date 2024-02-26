import { auth } from "@/auth"
import { redirect } from "next/navigation"

async function page() {
    const sesion = await auth()

    if (!sesion)
        redirect('/auth/login')

    return (
        <>
            <div className="flex items-center h-screen w-full justify-center bg-gray-900">
                <div className="max-w-xs">
                    <div className="bg-white shadow-xl rounded-lg py-3">
                        <div className="photo-wrapper p-2">
                            <img className="w-32 h-32 rounded-full mx-auto" src={sesion?.user.image} alt={sesion?.user.name} />
                        </div>
                        <div className="p-2">
                            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{sesion?.user.name}</h3>
                            <div className="text-center text-gray-400 text-xs font-semibold">
                                <p>{sesion?.user.role}</p>
                            </div>
                            <table className="text-xs my-3">
                                <tbody>
                                    <tr>
                                        <td className="px-2 py-2 text-gray-500 font-semibold">Address</td>
                                        <td className="px-2 py-2">{sesion?.user.address}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                                        <td className="px-2 py-2">{sesion?.user.phone}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                        <td className="px-2 py-2">{sesion?.user.email}</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </>)
}

export default page      
