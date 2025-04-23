import React, {useState} from 'react';
import {FaFile, FaGraduationCap, FaLink, FaMapMarker, FaPrint, FaRegBell, FaStethoscope, FaUser} from "react-icons/fa";

const Sidebar = () => {
    const tabs = [
        { label: 'Personal Details', icon: <FaUser /> },
        { label: 'Address Details', icon: <FaMapMarker /> },
        { label: 'Document Upload', icon: <FaFile /> },
        { label: 'Qualification Details', icon: <FaGraduationCap /> },
        { label: 'Covid Information', icon: <FaStethoscope /> },
        { label: 'Other Information', icon: <FaLink /> },
        { label: 'Print', icon: <FaPrint /> },
    ];

    return (
        <div className="w-72 pr-4">
            <ul className="space-y-2 h-full text-sm shadow-gray-500 shadow-md px-2 text-left">
                {tabs.map((tab, index) => (
                    <li
                        key={index}
                        className={`px-2 py-2 cursor-default flex items-center gap-2 text-500
                    ${index !== tabs.length - 1 ? 'border-b' : ''}
                    ${index === 0 ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
                    >
                        {tab.icon}
                        {tab.label}
                    </li>
                ))}
            </ul>
        </div>

    );
};

const Input = ({label, required, type = 'text', placeholder = '', className = '', value, onChange}) => (
    <div className="flex flex-col">
        <label className="text-xs font-medium text-[#5b5b5b] mb-1">
            {required && <span className="text-red-500 text-base">﹡</span>} {label}
        </label>
        <input
            type={type}
            placeholder={placeholder || `Enter ${label}`}
            className={`border rounded px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-blue-500 ${className}`}
            value={value}
            onChange={onChange}
        />
    </div>
);

const Select = ({label, required, options, value, onChange}) => (
    <div className="flex flex-col">
        <label className="text-xs font-medium text-[#5b5b5b] mb-1">
            {required && <span className="text-red-500 text-base">﹡</span>} {label}
        </label>
        <select
            className="border rounded px-3 py-2 text-xs outline-none focus:ring-1 focus:ring-blue-500"
            value={value}
            onChange={onChange}
        >
            {options.map((opt, i) => (
                <option key={i} value={opt}>{opt}</option>
            ))}
        </select>
    </div>
);

const RadioGroup = ({label, options}) => (
    <div className="flex flex-col">
        <label className="text-xs font-medium text-[#5b5b5b] mb-1">{label}</label>
        <div className="flex gap-2">
            {options.map((opt, i) => (
                <label key={i} className="text-xs text-gray-700">
                    <input type="radio" name={label} value={opt} className="mr-1"/> {opt}
                </label>
            ))}
        </div>
    </div>
);

const FileUpload = ({label}) => (
    <div className="flex flex-col items-start">
        <label className="text-xs font-medium text-[#5b5b5b] mb-1">{label}</label>
        <input type="file" className="text-sm"/>
    </div>
);

const SectionTitle = ({title, navbarColor = "#5864bd"}) => (
    <h4 className="mt-4 text-gray-800 text-lg border-l-[3.3px] pl-2 mb-2" style={{borderColor: navbarColor}}>
        {title}
    </h4>
);

const StudentForm = ({navbarColor = "#5864bd"}) => {
    const [formData, setFormData] = useState({
        studentMobile: '',
        studentEmail: '',
        altEmail: '',
        birthPlace: '',
        dob: '',
        nationality: 'Indian',
        category: 'GENERAL',
        religion: '',
        aadhar: '',
        abcId: '',
        dteId: '',
        uchchaId: ''
    });

    const isFormValid = [
        formData.studentMobile,
        formData.studentEmail,
        formData.altEmail,
        formData.birthPlace,
        formData.dob,
        formData.nationality,
        formData.category,
        formData.religion,
        formData.aadhar,
        formData.abcId,
        formData.dteId,
        formData.uchchaId
    ].every(Boolean);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isFormValid) {
            alert('Please fill all the required (*) fields before saving.');
            return;
        }
        alert('Form submitted successfully!');
    };

    return (
        <div className="bg-[#F4F4F4] px-6 py-4 rounded-xl mb-5">
            <div className="bg-white p-2 rounded-xl shadow-2xl">
                <h2 className="text-1500 font-semibold pl-4 py-2 text-lg text-left border-b-2"
                    style={{borderBottomColor: navbarColor}}>STUDENT INFORMATION</h2>
                <div className="flex bg-white min-h-screen px-2 py-4">
                    <Sidebar/>
                    <div className="flex-grow rounded-xl px-6 overflow-auto pt-0 pb-12">
                        <form className="space-y-6 text-sm text-left" onSubmit={handleSubmit}>
                            <SectionTitle title="Student Personal Details" navbarColor={navbarColor}/>
                            <div className="grid grid-cols-4 gap-6 ">
                                <Input label="Enrollment Number"/>
                                <Select label="Admission Type" options={["Regular", "Management"]}/>
                                <Input label="Registration No."/>
                                <Input label="Student First Name"/>
                                <Input label="Student Middle Name"/>
                                <Input label="Student Last Name"/>
                                <Input label="Student Full Name"/>
                                <Input label="Student Mobile No." required value={formData.studentMobile}
                                       onChange={e => setFormData({...formData, studentMobile: e.target.value})}/>
                                <Input label="Alternate Mobile No"/>
                                <Input label="Student Email ID" required value={formData.studentEmail}
                                       onChange={e => setFormData({...formData, studentEmail: e.target.value})}/>
                                <Input label="Alternate Email ID" required value={formData.altEmail}
                                       onChange={e => setFormData({...formData, altEmail: e.target.value})}/>
                                <Input label="Birth Place" required value={formData.birthPlace}
                                       onChange={e => setFormData({...formData, birthPlace: e.target.value})}/>
                                <RadioGroup label="Gender" options={["Male", "Female", "Others"]}/>
                                <Input label="Date of Birth" type="date" required value={formData.dob}
                                       onChange={e => setFormData({...formData, dob: e.target.value})}/>
                                <Select label="Nationality" options={["Indian", "Other"]} required
                                        value={formData.nationality}
                                        onChange={e => setFormData({...formData, nationality: e.target.value})}/>
                                <Select label="Blood Group" options={["A+", "B+", "O+", "AB+"]}/>
                                <Select label="Category" options={["GENERAL", "OBC", "SC", "ST"]} required
                                        value={formData.category}
                                        onChange={e => setFormData({...formData, category: e.target.value})}/>
                                <Input label="Sub Caste"/>
                                <Input label="Religion" required value={formData.religion}
                                       onChange={e => setFormData({...formData, religion: e.target.value})}/>
                                <RadioGroup label="Marital Status" options={["Single", "Married"]}/>
                                <Select label="Physically Disabled" options={["Yes", "No"]}/>
                                <Input label="Aadhar No." required value={formData.aadhar}
                                       onChange={e => setFormData({...formData, aadhar: e.target.value})}/>
                                <Input label="Passport No."/>
                                <Input label="Visa Number"/>
                                <Select label="Admission Through" options={["Institute Level", "CAP"]}/>
                                <RadioGroup label="Hosteller" options={["Yes", "No"]}/>
                                <RadioGroup label="Transportation" options={["Yes", "No"]}/>
                                <RadioGroup label="NRI/OCI/International Student/PIO" options={["Yes", "No"]}/>
                                <RadioGroup label="Specify Parents Details" options={["Yes", "No"]}/>
                                <RadioGroup label="Specify Father Details" options={["Yes", "No"]}/>
                                <RadioGroup label="Specify Mother Details" options={["Yes", "No"]}/>
                                <Input label="ABC ID" required value={formData.abcId}
                                       onChange={e => setFormData({...formData, abcId: e.target.value})}/>
                                <Input label="DTE Application ID" required value={formData.dteId}
                                       onChange={e => setFormData({...formData, dteId: e.target.value})}/>
                                <Input label="University Eligibility Number"/>
                                <Input label="Uchcha Shiksha ID" required value={formData.uchchaId}
                                       onChange={e => setFormData({...formData, uchchaId: e.target.value})}/>
                                <Input label="Family Income"/>
                            </div>

                            <SectionTitle title="Father Details" navbarColor={navbarColor}/>
                            <div className="grid grid-cols-4 gap-6">
                                <Input label="Father Full Name"/>
                                <Input label="Father's First Name"/>
                                <Input label="Father Middle Name"/>
                                <Input label="Father's Last Name"/>
                                <Input label="Father's Mobile No."/>
                                <Input label="Father Alternate Mobile No"/>
                                <Input label="Father's Office Phone No."/>
                                <Input label="Father's Email"/>
                                <Select label="Father's Qualification"
                                        options={["Graduate", "Postgraduate", "Diploma", "Other"]}/>
                                <Input label="Father's Occupation"/>
                                <Input label="Annual Income"/>
                            </div>

                            <SectionTitle title="Mother Details" navbarColor={navbarColor}/>
                            <div className="grid grid-cols-4 gap-6">
                                <Input label="Mother Full Name"/>
                                <Input label="Mother's First Name"/>
                                <Input label="Mother Middle Name"/>
                                <Input label="Mother's Last Name"/>
                                <Input label="Mother's Mobile No."/>
                                <Input label="Mother Alternate Mobile No"/>
                                <Input label="Mother's Office Phone No."/>
                                <Input label="Mother's Email"/>
                                <Select label="Mother's Qualification"
                                        options={["Graduate", "Postgraduate", "Diploma", "Other"]}/>
                                <Input label="Mother's Occupation"/>
                                <Input label="Annual Income"/>
                            </div>

                            <SectionTitle title="Photo & Signature Details" navbarColor={navbarColor}/>
                            {navbarColor !== '#ece8e8' ? (
                                <div className={'rounded-sm border w-full h-10 flex'}>
                                    <div className={'w-10 flex items-center justify-center text-center'}
                                         style={{backgroundColor: navbarColor}}><FaRegBell className={'h-8 text-white'}/>
                                    </div>
                                    <span className={'flex items-center justify-center text-center px-2'}>Only JPG, JPEG, PNG files allowed up to 150KB.
                                (Only Passport Size Photo Allowed)</span>
                                </div>
                                ):(
                                <div className={'rounded-sm border w-full h-10 flex'}>
                                    <div className={'w-10 flex items-center justify-center text-center'}
                                         style={{backgroundColor: navbarColor}}><FaRegBell className={'h-8 text-black'}/>
                                    </div>
                                    <span className={'flex items-center justify-center text-center px-2'}>Only JPG, JPEG, PNG files allowed up to 150KB.
                                (Only Passport Size Photo Allowed)</span>
                                </div>
                                )}

                            <div className="flex items-end gap-6">
                                <FileUpload label="Photo"/>
                                <FileUpload label="Signature"/>
                                {navbarColor !== '#ece8e8' ? (
                                    <button
                                        type="submit"
                                        className=" px-6 py-2 text-white text-md font-semibold rounded-lg"
                                        style={{backgroundColor: navbarColor}}
                                    >
                                        Save
                                    </button>
                                    ):(
                                    <button
                                        type="submit"
                                        className=" px-6 py-2 text-black text-md font-semibold rounded-lg"
                                        style={{backgroundColor: navbarColor}}
                                    >
                                        Save
                                    </button>
                                    )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentForm;