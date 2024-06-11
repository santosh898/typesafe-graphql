import React, { Suspense } from "react";
import ListBooks from "./ListBooks";

const App = () => (
  <div>
    <Suspense fallback={<div>Loading...</div>}>
      <ListBooks />
    </Suspense>
  </div>
);

export default App;
