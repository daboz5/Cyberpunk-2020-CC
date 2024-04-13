import { Link, Outlet } from "react-router-dom";
import useCyberStore from "../useCyberStore";
import "./routesCSS/Make.css"

export default function Make() {

    const { basicInfo } = useCyberStore();

    return (
        <>
            <nav className="flex colFlex">

                <Link
                    className="flex"
                    to="/">
                    <button className="navBtn exitBtn">
                        Return
                    </button>
                </Link>

                <span className="flex alignFlex">
                    <Link
                        className="flex growFlex"
                        to="/make/basic">
                        <button className="navBtn makeNavBtn">
                            Basic
                        </button>
                    </Link>
                    <Link
                        className={`flex growFlex ${!basicInfo.role && "blockMouse"}`}
                        to="/make/stats"
                        style={{
                            filter: `brightness(${basicInfo.role ? "100%" : "50%"})`
                        }}>
                        <button className="navBtn makeNavBtn">
                            Stats
                        </button>
                    </Link>
                    <Link
                        className={`flex growFlex ${!basicInfo.role && "blockMouse"}`}
                        to="/make/skills"
                        style={{
                            filter: `brightness(${basicInfo.role ? "100%" : "30%"})`
                        }}>
                        <button className="navBtn makeNavBtn">
                            Skills
                        </button>
                    </Link>
                </span>

            </nav>

            <Outlet />
        </>
    )
}