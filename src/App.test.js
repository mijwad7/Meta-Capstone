import { render, screen, fireEvent, renderHook } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

const initializeTimes = () => {
  return [
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
  ];
};

const availableTimes = [
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
];
const dispatch = jest.fn();

test("Renders the BookingForm heading", () => {
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

test("Test initializeTimes function", () => {
  const { result } = renderHook(() => initializeTimes(availableTimes));
  expect(result.current).toEqual(availableTimes);
});

test("Input fields update correctly", () => {
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);
  const firstNameInput = screen.getByLabelText("First Name");
  fireEvent.change(firstNameInput, { target: { value: "John" } });
  expect(firstNameInput.value).toBe("John");

  const lastNameInput = screen.getByLabelText("Last Name");
  fireEvent.change(lastNameInput, { target: { value: "Doe" } });
  expect(lastNameInput.value).toBe("Doe");

  const emailInput = screen.getByLabelText("Email");
  fireEvent.change(emailInput, { target: { value: "johndoe@example.com" } });
  expect(emailInput.value).toBe("johndoe@example.com");
});

test("Form can be submitted by a user", () => {
  render(<BookingForm availableTimes={[]} dispatch={() => {}} />);

  // Find form elements
  const firstNameInput = screen.getByLabelText("First Name");
  const lastNameInput = screen.getByLabelText("Last Name");
  const emailInput = screen.getByLabelText("Email");
  const dateInput = screen.getByLabelText("Choose date");
  const timeInput = screen.getByLabelText("Choose time");
  const submitButton = screen.getByText("Book Now");

  // Simulate user input
  fireEvent.change(firstNameInput, { target: { value: "John" } });
  fireEvent.change(lastNameInput, { target: { value: "Doe" } });
  fireEvent.change(emailInput, { target: { value: "johndoe@example.com" } });
  fireEvent.change(dateInput, { target: { value: "2023-01-01" } });

  // Verify that user input has been updated
  expect(firstNameInput.value).toBe("John");
  expect(lastNameInput.value).toBe("Doe");
  expect(emailInput.value).toBe("johndoe@example.com");
  expect(dateInput.value).toBe("2023-01-01");

  // Submit the form
  fireEvent.click(submitButton);

});
