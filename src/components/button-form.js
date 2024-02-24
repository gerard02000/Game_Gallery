import { useFormStatus } from 'react-dom';

function Button({ title }) {
    const { pending } = useFormStatus();

    return (
        <button type="submit" disabled={pending} className="inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400">
            {title}
        </button>
    );
}

export default Button;
