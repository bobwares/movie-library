import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

describe('App', () => {
  it('renders the application shell and welcome content', () => {
    render(<MemoryRouter initialEntries={['/media']}><App /></MemoryRouter>)

    expect(screen.getByRole('link', { name: 'Movie Library' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /your movie library/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /add your first title/i })).toHaveAttribute('href', '/media')
  })
})
