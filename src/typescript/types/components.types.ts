export type ParagraphComponentProps = {
    text: string,
    color?: string
};

export type SubHeaderComponentProps = {
    text: string,
};

export type NavbarPropsComponentProps = {
    isPopupOpen: boolean,
    handlePopup: () => void
};

export type PopupPropsComponentProps = {
    isPopupOpen: boolean,
    handlePopup: () => void
};

export type ThemeFontComponentProps = {
    text: string,
    color?: string,
    size?: string
};