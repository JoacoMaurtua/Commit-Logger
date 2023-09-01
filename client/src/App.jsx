import React from 'react';
import Header from './components/Header';
import Animation from './components/Animation';
import CommitList from './components/CommitList';
import { CommitProvider } from './components/CommitContext';

const App = () => {
    return (
        <CommitProvider>
            <>
                <Header />
                <div className="flex flex-col-reverse md:flex-row flex-grow">
                    <div className="hidden sm:block w-full md:w-2/5 p-4">
                        <Animation />
                    </div>
                    <div className="w-full md:w-3/5 p-4">
                        <CommitList />
                    </div>
                </div>
            </>
        </CommitProvider>
    );
};

export default App;
