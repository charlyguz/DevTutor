import React from "react";
import { useParams } from "react-router-dom";
import MensajePrueba from "../common/MensajePrueba";

export default function CursoR() {
  const { curso } = useParams();

  return (
    <div>
        <MensajePrueba curso={curso} />
    </div>
  );
}
