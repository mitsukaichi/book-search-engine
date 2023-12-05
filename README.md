# 21 MERN: Book Search Engine

## About this project

## Acceptance Criteria

```md
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  
```

## Resources referenced while building this project

- [What is an exclamation point in GraphQL?: stackoverflow](https://stackoverflow.com/questions/50684231/what-is-an-exclamation-point-in-graphql)
- [Input object type as an argument for GraphQL mutations and queries](https://atheros.ai/blog/input-object-type-as-an-argument-for-graphql-mutations-and-queries)

## Things I learnt from this challenge

- The fact that having the GraphQL widget running while developing the server side of the element is useful

When I initially learnt about the GraphQL webUI available to query the database, I didn't see the point of this as it felt the same thing as using MySQL workbench, MongoDB Compass and Insomnia to test the API routes set up on the server side, but I think this is useful to test out how exactly things are built on the server side and make query / mutation requests in the same syntax as we do on the client side before building things on the client side, this might be useful.

![screenshot]("https://github.com/mitsukaichi/book-search-engine/assets/45612744/bd160ceb-ddd6-4d10-8c4c-2bc8ffccb32d)

- The data object returned from graphQL: 

![screenshot](https://github.com/mitsukaichi/book-search-engine/assets/45612744/ed17d9ee-0fd0-4e44-99a1-80411d12300d)




{"authors": ['Frank Herbert'],
"bookId": "UAhAEAAAQBAJ",
"description": "NOW A MAJOR MOTION PICTURE directed by Denis Villeneuve, starring Timothée Chalamet, Zendaya, Jason Momoa, Rebecca Ferguson, Oscar Isaac, Josh Brolin, Stellan Skarsgård, Dave Bautista, David Dastmalchian, Stephen McKinley Henderson, Chang Chen, Sharon Duncan-Brewster, Charlotte Rampling, and Javier Bardem. Frank Herbert’s classic masterpiece—a triumph of the imagination and one of the bestselling science fiction novels of all time. A mythic and emotionally charged hero’s journey, Dune tells the story of Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, who must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet’s exclusive supply of the most precious resource in existence—a commodity capable of unlocking humanity’s greatest potential—only those who can conquer their fear will survive.",
"image": "http://books.google.com/books/content?id=UAhAEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
"title": "Dune (Movie Tie-In)"}