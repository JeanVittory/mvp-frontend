export default function Login() {
	return (
		<article className='h-full justify-self-center place-self-center'>
			<form className='flex flex-col'>
				<input type='email' placeholder='email' />
				<input type='password' placeholder='password' />
				<button>LOGIN</button>
			</form>
		</article>
	);
}
