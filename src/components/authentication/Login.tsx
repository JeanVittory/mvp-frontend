'use client';

import { urbanist } from '@/utils/fonts';
import { ChangeEvent, FormEvent, useState } from 'react';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import { authValidator } from '@/utils/validators/auth/joi';
import { IAuthentication, IAuthenticationErrors } from '@/interfaces/auth';
import { authenticate } from './services';
import { SERVER_ERROR_CODE, UNAUTORIZED_CODE } from '@/constants';
import { ClipLoader } from 'react-spinners';
import { showServerErrorToast, showUnauthorizedToast } from '@/utils/toasts';

export default function LoginForm() {
  const [credentials, setCredentials] = useState<IAuthentication>({
    email: '',
    password: '',
  });

  const [error, setError] = useState<IAuthenticationErrors>({
    email: '',
    password: '',
  });

  const [isloading, setIsLoading] = useState<boolean>(false);

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setCredentials((prev) => {
      const updateCredentials = {
        ...prev,
        [name]: value,
      };
      validateLoginForm(updateCredentials);
      return updateCredentials;
    });
  };

  const handleBlur = (): void => {
    validateLoginForm(credentials);
  };

  const handleSumbit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const isNotValid = validateLoginForm(credentials);
    if (isNotValid) return;
    resetCredentialsState();
    resetErrorState();
    setIsLoading(true);
    const result = await authenticate(credentials);
    setIsLoading(false);
    if (result.code === SERVER_ERROR_CODE) showServerErrorToast();
    if (result.status === UNAUTORIZED_CODE) showUnauthorizedToast();
  };

  const resetErrorState = (): void => {
    setError({
      email: '',
      password: '',
    });
  };

  const resetCredentialsState = (): void => {
    setCredentials({
      email: '',
      password: '',
    });
  };

  const validateLoginForm = (credentials: IAuthentication) => {
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

  const handleShowPassword = (): void => {
    setShowPassword((prev) => !prev);
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
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={credentials.password}
              placeholder="Password"
              className="w-full p-4 rounded-xl  border dark:border-slate-50/20 border-slate-950/20 transition duration-300 hover:dark:border-slate-50/45 hover:border-slate-950/45"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span
              className="absolute inset-y-0 right-0 flex items-center justify-center px-3 cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <VscEye /> : <VscEyeClosed />}
            </span>
          </div>
          {error.password ? (
            <p className="text-xs ml-2 mt-1 text-red-700 font-bold">
              {error.password}
            </p>
          ) : null}
        </div>
        <button
          className={`transition duration-300 flex justify-center gap-2 dark:bg-light-100 bg-dark-100 dark:text-dark-100 text-light-100 font-medium ${urbanist} rounded-xl py-2`}
        >
          {isloading ? (
            <ClipLoader
              color={`${localStorage.getItem('theme') === 'light' ? '#ffffff' : '#000000'}`}
              loading={isloading}
              size={24}
              aria-label="Loading Spinner"
            />
          ) : (
            <>
              Continue
              <span className="self-center">
                <IoMdArrowRoundForward size={12} />
              </span>
            </>
          )}
        </button>
      </form>
    </article>
  );
}
