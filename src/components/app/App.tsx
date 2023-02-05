import {FC} from "react";
import Header from "../header/Header";
import "../../style/index.scss";
import {useTheme} from "../../teme/useTheme";
import "./app.scss"

const App: FC = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={"app " + theme}>
            <button className={"themeButton"} onClick={toggleTheme}>Сменить тему</button>
            <Header/>
        </div>
    );
};

export default App;
