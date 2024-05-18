'use client';

import { urbanist } from '@/utils/fonts';
import { ChangeEvent, FormEvent, useState } from 'react';
import { IoMdArrowRoundForward } from 'react-icons/io';

export default function LoginForm() {
  const [credentials, setCredentials] = useState({
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

  const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(credentials);
  };

  return (
    <article className="min-w-80">
      <form className="flex flex-col gap-4" onSubmit={handleSumbit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="p-4 rounded-xl border dark:border-slate-50/20 border-slate-950/20 transition duration-300 hover:dark:border-slate-50/45 hover:border-slate-950/45"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="p-4 rounded-xl  border dark:border-slate-50/20 border-slate-950/20 transition duration-300 hover:dark:border-slate-50/45 hover:border-slate-950/45"
          onChange={handleChange}
        />
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
