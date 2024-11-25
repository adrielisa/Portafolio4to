// src/pages/LoginPage.tsx
import React from 'react';
import LoginForm from '../components/forms/LoginForm';
import LoginGirl from '../assets/LoginGirl.jpg';
import UserService from '../services/UserService';
import { useForm } from 'react-hook-form';
import IUser from "../interfaces/TImeBoxing/IUser";

const LoginPage: React.FC = () => {
  const { handleSubmit } = useForm<IUser>();

  const handleLoginSubmit = async (data: { email: string; password: string }) => {
    try {
      const response = await UserService.getUsers(); // Aquí puedes usar getUser si tienes un ID específico
      const user = response.data.find(
        (user) => user.email === data.email && user.password === data.password
      );
      
      if (user) {
        console.log("Inicio de sesión exitoso");
        // Aquí puedes redirigir al Dashboard o guardar el usuario en el estado global
      } else {
        console.error("Usuario o contraseña incorrectos");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <div className="flex h-screen bg-stone-900 overflow-hidden">
      {/* Espacio para el formulario (7/10 del ancho) */}
      <div className="w-3/4 p-8 flex flex-col justify-center items-center h-full">
        <LoginForm onSubmit={handleSubmit(handleLoginSubmit)} />
      </div>

      {/* Espacio para la imagen (3/10 del ancho) */}
      <div className="w-1/4 h-full">
        <img src={LoginGirl} alt="Girl with cats" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default LoginPage;
