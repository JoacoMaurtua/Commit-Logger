import React from 'react';
import Header from './components/Header';
import Animation from './components/Animation';
import CommitList from './components/CommitList';

const App = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col-reverse md:flex-row flex-grow">
        <div className="w-full md:w-2/5 p-4">
          <Animation />
        </div>
        <div className="w-full md:w-3/5 p-4">
          <CommitList />
        </div>
      </div>
    </>
  );
};

export default App;