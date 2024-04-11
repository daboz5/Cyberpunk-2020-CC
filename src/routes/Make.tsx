import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { BasicRole, Role } from "../types";
import useCyberStore from "../useCyberStore";
import useDatabase from "../utils/useDatabase";
import SelectRadio from "../utils/SelectRadio";
import Checkbox from "../utils/CheckBox";
import "./Make.css"

export default function Make() {

    const {
        jobSkillsChecked,
        setJobSkillsChecked,
    } = useCyberStore();
    const { roleArr, skillArr } = useDatabase();

    const [role, setRole] = useState<Role | undefined>(undefined);
    const [formData, setFormData] = useState<BasicRole>({
        handle: "",
        age: "",
        skills: []
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    }


    const handleCheckChange = useCallback((
        { add, content }: { add: boolean, content: string }
    ) => {
        const extract = content.slice(0, content.length - 5);

        if (add && !formData.skills.includes(extract)) {
            const arr = formData.skills;
            arr.push(extract);
            setFormData(prevData => ({ ...prevData, skills: arr }));
        }

        else if (!add && formData.skills.includes(extract)) {
            const arr = formData.skills.filter(e => e !== extract);
            setFormData(prevData => ({ ...prevData, skills: arr }));
        }
    }, [formData.skills])


    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData)
    }

    useEffect(() => { window.onscroll = function () { scrollFunction() } }, []);
    useEffect(() => {
        window.onscroll = function () { scrollFunction() }
        if (role) { setFormData(prevData => ({ ...prevData, skills: role.defSkill })) }
    }, [role]);

    const scrollFunction = () => {
        const btn = document.getElementById("upBtnRole");
        if (btn && role) {
            if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
                btn.style.opacity = "1";
            } else {
                btn.style.opacity = "0";
            }
        }
    }

    const moveToTop = () => {
        document.body.scrollTop = 350;
        document.documentElement.scrollTop = 350;
    }

    const changeRole = (name: string | undefined) => {
        const filterRole = roleArr.filter(e => e.job === name)[0];
        if (filterRole) {
            setJobSkillsChecked(9);
            setRole(filterRole ? filterRole : undefined);
        } else if (name === "Create a Role") {
            setJobSkillsChecked(0);
            setRole({
                skill: "",
                job: "Create a Role",
                description: "",
                defSkill: [],
                oridinalOrFortressDescription: ""
            })
        } else {
            setRole(undefined)
        }
    }

    return (
        <>
            {/*EXIT*/}
            <nav>
                <Link to="/">
                    <button className="navBtn exitBtn">
                        Return
                    </button>
                </Link>
            </nav>

            {/*FORMA ZA IZDELAVO LIKA*/}
            <h3>
                Create Character<br />
                (basic)
            </h3>
            <form
                id="form"
                className={"colFlex"}
                onSubmit={handleSubmit}>

                {/*GUMBI ZA FORM*/}
                <div
                    id="formBtnBox"
                    className={"colFlex"}>
                    <div>
                        <button
                            className={"formBtn colFlex"}
                            type={"reset"}
                            onClick={() => setRole(undefined)}>
                            Reset
                        </button>
                        <button
                            className={"formBtn colFlex"}
                            type={"submit"}>
                            Confirm
                        </button>
                    </div>
                </div>

                {/*IZBERI HANDLE*/}
                <label className={"formInput colFlex"}>
                    <span className={"formInputTitle"}>
                        Handle (Nickname)
                    </span>
                    <input
                        name="handle"
                        type={"text"}
                        className={"formInputField "}
                        placeholder={"Example: Silver"}
                        autoComplete={"off"}
                        onChange={handleChange}
                        value={formData.handle}
                        maxLength={25}
                        required>
                    </input>
                </label>

                {/* IZBERI AGE */}
                <label className={"formInput colFlex"}>
                    <span className={"formInputTitle"}>
                        Age
                    </span>
                    <input
                        name="age"
                        type={"number"}
                        className={"formInputField "}
                        placeholder={"Min-Max: 16-120"}
                        autoComplete={"off"}
                        min={16}
                        max={120}
                        value={formData.age}
                        onChange={handleChange}
                        required>
                    </input>
                </label>


                {/* IZBIRA VLOGE */}
                <label className={"formInput colFlex"}>
                    <span className={"formInputTitle"}>
                        Pick, Edit or Create a Role
                    </span>
                    <SelectRadio
                        describe="Pick a role"
                        selected={role ? role.job : ""}
                        setSelected={changeRole}
                        selection={roleArr.map(role => role.job).concat("Create a Role")}
                    />
                </label>
                {role ?
                    <>{skillArr.map(e => {
                        return (
                            <div key={e.skill + "SkillKey"}>
                                <Checkbox
                                    checkId={e.skill.replace(" ", "") + "Skill"}
                                    checkClass={"jobSkill"}
                                    afterText={e.skill}
                                    afterChildClass={`skillStat ${"skillStat" + e.stat}`}
                                    preChecked={role.defSkill.includes(e.skill)}
                                    onChange={handleCheckChange}
                                    limit={{
                                        current: jobSkillsChecked,
                                        setCurrent: setJobSkillsChecked,
                                        max: 9
                                    }}>
                                    <span>({e.stat})</span>
                                </Checkbox>
                            </div>
                        )
                    })}</> :
                    <></>}

                <button
                    id="upBtnRole"
                    className="upBtn"
                    type={"button"}
                    onClick={() => moveToTop()}>
                    Back Up
                </button>



            </form>
        </>
    )
}