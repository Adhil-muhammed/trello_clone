import Board from "@/components/Board";
import Header from "@/components/Header";

// min-h-screen flex-col items-center justify-between p-24
export default function Home() {
  return (
    <main>
      <Header />
      <Board />
    </main>
  );
}
