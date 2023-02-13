import "./Header.scss";
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <div className={"header"}>
            <h1 className={"header__name"}>Калькулятор себестоимости продуктов</h1>
            <nav className="header__navbar">
                <NavLink className="header__navbar_link"  to="new-item">Добавить новый продукт</NavLink>
                <NavLink className="header__navbar_link" to="/">Список продуктов</NavLink>
                <NavLink className="header__navbar_link" to="package">Список упаковок</NavLink>
                <NavLink className="header__navbar_link" to={"delete-item"}>Удаление продуктов</NavLink>
            </nav>
        </div>
    );
};

