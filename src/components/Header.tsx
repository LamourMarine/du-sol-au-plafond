type HeaderProps = {
    logoURL: string;
};

const Header =({logoURL}: HeaderProps) => {
    return (
        <header>
            <img src={logoURL} alt="Logo de l'entreprise" />
            <h1>Du Sol Au Plafond</h1>
        </header>
    );
};

export default Header;