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

export { Role, Skill }