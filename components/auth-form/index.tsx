"use client";

import { useCallback, useEffect, useState } from 'react';
import axios from "axios";
import { signIn, useSession } from 'next-auth/react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
// import useRoutes from "@/app/hooks/useRoutes";
import { useRouter } from "next/navigation";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
  const session = useSession();
  const router = useRouter();
  // const routes = useRoutes();
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (session?.status === 'authenticated') {
      router.push('/pimpampollo')
    }
  }, [session?.status, router]);

  console.log("session", session);

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    }
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn('credentials', {
      ...data,
      redirect: false
    })
    .then((callback) => {
      console.log('calback', callback);


      if (callback?.error) {
        console.log('Invalid credentials!');
      } else {
        router.push('/pimpampollo')
      }

      if (callback?.ok) {
      }
    })
    .finally(() => setIsLoading(false))
  }

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="block w-full mb-4">
        <Input
          placeholder="Correo Electronico"
          register={register}
          id="email"
          required
          errors={errors}
        />
      </div>
      <div className="block w-full">
        <Input
          placeholder="Contraseña"
          register={register}
          id="password"
          required
          errors={errors}
        />
      </div>
      <a
        href="#"
        className="text-violet-700 block py-4 text-right cursor-pointer mb-4"
      >
        ¿Has olvidado tu contraseña?
      </a>
      <Button label="Iniciar sesión" onClick={() => console.log()} />
      <p className="text-slate-400 block py-8 text-center">
        ¿No tienes cuenta?
        <a
          href="/register"
          className="text-violet-700 py-4 cursor-pointer ml-2 font-semibold"
        >
          Registrate
        </a>
      </p>
    </form>
  );
};

export default AuthForm;
