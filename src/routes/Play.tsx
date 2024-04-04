import { Link } from "react-router-dom";

export default function Play() {
    return (
        <>
            <nav>
                <Link
                    to="/">
                    <button className="navBtn">
                        Return
                    </button>
                </Link>
            </nav>
        </>
    )
}