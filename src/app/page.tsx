import TodoVideo from "./_components/TodoVideo";

/*
  Componente principal que se encarga de renderizar la estructura básica de la página.
*/
export default function Home() {
  return (
    <main className="flex h-screen bg-gray-900">
      <div className="w-full h-full">
        {/* Renderiza el componente TodoVideo, que contiene la lógica y la UI principal */}
        <TodoVideo />
      </div>
    </main>
  );
}
