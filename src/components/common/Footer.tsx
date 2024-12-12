
const Footer: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <div className={`h-[72px] bg-white max-w-full flex items-center justify-center ${className}`}>
            <p className="text-gray-500 text-center font-roboto text-sm sm:text-[16px] italic font-normal leading-normal">
                Alta Software - Training Team - 04/2023
            </p>
        </div>
    );
};

export default Footer;



