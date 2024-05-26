import { playfair_display } from '@/utils/fonts';

export default function LoginText() {
  return (
    <div>
      <h2 className={`${playfair_display} text-clamp leading-none text-center`}>
        Tu efectivo bajo control.
      </h2>

      <h2 className={`${playfair_display} text-clamp leading-none text-center`}>
        Accede y gestiona
        <span className="text-purple"> tu cierre con éxito.</span>
      </h2>
    </div>
  );
}
