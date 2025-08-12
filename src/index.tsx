import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Navigate, Routes,} from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage"; 
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import ActorsPage from "./pages/ActorsPage";
import ActorDetailsPage from "./pages/ActorDetailsPage";
import TVSeriesPage from "./pages/TVSeriesPage";
import TVSeriesDetailsPage from "./pages/TVSeriesDetailsPage";






const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});



const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader /> {/* New Header */}

        <MoviesContextProvider>
         <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
  <Route path="/movies/:id" element={<MoviePage />} />
  <Route path="/reviews/:id" element={<MovieReviewPage />} />
  <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
  <Route path="/reviews/form" element={<AddMovieReviewPage />} />
  <Route path="/actors/:id" element={<ActorDetailsPage />} />
  <Route path="/tv" element={<TVSeriesPage />} />
  <Route path="/tv/:id" element={<TVSeriesDetailsPage />} />




  <Route path="/actors" element={<ActorsPage />} />  
  
  <Route path="*" element={<Navigate to="/" />} />
</Routes>
        </MoviesContextProvider>

      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


