import { Link } from "react-router-dom";
import "./routesCSS/Landing.css"

export default function Landing() {
    return (
        <>
            <div className="colFlex alignFlex centerBox">
                <h1 className="defMouse">Cyberpunk 2020</h1>
                <h2 className="defMouse">
                    Create & Handle<br />
                    Character
                </h2>
                <nav className="flex colFlex alignFlex">
                    <div className="flex">
                        <Link
                            to="/make/basic">
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
                    </div>
                    <p>
                        *some parts of the book were altered<br />
                        for more easy, balanced (and fun) experience*
                    </p>
                    <Link
                        to="/play">
                        <button className="navBtn">
                            Rules
                        </button>
                    </Link>
                </nav>
            </div>
        </>
    )
}