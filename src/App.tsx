import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="">
      <h1 className="text-3xl font-bold">Button Component</h1>
      <div className="flex gap-4 flex-col md:flex-row items-center justify-center mt-4">
        <Button variant="default">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-book-plus-icon lucide-book-plus"
          >
            <path d="M12 7v6" />
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
            <path d="M9 10h6" />
          </svg>
          Add story
        </Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
    </div>
  );
}

export default App;
