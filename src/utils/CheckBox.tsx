/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Checkbox(
    {
        checkId, checkClass, preChecked, beforeText,
        afterText, limit, beforeChildClass, afterChildClass,
        onChange, children }:
        {
            checkId: string,
            checkClass: string,
            preChecked?: boolean,
            beforeText?: string,
            afterText?: string,
            limit?: {
                current: number,
                max: number
            },
            beforeChildClass?: string,
            afterChildClass?: string,
            onChange?(newState: {
                add: boolean,
                content: string
            }): void,
            children?: JSX.Element | JSX.Element[]
        }
) {


    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(preChecked ? true : false);
        if (onChange && preChecked) {
            onChange({
                add: true,
                content: afterText ? afterText : beforeText ? beforeText : ""
            });
        } else if (onChange && !preChecked) {
            onChange({
                add: false,
                content: afterText ? afterText : beforeText ? beforeText : ""
            });
        }
    }, [preChecked]);

    const color = {
        on: "red",
        off: "white",
        disable: "grey"
    }

    const handleClick = () => {

        if (limit) {
            const els: any = document.getElementsByClassName(checkClass + "Checkbox");
            const oldNum = limit.current;
            const newNum = checked ? (oldNum - 1) : (oldNum + 1);

            if (newNum <= limit.max) {
                setChecked(!checked);
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
                if (onChange) {
                    onChange({
                        add: !checked,
                        content: afterText ? afterText : beforeText ? beforeText : ""
                    });
                }

            } else if (newNum >= limit.max) {
                for (let i = 0; i < els.length; i++) {
                    const elColor = els[i].style.backgroundColor;
                    if (elColor === color.off) {
                        els[i].style.backgroundColor = color.disable
                    }
                }
                if (onChange && newNum === limit.max) {
                    onChange({
                        add: !checked,
                        content: afterText ? afterText : beforeText ? beforeText : ""
                    });
                }
            }
        }

        else {
            setChecked(!checked);
        }
    }

    const handleEnter = () => {
        const el = document.getElementById(checkId);
        const scale = "scale(110%)"
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
                    onClick={() => handleClick()}
                    onMouseOver={() => handleEnter()}
                    onMouseLeave={() => handleLeave()}>
                    {children}
                </span>}

            {beforeText ?
                <p
                    id={"before" + checkId}
                    className="actMouse"
                    onClick={() => handleClick()}
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
                        color.off && limit?.current !== limit?.max ?
                            color.off :
                            color.disable
                }}
                onClick={() => handleClick()}
                onMouseOver={() => handleEnter()}
                onMouseLeave={() => handleLeave()}>
            </span>

            {afterText ?
                <p
                    id={"after" + checkId}
                    className="actMouse"
                    onClick={() => handleClick()}
                    onMouseOver={() => handleEnter()}
                    onMouseLeave={() => handleLeave()}>
                    {afterText}
                </p> :
                <></>}

            {afterChildClass &&
                <span
                    id={"afterChild" + checkId}
                    className={`actMouse ${afterChildClass}`}
                    onClick={() => handleClick()}
                    onMouseOver={() => handleEnter()}
                    onMouseLeave={() => handleLeave()}>
                    {children}
                </span>}

        </label>
    )
}