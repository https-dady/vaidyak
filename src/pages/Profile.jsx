import { ArrowLeft, LogOut, Pencil } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#cfd6e3] flex justify-center items-center p-4">
      
      <div className="w-full max-w-md h-[90vh] bg-[#dde1e8] rounded-3xl shadow-lg overflow-hidden flex flex-col">

        {/* TOP SECTION */}
        <div className="bg-teal-500 p-4 pb-16 relative text-white">
          
          {/* HEADER */}
          <div className="flex justify-between items-center">
            
            {/* BACK */}
            <ArrowLeft
              onClick={() => navigate(-1)}
              className="cursor-pointer hover:opacity-80"
            />

            <h2 className="font-semibold">Profile</h2>

            {/* LOGOUT */}
            <LogOut
              onClick={() => navigate("/")}
              className="cursor-pointer hover:opacity-80"
            />
          </div>

          {/* PROFILE IMAGE */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-14">
            <div className="relative">
              <img
                src="https://i.pravatar.cc/100"
                className="w-24 h-24 rounded-full border-4 border-[#dde1e8]"
                alt="profile"
              />
              <div className="absolute bottom-0 right-0 bg-teal-500 p-1 rounded-full cursor-pointer hover:bg-teal-600">
                <Pencil size={14} />
              </div>
            </div>
          </div>
        </div>

        {/* SCROLL AREA */}
        <div className="flex-1 overflow-y-auto scrollbar-hide px-4 pt-16 pb-4">

          {/* NAME */}
          <div className="text-center">
            <h2 className="text-lg font-bold">Dr. Sumit Sahu</h2>
            <span className="inline-block mt-2 px-3 py-1 text-xs bg-yellow-100 text-yellow-600 rounded-full">
              Premium Member 💎
            </span>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-4 gap-3 mt-6 text-center">
            {[
              { label: "Height", value: "5.8 ft", icon: "🧍" },
              { label: "Weight", value: "58 Kg in", icon: "⚖️" },
              { label: "Age", value: "25", icon: "🎂" },
              { label: "Blood", value: "B+", icon: "🩸" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-3 rounded-xl shadow-sm hover:shadow-md"
              >
                <div className="text-xl">{item.icon}</div>
                <p className="text-xs text-gray-400">{item.label}</p>
                <p className="text-sm font-semibold">{item.value}</p>
              </div>
            ))}
          </div>

          {/* ABOUT */}
          <div className="mt-6">
            <h3 className="font-semibold mb-2">About Me</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Sumit Sahu is a dedicated pediatrician with over 15 years of
              experience in caring for children's health.
            </p>
          </div>

          {/* FAMILY */}
          <div className="mt-6">
            <h3 className="font-semibold mb-3">Family Member</h3>

            <div className="flex gap-3 overflow-x-auto scrollbar-hide">
              {[
                "https://i.pravatar.cc/60?img=1",
                "https://i.pravatar.cc/60?img=2",
                "https://i.pravatar.cc/60?img=3"
              ].map((img, i) => (
                <div key={i} className="text-center">
                  <img
                    src={img}
                    className="w-14 h-14 rounded-full border-2 border-teal-400 mx-auto hover:shadow-md"
                    alt="family"
                  />
                  <p className="text-xs mt-1">Member</p>
                </div>
              ))}

              {/* ADD NEW */}
              <div className="text-center">
                <div className="w-14 h-14 flex items-center justify-center bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300">
                  +
                </div>
                <p className="text-xs mt-1">Add New</p>
              </div>
            </div>
          </div>

        </div>

        {/* BUTTON */}
        <div className="p-4 bg-[#dde1e8]">
          <button className="w-full bg-teal-500 text-white py-3 rounded-full hover:bg-teal-600">
            Edit Profile
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;