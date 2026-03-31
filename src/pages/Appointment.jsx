// import { Search, Bell } from "lucide-react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Appointment = () => {
//   const [activeTab, setActiveTab] = useState("upcoming");
//   const navigate = useNavigate();

//   const data = [
//     {
//       name: "Dr. Nidhi Deshmukh",
//       type: "MD, DNB (Endo)",
//       time: "09:00 - 10:00 AM",
//     },
//     {
//       name: "Dr. Amira Yuasha",
//       type: "Diploma (Cardiac EP)",
//       time: "09:00 - 10:00 AM",
//     },
//     {
//       name: "Dr. Josef Roger",
//       type: "MDS, FDS RCPS",
//       time: "09:00 - 10:00 AM",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-[#cfd6e3] flex justify-center items-center p-4">

//       <div className="relative w-full max-w-md bg-[#dde1e8] rounded-3xl shadow-lg p-5 overflow-hidden">

//         {/* GREEN TOP */}
//         <div className="absolute top-0 left-0 w-full h-28 bg-teal-500 rounded-b-[40px] -z-10"></div>

//         {/* HEADER */}
//         <div className="flex justify-between items-center">
//           <div className="flex items-center gap-3">
//             <img
//               src="https://i.pravatar.cc/40"
//               onClick={() => navigate("/profile")}
//               className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
//               alt="profile"
//             />
//             <div>
//               <p className="text-xs text-gray-400">Welcome Back</p>
//               <h2 className="text-lg font-bold">Appointments</h2>
//             </div>
//           </div>

//           <div className="flex gap-2">
//             <div className="bg-white p-2 rounded-full shadow-sm cursor-pointer hover:bg-gray-100">
//               <Search size={16} />
//             </div>
//             <div className="bg-white p-2 rounded-full shadow-sm cursor-pointer hover:bg-gray-100">
//               <Bell size={16} />
//             </div>
//           </div>
//         </div>

//         {/* TABS */}
//         <div className="bg-gray-100 rounded-full flex p-1 mt-4">
//           {["past", "upcoming", "cancelled"].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`flex-1 text-xs py-2 rounded-full capitalize ${
//                 activeTab === tab
//                   ? "bg-teal-500 text-white"
//                   : "text-gray-500"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* TODAY */}
//         <div className="mt-5">
//           <div className="flex justify-between text-sm mb-3">
//             <h3 className="font-semibold">Today</h3>
//             <span className="text-teal-500">02 Oct, 2023</span>
//           </div>

//           {data.map((doc, i) => (
//             <div key={i} className="mb-4">
//               <div className="flex gap-3 items-center rounded-xl p-2 hover:shadow-sm">
//                 <img
//                   src={`https://i.pravatar.cc/50?img=${i + 20}`}
//                   className="w-12 h-12 rounded-full"
//                   alt="doctor"
//                 />

//                 <div className="flex-1">
//                   <h4 className="text-sm font-semibold">{doc.name}</h4>
//                   <p className="text-xs text-gray-500">{doc.type}</p>

//                   <div className="flex justify-between items-center mt-1">
//                     <span className="text-xs bg-teal-100 text-teal-600 px-2 py-1 rounded-lg">
//                       Scheduled - {doc.time}
//                     </span>

//                     <button
//                       onClick={() =>
//                         window.open("https://www.google.com/maps", "_blank")
//                       }
//                       className="text-xs bg-white border border-teal-400 text-teal-600 px-2 py-1 rounded-lg"
//                     >
//                       📍 Direction
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               <div className="h-[1px] bg-gray-200 mt-3"></div>
//             </div>
//           ))}
//         </div>

//         {/* TOMORROW */}
//         <div className="mt-4">
//           <div className="flex justify-between text-sm mb-3">
//             <h3 className="font-semibold">Tomorrow</h3>
//             <span className="text-teal-500">01 Oct, 2023</span>
//           </div>

//           <div className="flex gap-3 items-center rounded-xl p-2 hover:shadow-sm">
//             <img
//               src="https://i.pravatar.cc/50?img=30"
//               className="w-12 h-12 rounded-full"
//               alt="doctor"
//             />

//             <div className="flex-1">
//               <h4 className="text-sm font-semibold">
//                 Dr. Kamakshi Desai
//               </h4>
//               <p className="text-xs text-gray-500">
//                 MBBS, MD (Neurology)
//               </p>

//               <div className="flex justify-between items-center mt-1">
//                 <span className="text-xs bg-teal-100 text-teal-600 px-2 py-1 rounded-lg">
//                   Scheduled - 09:00 - 10:00 AM
//                 </span>

//                 <button
//                   onClick={() =>
//                     window.open("https://www.google.com/maps", "_blank")
//                   }
//                   className="text-xs bg-white border border-teal-400 text-teal-600 px-2 py-1 rounded-lg"
//                 >
//                   📍 Direction
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Appointment;

import { Search, Bell, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Appointment = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const navigate = useNavigate();

  const data = [
    {
      name: "Dr. Nidhi Deshmukh",
      type: "MD, DNB (Endo)",
      time: "09:00 - 10:00 AM",
    },
    {
      name: "Dr. Amira Yuasha",
      type: "Diploma (Cardiac EP)",
      time: "09:00 - 10:00 AM",
    },
    {
      name: "Dr. Josef Roger",
      type: "MDS, FDS RCPS",
      time: "09:00 - 10:00 AM",
    },
  ];

  return (
    <div className="min-h-screen bg-[#cfd6e3] flex justify-center items-center p-4">

      {/* MAIN CONTAINER SAME AS PROFILE */}
      <div className="w-full max-w-md h-[90vh] bg-[#dde1e8] rounded-3xl shadow-lg overflow-hidden flex flex-col">

        {/* HEADER TOP */}
        <div className="bg-teal-500 p-4 pb-6 text-white">

          <div className="flex justify-between items-center">

            {/* BACK */}
            <ArrowLeft
              onClick={() => navigate("/")}
              className="cursor-pointer hover:opacity-80"
            />

            <h2 className="font-semibold">Appointments</h2>

            {/* RIGHT ICONS */}
            <div className="flex gap-2">
              <Search className="cursor-pointer" size={18} />
              <Bell className="cursor-pointer" size={18} />
            </div>
          </div>

        </div>

        {/* SCROLL AREA */}
        <div className="flex-1 overflow-y-auto px-4 pb-4">

          {/* USER SECTION */}
          <div className="flex items-center gap-3 mt-3">
            <img
              src="./images/set.png"
              onClick={() => navigate("/profile")}
              className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
              alt="profile"
            />
            <div>
              <p className="text-xs text-gray-400">Welcome Back</p>
            </div>
          </div>

          {/* TABS */}
          <div className="bg-gray-100 rounded-full flex p-1 mt-4">
            {["past", "upcoming", "cancelled"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 text-xs py-2 rounded-full capitalize ${
                  activeTab === tab
                    ? "bg-teal-500 text-white"
                    : "text-gray-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* TODAY */}
          <div className="mt-5">
            <div className="flex justify-between text-sm mb-3">
              <h3 className="font-semibold">Today</h3>
              <span className="text-teal-500">02 Oct, 2023</span>
            </div>

            {data.map((doc, i) => (
              <div key={i} className="mb-4">
                <div className="flex gap-3 items-center rounded-xl p-2 hover:shadow-sm">
                  <img
                    src={`https://i.pravatar.cc/50?img=${i + 20}`}
                    className="w-12 h-12 rounded-full"
                    alt="doctor"
                  />

                  <div className="flex-1">
                    <h4 className="text-sm font-semibold">{doc.name}</h4>
                    <p className="text-xs text-gray-500">{doc.type}</p>

                    <div className="flex justify-between items-center mt-1">
                      <span className="text-xs bg-teal-100 text-teal-600 px-2 py-1 rounded-lg">
                        Scheduled - {doc.time}
                      </span>

                      <button
                        onClick={() =>
                          window.open("https://www.google.com/maps", "_blank")
                        }
                        className="text-xs bg-white border border-teal-400 text-teal-600 px-2 py-1 rounded-lg"
                      >
                        📍 Direction
                      </button>
                    </div>
                  </div>
                </div>

                <div className="h-[1px] bg-gray-200 mt-3"></div>
              </div>
            ))}
          </div>

          {/* TOMORROW */}
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-3">
              <h3 className="font-semibold">Tomorrow</h3>
              <span className="text-teal-500">01 Oct, 2023</span>
            </div>

            <div className="flex gap-3 items-center rounded-xl p-2 hover:shadow-sm">
              <img
                src="./images/set.png"
                className="w-12 h-12 rounded-full"
                alt="doctor"
              />

              <div className="flex-1">
                <h4 className="text-sm font-semibold">
                  Dr. Kamaksh Desai
                </h4>
                <p className="text-xs text-gray-500">
                  MBBS, MD (Neurology)
                </p>

                <div className="flex justify-between items-center mt-1">
                  <span className="text-xs bg-teal-100 text-teal-600 px-2 py-1 rounded-lg">
                    Scheduled - 09:00 - 10:00 AM
                  </span>

                  <button
                    onClick={() =>
                      window.open("https://www.google.com/maps", "_blank")
                    }
                    className="text-xs bg-white border border-teal-400 text-teal-600 px-2 py-1 rounded-lg"
                  >
                    📍 Direction
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Appointment;