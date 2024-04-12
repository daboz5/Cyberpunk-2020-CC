import { useState } from "react";
import { BasicRole, Role } from "../types";
import useDatabase from "./useDatabase";

export default function useMake() {

    const { roleArr } = useDatabase();

    const [role, setRole] = useState<Role | undefined>(undefined);
    const [formData, setFormData] = useState<BasicRole>({
        handle: "",
        age: "",
        skills: []
    });

    {/*CHANGE ROLE*/ }
    const changeRole = (name: string | undefined) => {
        const filterRole = roleArr.filter(e => e.job === name)[0];
        if (filterRole) {
            setRole(filterRole ? filterRole : undefined);
        } else if (name === "Create a Role") {
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

    {/*HANDLE AND AGE INPUT*/ }
    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    }

    {/*CHECKBOXES*/ }
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

    {/*SCROLL*/ }
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

    {/*SUBMIT*/ }
    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData)
    }

    return {
        role,
        setRole,
        changeRole,
        formData,
        setFormData,
        handleFormChange,
        handleCheckboxChange,
        scrollFunction,
        handleSubmit,
    }
}