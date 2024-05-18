import { urbanist } from '@/utils/fonts';
import { IoMdArrowRoundForward } from 'react-icons/io';

export default function LoginForm() {
  return (
    <article className="">
      <form className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="p-4 rounded-xl border dark:border-slate-50/20 border-slate-950/20 transition duration-300 hover:dark:border-slate-50/45 hover:border-slate-950/45"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 rounded-xl  border dark:border-slate-50/20 border-slate-950/20 transition duration-300 hover:dark:border-slate-50/45 hover:border-slate-950/45"
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
