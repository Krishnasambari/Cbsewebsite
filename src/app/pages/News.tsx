import { Calendar, FileText, Download } from "lucide-react";

export default function News() {
  const newsItems = [
    {
      id: 1,
      date: "15 Feb, 2026",
      title: "Annual Sports Day Celebration",
      category: "Event",
      desc: "Join us for the Annual Sports Day on March 5th featuring track events, team sports, and cultural performances. Parents are cordially invited."
    },
    {
      id: 2,
      date: "10 Feb, 2026",
      title: "CBSE Board Exam Schedule Released",
      category: "Academic",
      desc: "The CBSE Class 10 and 12 board exam dates have been announced. Students can download the detailed timetable from the link below."
    },
    {
      id: 3,
      date: "05 Feb, 2026",
      title: "Science Exhibition Winners",
      category: "Achievement",
      desc: "Congratulations to our students for winning the inter-school science exhibition held at District Center. The project on 'Sustainable Energy' won first prize."
    },
    {
      id: 4,
      date: "28 Jan, 2026",
      title: "Republic Day Celebration",
      category: "Event",
      desc: "Flag hoisting ceremony will be held at 8:00 AM in the school ground. Attendance is mandatory for all staff and students."
    },
    {
      id: 5,
      date: "15 Jan, 2026",
      title: "Parent-Teacher Meeting",
      category: "Academic",
      desc: "PTM for Term 2 results will be held on 20th Jan. Please adhere to the allotted time slots."
    }
  ];

  const circulars = [
    { title: "Circular No. 45: Fee Submission Deadline", date: "20 Feb, 2026" },
    { title: "Circular No. 44: Winter Uniform Guidelines", date: "10 Jan, 2026" },
    { title: "Circular No. 43: Annual Day Participation", date: "05 Jan, 2026" },
    { title: "Circular No. 42: Holiday List 2026", date: "01 Jan, 2026" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">News & Circulars</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Stay updated with the latest happenings, announcements, and official circulars from the school administration.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* News Feed */}
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 border-b pb-4">Latest News</h2>
          {newsItems.map((item) => (
            <div key={item.id} className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex-shrink-0 flex flex-col items-center justify-center bg-blue-50 w-20 h-20 rounded-lg text-blue-800">
                <span className="text-2xl font-bold">{item.date.split(' ')[0]}</span>
                <span className="text-xs uppercase font-semibold">{item.date.split(' ')[1]}</span>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                    item.category === 'Academic' ? 'bg-red-100 text-red-600' :
                    item.category === 'Event' ? 'bg-green-100 text-green-600' :
                    'bg-purple-100 text-purple-600'
                  }`}>
                    {item.category}
                  </span>
                  <span className="text-gray-400 text-sm flex items-center gap-1"><Calendar size={12}/> {item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Circulars Sidebar */}
        <div>
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 sticky top-24">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <FileText className="text-blue-600" /> Official Circulars
            </h2>
            <ul className="space-y-4">
              {circulars.map((circular, idx) => (
                <li key={idx} className="pb-4 border-b border-gray-200 last:border-0">
                  <a href="#" className="group">
                    <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors text-sm mb-1">
                      {circular.title}
                    </h4>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-gray-500">{circular.date}</span>
                      <span className="text-xs text-blue-600 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        Download <Download size={12} />
                      </span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
            <button className="w-full mt-6 text-center text-blue-600 font-semibold text-sm hover:underline">
              View Archives
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
