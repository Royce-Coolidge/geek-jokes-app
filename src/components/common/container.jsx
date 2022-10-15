export function Container({ children }) {
  return (
    <main className="mt-5">
      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
       { children }
      </div>
    </main>
  );
}
