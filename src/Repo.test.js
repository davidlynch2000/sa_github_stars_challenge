import { render, screen } from '@testing-library/react';
import Repo from './Repo';

const mockProps = {
    idx:0,
    starred:true,
    starAndIncrementRepo:()=>{},
    unstarAndDecrementRepo:()=>{},
    name:'David\'s coding challenge',
    url:'www.github.com',
    description:'coding challenge submission ',
    starCount:'50',
    language: 'Javascript'
};

test('renders the star section of the repo item', () => {
    render(<Repo {...mockProps} />);
    const starSection = screen.getByTestId(/starSection/i);
    expect(starSection).toBeInTheDocument();
});

test('renders the repo name and link section', () => {
    render(<Repo {...mockProps} />);
    const repoNameAndLinkSection = screen.getByTestId(/repoNameAndLink/i);
    expect(repoNameAndLinkSection).toBeInTheDocument();
});

test('renders the description section of the repo item', () => {
    render(<Repo {...mockProps} />);
    const repoDescriptionSection = screen.getByTestId(/descriptionSection/i);
    expect(repoDescriptionSection).toBeInTheDocument();
});

test('renders the description section of the repo item', () => {
    render(<Repo {...mockProps} />);
    const starCountSection = screen.getByTestId(/starCountSection/i);
    expect(starCountSection).toBeInTheDocument();
});