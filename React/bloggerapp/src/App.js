import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";
import "./App.css";

function App() {

  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;

  return (
    <div className="App">

      <h1>Blogger App</h1>

      {/* Method 1 : if using variable */}

      {showBooks ? <BookDetails /> : null}

      {/* Method 2 : Logical AND */}

      {showBlogs && <BlogDetails />}

      {/* Method 3 : Ternary */}

      {showCourses ? <CourseDetails /> : <h3>No Courses Available</h3>}

    </div>
  );
}

export default App;