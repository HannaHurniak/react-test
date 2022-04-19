import { Routes, Route, Link } from "react-router-dom";

import Zebra from './../components/Zebra/Zebra';
import Giraffe from './../components/Giraffe/Giraffe';
import Lion from './../components/Lion/Lion';
import Leopard from './../components/Leopard/Leopard';
import Home from './../components/Home/Home';
import Error from './../components/Error/Error';

export const Routers = () => {
  return (<Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/zebra" element={<Zebra />} />
    <Route path="/giraffe" element={<Giraffe />} />
    <Route path="/lion" element={<Lion />} />
    <Route path="/leopard" element={<Leopard />} />
    <Route path="*" element={<Error />} />
  </Routes>);
};
