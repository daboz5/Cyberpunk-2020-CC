import { useState } from "react"

export default function RulesLive() {

    const [content, setContent] = useState([]);
    const [examine, setExamine] = useState(undefined);


    return (
        <>
            <span className="flex">
                <button>
                    Fight
                </button>
                <button>
                    Heal
                </button>
                <button>
                    Learn
                </button>
            </span>
        </>
    )
}