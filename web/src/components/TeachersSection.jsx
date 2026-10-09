import { useState } from "react";
import { Link } from "react-router-dom";
import teachers from "../data/teachers.json";

const TeachersSection = ({ limit = 4, showViewAll = true }) => {
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const teacherList = teachers.slice(0, limit);

  return (
    <>
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Our Faculty
              </p>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Meet Our Teachers
              </h2>
            </div>

            {showViewAll && (
              <Link
                to="/teachers"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                View All Teachers
              </Link>
            )}
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {teacherList.map((teacher) => (
              <div
                key={teacher.id}
                onClick={() => setSelectedTeacher(teacher)}
                className="group cursor-pointer overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900">{teacher.name}</h3>
                  <p className="mt-2 text-sm font-semibold text-blue-600">{teacher.designation}</p>

                  <div className="mt-4 flex items-center text-[10px] font-black uppercase tracking-tighter text-gray-400 transition-all group-hover:text-blue-600">
                    View Profile <span className="ml-2 transition-transform group-hover:translate-x-2">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedTeacher && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md">
          <div className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] bg-white shadow-2xl animate-fadeIn">
            <button
              onClick={() => setSelectedTeacher(null)}
              className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-lg font-bold text-gray-700 transition hover:bg-red-500 hover:text-white"
            >
              ✕
            </button>

            <div className="flex flex-col md:flex-row">
              <div className="bg-blue-600 md:w-2/5">
                <img
                  src={selectedTeacher.image}
                  alt={selectedTeacher.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-8 md:w-3/5 md:p-10">
                <h3 className="mb-2 text-3xl font-bold text-gray-900">{selectedTeacher.name}</h3>
                <p className="mb-4 text-blue-600 font-bold">{selectedTeacher.designation}</p>

                <div className="mb-5 h-1 w-12 bg-gray-200"></div>

                <div className="space-y-3 text-gray-700">
                  <p>
                    <span className="font-semibold text-gray-900">Subject:</span> {selectedTeacher.subject}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-900">Study:</span> {selectedTeacher.studyIn}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-900">Experience:</span> {selectedTeacher.experience}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-900">Email:</span> {selectedTeacher.email}
                  </p>
                </div>

                <div className="mt-6 rounded-2xl bg-blue-50 p-4">
                  <h4 className="mb-2 text-lg font-semibold text-gray-900">About</h4>
                  <p className="text-justify text-sm leading-relaxed text-gray-700">
                    {selectedTeacher.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default TeachersSection;
