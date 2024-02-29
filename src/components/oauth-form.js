import React from 'react';
import { loginGoogle, loginGithub, loginTwitch, loginDiscord } from "@/lib/actions"; // Importa las funciones de inicio de sesión de Google y Github

function OAuthForm() {

  return (
    <>
      <form className='oauth'>
        <div className="mt-7 flex flex-col gap-2">

          <button formAction={loginGithub} className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
            <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub" className="h-[18px] w-[18px]" />
            Continue with GitHub
          </button>

          <button formAction={loginGoogle} className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-[18px] w-[18px]" />
            Continue with Google
          </button>

          <button formAction={loginTwitch} className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
            <img src="https://simpleicons.org/icons/twitch.svg" alt="Twitch" className="h-[18px] w-[18px]" />

            Continue with Twitch
          </button>

          <button formAction={loginDiscord} className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
            <img src="https://simpleicons.org/icons/discord.svg" alt="Discord" className="h-[18px] w-[18px]" />
            Continue with Discord
          </button>
        </div>
      </form>
    </>
  )
}

export default OAuthForm;
