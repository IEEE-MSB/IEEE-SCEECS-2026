
import React from 'react';

const ScheduleSection = () => {
  const schedules = [
    {
      mode: "SCEECS'26 Virtual Schedule",
      link: "/pdf/SCEECS'2026 Online List.pdf",
      label: "Virtual"
    },
    {
      mode: "SCEECS'26 Physical Schedule",
      link: "/pdf/SCEECS'2026 Offline List.pdf",
      label: "Physical"
    }
  ];

  return (
    <>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <p className="text-[#C80080] text-sm sm:text-base font-medium mb-3">
              SCEECS Conference 2027
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Check Your Schedule
            </h2>

            <div className="flex justify-center mb-6">
              <svg
                className="w-32 h-2 text-pink-400"
                viewBox="0 0 128 4"
                fill="none"
              >
                <path
                  d="M2 2C18 1, 38 3, 54 2C70 1, 90 3, 106 2C114 1.5, 122 2, 126 2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

        </div>
      </section>

    </>
  );
};

export default ScheduleSection;
