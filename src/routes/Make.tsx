import { Link, Outlet } from "react-router-dom";
import useCyberStore from "../useCyberStore";
import useMake from "../utils/useMake";
import "./routesCSS/Make.css"

export default function Make() {

    const { basicInfo, statsInfo } = useCyberStore();
    const { sumStats } = useMake();

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
                            filter: `brightness(${basicInfo.role ? sumStats(statsInfo) ? "100%" : "50%" : "30%"})`
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