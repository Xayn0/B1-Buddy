
import { useParams } from "react-router-dom";
import HorenTeil1 from '../components/horen-teil-1';
import HorenTeil2 from '../components/horen-teil-2';
import HorenTeil3 from '../components/horen-teil-3';
import HorenTeil4 from '../components/horen-teil-4';
function HorenTeilPage() {
  const { teilId } = useParams<{ teilId: string }>();
 
  switch (teilId) {
    case "1":
      return <HorenTeil1 />;
    case "2":
      return <HorenTeil2 />;
    case "3":
      return <HorenTeil3 />;
    case "4":
      return <HorenTeil4 />;
    default:
      return <div className="p-6 text-zinc-500">Teil nicht gefunden</div>;
  }
}

export default HorenTeilPage