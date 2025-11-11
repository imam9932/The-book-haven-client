import React from 'react';
import Banner from '../Banner';
import LatestBooks from '../LatestBooks';
import BookOfTheWeek from './BookOfTheWeek';
import Intro from '../Intro';
 
const Home = () => {
  
  return (
    <div>
<Banner></Banner>
<LatestBooks></LatestBooks>
<BookOfTheWeek></BookOfTheWeek>
<Intro></Intro>
    </div>
  );
};

export default Home;