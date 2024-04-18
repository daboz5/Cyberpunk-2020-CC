import useCyberStore from "../useCyberStore"

export default function MakeSkills() {

    const { statsInfo } = useCyberStore();

    const handleSkillsSubmit = () => { }

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
                First, assign 40 career skill-points.<br />
                They are colored <b className="red">red</b>.
            </span>

            <span className={"formInputTitle bigFormTitle"}>
                <b className="red">{statsInfo.int + statsInfo.ref}</b> points left.<br />
            </span>

            <span className={"formInputTitle"}>
                Next, assign {statsInfo.int + statsInfo.ref} skill-points.<br />
                Those are from your <b className="red">INT</b> and <b className="red">REF</b> stats. <br />
                You may assign them anywhere.<br />
            </span>

            <span className={"formInputTitle"}>
                If you can not find a skill you are looking for<br />
                consult your <b className="red">GM</b> and create a new one.
            </span>

        </form>
    </>)
}