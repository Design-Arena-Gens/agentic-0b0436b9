import { useState, useEffect } from 'react'
import { Feather, BookOpen, Sparkles, ChevronDown } from 'lucide-react'
import './App.css'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const words = ['thoughts', 'musings', 'reflections', 'ponderings', 'scribbles']
  const [currentWord, setCurrentWord] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-white opacity-5 font-serif text-6xl"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                animation: `float ${10 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            >
              "
            </div>
          ))}
        </div>

        <div className={`relative z-10 max-w-6xl mx-auto text-center transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-center items-center gap-6 mb-8">
            <Feather 
              className="text-purple-300 animate-bounce" 
              size={48}
              style={{ animationDelay: '0s', animationDuration: '3s' }}
            />
            <BookOpen 
              className="text-yellow-300 animate-bounce" 
              size={48}
              style={{ animationDelay: '0.5s', animationDuration: '3s' }}
            />
            <Sparkles 
              className="text-pink-300 animate-bounce" 
              size={48}
              style={{ animationDelay: '1s', animationDuration: '3s' }}
            />
          </div>

          <h1 className="text-7xl md:text-9xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 animate-gradient-x font-serif">
            Ramblings
          </h1>

          <div className="mb-8 h-16 flex items-center justify-center">
            <p className="text-2xl md:text-4xl text-purple-200 font-light italic">
              where{' '}
              <span className="inline-block min-w-[280px] text-yellow-300 font-semibold transition-all duration-500 animate-pulse">
                {words[currentWord]}
              </span>
              {' '}come alive
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 mt-16">
            <div 
              className="group relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-1"
              style={{ 
                transform: `translateY(${scrollY * 0.1}px)`,
                transition: 'transform 0.3s ease-out'
              }}
            >
              <img 
                src="/images/journal.jpg" 
                alt="Open journal with handwritten thoughts on a wooden desk"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/600x400/4a5568/f3e8ff?text=Journal'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-purple-900/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Daily Musings</h3>
                <p className="text-purple-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Capturing the ephemeral moments of everyday wonder
                </p>
              </div>
            </div>

            <div 
              className="group relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-rotate-1"
              style={{ 
                transform: `translateY(${scrollY * 0.15}px)`,
                transition: 'transform 0.3s ease-out'
              }}
            >
              <img 
                src="/images/typewriter.jpg" 
                alt="Vintage typewriter with aged paper"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/600x400/4a5568/fef3c7?text=Typewriter'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-900 via-yellow-900/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Vintage Words</h3>
                <p className="text-yellow-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Timeless thoughts typed into existence
                </p>
              </div>
            </div>

            <div 
              className="group relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-1"
              style={{ 
                transform: `translateY(${scrollY * 0.2}px)`,
                transition: 'transform 0.3s ease-out'
              }}
            >
              <img 
                src="/images/abstract.jpg" 
                alt="Abstract ink splatter artwork representing creative thoughts"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/600x400/4a5568/fce7f3?text=Abstract'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900 via-pink-900/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Creative Chaos</h3>
                <p className="text-pink-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Where ideas splatter onto the canvas of consciousness
                </p>
              </div>
            </div>
          </div>

          <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
            <span className="relative z-10">Start Reading</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>

          <div className="mt-16 animate-bounce">
            <ChevronDown className="text-purple-300 mx-auto" size={40} />
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes blob {
            0%, 100% { transform: translate(0, 0) scale(1); }
            25% { transform: translate(20px, -50px) scale(1.1); }
            50% { transform: translate(-20px, 20px) scale(0.9); }
            75% { transform: translate(50px, 50px) scale(1.05); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          @keyframes gradient-x {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 3s ease infinite;
          }
        `
      }} />
    </div>
  )
}

export default App
