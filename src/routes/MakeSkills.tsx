import { useState } from "react";
import useCyberStore from "../useCyberStore"
import useDatabase from "../utils/useDatabase";
import useMake from "../utils/useMake";

export default function MakeSkills() {

    type formSkill = { name: string, lvl: number | undefined }
    type skillFormType = {
        careerSkills: formSkill[],
        pickupSkills: formSkill[]
    }

    const { statsInfo, basicInfo } = useCyberStore();
    const { skillArr } = useDatabase();
    const { numberInputOnWheelPreventChange } = useMake();

    const startPickupPoints = statsInfo.int + statsInfo.ref;
    const startCareerArr = basicInfo.skills.map(
        skill => { return { name: skill, lvl: undefined } }
    ).concat({ name: basicInfo.roleSkill, lvl: undefined });
    const startPickupArr = skillArr.map(
        skill => { return { name: skill.skill, lvl: undefined } }
    );

    const [careerPoints, setCareerPoints] = useState(40);
    const [pickupPoints, setPickupPoints] = useState(startPickupPoints);
    const [skillForm, setSkillForm] = useState<skillFormType>({
        careerSkills: startCareerArr,
        pickupSkills: startPickupArr
    });

    const handleSkillFormChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        type: "career" | "pickup"
    ) => {
        const { name, value } = e.target;
        const numValue = Number(value);
        const careerSkills = skillForm.careerSkills;
        const pickupSkills = skillForm.pickupSkills;
        let sum = 0;

        const calcSkill = (skill: formSkill) => {
            let skillLvl = 0;
            if (skill.name !== name) { skillLvl = skill.lvl ? skill.lvl : 0 }
            else {
                skill.lvl = numValue;
                skillLvl = numValue;
            }
            return sum + skillLvl;
        }

        if (type === "career") {
            careerSkills.forEach(skill => { sum = calcSkill(skill) });
            skillForm.pickupSkills = startPickupArr;
            setCareerPoints(40 - sum);
            setPickupPoints(startPickupPoints);
        }
        else if (type === "pickup") {
            pickupSkills.forEach(skill => { sum = calcSkill(skill) });
            setPickupPoints(startPickupPoints - sum);
        }

        setSkillForm(skillForm);
    };

    const handleSkillsSubmit = () => { };

    const skillEl = (name: string, type: "career" | "pickup") => {
        return (
            <span
                className="flex skillPointsSpan"
                key={name + "Key"}>
                <span className="formInputTitle">
                    <b>{name}</b> :
                </span>
                <input
                    id={name + "SkillId"}
                    name={name}
                    type={"number"}
                    className={"formInputField skillInputField red"}
                    placeholder="0-10"
                    autoComplete={"off"}
                    min={0}
                    max={10}
                    onChange={(e) => handleSkillFormChange(e, type)}
                    onWheel={numberInputOnWheelPreventChange}>
                </input>
            </span>
        )
    }


    return (<>
        {/*FORMA ZA DODELITEV VEŠČIN*/}
        <h3>
            Create Character<br />
            (skills)
        </h3>

        <form
            className="form colFlex"
            onSubmit={handleSkillsSubmit}>

            <span className={"formInputTitle"}>
                First, assign 40 career points.
            </span>

            <span className={"formInputTitle bigFormTitle"}>
                <b className="red">{careerPoints}</b> career points left.<br />
            </span>

            <div
                className="colFlex alignFlex skillPointsBox">
                {skillEl(basicInfo.roleSkill, "career")}
                {skillArr.filter(
                    skill => basicInfo.skills.includes(skill.skill)
                ).map(skill => {
                    return skillEl(skill.skill, "career");
                })}
            </div>

            {careerPoints === 0 &&
                <>
                    <span className={"formInputTitle"}>
                        Next, assign {statsInfo.int + statsInfo.ref} pickup points.<br />
                        You got them from your <b className="red">INT</b> and <b className="red">REF</b> stats. <br />
                        You can not use pickup points on career skills.<br />
                    </span>

                    <span className={"formInputTitle bigFormTitle"}>
                        <b className="red">{pickupPoints}</b> pickup points left.<br />
                    </span>

                    <div
                        className="colFlex alignFlex skillPointsBox">
                        {skillArr.filter(
                            skill => !basicInfo.skills.includes(skill.skill)
                        ).map(skill => {
                            return skillEl(skill.skill, "pickup");
                        })}
                    </div>

                    <span className={"formInputTitle"}>
                        If you can not find a skill you are looking for<br />
                        consult your <b className="red">GM</b> and create a new one.
                    </span>
                </>}

        </form >
    </>)
}