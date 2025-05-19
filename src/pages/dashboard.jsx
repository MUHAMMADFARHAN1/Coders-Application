import React from "react";

import { useSelector } from "react-redux";

export default function Dashboard() {
  const auth = useSelector((store) => store.authenticated);

  console.log(auth);
  return (
    <div>
      <p>Dashboard</p>
    </div>
  );
}
