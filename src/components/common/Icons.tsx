import React from "react";
interface UserIconProps {
    color?: string;
}
interface NoteIconProps {
    color?: string;
}
interface PhoneIconProps {
    className?: string;
}

export const EmailIcon = ({ className = "" }: PhoneIconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 sm:w-[24px] sm:h-[24px] ${className}`} viewBox="0 0 24 24" fill="none">
        <path d="M3.02878 8L8.48356 11.645C9.76421 12.4963 10.4045 12.9219 11.0964 13.0873C11.7078 13.2335 12.3451 13.2335 12.9565 13.0873C13.6483 12.9219 14.2887 12.4963 15.5693 11.645L20.9736 8.04005M7.8 19H16.2C17.8802 19 18.7202 19 19.362 18.673C19.9265 18.3854 20.3854 17.9265 20.673 17.362C21 16.7202 21 15.8802 21 14.2V9.8C21 8.11984 21 7.27976 20.673 6.63803C20.3854 6.07354 19.9265 5.6146 19.362 5.32698C18.7202 5 17.8802 5 16.2 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V14.2C3 15.8802 3 16.7202 3.32698 17.362C3.6146 17.9265 4.07354 18.3854 4.63803 18.673C5.27976 19 6.11984 19 7.8 19Z" stroke="#6D6D6D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const PhoneIcon = ({ className = "" }: PhoneIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 25 24"
        fill="none"
        className={`w-[20px] h-[20px] sm:w-[25px] sm:h-[24px] ${className}`}
    >
        <path d="M3.5 5.5C3.5 14.0604 10.4396 21 19 21C19.3862 21 19.7691 20.9859 20.1483 20.9581C20.5834 20.9262 20.8009 20.9103 20.999 20.7963C21.163 20.7019 21.3185 20.5345 21.4007 20.364C21.5 20.1582 21.5 19.9181 21.5 19.438V16.6207C21.5 16.2169 21.5 16.015 21.4335 15.842C21.3749 15.6891 21.2795 15.553 21.1559 15.4456C21.016 15.324 20.8262 15.255 20.4468 15.117L17.24 13.9509C16.7985 13.7904 16.5777 13.7101 16.3683 13.7237C16.1836 13.7357 16.0059 13.7988 15.8549 13.9058C15.6837 14.0271 15.5629 14.2285 15.3212 14.6314L14.5 16C11.8501 14.7999 9.7019 12.6489 8.5 10L9.86863 9.17882C10.2715 8.93713 10.4729 8.81628 10.5942 8.64506C10.7012 8.49408 10.7643 8.31637 10.7763 8.1317C10.7899 7.92227 10.7096 7.70153 10.5491 7.26005L9.38299 4.05321C9.245 3.67376 9.17601 3.48403 9.05442 3.3441C8.94701 3.22049 8.81089 3.12515 8.65802 3.06645C8.48496 3 8.28308 3 7.87932 3H5.06201C4.58188 3 4.34181 3 4.13598 3.09925C3.9655 3.18146 3.79814 3.33701 3.7037 3.50103C3.58968 3.69907 3.57375 3.91662 3.54189 4.35173C3.51413 4.73086 3.5 5.11378 3.5 5.5Z" stroke="#6D6D6D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
export const DownloadIcon = ({ className = "" }: PhoneIconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"
        className={`w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] ${className}`} >
        <path d="M19.8333 19.8333H19.845M20.3 16.3333H21C22.0872 16.3333 22.6308 16.3333 23.0596 16.5109C23.6313 16.7477 24.0856 17.202 24.3224 17.7737C24.5 18.2025 24.5 18.7461 24.5 19.8333C24.5 20.9205 24.5 21.4641 24.3224 21.8929C24.0856 22.4646 23.6313 22.9189 23.0596 23.1557C22.6308 23.3333 22.0872 23.3333 21 23.3333H7C5.9128 23.3333 5.3692 23.3333 4.94041 23.1557C4.36867 22.9189 3.91443 22.4646 3.67761 21.8929C3.5 21.4641 3.5 20.9205 3.5 19.8333C3.5 18.7461 3.5 18.2025 3.67761 17.7737C3.91443 17.202 4.36867 16.7477 4.94041 16.5109C5.3692 16.3333 5.9128 16.3333 7 16.3333H7.7M14 17.5V4.66663M14 17.5L10.5 14M14 17.5L17.5 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
export const UploadIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.1146 12.8672C19.2307 12.7508 19.3687 12.6585 19.5205 12.5955C19.6724 12.5324 19.8352 12.5 19.9996 12.5C20.164 12.5 20.3268 12.5324 20.4787 12.5955C20.6306 12.6585 20.7685 12.7508 20.8846 12.8672L25.8846 17.8672C26.0008 17.9835 26.093 18.1214 26.1559 18.2733C26.2188 18.4251 26.2512 18.5879 26.2512 18.7522C26.2512 18.9166 26.2188 19.0793 26.1559 19.2312C26.093 19.383 26.0008 19.521 25.8846 19.6372C25.7684 19.7535 25.6304 19.8456 25.4786 19.9085C25.3267 19.9714 25.164 20.0038 24.9996 20.0038C24.8353 20.0038 24.6725 19.9714 24.5207 19.9085C24.3688 19.8456 24.2308 19.7535 24.1146 19.6372L21.2496 16.7697V26.2522C21.2496 26.5838 21.1179 26.9017 20.8835 27.1361C20.6491 27.3705 20.3311 27.5022 19.9996 27.5022C19.6681 27.5022 19.3502 27.3705 19.1157 27.1361C18.8813 26.9017 18.7496 26.5838 18.7496 26.2522V16.7697L15.8846 19.6372C15.6499 19.872 15.3316 20.0038 14.9996 20.0038C14.6677 20.0038 14.3493 19.872 14.1146 19.6372C13.8799 19.4025 13.748 19.0842 13.748 18.7522C13.748 18.4203 13.8799 18.102 14.1146 17.8672L19.1146 12.8672Z" fill="#F58A4D" />
        <path d="M11.015 8.355C13.5137 6.20034 16.7006 5.01035 20 5C26.725 5 32.3075 10 32.915 16.4475C36.895 17.01 40 20.3425 40 24.4325C40 28.9225 36.255 32.5 31.7175 32.5H9.4525C4.27 32.5 0 28.415 0 23.295C0 18.8875 3.165 15.2375 7.355 14.3125C7.7125 12.155 9.1 10.005 11.015 8.355ZM12.6475 10.2475C10.755 11.88 9.765 13.8475 9.765 15.3875V16.5075L8.6525 16.63C5.16 17.0125 2.5 19.88 2.5 23.295C2.5 26.9625 5.575 30 9.4525 30H31.7175C34.95 30 37.5 27.47 37.5 24.4325C37.5 21.3925 34.95 18.8625 31.7175 18.8625H30.4675V17.6125C30.47 12.0625 25.82 7.5 20 7.5C17.2997 7.51079 14.6921 8.48608 12.6475 10.25V10.2475Z" fill="#F58A4D" />
    </svg>
);
export const PlusIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#6D6D6D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 8V16" stroke="#6D6D6D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 12H16" stroke="#6D6D6D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
export const FilterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
        <path d="M18.25 6.31666H13.6C13.275 6.31666 13.0167 6.05833 13.0167 5.73333C13.0167 5.40833 13.275 5.14999 13.6 5.14999H18.25C18.575 5.14999 18.8333 5.40833 18.8333 5.73333C18.8333 6.05833 18.575 6.31666 18.25 6.31666Z" fill="white" />
        <path d="M5.85 6.31666H2.75C2.425 6.31666 2.16667 6.05833 2.16667 5.73333C2.16667 5.40833 2.425 5.14999 2.75 5.14999H5.85C6.175 5.14999 6.43333 5.40833 6.43333 5.73333C6.43333 6.05833 6.16667 6.31666 5.85 6.31666Z" fill="white" />
        <path d="M11.4917 5.73335C11.4917 7.13707 10.3537 8.27501 8.95 8.27501C7.54628 8.27501 6.40833 7.13707 6.40833 5.73335C6.40833 4.32962 7.54628 3.19168 8.95 3.19168C10.3537 3.19168 11.4917 4.32962 11.4917 5.73335Z" stroke="white" strokeWidth="1.5" />
        <path d="M18.25 14.8417H15.15C14.825 14.8417 14.5667 14.5833 14.5667 14.2583C14.5667 13.9333 14.825 13.675 15.15 13.675H18.25C18.575 13.675 18.8333 13.9333 18.8333 14.2583C18.8333 14.5833 18.575 14.8417 18.25 14.8417Z" fill="white" />
        <path d="M7.4 14.8417H2.75C2.425 14.8417 2.16667 14.5833 2.16667 14.2583C2.16667 13.9333 2.425 13.675 2.75 13.675H7.4C7.725 13.675 7.98333 13.9333 7.98333 14.2583C7.98333 14.5833 7.71667 14.8417 7.4 14.8417Z" fill="white" />
        <path d="M14.5917 14.2667C14.5917 15.6704 13.4537 16.8083 12.05 16.8083C10.6463 16.8083 9.50833 15.6704 9.50833 14.2667C9.50833 12.8629 10.6463 11.725 12.05 11.725C13.4537 11.725 14.5917 12.8629 14.5917 14.2667Z" stroke="white" strokeWidth="1.5" />
    </svg>
);
export const SendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M10.3014 13.6949L20.1025 3.89742M10.58 14.1355L12.8024 18.5804C13.3395 19.6545 13.608 20.1916 13.9463 20.3356C14.2399 20.4606 14.5755 20.4379 14.8496 20.2747C15.1656 20.0866 15.3596 19.5183 15.7477 18.3818L19.9468 6.08434C20.2849 5.09409 20.454 4.59896 20.3383 4.27142C20.2376 3.98648 20.0135 3.76234 19.7285 3.66167C19.401 3.54595 18.9059 3.71502 17.9156 4.05315L5.61812 8.2523C4.48163 8.64037 3.91338 8.83441 3.72527 9.15032C3.56202 9.42447 3.5394 9.76007 3.66438 10.0536C3.8084 10.3919 4.34547 10.6605 5.41961 11.1975L9.86445 13.42C10.0414 13.5085 10.1299 13.5527 10.2066 13.6118C10.2747 13.6643 10.3357 13.7253 10.3881 13.7933C10.4473 13.87 10.4915 13.9585 10.58 14.1355Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
export const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none">
        <path d="M12 19C12.1978 19 12.3911 18.9414 12.5556 18.8315C12.72 18.7216 12.8482 18.5654 12.9239 18.3827C12.9996 18.2 13.0194 17.9989 12.9808 17.8049C12.9422 17.6109 12.847 17.4327 12.7071 17.2929C12.5673 17.153 12.3891 17.0578 12.1951 17.0192C12.0011 16.9806 11.8 17.0004 11.6173 17.0761C11.4346 17.1518 11.2784 17.28 11.1685 17.4444C11.0586 17.6089 11 17.8022 11 18C11 18.2652 11.1054 18.5196 11.2929 18.7071C11.4804 18.8946 11.7348 19 12 19ZM17 19C17.1978 19 17.3911 18.9414 17.5556 18.8315C17.72 18.7216 17.8482 18.5654 17.9239 18.3827C17.9996 18.2 18.0194 17.9989 17.9808 17.8049C17.9422 17.6109 17.847 17.4327 17.7071 17.2929C17.5673 17.153 17.3891 17.0578 17.1951 17.0192C17.0011 16.9806 16.8 17.0004 16.6173 17.0761C16.4346 17.1518 16.2784 17.28 16.1685 17.4444C16.0586 17.6089 16 17.8022 16 18C16 18.2652 16.1054 18.5196 16.2929 18.7071C16.4804 18.8946 16.7348 19 17 19ZM17 15C17.1978 15 17.3911 14.9414 17.5556 14.8315C17.72 14.7216 17.8482 14.5654 17.9239 14.3827C17.9996 14.2 18.0194 13.9989 17.9808 13.8049C17.9422 13.6109 17.847 13.4327 17.7071 13.2929C17.5673 13.153 17.3891 13.0578 17.1951 13.0192C17.0011 12.9806 16.8 13.0004 16.6173 13.0761C16.4346 13.1518 16.2784 13.28 16.1685 13.4444C16.0586 13.6089 16 13.8022 16 14C16 14.2652 16.1054 14.5196 16.2929 14.7071C16.4804 14.8946 16.7348 15 17 15ZM12 15C12.1978 15 12.3911 14.9414 12.5556 14.8315C12.72 14.7216 12.8482 14.5654 12.9239 14.3827C12.9996 14.2 13.0194 13.9989 12.9808 13.8049C12.9422 13.6109 12.847 13.4327 12.7071 13.2929C12.5673 13.153 12.3891 13.0578 12.1951 13.0192C12.0011 12.9806 11.8 13.0004 11.6173 13.0761C11.4346 13.1518 11.2784 13.28 11.1685 13.4444C11.0586 13.6089 11 13.8022 11 14C11 14.2652 11.1054 14.5196 11.2929 14.7071C11.4804 14.8946 11.7348 15 12 15ZM19 3H18V2C18 1.73478 17.8946 1.48043 17.7071 1.29289C17.5196 1.10536 17.2652 1 17 1C16.7348 1 16.4804 1.10536 16.2929 1.29289C16.1054 1.48043 16 1.73478 16 2V3H8V2C8 1.73478 7.89464 1.48043 7.70711 1.29289C7.51957 1.10536 7.26522 1 7 1C6.73478 1 6.48043 1.10536 6.29289 1.29289C6.10536 1.48043 6 1.73478 6 2V3H5C4.20435 3 3.44129 3.31607 2.87868 3.87868C2.31607 4.44129 2 5.20435 2 6V20C2 20.7956 2.31607 21.5587 2.87868 22.1213C3.44129 22.6839 4.20435 23 5 23H19C19.7956 23 20.5587 22.6839 21.1213 22.1213C21.6839 21.5587 22 20.7956 22 20V6C22 5.20435 21.6839 4.44129 21.1213 3.87868C20.5587 3.31607 19.7956 3 19 3ZM20 20C20 20.2652 19.8946 20.5196 19.7071 20.7071C19.5196 20.8946 19.2652 21 19 21H5C4.73478 21 4.48043 20.8946 4.29289 20.7071C4.10536 20.5196 4 20.2652 4 20V11H20V20ZM20 9H4V6C4 5.73478 4.10536 5.48043 4.29289 5.29289C4.48043 5.10536 4.73478 5 5 5H6V6C6 6.26522 6.10536 6.51957 6.29289 6.70711C6.48043 6.89464 6.73478 7 7 7C7.26522 7 7.51957 6.89464 7.70711 6.70711C7.89464 6.51957 8 6.26522 8 6V5H16V6C16 6.26522 16.1054 6.51957 16.2929 6.70711C16.4804 6.89464 16.7348 7 17 7C17.2652 7 17.5196 6.89464 17.7071 6.70711C17.8946 6.51957 18 6.26522 18 6V5H19C19.2652 5 19.5196 5.10536 19.7071 5.29289C19.8946 5.48043 20 5.73478 20 6V9ZM7 15C7.19778 15 7.39112 14.9414 7.55557 14.8315C7.72002 14.7216 7.84819 14.5654 7.92388 14.3827C7.99957 14.2 8.01937 13.9989 7.98079 13.8049C7.9422 13.6109 7.84696 13.4327 7.70711 13.2929C7.56725 13.153 7.38907 13.0578 7.19509 13.0192C7.00111 12.9806 6.80004 13.0004 6.61732 13.0761C6.43459 13.1518 6.27841 13.28 6.16853 13.4444C6.05865 13.6089 6 13.8022 6 14C6 14.2652 6.10536 14.5196 6.29289 14.7071C6.48043 14.8946 6.73478 15 7 15ZM7 19C7.19778 19 7.39112 18.9414 7.55557 18.8315C7.72002 18.7216 7.84819 18.5654 7.92388 18.3827C7.99957 18.2 8.01937 17.9989 7.98079 17.8049C7.9422 17.6109 7.84696 17.4327 7.70711 17.2929C7.56725 17.153 7.38907 17.0578 7.19509 17.0192C7.00111 16.9806 6.80004 17.0004 6.61732 17.0761C6.43459 17.1518 6.27841 17.28 6.16853 17.4444C6.05865 17.6089 6 17.8022 6 18C6 18.2652 6.10536 18.5196 6.29289 18.7071C6.48043 18.8946 6.73478 19 7 19Z" fill="#F26D21" />
    </svg>
);
export const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M7.5 7.5L12.5 12.5M12.5 7.5L7.5 12.5M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#DBDBDB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
export const RecIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M7.20711 9C6.76165 9 6.53857 9.53857 6.85355 9.85355L11.6464 14.6464C11.8417 14.8417 12.1583 14.8417 12.3536 14.6464L17.1464 9.85355" fill="#F26D21" />
        <path d="M17.1464 9.85355L12.3536 14.6464C12.1583 14.8417 11.8417 14.8417 11.6464 14.6464L6.85355 9.85355C6.53857 9.53857 6.76165 9 7.20711 9H16.7929C17.2383 9 17.4614 9.53857 17.1464 9.85355Z" stroke="#F26D21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
export const UserIcon: React.FC<UserIconProps> = ({ color = "#6D6D6D" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
            d="M22.75 22.75L24.5 24.5M3.5 24.5C3.5 19.9897 7.15634 16.3333 11.6667 16.3333C12.2674 16.3333 12.8529 16.3982 13.4167 16.5213M23.3333 20.4167C23.3333 22.0275 22.0275 23.3333 20.4167 23.3333C18.8058 23.3333 17.5 22.0275 17.5 20.4167C17.5 18.8058 18.8058 17.5 20.4167 17.5C22.0275 17.5 23.3333 18.8058 23.3333 20.4167ZM16.3333 8.16667C16.3333 10.744 14.244 12.8333 11.6667 12.8333C9.08934 12.8333 7 10.744 7 8.16667C7 5.58934 9.08934 3.5 11.6667 3.5C14.244 3.5 16.3333 5.58934 16.3333 8.16667Z"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
export const NoteIcon: React.FC<NoteIconProps> = ({ color = "#6D6D6D" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M10.5 19.8333H13.4166M10.5 15.1667H16.3333M10.5 10.5H11.6666M15.1666 3.5H9.56665C8.25986 3.5 7.60646 3.5 7.10734 3.75432C6.66829 3.97802 6.31134 4.33498 6.08763 4.77402C5.83331 5.27315 5.83331 5.92654 5.83331 7.23333V20.7667C5.83331 22.0735 5.83331 22.7269 6.08763 23.226C6.31134 23.665 6.66829 24.022 7.10734 24.2457C7.60646 24.5 8.25986 24.5 9.56665 24.5H11.6666M15.1666 3.5L22.1666 10.5M15.1666 3.5V6.76667C15.1666 8.07346 15.1666 8.72685 15.421 9.22598C15.6447 9.66502 16.0016 10.022 16.4407 10.2457C16.9398 10.5 17.5932 10.5 18.9 10.5H22.1666M22.1666 10.5V11.6667M16.3333 24.5L18.6958 24.0275C18.9018 23.9863 19.0048 23.9657 19.1008 23.928C19.1861 23.8946 19.2671 23.8512 19.3422 23.7989C19.4268 23.7398 19.5011 23.6656 19.6496 23.517L24.5 18.6667C25.1443 18.0223 25.1443 16.9777 24.5 16.3333C23.8556 15.689 22.811 15.689 22.1666 16.3333L17.3163 21.1837C17.1677 21.3322 17.0935 21.4065 17.0345 21.4911C16.9821 21.5662 16.9387 21.6473 16.9053 21.7325C16.8676 21.8285 16.847 21.9315 16.8058 22.1375L16.3333 24.5Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
export const DropIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M7.20711 9C6.76165 9 6.53857 9.53857 6.85355 9.85355L11.6464 14.6464C11.8417 14.8417 12.1583 14.8417 12.3536 14.6464L17.1464 9.85355" fill="#F26D21" />
        <path d="M17.1464 9.85355L12.3536 14.6464C12.1583 14.8417 11.8417 14.8417 11.6464 14.6464L6.85355 9.85355C6.53857 9.53857 6.76165 9 7.20711 9H16.7929C17.2383 9 17.4614 9.53857 17.1464 9.85355Z" stroke="#F26D21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
export const ArrowIconLeft = ({ className }: { className?: string }) => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className}`}>
<path d="M27 18L9 18M27 18L19.5 25.5M27 18L19.5 10.5" stroke="#F26D21" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

);
export const AlertIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#EC3740" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 16H12.01" stroke="#EC3740" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 8V12" stroke="#EC3740" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

