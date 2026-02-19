import { FileText, Download, CheckCircle, Shield, AlertCircle } from "lucide-react";

export default function Disclosure() {
  const documents = [
    { title: "Affiliation Certificate", size: "1.2 MB" },
    { title: "School Infrastructure Details", size: "3.4 MB" },
    { title: "Annual Academic Calendar 2025-26", size: "0.8 MB" },
    { title: "Staff Details & Qualifications", size: "1.5 MB" },
    { title: "Fee Structure (2025-26)", size: "0.5 MB" },
    { title: "Student Strength Summary", size: "0.4 MB" },
    { title: "Result Analysis (Last 3 Years)", size: "2.1 MB" },
    { title: "Transport Safety Certificate", size: "1.1 MB" },
    { title: "Building Safety Certificate", size: "1.3 MB" },
    { title: "Fire Safety Certificate", size: "1.0 MB" },
  ];

  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#083465] mb-4">Mandatory Public Disclosure</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          In compliance with CBSE guidelines, the following documents and information are made available for public access.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mb-8">
            <div className="bg-blue-50 p-6 border-b border-blue-100 flex items-center gap-3">
              <Shield className="text-[#083465]" size={28} />
              <h2 className="text-2xl font-bold text-[#083465]">Official Documents</h2>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {documents.map((doc, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors group cursor-pointer">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <FileText className="text-gray-400 group-hover:text-[#a41f2a] shrink-0 transition-colors" size={20} />
                    <span className="text-gray-700 font-medium truncate group-hover:text-blue-900 transition-colors">{doc.title}</span>
                  </div>
                  <span className="text-xs font-semibold text-gray-400 bg-gray-100 px-2 py-1 rounded-md group-hover:bg-white group-hover:shadow-sm transition-all">{doc.size}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl flex items-start gap-4">
            <AlertCircle className="text-yellow-600 shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-bold text-yellow-800 text-lg mb-2">Note to Parents & Guardians</h3>
              <p className="text-yellow-700 leading-relaxed text-sm">
                The information provided here is updated regularly. For any specific queries regarding affiliation or compliance, please contact the school administration office directly during working hours.
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-8">
          <div className="bg-[#083465] text-white p-8 rounded-xl shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <h3 className="text-xl font-bold mb-6 border-b border-white/20 pb-4">School Information</h3>
            <ul className="space-y-4 text-blue-100 text-sm">
              <li className="flex justify-between">
                <span className="opacity-70">Affiliation No.</span>
                <span className="font-bold text-white">1930123</span>
              </li>
              <li className="flex justify-between">
                <span className="opacity-70">School Code</span>
                <span className="font-bold text-white">55123</span>
              </li>
              <li className="flex justify-between">
                <span className="opacity-70">Region</span>
                <span className="font-bold text-white">Chennai</span>
              </li>
              <li className="flex justify-between">
                <span className="opacity-70">Principal</span>
                <span className="font-bold text-white">Mrs. S. Lakshmi</span>
              </li>
              <li className="flex justify-between">
                <span className="opacity-70">Managed By</span>
                <span className="font-bold text-white">Sri Chaitanya Trust</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle size={18} className="text-green-600" /> Compliance Status
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">RTE Act Compliance</span>
                <span className="text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded">Yes</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Building Safety</span>
                <span className="text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded">Verified</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Fire Safety</span>
                <span className="text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded">Verified</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Water & Sanitation</span>
                <span className="text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded">Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
