import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl font-bold text-blue-900 mb-6">Get in Touch</h1>
          <p className="text-gray-600 mb-8">
            Have questions about admissions, curriculum, or anything else? We're here to help. Reach out to us using the contact details below or fill out the form.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Address</h3>
                <p className="text-gray-600">123, School Road, Yercaud Foothills,<br/>Salem, Tamil Nadu - 636001</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Phone</h3>
                <p className="text-gray-600">+91 12345 67890<br/>+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Email</h3>
                <p className="text-gray-600">info@srichaitanyatechnoschool.net<br/>admissions@srichaitanyatechnoschool.net</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Office Hours</h3>
                <p className="text-gray-600">Monday - Saturday: 8:00 AM - 4:00 PM<br/>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-xl rounded-xl p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="Admission Enquiry" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none h-32" placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
