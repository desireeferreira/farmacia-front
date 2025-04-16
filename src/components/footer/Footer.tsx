import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
  return (
    <div className="flex justify-center bg-purple-500 text-white">
      <div className="container flex flex-col items-center py-4">
        <p className="text-xl font-bold">FarmaGen | Copyright © 2025</p>
        <p className="text-lg">Acesse nossas redes sociais</p>
        <div className="flex gap-2">
          <a
            href="https://www.linkedin.com/in/desireeferreira6/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinLogo size={48} weight="bold" />
          </a>
          <a
            href="https://www.instagram.com/desireecodes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramLogo size={48} weight="bold" />
          </a>
          <a
            href="https://github.com/desireeferreira"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubLogo size={48} weight="bold" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
