import React, { useState } from 'react';
import Repo from './Repo';
import './RepoList.css';


const RepoList = ({ selectedLanguage, onlyStarredRepos }) => {
    const [githubWeeklyTrendingRepos, setGithubWeeklyTrendingRepos] = useState(
        JSON.parse(sessionStorage.getItem("githubWeeklyTrendingRepos"))
        || []
    );

    const starAndIncrementRepo = (idx) => {
        setGithubWeeklyTrendingRepos(prevStarredRepos => {
            // copy to avoid mutating
            const starredRepos = [...prevStarredRepos];
            // optimistic update and doesn't handle error state
            starredRepos[idx] = {
                ...starredRepos[idx],
                starred: true,
                starCount: starredRepos[idx].starCount + 1,
            };
            return starredRepos;
        });
    }

    const unstarAndDecrementRepo = (idx) => {
        setGithubWeeklyTrendingRepos(prevStarredRepos => {
            // copy to avoid mutating
            const starredRepos = [...prevStarredRepos];
            // optimistic update and doesn't handle error state
            starredRepos[idx] = {
                ...starredRepos[idx],
                starred: false,
                starCount: starredRepos[idx].starCount--,
            };
            return starredRepos;
        });
    }

    return (
        <ul className="repo_list" data-testid="repoListElement">
            {githubWeeklyTrendingRepos.filter(item => {
                return (item.language === selectedLanguage || selectedLanguage === '');
            }).filter(item => {
                return (!onlyStarredRepos || item.starred === onlyStarredRepos)
            }).map((item, idx) => {
                return (
                    <Repo
                        key={`${idx}_${item.url}`}
                        idx={item.idx}
                        starred={item.starred}
                        starAndIncrementRepo={starAndIncrementRepo}
                        unstarAndDecrementRepo={unstarAndDecrementRepo}
                        name={item.name}
                        url={item.url}
                        description={item.description || 'No description provided'}
                        starCount={item.starCount}
                        language={item.language}
                    />
                );
            })}
        </ul>
    )
}

export default RepoList;