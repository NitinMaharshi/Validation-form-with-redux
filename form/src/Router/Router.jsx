import React from "react";
import { Route, Routes } from "react-router-dom";
import Form from "../Components/Form";
import Error from "../Components/Error";
import NotFound from "../Components/NotFound";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/error" element={<Error />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Router;
