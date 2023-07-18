"use client";
import { useEffect } from "react";
import { Container, Grid } from "@mui/material";
import { ReduxProvider } from "@src/redux/provider";
import { useAppDispatch, useAppSelector } from "@src/redux/hooks/useApp";

//import { Paginated } from "@src/components/Migration/Components";
import NavFilter from "@src/components/Courses/NavFilter/NavFilter";
import { CourseCard } from "@src/components/Courses";
import { fetchGetCourses } from "@src/redux/slices/coursesSlice";

export default function Courses() {
  const dispatch = useAppDispatch();
  const courses = useAppSelector((state) => state.courses);

  useEffect(() => {
    dispatch(fetchGetCourses({ page: 1 }));
  }, [dispatch]);
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

  if (!courses.data) {
    return <>LOADING</>;
  }
  return (
    <Container maxWidth='lg' sx={{ my: 4 }}>
      <NavFilter />
      {courses.data.courses.length ? (
        <Grid container spacing={2}>
          {courses.data.courses.map((el) => (
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