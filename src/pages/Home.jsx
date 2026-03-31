import { useState } from "react";
import { Bell, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [hasAppointment, setHasAppointment] = useState(false);
  const navigate = useNavigate();

  const doctors = [
    {
      name: "Dr. Raj Sharma",
      hospital: "City Medical Center",
      speciality: "Cardiologist",
      rating: 4.8,
      distance: "1.2 km",
    },
    {
      name: "Dr. Neha Verma",
      hospital: "Care Clinic",
      speciality: "Dermatologist",
      rating: 4.7,
      distance: "0.8 km",
    },
  ];

  return (
    <div className="min-h-screen bg-[#cfd6e3] flex justify-center items-center p-4">
      <div className="w-full max-w-sm md:max-w-md mx-auto min-h-screen bg-[#dde1e8] p-4 flex flex-col justify-between rounded-3xl shadow-lg">

        <div>

          {/* HEADER */}
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-400">Good Morning ☀️</p>
              <h2 className="text-lg font-bold">CareCoders!</h2>
              <p className="text-xs text-teal-500 font-medium">
                Your health status is good
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-teal-100 p-2 rounded-full cursor-pointer hover:bg-teal-200">
                <Bell className="text-teal-600" size={18} />
              </div>

              <img
                src="./images/set.png"
                onClick={() => navigate("/profile")}
                className="rounded-full w-10 h-10 border-2 border-teal-400 cursor-pointer hover:opacity-80"
                alt="profile"
              />
            </div>
          </div>

          {/* SEARCH */}
          <div className="mt-4 flex items-center bg-white p-3 rounded-xl shadow-sm">
            <Search size={16} className="text-teal-500" />
            <input
              type="text"
              placeholder="Search"
              className="w-full ml-2 outline-none text-sm"
            />
          </div>

          {/* QUICK ACTIONS */}
          <div className="grid grid-cols-3 gap-3 mt-4">
            <div
              onClick={() => navigate("/book")}
              className="bg-teal-100 p-4 rounded-xl text-center cursor-pointer hover:bg-teal-200"
            >
              📅
              <p className="text-sm mt-1">Book</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-xl text-center">
              💬
              <p className="text-sm mt-1">Chat</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-xl text-center">
              ⬆️
              <p className="text-sm mt-1">Upload</p>
            </div>
          </div>

          {/* CONDITIONAL UI */}
          {hasAppointment ? (
            <div className="bg-teal-500 text-white p-4 mt-5 rounded-2xl flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Dr. Benjamin</h3>
                <p className="text-sm">Starts in 2 mins</p>
              </div>

              <button className="bg-white text-teal-600 px-3 py-1 rounded-lg text-sm">
                Join Call
              </button>
            </div>
          ) : (
            <div className="mt-5">
              <h3 className="font-semibold mb-3">
                Top Doctors Near You
              </h3>

              {doctors.map((doc, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-2xl shadow-sm mb-3"
                >
                  <h4 className="font-semibold">{doc.name}</h4>
                  <p className="text-xs text-gray-500">
                    {doc.hospital}
                  </p>

                  <div className="flex justify-between items-center mt-2">
                    <p className="text-xs">
                      ⭐ {doc.rating} • 📍 {doc.distance}
                    </p>

                    <button
                      onClick={() => navigate("/book")}
                      className="bg-teal-500 text-white px-3 py-1 rounded-lg text-xs"
                    >
                      Book
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Upcoming */}
          <h3 className="mt-5 font-semibold">
            Upcoming Appointments
          </h3>

          <div className="bg-white p-4 rounded-2xl mt-2 shadow-sm border-l-4 border-teal-400 text-center">
            <p className="text-sm text-gray-500 mb-2">
              Tap to see all appointments
            </p>

            <button
              onClick={() => navigate("/appointments")}
              className="bg-teal-500 text-white px-5 py-2 rounded-lg text-sm"
            >
              Click Here
            </button>
          </div>

        </div>

        {/* BOTTOM NAV */}
        <div className="bg-white rounded-2xl shadow-md flex justify-around py-3 mt-5">

          <div className="flex flex-col items-center text-teal-500 cursor-pointer">
            🏠
            <p className="text-xs">Home</p>
          </div>

          <div className="flex flex-col items-center text-gray-400 cursor-pointer">
            💊
            <p className="text-xs">Medical</p>
          </div>

          <div className="flex flex-col items-center text-gray-400 cursor-pointer">
            ❤️
            <p className="text-xs">Doctors</p>
          </div>

          <div
            onClick={() => navigate("/profile")}
            className="flex flex-col items-center text-gray-400 cursor-pointer"
          >
            👤
            <p className="text-xs">Profile</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default HomePage;