import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as hollowStar } from '@fortawesome/fontawesome-free-regular';
import { faStar as selectedStar } from '@fortawesome/fontawesome-free-solid';
import "./Repo.css";

const Repo = (
    {
        idx,
        starred,
        starAndIncrementRepo,
        unstarAndDecrementRepo,
        name,
        url,
        description,
        starCount,
        language
    }) => {

    const selectedStarClickHandler = () => {
        unstarAndDecrementRepo(idx);
    }

    const hollowStarClickHandler = () => {
        starAndIncrementRepo(idx);
    }

    return (
        <li className="repositoryItem_repositoryItem">
            <div className='repositoryItem_starTitleAndLanguage'>
                <span className="repositoryItem_stars" data-testid="starSection">
                    {starred ?
                        <FontAwesomeIcon
                            icon={selectedStar}
                            className="repositoryItem_selectedStar"
                            onClick={selectedStarClickHandler}
                        />
                        :
                        <FontAwesomeIcon
                            icon={hollowStar}
                            className="repositoryItem_hollowStar"
                            onClick={hollowStarClickHandler}
                        />
                    }
                </span>
                <span data-testid="repoNameAndLink">
                    <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="repositoryItem_linkColor"
                    >
                        {name}{language ? ` (${language})` : ''}
                    </a>
                </span>
            </div>
            <div
                className='repositoryItem_description'
                data-testid="descriptionSection"
            >
                {description}
            </div>
            <div
                className='repositoryItem_starCount'
                data-testid="starCountSection"
            >
                {starCount} stars
            </div>
        </li>
    );
}

export default Repo;