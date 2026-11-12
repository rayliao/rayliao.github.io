import PasswordGate from "./PasswordGate";
import Slide from "./Slide";

export default function Lover({ title }: { title: string[] }) {
  return (
    <PasswordGate>
      <div className="h-screen">
        <Slide title={title} />
      </div>
    </PasswordGate>
  );
}