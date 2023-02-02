import projects from "../models/projects.json";
export default function Header(): JSX.Element {
  return (
    <header className="w-full h-16 flex justify-start items-center p-6 border-b-2 border-b-slate-50">
      <span className="text-4xl font-extrabold font-mono text-teal-600">
        Dhananjay Choudhary
      </span>
    </header>
  );
}
