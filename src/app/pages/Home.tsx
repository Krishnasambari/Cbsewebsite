import { Link } from "react-router";
import { ArrowRight, BookOpen, Users, Trophy, GraduationCap, Calendar, Star, CheckCircle, Quote } from "lucide-react";

export default function Home() {
  const features = [
    {
      title: "Academic Excellence",
      desc: "Rigorous CBSE curriculum with focus on conceptual clarity.",
      icon: <BookOpen size={32} />,
      color: "bg-[#083465]"
    },
    {
      title: "Holistic Development",
      desc: "Sports, arts, and leadership programs for all-round growth.",
      icon: <Users size={32} />,
      color: "bg-[#2645b0]"
    },
    {
      title: "Proven Results",
      desc: "Consistent top ranks in board exams and competitive tests.",
      icon: <Trophy size={32} />,
      color: "bg-[#a41f2a]"
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="School Campus" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight drop-shadow-lg">
            Shaping Minds,<br/>Building Futures
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto font-light drop-shadow-md text-gray-100">
            Sri Chaitanya Techno School - Where tradition meets innovation in a world-class learning environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/admissions" 
              className="bg-[#a41f2a] hover:bg-[#8a1a23] text-white font-bold py-4 px-10 rounded-full transition-transform hover:scale-105 shadow-xl flex items-center gap-3 text-lg"
            >
              Apply Now <ArrowRight size={20} />
            </Link>
            <Link 
              to="/contact" 
              className="bg-white hover:bg-gray-100 text-[#083465] font-bold py-4 px-10 rounded-full transition-transform hover:scale-105 shadow-xl text-lg"
            >
              Schedule a Visit
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="container mx-auto px-4 -mt-24 relative z-30 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className={`${feature.color} text-white p-8 rounded-xl shadow-2xl hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center`}
            >
              <div className="mb-4 bg-white/10 p-4 rounded-full backdrop-blur-sm">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-blue-100 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full z-0" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow-100 rounded-full z-0" />
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Students Learning" 
              className="relative z-10 rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
          <div>
            <span className="text-[#a41f2a] font-bold tracking-widest uppercase text-sm mb-2 block">About Us</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#083465] mb-6 leading-tight">
              Nurturing Potential,<br/>Inspiring Excellence
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              At Sri Chaitanya, we believe every child is unique. Our mission is to provide a transformative educational experience that empowers students with the knowledge, values, and skills needed to thrive in a global society.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              With a legacy of over 3 decades, we combine traditional wisdom with modern teaching methodologies to ensure holistic development.
            </p>
            <Link to="/about" className="text-[#083465] font-bold text-lg hover:text-[#a41f2a] inline-flex items-center gap-2 border-b-2 border-[#083465] hover:border-[#a41f2a] pb-1 transition-colors">
              Read Our Story <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-20 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#083465] mb-12">Why Choose Sri Chaitanya?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Expert Faculty", icon: <Users size={40} />, desc: "Highly qualified mentors dedicated to student success." },
              { title: "Modern Campus", icon: <BookOpen size={40} />, desc: "Smart classrooms, advanced labs, and sports arenas." },
              { title: "CBSE Curriculum", icon: <GraduationCap size={40} />, desc: "Aligned with national standards for competitive edge." },
              { title: "Holistic Growth", icon: <Star size={40} />, desc: "Focus on character, creativity, and leadership skills." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                <div className="text-[#2645b0] mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academics Overview */}
      <section className="container mx-auto px-4 py-16 mb-12">
        <div className="text-center mb-16">
          <span className="text-[#2645b0] font-bold uppercase tracking-wider text-sm">Our Programs</span>
          <h2 className="text-4xl font-bold text-[#083465] mt-2">Academic Journey</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {['Pre-Primary', 'Primary', 'Secondary', 'Senior Secondary'].map((level, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-xl h-64 shadow-lg cursor-pointer">
              <img 
                src={`https://source.unsplash.com/random/400x600?school,education,${idx}`} 
                alt={level} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-bold mb-1">{level}</h3>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                    Explore curriculum &rarr;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Stats */}
      <section className="bg-[#083465] text-white py-20 mb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-blue-800/50">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-yellow-400">35+</div>
              <div className="text-blue-200 text-sm uppercase tracking-wide">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-yellow-400">100%</div>
              <div className="text-blue-200 text-sm uppercase tracking-wide">Board Results</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-yellow-400">5000+</div>
              <div className="text-blue-200 text-sm uppercase tracking-wide">Students</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-yellow-400">150+</div>
              <div className="text-blue-200 text-sm uppercase tracking-wide">Awards Won</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#083465] mb-12">What Parents Say</h2>
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x">
          {[1, 2, 3].map((i) => (
            <div key={i} className="min-w-[300px] md:min-w-[400px] bg-white p-8 rounded-xl shadow-lg border border-gray-100 snap-center relative">
              <Quote className="text-blue-100 absolute top-6 right-6" size={48} />
              <p className="text-gray-600 italic mb-6 relative z-10">
                "The school has provided an excellent environment for my child's growth. The teachers are supportive and the facilities are top-notch."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                  <img src={`https://randomuser.me/api/portraits/women/${i + 10}.jpg`} alt="Parent" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Parent Name</h4>
                  <p className="text-xs text-gray-500">Mother of Student, Grade 5</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Events & News */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <span className="text-[#a41f2a] font-bold uppercase tracking-wider text-sm">Latest Updates</span>
              <h2 className="text-3xl font-bold text-[#083465] mt-2">News & Events</h2>
            </div>
            <Link to="/events" className="hidden md:flex text-[#2645b0] font-bold hover:underline items-center gap-2">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={`https://source.unsplash.com/random/400x300?event,school,${i}`} 
                    alt="Event" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                    }}
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-2 block">Event</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2645b0] transition-colors">School Annual Day Celebration</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">A grand celebration of talent and culture featuring performances by over 500 students.</p>
                  <Link to="/events" className="text-[#a41f2a] font-semibold text-sm hover:underline">Read More</Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/events" className="btn-secondary inline-flex items-center gap-2">
              View All Events <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section for Disclosure (Optional but good for access) */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-lg font-semibold text-gray-500 mb-6 uppercase tracking-widest">Mandatory Disclosure</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/disclosure" className="px-6 py-3 rounded-lg border border-gray-200 hover:border-blue-500 hover:text-blue-600 transition-colors flex items-center gap-2 text-gray-600 font-medium">
              <CheckCircle size={18} /> Affiliation Status
            </Link>
            <Link to="/disclosure" className="px-6 py-3 rounded-lg border border-gray-200 hover:border-blue-500 hover:text-blue-600 transition-colors flex items-center gap-2 text-gray-600 font-medium">
              <CheckCircle size={18} /> Fee Structure
            </Link>
            <Link to="/disclosure" className="px-6 py-3 rounded-lg border border-gray-200 hover:border-blue-500 hover:text-blue-600 transition-colors flex items-center gap-2 text-gray-600 font-medium">
              <CheckCircle size={18} /> Safety Certificates
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
