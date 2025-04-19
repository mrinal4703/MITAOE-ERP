import React, { useState, useEffect } from "react";

function MITLoginPage() {
  const [captcha, setCaptcha] = useState("");
  const [userCaptcha, setUserCaptcha] = useState("");

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const random = Math.floor(1000 + Math.random() * 9000).toString();
    setCaptcha(random);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userCaptcha !== captcha) {
      alert("Captcha does not match!");
      generateCaptcha();
      return;
    }
    alert("Login successful (Captcha matched)");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side Image */}
      <div className="w-2/3 relative hidden lg:block">
        <img
          src="/MIT-clg-img.jpg"
          alt="MIT Building"
          className="m-4 h-[96%] w-[99%] rounded-2xl object-cover object-center opacity-90"
        />
        <div className="m-4 absolute bottom-10 left-0 bg-blue-900 text-white px-8 py-4">
          <h1 className="text-3xl font-bold">MIT</h1>
          <p className="text-lg">Academy Of Engineering</p>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="w-full lg:w-1/3 bg-white p-8 flex flex-col justify-center">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-blue-900">MIT | <span className="font-normal text-black">Academy of Engineering</span></h2>
          <p className="text-xs text-gray-500">(An Autonomous Institute Affiliated to Savitribai Phule Pune University)</p>
          <p className="text-sm mt-1">Alandi Road, Pune - 412 105, Maharashtra (India)</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="User Name" className="w-full border p-2 rounded shadow-sm" />
          <input type="password" placeholder="Password" className="w-full border p-2 rounded shadow-sm" />
          <div className="flex items-center space-x-2">
          <button type="button" onClick={generateCaptcha} className="text-sm text-blue-600 underline">↻</button>
            <span className="text-xl font-bold tracking-widest">{captcha}</span>
            <input
              type="text"
              placeholder="Captcha"
              value={userCaptcha}
              onChange={(e) => setUserCaptcha(e.target.value)}
              className="flex-1 border p-2 rounded shadow-sm"
            />
          </div>

          <button type="submit" className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800">Sign In</button>

          <button type="button" className="w-full border flex justify-center items-center py-2 rounded hover:bg-gray-100">
            <span className="mr-2"></span> Continue With Google
          </button>

          <div className="text-center">
            <a href="#" className="text-sm text-blue-700 hover:underline">Forgot Password / UserName</a>
          </div>

          <div className="flex justify-center items-center mt-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10" />
            <img src="https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fplay.google.com%2Fstore&chs=180x180&choe=UTF-8&chld=L|2" alt="QR Code" className="h-16 ml-4" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default MITLoginPage;