// src/components/forms/LoginForm.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import InputField from '../ui/InputField';
import Button from '../ui/Button';

interface LoginFormInputs {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();
  const navigate = useNavigate();

  const onSubmit = (data: LoginFormInputs) => {
    console.log("Datos del formulario:", data);
    // Aquí puedes agregar la lógica de autenticación
    
    // Redirigir al Dashboard
    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow-md">
      <h2 className="text-center font-bold text-xl mb-4">Inicio de sesión</h2>

      <InputField
        label="Correo"
        placeholder="ejemplo@gmail.com"
        type="email"
        register={register("email", { required: "El correo es obligatorio" })}
        error={errors.email?.message}
      />

      <InputField
        label="Contraseña"
        placeholder="******"
        type="password"
        register={register("password", { required: "La contraseña es obligatoria" })}
        error={errors.password?.message}
      />

      <Button text="Iniciar sesión" classname="bg-black w-full mt-4" />
    </form>
  );
};

export default LoginForm;
