function Home() {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col">
        <main className="flex flex-col items-center justify-center flex-grow text-center px-4">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Launch Your SaaS<br />Without the Headache
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
            Everything you need to kickstart your SaaS — from authentication to design — all in one place.
          </p>
          <a
            href="/signup"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-lg rounded-md font-semibold transition"
          >
            Get Started Free
          </a>
        </main>
        <footer className="text-center py-6 text-gray-500 text-sm">
          © 2025 SaaStart. All rights reserved.
        </footer>
      </div>
    );
  }
  
  export default Home;
  