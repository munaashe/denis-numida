Here’s a focused README for the React Native side of your project:

---

# Loan Application Fintech Mobile App

This project is a simple fintech mobile application developed using React Native. The application allows users to apply for a loan by filling out a form, which is then submitted to a backend server via a REST API. The application also fetches available loan products using a GraphQL query.

## Table of Contents

- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Environment Setup](#environment-setup)
- [Running the Project](#running-the-project)
- [Security Considerations](#security-considerations)
- [Justification of Technologies](#justification-of-technologies)
- [Future Improvements](#future-improvements)

## Getting Started

This guide will help you set up and run the React Native project locally on your machine.

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v14 or higher)
- **Yarn** (preferred for package management)
- **Expo CLI** (for running the React Native project)

### Technologies Used

- **React Native**: The core framework used to build the mobile application.
- **Expo**: Managed workflow for building, running, and deploying the app.
- **Styled-Components**: For writing component-level styles in a clean, maintainable way.
- **Apollo Client**: For handling GraphQL queries and state management.
- **REST API**: For submitting loan application forms using the native `fetch` API.

## Project Structure

```bash
├── src/
│   ├── components/       # Reusable UI components (Button, Input, etc.)
│   ├── graphql/          # GraphQL client and queries
│   ├── screens/          # App screens (Home, Apply Loan, etc.)
│   ├── utils/            # Utility functions (e.g., validators)
│   └── App.tsx           # Entry point of the React Native app
├── assets/               # Fonts and images
├── .env.local            # Environment variables
├── babel.config.js       # Babel configuration for Expo
├── package.json          # Project dependencies
├── yarn.lock             # Yarn lock file
└── README.md             # Project documentation
```

## Environment Setup

### 1. Clone the Repository

```bash
git clone https://github.com/munaashe/denis-numida-assessment.git
cd frontend
```

### 2. Install Dependencies

Install the necessary Node.js packages:

```bash
yarn install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and add the following:

```bash
API_URL=http://localhost:5000
```

This points to your backend API server, which the React Native app will interact with.

## Running the Project

Start the Expo development server:

```bash
yarn ios
```

Once the server is running, use the Expo Go app on your mobile device or an emulator to scan the QR code and launch the application.

## Security Considerations

1. **Environment Variables**: API URLs and other sensitive configurations are stored in environment variables using `.env`, keeping them out of the codebase and making it easier to manage different environments.

2. **Data Validation**: The application includes basic validation to ensure data integrity before it is submitted to the backend. This is critical for ensuring that invalid data does not reach the server.

3. **Error Handling**: The app has basic error handling mechanisms in place for both GraphQL queries and REST API requests, providing feedback to the user in case of failures.

## Justification of Technologies

- **Expo**: Chosen for its simplicity and ease of use, Expo streamlines the React Native development process, allowing you to quickly build, test, and deploy mobile apps.

- **React Native**: A powerful framework that allows for building native mobile applications using JavaScript and React, providing a rich ecosystem and community support.

- **Apollo Client**: Used for managing GraphQL queries and state management, Apollo Client is a robust solution for handling complex data-fetching scenarios in a clean and efficient way.

- **Styled-Components**: This library is used to write CSS-in-JS, allowing for better component encapsulation and a cleaner, more maintainable styling approach.

## Future Improvements

- **Unit and Integration Tests**: Implement tests using Jest or React Native Testing Library to ensure the reliability and correctness of the components and features.

- **Advanced Error Handling**: Enhance error handling to cover more edge cases, such as network failures or API timeouts, and provide more detailed user feedback.

- **Performance Optimization**: Profile the app to identify and address any performance bottlenecks, ensuring a smooth user experience even with larger datasets.

- **Accessibility**: Improve accessibility by ensuring all interactive components are easily navigable and usable with screen readers and other assistive technologies.

