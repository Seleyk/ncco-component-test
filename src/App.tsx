import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="">
      <h1 className="text-3xl font-bold">Button Component</h1>
      <div className="flex gap-4 flex-col md:flex-row items-center justify-center mt-4">
        <Button variant="default">Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
    </div>
  );
}

export default App;
