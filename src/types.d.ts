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

type BasicRole = {
    handle: string,
    age: number,
    skills: string[],
    role: string,
    roleSkill: string,
    roleInfo: string,
    filter?: string
}

type BasicStats = {
    body: number;
    cool: number;
    emp: number;
    int: number;
    luck: number;
    ref: number;
    tech: number;
}

export {
    Role,
    Skill,
    BasicRole,
    BasicStats
}