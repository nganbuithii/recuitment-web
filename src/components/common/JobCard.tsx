import React from "react";
import { DownloadIcon, EmailIcon, PhoneIcon } from "./Icons";

interface JobCardProps {
    title: string;
    company: string;
    requirements: string;
    email: string;
    phone: string;
}

const JobCard: React.FC<JobCardProps> = ({
    title,
    company,
    requirements,
    email,
    phone,
}) => {
    return (
        <div className="w-[370px] flex flex-col border border-gray-300 rounded-lg shadow-md p-4 bg-white">
            {/* Title and Company */}
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-base font-semibold text-gray-800">{title}</h3>
                    <p className="text-[13px] text-gray-600">{company}</p>
                </div>
                <button
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-orange-500 text-white"
                    aria-label="Download"
                >
                    <DownloadIcon/>
                </button>
            </div>

            {/* Requirements */}
            <p className="mt-3 text-sm text-gray-700 w-[80%]">
                <span className="text-sm">Yêu cầu:</span> {requirements}
            </p>

            {/* Contact Info */}
            <div className="mt-4 flex items-center justify-between text-sm text-gray-600 ">
                <div className="flex items-center gap-2 border-r pr-3 border-cyan-900 ">
                    <EmailIcon />
                    <span className="text-sm">{email}</span>
                </div>
                <div className="pl-3 flex items-center gap-2">
                    <PhoneIcon />
                    <span className="text-sm">{phone}</span>
                </div>
            </div>
        </div>
    );
};

export default JobCard;
