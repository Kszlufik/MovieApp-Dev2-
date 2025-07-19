import React from "react";
import { useQuery } from "react-query";
import { getPopularActors } from "../api/tmdb-api";
import { Link } from "react-router-dom";

interface Actor {
  id: number;
  name: string;
  profile_path: string | null;
}

const ActorsPage: React.FC = () => {
  const { data: actors = [], isLoading, isError, error } = useQuery<Actor[]>(
    ["popularActors"],
    getPopularActors
  );

  if (isLoading) return <p>Loading popular actors...</p>;
  if (isError) return <p>Error: {(error as Error).message}</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Popular Actors</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {actors.map(actor => (
          <Link key={actor.id} to={`/actors/${actor.id}`}>
            <div className="bg-white rounded-xl shadow p-2 hover:shadow-lg transition">
              {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                  alt={actor.name}
                  className="rounded"
                />
              ) : (
                <div className="bg-gray-200 h-48 flex items-center justify-center text-sm text-gray-600 rounded">
                  No Image
                </div>
              )}
              <p className="text-center mt-2 text-sm">{actor.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ActorsPage;
