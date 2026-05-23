import "./App.css";
import { Button } from "./components/ui/button";
import { Field, FieldGroup, FieldLabel } from "./components/ui/field";
import { Input } from "./components/ui/input";

function App() {
  return (
    <div className="">
      <h1 className="text-3xl font-bold">Button Component</h1>
      <div className="flex gap-4 flex-col md:flex-row items-center justify-center mt-4">
        <Button variant="default">Add story</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
      <FieldGroup>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <Input id="email" type="email" placeholder="jjohn@ncco.com" />
      </FieldGroup>
    </div>
  );
}

export default App;
