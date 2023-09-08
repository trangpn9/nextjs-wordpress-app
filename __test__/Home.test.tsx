/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';
import { describe } from 'node:test';

describe('Home', () => {
  it('should have Docs text', () => {
    //Arrange
    render(<Home />);

    //Actions
    const myElem = screen.getByText("Docs");

    //Assert
    expect(myElem).toBeInTheDocument();
  });
})
