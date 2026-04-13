import React from 'react'
import { useParams } from "react-router-dom";
import LesenTeil1 from '../components/lesen-teil-1';
function LesenTeilPage() {
  const { id } = useParams<{ id: string }>();
 
  switch (id) {
    case "1":
      return <LesenTeil1 />;
    case "2":
      return <LesenTeil1 />;
    case "3":
      return <LesenTeil1 />;
    default:
      return <div>Teil nicht gefunden</div>;
  }
}

export default LesenTeilPage