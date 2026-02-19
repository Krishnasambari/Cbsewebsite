import { BookOpen, Monitor, Globe, Award } from "lucide-react";

export default function Academics() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Academic Excellence</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our curriculum is designed to challenge students and foster a love for learning.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100">
          <div className="bg-blue-600 p-6 text-white">
            <h2 className="text-2xl font-bold flex items-center gap-2"><BookOpen /> Primary Wing (Grade 1-5)</h2>
          </div>
          <div className="p-8">
            <p className="text-gray-600 mb-4">
              Focus on foundational literacy and numeracy. We use activity-based learning to make concepts clear and engaging.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"/> English, Hindi, Mathematics, EVS</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"/> Computer Science & General Knowledge</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"/> Arts, Music, Dance & Physical Education</li>
            </ul>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100">
          <div className="bg-yellow-500 p-6 text-white">
            <h2 className="text-2xl font-bold flex items-center gap-2"><Globe /> Middle Wing (Grade 6-8)</h2>
          </div>
          <div className="p-8">
            <p className="text-gray-600 mb-4">
              Transition to more structured learning. Introduction of specialized subjects and laboratory work.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-yellow-500 rounded-full"/> Science (Physics, Chemistry, Biology)</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-yellow-500 rounded-full"/> Social Science (History, Civics, Geography)</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-yellow-500 rounded-full"/> Third Language options</li>
            </ul>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100">
          <div className="bg-purple-600 p-6 text-white">
            <h2 className="text-2xl font-bold flex items-center gap-2"><Monitor /> Secondary Wing (Grade 9-10)</h2>
          </div>
          <div className="p-8">
            <p className="text-gray-600 mb-4">
              Rigorous preparation for board exams. Focus on conceptual understanding and application skills.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-purple-500 rounded-full"/> CBSE Curriculum adherence</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-purple-500 rounded-full"/> Career counseling and guidance</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-purple-500 rounded-full"/> Regular assessments and mock tests</li>
            </ul>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100">
          <div className="bg-green-600 p-6 text-white">
            <h2 className="text-2xl font-bold flex items-center gap-2"><Award /> Senior Secondary (Grade 11-12)</h2>
          </div>
          <div className="p-8">
            <p className="text-gray-600 mb-4">
              Specialized streams to prepare for competitive exams and higher education.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"/> Science Stream (PCM / PCB)</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"/> Commerce Stream</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"/> Integrated Coaching for JEE / NEET</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
