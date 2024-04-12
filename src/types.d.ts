type Role = {
    skill: string,
    job: string,
    description: string,
    defSkill: string[],
    oridinalOrFortressDescription: string
}

type Skill = {
    skill: string,
    stat: "BODY" | "COOL" | "EMP" | "INT" | "REF" | "TECH" | "LUCK",
    description: string,
    oridinalOrFortressDescription: string
}

interface BasicRole {
    handle: string,
    age: string,
    skills: string[],
    role: string,
    roleSkill: string,
    roleInfo: string,
    filter: string
}

export { Role, Skill, BasicRole }