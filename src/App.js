import { QueryClientProvider, QueryClient } from "react-query";
import People from "./components/People";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <People />
      </div>
    </QueryClientProvider>
  );
}

export default App;
