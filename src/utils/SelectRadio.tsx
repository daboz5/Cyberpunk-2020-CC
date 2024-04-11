import { useState } from "react";
import ArrowUp from "../assets/ArrowUp"

export default function SelectRadio(
    { describe, selected, setSelected, selection }: {
        describe: string,
        selected: string,
        setSelected(newState: unknown): void,
        selection: string[],
    }
) {

    const [open, setOpen] = useState(false);

    const disableTillClicked = () => {
        const el = document.getElementById("rolePick");
        if (el && open) {
            el.style.display = "none";
            setOpen(false)
        }
        else if (el && !open) {
            el.style.display = "block";
            setOpen(true)
        }
    }

    return (<>

        <div className={"selectBox"}>

            <button
                id={"pickedRole"}
                className={"selector flex actMouse"}
                type={"button"}
                onClick={() => disableTillClicked()}>
                {selected ? selected : describe}
                <ArrowUp id={"radioArrow"} group="formArrow" up={!open} />
            </button>

            <div
                id={"rolePick"}
                className={"selection"}
                style={{ display: "none" }}>

                {/*TA ELEMENT UNIČI DEFAULT SELECT BUG*/}
                <input
                    name={"falseRadio" + describe}
                    disabled={true}
                    type={"radio"}
                    style={{ display: "none" }}>
                </input>

                {/*DEJANSKI SPUSTNI MENI*/}
                <label className={"option block"}>
                    <input
                        name={"dropdown" + describe + "Description"}
                        disabled={!open}
                        type={"radio"}
                        value={""}
                        onClick={() => {
                            setSelected(undefined)
                            disableTillClicked();
                        }}>
                    </input>
                    <span>
                        {describe}
                    </span>
                </label>
                {selection.map((option) => {
                    return (
                        <label
                            key={option + "RadioKey"}
                            className={"option block actMouse"}
                            tabIndex={0}
                            onKeyUp={(e) => {
                                if (e.code === "Enter") {
                                    setSelected(option)
                                    disableTillClicked()
                                }
                            }}>
                            <input
                                name={"dropdownOption" + selected}
                                type={"radio"}
                                value={option}
                                onClick={() => {
                                    setSelected(option)
                                    disableTillClicked();
                                }}>
                            </input>
                            <span>
                                {option}
                            </span>
                        </label>
                    )
                })}
            </div>

        </div>
    </>)
}