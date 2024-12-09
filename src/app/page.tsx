import TodoVideo from "./_components/TodoVideo";

/*
  Este componente es el punto de entrada de la aplicación.
*/
export default function Home() {
  return (
    <main className="flex h-screen bg-gray-900">
      <div className="w-full h-full">
        <TodoVideo />
      </div>
    </main>
  );
}
