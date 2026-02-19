import { Calendar, Tag, ChevronRight } from "lucide-react";

export default function Events() {
  const events = [
    {
      id: 1,
      date: "Mar 15, 2026",
      title: "Annual Sports Meet",
      desc: "Join us for a day of athletic excellence and team spirit.",
      category: "Sports"
    },
    {
      id: 2,
      date: "Apr 05, 2026",
      title: "Science & Innovation Fair",
      desc: "Showcasing student projects on sustainable energy and robotics.",
      category: "Academic"
    },
    {
      id: 3,
      date: "May 20, 2026",
      title: "Art & Culture Festival",
      desc: "A celebration of music, dance, and fine arts by our talented students.",
      category: "Cultural"
    }
  ];

  const circulars = [
    { title: "Circular 45: Term 2 Examination Schedule", date: "Feb 20, 2026" },
    { title: "Circular 44: Parent-Teacher Meeting Agenda", date: "Jan 25, 2026" },
    { title: "Circular 43: Winter Uniform Guidelines", date: "Jan 10, 2026" },
    { title: "Circular 42: School Reopening Notice", date: "Jan 02, 2026" },
  ];

  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#083465] mb-4">Events & News</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Stay connected with the latest happenings, announcements, and celebrations at Sri Chaitanya.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Events Section */}
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-100 pb-2">Upcoming Events</h2>
          {events.map((event) => (
            <div key={event.id} className="group relative bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-blue-50 text-blue-800 rounded-lg p-4 text-center w-full md:w-24 shrink-0 font-bold border border-blue-100">
                  <span className="block text-2xl">{event.date.split(" ")[1].replace(",", "")}</span>
                  <span className="block text-sm uppercase tracking-wide">{event.date.split(" ")[0]}</span>
                </div>
                <div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full mb-2 uppercase tracking-wide">
                    <Tag size={12} /> {event.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#2645b0] transition-colors mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{event.desc}</p>
                  <a href="#" className="inline-flex items-center text-sm font-semibold text-[#a41f2a] hover:underline">
                    Read More <ChevronRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Circulars Section */}
        <div className="relative">
          <div className="sticky top-32 bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Calendar className="text-[#a41f2a]" /> Official Circulars
            </h2>
            <ul className="space-y-4">
              {circulars.map((circular, idx) => (
                <li key={idx} className="pb-4 border-b border-gray-200 last:border-0 hover:bg-white p-2 rounded transition-colors cursor-pointer">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1 hover:text-blue-700">
                    {circular.title}
                  </h4>
                  <span className="text-xs text-gray-500 font-medium">{circular.date}</span>
                </li>
              ))}
            </ul>
            <button className="w-full mt-6 bg-white border border-gray-300 text-gray-700 font-semibold py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm shadow-sm">
              View All Archives
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
