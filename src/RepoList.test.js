import { render, screen } from '@testing-library/react';
import RepoList from './RepoList';

const mockProps = {
    selectedLanguage:'Javascript',
    onlyStarredRepos:'true',
};

test('renders the label associated with the language filter', () => {
    render(<RepoList {...mockProps} />);
    const listElement = screen.getByTestId(/repoListElement/i);
    expect(listElement).toBeInTheDocument();
});