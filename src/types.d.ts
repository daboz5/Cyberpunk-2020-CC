type StatFull = "Body Type" | "Coolness" | "Empathy" | "Intelligence" | "Luck" | "Reflexes" | "Technical" | "Technical Ability";
type StatShort = "BODY" | "COOL" | "EMP" | "INT" | "LUCK" | "REF" | "TECH";

type Stat = {
    stat: StatFull,
    short: StatShort,
    description: string,
    oridinalOrFortressDescription: string
}

type Skill = {
    skill: string,
    stat: StatShort,
    description: string,
    oridinalOrFortressDescription: string
}

type Role = {
    skill: string,
    job: string,
    description: string,
    defSkill: string[],
    oridinalOrFortressDescription: string
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

type BasicRole = {
    handle: string,
    age: number,
    skills: string[],
    role: string,
    roleSkill: string,
    roleInfo: string,
    filter?: string
}

export {
    Stat,
    Skill,
    Role,
    BasicRole,
    BasicStats
}