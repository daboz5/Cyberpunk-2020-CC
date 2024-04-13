import { useState } from "react";
import { useNavigate } from "react-router";
import { BasicRole, Role, Skill } from "../types";
import toast from "react-hot-toast";
import useDatabase from "./useDatabase";
import useCyberStore from "../useCyberStore";

export default function useMake() {

    const navigate = useNavigate();
    const { setBasicInfo } = useCyberStore();
    const { roleArr, skillArr } = useDatabase();

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


    { /*SCROLL*/ }
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

    { /*HANDLE, AGE AND ROLE INPUT*/ }
    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
            const stringedSkill = `${skill.stat} ${skill.skill} ${skill.description} ${skill.oridinalOrFortressDescription}`
            if (stringedSkill.includes(value)) { return skill }
        });

        setFormData(prevData => ({ ...prevData, filter: value }));
        if (formData.filter) { setSkills(filteredSkills) }
        else { setSkills(skillArr) }
    }

    {/*SUBMIT*/ }
    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
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

    return {
        role,
        setRole,
        changeRole,
        formData,
        setFormData,
        handleFormChange,
        handleCheckboxChange,
        skills,
        skillFilter,
        scrollFunction,
        scrollToBottom,
        handleSubmit,
    }
}