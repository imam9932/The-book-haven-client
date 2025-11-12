import React from 'react';

const Intro = () => {
  return (
    <div className='mt-5 bg-orange-200 rounded-md'>
      <h1 className='text-xl text-center bg-[#f22e07] font-bold text-white py-2 rounded-xl'>About The Book Haven</h1>
      <div>
        <p className='mt-5 p-3 text-[#f22e07]'>
          The Book Haven is a comprehensive online platform designed for readers, collectors, and book enthusiasts who want a smarter and easier way to explore, buy, and manage books.
In today’s fast-paced world, readers often struggle to find reliable online spaces dedicated entirely to books — not just e-commerce. The Book Haven fills that gap by creating a digital sanctuary for book lovers where passion meets convenience.

With an intuitive interface and a modern, responsive design, users can browse through thousands of books across different genres including fiction, non-fiction, mystery, fantasy, science, self-help, and more. Each book listing comes with detailed information such as author name, genre, rating, and description, allowing readers to make informed choices before purchasing or adding a title to their wishlist.

The platform also empowers registered users to add and manage their own books, giving small sellers and independent authors a space to showcase their work. Readers can create personalized profiles, upload book covers, and keep track of what they’ve added or purchased — making it not just a marketplace but a personal book management hub.

Behind the scenes, The Book Haven uses a modern tech stack — built with React for a dynamic user interface, Express.js for server-side handling, and MongoDB for secure and efficient data storage. This combination ensures speed, reliability, and scalability as the platform grows.

Whether you’re a passionate reader looking for your next favorite novel, a student searching for study materials, or a small business owner hoping to share your collection with the world — The Book Haven is the perfect destination.
It’s more than a website — it’s a community built around stories, imagination, and the love of reading.
        </p>
      </div>
    </div>
  );
};

export default Intro;