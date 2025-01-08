import { Outlet } from "react-router-dom"
import { Toaster } from 'sonner'

export default function AuthLayout() {
    return (
        <>
            <div className='flex items-center justify-center h-[100%] bg-slate-800  flex-col'>

                <img className='w-80 h-20 mx-auto mt-4'
                    src='/logo.svg' alt="logo" />

                <Outlet />
            </div>
            <Toaster />
        </>
    );
}
