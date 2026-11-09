import { PixelImage } from '../pixel-image';
// order is changing 
const teamMembers = [
  {
    name: "Dr. Vijay Bhaskar Semwal",
    role: "Finance Chair",
    image: "/About_Images/VijayBhaskarSemwal.jpg",
    membershipNo: null
  },
  // 
  {
    name: "Dr. Priyanka Paliwal",
    role: "Program Chair",
    image: "/About_Images/priyanka.jpeg",
    membershipNo: "92215569"
  },
  {
    name: "Ms. Rahul Agarwal",
    role: "Organizing Co-Chair",
    image: "/About_Images/RahulAgarwal.jpg",
    membershipNo: "101833521"
  },
  {
    name: "Mr. Ayush Kumar",
    role: "Publication Co-Chair",
    image: "/About_Images/Ayush.jpg",
    membershipNo: "101641565"
  },
  {
    name: "Ms. Prerna Chaurasiya",
    role: "Program Co-Chair",
    image: "/About_Images/prerna.jpeg",
    membershipNo: " 101835115"
  },
  {
    name: "Ms. Tanvi Sundarkar",
    role: "Finance Co-Chair",
    image: "/About_Images/tanvi.jpg",
    membershipNo: "101833618"
  }
];

function Team() {
  return (
    <div className="mt-8 sm:mt-16">
      {/* Team Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-16 mt-6 sm:mt-12 justify-items-center">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center px-2 sm:px-6">
            <div className="mb-4 sm:mb-6 w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 max-w-full rounded-xl overflow-hidden aspect-square shadow-md">
              <img src={member.image} alt={member.name} className='h-full w-full object-cover' />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 text-center mb-1">
              {member.name}
            </h3>
            <p className="text-purple-600 text-xs sm:text-sm md:text-base text-center font-medium mb-1">
              {member.role}
            </p>
            {member.membershipNo && (
              <p className="text-gray-500 text-xs sm:text-sm text-center">
                Membership No - {member.membershipNo}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
