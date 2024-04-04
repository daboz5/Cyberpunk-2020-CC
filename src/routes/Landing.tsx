import { Link } from "react-router-dom";
import "./Landing.css"

export default function Landing() {
    return (
        <>
            <div className="colFlex alignFlex centerBox">
                <h1 className="defMouse">Cyberpunk 2020</h1>
                <h2 className="defMouse">
                    Create & Handle<br />
                    Character
                </h2>
                <nav className="flex alignFlex">
                    <Link
                        to="/make">
                        <button className="navBtn">
                            Make
                        </button>
                    </Link>
                    <Link
                        to="/play">
                        <button className="navBtn">
                            Play
                        </button>
                    </Link>
                </nav>
            </div>
        </>
    )
}