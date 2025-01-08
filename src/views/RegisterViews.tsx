import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"
import ErrorMessage from '../components/ErrorMessage';
import type { RegisterForm } from '../models/Users';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { isAxiosError } from 'axios';
import * as yup from 'yup';
const schema = yup.object().shape({
    name: yup.string().required('Este nombre es requerido'),
    email: yup.string().email('El email no es valido').required('Digita un email valido'),
    handle: yup.string().required('Este campo es requerido'),
    password: yup.string().required('Este campo es requerido'),
    password_confirmation: yup.string().required('Este campo es requerido').oneOf([yup.ref('password'), ''], 'Las contraseñas no coinciden')
});

export default function LoginViews() {

    const initialValues: RegisterForm = {
        name: '',
        email: '',
        handle: '',
        password: '',
        password_confirmation: ''
    }
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: initialValues,
        resolver: yupResolver(schema)
    });

    const handleRegister = async (data: RegisterForm) => {
        try {
            const response = await axios.post('http://localhost:4000/auth/register', data);
            console.log(response)
        } catch (error) {
            if (isAxiosError(error) && error.response) {
                console.log(error.response?.data?.error)
                }  
        }
        console.log(data)
    }



    return (
        <>

            <form
                onSubmit={handleSubmit(handleRegister)}
                className="bg-white px-5 py-20 my-5 rounded-lg space-y-10   w-[350px]"
            >
                <div className="grid grid-cols-1 space-y-3">
                    <label htmlFor="name" className="text-2xl text-slate-500">Nombre</label>
                    <input
                        {...register("name", { required: true })}
                        id="name"
                        type="text"
                        placeholder="Tu Nombre"
                        className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                    />
                    {
                        errors.name && <ErrorMessage message={errors?.name?.message || ''} />
                    }
                </div>
                <div className="grid grid-cols-1 space-y-3">
                    <label htmlFor="email" className="text-2xl text-slate-500">E-mail</label>
                    <input
                        {...register("email", { required: true })}
                        id="email"
                        type="email"
                        placeholder="Email de Registro"
                        className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                    />
                    {
                        errors.email && <ErrorMessage message={errors?.email?.message || 'Este campo es requerido'} />
                    }
                </div>
                <div className="grid grid-cols-1 space-y-3">
                    <label htmlFor="handle" className="text-2xl text-slate-500">Handle</label>
                    <input
                        {...register("handle", { required: true })}
                        id="handle"
                        type="text"
                        placeholder="Nombre de usuario: sin espacios"
                        className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                    />
                    {
                        errors.handle && <ErrorMessage message={errors?.handle?.message || 'Este campo es requerido'} />
                    }
                </div>
                <div className="grid grid-cols-1 space-y-3">
                    <label htmlFor="password" className="text-2xl text-slate-500">Password</label>
                    <input
                        {...register("password", { required: true })}
                        id="password"
                        type="password"
                        placeholder="Password de Registro"
                        className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                    />
                    {
                        errors.password && <ErrorMessage message={errors?.password?.message || 'Este campo es requerido'} />
                    }
                </div>

                <div className="grid grid-cols-1 space-y-3">
                    <label htmlFor="password_confirmation" className="text-2xl text-slate-500">Repetir Password</label>
                    <input
                        {...register("password_confirmation", { required: true })}
                        id="password"
                        type="password"
                        placeholder="Repetir Password"
                        className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                    />
                    {
                        errors.password_confirmation && <ErrorMessage message={errors?.password_confirmation?.message || 'Este campo es requerido'} />
                    }
                </div>

                <input
                    type="submit"
                    className="bg-cyan-400 p-3 text-lg w-full uppercase text-slate-600 rounded-lg font-bold cursor-pointer"
                    value='Crear Cuenta'
                />
            </form>

            <Link to="/auth/login">Login go</Link>
        </>
    );
}