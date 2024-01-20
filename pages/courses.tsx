"use client";
import { Container, Grid } from "@mui/material";
import { ReduxProvider } from "@src/modules/shared/redux/provider";

//import { Paginated } from "@src/components/Migration/Components";
import NavFilter from "@src/modules/courses/components/NavFilter/NavFilter";
import { CourseCard } from "@src/modules/courses/components";
import { useGetCoursesQuery } from "@src/modules/courses/services/courses.service";
import { useState } from "react";

export default function Courses() {
  const [currentGenreId, setCurrentGenreId] = useState("all");
  const { data: courses } = useGetCoursesQuery({ page: 1, genre: currentGenreId })

  /* const [showModal, setShowModal] = useState(false);
  const isLoggedIn = useSelector((state: any) => state.isLoggedIn);
  const user = useSelector((state: any) => state.user);
  const isAdmin = user?.admin;

  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistorInstance}>
          AQUI
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route
                path='/detalle-curso/:courseId'
                element={<CourseDetail />}
              />

              {isLoggedIn ? (
                <>
                  <Route
                    path='/clase/:courseId/:videoId'
                    element={<ClassDetail />}
                  />
                  <Route path='/ChatSala' element={<ChatSala />} />
                  <Route path='/cursos' Component={MyCourses} />
                </>
              ) : (
                <Route
                  path='*'
                  element={<Modal onClose={() => setShowModal(false)} />}
                />
              )}
              {isAdmin && <Route path='/dashboard' element={<Dashboard />} />}
            </Routes>
            <Footer />
          </BrowserRouter>
          {showModal && <Modal onClose={() => setShowModal(false)}></Modal>}
        </PersistGate>
      </Provider>
    </div>
  ); */

  const handleUpdateGenre = (id: string) => {
    setCurrentGenreId(id)
  }

  if (!courses) {
    return <>LOADING</>;
  }
  return (
    <Container maxWidth='lg' sx={{ my: 4 }}>
      <NavFilter genre={currentGenreId} onUpdateGenre={handleUpdateGenre} />
      {courses.courses.length ? (
        <Grid container spacing={2}>
          {courses.courses.map((el) => (
            <Grid key={el.id} item xs={2}>
              <CourseCard
                id={el.id}
                title={el.title}
                image={el.image}
                duration={el.duration}
                level={el.level}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <h2>No se ha encontrado ningun curso</h2>
      )}
    </Container>
  );
}

Courses.getLayout = function getLayout(page) {
  return <ReduxProvider>{page}</ReduxProvider>;
};
