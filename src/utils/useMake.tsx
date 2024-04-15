import { useState } from "react";
import { useNavigate } from "react-router";
import { BasicRole, BasicStats, Role, Skill } from "../types";
import useDatabase from "./useDatabase";
import useCyberStore from "../useCyberStore";
import useDice from "./useDice";
import toast from "react-hot-toast";

export default function useMake() {

    const navigate = useNavigate();
    const { setBasicInfo, setStatsInfo } = useCyberStore();
    const { roleArr, skillArr } = useDatabase();
    const { dTen } = useDice();

    const [skills, setSkills] = useState<Skill[]>(skillArr);
    const [role, setRole] = useState<Role | undefined>(undefined);
    const [formData, setFormData] = useState<BasicRole>({
        handle: "",
        age: 16,
        skills: [],
        role: "",
        roleSkill: "",
        roleInfo: "",
        filter: ""
    });

    const [assignType, setAssignType] = useState<0 | 1 | 2>(0);
    const [numsRolled, setNumsRolled] = useState<number[]>([]);
    const [numToAssign, setNumToAssign] = useState<number | undefined>(undefined);
    const [statsForm, setStatsForm] = useState({
        body: 0,
        cool: 0,
        emp: 0,
        int: 0,
        luck: 0,
        ref: 0,
        tech: 0,
    });

    { /*SCROLLING*/ }
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

    const scrollToBottom = () => {
        const body = document.body
        const html = document.documentElement;
        const height = Math.max(
            body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight);
        document.body.scrollTop = height;
        document.documentElement.scrollTop = height;
    }

    { /*WHEN SCROLLING PREVENT NUMBER CHANGE*/ }
    const numberInputOnWheelPreventChange = (e: React.WheelEvent<HTMLInputElement>) => {
        e.currentTarget.blur()
        e.stopPropagation()
    }

    { /*CHANGE ROLE*/ }
    const changeRole = (name: string | undefined) => {
        const filterRole = roleArr.filter(e => e.job === name)[0];
        if (filterRole) {
            setRole(filterRole);
            setFormData(prevData => ({
                ...prevData,
                role: filterRole.job,
                roleSkill: filterRole.skill,
                roleInfo: filterRole.description
            }));
        } else if (name === "Create a Role") {
            setRole({
                skill: "",
                job: "Create a Role",
                description: "",
                defSkill: [],
                oridinalOrFortressDescription: ""
            })
            setFormData(prevData => ({
                ...prevData,
                role: "",
                roleSkill: "",
                roleInfo: ""
            }));
        } else {
            setRole(undefined)
            setFormData(prevData => ({
                ...prevData,
                role: "",
                roleSkill: "",
                roleInfo: ""
            }));
        }
    }

    { /*CORE STATS RELATED FUNCTIONS*/ }
    const rollForStats = (num: number) => {
        const rollArr: number[] = [];
        for (let i = 0; i < num; i++) {
            const roll = dTen()[0];
            roll > 2 ? rollArr.push(roll) : i--;
        }
        setNumsRolled(rollArr.sort((a, b) => a - b));
    };

    const sumStats = (info: BasicStats) => {
        return (info.body + info.cool + info.emp + info.int + info.luck + info.ref + info.tech)
    }

    const handleStatsFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setStatsForm(prevData => ({ ...prevData, [name]: value ? Number(value) : 0 }));
    }

    { /*HANDLE, AGE AND ROLE INPUT*/ }
    const handleBasicFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    }

    { /*CHECKBOXES*/ }
    const handleCheckboxChange = (
        { add, content }: { add: boolean, content: string }
    ) => {

        if (add && !formData.skills.includes(content)) {
            const arr = formData.skills;
            arr.push(content);
            setFormData(prevData => ({ ...prevData, skills: arr }));
        }

        else if (!add && formData.skills.includes(content)) {
            const arr = formData.skills.filter(e => e !== content);
            setFormData(prevData => ({ ...prevData, skills: arr }));
        }
    }

    { /*FILTER SKILLS*/ }
    const skillFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const filteredSkills = skillArr.filter(skill => {
            const stringedSkill = `${skill.stat} ${skill.skill} ${skill.description} ${skill.oridinalOrFortressDescription} ${skill.skill.toLowerCase()}`
            if (stringedSkill.includes(value)) { return skill }
        });

        setFormData(prevData => ({ ...prevData, filter: value }));
        if (formData.filter) { setSkills(filteredSkills) }
        else { setSkills(skillArr) }
    }

    {/*SUBMIT*/ }
    const handleBasicSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formData.skills.length === 9) {
            const result = formData;
            delete result.filter;
            setBasicInfo(result);
            navigate("/make/stats");
        } else {
            toast.error(
                `To continue you need to pick 9 skills.
                If you can not find an appropriate skill, you can create or delete them later.`
            )
        }
    }

    const handleStatsSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (sumStats(statsForm) >= 20) {
            setStatsInfo(statsForm);
            navigate("/make/skills");
        } else {
            toast.error(`To continue you need to assign at least 20 stat points.`)
        }
    }

    return {
        statsForm,
        setStatsForm,
        setNumsRolled,
        numsRolled,
        numToAssign,
        setNumToAssign,
        assignType,
        setAssignType,
        role,
        setRole,
        changeRole,
        formData,
        setFormData,
        handleBasicFormChange,
        handleCheckboxChange,
        skills,
        skillFilter,
        scrollFunction,
        scrollToBottom,
        handleBasicSubmit,
        handleStatsSubmit,
        sumStats,
        numberInputOnWheelPreventChange,
        handleStatsFormChange,
        rollForStats
    }
}