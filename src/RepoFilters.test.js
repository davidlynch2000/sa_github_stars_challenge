import { render, screen } from '@testing-library/react';
import RepoFilters from './RepoFilters';

const mockProps = {
    allLanguages: ['Javascript', 'Python']
};
test('renders the label associated with the language filter', () => {
    render(<RepoFilters {...mockProps} />);
    const languageFilterLabel = screen.getByText(/Filter by selecting a programming language/i);
    expect(languageFilterLabel).toBeInTheDocument();
});

test('renders the label associated with the starred checkbox', () => {
    render(<RepoFilters {...mockProps} />);
    const languageFilterLabel = screen.getByText(/Only starred repos?/i);
    expect(languageFilterLabel).toBeInTheDocument();
});
