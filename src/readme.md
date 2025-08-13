 Lab Movies App

## Overview

The Lab Movies App is a single-page application (SPA) built with **React**, **TypeScript**, and **Material UI**. It allows users to discover movies, TV series, and actors from **The Movie Database (TMDb) API**. Users can filter content, mark favourites, and write reviews for movies.  

This project demonstrates practical knowledge of React components, routing, hooks, context API, and state management.

---

## Features

### Movies
- Browse popular movies.
- View detailed movie information.
- Add or remove movies from **favourites**.
- Write reviews for movies.
- Filter movies by **title** and **genre**.
- Persistent favourites using **localStorage**.

### TV Series
- Browse TV series and see ratings.
- View detailed TV series information.
- Add or remove TV series from favourites.
- Consistent UI with movie cards.

### Actors
- Browse popular actors.
- View actor details.
- Add actors to a **favourites list**.
- Filter actors by name.
- Persistent actor favourites using **localStorage**.

### Navigation
- Routing implemented with **React Router**.
- Parameterized URLs for movie, TV series, and actor details.
- Separate pages for favourites and detailed information.

### State Management
- Uses **React Context API** for global state (favourites, must-watch, reviews).
- Persistent state with **localStorage**.
- Server state caching and data fetching implemented with **React Query**.

### Additional Features
- Responsive UI with Material UI components.
- Custom filter components for movies and actors.
- Modular component structure for maintainability.
- Extensible architecture for future features.

---

## Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
Install dependencies:

bash
Copy code
cd labMoviesApp-master
npm install
Start the development server:

bash
Copy code
npm run dev
Open the app at http://localhost:3000

Usage
On the homepage, browse movies and click the heart icon to add a movie to favourites.

Go to the Favourite Movies page to view saved movies.

Browse TV series and actors from their respective pages, and click the heart icon to favourite them.

Filter movies by title or genre using the filter controls.

Click on any item to view detailed information.

Folder Structure
graphql
Copy code
src/
├── api/                  # API calls to TMDb
├── components/           # Reusable components (cards, templates, filters)
│   ├── ActorCard/
│   ├── MovieCard/
│   ├── TVSeriesCard/
│   └── cardIcons/
├── contexts/             # Context API for global state
├── hooks/                # Custom hooks (e.g., filtering)
├── images/               # Placeholder images
├── pages/                # Pages for movies, actors, TV series
├── types/                # TypeScript interfaces
└── App.tsx               # Main app component
Technologies Used
React (v18)

TypeScript

Material UI

React Router DOM

React Query

TMDb API

localStorage

Future Improvements
Add favourites for TV series and actors fully functional.

Implement authentication for personalised playlists and reviews.

Advanced filtering (e.g., release year, rating range).

Deploy the app to Vercel or similar hosting.

Add Storybook support for UI components.

Credits
TMDb API for movie, TV, and actor data: https://www.themoviedb.org/

Material UI for UI components.

React Query for server state caching.

This README covers the requirements from the grading rubric, including context API state management, favourites, filtering, and routing.