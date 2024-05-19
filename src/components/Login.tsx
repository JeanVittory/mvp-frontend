'use client';

import { urbanist } from '@/utils/fonts';
import { ChangeEvent, FormEvent, useState } from 'react';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { authValidator } from '@/utils/validators/auth/joi';
import { IAuthentication, IAuthenticationErrors } from '@/interfaces/auth';
import { ValidationError } from 'joi';

export default function LoginForm() {
  const [credentials, setCredentials] = useState<IAuthentication>({
    email: '',
    password: '',
  });

  const [error, setError] = useState<IAuthenticationErrors>({
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleBlur = () => {
    validateLoginForm();
  };

  const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isNotValid = validateLoginForm();
    if (isNotValid) return;
    resetCredentialsState();
    console.log('TODO FUE BIEN');
  };

  const resetErrorState = () => {
    setError({
      email: '',
      password: '',
    });
  };

  const resetCredentialsState = () => {
    setCredentials({
      email: '',
      password: '',
    });
  };

  const validateLoginForm = () => {
    const { error } = authValidator.validate(credentials);
    if (error) {
      const key = error.details[0].context?.label as string;
      const message = error.details[0].message;
      setError({
        [key]: message,
      });
      return error;
    }
    resetErrorState();
  };

  return (
    <article className="min-w-80">
      <form className="flex flex-col gap-4" onSubmit={handleSumbit}>
        <div>
          <input
            name="email"
            value={credentials.email}
            placeholder="Email"
            className="w-full p-4 rounded-xl border dark:border-slate-50/20 border-slate-950/20 transition duration-300 hover:dark:border-slate-50/45 hover:border-slate-950/45"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {error.email ? (
            <p className="text-xs ml-2 mt-1 text-red-700 font-bold">
              {error.email}
            </p>
          ) : null}
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={credentials.password}
            placeholder="Password"
            className="w-full p-4 rounded-xl  border dark:border-slate-50/20 border-slate-950/20 transition duration-300 hover:dark:border-slate-50/45 hover:border-slate-950/45"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {error.password ? (
            <p className="text-xs ml-2 mt-1 text-red-700 font-bold">
              {error.password}
            </p>
          ) : null}
        </div>
        <button
          className={`transition duration-300 flex justify-center gap-2 dark:bg-light-100 bg-dark-100 dark:text-dark-100 text-light-100 font-medium ${urbanist} rounded-xl py-2`}
        >
          Continue
          <span className="self-center">
            <IoMdArrowRoundForward size={12} />
          </span>
        </button>
      </form>
    </article>
  );
}
