import { useParams } from "react-router-dom";
import LesenTeil1 from '../components/lesen-teil-1';
import LesenTeil2 from '../components/lesen-teil-2';
import LesenTeil3 from '../components/lesen-teil-3';
import LesenTeil4 from '../components/lesen-teil-4';
import LesenTeil5 from '../components/lesen-teil-5';
function LesenTeilPage() {
  const { teilId } = useParams<{ teilId: string }>();
 
  switch (teilId) {
    case "1":
      return <LesenTeil1 />;
    case "2":
      return <LesenTeil2 />;
    case "3":
      return <LesenTeil3 />;
    case "4":
      return <LesenTeil4 />;
    case "5":
      return <LesenTeil5 />;
    default:
      return <div className="p-6 text-zinc-500">Teil nicht gefunden</div>;
  }
}

export default LesenTeilPage