import { FileText, Calendar, CheckCircle } from "lucide-react";

export default function Admissions() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Admissions Open 2026-27</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Join the Sri Chaitanya Techno School family. We welcome students from all backgrounds to apply for admission.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Admission Process</h2>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">1</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Registration</h3>
                <p className="text-gray-600 text-sm">Fill out the online enquiry form or visit the school office to register.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">2</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Entrance Test / Interaction</h3>
                <p className="text-gray-600 text-sm">For higher grades, a written test is conducted. For kindergarten, an interaction session is held.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">3</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Document Verification</h3>
                <p className="text-gray-600 text-sm">Submit required documents (Birth Certificate, Transfer Certificate, Report Card, etc.).</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">4</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Fee Payment</h3>
                <p className="text-gray-600 text-sm">Pay the admission fee to confirm the seat.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Admission Enquiry</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Parent's Name</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="Enter name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="Enter phone" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="Enter email" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Child's Name</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="Enter name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Grade Applying For</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none">
                  <option>Select Grade</option>
                  <option>Nursery</option>
                  <option>Kindergarten</option>
                  <option>Grade 1</option>
                  <option>Grade 2-5</option>
                  <option>Grade 6-8</option>
                  <option>Grade 9-10</option>
                  <option>Grade 11-12</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
              <textarea className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none h-24" placeholder="Any specific queries?"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md transition-colors">
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>

      <div className="mt-16 bg-blue-900 text-white p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><FileText /> Download Application Form</h3>
          <p className="text-blue-200">Download the PDF form, fill it offline and submit at the school office.</p>
        </div>
        <button className="bg-white text-blue-900 font-bold py-3 px-6 rounded-md hover:bg-gray-100 transition-colors">
          Download PDF
        </button>
      </div>
    </div>
  );
}
