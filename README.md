# Fridays Project

## Overview
The **Fridays Project** is a web application built using **Next.js** and **React**. It is designed to calculate and display the number of specific days (e.g., Fridays) between a user's current age and a target age. The application provides an interactive interface for users to select their current age, target age, and a specific day of the week to analyze.

## Features
- **Age Range Analysis**: Users can input their current age and target age to calculate the number of specific days (e.g., Fridays) within that range.
- **Day Selection**: Users can select any day of the week to analyze.
- **Dynamic Results**: The app dynamically calculates and displays the total number of selected days, along with detailed breakdowns.
- **Interactive UI**: Built with React and styled for a modern, responsive user experience.

## Technology Stack
- **Next.js**: For server-side rendering and routing.
- **React**: For building the user interface.
- **Turbopack**: For optimized bundling and performance.
- **TypeScript**: For type safety and better developer experience.

## Key Components
- **`analyzeLifeRange.ts`**: A utility function that calculates the number of specific days between the given age range.
- **`components/greeting.tsx`**: A reusable component for displaying greetings.
- **`app/page.tsx`**: The main page of the application, where users interact with the form and view results.

## How It Works
1. **Input Selection**: Users select their current age, target age, and a day of the week.
2. **Calculation**: The app uses the `analyzeLifeRange` function to compute the total number of the selected days within the specified age range.
3. **Results Display**: The results, including a breakdown of day counts and total days, are displayed dynamically on the page.

## Getting Started
### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/fridays.git
   cd fridays
```markdown
# Fridays Project

## Overview
The **Fridays Project** is a web application built using **Next.js** and **React**. It is designed to calculate and display the number of specific days (e.g., Fridays) between a user's current age and a target age. The application provides an interactive interface for users to select their current age, target age, and a specific day of the week to analyze.

## Features
- **Age Range Analysis**: Users can input their current age and target age to calculate the number of specific days (e.g., Fridays) within that range.
- **Day Selection**: Users can select any day of the week to analyze.
- **Dynamic Results**: The app dynamically calculates and displays the total number of selected days, along with detailed breakdowns.
- **Interactive UI**: Built with React and styled for a modern, responsive user experience.

## Technology Stack
- **Next.js**: For server-side rendering and routing.
- **React**: For building the user interface.
- **Turbopack**: For optimized bundling and performance.
- **TypeScript**: For type safety and better developer experience.

## Key Components
- **`analyzeLifeRange.ts`**: A utility function that calculates the number of specific days between the given age range.
- **`components/greeting.tsx`**: A reusable component for displaying greetings.
- **`app/page.tsx`**: The main page of the application, where users interact with the form and view results.

## How It Works
1. **Input Selection**: Users select their current age, target age, and a day of the week.
2. **Calculation**: The app uses the `analyzeLifeRange` function to compute the total number of the selected days within the specified age range.
3. **Results Display**: The results, including a breakdown of day counts and total days, are displayed dynamically on the page.

## Getting Started
### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/fridays.git
   cd fridays
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application
- **Development Mode**:
  ```bash
  npm run dev
  # or
  yarn dev
  ```
  The app will be available at `http://localhost:3000`.

- **Production Build**:
  ```bash
  npm run build
  npm start
  # or
  yarn build
  yarn start
  ```


## Folder Structure
```
fridays/
├── app/
│   ├── page.tsx          # Main application page
│   ├── layout.tsx        # Layout component
├── components/
│   ├── greeting.tsx      # Greeting component
├── analyzeLifeRange.ts   # Utility function for calculations
├── .next/                # Next.js build output
├── public/               # Static assets
├── README.md             # Project documentation
```

## Future Enhancements
- Add support for multiple day selections.
- Improve UI/UX with additional animations and themes.
- Integrate user authentication for personalized experiences.
- Add localization support for multiple languages.

## License
This project is licensed under the MIT License.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## Contact
For questions or feedback, please contact [aromibenard@gmail.com].
```

