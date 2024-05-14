/* eslint-disable react/no-unescaped-entities */

import { Helmet } from "react-helmet";

export const Blogs = () => {
  return (
    <div className="  px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
     <Helmet>
        <title>THRIVEHIVE || Blogs</title>
      </Helmet>
      <p className="mb-2 text-xs font-semibold tracking-wide dark:text-white text-gray-600 uppercase sm:text-center">
        10 May 2024
      </p>
      <div className=" mb-5  ">
        <div className="mb-4">
          <a
            href="/"
            aria-label="Article"
            className="inline-block dark:text-white sm:text-center font-sans text-3xl font-extrabold leading-none tracking-tight text-black transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-4xl"
          >
            What is an access token and refresh token? How do they work and
            where should we store them on the client side?
          </a>
        </div>
        <p className="text-base text-gray-700 md:text-lg dark:text-white">
          <span className="block font-bold dark:text-white"> Access Token: </span>
          <li>
            Function: An access token acts like a key that grants temporary
            permission to access specific resources on a server. It's typically
            short-lived (e.g., minutes or hours) to enhance security.
          </li>
          <li>
            How it Works: When a user logs in to your application and authorizes
            access to their data on another server (e.g., Google Drive), an
            OAuth flow is initiated. This flow involves exchanging authorization
            codes for access tokens. The access token is then sent with each
            request to the resource server, allowing the user's application to
            access their data without requiring them to re-enter their
            credentials repeatedly.
          </li>
          <li>
            Storage: Due to security concerns, access tokens should not be
            stored permanently on the client-side (user's device). They can be
            vulnerable to theft if compromised by malicious scripts or attacks.
            Here are some better
          </li>
          <span className="block font-bold">Refresh Token:</span>
          <li>
            Function: A refresh token is a longer-lived credential (e.g., days,
            weeks, or even months) used to acquire new access tokens when the
            existing one expires. It acts like a renewal mechanism.
          </li>
          <li>
            {" "}
            How it Works: When an access token expires, the client-side
            application can send the refresh token back to the authorization
            server securely (often over HTTPS) to request a new access token.
            This eliminates the need for the user to re-authenticate every time
            the access token expires.
          </li>
          <li>
            Storage: Refresh tokens are more sensitive than access tokens but
            are still valuable for maintaining user sessions. Here's how to
            store them
          </li>
        </p>
      </div>
      {/* second  */}
      <div className=" mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-10 lg:px-8">
        <div className=" md:p-8 rounded shadow-xl sm:p-16">
          <div className="flex flex-col lg:flex-row gap-4">
            <div
              className={` mb-6 lg:mb-0 lg:w-1/2 lg:pr-5 flex justify-center items-center bg-yellow-100`}
            >
              <h2 className="font-sans text-3xl  font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                What is Express js ?
              </h2>
            </div>
            <div className="lg:w-1/2">
              <p className="mb-4 text-base text-gray-700 dark:text-white">
                <li>
                  <span className="font-semibold">
                    Simplifies Server-Side Development:
                  </span>{" "}
                  Express.js provides a clean and minimal layer on top of
                  Node.js, offering a structured approach to handling HTTP
                  requests and responses. This allows developers to focus on
                  application logic rather than low-level server details.
                </li>
                <li>
                  <span className="font-semibold">Routing:</span> A core feature
                  of Express is routing. It lets you define specific paths or
                  URLs (endpoints) in your application and associate them with
                  functions (handlers) that execute when a user requests that
                  URL. This helps organize your code and makes it easier to
                  manage different parts of your application.
                </li>
                <li>
                  <span className="font-semibold">Middleware:</span> Middleware
                  is a powerful concept in Express that allows you to intercept
                  and process incoming HTTP requests before they reach the final
                  handler. Middleware can be used for various purposes, such as
                  authentication, logging, parsing request data, and more. This
                  modular approach promotes code reusability and
                  maintainability.
                </li>
                <li>
                  <span className="font-semibold">Templating:</span> Express
                  offers support for various templating engines like Pug
                  (formerly Jade) or EJS, allowing you to create dynamic web
                  pages with HTML and embedded JavaScript code. This simplifies
                  building dynamic user interfaces.
                </li>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* third  */}
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-10 lg:px-8">
        <div className="md:p-8 rounded shadow-xl sm:p-16">
          <div className="flex flex-col lg:flex-row-reverse gap-4">
            <div
              className={` mb-6 lg:mb-0 lg:w-1/2 lg:pr-5 flex justify-center items-center bg-yellow-100`}
            >
              <h2 className="font-sans text-3xl  font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                What is Next js ?
              </h2>
            </div>
            <div className="lg:w-1/2">
              <p className="mb-4 text-base text-gray-700 dark:text-white">
                <li>
                  <span className="font-semibold">Modular Architecture:</span>{" "}
                  Inspired by Angular (a popular frontend framework), NestJS
                  promotes a modular approach. Your code is organized into
                  well-defined modules that handle specific functionalities like
                  controllers, services, and repositories. This structure
                  improves maintainability and reusability.
                </li>
                <li>
                  <span className="font-semibold">TypeScript Support:</span>{" "}
                  NestJS is built with and fully supports TypeScript, a superset
                  of JavaScript that adds optional static typing. This feature
                  helps catch potential errors early in the development process,
                  leading to more robust and reliable applications.
                </li>
                <li>
                  <span className="font-semibold">Decorators:</span> NestJS
                  leverages decorators, a syntactic feature in TypeScript, to
                  define functionalities within classes. Decorators provide a
                  clean and concise way to define routes, dependencies, and
                  other application logic.
                </li>
                <li>
                  <span className="font-semibold">
                    Integration with Popular Libraries:
                  </span>{" "}
                  NestJS integrates seamlessly with various popular libraries
                  for databases (e.g., Mongoose, TypeORM), testing (e.g., Jest),
                  and more. This broad compatibility allows developers to
                  leverage existing tools and libraries within their NestJS
                  projects.
                </li>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex max-sm:flex-col justify-between items-center gap-6 my-10">
        <div>
          <h1 className="text-center text-xl font-bold underline">
            Express js Code example
          </h1>
          <p className="text-center">
            Express.js focuses on building web applications and APIs. It
            provides a flexible framework for handling HTTP requests and
            responses. Here's an example of a simple Express route handler:
          </p>
          <div className="space-y-2 font-bold mt-5">
            <p>
              {`const express = require('express');`}
            </p>
            <p>{`const app = express()`}</p>
            <p>{` app.get('/', (req, res) => {
                    res.send('Hello from Express!');
                  })`}</p>
            <p>{` app.listen(3000, () => console.log('Server listening on port 3000'));`}</p>
          </div>
        </div>
        <div>
          <h1 className="text-center text-xl font-bold underline">
            Next js Code example
          </h1>
          <p className="text-center">
            Next.js is a full-fledged framework for building server-rendered and
            statically generated web applications. It leverages React on the
            frontend and provides features like routing, data fetching, and
            server-side rendering. Here's an example of a simple Next.js page:
          </p>
          <div className="space-y-2 font-bold mt-5">
            <p>
              {`pages/index.js`}
            </p>
            <p>{`import React from 'react';`}</p>
            <p>{` export default function HomePage() {`}</p>
              <p>
              {`return (
              <h1>Hello from Next.js!</h1> }`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
