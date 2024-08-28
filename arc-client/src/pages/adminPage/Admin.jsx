import { useState, useEffect } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TopPanel from "./components/shared/TopPanel";
import Dashboard from "./components/panels/dashboard/Dashboard";

// users/studentList components
import CurrentStudents from "./components/panels/dashboard/CurrentStudents";
import FilterStudent from "./components/panels/users/FilterStudent";
import StudentList from "./components/panels/users/StudentList";

// academics/curriculum components
import FilterCurr from "./components/panels/academics/curriculum/FilterCurr";
import CurrList from "./components/panels/academics/curriculum/CurrList";
import FilterSubject from "./components/panels/academics/subject/FilterSubject";
import SubjectList from "./components/panels/academics/subject/SubjectList";
import FilterChapter from "./components/panels/academics/chapter/FilterChapter";
import ChapterList from "./components/panels/academics/chapter/ChapterList";
import FilterRecVideo from "./components/panels/manageLib/recVideos/FilterRecVideo";
import VideoList from "./components/panels/manageLib/recVideos/VideoList";

const Layout = ({ isDarkMode, toggleTheme }) => {
  return (
    <div
      className={`min-h-screen ${isDarkMode ? "bg-gray-800" : "bg-gray-100"}`}
    >
      <Sidebar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <div className="ml-0">
        <TopPanel isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <div className="p-4 mt-4">
          <Outlet /> {/* Nested routes */}
        </div>
      </div>
    </div>
  );
};

const Admin = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "autumn"
    );
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Routes>
      <Route
        element={<Layout isDarkMode={isDarkMode} toggleTheme={toggleTheme} />}
      >
        <Route
          path="/"
          element={
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-center underline mb-0">
                Admin dashboard
              </h2>
              <Dashboard isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
              <CurrentStudents
                isDarkMode={isDarkMode}
                toggleTheme={toggleTheme}
              />
            </div>
          }
        />
        <Route
          path="students"
          element={
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-center underline mb-10">
                Stundent list
              </h2>
              <FilterStudent
                isDarkMode={isDarkMode}
                toggleTheme={toggleTheme}
              />
              <StudentList isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            </div>
          }
        />

        <Route
          path="curriculum"
          element={
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-center underline mb-10">
                Curriculum Panel
              </h2>
              <FilterCurr isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
              <CurrList isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            </div>
          }
        />

        <Route
          path="subject"
          element={
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-center underline mb-10">
                Subject Panel
              </h2>
              <FilterSubject
                isDarkMode={isDarkMode}
                toggleTheme={toggleTheme}
              />
              <SubjectList isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            </div>
          }
        />

        <Route
          path="chapter"
          element={
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-center underline mb-10">
                Chapter panel
              </h2>
              <FilterChapter
                isDarkMode={isDarkMode}
                toggleTheme={toggleTheme}
              />
              <ChapterList isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            </div>
          }
        />

        <Route
          path="video"
          element={
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-center underline mb-10">
                Recorded video panel
              </h2>
              <FilterRecVideo isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
              <VideoList isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            </div>
          }
        />
      </Route>
    </Routes>
  );
};

export default Admin;
