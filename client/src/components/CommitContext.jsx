import React, { createContext, useState } from 'react';
import axios from 'axios';

export const CommitContext = createContext();

export const CommitProvider = ({ children }) => {
    const [commits, setCommits] = useState([]);

    const fetchCommits = () => {
        axios.get('http://localhost:8080/commits')
            .then(response => {
                const transformedData = response.data.map(commit => ({
                    name: commit.commit.message,
                    photo: commit.author.avatar_url,
                    date: commit.commit.author.date.split('T')[0],
                    time: commit.commit.author.date.split('T')[1].substring(0,5),
                    id: commit.sha.substring(0,7),
                    username: commit.committer.login,
                }));
                setCommits(transformedData);
            })
            .catch(error => console.error('Error fetching commits:', error));
    };

    return (
        <CommitContext.Provider value={{ commits, fetchCommits }}>
            {children}
        </CommitContext.Provider>
    );
};