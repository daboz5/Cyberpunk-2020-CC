/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Checkbox(
    { checkId, checkClass, preChecked, beforeText, afterText, limit, beforeChildClass, afterChildClass, children }:
        {
            checkId: string,
            checkClass: string,
            preChecked?: boolean,
            beforeText?: string,
            afterText?: string,
            limit?: {
                current: number,
                setCurrent(newState: number): void,
                max: number
            },
            beforeChildClass?: string,
            afterChildClass?: string,
            children?: JSX.Element | JSX.Element[]
        }
) {

    const [checked, setChecked] = useState(false);

    useEffect(() => { setChecked(preChecked ? true : false) }, [preChecked]);

    const color = {
        on: "red",
        off: "white",
        disable: "grey"
    }

    const handleClick = () => {
        if (limit) {
            handleLimit()
        } else {
            setChecked(!checked);
        }
    }

    const handleLimit = () => {
        if (limit) {
            const els: any = document.getElementsByClassName(checkClass + "Checkbox");
            const oldNum = limit.current;
            const newNum = checked ? (oldNum - 1) : (oldNum + 1);

            if (newNum <= limit.max) {
                setChecked(!checked);
                limit.setCurrent(newNum)
            } else {
                toast.error(`Max ${limit.max} skill${limit.max === 1 ? "" : "s"} can be picked.`)
            }

            if (newNum < limit.max) {
                for (let i = 0; i < els.length; i++) {
                    const elColor = els[i].style.backgroundColor;
                    if (elColor === color.disable) {
                        els[i].style.backgroundColor = color.off;
                    }
                }
            } else if (newNum >= limit.max) {
                for (let i = 0; i < els.length; i++) {
                    const elColor = els[i].style.backgroundColor;
                    if (elColor === color.off) {
                        els[i].style.backgroundColor = color.disable
                    }
                }
            }
        }
    }

    const handleEnter = () => {
        const el = document.getElementById(checkId);
        const scale = "scale(105%)"
        const shadow = "inset 0 0 3px 1px black, inset 0 0 1px 1px black"
        if (el) {
            el.style.transform = scale
            el.style.boxShadow = shadow
        }
    }

    const handleLeave = () => {
        const el = document.getElementById(checkId);
        const scale = "scale(100%)"
        const shadow = "inset 0 0 5px 1px black"
        if (el) {
            el.style.transform = scale
            el.style.boxShadow = shadow
        }
    }

    return (
        <label
            className={`${checkClass} defMouse flex alignFlex`} >

            {beforeChildClass &&
                <span
                    id={"beforeChild" + checkId}
                    className={`actMouse ${beforeChildClass}`}
                    onClick={() => setChecked(!checked)}
                    onMouseOver={() => handleEnter()}
                    onMouseLeave={() => handleLeave()}>
                    {children}
                </span>}

            {beforeText ?
                <p
                    id={"before" + checkId}
                    className="actMouse"
                    onClick={() => setChecked(!checked)}
                    onMouseOver={() => handleEnter()}
                    onMouseLeave={() => handleLeave()}>
                    {beforeText}
                </p> :
                <></>}

            <span
                id={checkId}
                className={`${checkClass + "Checkbox"} actMouse`}
                style={{
                    backgroundColor: checked ?
                        color.on :
                        color.off
                }}
                onClick={() => handleClick()}
                onMouseOver={() => handleEnter()}
                onMouseLeave={() => handleLeave()}>
            </span>

            {afterText ?
                <p
                    id={"after" + checkId}
                    className="actMouse"
                    onClick={() => setChecked(!checked)}
                    onMouseOver={() => handleEnter()}
                    onMouseLeave={() => handleLeave()}>
                    {afterText}
                </p> :
                <></>}

            {afterChildClass &&
                <span
                    id={"afterChild" + checkId}
                    className={`actMouse ${afterChildClass}`}
                    onClick={() => setChecked(!checked)}
                    onMouseOver={() => handleEnter()}
                    onMouseLeave={() => handleLeave()}>
                    {children}
                </span>}

        </label>
    )
}