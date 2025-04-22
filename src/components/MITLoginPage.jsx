import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {MIT, mitaoe, mitbuilding, qr} from "../images";
import {TfiReload} from "react-icons/tfi";
import {FaEye, FaEyeSlash} from "react-icons/fa";

function MITLoginPage() {
    const [captcha, setCaptcha] = useState("");
    const [userCaptcha, setUserCaptcha] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => setShowPassword(!showPassword);

    const navigate = useNavigate();

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

        if ((username === "202101070082" || username === "202101070074" || username === "202101040253" || username === "202101040257") && password === "hci") {
            navigate("/Dashboard");
        } else {
            alert("Invalid username or password!");
        }
    };

    return (
        <div className="min-h-screen flex">
            {/* Left Side Image */}
            <div className="w-[70.5%] relative hidden lg:block">
                <img
                    src={mitbuilding}
                    alt="MIT Building"
                    className="m-4 h-[94%] w-full bg-[#07768e]/30 rounded-2xl object-center opacity-90"
                />
              <div className="absolute m-4 h-[94%] w-full inset-0 bg-[#07768e]/30 rounded-2xl"></div>
                <div className="m-4 text-left absolute bottom-28 left-0 bg-[#141d49] text-white px-3 py-4">
                    <h1 className="text-3xl font-bold">MIT</h1>
                    <p className="text-xl">Academy Of Engineering</p>
                </div>
            </div>

            {/* Right Side Form */}
            <div className="w-full lg:w-[29.5%] bg-white p-8 px-16 flex flex-col justify-center">
                <div className="text-center mb-5">
                    <img
                        src={mitaoe}
                        alt="MIT Building"
                        className=""
                    />
                    <p className="text-sm mt-1 text-[#141d49]">Alandi Road, Pune - 412 105, Maharashtra (India)</p>
                </div>

                <p className="text-lg font-bold mb-4 text-left text-[#212529]">Sign In</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="User Name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full border p-2 rounded shadow-sm"
                    />
                    <div className={'relative'}>
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border p-2 rounded shadow-sm"
                            placeholder="Password"
                        />
                        <button
                            type="button"
                            onClick={togglePassword}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
                        >
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </button>
                    </div>

                    <div className="flex items-center space-x-2">
                        <button type="button" onClick={generateCaptcha} className="text-2xl text-blue-600"><TfiReload
                            className={'scale-x-[-1] text-black text-xl rotate-[150deg] font-bold'}/></button>
                        <span className="text-3xl text-[#141d49] font-bold tracking-widest">{captcha}</span>
                        <input
                            type="text"
                            placeholder="Captcha"
                            value={userCaptcha}
                            onChange={(e) => setUserCaptcha(e.target.value)}
                            className="flex-1 w-max border p-2 rounded shadow-sm"
                        />
                    </div>

                    <button type="submit" className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800">Sign
                        In
                    </button>

                    <button type="button"
                            className="w-full border border-blue-600 flex justify-center items-center py-1 rounded hover:bg-gray-100">
                        <span className={'font-semibold text-lg'}>G</span><span className="mr-2"></span> Continue With
                        Google
                    </button>

                    <div className="text-center">
                        <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Password / UserName</a>
                    </div>

                    <div className="flex justify-between items-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                             alt="Google Play" className="h-10"/>
                        <img src={qr} alt="QR Code" className="h-14"/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MITLoginPage;