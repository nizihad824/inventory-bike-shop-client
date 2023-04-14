import React from 'react';
import { TabTitle } from '../../../utilities/FunctionTitle';

const Blogs = () => {

    TabTitle('Blog');

  const blogPosts = [
    {
      title: '13.1 Difference between JavaScript and Node.js',
      content: `
        JavaScript is a programming language that can run in web browsers and provides interactivity to websites. It was initially created to run only on the client-side (web browsers) but has evolved over the years.

        Node.js is a runtime environment that allows JavaScript to be executed on the server-side. It is built on top of the V8 JavaScript engine and provides additional features, like an asynchronous event-driven architecture, to build scalable and performant web applications.
      `,
    },
    {
      title: '13.2 When should you use Node.js and when should you use MongoDB',
      content: `
        Node.js should be used when you want to build server-side applications, APIs, or real-time applications like chat applications or online gaming. It is ideal for handling numerous simultaneous connections with its event-driven and non-blocking architecture.

        MongoDB is a NoSQL database that should be used when you need a flexible and scalable data storage solution. It stores data in a JSON-like format, which makes it easy to work with in JavaScript-based applications like those built with Node.js. Use MongoDB when you have a document-based data model, need to handle large amounts of unstructured data, or require horizontal scaling.
      `,
    },
    {
      title: '13.3 Differences between SQL and NoSQL databases',
      content: `
        SQL databases, also known as Relational Databases, use structured query language (SQL) to define and manipulate the data. They follow a fixed schema, use tables to store data, and rely on relationships between those tables.

        NoSQL databases, or non-relational databases, do not use SQL to interact with the data. They can have a flexible schema or no schema at all. There are different types of NoSQL databases, such as document-based, key-value, column-family, and graph databases.

        Some key differences between SQL and NoSQL databases include:
        1. SQL databases are based on a fixed schema, while NoSQL databases are schema-less.
        2. SQL databases use tables with rows and columns, while NoSQL databases use different data models (document, key-value, etc.).
        3. SQL databases are generally better for complex queries and transactions, while NoSQL databases are better for handling large volumes of unstructured data.
      `,
    },
    {
       
            title: '13.4 What is the purpose of JWT and how does it work',
            content: `
              JSON Web Token (JWT) is a compact, URL-safe method for securely transmitting information between parties as a JSON object. JWT is often used for authentication and authorization purposes.
      
              The purpose of JWT is to provide a secure way to authenticate users and transmit information. It enables stateless authentication, meaning the server does not need to store any session data.
      
              A JWT consists of three parts: Header, Payload, and Signature. The Header contains metadata about the token, such as the algorithm used for signing. The Payload contains the actual data (claims) being transmitted. The Signature is used to verify the authenticity of the token.
      
              When a user logs in, the server generates a JWT with the user's information and signs it. The JWT is then sent to the client, which stores it (usually in local storage or a cookie). When the client needs to access a protected route or resource, it sends the JWT along with the request. The server verifies the token's signature, and if it's valid, it processes the request accordingly.`,
    }
]


return (
    <div className="p-4">
      <h1 className="text-4xl text-center font-bold my-6">Blog</h1>
      {blogPosts.map((post, index) => (
        <div
          key={index}
          className=" gap-6 mt-16 text-black"
          style={{ backgroundColor: '#D4D8CA' }}
          
        >
          <div className="card-body grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <h2 className="card-title text-2xl font-bold">{post.title}</h2>
            <p className="text-base">{post.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;