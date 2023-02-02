import "./Header.scss";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={"header"}>
            <h1 className={"header__name"}>Калькулятор себестоимости продуктов</h1>
            <nav className="header__navbar">
                <div><NavLink className="header__navbar_link" to="new-item">Добавить новый продукт</NavLink></div>
                <div><NavLink className="header__navbar_link" to="/">Список продуктов</NavLink></div>
                <div><NavLink className="header__navbar_link" to="package">Список упаковок</NavLink></div>
                <div><NavLink className="header__navbar_link" to={"delete-item"}>Удаление продуктов</NavLink></div>
            </nav>
        </div>
    );
};

export default Header;