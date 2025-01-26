import { useState } from "react";

const usePopup = () => {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handlePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return [isPopupOpen, handlePopup];
}

export default usePopup;
