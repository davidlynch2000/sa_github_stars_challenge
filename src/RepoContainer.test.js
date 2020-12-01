import { render, screen } from '@testing-library/react';
import RepoContainer from './RepoContainer';

test('renders wrapper with the styling around the application', () => {
    render(<RepoContainer />);
    const containerDesignation = screen.getByTestId(/componentContainer/i);
    expect(containerDesignation).toBeInTheDocument();
});

test('renders the header for the component', () => {
    render(<RepoContainer />);
    const componentHeader = screen.getByTestId(/componentHeader/i);
    expect(componentHeader).toBeInTheDocument();
});

test('renders the filter sections for the component', () => {
    render(<RepoContainer />);
    const filterSection = screen.getByTestId(/filters/i);
    expect(filterSection).toBeInTheDocument();
});

test('renders the repo list section for the component', () => {
    render(<RepoContainer />);
    const repoListSection = screen.getByTestId(/repoListSection/i);
    expect(repoListSection).toBeInTheDocument();
});