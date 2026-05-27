
function RegistrationFeeTable() {
  const registrationData = [
    {
      category: "IEEE Members",
      early: "₹ 2500",
      late: "₹ 3000",
      onDesk: "₹ 3500"
    },
    {
      category: "Non-IEEE Members",
      early: "₹ 3000",
      late: "₹ 3500",
      onDesk: "₹ 4000"
    }
  ];

  return (
    <>
      {/*
      <div className=" bg-white py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-purple-600 mb-4">
              Registration Fee Details
            </h2>

            <div className="flex justify-center">
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
      </div>
      */}
    </>
  );
}

export default RegistrationFeeTable;