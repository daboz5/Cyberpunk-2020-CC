import { Link, Outlet } from "react-router-dom";
import "./routesCSS/Rules.css"

export default function Rules() {
    return (
        <>
            <nav className="colFlex">
                <Link
                    className="flex"
                    to="/">
                    <button className="navBtn exitBtn">
                        Return
                    </button>
                </Link>
            </nav>

            <span id="navRulesBtnBox" className="colFlex">
                <Link
                    className="flex growFlex"
                    to="/rules/basics">
                    <button className="navRulesBtn ">
                        Stats & Skills & Roles
                    </button>
                </Link>
                <Link
                    className="flex growFlex"
                    to="/rules/advanced">
                    <button className="navRulesBtn ">
                        Fight & Heal & Work
                    </button>
                </Link>
                <Link
                    className="flex growFlex"
                    to="/rules/store">
                    <button className="navRulesBtn ">
                        Items & Upgrades & Drugs
                    </button>
                </Link>
                <Link
                    className="flex growFlex"
                    to="/rules/world">
                    <button className="navRulesBtn ">
                        World & Timeline & Corps
                    </button>
                </Link>
            </span>

            <Outlet />
        </>
    )
}