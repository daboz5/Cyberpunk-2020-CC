import { Link } from "react-router-dom";

export default function Rules() {
    return (
        <>
            <nav>
                <Link
                    to="/">
                    <button className="navBtn exitBtn">
                        Return
                    </button>
                </Link>
            </nav>
        </>
    )
}