import { Link } from "react-router-dom";

export default function Play() {
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
        </>
    )
}