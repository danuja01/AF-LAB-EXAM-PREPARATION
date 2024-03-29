import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Users from "./pages/Users";
import MovieDetails from "./pages/MovieDetails";
import UserDetails from "./pages/UserDetails";
import NavBar from "./components/NavBar";
import { Context } from "./context/Context";
import { useContext } from "react";

function App() {
  const { movies, users } = useContext(Context);

  return (
    <BrowserRouter>
      <NavBar />
      <div style={{ padding: "2rem" }}>
        <Routes>
          <Route path="/" element={<Home movies={movies} users={users} />} />
        </Routes>
        <Routes>
          <Route path="/movie" element={<Movies movies={movies} />} />
        </Routes>
        <Routes>
          <Route
            path="/user"
            element={<Users users={users} movies={movies} />}
          />
        </Routes>
        <Routes>
          <Route path="/movieDetails/:id" element={<MovieDetails />} />
        </Routes>
        <Routes>
          <Route
            path="/userDetails/:id"
            element={<UserDetails movies={movies} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
