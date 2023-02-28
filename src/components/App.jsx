import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { NotFound } from 'pages/NotFound/NotFound';
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
