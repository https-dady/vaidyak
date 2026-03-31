import { ArrowLeft, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BookAppoint = () => {
  const navigate = useNavigate();

  const [selectedDay, setSelectedDay] = useState(2);
  const [selectedTime, setSelectedTime] = useState("10:30am");
  const [selectedType, setSelectedType] = useState("clinic");

  const [tokenNumber, setTokenNumber] = useState(25);
  const [currentToken, setCurrentToken] = useState(20);

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dates = ["08", "09", "10", "11", "12", "13"];

  const times = ["08:30am", "10:30am", "01:00pm", "03:00pm", "05:00pm"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentToken((prev) => {
        if (prev < tokenNumber) return prev + 1;
        return prev;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [tokenNumber]);

  const peopleAhead = tokenNumber - currentToken;

  return (
    <div className="min-h-screen bg-[#cfd6e3] flex justify-center items-center p-4">
      
      <div className="w-full max-w-md h-[90vh] bg-[#dde1e8] rounded-3xl shadow-lg overflow-hidden flex flex-col">

        {/* HEADER */}
        <div className="bg-teal-500 p-4 text-white flex items-center gap-3">
          <ArrowLeft
            onClick={() => navigate(-1)}
            className="cursor-pointer hover:opacity-80"
          />
          <h2 className="font-semibold">Detail Doctor</h2>
        </div>

        {/* SCROLL AREA */}
        <div className="fullScroll flex-1 overflow-y-auto scrollbar-hide p-5 space-y-5">

          {/* Doctor Info */}
          <div className="flex gap-4 bg-white p-4 rounded-2xl shadow-sm">
            <img
              src="https://i.pravatar.cc/100"
              className="w-24 h-24 rounded-xl object-cover"
              alt="doctor"
            />

            <div className="flex-1">
              <p className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐ 4.5</p>
              <h3 className="font-semibold">Dr. Sunny Rajak</h3>
              <p className="text-xs text-gray-500">Psychology Specialist</p>

              <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                <MapPin size={14} />
                Los Angeles, USA
              </div>

              <div className="flex gap-4 mt-2 text-xs">
                <p>🧪 6 Years</p>
                <p>👥 1027+</p>
              </div>
            </div>
          </div>

          {/* BIO */}
          <div>
            <h3 className="font-semibold mb-1">Biography</h3>
            <p className="text-sm text-gray-500">
              Dr. Sunny Rajak is a Psychology Specialist with years of
              experience helping patients with mental health and wellness.
            </p>
          </div>

          {/* SCHEDULE */}
          <div>
            <h3 className="font-semibold mb-2">Schedule</h3>

            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
              {days.map((day, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedDay(i)}
                  className={`min-w-[60px] text-center p-2 rounded-xl cursor-pointer ${
                    selectedDay === i
                      ? "bg-teal-500 text-white"
                      : "bg-white"
                  }`}
                >
                  <p className="text-xs">{day}</p>
                  <p className="font-semibold">{dates[i]}</p>
                </div>
              ))}
            </div>
          </div>

          {/* TIME */}
          <div>
            <h3 className="font-semibold mb-2">Choose Time</h3>

            <div className="flex gap-2 flex-wrap">
              {times.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`px-3 py-1 rounded-lg text-sm ${
                    selectedTime === time
                      ? "bg-teal-500 text-white"
                      : "bg-white"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* TYPE */}
          <div>
            <h3 className="font-semibold mb-2">Select Type</h3>

            <div className="space-y-3">
              {["clinic", "video", "chat"].map((type, i) => {
                const labels = ["Clinic Visit", "Video Call", "Messaging"];
                const desc = [
                  "Visit Doctor at Clinic",
                  "Video Call with Doctor",
                  "Chat with Doctor",
                ];
                const price = ["$60", "$80", "$40"];

                return (
                  <div
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`flex justify-between items-center p-3 rounded-xl cursor-pointer ${
                      selectedType === type
                        ? "bg-teal-100"
                        : "bg-white"
                    }`}
                  >
                    <div>
                      <p className="font-medium text-sm">{labels[i]}</p>
                      <p className="text-xs text-gray-500">{desc[i]}</p>
                    </div>
                    <p>{price[i]}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* QUEUE */}
          {selectedType === "clinic" && (
            <div className="bg-white p-4 rounded-2xl shadow-sm">
              <h3 className="font-semibold mb-2">Live Queue Status</h3>

              <div className="flex justify-between text-sm">
                <p>Your Token</p>
                <p className="font-bold text-teal-600">#{tokenNumber}</p>
              </div>

              <div className="flex justify-between text-sm mt-2">
                <p>Current Token</p>
                <p className="font-bold">{currentToken}</p>
              </div>

              <div className="mt-3 text-center bg-teal-100 p-2 rounded-xl">
                <p className="text-sm">
                  {peopleAhead > 0
                    ? `${peopleAhead} patients ahead of you`
                    : "It's your turn! 🚀"}
                </p>
              </div>
            </div>
          )}

        </div>

        {/* BUTTON */}
        <div className="p-4 bg-[#dde1e8]">
          <button
            onClick={() => navigate("/appointments")}
            className="w-full bg-teal-500 text-white py-3 rounded-full hover:bg-teal-600"
          >
            Book Appointment
          </button>
        </div>

      </div>
    </div>
  );
};

export default BookAppoint;