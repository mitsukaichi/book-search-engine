# 21 MERN: Book Search Engine

## About this project

This project was done as part of the assignments in the UC Berkeley full stuck web developer coding bootcamp. In this assignment, the students are tasked to refactor an web app currently funtioning with a RESTful API into a GraphQL API built with Apollo Server, meeting the following requirements :

- Page has a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
- User without login can enter a search term in the input field and click the submit button to see the book data
- User can signup or login
- Logged in user can save books to their account
- Logged in user can delete the saved books
- Logged in user can log out

## Use

- Deployed URL: https://sheltered-river-36870-e89f0871c353.herokuapp.com/
- Screenshot: ![screenshot](https://github.com/mitsukaichi/book-search-engine/assets/45612744/5bdd8828-4152-4552-a052-8f4c10321c1f)

## Resources referenced while building this project

- [What is an exclamation point in GraphQL?: stackoverflow](https://stackoverflow.com/questions/50684231/what-is-an-exclamation-point-in-graphql)
- [Input object type as an argument for GraphQL mutations and queries](https://atheros.ai/blog/input-object-type-as-an-argument-for-graphql-mutations-and-queries)

## Things I learnt from this challenge

- The fact that having the GraphQL widget running while developing the server side of the element is useful

When I initially learnt about the GraphQL webUI available to query the database, I didn't see the point of this as it felt the same thing as using MySQL workbench, MongoDB Compass and Insomnia to test the API routes set up on the server side, but I realized this is useful to test out how exactly things are built on the server side and make query / mutation requests in the same syntax as we do on the client side before building things on the client side, and you can configure the queries and mutations on the client side based on the queries generated on the web UI.

![screenshot](https://github.com/mitsukaichi/book-search-engine/assets/45612744/bd160ceb-ddd6-4d10-8c4c-2bc8ffccb32d)

- The data object returned from graphQL: 

While RESTful API routes return JSON objects from the server, the useQuery React hook returns an object from Apollo Client that contains loading, error, and data properties. `data` contains the proparty with the name you configured with `gql` in the client side, and you access to the data came from the server as `data.[property name you set]`.

![screenshot](https://github.com/mitsukaichi/book-search-engine/assets/45612744/ed17d9ee-0fd0-4e44-99a1-80411d12300d)

The data inside of `data` is empty until the client receives the data from the server, so if we want to use the data coming from the server you need to wait until the `loading` turns false.

- Use `useEffect` to prevent the infinite loop

When I added the data came from the server to another useState set method, it created an infinite loop. Everytime that useState set method was called, it exeuctes its parent function again and it got into the infinite loop. I could resolve it by putting the useState set method into useEffect function with an array that contains variables as an second argument, so that the operations inside of this useEffect would only execute when those variables changes.

## License

MIT License

Copyright (c) [2023] [Minami Mukai]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.