import { Shield, Target, Award } from "lucide-react";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12 mt-10">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-blue-900 mb-4 ">About Our School</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Sri Chaitanya Techno School is dedicated to fostering academic excellence and holistic development in a nurturing environment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjbGFzc3Jvb20lMjBsZWFybmluZ3xlbnwxfHx8fDE3NzE0OTM4NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Classroom" 
            className="rounded-lg shadow-lg w-full h-[400px] object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Principal's Message</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            "Welcome to Sri Chaitanya Techno School. Our mission is to empower students with knowledge, skills, and values that will help them succeed in a rapidly changing world. We believe in a student-centric approach where every child is encouraged to explore their interests and reach their full potential."
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            "With a strong focus on both academics and extracurricular activities, we ensure that our students develop into well-rounded individuals ready to take on future challenges."
          </p>
          <p className="font-semibold text-blue-900">- Mrs. Principal Name</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-blue-50 p-8 rounded-lg text-center">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
            <Target size={32} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
          <p className="text-gray-600">
            To provide a learning environment that encourages critical thinking, creativity, and ethical leadership.
          </p>
        </div>
        <div className="bg-yellow-50 p-8 rounded-lg text-center">
          <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-yellow-600">
            <Shield size={32} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
          <p className="text-gray-600">
            To be a center of excellence in education, nurturing global citizens who contribute positively to society.
          </p>
        </div>
        <div className="bg-green-50 p-8 rounded-lg text-center">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
            <Award size={32} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Our Values</h3>
          <p className="text-gray-600">
            Integrity, Excellence, Respect, and Responsibility are the core values that guide our actions.
          </p>
        </div>
      </div>
    </div>
  );
}
