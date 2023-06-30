import React from "react";
import { useParams } from "react-router-dom";
import MensajePrueba from "../common/MensajePrueba";

export default function Nube() {
  const { title } = useParams();

  return (
    <div>
        <MensajePrueba title={title} />
    </div>
  );
}