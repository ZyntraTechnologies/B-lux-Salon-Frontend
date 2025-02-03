import { useState } from "react";

type usePopupProps = {
    isPopupOpen: boolean,
    handlePopup: () => void
}

const usePopup = (): usePopupProps => {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handlePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return { isPopupOpen, handlePopup };
}

export default usePopup;
