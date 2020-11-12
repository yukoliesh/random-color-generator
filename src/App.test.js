import { render, screen, waitFor, cleanup, fireEvent, getByTestId, queryByTestId, findByTestId  } from '@testing-library/react';
import App from './App';

// What to test
// Do you see the title and description?
// Do you see the Generator button?
// Does the button generate to the next color?

describe('App', () => {
  afterEach(cleanup);
  it('renders Random Color Generator Title and Desrciption', async () => {
    render(<App />);
    await screen.findByText("Color of the Day");
    await screen.findByText("Click the button and generate the lucky color of your day!");
    expect(screen.getByText("Color of the Day")).toBeInTheDocument();
    expect(screen.getByText("Click the button and generate the lucky color of your day!")).toBeInTheDocument();
  });

  it('renders Random Color Generator button', async () => {
    render(<App />);
    await screen.findByTestId("generator-button");
    expect(screen.getByTestId("generator-button")).toBeInTheDocument();
  });


  it('renders Random Color when the generator button is clicked', async () => {
    const randomColor = "#7AB768";
    render(<App />);
    await screen.findByTestId("generator-button");
    fireEvent.click(screen.getByTestId("generator-button"));
    expect(randomColor).toMatch("#7AB768");
  });
})


