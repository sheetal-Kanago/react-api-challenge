import { render, screen } from '@testing-library/react';
import App from './App';
import useEvent from '@testing-library/user-event'; //default export so no {} required.

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/All about beers.../i);
  expect(linkElement).toBeInTheDocument();
});

it ("Should display all cards when no filter is set",() =>{
  render (<App />);
  const beerNamesLsit= screen.getAllByRole("h2");
  expect(beerNamesLsit.length).toBe(25);
  

  // const {testApp}=render (<App />);
  // const beerNamesLsit= testApp.getAllByRole("h2");
  // expect(beerNamesLsit.length).toBe(25);

  // expect(testApp.getElementsByClassName('card').length).toBe(25);
})

xit("should submit the form with valid fields",()=>{
  render(<Form />)
  const nameInput = screen.getByRole("textbox",{name: /Name/});
  useEvent.type(nameInput,"SK");
  const emailInput=screen.getByRole("textbox",{name: /Email/});
  useEvent.type(emailInput,"valid@email");
  const btnSignIn=screen.getByRole("button",{name: /Sign In/});
  useEvent.click(btnSignIn);
  //Assert
  //expect error to not be displayed
  const errorMessage=screen.queryByText(/Sorry something went wrong/i);
  expect(errorMessage).not.toBeInTheDocument();
  // expect success message to be displayed
  const successMessage=screen.queryByText(/Thank you for submitting! We'll be in touch/i);
  expect(successMessage).toBeInTheDocument();
})