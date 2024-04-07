import { Link } from "react-router-dom";
import { useState } from "react";
import useCPStore from "../utils/useCPStore";
import SelectRadio from "../utils/SelectRadio";
import Checkbox from "../utils/CheckBox";
import "./Make.css"

export default function Make() {

    const rolesArr = [{
        skill: "Authority",
        job: "Cop",
        description: "Gives bonus to COOL stat when appropriate. Interogate, arrest, search, confiscate, intimidate (and get away with it). You might still want proper documentation, but you are more able to convince people around you that your actions are backed by higher authority."
    }, {
        skill: "Combat Sense",
        job: "Solo",
        description: "Gives bonus to Awareness and Initiative skills. Danger sense, notice traps, you are a profesional killer, act fast - hit the body-bag last."
    }, {
        skill: "Credibility",
        job: "Medias",
        description: "Gives bonus to EMP stat when approptiate. Convince people into believing you, no matter if you are telling the truth. Higher level might make it easyer to convince more people, experts or authority figures to see the world the way you are presenting it."
    }, {
        skill: "Family",
        job: "Nomad",
        description: "Gives bonus to EMP stat when appropriate. Ask for help from your 'family' and you might get it. It also determines your rank, from a New Face to Leader of the Pack."
    }, {
        skill: "Fandom",
        job: "Rocker",
        description: "Gives bonus to EMP stat when approptiate. Charm, incite, control up to '200 * skill' fans with your performance. They want to change the world? Point the way!"
    }, {
        skill: "Interface",
        job: "Netrunner",
        description: "Can use REF or INT for hacking and can replace Programming with Interface when using it. When connected, rolls have an advantage. Do not use a computer, become a computer with all advantages and disadvantages that brings with it."
    }, {
        skill: "Jury Rig",
        job: "Techie",
        description: "Hot-fix or temporary disable something for '1d6 * skill' turns. When breaking, target must not oppose (be alert) towards your meddling."
    }, {
        skill: "Medical Tech",
        job: "Med Tech",
        description: "Gives bonus to TECH stat when appropriate. Anyone can 'try' to help when bodyparts dislocate, but you have a know-how on how to prevent it ... or make it worse. It is a cyber world and your expertiese is not so much on biology as technology that is interacting with it."
    }, {
        skill: "Resources",
        job: "Corporate",
        description: "Gives bonus to INT when appropriate. Command corporate resources, test how much is corporation willing to risk on your operations. It also determines your rank, from a new Employee to the CEO."
    }, {
        skill: "Streetdeal",
        job: "Fixer",
        description: "Gives bonus to COOL stat when appropriate."
    }];

    const skillArr = [{
        skill: "Grooming",
        stat: "ATTR",
        defJob: [],
        description: "Maximize attractivness and increase your chances to form a bond or strike a deal."
    }, {
        skill: "Fashion",
        stat: "ATTR",
        defJob: [],
        description: "To know what to wear, to know what not to wear and to know how to wear it. You have a taste and you make other people know it. It can help if you also have a decently sized and well stocked wardrobe."
    }, {
        skill: "Endurance",
        stat: "BODY",
        defJob: [],
        description: "Endure pain and hardship with your pure body power over a period of time. Also knowladge on how best to conserve energy, stay awake or resist dehidration."
    }, {
        skill: "Strength",
        stat: "BODY",
        defJob: [],
        description: "Crush, bend, lift, throw, rip and otherwise shape the world with your raw power."
    }, {
        skill: "Swimming",
        stat: "BODY",
        defJob: [],
        description: "Do not drown. Swim. Swim faster, deeper, longer."
    }, {
        skill: "Interrogation",
        stat: "COOL",
        defJob: [],
        description: "When you ask someone question, trick him into telling you what you want to know easy way or hard way. Also useful to figure out if someone is lying to you."
    }, {
        skill: "Intimidation",
        stat: "COOL",
        defJob: [],
        description: "Scare people into doing whatever you demand from them."
    }, {
        skill: "Oratory",
        stat: "COOL",
        defJob: [],
        description: "When you speak to the public or perform a speach, how likely do you touch their hearts and minds. Do they listen to you or do they ignore you, fall asleep or even feel insulted by your lacking words and gestures."
    }, {
        skill: "Resist",
        stat: "EMP",
        defJob: [],
        description: "Resist pain and hardship with your willpower over a period of time. Also knowladge on how best to keep going when your body is starting to fail."
    }, {
        skill: "Street Survival",
        stat: "EMP",
        defJob: [],
        description: "Know where it is safe and which streets are better to avoid, what not to ever ever do, where to get legal and illegal stuff or services and who to call when you need something."
    }, {
        skill: "Social Perception",
        stat: "EMP",
        defJob: [],
        description: "Notice honesty, lie, evasion, mood, opportunity and other social cues."
    }, {
        skill: "Interview",
        stat: "EMP",
        defJob: [],
        description: "When you ask someone question, trick him into telling you what you want to know without alerting them. Also useful to figure out when someone is lying to you."
    }, {
        skill: "Ledership",
        stat: "EMP",
        defJob: [],
        description: "Ability to lead and or command respect from people around you. Incite action, raise spirits or make cooler heads prevail."
    }, {
        skill: "Seduction",
        stat: "EMP",
        defJob: [],
        description: "Form (and maintain) romantic relationship. Be erotic instead of obscene. Know not only how to love, but to make love. Flirt away Romeo!"
    }, {
        skill: "Etiquette",
        stat: "EMP",
        defJob: [],
        description: "When social circumstances expect you to behave certain way, like proper posture, language, gestures or table manners. Know what is expected from you, so even when you choose to go against expectations you might do so with flare expected from someone of your statue instead of simply shaming yourself."
    }, {
        skill: "Persuasion",
        stat: "EMP",
        defJob: [],
        description: "Convince someone into seeing the world the way you want them to see it or to do something they are reluctant about if not openly opposed."
    }, {
        skill: "Perform",
        stat: "EMP",
        defJob: [],
        description: "Your ability to make something ordinary into something memorable or to convince someone to find meaning in your art."
    }, {
        skill: "Acting",
        stat: "EMP",
        defJob: [],
        description: "Move hearts of your audiance or convince them you are someone (or something) else entirely."
    }, {
        skill: "Singing",
        stat: "EMP",
        defJob: [],
        description: "Use your voice to amaze those around you. It also helps to make sure you are not the only one who is enjoying your casual singing. It also helps if you want to be lauder or have a nice casual voice."
    }, {
        skill: "Accounting",
        stat: "INT",
        defJob: [],
        description: ""
    }, {
        skill: "Psychology",
        stat: "INT",
        defJob: [],
        description: ""
    }, {
        skill: "Biology",
        stat: "INT",
        defJob: [],
        description: ""
    }, {
        skill: "Awareness",
        stat: "INT",
        defJob: [],
        description: ""
    }, {
        skill: "Chemistry",
        stat: "INT",
        defJob: [],
        description: ""
    }, {
        skill: "Creativity",
        stat: "INT",
        defJob: [],
        description: ""
    }, {
        skill: "Medicine",
        stat: "INT",
        defJob: [],
        description: ""
    }, {
        skill: "Toxins",
        stat: "INT",
        defJob: [],
        description: ""
    }, {
        skill: "Education",
        stat: "INT",
        defJob: [],
        description: ""
    }, {
        skill: "Topic Expert",
        stat: "INT",
        defJob: [],
        description: ""
    }, {
        skill: "Gamble",
        stat: "LUCK",
        defJob: [],
        description: ""
    }, {
        skill: "Geology",
        stat: "INT",
        defJob: [],
        description: ""
    }, {
        skill: "Evasion",
        stat: "INT",
        defJob: [],
        description: ""
    }, {
        skill: "History",
        stat: "INT",
        defJob: [],
        description: ""
    }, {
        skill: "Language (Type)",
        stat: "INT",
        defJob: [],
        description: ""
    }, {
        skill: "Search Database",
        stat: "INT",
        defJob: [],
        description: ""
    }, {
        skill: "Mathematics",
        stat: "INT",
        defJob: [],
        description: ""
    }, {
        skill: "Physics",
        stat: "INT",
        defJob: [],
        description: ""
    }, {
        skill: "Hacking",
        stat: "INT",
        defJob: [],
        description: ""
    }, {
        skill: "Programming",
        stat: "INT",
        defJob: [],
        description: ""
    }, {
        skill: "Search",
        stat: "INT",
        defJob: [],
        description: ""
    }, {
        skill: "Macro-Economy",
        stat: "INT",
        defJob: [],
        description: ""
    }, {
        skill: "Micro-Economy",
        stat: "INT",
        defJob: [],
        description: ""
    }, {
        skill: "NET Knowledge",
        stat: "INT",
        defJob: [],
        description: ""
    }, {
        skill: "Teaching",
        stat: "INT",
        defJob: [],
        description: ""
    }, {
        skill: "Nature Survival",
        stat: "INT",
        defJob: [],
        description: ""
    }, {
        skill: "Biochemistry",
        stat: "INT",
        defJob: [],
        description: ""
    }, {
        skill: "Archery",
        stat: "REF",
        defJob: [],
        description: ""
    }, {
        skill: "Athletics",
        stat: "REF",
        defJob: [],
        description: ""
    }, {
        skill: "Brawling",
        stat: "REF",
        defJob: [],
        description: ""
    }, {
        skill: "Dance",
        stat: "REF",
        defJob: [],
        description: ""
    }, {
        skill: "Dodge",
        stat: "REF",
        defJob: [],
        description: ""
    }, {
        skill: "Escape",
        stat: "REF",
        defJob: [],
        description: ""
    }, {
        skill: "Driving",
        stat: "REF",
        defJob: [],
        description: ""
    }, {
        skill: "Fencing",
        stat: "REF",
        defJob: [],
        description: ""
    }, {
        skill: "Handgun",
        stat: "REF",
        defJob: [],
        description: ""
    }, {
        skill: "Heavy Weapons",
        stat: "REF",
        defJob: [],
        description: ""
    }, {
        skill: "Martial Art (Type)",
        stat: "REF",
        defJob: [],
        description: ""
    }, {
        skill: "Melee Weapons",
        stat: "REF",
        defJob: [],
        description: ""
    }, {
        skill: "Motorcycle",
        stat: "REF",
        defJob: [],
        description: ""
    }, {
        skill: "Heavy Machinery",
        stat: "REF",
        defJob: [],
        description: ""
    }, {
        skill: "Pilot (Type)",
        stat: "REF",
        defJob: [],
        description: ""
    }, {
        skill: "Rifle",
        stat: "REF",
        defJob: [],
        description: ""
    }, {
        skill: "Stealth",
        stat: "REF",
        defJob: [],
        description: ""
    }, {
        skill: "Submachinegun",
        stat: "REF",
        defJob: [],
        description: ""
    }, {
        skill: "Aero Tech",
        stat: "TECH",
        defJob: [],
        description: ""
    }, {
        skill: "AV Tech",
        stat: "TECH",
        defJob: [],
        description: ""
    }, {
        skill: "Basic Tech",
        stat: "TECH",
        defJob: [],
        description: ""
    }, {
        skill: "Cryotank",
        stat: "TECH",
        defJob: [],
        description: ""
    }, {
        skill: "Cyber Tech",
        stat: "TECH",
        defJob: [],
        description: ""
    }, {
        skill: "Explosives",
        stat: "TECH",
        defJob: [],
        description: ""
    }, {
        skill: "Electronic Tech",
        stat: "TECH",
        defJob: [],
        description: ""
    }, {
        skill: "Nano Tech",
        stat: "TECH",
        defJob: [],
        description: ""
    }, {
        skill: "Disguise",
        stat: "TECH",
        defJob: [],
        description: ""
    }, {
        skill: "Smart Security",
        stat: "TECH",
        defJob: [],
        description: ""
    }, {
        skill: "First Aid",
        stat: "TECH",
        defJob: [],
        description: ""
    }, {
        skill: "Surgery",
        stat: "TECH",
        defJob: [],
        description: ""
    }, {
        skill: "Car Tech",
        stat: "TECH",
        defJob: [],
        description: ""
    }, {
        skill: "Motorcycle Tech",
        stat: "TECH",
        defJob: [],
        description: ""
    }, {
        skill: "Forgery",
        stat: "TECH",
        defJob: [],
        description: ""
    }, {
        skill: "Paint",
        stat: "TECH",
        defJob: [],
        description: ""
    }, {
        skill: "Draw",
        stat: "TECH",
        defJob: [],
        description: ""
    }, {
        skill: "Photography",
        stat: "TECH",
        defJob: [],
        description: ""
    }, {
        skill: "Film",
        stat: "TECH",
        defJob: [],
        description: ""
    }, {
        skill: "Burglary",
        stat: "TECH",
        defJob: [],
        description: ""
    }, {
        skill: "Stealing",
        stat: "TECH",
        defJob: [],
        description: ""
    }, {
        skill: "Instrument (Type)",
        stat: "TECH",
        defJob: [],
        description: ""
    }, {
        skill: "Weaponsmith (Type)",
        stat: "TECH",
        defJob: [],
        description: ""
    }];

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    const { jobSkillsChecked, setJobSkillsChecked } = useCPStore();
    const [selected, setSelected] = useState("");

    return (
        <>
            <nav>
                <Link
                    to="/">
                    <button className="navBtn exitBtn">
                        Return
                    </button>
                </Link>
            </nav>

            <h3>
                Create Character<br />
                (basic)
            </h3>
            <form
                id="form"
                className={"colFlex"}
                onSubmit={(e) => submit(e)}>

                <label className={"formInput colFlex"}>
                    <span className={"formInputTitle"}>
                        Handle (Nickname)
                    </span>
                    <input
                        name="job-input"
                        type={"text"}
                        className={"formInputField "}
                        placeholder={"Example: Silver"}
                        autoComplete={"off"}
                        required>
                    </input>
                </label>

                <label className={"formInput colFlex"}>
                    <span className={"formInputTitle"}>
                        Age
                    </span>
                    <input
                        name="job-input"
                        type={"number"}
                        className={"formInputField "}
                        placeholder={"Min-Max: 16-120"}
                        autoComplete={"off"}
                        min={16}
                        max={120}
                        required>
                    </input>
                </label>

                <label className={"formInput colFlex"}>
                    <span className={"formInputTitle"}>
                        Pick, Edit or Create a Role
                    </span>
                    <SelectRadio
                        describe="Pick a role"
                        selected={selected}
                        setSelected={setSelected}
                        selection={rolesArr.map(role => role.job).concat("Edit / Create")}
                    />
                </label>

                {selected === "Edit / Create" ?
                    <>
                        {skillArr.map(e => {
                            return (<Checkbox
                                checkId={e.skill + "SkillId"}
                                checkClass="jobSkill"
                                afterText={e.skill}
                                preChecked={false}
                                limit={{
                                    current: jobSkillsChecked,
                                    setCurrent: setJobSkillsChecked,
                                    max: 3
                                }}
                                key={e.skill + "SkillKey"} />)
                        })}
                    </> :
                    <></>}

                <div
                    id="formBtnBox"
                    className={"colFlex"}>
                    <div>
                        <button
                            className={"formBtn colFlex"}
                            type={"reset"}
                            onClick={() => setSelected("")}>
                            Reset
                        </button>
                        <button
                            className={"formBtn colFlex"}
                            type={"submit"}>
                            Confirm
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}