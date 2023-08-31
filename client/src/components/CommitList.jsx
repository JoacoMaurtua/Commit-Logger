import React from 'react';
import CommitItem from './CommitItem';

const CommitList = () => {
  // Dummy data for now, eventually this will come from the GitHub API
  const dummyData = Array.from({ length: 12 }, (_, i) => ({
    name: `Commit #${i + 1}`,
    photo: 'https://via.placeholder.com/50',
    date: '2023-08-29',
    time: '14:00',
    id: `${1000000 + i}`,
    username: 'JoaquinMaurtua',
  }));

  return (
    <div className="bg-310055 text-white p-4">
      <h2 className="text-2xl mb-4">Commits</h2>
      <div className="overflow-auto h-96 border-t border-5a189a">
        {dummyData.map((commit, index) => (
          <CommitItem key={index} {...commit} />
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button className="bg-ab51e3 px-4 py-2">Newer</button>
        <button className="bg-ab51e3 px-4 py-2">Older</button>
      </div>
    </div>
  );
};

export default CommitList;