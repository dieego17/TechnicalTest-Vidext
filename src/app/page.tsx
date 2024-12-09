import TodoVideo from "./_components/TodoVideo";

/*
  Este componente es el punto de entrada de la aplicación.
*/
export default function Home() {
  return (
    <main className="flex h-screen">
      <div className="w-full">
        <TodoVideo />
      </div>
    </main>
  );
}
