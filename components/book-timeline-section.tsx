"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, BookOpen, Calendar, Award, Lightbulb, Globe, Users } from "lucide-react";

export function BookTimelineSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const bookPages = [
    // Cover Page
    {
      type: "cover",
      title: "Fassiano",
      subtitle: "A Legacy of Innovation",
      year: "2014-2025",
      description: "The story of breakthrough craftsmanship",
      image: "/fassiano-hero-model.png",
      color: "from-amber-900 via-orange-800 to-amber-700"
    },
    // Chapter 1: Foundation
    {
      type: "chapter",
      chapter: "Chapter 1",
      title: "The Foundation",
      year: "2014-2016",
      icon: Lightbulb,
      content: [
        {
          year: "2014",
          title: "The Vision Begins",
          description: "Founded with a vision to revolutionize footwear through technology and craftsmanship.",
          milestone: "Company Founded"
        },
        {
          year: "2015",
          title: "First Prototype",
          description: "Development of our first smart sneaker prototype with embedded sensors.",
          milestone: "Innovation Start"
        },
        {
          year: "2016",
          title: "Material Research",
          description: "Partnership with aerospace industry for advanced material development.",
          milestone: "R&D Expansion"
        }
      ],
      color: "from-blue-900 via-indigo-800 to-blue-700"
    },
    // Chapter 2: Innovation
    {
      type: "chapter",
      chapter: "Chapter 2",
      title: "Breakthrough Innovation",
      year: "2017-2019",
      icon: Award,
      content: [
        {
          year: "2017",
          title: "Smart Technology Integration",
          description: "First successful integration of AI algorithms for gait analysis.",
          milestone: "Tech Breakthrough"
        },
        {
          year: "2018",
          title: "Carbon Fiber Revolution",
          description: "Revolutionary carbon fiber weaving process for lightweight strength.",
          milestone: "Material Innovation"
        },
        {
          year: "2019",
          title: "Neural Network Launch",
          description: "Launch of neural network system for real-time adaptation.",
          milestone: "AI Integration"
        }
      ],
      color: "from-purple-900 via-violet-800 to-purple-700"
    },
    // Chapter 3: Global Expansion
    {
      type: "chapter",
      chapter: "Chapter 3",
      title: "Global Recognition",
      year: "2020-2022",
      icon: Globe,
      content: [
        {
          year: "2020",
          title: "International Launch",
          description: "Global expansion across 25 countries with smart sneaker technology.",
          milestone: "Global Reach"
        },
        {
          year: "2021",
          title: "Sensor Array Innovation",
          description: "Advanced 128-point sensor array for comprehensive foot analysis.",
          milestone: "Sensor Technology"
        },
        {
          year: "2022",
          title: "Adaptive Cushioning",
          description: "Dynamic foam technology responding in 5 milliseconds.",
          milestone: "Performance Leap"
        }
      ],
      color: "from-green-900 via-emerald-800 to-green-700"
    },
    // Chapter 4: Future
    {
      type: "chapter",
      chapter: "Chapter 4",
      title: "The Future Unfolds",
      year: "2023-2025",
      icon: Users,
      content: [
        {
          year: "2023",
          title: "Health Integration",
          description: "Seamless integration with global health platforms and wearables.",
          milestone: "Health Tech"
        },
        {
          year: "2024",
          title: "Edge Computing Core",
          description: "On-device AI processing for instant performance optimization.",
          milestone: "AI Evolution"
        },
        {
          year: "2025",
          title: "Quantum Leap",
          description: "The ultimate fusion of technology, comfort, and sustainability.",
          milestone: "Future Ready"
        }
      ],
      color: "from-orange-900 via-red-800 to-orange-700"
    }
  ];

  const nextPage = () => {
    if (currentPage < bookPages.length - 1 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(prev => prev + 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  const prevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(prev => prev - 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  const currentPageData = bookPages[currentPage];

  return (
    <section className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 py-20 flex items-center justify-center relative overflow-hidden">
      {/* Background Paper Texture */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-200/20 via-transparent to-orange-200/20" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139, 69, 19, 0.1) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Book Container */}
        <div className="relative">
          {/* Book Base/Shadow */}
          <div className="absolute -bottom-8 left-4 right-4 h-8 bg-gradient-to-r from-transparent via-black/20 to-transparent rounded-full blur-xl" />
          
          {/* Book Pages */}
          <div className="relative bg-white rounded-r-3xl rounded-l-lg shadow-2xl overflow-hidden" style={{
            width: '900px',
            height: '600px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset -5px 0 10px -5px rgba(0, 0, 0, 0.1)'
          }}>
            
            {/* Page Flip Animation Container */}
            <div className="relative w-full h-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  className="absolute inset-0 w-full h-full"
                  initial={{ 
                    rotateY: isFlipping ? (currentPage > 0 ? -90 : 90) : 0,
                    transformOrigin: "left center"
                  }}
                  animate={{ 
                    rotateY: 0,
                    transformOrigin: "left center"
                  }}
                  exit={{ 
                    rotateY: isFlipping ? 90 : -90,
                    transformOrigin: "left center"
                  }}
                  transition={{ 
                    duration: 0.6,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                  style={{ perspective: "1000px" }}
                >
                  {/* Page Content */}
                  {currentPageData.type === "cover" ? (
                    // Cover Page Design
                    <div className={`w-full h-full bg-gradient-to-br ${currentPageData.color} text-white flex flex-col justify-center items-center p-16 relative`}>
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="relative z-10 text-center">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                        >
                          <BookOpen className="w-16 h-16 mx-auto mb-8 text-white/90" />
                          <h1 className="text-6xl font-bold mb-4" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                            {currentPageData.title}
                          </h1>
                          <p className="text-2xl mb-8 text-white/90">
                            {currentPageData.subtitle}
                          </p>
                          <div className="text-lg text-white/80 mb-12">
                            {currentPageData.year}
                          </div>
                          <p className="text-xl text-white/90 italic">
                            {currentPageData.description}
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  ) : (
                    // Chapter Page Design
                    <div className="w-full h-full bg-gradient-to-br from-white to-gray-50 flex">
                      {/* Left Column - Chapter Info */}
                      <div className={`w-1/3 bg-gradient-to-br ${currentPageData.color} text-white p-8 flex flex-col justify-center`}>
                        <div className="text-center">
                          {currentPageData.icon && (
                            <currentPageData.icon className="w-12 h-12 mx-auto mb-6 text-white/90" strokeWidth={1.5} />
                          )}
                          <p className="text-sm uppercase tracking-wider mb-2 text-white/80">
                            {'chapter' in currentPageData ? currentPageData.chapter : ''}
                          </p>
                          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                            {currentPageData.title}
                          </h2>
                          <p className="text-white/90 text-lg">
                            {currentPageData.year}
                          </p>
                        </div>
                      </div>

                      {/* Right Column - Timeline Content */}
                      <div className="w-2/3 p-8 flex flex-col justify-center">
                        <div className="space-y-8">
                          {'content' in currentPageData && currentPageData.content && currentPageData.content.map((item, index) => (
                            <motion.div
                              key={item.year}
                              className="border-l-4 border-gray-200 pl-6"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                              <div className="flex items-center gap-4 mb-2">
                                <span className="text-2xl font-bold text-gray-900" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                                  {item.year}
                                </span>
                                <span className="px-3 py-1 bg-gray-900 text-white text-xs rounded-full">
                                  {item.milestone}
                                </span>
                              </div>
                              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {item.title}
                              </h3>
                              <p className="text-gray-600 leading-relaxed">
                                {item.description}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Page Binding Effect */}
            <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-r from-gray-300 to-transparent" />
          </div>

          {/* Navigation Buttons */}
          <motion.button
            onClick={prevPage}
            disabled={currentPage === 0 || isFlipping}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={20} className="text-gray-700" />
          </motion.button>

          <motion.button
            onClick={nextPage}
            disabled={currentPage === bookPages.length - 1 || isFlipping}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight size={20} className="text-gray-700" />
          </motion.button>

          {/* Page Indicator */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {bookPages.map((_, index) => (
              <button
                key={index}
                onClick={() => !isFlipping && setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentPage 
                    ? 'bg-amber-600 w-8' 
                    : 'bg-amber-300 hover:bg-amber-400'
                }`}
              />
            ))}
            <span className="ml-4 text-amber-800 text-sm font-medium">
              Page {currentPage + 1} of {bookPages.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
