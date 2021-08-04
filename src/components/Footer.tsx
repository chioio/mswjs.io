import * as React from 'react'
import { Link } from 'gatsby'
import {
  RiGithubFill as GitHubIcon,
  RiDiscordFill as DiscordIcon,
  RiTwitterFill as TwitterIcon,
} from 'react-icons/ri'
import { SiOpencollective as OpenCollectiveIcon } from 'react-icons/si'
import { ReactComponent as MswLogo } from '../images/logos/msw.svg'
import { ReactComponent as VercelLogo } from '../images/logos/vercel.svg'

export function Footer() {
  return (
    <footer className="bg-black py-20 text-gray text-sm font-medium">
      <div className="container">
        <div className="grid gap-y-12 md:grid-cols-12 md:gap-x-10">
          <div className="md:col-span-6 lg:col-span-5 xl:col-span-3">
            <MswLogo width={48} className="mb-2" />
            <p className="text-base">
              Seamless REST and GraphQL API mocking library for browser and
              Node.js.
            </p>
            <ul className="mt-8 -ml-2 flex items-center spacing-md text-2xl text-gray-dark">
              <li>
                <a
                  href="https://github.com/mswjs/msw"
                  className="inline-flex hover:text-white p-2"
                  target="_blank"
                >
                  <GitHubIcon size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/ApiMocking"
                  className="inline-flex hover:text-white p-2"
                  target="_blank"
                >
                  <TwitterIcon size={24} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex hover:text-white p-2"
                  target="_blank"
                >
                  <DiscordIcon size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://opencollective.com/mswjs"
                  className="inline-flex hover:text-white p-2"
                  target="_blank"
                >
                  <OpenCollectiveIcon size={18} />
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-6 lg:col-start-7 lg:col-span-2">
            <h4 className="mb-3 text-white uppercase font-bold tracking-widest">
              Documentation
            </h4>
            <ul>
              <li>
                <Link
                  to="/docs"
                  className="inline-block py-1.5 hover:text-white"
                >
                  Fundamentals
                </Link>
              </li>
              <li>
                <Link
                  to="/docs/api/setup-worker"
                  className="inline-block py-1.5 hover:text-white"
                >
                  setupWorker
                </Link>
              </li>
              <li>
                <Link
                  to="/docs/api/setup-server"
                  className="inline-block py-1.5 hover:text-white"
                >
                  setupServer
                </Link>
              </li>
              <li>
                <Link
                  to="/docs/faq"
                  className="inline-block py-1.5 hover:text-white"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-6 lg:col-span-2">
            <h4 className="mb-3 text-white uppercase font-bold tracking-widest">
              Guides
            </h4>
            <ul>
              <li>
                <Link
                  to="/learn/guides/storybook"
                  className="inline-block py-1.5 hover:text-white"
                >
                  Storybook
                </Link>
              </li>
              <li>
                <Link
                  to="/learn/guides/cypress"
                  className="inline-block py-1.5 hover:text-white"
                >
                  Cypress
                </Link>
              </li>
              <li>
                <Link
                  to="/learn/guides/nextjs"
                  className="inline-block py-1.5 hover:text-white"
                >
                  Next.js
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-6 lg:col-span-2">
            <h4 className="mb-3 text-white uppercase font-bold tracking-widest">
              Recipes
            </h4>
            <ul>
              <li>
                <Link
                  to="/learn/recipes/cookies"
                  className="inline-block py-1.5 hover:text-white"
                >
                  Cookies
                </Link>
              </li>
              <li>
                <Link
                  to="/learn/recipes/query-parameters"
                  className="inline-block py-1.5 hover:text-white"
                >
                  Query parameters
                </Link>
              </li>
              <li>
                <Link
                  to="/learn/recipes/error-responses"
                  className="inline-block py-1.5 hover:text-white"
                >
                  Mocking error responses
                </Link>
              </li>
              <li>
                <Link
                  to="/learn/recipes/debugging-uncaught-requests"
                  className="inline-block py-1.5 hover:text-white"
                >
                  Debugging uncaught requests
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="mt-20 mb-10 border-gray-dark opacity-25" />
        <section className="text-center">
          <p>
            © {new Date().getFullYear()} Artem Zakharchenko and{' '}
            <a
              href="https://github.com/mswjs/msw/graphs/contributors"
              target="_blank"
              className="text-white hover:underline"
            >
              incredible contributors
            </a>
            .
          </p>
          <p className="inline-flex mt-1">
            Hosted by{' '}
            <a
              href="https://vercel.com/?utm_source=artemz"
              target="_blank"
              className="hover:text-white"
            >
              <VercelLogo
                className="mt-0.5 ml-1"
                height={16}
                fill="currentColor"
              />
            </a>
          </p>
        </section>
      </div>
    </footer>
  )
}
