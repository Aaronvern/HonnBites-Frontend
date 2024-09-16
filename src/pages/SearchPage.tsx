import { useParams } from "react-router-dom";

export default function SearchPage() {
  const { city } = useParams();
  return <div>user serarched for {city}</div>;
}
