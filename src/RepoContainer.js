import React, { useState, useEffect } from 'react';
import RepoFilters from './RepoFilters';
import RepoList from './RepoList';
import './RepoContainer.css';

const RepoContainer = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [onlyStarredRepos, setOnlyStarredRepos] = useState(false);
    const [allLanguages, setAllLanguages] = useState([]);

    useEffect(() => {
        const fetchTheRepos = async () => {
            let data = await fetch('https://api.github.com/search/repositories?q=created:%3E2017-01-10&sort=stars&order=desc');
            let json = await data.json();

            // gets an array of all unique languages by using the filter method to eliminate the null values, 
            // then deduplicates by transforming the non-null values to a set and then back to an array.
            // TODO: Some languages are being returned that don't seem to be associated with any repos...
            setAllLanguages([...new Set(
                json.items
                    .filter(item => item.language)
                    .map(item => item.language)
            )]);
            // doesn't check for existence in localstorage, since we want users to be able to star a fresh set of repos
            // on every refresh
            localStorage.setItem('githubWeeklyTrendingRepos', JSON.stringify(json.items.map((item,idx) => {
                return {
                    idx:idx,
                    starred: false,
                    name: item.name,
                    url: item.html_url,
                    description: item.description,
                    starCount: item.stargazers_count,
                    language: item.language,
                }
            })));
        }
        fetchTheRepos();
    }, []);

    return (
        <div className="componentContainer" data-testid="componentContainer">
            <header>
                <h3 className="repo_componentHeader" data-testid="componentHeader">
                    Click The Stars Of Your Favorite Trending Repos!
                </h3>
            </header>
            <section className='repo_filters' data-testid="filters">
                <RepoFilters
                    setSelectedLanguage={setSelectedLanguage}
                    selectedLanguage={selectedLanguage}
                    allLanguages={allLanguages}
                    onlyStarredRepos={onlyStarredRepos}
                    setOnlyStarredRepos={setOnlyStarredRepos}
                />
            </section>
            <section data-testid="repoListSection">
                <RepoList
                    selectedLanguage={selectedLanguage}
                    onlyStarredRepos={onlyStarredRepos}
                />
            </section>
        </div>
    );
}

export default RepoContainer;