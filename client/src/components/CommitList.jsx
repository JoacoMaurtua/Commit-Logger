import React, { useState, useEffect, useContext } from 'react';
import CommitItem from './CommitItem';
import { CommitContext } from './CommitContext';

const CommitList = () => {
    const { commits, fetchCommits } = useContext(CommitContext);
    const [currentPage, setCurrentPage] = useState(1);
    const commitsPerPage = 5;

    useEffect(()=>{
        fetchCommits();
    },[]);

    //Commits pagination
    const totalPages = Math.ceil(commits.length / commitsPerPage);

    const handleNext = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const handlePrev = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const currentCommits = commits.slice((currentPage - 1) * commitsPerPage, currentPage * commitsPerPage);

    return (
        <div className="bg-[#210039] text-white p-4 mt-14 sm:p-4 sm:mb-20 md:p-4 rounded-lg">
            <h2 className="text-2xl mb-4">Commits</h2>
            <div className="overflow-auto h-96 border-t border-5a189a scrollbar-thin scrollbar-thumb-5a189a scrollbar-hide">
                {currentCommits.map((commit, index) => (
                    <CommitItem key={index} {...commit} />
                ))}
            </div>
            <div className="flex justify-center mt-8 mb-4 space-x-4">
                <button onClick={handlePrev} className="border border-white px-4 py-2 rounded-lg">
                    Newer
                </button>
                <button onClick={handleNext} className="border border-white px-4 py-2 rounded-lg">
                    Older
                </button>
            </div>
        </div>
    );
};

export default CommitList;
