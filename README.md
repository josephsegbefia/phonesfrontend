# PhoneWorld App

This is a simple React app called PhoneWorld that displays a list of phones along with their details. The app fetches data from an API to get information about different mobile phones and displays them in a grid layout. It also allows users to view more details of a specific phone by clicking on it.

## Features

- Displays a grid of mobile phones with their name, price, and image.
- Allows users to click on a phone to view more details in a modal.
- Provides a loading spinner while data is being fetched from the API.
- Responsive design with different grid layouts based on screen size.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Axios: A popular HTTP client for making API requests.
- React Icons: A collection of popular icons as React components.
- Modal: A React component to create modal dialogs.
- Tailwind CSS: A utility-first CSS framework for building responsive designs.

## Installation and Usage

1. Clone the repository to your local machine.

2. Navigate to the project directory in your terminal.

3. Install the dependencies using the following command:

```
npm install
```

4. Run the app in development mode with:

```
npm run dev
```

The app will open in your default web browser at `http://localhost:5173`.

## How It Works

- When the app loads, it fetches data from the API hosted at `https://phoneworld.onrender.com/phones`.
- While the data is being fetched, a loading spinner is displayed to indicate that the data is loading.
- Once the data is fetched, the list of phones is displayed in a responsive grid layout.
- When a user clicks on a phone, a modal dialog appears with more details about the selected phone, including its name, image, description, and price.
- The user can close the modal by clicking the "Close" button.

## Credits

- Data Source: The data for the phones is fetched from the API hosted at `https://phoneworld.onrender.com/phones`.
- Spinner Icon: The loading spinner is provided by the `react-icons` library, specifically the `IoMdRefresh` icon from `react-icons/io`.
- Modal: The modal dialog is created using the `Modal` component from the `react-modal` library.

## License
