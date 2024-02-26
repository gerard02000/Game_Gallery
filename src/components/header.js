import Link from 'next/link';
import { auth } from "@/auth";
import { logout } from '@/lib/actions';
import Image from 'next/image';
import { FiUserPlus, FiLogIn } from 'react-icons/fi';

async function Header() {
    const session = await auth();

    return (
        <header>
            <div className="bg-black">
                <div className="px-4 mx-auto sm:px-6 lg:px-8">
                    <nav className="flex items-center justify-between h-16 lg:h-20">
                        <div className="flex-shrink-0">
                            <a href="/" title="Logo" className="flex">
                                <Image src="/logo.svg" alt="Logo" width={60} height={40} />
                            </a>
                        </div>

                        {/* Menú para pantallas pequeñas */}
                        <div className="lg:hidden flex items-center justify-between w-full">
                            <div className="ml-4"> {/* Agregando margen izquierdo */}
                                <Link href="/" className="text-white hover:text-gray-300">Inicio</Link>
                                {session?.user?.role === 'ADMIN' && <Link href="/admin" className="text-white hover:text-gray-300 ml-4">Admin panel</Link>} {/* Ajustando margen izquierdo */}
                                <Link href="/dashboard" className="text-white hover:text-gray-300 ml-4">Dashboard</Link>
                                <Link href="/juego" className="text-white hover:text-gray-300 ml-4" >Juegos</Link> {/* Ajustando margen izquierdo */}
                                <Link href="/about" className="text-white hover:text-gray-300 ml-4">About</Link> {/* Ajustando margen izquierdo */}
                                <Link href="/admin" className="text-white hover:text-gray-300 ml-4" >Panel de admin</Link>
                            </div>
                            <div className="flex items-center space-x-4">
                                {session ? (
                                    <form><button onClick={logout} className="text-base font-medium text-white">SignOut</button></form>
                                ) : (
                                    <>
                                        <Link href="/auth/register" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:bg-yellow-500 px-3 py-2 rounded-md">
                                            <FiUserPlus size={20} />
                                        </Link>
                                        <Link href="/auth/login" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:bg-yellow-500 px-3 py-2 rounded-md">
                                            <FiLogIn size={20} />
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Menú para pantallas grandes */}
                        <div className="hidden lg:flex lg:items-center lg:justify-between lg:space-x-10 flex-grow w-full">
                            <div className="flex justify-center items-center space-x-4 lg:space-x-10 w-full"> {/* Alineación centrada */}
                                <Link href="/" className="text-white hover:text-gray-300">Inicio</Link>
                                {session?.user?.role === 'ADMIN' && <Link href="/admin" className="text-white hover:text-gray-300">Admin panel</Link>}
                                <Link href="/dashboard" className="text-white hover:text-gray-300">Dashboard</Link>
                                <Link href="/juego" className="text-white hover:text-gray-300 ml-4" >Juegos</Link> {/* Ajustando margen izquierdo */}
                                <Link href="/about" className="text-white hover:text-gray-300">About</Link>
                                <Link href="/admin" className="text-white hover:text-gray-300 ml-4" >Panel de admin</Link>
                            </div>

                            <div className="flex items-center space-x-4">
                                {session ? (
                                    <form><button formAction={logout} className="text-white hover:text-gray-300 bg-yellow-400 hover:bg-yellow-500 focus:bg-yellow-500 px-4 py-2 rounded-md">SignOut</button></form>
                                ) : (
                                    <>
                                        <Link href="/auth/register" className="text-white hover:text-gray-300 bg-yellow-400 hover:bg-yellow-500 focus:bg-yellow-500 px-4 py-2 rounded-md">SignUp</Link>
                                        <Link href="/auth/login" className="text-base font-medium text-white bg-yellow-400 hover:bg-yellow-500 focus:bg-yellow-500 px-4 py-2 rounded-md">SignIn</Link>
                                    </>
                                )}
                            </div>
                        </div>

                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
