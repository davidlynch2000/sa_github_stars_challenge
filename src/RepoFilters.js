import React from 'react';
import './RepoFilters.css';

const RepoFilters = ({
    allLanguages,
    setSelectedLanguage,
    onlyStarredRepos,
    setOnlyStarredRepos
}) => {
    const handleSelectChange = (e) => {
        setSelectedLanguage(e.target.value);
    }

    const handleCheckboxChange = (e) => {
        setOnlyStarredRepos(e.target.checked);
    }
    return (
        <>
            <label
                htmlFor="language"
                className="repoFilters_label"
            >
                Filter by selecting a programming language:
            </label>
            <select
                name="language"
                id="language"
                onChange={handleSelectChange}
                className="repoFilters_languageDropdown"
            >
                {/* set the value for all languages. All other options
                    will come from github */}
                <option value={''} key=''>All</option>
                {allLanguages.map(language => {
                    return (
                        <option value={language} key={language}>{language}</option>
                    );
                })}
            </select>
            <label
                className='repoFilters_label'
                htmlFor="onlyStarredRepos"
            >
                Only starred repos?
            </label>
            <input
                type='checkbox'
                name="onlyStarredRepos"
                id="onlyStarredRepos"
                checked={onlyStarredRepos}
                onChange={handleCheckboxChange}
            />
        </>
    );
}

export default RepoFilters;