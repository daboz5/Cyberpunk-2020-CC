import { Role, Skill } from "../types";

export default function useDatabase() {

    const roleArr: Role[] = [{
        job: "Cop",
        skill: "Authority",
        defSkill: ["Athletics", "Awareness", "Brawling", "Education", "Handguns", "Interrogation", "Melee Weapons", "Social Awareness", "Street Survival"],
        description: "Gives bonus to COOL stat when appropriate. Interogate, arrest, search, confiscate, intimidate (and get away with it). You might still want proper documentation, but you are more able to convince people around you that your actions are backed by higher authority.",
        oridinalOrFortressDescription: "This special ability is added to Interrogate and Intimidate. You uphold the law, you have the authority to arrest lawbreakers, question anything you find suspicious, and use force to protect yourself and others.",
    }, {
        job: "Corporate",
        skill: "Resources",
        defSkill: ["Awareness", "Education", "Etiquette", "Grooming", "Persuasion", "Search Database", "Social Awareness", "Stock Market", "Style"],
        description: "Gives bonus to INT when appropriate. Command corporate resources, test how much is corporation willing to risk on your operations. It also determines your rank, from a new Employee to the CEO.",
        oridinalOrFortressDescription: "This Special Ability adds to Networking and Business Sense. You are a company man, you are an expert at promoting and utilizing the resources your employer or business allows you. You are the Power Broker, the CEO, the VIP.",
    }, {
        job: "Fixer",
        skill: "Streetdeal",
        defSkill: ["Awareness", "Brawling", "Burglary", "Forgery", "Handguns", "Intimidation", "Melee Weapons", "Persuasion", "Stealing"],
        description: "Gives bonus to COOL stat when appropriate.",
        oridinalOrFortressDescription: "This Special Ability adds to both Streetwise and Persuasion/Fast Talk. You can get what people need, and you can get rid of it when they don't want it anymore. You are the go to guy, some do it legally, some don't, but regardless if someone wants something hard to find, they go to a Fixer to get it.",
    }, {
        job: "Med Tech",
        skill: "Medical Tech",
        defSkill: ["Awareness", "Cryotank", "Education", "First Aid", "Medicine", "Repairman", "Search Database", "Social Awareness", "Zoology"],
        description: "Gives bonus to TECH stat when appropriate. Anyone can 'try' to help when bodyparts dislocate, but you have a know-how on how to prevent it ... or make it worse. It is a cyber world and your expertiese is not so much on biology as technology that is interacting with it.",
        oridinalOrFortressDescription: "This special ability is added to First Aid and one other chosen Med Skill. You have devoted your life to healing others; the secrets of flesh and blood are open to you.",
    }, {
        job: "Medias",
        skill: "Credibility",
        defSkill: ["Awareness", "Creativity", "Education", "Etiquette", "Film", "Interview", "Persuasion", "Social Awareness", "Street Survival"],
        description: "Gives bonus to EMP stat when approptiate. Convince people into believing you, no matter if you are telling the truth. Higher level might make it easyer to convince more people, experts or authority figures to see the world the way you are presenting it.",
        oridinalOrFortressDescription: "This special ability is representative of your credentials and reputation for honesty and integrity. It is added to the Medias Interview, and Composition. However, it is a tenuous skill that must be maintained through honesty and non-bias. For every serious case of bias, dishonesty, or false presentation of facts you committed made public, your Credibility will drop by a point of Skill. However, with individuals who hold the same political or social bias, your credibility will retain its full value. You find the facts and report them; your audience knows and respects you for your ability to tell them what is going on in the community and the world.",
    }, {
        job: "Netrunner",
        skill: "Interface",
        defSkill: ["Awareness", "Cyber Tech", "Education", "Electronic Tech", "Hacking", "NET Knowledge", "Programming", "Repairman", "Search Database"],
        description: "Can use REF or INT for hacking and can replace Programming with Interface when using it. When connected, rolls have an advantage. Do not use a computer, become a computer with all advantages and disadvantages that brings with it.",
        oridinalOrFortressDescription: "Netrunners may add this to their Programming, and System Knowledge, as they pertain to computers and communications. You have mastered computers and communications, you use them to infiltrate secure information, take over other machines, and cruise the hidden alleys and portals of the vast information highway.",
    }, {
        job: "Nomad",
        skill: "Family",
        defSkill: ["Athletics", "Awareness", "Brawling", "Driving", "Endurance", "Melee Weapons", "Nature Survival", "Repairman", "Rifles"],
        description: "Gives bonus to EMP stat when appropriate. Ask for help from your 'family' and you might get it. It also determines your rank, from a New Face to Leader of the Pack.",
        oridinalOrFortressDescription: "The Family special ability is added to your Networking and Survival. You are a member of an extended family, always on the move. You are one of your people, you live and die for them, and they for you. They are your strength and your weakness; the family and its needs always come first.",
    }, {
        job: "Rocker",
        skill: "Fandom",
        defSkill: ["Awareness", "Brawling", "Creativity", "Instrument (Type)", "Perform", "Persuasion", "Seduction", "Street Survival", "Style"],
        description: "Gives bonus to EMP stat when approptiate. Charm, incite, control up to '200 * skill' fans with your performance. They want to change the world? Point the way!",
        oridinalOrFortressDescription: "This special ability is added to Oratory and Leadership. However this skill, similar to a Medias Credibility, is tenuous and if the rocker is perceived as betraying his own words or following a different agenda, his special ability will drop accordingly as he loses influence. You are a leader of the people. They listen to you and follow your leadership. You hold sway the hearts and minds of your followers, and attempt to convert those to your way of thinking everywhere you go. You hold influence, and you know how to use it.",
    }, {
        job: "Solo",
        skill: "Combat Sense",
        defSkill: ["Athletics", "Awareness", "Handguns", "Martial Arts (Type)", "Melee Weapons", "Rifles", "Stealth", "Submachineguns", "Weaponsmith (Type)"],
        description: "Gives bonus to Awareness and Initiative skills. Danger sense, notice traps, you are a profesional killer, act fast - hit the body-bag last.",
        oridinalOrFortressDescription: "Adds to both Awareness and Initiative. This is the basic combat dedicated career; you make your living being the toughest, baddest guy around.",
    }, {
        job: "Techie",
        skill: "Jury Rig",
        defSkill: ["Awareness", "Cyber Tech", "Education", "Electronic Tech", "Repairman", "Smart Security", "Teaching"],
        description: "Hot-fix or temporary disable something for '1d6 * skill' turns. When breaking, target must not oppose (be alert) towards your meddling.",
        oridinalOrFortressDescription: "This special ability is added to your Jury Rig skill and one single Tech skill of your choice. Brilliant with all things mechanical in nature, you are more than a handyman, you are what keeps the gear functioning as well as building and creating the equipment necessary for any situation.",
    }];

    const skillArr: Skill[] = [{
        skill: "Accounting",
        stat: "INT",
        description: "Know tax law, keep business books organized, wield modern accounting software or play tricks with numbers and get away with it.",
        oridinalOrFortressDescription: "The ability to balance books (or create false books), juggle numbers, create budgets and handle day to day business operations.",
    }, {
        skill: "Acting",
        stat: "EMP",
        description: "Move hearts of your audiance or convince them you are someone (or something) else entirely.",
        oridinalOrFortressDescription: "The skill of trained acting, singing, etc. A trained performer of +4 or greater can successfully perform on stage for payment at small theaters or bit parts in film or television. Performers of +6 or greater will be considered to be of professional caliber, and may have lucrative contacts and fans. Performers of +9 or greater are of 'star': caliber, have a large number of fans, and may be recognized on the street.",
    }, {
        skill: "Animal Handling",
        stat: "EMP",
        description: "Prevent animals in your care from dying due to neglect or improper treatment, form bond, train them and have a general understanding of them.",
        oridinalOrFortressDescription: "The ability to care for, train, and control animals. Includes knowing what food they eat, their space requirements",
    }, {
        skill: "Artificial Inteligence",
        stat: "INT",
        description: "Maybe you just want something that will replace most boring or creative parts of your life or maybe you want something more, someone that will actually listen to you, a friend. Whatever it is, you know how to program and train the data untill something else emerges, something that can help or maybe even something that can refuse.",
        oridinalOrFortressDescription: "N/A",
    }, {
        skill: "Archery",
        stat: "REF",
        description: "Your knowladge and experiences on using weapons that are using arrows or bolts (like bow or crossbow).",
        oridinalOrFortressDescription: "The skill required to use bows, crossbows and other arrow-based ranged weapons. See Handgun for details.",
    }, {
        skill: "Architecht",
        stat: "INT",
        description: "Anyone can set up a box on the street, but for something more he might want to (or has to) hire an architech to make sure his brand new home is structuraly stable, includes toilet and maybe even looks nice. With some skill you would know do design your own coffin, but with enough time you might be the one who gets to design next floating palace. Or maybe you just want to design gardens? Public infrastructure? Something needs to be build and needs you. It can be also used to guess or get building plans of existing structures.",
        oridinalOrFortressDescription: "(Look Expert)",
    }, {
        skill: "Athletics",
        stat: "REF",
        description: "Run, jump, squeeze and otherwise show elasticity, responsivness and overall mastery over your body. If REF is your raw talent, you made effort to perfect it.",
        oridinalOrFortressDescription: "This skill is required for accurate throwing, climbing, and balancing. It combines the basic elements of any high school level sports program. At +3 and above, you are the equivalent of a real high school 'jock'. At +5 and above, you can perform in college level competitions. At +8 and above, you are of Olympic or Professional caliber. Every point of Athletics will also modify: a characters: Run, Leap, and Climb distances by 5% a round.",
    }, {
        skill: "Awareness",
        stat: "INT",
        description: "Be aware of your surrounging. Notice traps, ambushes, fake smile ... or find an excelent sniping spot, or if your favourite store has a sale, who knows ... you, you spoted it first!",
        oridinalOrFortressDescription: "This is equivalent of a 'trained observer' skill, allowing characters to notice or be aware of clues, shadows and other events. With an Awareness of +2 you will usually spot small pieces of paper with noted on them, doors left ajar , and obvious expressions of lying or dislike. An Awareness of +5 or better allows you to spot fairly well hidden clues, and fairly sophisticated attempts to 'shadow' you. With an Awareness of +8 or greater, you routinely perform the sorts of deductive reasoning seen in the average TV cop show ('The murder was left handed because this knife has a specialized handle'). Sherlock Holmes has a +10 Awareness. Players without skill may only use their Intelligence Stat. Players of any Role should get a bonus if the Awareness task directly relates to their Special Ability; if a Medtech gets a fairly good Awareness roll, they may not realize they are walking into an ambush, but they will notice that the 'Judas' is sweating profusely.",
    }, {
        skill: "Biochemistry",
        stat: "INT",
        description: "Knowledge on how organisms react to specific substances, but also how to extract, study and adapt genetic code. In the age where genetic tampering is normal while clones and lab-grown organs are a yesterday news it can be helpful to know how to play a god ... with a right equipement of course. If you feel lucky ... why not study on yourself? Yes, you could die, get terminal cancer or just become horrificly transfigured, but you might also shine in the dark!",
        oridinalOrFortressDescription: "(Look Expert)",
    }, {
        skill: "Biology",
        stat: "INT",
        description: "Every living being works like a machine, beyond understanding complicated, messy macnine. Know what can be expected from living organisms or how to infuence them by undestanding what makes them tick. Also helpful in identifying types of organisms.",
        oridinalOrFortressDescription: "(Look Expert)",
    }, {
        skill: "Botany",
        stat: "INT",
        description: "You are an expert when it comes to recognize plants and fungi, where to get them, how to care for them, trivia about them and how to use them.",
        oridinalOrFortressDescription: "(Look Expert)",
    }, {
        skill: "Brawling",
        stat: "REF",
        description: "Brawling is not an martial art you learned from your betters, but instead a skill that you got fighting on the strees or debating your next or last fighting experience. It is a bit chaotic, but as long as it get's the job done, you won't complain.",
        oridinalOrFortressDescription: "Brawling is the skill of fighting man to man with fist, feet and other parts of the body, it also covers Melee which is the ability to use knives, axes, clubs and other hand to hand weapons in combat. Brawling is not a trained skill - it is the basic skill of defending oneself. Unlike Martial Arts, there are no specialized attacks and no damage bonus per level. It does allow for all the same maneuvers as a Martial art, but provides no bonus to any of them. If the character has the Savage Role, he may add +1 per level of Rampage to Brawl/Melee damage.",
    }, {
        skill: "Burglary",
        stat: "TECH",
        description: "Know how to get where you are not supposed to be, maybe somewhere behind a simple lock, inside of a safe or in your house when you forget your keys. This skill does not cover smart security, but it does cover general knowledge of smart and not so smart security sistems, like how would you expect guards to behave or where valuables would be likely stored with given security measures.",
        oridinalOrFortressDescription: "The skill required to pick locks and break into sealed containers and rooms. At +3, you can jimmy most simple locks. At +6 you can crack most safes. At +9 or better, you have a rep as master crackman, and are known to all the major players in the Cyberpunk world.",
    }, {
        skill: "Car Tech",
        stat: "TECH",
        description: "Know how and experiences with maintaining, fixing, designing or building car-like motor vehicles, like cars, busses and trucks.",
        oridinalOrFortressDescription: "(Look any Tech)",
    }, {
        skill: "Chemistry",
        stat: "INT",
        description: "World is made out of stuff and you know how it all fits together. Or at least in some textbook cases you do. Know simple materials and how they are expected to react to each other.",
        oridinalOrFortressDescription: "The required skill for mixing chemicals various compounds. A level +2 Chemistry is equal to high school chemistry. A level +4 is equal to a trained pharmacist or college level chemist. A +8 is a trained laboratory chemist. This also covers Alchemy.",
    }, {
        skill: "Cooking",
        stat: "INT",
        description: "Know ingredients, know recepees, know kitchen tools then experiment until you don't get it right and then experiment some more. Great way to make your food more tasty, impress guests or at least not kill yourself or burn your appartment while trying to do it.",
        oridinalOrFortressDescription: "The ability to prepare food.",
    }, {
        skill: "Cosmetic Surgery",
        stat: "TECH",
        description: "In this day and age, being different is normal and you know exactly how to shape someone in any bizzare fantasy they desire or how to at least make them look like someone else so they can better evade whoever is looking for them. You might need a proper equipement, but as long as you don't kill or disfigure too many of your costumers, it will probably pay for itself.",
        oridinalOrFortressDescription: "N/A",
    }, {
        skill: "Creativity",
        stat: "INT",
        description: "Write songs, articles, novels based on your experience and understanding of what you are trying to do. Some people need inspiration ... it helps, but you are able to make something works simply by knowing what worked in the past. This is why 'art schools' have 'school' part in them.",
        oridinalOrFortressDescription: "The required skill for writing songs, articles, or stories. A Composition Skill of +4 or greater gives your character the ability to produce salable work. A Skill of +8 or more produce work of such a high caliber that the creator may have a strong literary following and not a little critical acclaim.",
    }, {
        skill: "Cryotank",
        stat: "TECH",
        description: "Know how and experiences with maintaining, fixing, designing or building a cryotank, but also using it.",
        oridinalOrFortressDescription: "The required skill for operating, repairing and maintaining life suspension and body chilling devices. A minimum skill of +4 is required to chill down a healthy person. A minimum skill of +6 for chilling a wounded person.",
    }, {
        skill: "Cyber Tech",
        stat: "TECH",
        description: "Know how and experiences with maintaining, fixing, designing or building a cybernetic body part.",
        oridinalOrFortressDescription: "The required skill for repairing and maintaining cyberware. At level +2, you can keep your cyberware turned up and replace its power batteries. At level +6, you can strip down most cyberware and even make simple modifications. At level +8, you can design your own cyberware to order. This skill also covers Robotics.",
    }, {
        skill: "Dance",
        stat: "REF",
        description: "How well you can dance and how many dances do you know as well as experience and techniques required to turn your body movement into an artform.",
        oridinalOrFortressDescription: "The specific skill needed to become a professional dancer. A trained dancer +4 or greater can successfully dance for payment in small clubs or dance troupes. Dancers +6 or greater will be considered to professional caliber, and regularly give performances and have fans. Dancers +9 or greater are of 'star' caliber, have a large number of fans, and may be recognized on the street.",
    }, {
        skill: "Disguise",
        stat: "TECH",
        description: "Use the most modern tech and some makeup to disguise yourself. Might work best with Actor and Wardrobe skills, but at some point it helps if even you would mistake yourself someone else when observing your creation in the mirror. It can also include smell and other body signals, not just how you look.",
        oridinalOrFortressDescription: "The skill of disguising yourself to resemble someone else, whether real or fictitious.",
    }, {
        skill: "Dodge",
        stat: "REF",
        description: "As long as you are aware you are being attacked by whatever is targeting you and that something is not moving with a light speed (maybe laser does, but the hand moving the laser around doesn't), you may try and dodge out of the way. It is great for limiting or preventing the damage, not so much in stopping it. It is both your ability to move your body and predict the trajectory of an attack towards it.",
        oridinalOrFortressDescription: "This skill is required to dodge attacks and escape grapples and holds. If an attack is made without your knowledge, you may not apply this skill to your Defense roll.",
    }, {
        skill: "Driving",
        stat: "REF",
        description: "Drive a car or something else that has a basic car design, like a truck, a bus or a tractor. It helps both in getting the most out of the vehicle, driving it safely or driving it comfortably. It also helps with traffic knowledge, like how to navigate roads or where (not) to try to park.",
        oridinalOrFortressDescription: "This skill allows you to pilot all ground vehicles like cars, trucks, and hovercraft. This skill is not usable for piloting aircraft. A skill +3 is equal to that of a very good non-professional driver. A skill of +6 allows you to drive with the skill of a moderately skilled race driver. A driver with skill of +8 or greater will be nationally ship races, and possibly have access to the most advanced ground vehicles available (as long as he make an endorsement)."
    }, {
        skill: "Ecology",
        stat: "INT",
        description: "Know how living organisms manage to live together in spite of perpetual chaos ... or don't, world of Cyberpunk is dying, so maybe you are an expert on what exactly is going wrong.",
        oridinalOrFortressDescription: "(Look Expert)",
    }, {
        skill: "Education",
        stat: "INT",
        description: "Were you self-tought, mentored or finished an elite school? Not only do you have a degree to present, you also picked a lot of general trivia along the way and you are not affraid to share it ... most of the time.",
        oridinalOrFortressDescription: "This skill is the equivalent of a basic school education, allowing you to know how to read, write, use basic math, and know enough history to get by. In effect, it is a 'lore' or trivia skill. A skill of +1 is a basic grade school education. A skill of +2 is equal to a high school equivalency. A Knowledge Skill of +3 is equal to a college education, +4 or higher is equal to a Masters or Doctorate. At +7, you are an extremely well educated person, and are asked to play Trivial Pursuit a lot. At +9 and above, you are one of those people who know a lot about everything (hopefully with the good sense to keep his mouth shut).",
    }, {
        skill: "Electronic Tech",
        stat: "TECH",
        description: "Know how and experiences with maintaining, fixing, designing or building a simple electronic systems, like computers, smartphone, cameras, lights etc.",
        oridinalOrFortressDescription: "The required skill for maintaining, repairing and modifying electronic instruments such as computers, personal electronics hardware, electronic security systems, cameras and monitors.",
    }, {
        skill: "Endurance",
        stat: "BODY",
        description: "Endure pain and hardship with your pure body power over a period of time. Also knowladge on how best to conserve energy, stay awake or resist dehidration.",
        oridinalOrFortressDescription: "This is the ability to withstand pain or hardship, particularly over long periods of time, by knowing the best ways to conserve strength and energy. Endurance Skill checks would be made whenever a character must continue to be active a long period without food, sleep or water. This skill also determines how long a character can hold his breath. At +2 a character can hold his breath for an addition minute, at + 5 it increases to 2 minutes, +8 three minutes, and +10 4 minutes. These extra minutes are added to the “no activity” category of breathing based on body types, and will suffer the same of greater air consumption penalties during activity.",
    }, {
        skill: "Escape",
        stat: "REF",
        description: "If you are grappled or hold, you might want to escape out of your predicament. Have a general idea on how to do it as well as flexible, strong body as well as from time to time a will to suffer in order to get out of whatever is holding you. It can also be used as a way to try to escape from tight, locked or otherwise restricting spaces.",
        oridinalOrFortressDescription: "This skill allows you to pilot all ground vehicles like cars, trucks, and hovercraft. This skill is not usable for piloting aircraft. A skill +3 is equal to that of a very good non-professional driver. A skill of +6 allows you to drive with the skill of a moderately skilled race driver. A driver with skill of +8 or greater will be nationally ship races, and possibly have access to the most advanced ground vehicles available (as long as he make an endorsement)."
    }, {
        skill: "Etiquette",
        stat: "EMP",
        description: "When social circumstances expect you to behave certain way, like proper posture, language, gestures or table manners. Know what is expected from you, so even when you choose to go against expectations you might do so with flare expected from someone of your statue instead of simply shaming yourself.",
        oridinalOrFortressDescription: "The ability to deal with social situations, like knowing the right fork to use or when not to tell the joke about farmer's daughter and the traveling salesman. A Social skill of +2 or better will allow you to get by at any fine restaurant or social function. At +5, you can lunch with the President with aplomb. No social situation will faze you , no matter what. At +8 or above, you can lecture Emily Post on what's proper.",
    }, {
        skill: "Evasion",
        stat: "INT",
        description: "Hide from those searching for you, cover your tracks, have a knowladge on how people are usually tracked by different parties.",
        oridinalOrFortressDescription: "The skill of hiding in shadows, moving silently, evading guards, etc. A Stealth Skill of +1 is about the level of a very sneaky 10 year old stealing cookies. At +3, you are able to get past most guards, or your parents if you've been grounded. At +6, you are good enough to slip smoothly from shadow and not make any noise. At +8, you are the equal of most Ninja warriors. At +10, you move as silently as a shadow, making the Ninja sound like elephants.",
    }, {
        skill: "Expert (Type)",
        stat: "INT",
        description: "Pick a topic, any topic that is not too general and is based on your knowladge of the field. You are an expert in it.",
        oridinalOrFortressDescription: "You may use this skill to be an expert on one specific subject, such as rare postage stamps, obscure weapon, a foreign language, etc. At +3, you are the local expert. At +6, you know enough to publish a few books on the subject. At +8 or better, your books are recognized as major texts on the subject, and you could do the talk-show circuit if you wanted to. Additionally, any character may treat any of their regular skills as an expert skill at half level for the purposes of identifying the make and model, general knowledge, country of origin, etc., by replacing the normal stat associated with the skill for their INT stat.",
    }, {
        skill: "Explosives",
        stat: "TECH",
        description: "Knowladge on how to make explosive and how to safely (or not) use them as well as general knowledge on where to get required materials for them. You can include timers, sensors and otherwise prime them, just know that there are jobs with better limb security.",
        oridinalOrFortressDescription: "This skill allows the character to be knowledgeable in the use of explosives, as well as knowing the best explosives to use for which jobs, how to set times and detonators, and how much explosives to use to accomplish a desired result.",
    }, {
        skill: "Film",
        stat: "TECH",
        description: "The world moves and you intend to capture its motion. At first know your equipement, then know what can you do with it, capture or adapt world around you, then edit it. Also great for gathering evidence, report on something or to make a funny video. It is your camera and silly cats are still a thing.",
        oridinalOrFortressDescription: "The skill of producing professional caliber photographs or video. A skill of +2 allows you to make decent home movies. A Skill +4 or better creates work capable of winning amateur contests. A Skill of +6 or better will produce work of the level of the average magazine cover or rock video. A photographer or cinematographer with a Skill of +8 is known and probably famous.",
    }, {
        skill: "First Aid",
        stat: "TECH",
        description: "Know how to calm and stabilize patients or at least how to make them die later. It also helps with determening what seems to be wrong as long as it is nothing too advanced or proper first-aid equipement is present.",
        oridinalOrFortressDescription: "This skill allows the user to bind wounds, stop bleeding, and revive a stunned patient. (See Trauma Team for details).",
    }, {
        skill: "Fixed Wing Tech",
        stat: "TECH",
        description: "Know how and experiences with maintaining, fixing, designing or building fixed wing aircraft, like gliders, airplanes and jets.",
        oridinalOrFortressDescription: "The required skill for repairing fixed wing aircraft, including Ospreys, jets, and light aircraft. With a Skill of +3, you can perform most routine maintenance tasks. With a Skill of +6, you can do engine tear downs and major structural repairs. With a Skill +9 or better you are capable of designing and building your own aircraft.",
    }, {
        skill: "Forgery",
        stat: "TECH",
        description: "How to create fake documents, photos, movies etc. or how to recognize them, maybe with the help of tools that analize them.",
        oridinalOrFortressDescription: "The skill of copying and creating false documents and identifications. This skill Forgery also be applied to the detection of same; if you can fake it, you can usually tell a fake as well.",
    }, {
        skill: "Gamble",
        stat: "LUCK",
        description: "How lucky are you feeling can be influenced by how to manipulate the outcome of the odds. Evaluate your odds or shift them in your favour or if things look bad, pull out before it is too late to do anything about it. And smile. Never forget to smile.",
        oridinalOrFortressDescription: "The skill on knowing how to make bets, figure odds, and play games of chance successfully. As any professional gambler knows, this is not a luck skill. At +2, you are the local card shark at the Saturday night poker game. At +6, you can make a living at the tables in Vegas or Monte Carlo. At +9 or better, you take on James Bond at roulette and stand a good chance of breaking the bank.",
    }, {
        skill: "Geology",
        stat: "INT",
        description: "Knowladge of geolodical structures, procesess, both local and global. Gives better knowladge where you are, how location was created and what can be expected to find under such circumstances, like what is standard temperature, wind and rainfall of your season.",
        oridinalOrFortressDescription: "(Look Expert)",
    }, {
        skill: "Grooming",
        stat: "COOL",
        description: "Maximize attractivness and increase your chances to form a bond or strike a deal.",
        oridinalOrFortressDescription: "This is the skill of knowing proper grooming, hair styling, etc., to maximize your physical attractiveness. Use of this skill allows players to increase their Attractiveness, and thus their chances of successful Relationships or Persuasion. A basically good-looking person would be at +2. A fashion model might have a Personal Grooming of +5 or +6. At +8 or better, you could be major fashion model, film star, or trendsetter. You are always 'together'. And know it.",
    }, {
        skill: "Hacking",
        stat: "INT",
        description: "Knowladge of tools, best practices and systems and how to use them. And also how to abuse them. While most hackers are perfectly legal or at least employed by legal employers, you might want to use all that knowledge to invade or crash networks and databases or track those that are invading and crushing networks and databases.",
        oridinalOrFortressDescription: "(Look Expert)",
    }, {
        skill: "Handguns",
        stat: "REF",
        description: "How well do you target with a handgun as well as general knowledge on how to use and maintain it.",
        oridinalOrFortressDescription: "You must have this skill to effectively use handguns of any type, including cyberware types. At +2, you can use a handgun on a target range, through combat will still rattle you. At +5, you are as skilled as most military officers of fancy shooting you see on TV, and have begun to get a reputation of being 'good with gun'. A +8, you are a recognized gunslinger with a 'rep'. The very sound of your name makes some people back down in fear. At +10, you are a legendary gunslinger, feared by all except the stupid young punks who keep trying to 'take' you in innumerable gunfight challenges.",
    }, {
        skill: "Heavy Machinery",
        stat: "REF",
        description: "Drive or operate tanks, very big land vehicle and heavy construction or storage equipement.",
        oridinalOrFortressDescription: "The required skill to operate tractors, treaded vehicles, extremely large trucks and construction equipment.",
    }, {
        skill: "Heavy Weapons",
        stat: "REF",
        description: "How well do you wield heavy weapons such as granade launchers, autocannons, mortars, heavy machine guns, missiles, rocket launchers, light artilery etc. as well as general knowledge on how to use and maintain those systems.",
        oridinalOrFortressDescription: "The required skill for using grenade launchers, autocannon, mortars, heavy machine guns, missiles and rocket launchers. A level +5 skill would be equivalent to a general military 'Heavy Weapons' training course, giving the user the ability to use any or all of these weapon types.",
    }, {
        skill: "History",
        stat: "INT",
        description: "Know what humans and societies of the past were doing or what happened to them. Technically history starts with written language and what recors were left behind, but it often instead covers any human artefact of the past. You may choose a time peoriod or a society and have a deeper underderstanding on that particular historic topic.",
        oridinalOrFortressDescription: "(Look Expert)",
    }, {
        skill: "Initiative",
        stat: "REF",
        description: "Take initiative and act first. That can be especially useful in combat as higher initiative gives you more options and might help you to prevent enemies to kill you before you kill them.",
        oridinalOrFortressDescription: "This skill determines how quickly you react to your environment and situations. It also determines how many actions you may perform in a combat round. (See Multiple Actions in Combat Rules)",
    }, {
        skill: "Instrument (Type)",
        stat: "TECH",
        description: "Pick an instrument and develop your skill and knowledge of playing it, but also on how to maintain it.",
        oridinalOrFortressDescription: "The skill of knowing how to play a musical instrument. You must take this skill separately for each type of instrument played. A skill of +4 or higher will qualify your character to play professional 'gigs'. A Skill of +8 and above will gain some professional acclaim, possibly with recording contracts and command performances. At +10, you are widely acclaimed, have lots of Grammy’s, and regularly jam with the very best.",
    }, {
        skill: "Interrogation",
        stat: "COOL",
        description: "When you ask someone question, trick him into telling you what you want to know easy way or hard way. Also useful to figure out if someone is lying to you.",
        oridinalOrFortressDescription: "The skill of drawing information from subject and forcing his secrets into open An Interrogation of +2 or better will allow to infallible find out if your boyfriend is lying to you. A +5, you are professional level interrogator - equivalent to skilled detective grilling a suspect. Mike Wallace 60 Minutes has an Interrogation +9, allowing him to make even most powerful people squirm.",
    }, {
        skill: "Interview",
        stat: "EMP",
        description: "When you ask someone question, trick him into telling you what you want to know without alerting them. Also useful to figure out when someone is lying to you.",
        oridinalOrFortressDescription: "The skill of eliciting interesting anecdotes from interview subject. This information will be of a more non-specific and personal nature rather than specific knowledge (distinguishing this skill from the skill Interrogation, where the user is trying to extract exact information. (Example: Barbara Walters interviews, Mike Wallace interrogates). At +3 or better, the subject will usually tell you only information relating to what he/she is well known for. At +6 or better, the subject will tell you anecdotes about the past, pontificate about favorite interests and philosophies, etc. At +9 or better, he/she tells you everything - including personal information about their illegitimate son, the time they stole a cookie at age +4, and the fact that no one ever loved them.",
    }, {
        skill: "Intimidation",
        stat: "COOL",
        description: "Scare people into doing whatever you demand from them.",
        oridinalOrFortressDescription: "The skill of getting people to do what you want by forcing personality or physical coercion. At +3, you can frighten almost any typical citizen, politician or low-level thug. At +6, you can intimidate Sylvester Stallone or any moderate 'tough guy'. At +9, you could intimidate Arnold Schwarzenegger. Every point of a characters ATTR below 5 on gives a +1 to Intimidation.",
    }, {
        skill: "Language (Type)",
        stat: "INT",
        description: "There are many languages, both those that are still in use as well as those that are not. You can choose any language, even those that are created for blind or deaf (read lips if person still has lips) people. At 8 points you speak and/or read like a native.",
        oridinalOrFortressDescription: "The knowledge of foreign tongue. At +2, you can 'get by' with speaking the language. At +3, you can actually read a written from of it. At +6 and above, you are fairly fluent, although no naive will be fooled by your ability. At +8 and above, you speak and read language like a native. Each language known requires a separate Know Language Skill (see list of languages), however, one may use the knowledge of a particular Language with up to half (round down) proficiency with any language in the same linguistic family (example: knowing Cantonese at +4 will give you the ability to understand and speak Mandarin at +2). Basic language has no alphabet, and is usually is only able to express simple ideas in grunts and gestures. Primitive language is not written, but can be advanced and able to express complicated ideas and thought.",
    }, {
        skill: "Ledership",
        stat: "EMP",
        description: "Ability to lead and or command respect from people around you. Incite action, raise spirits or make cooler heads prevail.",
        oridinalOrFortressDescription: "The skill of leading and convincing people to follow you. A leader with a skill +2 can manage a small office successfully and be respected for it. A leader with skill +4 or better can lead a small band of troops into battle and not get backshot. A leader with a skill of +7 or better can lead the entire Gamelon Empire into battle and look good doing it.",
    }, {
        skill: "Macro-Economy",
        stat: "INT",
        description: "Knowladge of general economic forces, trends and events. Understand what is going on and what to expect from known data, like is economy healthy, how to fix it and what are signs or a recovery or how to recognise what is destroying it. It also helps to know what economic events happened in the past and who was responsible for them.",
        oridinalOrFortressDescription: "The ability to read the stock market for fluctuations, enabling a trader to recognize the right time to buy and sell commodities. It also allows a character to know what is in demand, and recognize current trends in consumer habits and requirements.",
    }, {
        skill: "Martial Arts (Type)",
        stat: "REF",
        description: "Use your body as a trained weapon, probably from your master. Chosen martial art skill level is added to your attack damage as an attack modifier.",
        oridinalOrFortressDescription: "This skill covers any type of trained fighting style using hands, feet, or specialized 'martial arts' weapons. You must elect a style of martial art and take a separate skill for each style (for example, you would have to take Karate and Judo separately, spending points for each one. Difficulty modifiers are listed in () next tot each skill listed below. The primary advantage to martial arts styles is that each one has what are called key attacks; attacks that reflect particular strengths of style. When a key attack is used, there is to-hit bonus based on the attack type and martial arts style. A full table of key attacks is listed in Martial Arts. The second advantage to martial arts styles is that there is a damage bonus on attacks equal to half the level of the Martial Arts skill; for example, a master with a +10 Kung Fu Skill would add 5 points to his damage. This can be formidable advantage, although bludgeoning head strikes do NOT double damage.",
    }, {
        skill: "Mathematic",
        stat: "INT",
        description: "The field of abstract data relations. Know how to sum and subtract more than one and one without asking for an answer on the web, be able to solve advanced formula and do so correctly or understand many competing mathematical theories as well as you know your axioms (which ones do you agree with?).",
        oridinalOrFortressDescription: "The skill of understanding calculations and mathematical formulas. At +3 you have the ability to add, subtract, divide and multiply. At +4, you can do algebra and geometry. At +6, you can perform calculus. At +9 you can deduce your own mathematical formulas.",
    }, {
        skill: "Medicine",
        stat: "INT",
        description: "It is great when everything works just as billions of years of evolution intended. But sometime it doesn't. Or you wish it wouldn't. When that happens, draw on your wast knowladge of people to know how to fix or break their fragile, constantly decomposing and hotfixing bodybags.",
        oridinalOrFortressDescription: "The skill of clinically diagnosing symptoms and medical problems. A +3 is the equivalent of a high school nurse - you can recognize most common injuries and complaints. At +6, you would be equivalent to a trained intern; you can recognize many uncommon illnesses and know how to treat most common ones. A +9 is equivalent to you to get a diagnosis.",
    }, {
        skill: "Melee Weapons",
        stat: "REF",
        description: "How well you wield knives, swords, axes, clubs, but also melee cyberweapons (not including those that do damage but can not be used as a weapon, like fangs).",
        oridinalOrFortressDescription: "Brawling is the skill of fighting man to man with fist, feet and other parts of the body, it also covers Melee which is the ability to use knives, axes, clubs and other hand to hand weapons in combat. Brawling is not a trained skill - it is the basic skill of defending oneself. Unlike Martial Arts, there are no specialized attacks and no damage bonus per level. It does allow for all the same maneuvers as a Martial art, but provides no bonus to any of them. If the character has the Savage Role, he may add +1 per level of Rampage to Brawl/Melee damage.",
    }, {
        skill: "Micro-Economy",
        stat: "INT",
        description: "Knowladge on how to run an organization. It can be a simple understanding of profits, expenditure and revenue or understanding of relevant laws, practices, players and how to recognize, disrupt or profit from trends.",
        oridinalOrFortressDescription: "The ability to read the stock market for fluctuations, enabling a trader to recognize the right time to buy and sell commodities. It also allows a character to know what is in demand, and recognize current trends in consumer habits and requirements.",
    }, {
        skill: "Motorcycle",
        stat: "REF",
        description: "Drive your motorcycle, cyberbike or a simmilar 1 to 3 wheeled vehicle as know as general knowledge about traffic and your ride.",
        oridinalOrFortressDescription: "The required skill to operate motorcycles, and other two and three-wheeled vehicles.",
    }, {
        skill: "Motorcycle Tech",
        stat: "TECH",
        description: "Know how and experiences with maintaining, fixing, designing or building motor vechiles on 1, 2 or 3 wheel.",
        oridinalOrFortressDescription: "(Look any Tech)",
    }, {
        skill: "Nano Tech",
        stat: "TECH",
        description: "Nanotech can fall into many categories, but usually you just need to know how to produce, storage and funally apply them. It can be somewhat hard to get rid of nanites, but you can include special markers or nanoswitches that will make working with nanomachines much easier.",
        oridinalOrFortressDescription: "(Look any Tech)",
    }, {
        skill: "Nature Survival",
        stat: "INT",
        description: "How to survive in the wilds. Where to find food, water, how to hunt, cook, find shelter and in general not die the moment your NET connection stops working. Very useful in accidents, adventuring, hiding in the middle of nowhere, but somewhat less in the city.",
        oridinalOrFortressDescription: "The required skill for knowing how to survive in a given environment such as Wilderness, Jungle, Desert, Arctic, Urban, Sea, Underwater, Space. Typical applications include how to forage for wood, build shelters, what plants are safe to eat, what to do in an emergency, and make fires. The average Boy Scout has a Survival of +3. A Special Forces Green Beret has a Survival of +6 or above. Grizzly Adams, Mountain Man of the Wilderness, would have +9 or +10 Survival Skill. While each environment is its own skill, you can use your chosen survival at half its level in other environments at the GM’s discretion determined by similarity of environment. (Example Wilderness Survival would allow the character to use half his skill in a Jungle or Urban environment, while Space or Desert would provide no bonus at all)",
    }, {
        skill: "NET Knowledge",
        stat: "INT",
        description: "Internet of Cyberpunk univers is divided and diverse place and not many people have a grasp of what is going on with it. But you do ... maybe. How does it work, how is it divided, who owns parts or it and how is it protected. NET is a game and you know the rules, players and playboard.",
        oridinalOrFortressDescription: "Basic knowledge of the geography of the Net, it's lore and history, as well as knowledge of the important computer systems, their strengths and their weaknesses. At +2, you can generally navigate around the Net and know where all the local places are. At +6, you know the locations of most places in the Net, and have a working understanding of its largest and most well know systems. At +9, you know the entire Net like the back of your hand, know the general layouts of the important systems cold, and are aware of the layouts for the rest of them. This is a required skill for Hacking/Netrunning.",
    }, {
        skill: "Oratory",
        stat: "COOL",
        description: "When you speak to the public or perform a speach, how likely do you touch their hearts and minds. Do they listen to you or do they ignore you, fall asleep or even feel insulted by your lacking words and gestures.",
        oridinalOrFortressDescription: "The skill of public speaking. At +2, you can wing high school contests. At +6, you can be paid speech in public. At +10, you are capable of delivering a speech to rival Kennedy's 'Ichn Bin Ein Berliner' or Lincoln's Gettysburgs Address. Rockers with Oratory Skill of +6 or better can add +1 when using their Charismatic Leadership ability. This also covers the use of Rhetoric.",
    }, {
        skill: "Paint",
        stat: "TECH",
        description: "Paint or draw, maybe for your soul, maybe for your social network, maybe to be sold for profit, it does not matter, your creations come to life faster and more majestic.",
        oridinalOrFortressDescription: "The skill of producing professional drawings. A skill of +3 allows you to produce salable 'modern' art. A Skill of +6 will produce artwork that is recognized end extremely pleasant to eye - as well as salable. An artist with a Skill of +8 or greater will be nationally known, have exhibitions in galleries, and have other lesser artists studying his style in art.",
    }, {
        skill: "Paleontology",
        stat: "INT",
        description: "Knowladge on pre-written history of the planet and practices on how to uncover it. You can choose a time period or (no more) living organism as your fascination or study focus and be more knowledgable about it or you could stay generalist and know more about everything.",
        oridinalOrFortressDescription: "(Look Expert)",
    }, {
        skill: "Perform",
        stat: "EMP",
        description: "Your ability to make something ordinary into something memorable or to convince someone to find meaning in your art.",
        oridinalOrFortressDescription: "The skill of trained acting, singing, etc. A trained performer of +4 or greater can successfully perform on stage for payment at small theaters or bit parts in film or television. Performers of +6 or greater will be considered to be of professional caliber, and may have lucrative contacts and fans. Performers of +9 or greater are of 'star': caliber, have a large number of fans, and may be recognized on the street.",
    }, {
        skill: "Persuasion",
        stat: "EMP",
        description: "Convince someone into seeing the world the way you want them to see it or to do something they are reluctant about if not openly opposed.",
        oridinalOrFortressDescription: "The ability to talk others into doing what you want. This may be used individually or on large groups. At +3, you can win most debates or convince your girlfriend the blonde you were with was your sister. At +5, you are a smooth talker of professional caliber. Ronald Reagan had a Persuasion of +7, Hitler a Persuasion of +9.",
    }, {
        skill: "Photography",
        stat: "TECH",
        description: "Capture the world or maybe the mood of the world with a picture. First know how not to screw up with wrong settings, make sure the moment is perfect and then let the technology do its magic. Also usefull for professional photographers or old-school reporters.",
        oridinalOrFortressDescription: "The skill of producing professional caliber photographs or video. A skill of +2 allows you to make decent home movies. A Skill +4 or better creates work capable of winning amateur contests. A Skill of +6 or better will produce work of the level of the average magazine cover or rock video. A photographer or cinematographer with a Skill of +8 is known and probably famous.",
    }, {
        skill: "Physics",
        stat: "INT",
        description: "Knowladge of universal physical processess that rule the world, like what are EMPs and how do they work, how gravity works or how different materials tend to behave under different general conditions and how to calculate them, like when you trow a ball, where to expect for it to land. For extremly large or small physical scales you might instead want to create astrophysics or quantum mechanic skill.",
        oridinalOrFortressDescription: "The ability to calculate physical principles, such as gas pressures, mechanical energies, etc. This skill requires a basic Mathematics Skill of +4.",
    }, {
        skill: "Pilot (Type)",
        stat: "REF",
        description: "Pilot one of an aircraft types (rotorcraft, fixed wing, vectored thrust) as well as general knowledge on traffic and safety standards for it.",
        oridinalOrFortressDescription: "In general, this is the skill of controlling aircraft. Aircraft are broken into categories: Gyro and Rotorcraft, Fixed Wing Aircraft, Dirigibles and Vectored Thrust Aerodynes (AV-s). A Piloting Skill od +1 allows you to take of and land safely in good weather conditions. A Piloting skill of +3 or more makes you a trained pilot, able to engage in most combat situations or bad weather. Pilots with a Skill of +6 or greater are veterans pilots, able to handle themselves in almost any situation, including aerobatic manuevers. Pilots with a Skill of +9 or greater are so good, they have a rep as pilots, and are widely known among the piloting fraternitiy for having the 'right stuff'.",
    }, {
        skill: "Programming",
        stat: "INT",
        description: "Recognize computer code and hope it is one of those you know or at least similar enough for you to read or even write in it. Deeper you programming knowladge, more languages you know as well as their many quirks, which programs are best to work on them and how best to use your work. Maybe some day you might even create your own language, language library. And why stop with programs, while you are at it, write your own OS! Make those who would want to hack you cry!",
        oridinalOrFortressDescription: "The required skill to write programs and re-program computer system. This skill does not allow players to actually do repairs on a computer (this requires Electronics). With a Programming Skill of +1, you can do simple E-BASIC programs. A Programming Skill of +3 or better allows you to know some higher level languages and he able to write reasonably complex programs (including video games). Players with Programming Skill +6 or better are considered to be professionals, who can build operating software, design mainframe systems, and hold down a steady job at your average Silicon Valley firm. With a Programming Skill of +9 or better, other programmers speak your name with reverence ('You invented Q? Wow!'), young hackers set out to crack your systems, and any computer software you design instantly gets used by every business application in wide world. This is a required skill for Hacking/Netrunning.",
    }, {
        skill: "Psychology",
        stat: "INT",
        description: "Don't just observe what people do, study and therefore understand them. Gives you an research-based understanding of individuals around you.",
        oridinalOrFortressDescription: "(Look Expert)",
    }, {
        skill: "Repairman",
        stat: "TECH",
        description: "General skill for repairing, meintaining and cleaning many different parts of your home, like a computer, car, dishes, furniture, floors etc.",
        oridinalOrFortressDescription: "The required skill for building or repairing simple mechanical and electrical devices, such as car engines, Toasters, etc... With a Basic Tech Skill of +3, or better, you can fix minor car problems, repair basic wiring, etc. A Basic Tech Skill of +6 or better can rebuild an engine, etc. A Basic Tech Skill of +9 or better can put together a race car engine, and maintain industrial machinery. However, they do not know enough specialized knowledge to apply it to complex things such as aircraft (just like Mr. Goodwrench) doesn't know how to build and service an F-16).",
    }, {
        skill: "Resist",
        stat: "COOL",
        description: "Resist pain and hardship with your willpower over a period of time. Also knowladge on how best to keep going when your body is starting to fail.",
        oridinalOrFortressDescription: "Characters with this skill are especially toughened against interrogation, torture and mind control drugs. A successful use of this skill will automatically increase the difficulty of any Interrogation attempt made by another guy by one level.",
    }, {
        skill: "Rifles",
        stat: "REF",
        description: "How well do you target with a rifle as well as general knowledge on how to use and maintain it.",
        oridinalOrFortressDescription: "You must have this skill to use rifle/shotguns effectively (see Handgun limitations and modifiers).",
    }, {
        skill: "Robot Tech",
        stat: "TECH",
        description: "Know how and experiences with maintaining, fixing, designing or building a robot, drone or otherwise authonomous or mostly autonomous techology.",
        oridinalOrFortressDescription: "(Look any Tech)",
    }, {
        skill: "Rotorcraft Tech",
        stat: "TECH",
        description: "Know how and experiences with maintaining, fixing, designing or building aircraft with rotors, like helicopters and girokopterji ter ciklopadi.",
        oridinalOrFortressDescription: "The skill or repairing and maintaining rotorwing aircraft such as helicopters and ospreys.",
    }, {
        skill: "Search",
        stat: "INT",
        description: "How to find what is hidden, lost or how to track something that wishes to hide. Use your knowledge of subtle clues, suspect databases and trackind equipement to find what you are looking for. It is also a general understanding on how to evade someone or hide from something.",
        oridinalOrFortressDescription: "The skill of shadowing/following people. This skill is used in urban/inhabited areas rather than in the wilderness (where the skill Survival incorporates tracking game in the wild).",
    }, {
        skill: "Search Database",
        stat: "INT",
        description: "Knowedge on how to search libraries or organised data structures both in physical and virtual world. Know where to start and how to recognise what you are looking for as well as how to properly (or unproperly) extract it. Especially useful if you want to finish your task in minumal amount of time.",
        oridinalOrFortressDescription: "The skill of using databases, DataTermsTM, libraries and other compiled information sources to find facts. With a skill of +2 you can use most simple databases. With a skill of +6, you can easily access the Library of Congress. At +9, you can comprehend near any public databases and find very obscure facts.",
    }, {
        skill: "Seduction",
        stat: "EMP",
        description: "Form (and maintain) romantic relationship. Be erotic instead of obscene. Know not only how to love, but to make love. Flirt away Romeo!",
        oridinalOrFortressDescription: "The skill of forming and maintaining romantic relationships (this includes your abilities as a lover). This skill may be used to determine whether or not players can form relationships with other non-players characters and the intensity of these relationships. Every point of a characters ATTR over 6 gives a +1 modifier to seduction.",
    }, {
        skill: "Singing",
        stat: "EMP",
        description: "Use your voice to amaze those around you. It also helps to make sure you are not the only one who is enjoying your casual singing. It also helps if you want to be lauder or have a nice casual voice.",
        oridinalOrFortressDescription: "The skill of trained acting, singing, etc. A trained performer of +4 or greater can successfully perform on stage for payment at small theaters or bit parts in film or television. Performers of +6 or greater will be considered to be of professional caliber, and may have lucrative contacts and fans. Performers of +9 or greater are of 'star': caliber, have a large number of fans, and may be recognized on the street.",
    }, {
        skill: "Social Awareness",
        stat: "EMP",
        description: "Notice honesty, lie, evasion, mood, opportunity and other social cues.",
        oridinalOrFortressDescription: "The skill of detecting any evasions, moods and other emotional clues from others. At +2, you can usually feel when you're not getting the whole truth. At +6, you can detect subtle evasions and mood swings. At +8, you can not only detect subtle emotional clues, but can usually tell what the subject is hiding in a general way.",
    }, {
        skill: "Sociology",
        stat: "INT",
        description: "Psychology of masses, know what can be expected from groups of people and how to use that to your advantage.",
        oridinalOrFortressDescription: "(Look Expert)",
    }, {
        skill: "Smart Security",
        stat: "TECH",
        description: "Install bugs, trackers, security cameras, electronic locks, pressure plates, pit traps ... or know how to counter them. While it helps to have a good Awareness, sometimes it is not enough to know door is trying to kill you, but also to get trough it without being successfully eliminated.",
        oridinalOrFortressDescription: "The skill of installing or countering electronic eyes, electronic locks, bugs and tracers, security cameras, pressure plates, etc. At level +3, you can jimmy or install most apartment locks and security cams. At +6, you can override most corporate office locks and traps. At +9, you can enter most high security area with impunity.",
    }, {
        skill: "Stealing",
        stat: "TECH",
        description: "Once you get to the loot, how do you exctact it? If loot is in person's pocket, how to distract it? If it is in glass case, how to safely remove it? Once you get what you want, how to get away with it? It includes general knowledge on diverse stealing practices and their likelyhood of success.",
        oridinalOrFortressDescription: "The required skill for picking pockets without being noticed, as well as 'shoplifting' small items. For ideas on levels of ability see Pick Lock. This also covers Sleight of Hand, the skill of making small objects disappear and re-appear by using misdirection, nimble hand and finger movements, and other tricks.",
    }, {
        skill: "Stealth",
        stat: "REF",
        description: "Move like a shadow, blend with your surrounding, move silently for efficiently, control your breathing and in general don't draw attention to yourself.",
        oridinalOrFortressDescription: "The skill of hiding in shadows, moving silently, evading guards, etc. A Stealth Skill of +1 is about the level of a very sneaky 10 year old stealing cookies. At +3, you are able to get past most guards, or your parents if you've been grounded. At +6, you are good enough to slip smoothly from shadow and not make any noise. At +8, you are the equal of most Ninja warriors. At +10, you move as silently as a shadow, making the Ninja sound like elephants.",
    }, {
        skill: "Stock Market",
        stat: "LUCK",
        description: "Know everything there is to know about the beast called stock market. In its most basic form, it is a gamble as is always supposed to be knowlegre neutral, but with your above minimal knowledge you might try to gecognise trends or predict events to swing those odds your way ... or maybe just how to really ruin someone elses day. Hit them where it hurst the most and make sure you survive their fury.",
        oridinalOrFortressDescription: "The ability to play the stock market, engage in routine stock transactions and manupulate stocks profitably. At +2, you know enough to invest in junk bonds and lose your shirt. At +6, your investment pay off 75% of the time. At +9, you are a major heavy on the Market, routinely dabble in international stocks, and can write learned articles on the subject of investment.",
    }, {
        skill: "Street Survival",
        stat: "EMP",
        description: "Know where it is safe and which streets are better to avoid, what not to ever ever do, where to get legal and illegal stuff or services and who to call when you need something.",
        oridinalOrFortressDescription: "The knowledge of the 'seamy' ways of life - where to get illegal and contraband things, how to talk to the criminal environment, and avoiding bad situations in bad neighborhoods. With Streetwise of +3 or better, you can get 'hot' items, drugs, etc. With a Streetwise of +5 you know how to arrange a murder contract, you know a few mobsters who might owe you, and be able to call on muscle when you need it. At +8 or better, you could become a major crimelord yourself.",
    }, {
        skill: "Strength",
        stat: "BODY",
        description: "Crush, bend, lift, throw, rip and otherwise shape the world with your raw power.",
        oridinalOrFortressDescription: "The user of this skill has practiced the art of bending bars, crushing objects, ripping phone books apart and other useful parlor tricks. At +3, no phonebook is safe, you can bend thin rebar, and snap handcuffs. At +10, you can bend prison bars, rip up the Gutenberg Bible, and dent car fenders with one blow. For every point of the Strength Feat skill, a character may modify his carry weight, dead lift weight , and his Throw distance by 5% in kg. Difficulty modifier for doing this successfully is 15, +3 for every 10% kg over what is normally allowed.",
    }, {
        skill: "Style",
        stat: "COOL",
        description: "To know what to wear, to know what not to wear and to know how to wear it. You have a taste and you make other people know it. It can help if you also have a decently sized and well stocked wardrobe.",
        oridinalOrFortressDescription: "The skill of knowing the right clothes to wear, when to wear them, and how to look cool even in a spacesuit. With Wardrobe +2 or better, you are good at choosing clothes off the rack. At +6, your friends ask you for wardrobe tips, and you never buy anything off the rack. At +8 or better, you are one of those rare people whose personal style influences major fashion trends.",
    }, {
        skill: "Submachineguns",
        stat: "REF",
        description: "How well do you target with a SMG as well as general knowledge on how to use and maintain it.",
        oridinalOrFortressDescription: "You must have this skill to use any type of submachine gun effectively (see Handgun for limitations and modifiers).",
    }, {
        skill: "Surgery",
        stat: "TECH",
        description: "Maybe someone just needs their wiggly tooth removed or maybe he would do well with a new heart or a hole less in the middle of an abdomen. In such cases surgeons and proper equipement are needed that know what is wrong, how to fix it and if they can do it. If you feel proper hospital environment is too restrictice towards your skills, maybe try to become a ripperdoc. Today new kidney, tomorrow two extra arms. Hell, with so much works, maybe YOU could use those two extra arms!",
        oridinalOrFortressDescription: "The ability to cut into a living thing and remove, implant, or make repairs.",
    }, {
        skill: "Swimming",
        stat: "BODY",
        description: "Do not drown. Swim. Swim faster, deeper, longer.",
        oridinalOrFortressDescription: "This skill is require to know how to swim.",
    }, {
        skill: "Teaching",
        stat: "INT",
        description: "Teach someone what you know. You can teach someone how to shot by saying 'aim with this part and do BAM BAM' or you can try to say something actually useful, maybe even adapt to their learning style. You can not teach what you do not know and you can teach only up to your teaching level. That said, even if you do not know something, having a great teacher around or knowing how best to teach yourself might help you learn faster than just reading same sentance in the book over and over again until you get it or give up.",
        oridinalOrFortressDescription: "The skill of imparting knowledge to someone (if you don't think this is skill, you ought tot try is someone). Players may not teach any skill unless they have higher skill levels, in both teaching, and the skill(s) being taught, than the student. The training chart determines length of time it takes to teach a skill, though a truly gifted teacher may be able to do it faster or more effectively, at GM’s discretion. At a Teaching Skill of +3 or better, you can professionally teach students up to High School. At +6, you can teach at a college level. At +9 or greater, you are recognized by others in the field as good enough to guest lecture at MIT or Cal Tech; your texts on the subject are quoted as a major references. A successful teaching roll, will allow over the course of time, a student to raise a specific skill as if it were 1 level lower (ie to go from 5-6 will only cost as much IP as to go from 4-5).",
    }, {
        skill: "Vectored Thrust Tech",
        stat: "TECH",
        description: "Know how and experiences with maintaining, fixing, designing or building vectored thrust aircraft, like hovercopter, hoverboardi ter hoverpacki.",
        oridinalOrFortressDescription: "The required skill for repairing all aerodyne vehicles. At +3, you can perform routine maintenance. At +6, you can tear down engines and modify an AV. At +10, you can design your own AV’s on common airframes.",
    }, {
        skill: "Weaponsmith (Type)",
        stat: "TECH",
        description: "Repair and maintain type of a weapon, modify it or even make your own weapon.",
        oridinalOrFortressDescription: "The skill for repairing and maintaining weapons. At level +2, you can do repairs and field stripping. At level +6, you can repair all types of weapons and make simple modifications. At level +8 you can design your own weapons toorder.",
    }, {
        skill: "Zoology",
        stat: "INT",
        description: "You are an expert when it comes to recognize animals, where to find them, how to care for them, trivia about them and if they have a specific use.",
        oridinalOrFortressDescription: "Knowledge of lifeforms, biological proecsses and their relation to the environment. At +2, you know most common animals. At +5, you know not only well known animals, but also about many exotics and endangered species. At +8, you are knowledgable on almost all animals, know their habits well, and have a +1 advantage to any Wilderness Survival Skills (you know whhere to find the game).",
    }];

    return {
        roleArr,
        skillArr
    }
}