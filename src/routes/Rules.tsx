import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import pathConstants from "../pathConstants.tsx";
import "./routesCSS/Rules.css"

export default function Rules() {

    const location = useLocation();
    const [open, setOpen] = useState(true);

    useEffect(() => {
        location.pathname === ("/" + pathConstants.RULES.DEF) ? setOpen(true) : setOpen(false)
    }, [location]);

    const boldRed = (content: string) => { return <b className="red">{content}</b> }

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
                {open ?
                    <>
                        <Link
                            className="flex growFlex"
                            to="/rules/start">
                            <button
                                className="navRulesBtn "
                                onClick={() => setOpen(!open)}>
                                {boldRed("Stats")}&nbsp;&&nbsp;{boldRed("Skills")}&nbsp;&&nbsp;{boldRed("Roles")}
                            </button>
                        </Link>
                        <Link
                            className="flex growFlex"
                            to="/rules/act">
                            <button
                                className="navRulesBtn "
                                onClick={() => setOpen(!open)}>
                                {boldRed("Move")}&nbsp;&&nbsp;{boldRed("Fight")}&nbsp;&&nbsp;{boldRed("Heal")}
                            </button>
                        </Link>
                        <Link
                            className="flex growFlex"
                            to="/rules/live">
                            <button
                                className="navRulesBtn "
                                onClick={() => setOpen(!open)}>
                                {boldRed("Learn")}&nbsp;&&nbsp;{boldRed("Guide")}&nbsp;&&nbsp;{boldRed("Upgrade")}
                            </button>
                        </Link>
                        <Link
                            className="flex growFlex"
                            to="/rules/store">
                            <button
                                className="navRulesBtn "
                                onClick={() => setOpen(!open)}>
                                {boldRed("Items")}&nbsp;&&nbsp;{boldRed("Cyberware")}&nbsp;&&nbsp;{boldRed("Drugs")}
                            </button>
                        </Link>
                        <Link
                            className="flex growFlex"
                            to="/rules/world">
                            <button
                                className="navRulesBtn "
                                onClick={() => setOpen(!open)}>
                                {boldRed("World")}&nbsp;&&nbsp;{boldRed("Timeline")}&nbsp;&&nbsp;{boldRed("Corps")}
                            </button>
                        </Link>
                    </> :
                    <button
                        className="navRulesBtn "
                        onClick={() => setOpen(!open)}>
                        <b>Rules Menu</b>
                    </button>
                }
            </span>

            <Outlet />
        </>
    )
}