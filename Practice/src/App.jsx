
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <nav className="bg-slate-900 border-b border-slate-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Logo */}
          <div className="text-2xl font-bold tracking-wide">
            Prac<span className="text-amber-400">Tice</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center gap-8 text-sm font-medium">
            <span className="cursor-pointer hover:text-amber-400 transition-colors">
              Home
            </span>

            <span className="cursor-pointer hover:text-amber-400 transition-colors">
              Service
            </span>

            <span className="cursor-pointer hover:text-amber-400 transition-colors">
              Contact
            </span>
          </div>

          {/* Desktop Sign Up */}
          <div className="hidden sm:flex">
            <button className="bg-amber-400 text-slate-950 px-5 py-2 rounded-lg font-semibold hover:bg-amber-300 hover:scale-105 transition-all duration-200 cursor-pointer">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden text-2xl cursor-pointer hover:text-amber-400 transition-colors"
            onClick={() => setOpen(!open)}
          >
            <TiThMenu />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="sm:hidden bg-slate-900 border-b border-slate-800 px-6 py-5">
          <div className="flex flex-col items-center gap-5 text-sm font-medium">

            <span className="cursor-pointer hover:text-amber-400 transition-colors">
              Home
            </span>

            <span className="cursor-pointer hover:text-amber-400 transition-colors">
              Service
            </span>

            <span className="cursor-pointer hover:text-amber-400 transition-colors">
              Contact
            </span>

            <button className="w-full max-w-xs bg-amber-400 text-slate-950 py-2 rounded-lg font-semibold hover:bg-amber-300 transition cursor-pointer">
              Sign Up
            </button>

          </div>
        </div>
      )}

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-10 text-center">

        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Our <span className="text-amber-400">Features</span>
        </h1>

        <p className="text-slate-400 max-w-xl mx-auto">
          Explore the features we've built to make your experience simple,
          fast, and enjoyable.
        </p>

      </section>

      {/* Feature Cards */}
      <section className="max-w-7xl mx-auto px-6 pb-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center shadow-lg hover:border-amber-400 hover:-translate-y-2 transition-all duration-300">
            <div className="text-amber-400 text-3xl font-bold mb-3">01</div>
            <h2 className="text-xl font-semibold mb-2">Feature 1</h2>
            <p className="text-slate-400 text-sm">
              A simple and powerful feature for your application.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center shadow-lg hover:border-amber-400 hover:-translate-y-2 transition-all duration-300">
            <div className="text-amber-400 text-3xl font-bold mb-3">02</div>
            <h2 className="text-xl font-semibold mb-2">Feature 2</h2>
            <p className="text-slate-400 text-sm">
              Designed to make your workflow easier and faster.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center shadow-lg hover:border-amber-400 hover:-translate-y-2 transition-all duration-300">
            <div className="text-amber-400 text-3xl font-bold mb-3">03</div>
            <h2 className="text-xl font-semibold mb-2">Feature 3</h2>
            <p className="text-slate-400 text-sm">
              Clean, responsive, and easy to use on every device.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center shadow-lg hover:border-amber-400 hover:-translate-y-2 transition-all duration-300">
            <div className="text-amber-400 text-3xl font-bold mb-3">04</div>
            <h2 className="text-xl font-semibold mb-2">Feature 4</h2>
            <p className="text-slate-400 text-sm">
              Built with modern technologies and best practices.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center shadow-lg hover:border-amber-400 hover:-translate-y-2 transition-all duration-300">
            <div className="text-amber-400 text-3xl font-bold mb-3">05</div>
            <h2 className="text-xl font-semibold mb-2">Feature 5</h2>
            <p className="text-slate-400 text-sm">
              A smooth experience with intuitive interactions.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center shadow-lg hover:border-amber-400 hover:-translate-y-2 transition-all duration-300">
            <div className="text-amber-400 text-3xl font-bold mb-3">06</div>
            <h2 className="text-xl font-semibold mb-2">Feature 6</h2>
            <p className="text-slate-400 text-sm">
              Flexible features that can grow with your application.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default App