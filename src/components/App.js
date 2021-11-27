import React from 'react';
import CreateAudition from './CreateAudition';
import Header from './Header';
import AuditionList from './AuditionList';
import Login from './Login';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route exact path="/" element={<AuditionList />} />
          <Route
            exact
            path="/create"
            element={<CreateAudition />}
          />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
