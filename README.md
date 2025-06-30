# React Movie Favorites App

This is a simple React application that allows users to search for movies, view a list of movies, and add or remove movies from their favorites. Favorites are persisted in the browser's local storage.

## Features
- Search for movies by title
- View a list of sample movies
- Add or remove movies from your favorites
- View your list of favorite movies on a separate page
- Favorites are saved in local storage and persist across sessions

## Project Structure
```
frontend/
  ├── public/
  ├── src/
  │   ├── assets/
  │   ├── components/
  │   │   └── MovieCard.jsx
  │   ├── contexts/
  │   │   └── MovieContext.jsx
  │   ├── pages/
  │   │   ├── Favorites.jsx
  │   │   └── Home.jsx
  │   ├── App.jsx
  │   ├── main.jsx
  │   └── ...
  ├── package.json
  ├── vite.config.js
  └── ...
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd React-Movie-Tutorial/frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open your browser and go to `http://localhost:5173` (or the port shown in your terminal).

## Usage
- Use the search bar on the Home page to filter movies by title.
- Click the heart button on a movie card to add or remove it from your favorites.
- Navigate to the Favorites page using the NavBar to view your favorite movies.

## Technologies Used
- React
- React Router
- Context API
- Vite
- CSS Modules

## Folder Descriptions
- `components/`: Reusable UI components (e.g., MovieCard)
- `contexts/`: React Context for managing favorites
- `pages/`: Main pages (Home, Favorites)
- `assets/`: Static assets (images, etc.)

## License
This project is for educational purposes.
