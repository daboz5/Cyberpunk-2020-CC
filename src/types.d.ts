type StatFull = "Body Type" | "Coolness" | "Empathy" | "Intelligence" | "Luck" | "Reflexes" | "Technical" | "Technical Ability";
type StatShort = "BODY" | "COOL" | "EMP" | "INT" | "LUCK" | "REF" | "TECH";

type Stat = {
    stat: StatFull,
    short: StatShort,
    description: string,
    oldDescription: string
}

type Skill = {
    skill: string,
    stat: StatShort,
    description: string,
    oldDescription: string
}

type Role = {
    skill: string,
    job: string,
    description: string,
    defSkill: string[],
    oldDescription: string
}

type Ability = {
    ability: string,
    stat: StatShort,
    description: string,
    oldDescription: string
}

type Rule = {
    title: string,
    subtitle: string,
    type: string,
    imgs: string[],
    hashes: string[],
    content: string,
    oldContent: string
}

type StatsForm = {
    body: number | undefined;
    cool: number | undefined;
    emp: number | undefined;
    int: number | undefined;
    luck: number | undefined;
    ref: number | undefined;
    tech: number | undefined;
}

type RoleForm = {
    handle: string,
    age: number,
    skills: string[],
    role: string,
    roleSkill: string,
    roleInfo: string,
    filter?: string
}

type StatsStore = {
    body: number
    cool: number;
    emp: number;
    int: number;
    luck: number;
    ref: number;
    tech: number;
}

export {
    Stat,
    Ability,
    Skill,
    Role,
    Rule,
    StatsForm,
    RoleForm,
    StatsStore
}