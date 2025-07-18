export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-8">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">Sorry, the page you are looking for does not exist.</p>
      <a href="/" className="text-blue-500 underline">Go back home</a>
    </div>
  );
}
