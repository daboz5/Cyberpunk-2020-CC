import { Ability, Role, Rule, Skill, Stat } from "../types";

export default function useDatabase() {

    const statArr: Stat[] = [{
        stat: "Body Type",
        short: "BODY",
        description: "Body Type determines how much damage you can take in wounds, how much you can lift or carry, how far you can throw, how well you recover from shock, and how much additional damage you cause with physical attacks. Are you more of a fragile computer nerd or do your warehouse-worker's muscles have their own muscles? You are safe to carry up to 10x BODY in kg and safely lift up to 40x BODY in kg.",
        oldDescription: "Strenght, Endurance, Constitution are all based on the character's Body Type. Body Type determines how much damage you can take in wounds, how much you can lift or carry, how far you can throw, how well you recover from shock, and how much additional damage you cause with physical attacks. Body Tyype is important to all character types, but to Solos, Rockerboys and Nomads most of all. You may carry up to 10x your Body Type in kg. You may also dead lift 40 times your Body Type in kg."
    }, {
        stat: "Coolness",
        short: "COOL",
        description: "How well the character stands up to stress, fear, pressure, physical pain and/or torture, but also how good they are looking while doing it or how put together they feel in general. This stat was merged with CP 2020 Attractiveness stat.",
        oldDescription: "This index measures how well the character stands up to stress, fear, pressure, physical pain and/or torture. Determining your willingless to fight on despite wounds or your fighting ability under fire, Cool (CL) is essential. It is also the measure of how 'together' your character is and how tough he appears to others. Rockerboys and Fixers should always have a high Cool with Solos and Nomads having the highest of all."
    }, {
        stat: "Empathy",
        short: "EMP",
        description: "Your charisma and sympatheric emotions. In a world of alienated, future-shocked survivors, the ability to be 'human' can no longer be taken for granted and can be critical when leading, convincing, seducing or perceiving emotional undercurrents. Empathy also represents how close a person is to the line between a social beast and a cyberpsycho.",
        oldDescription: "This Stat represents how well you relate to other living things - a measure of charisma and sympatheric emotions. In a world of alienated, future-shocked survivors, the ability to be 'human' can no longer be taken for granted. Empathy (EM) is critical when leading, convincing, seducing or perceiving emotional undercurrents. Empathy is also a measure of how close he/she is to the line between feeling human being and cold blooded cyber-monster."
    }, {
        stat: "Intelligence",
        short: "INT",
        description: "Your problem solving ability; figuring out problems, noticing things, remembering information. How fast do you learn, how abstract and theoretical the topic can be ... or just how nerdy you are. Those sci-fi solarpunk books won't read themselves!",
        oldDescription: "This is a measure of your problem solving ability; figuring out problems, noticing things, remembering information. Almost every character type will need a high Intelligence, with Netrunners and Corporates requiring the highest of all."
    }, {
        stat: "Luck",
        short: "LUCK",
        description: "Events just happen to sometimes turn in your favor or against you. Or maybe it is just karma. Whatever it is, your luck represents how many points you may use each game to influence the outcome of events. Use points of luck and add them to your chosen rolls. Luck is restored at the end of a long rest (once per day) or a session, depending on GM's descression.",
        oldDescription: "This is the intangible 'something' that throws balance of events into your favor. Your luck represents how many points you may use each game to influence the outcome of a critical event. To use luck a character has to a critical die roll (declaring your intention to use Luck before the roll is made) until all of your Luck stat is used up. Luck is always restored at the end of each game session."
    }, {
        stat: "Reflexes",
        short: "REF",
        description: "Your basic dexterity, but your ability of coordination and tool-use, like when shooting or driving. It also represents how high or far you can jump and how fast you can move. This stat was merged with CP 2020 Movement Allowance stat.",
        oldDescription: "This is a combined index, covering not only your basic dexterity, but also how your level of physical coordination will effect feats of driving, piloting, fighting and athletics. Characters who intend to engage in a great deal of combat (such as Solos, Nomads or Rockerboys) should always invest in the highest possible Reflex."
    }, {
        stat: "Technical Ability",
        short: "TECH",
        description: "How quickly you understand and operate technically oriented tasks and will be used when fixing, repairing and attempting to use unfamiliar tech. It is also useful when making something from scratch or when your muscle memory and the feel of whatever you have in front of you is more important than how well you recall what an perfect example from your 'For Dummies' eBook would tell you about it. Bombs explode in theory, only real ones will cost you an arm.",
        oldDescription: "This is an index of how well you relate to hardware and other technically oriented things. In Cyberpunk, the ability to use and repair technology is of paramount importance - TECH will be the Stat used when fixing, repairing and attempting to use unfamiliar tech. While all characters should have a decent Tech Stat, potential Techies should always opt for the highest possible score in this area."
    }];

    const skillArr: Skill[] = [{
        skill: "Accounting",
        stat: "INT",
        description: "Know tax law, keep business books organized, wield modern accounting software or play tricks with numbers and get away with it.",
        oldDescription: "The ability to balance books (or create false books), juggle numbers, create budgets and handle day to day business operations.",
    }, {
        skill: "Acting",
        stat: "EMP",
        description: "Move hearts of your audiance or convince them you are someone (or something) else entirely.",
        oldDescription: "The skill of trained acting, singing, etc. A trained performer of +4 or greater can successfully perform on stage for payment at small theaters or bit parts in film or television. Performers of +6 or greater will be considered to be of professional caliber, and may have lucrative contacts and fans. Performers of +9 or greater are of 'star': caliber, have a large number of fans, and may be recognized on the street.",
    }, {
        skill: "Animal Handling",
        stat: "EMP",
        description: "Prevent animals in your care from dying due to neglect or improper treatment, form bond, train them and have a general understanding of them.",
        oldDescription: "The ability to care for, train, and control animals. Includes knowing what food they eat, their space requirements",
    }, {
        skill: "Artificial Inteligence",
        stat: "INT",
        description: "Maybe you just want something that will replace most boring or creative parts of your life or maybe you want something more, someone that will actually listen to you, a friend. Whatever it is, you know how to program and train the data untill something else emerges, something that can help or maybe even something that can refuse.",
        oldDescription: "N/A",
    }, {
        skill: "Archery",
        stat: "REF",
        description: "Your knowladge and experiences on using weapons that are using arrows or bolts (like bow or crossbow).",
        oldDescription: "The skill required to use bows, crossbows and other arrow-based ranged weapons. See Handgun for details.",
    }, {
        skill: "Architecht",
        stat: "INT",
        description: "Anyone can set up a box on the street, but for something more he might want to (or has to) hire an architech to make sure his brand new home is structuraly stable, includes toilet and maybe even looks nice. With some skill you would know do design your own coffin, but with enough time you might be the one who gets to design next floating palace. Or maybe you just want to design gardens? Public infrastructure? Something needs to be build and needs you. It can be also used to guess or get building plans of existing structures.",
        oldDescription: "(Look Expert)",
    }, {
        skill: "Athletics",
        stat: "REF",
        description: "Run, jump, squeeze and otherwise show elasticity, responsivness and overall mastery over your body. If REF is your raw talent, you made effort to perfect it.",
        oldDescription: "This skill is required for accurate throwing, climbing, and balancing. It combines the basic elements of any high school level sports program. At +3 and above, you are the equivalent of a real high school 'jock'. At +5 and above, you can perform in college level competitions. At +8 and above, you are of Olympic or Professional caliber. Every point of Athletics will also modify: a characters: Run, Leap, and Climb distances by 5% a round.",
    }, {
        skill: "Awareness",
        stat: "INT",
        description: "Be aware of your surrounging. Notice traps, ambushes, fake smile ... or find an excelent sniping spot, or if your favourite store has a sale, who knows ... you, you spoted it first!",
        oldDescription: "This is equivalent of a 'trained observer' skill, allowing characters to notice or be aware of clues, shadows and other events. With an Awareness of +2 you will usually spot small pieces of paper with noted on them, doors left ajar , and obvious expressions of lying or dislike. An Awareness of +5 or better allows you to spot fairly well hidden clues, and fairly sophisticated attempts to 'shadow' you. With an Awareness of +8 or greater, you routinely perform the sorts of deductive reasoning seen in the average TV cop show ('The murder was left handed because this knife has a specialized handle'). Sherlock Holmes has a +10 Awareness. Players without skill may only use their Intelligence Stat. Players of any Role should get a bonus if the Awareness task directly relates to their Special Ability; if a Medtech gets a fairly good Awareness roll, they may not realize they are walking into an ambush, but they will notice that the 'Judas' is sweating profusely.",
    }, {
        skill: "Biochemistry",
        stat: "INT",
        description: "Knowledge on how organisms react to specific substances, but also how to extract, study and adapt genetic code. In the age where genetic tampering is normal while clones and lab-grown organs are a yesterday news it can be helpful to know how to play a god ... with a right equipement of course. If you feel lucky ... why not study on yourself? Yes, you could die, get terminal cancer or just become horrificly transfigured, but you might also shine in the dark!",
        oldDescription: "(Look Expert)",
    }, {
        skill: "Biology",
        stat: "INT",
        description: "Every living being works like a machine, beyond understanding complicated, messy macnine. Know what can be expected from living organisms or how to infuence them by undestanding what makes them tick. Also helpful in identifying types of organisms.",
        oldDescription: "(Look Expert)",
    }, {
        skill: "Botany",
        stat: "INT",
        description: "You are an expert when it comes to recognize plants and fungi, where to get them, how to care for them, trivia about them and how to use them.",
        oldDescription: "(Look Expert)",
    }, {
        skill: "Brawling",
        stat: "REF",
        description: "Brawling is not an martial art you learned from your betters, but instead a skill that you got fighting on the strees or debating your next or last fighting experience. It is a bit chaotic, but as long as it get's the job done, you won't complain. It is cheaper than Martial Arts, but on Hit you can not add it to your damage as you can with Martial Arts.",
        oldDescription: "Brawling is the skill of fighting man to man with fist, feet and other parts of the body, it also covers Melee which is the ability to use knives, axes, clubs and other hand to hand weapons in combat. Brawling is not a trained skill - it is the basic skill of defending oneself. Unlike Martial Arts, there are no specialized attacks and no damage bonus per level. It does allow for all the same maneuvers as a Martial art, but provides no bonus to any of them. If the character has the Savage Role, he may add +1 per level of Rampage to Brawl/Melee damage.",
    }, {
        skill: "Burglary",
        stat: "TECH",
        description: "Know how to get where you are not supposed to be, maybe somewhere behind a simple lock, inside of a safe or in your house when you forget your keys. This skill does not cover smart security, but it does cover general knowledge of smart and not so smart security sistems, like how would you expect guards to behave or where valuables would be likely stored with given security measures.",
        oldDescription: "The skill required to pick locks and break into sealed containers and rooms. At +3, you can jimmy most simple locks. At +6 you can crack most safes. At +9 or better, you have a rep as master crackman, and are known to all the major players in the Cyberpunk world.",
    }, {
        skill: "Car Tech",
        stat: "TECH",
        description: "Know how and experiences with maintaining, fixing, designing or building car-like motor vehicles, like cars, busses and trucks.",
        oldDescription: "(Look any Tech)",
    }, {
        skill: "Chemistry",
        stat: "INT",
        description: "World is made out of stuff and you know how it all fits together. Or at least in some textbook cases you do. Know simple materials and how they are expected to react to each other.",
        oldDescription: "The required skill for mixing chemicals various compounds. A level +2 Chemistry is equal to high school chemistry. A level +4 is equal to a trained pharmacist or college level chemist. A +8 is a trained laboratory chemist. This also covers Alchemy.",
    }, {
        skill: "Cooking",
        stat: "INT",
        description: "Know ingredients, know recepees, know kitchen tools then experiment until you don't get it right and then experiment some more. Great way to make your food more tasty, impress guests or at least not kill yourself or burn your appartment while trying to do it.",
        oldDescription: "The ability to prepare food.",
    }, {
        skill: "Cosmetic Surgery",
        stat: "TECH",
        description: "In this day and age, being different is normal and you know exactly how to shape someone in any bizzare fantasy they desire or how to at least make them look like someone else so they can better evade whoever is looking for them. You might need a proper equipement, but as long as you don't kill or disfigure too many of your costumers, it will probably pay for itself.",
        oldDescription: "N/A",
    }, {
        skill: "Creativity",
        stat: "INT",
        description: "Write songs, articles, novels based on your experience and understanding of what you are trying to do. Some people need inspiration ... it helps, but you are able to make something works simply by knowing what worked in the past. This is why 'art schools' have 'school' part in them.",
        oldDescription: "The required skill for writing songs, articles, or stories. A Composition Skill of +4 or greater gives your character the ability to produce salable work. A Skill of +8 or more produce work of such a high caliber that the creator may have a strong literary following and not a little critical acclaim.",
    }, {
        skill: "Cryotank",
        stat: "TECH",
        description: "Know how and experiences with maintaining, fixing, designing or building a cryotank, but also using it.",
        oldDescription: "The required skill for operating, repairing and maintaining life suspension and body chilling devices. A minimum skill of +4 is required to chill down a healthy person. A minimum skill of +6 for chilling a wounded person.",
    }, {
        skill: "Cyber Tech",
        stat: "TECH",
        description: "Know how and experiences with maintaining, fixing, designing or building a cybernetic body part.",
        oldDescription: "The required skill for repairing and maintaining cyberware. At level +2, you can keep your cyberware turned up and replace its power batteries. At level +6, you can strip down most cyberware and even make simple modifications. At level +8, you can design your own cyberware to order. This skill also covers Robotics.",
    }, {
        skill: "Dance",
        stat: "REF",
        description: "How well you can dance and how many dances do you know as well as experience and techniques required to turn your body movement into an artform.",
        oldDescription: "The specific skill needed to become a professional dancer. A trained dancer +4 or greater can successfully dance for payment in small clubs or dance troupes. Dancers +6 or greater will be considered to professional caliber, and regularly give performances and have fans. Dancers +9 or greater are of 'star' caliber, have a large number of fans, and may be recognized on the street.",
    }, {
        skill: "Disguise",
        stat: "TECH",
        description: "Use the most modern tech and some makeup to disguise yourself. Might work best with Actor and Wardrobe skills, but at some point it helps if even you would mistake yourself someone else when observing your creation in the mirror. It can also include smell and other body signals, not just how you look.",
        oldDescription: "The skill of disguising yourself to resemble someone else, whether real or fictitious.",
    }, {
        skill: "Dodge",
        stat: "REF",
        description: "As long as you are aware you are being attacked by whatever is targeting you and that something is not moving with a light speed (maybe laser does, but the hand moving the laser around doesn't), you may try and dodge out of the way. It is great for limiting or preventing the damage, not so much in stopping it. It is both your ability to move your body and predict the trajectory of an attack towards it.",
        oldDescription: "This skill is required to dodge attacks and escape grapples and holds. If an attack is made without your knowledge, you may not apply this skill to your Defense roll.",
    }, {
        skill: "Driving",
        stat: "REF",
        description: "Drive a car or something else that has a basic car design, like a truck, a bus or a tractor. It helps both in getting the most out of the vehicle, driving it safely or driving it comfortably. It also helps with traffic knowledge, like how to navigate roads or where (not) to try to park.",
        oldDescription: "This skill allows you to pilot all ground vehicles like cars, trucks, and hovercraft. This skill is not usable for piloting aircraft. A skill +3 is equal to that of a very good non-professional driver. A skill of +6 allows you to drive with the skill of a moderately skilled race driver. A driver with skill of +8 or greater will be nationally ship races, and possibly have access to the most advanced ground vehicles available (as long as he make an endorsement)."
    }, {
        skill: "Ecology",
        stat: "INT",
        description: "Know how living organisms manage to live together in spite of perpetual chaos ... or don't, world of Cyberpunk is dying, so maybe you are an expert on what exactly is going wrong.",
        oldDescription: "(Look Expert)",
    }, {
        skill: "Education",
        stat: "INT",
        description: "Were you self-tought, mentored or finished an elite school? Not only do you have a degree to present, you also picked a lot of general trivia along the way and you are not affraid to share it ... most of the time.",
        oldDescription: "This skill is the equivalent of a basic school education, allowing you to know how to read, write, use basic math, and know enough history to get by. In effect, it is a 'lore' or trivia skill. A skill of +1 is a basic grade school education. A skill of +2 is equal to a high school equivalency. A Knowledge Skill of +3 is equal to a college education, +4 or higher is equal to a Masters or Doctorate. At +7, you are an extremely well educated person, and are asked to play Trivial Pursuit a lot. At +9 and above, you are one of those people who know a lot about everything (hopefully with the good sense to keep his mouth shut).",
    }, {
        skill: "Electronic Tech",
        stat: "TECH",
        description: "Know how and experiences with maintaining, fixing, designing or building a simple electronic systems, like computers, smartphone, cameras, lights etc.",
        oldDescription: "The required skill for maintaining, repairing and modifying electronic instruments such as computers, personal electronics hardware, electronic security systems, cameras and monitors.",
    }, {
        skill: "Endurance",
        stat: "BODY",
        description: "Endure pain and hardship with your pure body power over a period of time. Also knowladge on how best to conserve energy, stay awake or resist dehidration.",
        oldDescription: "This is the ability to withstand pain or hardship, particularly over long periods of time, by knowing the best ways to conserve strength and energy. Endurance Skill checks would be made whenever a character must continue to be active a long period without food, sleep or water. This skill also determines how long a character can hold his breath. At +2 a character can hold his breath for an addition minute, at + 5 it increases to 2 minutes, +8 three minutes, and +10 4 minutes. These extra minutes are added to the “no activity” category of breathing based on Body Type, and will suffer the same of greater air consumption penalties during activity.",
    }, {
        skill: "Escape",
        stat: "REF",
        description: "If you are grappled or hold, you might want to escape out of your predicament. Have a general idea on how to do it as well as flexible, strong body as well as from time to time a will to suffer in order to get out of whatever is holding you. It can also be used as a way to try to escape from tight, locked or otherwise restricting spaces.",
        oldDescription: "This skill allows you to pilot all ground vehicles like cars, trucks, and hovercraft. This skill is not usable for piloting aircraft. A skill +3 is equal to that of a very good non-professional driver. A skill of +6 allows you to drive with the skill of a moderately skilled race driver. A driver with skill of +8 or greater will be nationally ship races, and possibly have access to the most advanced ground vehicles available (as long as he make an endorsement)."
    }, {
        skill: "Etiquette",
        stat: "EMP",
        description: "When social circumstances expect you to behave certain way, like proper posture, language, gestures or table manners. Know what is expected from you, so even when you choose to go against expectations you might do so with flare expected from someone of your statue instead of simply shaming yourself.",
        oldDescription: "The ability to deal with social situations, like knowing the right fork to use or when not to tell the joke about farmer's daughter and the traveling salesman. A Social skill of +2 or better will allow you to get by at any fine restaurant or social function. At +5, you can lunch with the President with aplomb. No social situation will faze you , no matter what. At +8 or above, you can lecture Emily Post on what's proper.",
    }, {
        skill: "Evasion",
        stat: "INT",
        description: "Hide from those searching for you, cover your tracks, have a knowladge on how people are usually tracked by different parties.",
        oldDescription: "The skill of hiding in shadows, moving silently, evading guards, etc. A Stealth Skill of +1 is about the level of a very sneaky 10 year old stealing cookies. At +3, you are able to get past most guards, or your parents if you've been grounded. At +6, you are good enough to slip smoothly from shadow and not make any noise. At +8, you are the equal of most Ninja warriors. At +10, you move as silently as a shadow, making the Ninja sound like elephants.",
    }, {
        skill: "Expert (Type)",
        stat: "INT",
        description: "Pick a topic, any topic that is not too general and is based on your knowladge of the field. You are an expert in it.",
        oldDescription: "You may use this skill to be an expert on one specific subject, such as rare postage stamps, obscure weapon, a foreign language, etc. At +3, you are the local expert. At +6, you know enough to publish a few books on the subject. At +8 or better, your books are recognized as major texts on the subject, and you could do the talk-show circuit if you wanted to. Additionally, any character may treat any of their regular skills as an expert skill at half level for the purposes of identifying the make and model, general knowledge, country of origin, etc., by replacing the normal stat associated with the skill for their INT stat.",
    }, {
        skill: "Explosives",
        stat: "TECH",
        description: "Knowladge on how to make explosive and how to safely (or not) use them as well as general knowledge on where to get required materials for them. You can include timers, sensors and otherwise prime them, just know that there are jobs with better limb security.",
        oldDescription: "This skill allows the character to be knowledgeable in the use of explosives, as well as knowing the best explosives to use for which jobs, how to set times and detonators, and how much explosives to use to accomplish a desired result.",
    }, {
        skill: "Film",
        stat: "TECH",
        description: "The world moves and you intend to capture its motion. At first know your equipement, then know what can you do with it, capture or adapt world around you, then edit it. Also great for gathering evidence, report on something or to make a funny video. It is your camera and silly cats are still a thing.",
        oldDescription: "The skill of producing professional caliber photographs or video. A skill of +2 allows you to make decent home movies. A Skill +4 or better creates work capable of winning amateur contests. A Skill of +6 or better will produce work of the level of the average magazine cover or rock video. A photographer or cinematographer with a Skill of +8 is known and probably famous.",
    }, {
        skill: "First Aid",
        stat: "TECH",
        description: "Know how to calm and stabilize patients or at least how to make them die later. It also helps with determening what seems to be wrong as long as it is nothing too advanced or proper first-aid equipement is present.",
        oldDescription: "This skill allows the user to bind wounds, stop bleeding, and revive a stunned patient. (See Trauma Team for details).",
    }, {
        skill: "Fixed Wing Tech",
        stat: "TECH",
        description: "Know how and experiences with maintaining, fixing, designing or building fixed wing aircraft, like gliders, airplanes and jets.",
        oldDescription: "The required skill for repairing fixed wing aircraft, including Ospreys, jets, and light aircraft. With a Skill of +3, you can perform most routine maintenance tasks. With a Skill of +6, you can do engine tear downs and major structural repairs. With a Skill +9 or better you are capable of designing and building your own aircraft.",
    }, {
        skill: "Forgery",
        stat: "TECH",
        description: "How to create fake documents, photos, movies etc. or how to recognize them, maybe with the help of tools that analize them.",
        oldDescription: "The skill of copying and creating false documents and identifications. This skill Forgery also be applied to the detection of same; if you can fake it, you can usually tell a fake as well.",
    }, {
        skill: "Gamble",
        stat: "LUCK",
        description: "How lucky are you feeling can be influenced by how to manipulate the outcome of the odds. Evaluate your odds or shift them in your favour or if things look bad, pull out before it is too late to do anything about it. And smile. Never forget to smile.",
        oldDescription: "The skill on knowing how to make bets, figure odds, and play games of chance successfully. As any professional gambler knows, this is not a luck skill. At +2, you are the local card shark at the Saturday night poker game. At +6, you can make a living at the tables in Vegas or Monte Carlo. At +9 or better, you take on James Bond at roulette and stand a good chance of breaking the bank.",
    }, {
        skill: "Geology",
        stat: "INT",
        description: "Knowladge of geolodical structures, procesess, both local and global. Gives better knowladge where you are, how location was created and what can be expected to find under such circumstances, like what is standard temperature, wind and rainfall of your season.",
        oldDescription: "(Look Expert)",
    }, {
        skill: "Grooming",
        stat: "COOL",
        description: "Maximize attractivness and increase your chances to form a bond or strike a deal.",
        oldDescription: "This is the skill of knowing proper grooming, hair styling, etc., to maximize your physical attractiveness. Use of this skill allows players to increase their Attractiveness, and thus their chances of successful Relationships or Persuasion. A basically good-looking person would be at +2. A fashion model might have a Personal Grooming of +5 or +6. At +8 or better, you could be major fashion model, film star, or trendsetter. You are always 'together'. And know it.",
    }, {
        skill: "Hacking",
        stat: "INT",
        description: "Knowladge of tools, best practices and systems and how to use them. And also how to abuse them. While most hackers are perfectly legal or at least employed by legal employers, you might want to use all that knowledge to invade or crash networks and databases or track those that are invading and crushing networks and databases.",
        oldDescription: "(Look Expert)",
    }, {
        skill: "Handguns",
        stat: "REF",
        description: "How well do you target with a handgun as well as general knowledge on how to use and maintain it.",
        oldDescription: "You must have this skill to effectively use handguns of any type, including cyberware types. At +2, you can use a handgun on a target range, through combat will still rattle you. At +5, you are as skilled as most military officers of fancy shooting you see on TV, and have begun to get a reputation of being 'good with gun'. A +8, you are a recognized gunslinger with a 'rep'. The very sound of your name makes some people back down in fear. At +10, you are a legendary gunslinger, feared by all except the stupid young punks who keep trying to 'take' you in innumerable gunfight challenges.",
    }, {
        skill: "Heavy Machinery",
        stat: "REF",
        description: "Drive or operate tanks, very big land vehicle and heavy construction or storage equipement.",
        oldDescription: "The required skill to operate tractors, treaded vehicles, extremely large trucks and construction equipment.",
    }, {
        skill: "Heavy Weapons",
        stat: "REF",
        description: "How well do you wield heavy weapons such as granade launchers, autocannons, mortars, heavy machine guns, missiles, rocket launchers, light artilery etc. as well as general knowledge on how to use and maintain those systems.",
        oldDescription: "The required skill for using grenade launchers, autocannon, mortars, heavy machine guns, missiles and rocket launchers. A level +5 skill would be equivalent to a general military 'Heavy Weapons' training course, giving the user the ability to use any or all of these weapon types.",
    }, {
        skill: "History",
        stat: "INT",
        description: "Know what humans and societies of the past were doing or what happened to them. Technically history starts with written language and what recors were left behind, but it often instead covers any human artefact of the past. You may choose a time peoriod or a society and have a deeper underderstanding on that particular historic topic.",
        oldDescription: "(Look Expert)",
    }, {
        skill: "Initiative",
        stat: "REF",
        description: "Take initiative and act first. That can be especially useful in combat as higher initiative gives you more options and might help you to prevent enemies to kill you before you kill them.",
        oldDescription: "This skill determines how quickly you react to your environment and situations. It also determines how many actions you may perform in a combat round. (See Multiple Actions in Combat Rules)",
    }, {
        skill: "Instrument (Type)",
        stat: "TECH",
        description: "Pick an instrument and develop your skill and knowledge of playing it, but also on how to maintain it.",
        oldDescription: "The skill of knowing how to play a musical instrument. You must take this skill separately for each type of instrument played. A skill of +4 or higher will qualify your character to play professional 'gigs'. A Skill of +8 and above will gain some professional acclaim, possibly with recording contracts and command performances. At +10, you are widely acclaimed, have lots of Grammy’s, and regularly jam with the very best.",
    }, {
        skill: "Interrogation",
        stat: "COOL",
        description: "When you ask someone question, trick him into telling you what you want to know easy way or hard way. Also useful to figure out if someone is lying to you.",
        oldDescription: "The skill of drawing information from subject and forcing his secrets into open An Interrogation of +2 or better will allow to infallible find out if your boyfriend is lying to you. A +5, you are professional level interrogator - equivalent to skilled detective grilling a suspect. Mike Wallace 60 Minutes has an Interrogation +9, allowing him to make even most powerful people squirm.",
    }, {
        skill: "Interview",
        stat: "EMP",
        description: "When you ask someone question, trick him into telling you what you want to know without alerting them. Also useful to figure out when someone is lying to you.",
        oldDescription: "The skill of eliciting interesting anecdotes from interview subject. This information will be of a more non-specific and personal nature rather than specific knowledge (distinguishing this skill from the skill Interrogation, where the user is trying to extract exact information. (Example: Barbara Walters interviews, Mike Wallace interrogates). At +3 or better, the subject will usually tell you only information relating to what he/she is well known for. At +6 or better, the subject will tell you anecdotes about the past, pontificate about favorite interests and philosophies, etc. At +9 or better, he/she tells you everything - including personal information about their illegitimate son, the time they stole a cookie at age +4, and the fact that no one ever loved them.",
    }, {
        skill: "Intimidation",
        stat: "COOL",
        description: "Scare people into doing whatever you demand from them.",
        oldDescription: "The skill of getting people to do what you want by forcing personality or physical coercion. At +3, you can frighten almost any typical citizen, politician or low-level thug. At +6, you can intimidate Sylvester Stallone or any moderate 'tough guy'. At +9, you could intimidate Arnold Schwarzenegger. Every point of a characters ATTR below 5 on gives a +1 to Intimidation.",
    }, {
        skill: "Language (Type)",
        stat: "INT",
        description: "There are many languages, both those that are still in use as well as those that are not. You can choose any language, even those that are created for blind or deaf (read lips if person still has lips) people. At 8 points you speak and/or read like a native.",
        oldDescription: "The knowledge of foreign tongue. At +2, you can 'get by' with speaking the language. At +3, you can actually read a written from of it. At +6 and above, you are fairly fluent, although no naive will be fooled by your ability. At +8 and above, you speak and read language like a native. Each language known requires a separate Know Language Skill (see list of languages), however, one may use the knowledge of a particular Language with up to half (round down) proficiency with any language in the same linguistic family (example: knowing Cantonese at +4 will give you the ability to understand and speak Mandarin at +2). Basic language has no alphabet, and is usually is only able to express simple ideas in grunts and gestures. Primitive language is not written, but can be advanced and able to express complicated ideas and thought.",
    }, {
        skill: "Ledership",
        stat: "EMP",
        description: "Ability to lead and or command respect from people around you. Incite action, raise spirits or make cooler heads prevail.",
        oldDescription: "The skill of leading and convincing people to follow you. A leader with a skill +2 can manage a small office successfully and be respected for it. A leader with skill +4 or better can lead a small band of troops into battle and not get backshot. A leader with a skill of +7 or better can lead the entire Gamelon Empire into battle and look good doing it.",
    }, {
        skill: "Macro-Economy",
        stat: "INT",
        description: "Knowladge of general economic forces, trends and events. Understand what is going on and what to expect from known data, like is economy healthy, how to fix it and what are signs or a recovery or how to recognise what is destroying it. It also helps to know what economic events happened in the past and who was responsible for them.",
        oldDescription: "The ability to read the stock market for fluctuations, enabling a trader to recognize the right time to buy and sell commodities. It also allows a character to know what is in demand, and recognize current trends in consumer habits and requirements.",
    }, {
        skill: "Martial Arts (Type)",
        stat: "REF",
        description: "Use your body as a trained weapon, probably from your master. Chosen martial art skill level is added to your attack damage as an attack modifier.",
        oldDescription: "This skill covers any type of trained fighting style using hands, feet, or specialized 'martial arts' weapons. You must elect a style of martial art and take a separate skill for each style (for example, you would have to take Karate and Judo separately, spending points for each one. Difficulty modifiers are listed in () next tot each skill listed below. The primary advantage to martial arts styles is that each one has what are called key attacks; attacks that reflect particular strengths of style. When a key attack is used, there is to-hit bonus based on the attack type and martial arts style. A full table of key attacks is listed in Martial Arts. The second advantage to martial arts styles is that there is a damage bonus on attacks equal to half the level of the Martial Arts skill; for example, a master with a +10 Kung Fu Skill would add 5 points to his damage. This can be formidable advantage, although bludgeoning head strikes do NOT double damage.",
    }, {
        skill: "Mathematic",
        stat: "INT",
        description: "The field of abstract data relations. Know how to sum and subtract more than one and one without asking for an answer on the web, be able to solve advanced formula and do so correctly or understand many competing mathematical theories as well as you know your axioms (which ones do you agree with?).",
        oldDescription: "The skill of understanding calculations and mathematical formulas. At +3 you have the ability to add, subtract, divide and multiply. At +4, you can do algebra and geometry. At +6, you can perform calculus. At +9 you can deduce your own mathematical formulas.",
    }, {
        skill: "Medicine",
        stat: "INT",
        description: "It is great when everything works just as billions of years of evolution intended. But sometime it doesn't. Or you wish it wouldn't. When that happens, draw on your wast knowladge of people to know how to fix or break their fragile, constantly decomposing and hotfixing bodybags.",
        oldDescription: "The skill of clinically diagnosing symptoms and medical problems. A +3 is the equivalent of a high school nurse - you can recognize most common injuries and complaints. At +6, you would be equivalent to a trained intern; you can recognize many uncommon illnesses and know how to treat most common ones. A +9 is equivalent to you to get a diagnosis.",
    }, {
        skill: "Melee Weapons",
        stat: "REF",
        description: "How well you wield knives, swords, axes, clubs, but also melee cyberweapons (not including those that do damage but can not be used as a weapon, like fangs).",
        oldDescription: "Brawling is the skill of fighting man to man with fist, feet and other parts of the body, it also covers Melee which is the ability to use knives, axes, clubs and other hand to hand weapons in combat. Brawling is not a trained skill - it is the basic skill of defending oneself. Unlike Martial Arts, there are no specialized attacks and no damage bonus per level. It does allow for all the same maneuvers as a Martial art, but provides no bonus to any of them. If the character has the Savage Role, he may add +1 per level of Rampage to Brawl/Melee damage.",
    }, {
        skill: "Micro-Economy",
        stat: "INT",
        description: "Knowladge on how to run an organization. It can be a simple understanding of profits, expenditure and revenue or understanding of relevant laws, practices, players and how to recognize, disrupt or profit from trends.",
        oldDescription: "The ability to read the stock market for fluctuations, enabling a trader to recognize the right time to buy and sell commodities. It also allows a character to know what is in demand, and recognize current trends in consumer habits and requirements.",
    }, {
        skill: "Motorcycle",
        stat: "REF",
        description: "Drive your motorcycle, cyberbike or a simmilar 1 to 3 wheeled vehicle as know as general knowledge about traffic and your ride.",
        oldDescription: "The required skill to operate motorcycles, and other two and three-wheeled vehicles.",
    }, {
        skill: "Motorcycle Tech",
        stat: "TECH",
        description: "Know how and experiences with maintaining, fixing, designing or building motor vechiles on 1, 2 or 3 wheel.",
        oldDescription: "(Look any Tech)",
    }, {
        skill: "Nano Tech",
        stat: "TECH",
        description: "Nanotech can fall into many categories, but usually you just need to know how to produce, storage and funally apply them. It can be somewhat hard to get rid of nanites, but you can include special markers or nanoswitches that will make working with nanomachines much easier.",
        oldDescription: "(Look any Tech)",
    }, {
        skill: "Nature Survival",
        stat: "INT",
        description: "How to survive in the wilds. Where to find food, water, how to hunt, cook, find shelter and in general not die the moment your NET connection stops working. Very useful in accidents, adventuring, hiding in the middle of nowhere, but somewhat less in the city.",
        oldDescription: "The required skill for knowing how to survive in a given environment such as Wilderness, Jungle, Desert, Arctic, Urban, Sea, Underwater, Space. Typical applications include how to forage for wood, build shelters, what plants are safe to eat, what to do in an emergency, and make fires. The average Boy Scout has a Survival of +3. A Special Forces Green Beret has a Survival of +6 or above. Grizzly Adams, Mountain Man of the Wilderness, would have +9 or +10 Survival Skill. While each environment is its own skill, you can use your chosen survival at half its level in other environments at the GM’s discretion determined by similarity of environment. (Example Wilderness Survival would allow the character to use half his skill in a Jungle or Urban environment, while Space or Desert would provide no bonus at all)",
    }, {
        skill: "NET Knowledge",
        stat: "INT",
        description: "Internet of Cyberpunk univers is divided and diverse place and not many people have a grasp of what is going on with it. But you do ... maybe. How does it work, how is it divided, who owns parts or it and how is it protected. NET is a game and you know the rules, players and playboard.",
        oldDescription: "Basic knowledge of the geography of the Net, it's lore and history, as well as knowledge of the important computer systems, their strengths and their weaknesses. At +2, you can generally navigate around the Net and know where all the local places are. At +6, you know the locations of most places in the Net, and have a working understanding of its largest and most well know systems. At +9, you know the entire Net like the back of your hand, know the general layouts of the important systems cold, and are aware of the layouts for the rest of them. This is a required skill for Hacking/Netrunning.",
    }, {
        skill: "Oratory",
        stat: "COOL",
        description: "When you speak to the public or perform a speach, how likely do you touch their hearts and minds. Do they listen to you or do they ignore you, fall asleep or even feel insulted by your lacking words and gestures.",
        oldDescription: "The skill of public speaking. At +2, you can wing high school contests. At +6, you can be paid speech in public. At +10, you are capable of delivering a speech to rival Kennedy's 'Ichn Bin Ein Berliner' or Lincoln's Gettysburgs Address. Rockers with Oratory Skill of +6 or better can add +1 when using their Charismatic Leadership ability. This also covers the use of Rhetoric.",
    }, {
        skill: "Paint",
        stat: "TECH",
        description: "Paint or draw, maybe for your soul, maybe for your social network, maybe to be sold for profit, it does not matter, your creations come to life faster and more majestic.",
        oldDescription: "The skill of producing professional drawings. A skill of +3 allows you to produce salable 'modern' art. A Skill of +6 will produce artwork that is recognized end extremely pleasant to eye - as well as salable. An artist with a Skill of +8 or greater will be nationally known, have exhibitions in galleries, and have other lesser artists studying his style in art.",
    }, {
        skill: "Paleontology",
        stat: "INT",
        description: "Knowladge on pre-written history of the planet and practices on how to uncover it. You can choose a time period or (no more) living organism as your fascination or study focus and be more knowledgable about it or you could stay generalist and know more about everything.",
        oldDescription: "(Look Expert)",
    }, {
        skill: "Perform",
        stat: "EMP",
        description: "Your ability to make something ordinary into something memorable or to convince someone to find meaning in your art.",
        oldDescription: "The skill of trained acting, singing, etc. A trained performer of +4 or greater can successfully perform on stage for payment at small theaters or bit parts in film or television. Performers of +6 or greater will be considered to be of professional caliber, and may have lucrative contacts and fans. Performers of +9 or greater are of 'star': caliber, have a large number of fans, and may be recognized on the street.",
    }, {
        skill: "Persuasion",
        stat: "EMP",
        description: "Convince someone into seeing the world the way you want them to see it or to do something they are reluctant about if not openly opposed.",
        oldDescription: "The ability to talk others into doing what you want. This may be used individually or on large groups. At +3, you can win most debates or convince your girlfriend the blonde you were with was your sister. At +5, you are a smooth talker of professional caliber. Ronald Reagan had a Persuasion of +7, Hitler a Persuasion of +9.",
    }, {
        skill: "Photography",
        stat: "TECH",
        description: "Capture the world or maybe the mood of the world with a picture. First know how not to screw up with wrong settings, make sure the moment is perfect and then let the technology do its magic. Also usefull for professional photographers or old-school reporters.",
        oldDescription: "The skill of producing professional caliber photographs or video. A skill of +2 allows you to make decent home movies. A Skill +4 or better creates work capable of winning amateur contests. A Skill of +6 or better will produce work of the level of the average magazine cover or rock video. A photographer or cinematographer with a Skill of +8 is known and probably famous.",
    }, {
        skill: "Physics",
        stat: "INT",
        description: "Knowladge of universal physical processess that rule the world, like what are elctromagnetic particles and how do they work, how gravity works or how different materials tend to behave under different general conditions and how to calculate them, like when you trow a ball, where to expect for it to land. For extremly large or small physical scales you might instead want to create astrophysics or quantum mechanic skill.",
        oldDescription: "The ability to calculate physical principles, such as gas pressures, mechanical energies, etc. This skill requires a basic Mathematics Skill of +4.",
    }, {
        skill: "Pilot (Type)",
        stat: "REF",
        description: "Pilot one of an aircraft types (rotorcraft, fixed wing, vectored thrust) as well as general knowledge on traffic and safety standards for it.",
        oldDescription: "In general, this is the skill of controlling aircraft. Aircraft are broken into categories: Gyro and Rotorcraft, Fixed Wing Aircraft, Dirigibles and Vectored Thrust Aerodynes (AV-s). A Piloting Skill od +1 allows you to take of and land safely in good weather conditions. A Piloting skill of +3 or more makes you a trained pilot, able to engage in most combat situations or bad weather. Pilots with a Skill of +6 or greater are veterans pilots, able to handle themselves in almost any situation, including aerobatic manuevers. Pilots with a Skill of +9 or greater are so good, they have a rep as pilots, and are widely known among the piloting fraternitiy for having the 'right stuff'.",
    }, {
        skill: "Programming",
        stat: "INT",
        description: "Recognize computer code and hope it is one of those you know or at least similar enough for you to read or even write in it. Deeper you programming knowladge, more languages you know as well as their many quirks, which programs are best to work on them and how best to use your work. Maybe some day you might even create your own language, language library. And why stop with programs, while you are at it, write your own OS! Make those who would want to hack you cry!",
        oldDescription: "The required skill to write programs and re-program computer system. This skill does not allow players to actually do repairs on a computer (this requires Electronics). With a Programming Skill of +1, you can do simple E-BASIC programs. A Programming Skill of +3 or better allows you to know some higher level languages and he able to write reasonably complex programs (including video games). Players with Programming Skill +6 or better are considered to be professionals, who can build operating software, design mainframe systems, and hold down a steady job at your average Silicon Valley firm. With a Programming Skill of +9 or better, other programmers speak your name with reverence ('You invented Q? Wow!'), young hackers set out to crack your systems, and any computer software you design instantly gets used by every business application in wide world. This is a required skill for Hacking/Netrunning.",
    }, {
        skill: "Psychology",
        stat: "INT",
        description: "Don't just observe what people do, study and therefore understand them. Gives you an research-based understanding of individuals around you.",
        oldDescription: "(Look Expert)",
    }, {
        skill: "Repairman",
        stat: "TECH",
        description: "General skill for repairing, meintaining and cleaning many different parts of your home, like a computer, car, dishes, furniture, floors etc.",
        oldDescription: "The required skill for building or repairing simple mechanical and electrical devices, such as car engines, Toasters, etc... With a Basic Tech Skill of +3, or better, you can fix minor car problems, repair basic wiring, etc. A Basic Tech Skill of +6 or better can rebuild an engine, etc. A Basic Tech Skill of +9 or better can put together a race car engine, and maintain industrial machinery. However, they do not know enough specialized knowledge to apply it to complex things such as aircraft (just like Mr. Goodwrench) doesn't know how to build and service an F-16).",
    }, {
        skill: "Resist",
        stat: "COOL",
        description: "Resist pain and hardship with your willpower over a period of time. Also knowladge on how best to keep going when your body is starting to fail.",
        oldDescription: "Characters with this skill are especially toughened against interrogation, torture and mind control drugs. A successful use of this skill will automatically increase the difficulty of any Interrogation attempt made by another guy by one level.",
    }, {
        skill: "Rifles",
        stat: "REF",
        description: "How well do you target with a rifle as well as general knowledge on how to use and maintain it.",
        oldDescription: "You must have this skill to use rifle/shotguns effectively (see Handgun limitations and modifiers).",
    }, {
        skill: "Robot Tech",
        stat: "TECH",
        description: "Know how and experiences with maintaining, fixing, designing or building a robot, drone or otherwise authonomous or mostly autonomous techology.",
        oldDescription: "(Look any Tech)",
    }, {
        skill: "Rotorcraft Tech",
        stat: "TECH",
        description: "Know how and experiences with maintaining, fixing, designing or building aircraft with rotors, like helicopters and girokopterji ter ciklopadi.",
        oldDescription: "The skill or repairing and maintaining rotorwing aircraft such as helicopters and ospreys.",
    }, {
        skill: "Search",
        stat: "INT",
        description: "How to find what is hidden, lost or how to track something that wishes to hide. Use your knowledge of subtle clues, suspect databases and trackind equipement to find what you are looking for. It is also a general understanding on how to evade someone or hide from something.",
        oldDescription: "The skill of shadowing/following people. This skill is used in urban/inhabited areas rather than in the wilderness (where the skill Survival incorporates tracking game in the wild).",
    }, {
        skill: "Search Database",
        stat: "INT",
        description: "Knowedge on how to search libraries or organised data structures both in physical and virtual world. Know where to start and how to recognise what you are looking for as well as how to properly (or unproperly) extract it. Especially useful if you want to finish your task in minumal amount of time.",
        oldDescription: "The skill of using databases, DataTermsTM, libraries and other compiled information sources to find facts. With a skill of +2 you can use most simple databases. With a skill of +6, you can easily access the Library of Congress. At +9, you can comprehend near any public databases and find very obscure facts.",
    }, {
        skill: "Seduction",
        stat: "EMP",
        description: "Form (and maintain) romantic relationship. Be erotic instead of obscene. Know not only how to love, but to make love. Flirt away Romeo!",
        oldDescription: "The skill of forming and maintaining romantic relationships (this includes your abilities as a lover). This skill may be used to determine whether or not players can form relationships with other non-players characters and the intensity of these relationships. Every point of a characters ATTR over 6 gives a +1 modifier to seduction.",
    }, {
        skill: "Singing",
        stat: "EMP",
        description: "Use your voice to amaze those around you. It also helps to make sure you are not the only one who is enjoying your casual singing. It also helps if you want to be lauder or have a nice casual voice.",
        oldDescription: "The skill of trained acting, singing, etc. A trained performer of +4 or greater can successfully perform on stage for payment at small theaters or bit parts in film or television. Performers of +6 or greater will be considered to be of professional caliber, and may have lucrative contacts and fans. Performers of +9 or greater are of 'star': caliber, have a large number of fans, and may be recognized on the street.",
    }, {
        skill: "Social Awareness",
        stat: "EMP",
        description: "Notice honesty, lie, evasion, mood, opportunity and other social cues.",
        oldDescription: "The skill of detecting any evasions, moods and other emotional clues from others. At +2, you can usually feel when you're not getting the whole truth. At +6, you can detect subtle evasions and mood swings. At +8, you can not only detect subtle emotional clues, but can usually tell what the subject is hiding in a general way.",
    }, {
        skill: "Sociology",
        stat: "INT",
        description: "Psychology of masses, know what can be expected from groups of people and how to use that to your advantage.",
        oldDescription: "(Look Expert)",
    }, {
        skill: "Smart Security",
        stat: "TECH",
        description: "Install bugs, trackers, security cameras, electronic locks, pressure plates, pit traps ... or know how to counter them. While it helps to have a good Awareness, sometimes it is not enough to know door is trying to kill you, but also to get trough it without being successfully eliminated.",
        oldDescription: "The skill of installing or countering electronic eyes, electronic locks, bugs and tracers, security cameras, pressure plates, etc. At level +3, you can jimmy or install most apartment locks and security cams. At +6, you can override most corporate office locks and traps. At +9, you can enter most high security area with impunity.",
    }, {
        skill: "Stealing",
        stat: "TECH",
        description: "Once you get to the loot, how do you exctact it? If loot is in person's pocket, how to distract it? If it is in glass case, how to safely remove it? Once you get what you want, how to get away with it? It includes general knowledge on diverse stealing practices and their likelyhood of success.",
        oldDescription: "The required skill for picking pockets without being noticed, as well as 'shoplifting' small items. For ideas on levels of ability see Pick Lock. This also covers Sleight of Hand, the skill of making small objects disappear and re-appear by using misdirection, nimble hand and finger movements, and other tricks.",
    }, {
        skill: "Stealth",
        stat: "REF",
        description: "Move like a shadow, blend with your surrounding, move silently for efficiently, control your breathing and in general don't draw attention to yourself.",
        oldDescription: "The skill of hiding in shadows, moving silently, evading guards, etc. A Stealth Skill of +1 is about the level of a very sneaky 10 year old stealing cookies. At +3, you are able to get past most guards, or your parents if you've been grounded. At +6, you are good enough to slip smoothly from shadow and not make any noise. At +8, you are the equal of most Ninja warriors. At +10, you move as silently as a shadow, making the Ninja sound like elephants.",
    }, {
        skill: "Stock Market",
        stat: "LUCK",
        description: "Know everything there is to know about the beast called stock market. In its most basic form, it is a gamble as is always supposed to be knowlegre neutral, but with your above minimal knowledge you might try to gecognise trends or predict events to swing those odds your way ... or maybe just how to really ruin someone elses day. Hit them where it hurst the most and make sure you survive their fury.",
        oldDescription: "The ability to play the stock market, engage in routine stock transactions and manupulate stocks profitably. At +2, you know enough to invest in junk bonds and lose your shirt. At +6, your investment pay off 75% of the time. At +9, you are a major heavy on the Market, routinely dabble in international stocks, and can write learned articles on the subject of investment.",
    }, {
        skill: "Street Survival",
        stat: "EMP",
        description: "Know where it is safe and which streets are better to avoid, what not to ever ever do, where to get legal and illegal stuff or services and who to call when you need something.",
        oldDescription: "The knowledge of the 'seamy' ways of life - where to get illegal and contraband things, how to talk to the criminal environment, and avoiding bad situations in bad neighborhoods. With Streetwise of +3 or better, you can get 'hot' items, drugs, etc. With a Streetwise of +5 you know how to arrange a murder contract, you know a few mobsters who might owe you, and be able to call on muscle when you need it. At +8 or better, you could become a major crimelord yourself.",
    }, {
        skill: "Strength",
        stat: "BODY",
        description: "Crush, bend, lift, throw, rip and otherwise shape the world with your raw power.",
        oldDescription: "The user of this skill has practiced the art of bending bars, crushing objects, ripping phone books apart and other useful parlor tricks. At +3, no phonebook is safe, you can bend thin rebar, and snap handcuffs. At +10, you can bend prison bars, rip up the Gutenberg Bible, and dent car fenders with one blow. For every point of the Strength Feat skill, a character may modify his carry weight, dead lift weight , and his Throw distance by 5% in kg. Difficulty modifier for doing this successfully is 15, +3 for every 10% kg over what is normally allowed.",
    }, {
        skill: "Style",
        stat: "COOL",
        description: "To know what to wear, to know what not to wear and to know how to wear it. You have a taste and you make other people know it. It can help if you also have a decently sized and well stocked wardrobe.",
        oldDescription: "The skill of knowing the right clothes to wear, when to wear them, and how to look cool even in a spacesuit. With Wardrobe +2 or better, you are good at choosing clothes off the rack. At +6, your friends ask you for wardrobe tips, and you never buy anything off the rack. At +8 or better, you are one of those rare people whose personal style influences major fashion trends.",
    }, {
        skill: "Submachineguns",
        stat: "REF",
        description: "How well do you target with a SMG as well as general knowledge on how to use and maintain it.",
        oldDescription: "You must have this skill to use any type of submachine gun effectively (see Handgun for limitations and modifiers).",
    }, {
        skill: "Surgery",
        stat: "TECH",
        description: "Maybe someone just needs their wiggly tooth removed or maybe he would do well with a new heart or a hole less in the middle of an abdomen. In such cases surgeons and proper equipement are needed that know what is wrong, how to fix it and if they can do it. If you feel proper hospital environment is too restrictice towards your skills, maybe try to become a ripperdoc. Today new kidney, tomorrow two extra arms. Hell, with so much works, maybe YOU could use those two extra arms!",
        oldDescription: "The ability to cut into a living thing and remove, implant, or make repairs.",
    }, {
        skill: "Swimming",
        stat: "BODY",
        description: "Do not drown. Swim. Swim faster, deeper, longer.",
        oldDescription: "This skill is require to know how to swim.",
    }, {
        skill: "Teaching",
        stat: "INT",
        description: "Teach someone what you know. You can teach someone how to shot by saying 'aim with this part and do BAM BAM' or you can try to say something actually useful, maybe even adapt to their learning style. You can not teach what you do not know and you can teach only up to your teaching level. That said, even if you do not know something, having a great teacher around or knowing how best to teach yourself might help you learn faster than just reading same sentance in the book over and over again until you get it or give up.",
        oldDescription: "The skill of imparting knowledge to someone (if you don't think this is skill, you ought tot try is someone). Players may not teach any skill unless they have higher skill levels, in both teaching, and the skill(s) being taught, than the student. The training chart determines length of time it takes to teach a skill, though a truly gifted teacher may be able to do it faster or more effectively, at GM’s discretion. At a Teaching Skill of +3 or better, you can professionally teach students up to High School. At +6, you can teach at a college level. At +9 or greater, you are recognized by others in the field as good enough to guest lecture at MIT or Cal Tech; your texts on the subject are quoted as a major references. A successful teaching roll, will allow over the course of time, a student to raise a specific skill as if it were 1 level lower (ie to go from 5-6 will only cost as much IP as to go from 4-5).",
    }, {
        skill: "Vectored Thrust Tech",
        stat: "TECH",
        description: "Know how and experiences with maintaining, fixing, designing or building vectored thrust aircraft, like hovercopter, hoverboardi ter hoverpacki.",
        oldDescription: "The required skill for repairing all aerodyne vehicles. At +3, you can perform routine maintenance. At +6, you can tear down engines and modify an AV. At +10, you can design your own AV’s on common airframes.",
    }, {
        skill: "Weaponsmith (Type)",
        stat: "TECH",
        description: "Repair and maintain type of a weapon, modify it or even make your own weapon.",
        oldDescription: "The skill for repairing and maintaining weapons. At level +2, you can do repairs and field stripping. At level +6, you can repair all types of weapons and make simple modifications. At level +8 you can design your own weapons toorder.",
    }, {
        skill: "Zoology",
        stat: "INT",
        description: "You are an expert when it comes to recognize animals, where to find them, how to care for them, trivia about them and if they have a specific use.",
        oldDescription: "Knowledge of lifeforms, biological proecsses and their relation to the environment. At +2, you know most common animals. At +5, you know not only well known animals, but also about many exotics and endangered species. At +8, you are knowledgable on almost all animals, know their habits well, and have a +1 advantage to any Wilderness Survival Skills (you know whhere to find the game).",
    }];

    const abilityArr: Ability[] = [{
        ability: "Authority",
        stat: "COOL",
        description: "Gives bonus to COOL stat when appropriate. Interogate, arrest, search, confiscate, intimidate (and get away with it). You might still want proper documentation, but you are more able to convince people around you that your actions are backed by higher authority.",
        oldDescription: "This special ability is added to Interrogate and Intimidate. You uphold the law, you have the authority to arrest lawbreakers, question anything you find suspicious, and use force to protect yourself and others.",
    }, {
        ability: "Resources",
        stat: "INT",
        description: "Gives bonus to INT when appropriate. Command corporate resources, test how much is corporation willing to risk on your operations. It also determines your rank, from a new Employee to the CEO.",
        oldDescription: "This Special Ability adds to Networking and Business Sense. You are a company man, you are an expert at promoting and utilizing the resources your employer or business allows you. You are the Power Broker, the CEO, the VIP.",
    }, {
        ability: "Streetdeal",
        stat: "COOL",
        description: "Gives bonus to COOL when appropriate. FIX THIS PART!",
        oldDescription: "This Special Ability adds to both Streetwise and Persuasion/Fast Talk. You can get what people need, and you can get rid of it when they don't want it anymore. You are the go to guy, some do it legally, some don't, but regardless if someone wants something hard to find, they go to a Fixer to get it.",
    }, {
        ability: "Medical Tech",
        stat: "TECH",
        description: "Gives bonus to TECH when appropriate. Anyone can 'try' to help when bodyparts dislocate, but you have a know-how on how to prevent it ... or make it worse. It is a cyber world and your expertiese is not so much on biology as technology that is interacting with it.",
        oldDescription: "This special ability is added to First Aid and one other chosen Med Skill. You have devoted your life to healing others; the secrets of flesh and blood are open to you.",
    }, {
        ability: "Credibility",
        stat: "EMP",
        description: "Gives bonus to EMP when approptiate. Convince people into believing you, no matter if you are telling the truth. Higher level might make it easyer to convince more people, experts or authority figures to see the world the way you are presenting it.",
        oldDescription: "This special ability is representative of your credentials and reputation for honesty and integrity. It is added to the Medias Interview, and Composition. However, it is a tenuous skill that must be maintained through honesty and non-bias. For every serious case of bias, dishonesty, or false presentation of facts you committed made public, your Credibility will drop by a point of Skill. However, with individuals who hold the same political or social bias, your credibility will retain its full value. You find the facts and report them; your audience knows and respects you for your ability to tell them what is going on in the community and the world.",
    }, {
        ability: "Interface",
        stat: "TECH",
        description: "Gives bonus to INT when appropriate. Can use REF or INT for hacking and can replace Programming with Interface when using it. When connected, rolls have an advantage. Do not use a computer, become a computer with all advantages and disadvantages that brings with it.",
        oldDescription: "Netrunners may add this to their Programming, and System Knowledge, as they pertain to computers and communications. You have mastered computers and communications, you use them to infiltrate secure information, take over other machines, and cruise the hidden alleys and portals of the vast information highway.",
    }, {
        ability: "Family",
        stat: "EMP",
        description: "Gives bonus to EMP stat when appropriate. Ask for help from your 'family' and you might get it. It also determines your rank, from a New Face to Leader of the Pack.",
        oldDescription: "The Family special ability is added to your Networking and Survival. You are a member of an extended family, always on the move. You are one of your people, you live and die for them, and they for you. They are your strength and your weakness; the family and its needs always come first.",
    }, {
        ability: "Fandom",
        stat: "EMP",
        description: "Gives bonus to EMP stat when approptiate. Charm, incite, control up to '200 * skill' fans with your performance. They want to change the world? Point the way!",
        oldDescription: "This special ability is added to Oratory and Leadership. However this skill, similar to a Medias Credibility, is tenuous and if the rocker is perceived as betraying his own words or following a different agenda, his special ability will drop accordingly as he loses influence. You are a leader of the people. They listen to you and follow your leadership. You hold sway the hearts and minds of your followers, and attempt to convert those to your way of thinking everywhere you go. You hold influence, and you know how to use it.",
    }, {
        ability: "Combat Sense",
        stat: "REF",
        description: "Gives bonus to REF when approptiate. Gives bonus to Awareness and Initiative skills. Danger sense, notice traps, you are a profesional killer, act fast - hit the body-bag last.",
        oldDescription: "Adds to both Awareness and Initiative. This is the basic combat dedicated career; you make your living being the toughest, baddest guy around.",
    }, {
        ability: "Jury Rig",
        stat: "TECH",
        description: "Gives bonus to EMP when approptiate. Hot-fix or temporary disable something for '1d6 * skill' turns. When breaking, target must not oppose (be alert) towards your meddling.",
        oldDescription: "This special ability is added to your Jury Rig skill and one single Tech skill of your choice. Brilliant with all things mechanical in nature, you are more than a handyman, you are what keeps the gear functioning as well as building and creating the equipment necessary for any situation.",

    },];

    const roleArr: Role[] = [{
        job: "Cop",
        skill: "Authority",
        defSkill: ["Athletics", "Awareness", "Brawling", "Education", "Handguns", "Interrogation", "Melee Weapons", "Social Awareness", "Street Survival"],
        description: "More than your gun, your connections or your badge, you can count on the unknowable authority you represent, always able to serve justice, for the benefit of the society or maybe just for yourself.",
        oldDescription: "Maximum lawmen on mean 21st century street.",
    }, {
        job: "Corporate",
        skill: "Resources",
        defSkill: ["Awareness", "Education", "Etiquette", "Grooming", "Persuasion", "Search Database", "Social Awareness", "Stock Market", "Style"],
        description: "If money makes the world go around, you are one of those humbe creatures that keeps spinning it ... into whatever direction serves you best of course.",
        oldDescription: "Slick business raiders and multimillionares.",
    }, {
        job: "Fixer",
        skill: "Streetdeal",
        defSkill: ["Awareness", "Brawling", "Burglary", "Forgery", "Handguns", "Intimidation", "Melee Weapons", "Persuasion", "Stealing"],
        description: "There are people that in pursuit of money and power try to present themselves as law abiding citizens and there are you, who cares not about such frivolous things, getting information, goods and influence the way corporate overlords did not intend for you ... and this is just the way you like it.",
        oldDescription: "Deal makers, smugglers, organizers and information brokers.",
    }, {
        job: "Med Tech",
        skill: "Medical Tech",
        defSkill: ["Awareness", "Cryotank", "Education", "First Aid", "Medicine", "Repairman", "Search Database", "Social Awareness", "Zoology"],
        description: "If a body is nothing more than an organical machine, you are the one knowledgable in how to keep it together, give it a subtle (or maybe not so subtle) boost or poke it apart, whichever serves you and your interests best.",
        oldDescription: "Renegate mechanics and doctors.",
    }, {
        job: "Medias",
        skill: "Credibility",
        defSkill: ["Awareness", "Creativity", "Education", "Etiquette", "Film", "Interview", "Persuasion", "Social Awareness", "Street Survival"],
        description: "People want to see the world with their own eyes, but lacking resourses to do so, they need you, their eyes, ears, tongue, skin, their reliable truth-source of the world they live in and with so many eager minds listening to you, not being able to check, you are more than able to use or abuse the spotlight given to you, just another man wanting to get the truth out.",
        oldDescription: "Newsmen and reporters who go to the wall for the truth.",
    }, {
        job: "Netrunner",
        skill: "Interface",
        defSkill: ["Awareness", "Cyber Tech", "Education", "Electronic Tech", "Hacking", "NET Knowledge", "Programming", "Repairman", "Search Database"],
        description: "You turned your brains into just another chip of the .NET, maybe just for fun, maybe because you needed a new home, now able to whisper to the electronic abyss and sometimes you could swear you can hear something whispering back.",
        oldDescription: "Cybernetic computer hackers.",
    }, {
        job: "Nomad",
        skill: "Family",
        defSkill: ["Athletics", "Awareness", "Brawling", "Driving", "Endurance", "Melee Weapons", "Nature Survival", "Repairman", "Rifles"],
        description: "Some people see institutions, corporations, countries and what they acknowledge is money and guns and stuff, but you know what really keeps them going ... willingness to work together, which is exactly what you do, not tied to anyone but your community of misfits, roaming places, living from day to day ... and annihilating anyone who would put you or those you relly upon in danger!",
        oldDescription: "Road warriors and gypsies who roam the highways.",
    }, {
        job: "Rocker",
        skill: "Fandom",
        defSkill: ["Awareness", "Brawling", "Creativity", "Instrument (Type)", "Perform", "Persuasion", "Seduction", "Street Survival", "Style"],
        description: "Rebel performers who use art, ideas and personal brand to challenge those who would believe themselves to be untouchable in their orbital stations ... but you know that the same world that gave birth to them is able to take it all away in the shape of an outraged mass, tearing it all down, down, down to the earth they came from.",
        oldDescription: "Rebel rockers who use music and revolt to fight authority.",
    }, {
        job: "Solo",
        skill: "Combat Sense",
        defSkill: ["Athletics", "Awareness", "Handguns", "Martial Arts (Type)", "Melee Weapons", "Rifles", "Stealth", "Submachineguns", "Weaponsmith (Type)"],
        description: "You are one of those people who grew so accustomed to the violence of this world you became specialized in it.",
        oldDescription: "Hired assassins, bodyguards, killers, soldiers.",
    }, {
        job: "Techie",
        skill: "Jury Rig",
        defSkill: ["Awareness", "Cyber Tech", "Education", "Electronic Tech", "Repairman", "Smart Security", "Teaching"],
        description: "Technology this world is build upon is beyond most people's compehension, but not you, whose life became dedicated in being able to cut the belly of the beast wide open ... or even stitch together what might be seen broken beyond repair.",
        oldDescription: "Renegate mechanics and doctors.",
    }];

    const fightArr: Rule[] = [{
        title: "Weapon range",
        subtitle: "Attack",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`Every weapon has a range that can be modified given circumstances.`}<br /><br />{`Here is a list of 'long ranges' (most relevant):`}<br />{`Melee weapon 1 m`}<br />{`Throwing weapon 10m x BODY (-10 m/kg if over 1 kg)`}<br />{`Handgun and Shotgun 50 m`}<br />{`Submachinegun 150 m`}<br />{`Rifle 400 m`}<br /><br />{`Here is a list of how this translated into a hit DC:`}<br />{`Point Blank (1 m or less) DC 10`}<br />{`Close (1/4 of Long) DC 15`}<br />{`Medium (1/2 of Long) DC 20`}<br />{`Long DC 25`}<br />{`Extreme (2x of Long) DC 30`}</>,
        oldContent: "N/A"
    }, {
        title: "Immobile Modifier",
        subtitle: "Modifier",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`+4 to Hit`}</>,
        oldContent: "N/A"
    }, {
        title: "Dodging Modifier",
        subtitle: "Modifier",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`-2 to Hit`}</>,
        oldContent: "N/A"
    }, {
        title: "Moving Target Modifier",
        subtitle: "Modifier",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`Moving target's REF > 6 -> -1`}<br />{`Moving target's REF > 8 -> -2`}<br />{`Moving target's REF > 10 -> -3`}<br />{`Moving target's REF > 12 -> -4`}<br />{`Moving target's REF > 14 -> -5`}<br />{`Etc. ...`}</>,
        oldContent: "N/A"
    }, {
        title: "Rush Modifier",
        subtitle: "Modifier",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`-3 to Hit`}</>,
        oldContent: "N/A"
    }, {
        title: "Ambush Modifier",
        subtitle: "Modifier",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`+5 to Hit.`}</>,
        oldContent: "N/A"
    }, {
        title: "Aim Body Part Modifier",
        subtitle: "Modifier",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`-4 to Hit`}</>,
        oldContent: "N/A"
    }, {
        title: "Indirect Modifier",
        subtitle: "Modifier",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`-5 to Hit`}</>,
        oldContent: "N/A"
    }, {
        title: "Blinded or Obscured Modifier",
        subtitle: "Modifier",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`-3 to Hit, can be lower or higher based on the severity`}</>,
        oldContent: "N/A"
    }, {
        title: "Outlined Modifier",
        subtitle: "Modifier",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`+2 to Hit`}</>,
        oldContent: "N/A"
    }, {
        title: "Two Weapon Fighting Modifier",
        subtitle: "Modifier",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`-3 to Hit to both weapons`}</>,
        oldContent: "N/A"
    }, {
        title: "Fire Running Modifier",
        subtitle: "Modifier",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`-2 to Hit, only works when Run is active that turn`}</>,
        oldContent: "N/A"
    }, {
        title: "Unusual Targeting Modifier",
        subtitle: "Modifier",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`-2 to Hit`}</>,
        oldContent: "N/A"
    }, {
        title: "Mounted Weapon Modifier",
        subtitle: "Modifier",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`+2 to Hit`}</>,
        oldContent: "N/A"
    }, {
        title: "Vehicle Mounted Modifier",
        subtitle: "Modifier",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`-4 to Hit, -2 if combined with (Turret) Mounted Weapon`}</>,
        oldContent: "N/A"
    }, {
        title: "Large Target Modifier",
        subtitle: "Modifier",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`+4 to Hit, 2x your size or more`}</>,
        oldContent: "N/A"
    }, {
        title: "Small Target Modifier",
        subtitle: "Modifier",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`-4 to Hit, 1/2 your size or less`}</>,
        oldContent: "N/A"
    }, {
        title: "Tiny Target Modifier",
        subtitle: "Modifier",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`-6 to Hit, 1/4 your size or less`}</>,
        oldContent: "N/A"
    }, {
        title: "Aiming Modifier",
        subtitle: "Modifier",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`+1 to Hit`}</>,
        oldContent: "N/A"
    }, {
        title: "Upgraded Sight Modifier",
        subtitle: "Modifier",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`Laser Sight: +1 to Hit`}<br />{`Targeting Scope: +1 to Hit`}<br />{`Telescopic Sight: +1 to Medium and Long range, +2 to Extreme range`}<br />{`Smart Googles: +2 to Hit`}</>,
        oldContent: "N/A"
    }, {
        title: "Three Round Burst Modifier",
        subtitle: "Modifier",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`+3 to Hit on Close na Medium range (autohit on Point Blank if not a Fumble)`}</>,
        oldContent: "N/A"
    }, {
        title: "Full Auto Fire Modifier",
        subtitle: "Modifier",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`+1 to Hit for every 10 rounds on Close or less`}<br />{`-1 to Hit for every 10 rounds on Medium or more`}</>,
        oldContent: "N/A"
    }, {
        title: "Pistol (PISTOL)",
        subtitle: "Weapon",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`Use with Pistol skill. Single shot or semiautomatic weapon which may be accurately fired with one hand.`}</>,
        oldContent: "N/A"
    }, {
        title: "Submachinnegun (SMG)",
        subtitle: "Weapon",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`Use with Submachinegun skill. Weapon which may fire either automatically or semi-automatically, using only pistol ammunition.`}</>,
        oldContent: "N/A"
    }, {
        title: "Shotgun (SHOTGUN)",
        subtitle: "Weapon",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`Use with Shotgun skill. Weapon which fires pellets or other small particles instead of a solid projectile.`}</>,
        oldContent: "N/A"
    }, {
        title: "Rifle (RIFLE)",
        subtitle: "Weapon",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`Use with Rifle Skill. Weapon that needs to be handled with both hands and specializes in up to 400 m range fire.`}</>,
        oldContent: "N/A"
    }, {
        title: "Sniper Rifle (SNIPER)",
        subtitle: "Weapon",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`Use with Sniper skill or 'Rifle skill / 2' rounded down. Single shot or semiautomatic weapon which needs to be handled with both hands and specializes in over 400 m range fire. Sniper has a different range DCs than other weapons: Point Blanc DC 10, Close DC 30, Medium DC 15, Long DC 20, Extreme DC 25.`}</>,
        oldContent: "N/A"
    }, {
        title: "Heavy Weapon (HEAVY)",
        subtitle: "Weapon",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`Might be used with Heavy weapon skill or maybe with more specialized skill. Weapon that usually needs to be placed on the ground or handled with great care to be used properly.`}</>,
        oldContent: "N/A"
    }, {
        title: "Melee Weapon (MELEE)",
        subtitle: "Weapon",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`Any weapon that needs to be held in hand or both hands and works only in Point Blank range (except if thrown) to be used properly.`}</>,
        oldContent: "N/A"
    }, {
        title: "Other Weapon (OTHER)",
        subtitle: "Weapon",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`Any other type of a weapon. You might need to learn a special skill in order to use such a weapon.`}</>,
        oldContent: "N/A"
    }, {
        title: "Weapon Code",
        subtitle: "Weapon",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`- NAME -`}<br />{`- TYPE -`}<br />{`- ACCURACY (ACC) -`}<br />{`- CONCEALABILITY (CON) -`}<br />{`- AVAILABILITY (AV) -`}<br />{`- DAMAGE & AMMUNITION (DMG & AMMO) -`}<br />{`- NUMBER OF SHOTS (NOS) -`}<br />{`- RATE OF FIRE (ROF) -`}<br />{`- RELIABILITY (REL) -`}<br />{`- COST -`}</>,
        oldContent: "N/A"
    }, {
        title: "Accuracy (ACC)",
        subtitle: "Weapon",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`Accuracy of fire that is dependent on the quality of a weapon or its other properties.`}</>,
        oldContent: "N/A"
    }, {
        title: "Concealability",
        subtitle: "Weapon",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`The ease with which weapon can be hidden on your person from being noticed or found. When you are being searched or when searching someone else, roll Hide skill vs. Awareness skill (or other appropriate skill) and add -5 to Hide for every Concealability level over its Concealability level. For weapon to be concealed, an attempt has to be made to conceal it. If attempt is performed poorly or with great care advantage or disadvantage might also apply.`}</>,
        oldContent: "N/A"
    }, {
        title: "Availability",
        subtitle: "Weapon",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`How easy or hard it is to find the thing you are looking for.`}<br />{`Common - Easy to find. - COM`}<br />{`Uncommon - Hard to find, probably at specilized stores. - UNCO`}<br />{`Rare - Lucky find, black market, limited stock, military-grade, might be illegal. - RARE`}<br />{`Special - One of a kind, special military issue, self-made masterpiece, if not probably very illegal, valuable or at least very experimental. - SPEC`}</>,
        oldContent: "N/A"
    }, {
        title: "Damage & Ammunition",
        subtitle: "Weapon",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`How much damage weapon causes per hit and and what ammunition it uses (if any) to continue to fire.`}</>,
        oldContent: "N/A"
    }, {
        title: "Number of Shots (NOS)",
        subtitle: "Weapon",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`How many shots are can be held in a standard clip, magazine or quiver for the weapon type before they run out.`}</>,
        oldContent: "N/A"
    }, {
        title: "Rate of Fire (ROF)",
        subtitle: "Weapon",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`How many shots the weapon can fire at its maximum per Round (you may not double ROF by using multiple Actions).`}</>,
        oldContent: "N/A"
    }, {
        title: "Reliability",
        subtitle: "Weapon",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`How reliable or unreliable the weapon is.`}<br />{`Very Reliable - VER`}<br />{`Reliable - REL`}<br />{`Unreliable - UNR`}</>,
        oldContent: "N/A"
    }, {
        title: "Weapon Cost (Cost)",
        subtitle: "Weapon",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`How much does it cost. Cost for most weapons can be guessed from comparison with similar weapons, but might be influenced with a local economy, seller's greed, favoritism or strategy, rarity, illegality, buyer's desire etc..`}</>,
        oldContent: "N/A"
    }, {
        title: "Armor Code",
        subtitle: "Armor",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`- NAME -`}<br />{`- TYPE OF PROTECTION (TOP) -`}<br />{`- AVAILABILITY (AV) -`}<br />{`- COVER -`}<br />{`- STOPPING POWER (SP) -`}<br />{`- ENCUMBERANCE (EN) -`}<br />{`- COST -`}</>,
        oldContent: "N/A"
    }, {
        title: "Type of Protection (TOP)",
        subtitle: "Armor",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`Armor might be vulnerable or extra resistent if not immune to certain types of damage, most common being the vulnerability to cuts (%). When not obvious, such vulnerability is best to be defined in advance. If not, it is pressumed it is using a standard armor protection.`}</>,
        oldContent: "N/A"
    }, {
        title: "Availability (AV)",
        subtitle: "Armor",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`How easy or hard it is to find the thing you are looking for.`}<br />{`Common - Easy to find. - COM`}<br />{`Uncommon - Hard to find, probably at specilized stores. - UNCO`}<br />{`Rare - Lucky find, black market, limited stock, military-grade, might be illegal. - RARE`}<br />{`Special - One of a kind, special military issue, self-made masterpiece, if not probably very illegal, valuable or at least very experimental. - SPEC`}</>,
        oldContent: "N/A"
    }, {
        title: "Armor Cover",
        subtitle: "Armor",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`Which parts of the body it covers. Main parts are: 1 Torso, 2 Arms, 2 Legs and 1 Head. If there are more or less than predicted limbs or body plan is different, GM decides what rules would apply in the event of a combat. Under some circomstances special rules might apply, like if someone is using a helmet and it has a knife placed on their throat, COVER and SP of a helmet will not apply.`}</>,
        oldContent: "N/A"
    }, {
        title: "Stopping Power (SP)",
        subtitle: "Armor",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`The ability of an armor to stop the projectile or in some other way reflect or prevent the damage. When calculating damage, subtract SP from the per-hit-damage. If SP is larger than the damage, damage is not applied. If SP is the same as damage, damage is not applied, but SP drops by 1. If SP is lower than the damage, SP drops by one and difference is applied to the next armor layer or body part until damage drops to 0 or body part is damaged.`}</>,
        oldContent: "N/A"
    }, {
        title: "Encumberence (ENV)",
        subtitle: "Armor",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`It determines if equiping the armor part lowers your REF Stat while armor is equiped.`}</>,
        oldContent: "N/A"
    }, {
        title: "Armor Cost (Cost)",
        subtitle: "Armor",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`How much does it cost. Cost for most armors can be guessed from a comparison with similar types of armor, but might be influenced with a local economy, seller's greed, favoritism or strategy, rarity, illegality, buyer's desire etc.. The exception are armors that are not used as such (their value might lie in their look, brand etc.) but can provide protection when worn.`}</>,
        oldContent: "N/A"
    }, {
        title: "Area Effect Table",
        subtitle: "Attack",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`Granade - 5 m`}<br />{`Motolov - 2 m/l`}<br />{`Flamethrower - 2m`}<br />{`Cyberlimb flamethrower - 1 m`}<br />{`Mine - 2 m`}<br />{`Claymore - 6 m (line)`}<br />{`C-6 - 5 m/kg`}<br />{`RPG - 4 m`}<br />{`Missile - 6 m`}<br />{`Shotgun (Close, Medium, Long & Extreme) - 1, 2, 3 m`}<br />{`Micromissile - 2 m`}</>,
        oldContent: "N/A"
    }, {
        title: "Throw Landing Table",
        subtitle: "Attack",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`When you miss, roll d10. It lands / explodes in that direction d10 m away.`}<br />{`10`}<br />{`7 - 8 - 9`}<br />{`5 - TARGET - 6`}<br />{`2 - 3 - 4`}<br />{`1`}</>,
        oldContent: "N/A"
    }, {
        title: "Harmful Substances",
        subtitle: "Attack",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`If substance is not harmful, effect persists till exposure ends unless stated otherwise. If substance is harmful, Dmg next turn is the same if body is wounded (like by acid or lava), but halved (down) if body was not wounded (viral, bio-agent, gas) until exposure to concentration ends if not stated otherwise.`}<br />{`Hallucinogen - Confusion - -4 INT`}<br />{`Nausea - Illness - -4 REF`}<br />{`Teargas - Tears & Breathing problems & Red Eyes - -2 REF`}<br />{`Sleep Drugs - Sleep (or drowsiness, -2 to Stats) - NONE`}<br />{`Biotoxin I - Dying - 4d6 Dmg`}<br />{`Biotoxin II - Dying - 8d6 Dmg`}<br />{`Nerve Gas - Dying - 8d10 Dmg`}</>,
        oldContent: "N/A"
    }, {
        title: "Microwave Effects",
        subtitle: "Attack",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`Microwaves might cause cyberware to malfunction. When unproperly protected cyberware is exposed, roll for effect type for each character.`}<br />{`1 - Cyberoptic shorts 1d6 turns.`}<br />{`2 - Neural pulse causes interface plugs, reflex boosts etc. to bug out, reducing REF by 1d6/2 (up) until repaired or replaced.`}<br />{`3 - Cyberaudio shorts for 1d6 turns.`}<br />{`4 - Cyberlimbs malfunctions for 1d6 turns.`}<br />{`5 - Neural breakdown triggers epileptic fit for 1d6/3 (up) turns.`}<br />{`5 - No effect.`}</>,
        oldContent: "N/A"
    }, {
        title: "Body Type Damage",
        subtitle: "Modifier",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`When attacking with your body or with a reasonable Melee weapon, add Damage on Hit to your attack based on your STR.`}<br />{`0 -> -2 Dmg`}<br />{`1 -> -1 Dmg`}<br />{`2 -> 0 Dmg`}<br />{`3 -> +1 Dmg`}<br />{`4 -> +2 Dmg`}<br />{`5 -> +4 Dmg`}<br />{`6 -> +6 Dmg`}<br />{`7 -> +8 Dmg`}</>,
        oldContent: "N/A"
    }, {
        title: "Body Type Toughness (BTT)",
        subtitle: "Attack",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`Reduces the ammount of recaived Damage to the body part, but never to less than -1 Dmg.`}<br />{`STR 0  - 0`}<br />{`STR 1  - -1`}<br />{`STR 2  - -2`}<br />{`STR 3  - -3`}<br />{`STR 4  - -4`}<br />{`STR > 4  - -5`}</>,
        oldContent: "N/A"
    }, {
        title: "Direct vs Indirect Attack",
        subtitle: "Weapon",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`When you are facing a target and there is an unobstructed weapon-travel-path between you, you can attack, but you can also attack in some cases if path is obstrcted. If path is obstructed but you are not targeting the obstruction, you might want bullets to ricochet from hard surfaces or try to stab someone that is hiding from your view. When that happens, add -5 to Hit modifier to the attack. You can check if surface is too soft by calculating SP of the surface. If SP is same or lower than the Dmg, Dmg is fully absorbed by the wall, if not, most of the Dmg (for game purposes all of it) is reflected towards the new target.`}</>,
        oldContent: "N/A"
    }, {
        title: "Hit Location",
        subtitle: "Weapon",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`When someone or something is hit, you might try to determine Hit Location. When that happens, assign numbers from 1 to 10 to body parts that can be hit. If you need more than 10, assign 10 more and also roll d6 (1-3 for first 10, 4-6 for second, if you need 30 locations, just use 1-2, 3-4, 5-6, if you need even more do the same but with d10). Body part is obstructed by an obstruction (like a low wall or another body part), that part works as a cover and is hit first. Damage gets trough by normal SP rules or if it caused at least half of body-parts Health damage and that is possible (bullet pierces body part or sword pierced instead of sliced). If body part is pierced, apply half of the total piercing Dmg to it and half to the Hit Location.`}</>,
        oldContent: "N/A"
    }, {
        title: "Called Location",
        subtitle: "Weapon",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`Instead of attacking in general direction of the target, you might try and target a specific body part. When you do, add -4 to Hit modifier.`}</>,
        oldContent: "N/A"
    }, {
        title: "Armor Layering",
        subtitle: "Armor",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`Armor can have up to 3 layers or it drops REF to 0 (prevents proper movement) (obstacles do not count as a layer). For each layer after the first one you, get 1 ENV (Skinweave is a layer, but does not cause ENV gain). Only one of the layers may be a Hard Armor or REF drops to 0. If layering covers only one part of the body or more than one seperately layered body parts, use ENV rules for the one with most layers or when using more than 3 layers and is not a torso just disable it if EN limit was not yet reached.`}</>,
        oldContent: "N/A"
    }, {
        title: "Soft Armor",
        subtitle: "Armor",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`Soft Armor is something that is worn on a body and provides protective value (SP) to it by its surface area yet it can bend with relative ease. Examples of Soft Armor are: Armor jackets, Police patrol armor, Kevlar vest, SkinTight Padding.`}</>,
        oldContent: "N/A"
    }, {
        title: "Hard Armor",
        subtitle: "Armor",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`Hard Armor is something that is worn on a body and provides protective value (SP) to it by its surface area, but it cannot bend with relative ease. Examples of Hard Armor are: Helmets, Metal Gear, Police Riot Armor, Door Gunner's vest, Flak Armor parts, M-78 Militech Revised heavy vest, Body Armor, C-Ballistic Light Mesh.`}</>,
        oldContent: "N/A"
    }, {
        title: "Destroyed Armor & Body",
        subtitle: "Armor",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`If Armor or Body Parts were destroyed and you are still alive, they still count as worn yet broken if not reasonable otherwise (they were burned or blasted away).`}</>,
        oldContent: "N/A"
    }, {
        title: "Armor Piercing (AP)",
        subtitle: "Weapon",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`They deal 2x Dmg to SP of an armor, mechanical parts or an obstacle, but 1/2 to organics parts, like Body Parts (will pierce the target, so the other half of the Dmg might hit whatever is behind the target). Similarly, spears, swords and daggers might he used in piercing motion to try and puncture through instead of slicing.`}</>,
        oldContent: "N/A"
    }, {
        title: "Cover",
        subtitle: "Armor",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`Cover is not part of the Armor, but it acts as such. Be aware, if you were shooting from cover, parts of the body you exposed while attacking might be hit. You might have 'ducked back behind a cover', but Turns occur in the same time period, so you were hit while you were shooting or moved hide back, not after it.`}</>,
        oldContent: "N/A"
    }, {
        title: "Cover Examples",
        subtitle: "Armor",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`5 SP - Sheetrock Wall, Wooden Door`}<br />{`10 SP - Concrete Block Wall, Car Body or Door`}<br />{`15 SP - Heavy Wooden Door`}<br />{`20 SP - Steel Door`}<br />{` 25 SP - Mailbox, Curb, Brick Wall, Vending Machine`}<br />{`30 SP - Stone Wall, Large Tree`}<br />{`35 SP - Water Hydrant, Concrete Utility Pole, Engine`}<br />{`40 SP - Armored Car, AV-4`}<br />{`50 SP - Reinforced Containment Door`}</>,
        oldContent: "N/A"
    }, {
        title: "Ranged Attack",
        subtitle: "Attack",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`Any attack that is not made in Point Blank range or Melee Attack range. If not, use 'd10 + REF + Weapon Skill' formula. If it is and target is trying to dodge, use Melee Attack to Hit rules, but calculate Dmg for Ranged Attack instead (target might try to influence your aim). If it is and target is not trying to dodge, only roll for Fumble and Hit otherwise.`}</>,
        oldContent: "N/A"
    }, {
        title: "Automatic Weapon Fumble",
        subtitle: "Weapon",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`Automatic weapons have highest chance to jam. If you roll 1 while trying to Hit, roll d10 again to see if weapon jams. If jammed, you need 1d6 turns to unjam it. Weapon will jam based on its realiability.`}<br />{`Unreliable - d10 under 9`}<br />{`Reliable - d10 under 6`}<br />{`Very Reliable - d10 under 4`}</>,
        oldContent: "N/A"
    }, {
        title: "3x Auto",
        subtitle: "Weapon",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`Three round burst is Action available on most automatic weapons and gives you +3 to Hit on Close and Medium range. On Hit, roll d6/2 to see how many rounds actually hit the target.`}</>,
        oldContent: "N/A"
    }, {
        title: "Full Auto",
        subtitle: "Weapon",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`Used to cover a wide range of targets or make only one dead for sure. You can not Aim or use a scope on Full Auto. On Full Auto at Close range, add +1 on Hit for every 10 rounds fired, but -1 on Hit per 10 rounds on Medium, Long and Extreme ranges. How many bullets you can fire depends on your ROF and how many they are left in your weapon's magazine. If you are attacking more than one target, divide total number of bullets by targets they are aimed at, then roll if they Hit targets for each target seperately. To calculate how many fired bullets hit the target use 'Hit Check - DC' formula. If number is 0, nothing wounds even if it was a Hit.`}</>,
        oldContent: "N/A"
    }, {
        title: "Angle of Attack (AOA)",
        subtitle: "Attack",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`Sometimes it is hard to express how wide it is space into which you are shooting because further away you move, wider it gets. Angle of attack is a unit of 30° angle (1/3 of 90° and 1/6 of 180°) that is constant as long as you are not moving or your movement is limited while you are shooting and is meant to help with area calculations. If you cover only 15°, it still counts as 1 AOA if not ruled otherwise by GM. If you want you can replace it back with 'meters wide area'.`}</>,
        oldContent: "N/A"
    }, {
        title: "Suppressive Fire",
        subtitle: "Weapon",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`Suppressive Fire creates an area hazardous to pass through. When it is declared, attacker choses its size with AOA from where they are standing up to 6 AOA (180°). Anyone starting in, entering or crossing the fire zone must make a save against being Hit with 'd10 + REF + Athletics' against DC 'bullets fired / number of AOA'. On failed save target takes 1/3 (down) of the bullets fired into any AOA it moved through or 1/2 (down) if it was doing so at Close range or closer. One AOA can not hit with more bullets as they were fired into it.`}</>,
        oldContent: "N/A"
    }, {
        title: "Shotgun Fire",
        subtitle: "Weapon",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`Shotguns are special in a way that they hit automatically inside of 2 AOA area (only roll to see if it Fumbles or if Ranged Attack Point Blank range rules apply). If target dodged in Point Blank range, it can choose if shotgun was shot left or right direction from its body. In any case check what happened to anyone cought in the area pallets were fired into.`}<br />{`Point Blank & Close - 1 m width - Full Damage`}<br />{`Medium - 2 m width - 3/4 Damage`}<br />{`Long - 3 m width - 1/2 Damage`}</>,
        oldContent: "N/A"
    }, {
        title: "Granade Fire",
        subtitle: "Weapon",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`Granades can be thrown up to 10x BODY m (-10 m for every kg after first) or they can be launched.`}</>,
        oldContent: "N/A"
    }, {
        title: "Flamethrowers",
        subtitle: "Weapon",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`Flamethrowers work between 2 chosen points. For a weapon, use Heavy Weapon Skill to Hit, for cyberarm variant, use Handgun Skill to Hit. If it hits, determine how many 30° away from each other were those points or how many meters you moved if you were moving, except if you were aiming at a single target. Divide damage dealt by those meters or 30°`}</>,
        oldContent: "N/A"
    }, {
        title: "Gas",
        subtitle: "Weapon",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`If you are attacked with some kind of a gas, make a sSave. If you succeed, take only half of the Dmg or effect if not stated otherwise. Saves need to be repeated as long as you remain exposed by concentration of it, but granades, sprays etc. last for 1 Turn if not stated otherwise.`}</>,
        oldContent: "N/A"
    }, {
        title: "Microwaves",
        subtitle: "Weapon",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`Microwave beam deliveres 1d6 burn Dmg. Everything electronic it touches and everything 1 m away from beam's path and not protected from such effects has to roll for a possible Microwave Effect.`}</>,
        oldContent: "N/A"
    }, {
        title: "Mines",
        subtitle: "Weapon",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`There are 2 main types of mines, standard and antipersonnel. Standard mine has a specific sensor, like you step on it and if you are heavy enough or you enough of you is made out of metal that you are mistaken for a vehicle, it triggers. Antipersonnel mines might instead direct their fire into 2x long 2 AOA cone and work similarly to Shotguns.`}</>,
        oldContent: "N/A"
    }, {
        title: "Rockets",
        subtitle: "Weapon",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`Heavy weapons, even if they use AP warhead, SP of armor is halved, but Dmg is not because they relly on their explosive charge.`}</>,
        oldContent: "N/A"
    }, {
        title: "Explosives",
        subtitle: "Weapon",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`Explosives have a simple rule. More you use, bigger the blast area. To determine how much of the damage target took, you need number of used explosives and their width. Closer you are, more damage you took (if you use 3 sticks of TNT, each with 3 m wide area, this will create 9 m wide explosion, 4,5 m in each direction if in open space, which means you would take 1 TNT stick of damage for each 1,5 m (4,5 m / 3 sticks) closer you are to the center of the explosion). If explosives are next to the wall ir just under the ceiling, they might collapse it. If that does not happen, energy of the explosion is reflected, so the area it is reflected into would be doubled.`}</>,
        oldContent: "N/A"
    }, {
        title: "Melee Attack",
        subtitle: "Attack",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`Attacks done at Point Blank range that intend to connect weapon (also fists, cyberfists etc.) with the target to cause damage are considered Melee Attacks. To Hit they need 'd10 + REF + Attack Type Skill' against DC 'd10 + REF + Defence Type Skill' formula. Defence Type Skills are Melee Weapons, Athletics, Dodge, Martial Arts.`}</>,
        oldContent: "N/A"
    }, {
        title: "Fighting",
        subtitle: "Attack",
        type: "fight",
        imgs: [],
        hashes: [],
        content: <>{`Brawling and Martial Arts have many Actions through which they can be used. Martial Arts on Hit allow you to add your Skill lvl as Damage Modifier (Dmg Mod) and have special Attack Modifiers, based on Martial Arts Type.`}<br />{`Block or Parry - Declare it as a first Action. Check rules for Block or Parry.`}<br />{`Choke - Requires Hold or Grapple. Opponent takes 1d6 Dmg per Turn.`}<br />{`Disarm - On Hit remove or knock opponent's weapon 1 m away or throw it away with another Action.`}<br />{`Dodge - Declare it as a first Action. -2 Attack Modifier for any attacker.`}<br />{`Grapple - On Hit, Grapple.`}<br />{`Hold - Requires Grapple. Opponent is immobilited until successful Escape.`}<br />{`Kick - 1d6 + Dmg Mod`}<br />{`Strike - 1d6/2 + Dmg Mod`}<br />{`Throw - Requres Grapple. Opponent is knocked to ground, taking 1d6 + Dmg Mod and sSTUN with -2 sSTUNp`}<br />{`Trip - Knock opponent down, getting -2 Attack Modifier for next attack while you get +2 Attack Modifier for next attack.`}</>,
        oldContent: "N/A"
    },]

    const healArr: Rule[] = [{
        title: "Wound Type",
        subtitle: "Health",
        type: "heal",
        imgs: [],
        hashes: [],
        content: <>{`More injured you are, harder it gets to stay alive. Wounds summarize how bad it is.`}<br />{`Light Wound - It hurts.`}<br />{`Serious Wound - -2 REF`}<br />{`Critical Wound - REF, INT and COOL are 1/2 (round up)`}<br />{`Mortal Wound - REF, INT, COOL are 1/3 (round up)`}</>,
        oldContent: "N/A"
    }, {
        title: "Limb Loss",
        subtitle: "Health",
        type: "heal",
        imgs: [],
        hashes: [],
        content: <>{`Each limb has by default 8 Hp, lose them and you might need a new limb. Remaining Dmg to head (after SP and BTT) is doubled if it was not already raised from 0 to 1 by BTT rules. Loss of a head is mortal and final. If you lost a limb that was an organic part of you, dSAVE with dSAVEp 0 if you do not have a Mortal Wound yet. Limb damage does not carry over to the rest of the body if not reasonable otherwise. Destroyed limb is still a limb and needs to be removed before new one can replace it if not reasonable otherwise.`}</>,
        oldContent: "N/A"
    }, {
        title: "Shock Save (sSAVE)",
        subtitle: "Health",
        type: "heal",
        imgs: [],
        hashes: [],
        content: <>{`Failed sSAVE will make you fall unconscious. Formula for sSAVE is: 'd10 equal or less than BODY - sSAVEp'. Roll again next turn until you succeed and wake up.`}</>,
        oldContent: "N/A"
    }, {
        title: "Healthbar (HEALTH)",
        subtitle: "Health",
        type: "heal",
        imgs: [],
        hashes: [],
        content: <>{`Healthbar tracks how much damage you already sustained. It is made out of 10x4 Hp bars. First one covers Light Wounds, second one Serious Wounds, third Critical Wounds and others Mortal Wounds.`}</>,
        oldContent: "N/A"
    }, {
        title: "Death Save (dSAVE)",
        subtitle: "Health",
        type: "heal",
        imgs: [],
        hashes: [],
        content: <>{`Failed dSAVE will kill you. Formula for dSAVE is: 'd10 equal or less than BODY - dSAVEp'. On failed dSAVE you die. On successful dSAVE repeat dSAVE next turn until you are Stabilized.`}</>,
        oldContent: "N/A"
    }, {
        title: "Shock Save Penalty (sSAVEp)",
        subtitle: "Health",
        type: "heal",
        imgs: [],
        hashes: [],
        content: <>{`0-4 Hp Loss - 0`}<br />{`5-8 Hp Loss - -1`}<br />{`9-12 Hp Loss - -2`}<br />{`13-16 Hp Loss - -3`}<br />{`17-20 Hp Loss - -4`}<br />{`21-24 Hp Loss - -5`}<br />{`25-28 Hp Loss - -6`}<br />{`29-32 Hp Loss - -7`}<br />{`33-36 Hp Loss - -8`}<br />{`37-40 Hp Loss - -9`}</>,
        oldContent: "N/A"
    }, {
        title: "Death Save Penalty (dSAVEp)",
        subtitle: "Health",
        type: "heal",
        imgs: [],
        hashes: [],
        content: <>{`0-8 Hp Loss - -1`}<br />{`13-16 Hp Loss - -2`}<br />{`17-20 Hp Loss - -3`}<br />{`21-24 Hp Loss - -4`}<br />{`25-28 Hp Loss - -5`}<br />{`29-32 Hp Loss - -6`}<br />{`33-36 Hp Loss - -7`}<br />{`37-40 Hp Loss - -8`}</>,
        oldContent: "N/A"
    }, {
        title: "Health Points (Hp)",
        subtitle: "Health",
        type: "heal",
        imgs: [],
        hashes: [],
        content: <>{`Everyone has 40 Hp (10x4), even those with missing parts of their body, but not everyone is equally able to survive Hp loss. Damage towards cybernetic limbs does not count as Hp loss if not reasonable otherwise.`}</>,
        oldContent: "N/A"
    }, {
        title: "Stabilize",
        subtitle: "Health",
        type: "heal",
        imgs: [],
        hashes: [],
        content: <>{`When person is dying, they need to be Stabilized or they will sooner or later die. Formula for Stabilization is 'd10 + TECH + any medical Skill + equipement' while for DC use '(Hp Loss + 10) / 2' (round up).`}<br />{`Stabilization is easier with proper equipement:`}<br />{`First Aid Kit - +1`}<br />{`TTA or Suspension Tank - +3`}<br />{`Hospital with Surgery Room - +5`}</>,
        oldContent: "N/A"
    }, {
        title: "Partial Stabilization",
        subtitle: "Health",
        type: "heal",
        imgs: [],
        hashes: [],
        content: <>{`Maybe it is just not your lucky day or maybe you do not know what you are doing when Stabilizing a parient and you fail to Stabilize them, so now they are at risk to die again. When that happens you may elect that Stabilization was a partial success. If you do, patient is Stabilized, but at a cost of being Crippled.`}</>,
        oldContent: "N/A"
    }, {
        title: "Crippled",
        subtitle: "Health",
        type: "heal",
        imgs: [],
        hashes: [],
        content: <>{`When Crippled, roll d10 to see how crippled you became. Crippled body part has to be replaced at a cost of a new one + surgical cost. Second time crippled body part is destroyed. You may elect your new Body Part to be in an Excelent Condition. With an Excellent Body Part, roll d10, on 7-10 you improve the same Stat that would be lowered if Crippled by temporary 1 (lost if body part is lost again). If you roll Crippled on a Cyberlimb, limb falls to the ground and needs DC 10 Cyber Tech Skill check for it to be placed back. If you roll on a limb that is no longer there, nothing bad happens and you are not Crippled.`}<br />{`1 - L. Arm - -2 REF`}<br />{`2 - R. Arm - -2 REF`}<br />{`3 - L. Leg - -3 REF`}<br />{`4 - R. Leg - -3 REF`}<br />{`5 - Heart - -2 BODY & -1 REF`}<br />{`6 - Lungs - -2 REF & -1 BODY`}<br />{`7 - Liver - -2 BODY`}<br />{` 8 - Kidney - -1 BODY (-3 if both)`}<br />{`9 - Eyes - Blinded & +3 EMP`}<br />{`10 - Nose - -2 COOL & (Disadvantage / Advantage on smell-related checks)`}</>,
        oldContent: "N/A"
    }, {
        title: "Body Part Costs",
        subtitle: "Health",
        type: "heal",
        imgs: [],
        hashes: [],
        content: <>{`Prices represent Normal Quality Costs. Poor Quality is 1/2 of that and Excellent Quality is 2x of that. If you are trying to sell instead of that, you can do so at 1/2 of the cost to buy.`}<br />{`Heart, Lungs -> 700 €`}<br />{`-> 600 (900 € for 2 if mismatching) €`}<br />{`Arm -> 500 (750 for 2 if mismatching) €`}<br />{`Eyes, Ears, Nose -> 500 €`}<br />{`Other -> 250 €`}<br />{`Liver, Kidney, Hands, Feet -> 200 €`}</>,
        oldContent: "N/A"
    }, {
        title: "Body Part Quality",
        subtitle: "Health",
        type: "heal",
        imgs: [],
        hashes: [],
        content: <>{`Some Body Parts are better or worse than others and all will deteriorate if not kept in proper conditions, both on and off the bodies they belong to. Poor Body Parts are lightly damaged, aged or slightly deteriorated, but still functional. Excelent body parts are in perfect condition but also a result of good genes, great surgery or a healthy lifestyle.`}</>,
        oldContent: "N/A"
    }, {
        title: "Body Type Modifier (STR)",
        subtitle: "Health",
        type: "heal",
        imgs: [],
        hashes: [],
        content: <>{`Evaluates your Body Type for bonuses under relevant situations.`}<br />{`0 - ->2 BODY`}<br />{`1 - 3-4 BODY`}<br />{`2 - 5-7 BODY`}<br />{`3 - 8-9 BODY`}<br />{`4 - 10 BODY`}<br />{`5 - 11-12 BODY`}<br />{`6 - 13-14 BODY`}<br />{`7 - 15-> BODY`}</>,
        oldContent: "N/A"
    }, {
        title: "Natural Healing",
        subtitle: "Health",
        type: "heal",
        imgs: [],
        hashes: [],
        content: <>{`Every organic, if not stated otherwise, heals by 1 Hp per day (apply over long rest if possible). This includes Hp that was lost due to limb loss.`}</>,
        oldContent: "N/A"
    }];

    const learnArr: Rule[] = [{
        title: "Fumble Points",
        subtitle: "Learning",
        type: "learn",
        imgs: [],
        hashes: [],
        content: <>{`When you roll 1 on d10 first time per Round, you gain a Fumble Point. Collect enough and you may upgrade your Skill (learn from your mistakes). You need 'Skill lvl * 3' Fumble Points to Upgrade (3, 6, 9, 12, 15, 18, 21, 24, 27). If your Skill lvl is 0, you need 1 Fumble Point to Upgrade. Fumble Points do not persist between skill levels.`}</>,
        oldContent: "N/A"
    }, {
        title: "Study & Practice",
        subtitle: "Learning",
        type: "learn",
        imgs: [],
        hashes: [],
        content: <>{`If you Study or Practice a skill, you might get better at it. You will need 10 days of study or practice to upgrade a skill lvl. You can not upgrade skill to more than level 2 that way.`}</>,
        oldContent: "N/A"
    }, {
        title: "Teaching",
        subtitle: "Learning",
        type: "learn",
        imgs: [],
        hashes: [],
        content: <>{`If you know a skill, you can try and teach it. You can not teach something you do not know. For Teaching you are using your Teaching skill. Teaching takes time and effort. For how much time it takes use '(taught skill lvl * 10) / Teaching skill lvl' days formula. For how much effort you need use DC '(taught skill lvl * 10) / Teaching skill lvl' formula. If Teaching fails, you get after given period frustrated and give up or even lower student's lvl when Fumble occurs. If your Teaching skill is 0, you fail to teach for first 10 days before you get it trough Practice.`}</>,
        oldContent: "N/A"
    }, {
        title: "Mass Teaching",
        subtitle: "Learning",
        type: "learn",
        imgs: [],
        hashes: [],
        content: <>{`For teaching more than 1 student at a time add +1 to DC for every 5 students. If you fail but it is not critical, as many people as 'roll value - DC value' did not grasp your teaching.`}</>,
        oldContent: "N/A"
    }, {
        title: "Critical Learning",
        subtitle: "Learning",
        type: "learn",
        imgs: [],
        hashes: [],
        content: <>{`When you roll 10 on d10 and roll 10 on d10 again, you may upgrade relevant skill for 1 lvl as a moment of revelation.`}</>,
        oldContent: "N/A"
    }, {
        title: "Career Learning",
        subtitle: "Learning",
        type: "learn",
        imgs: [],
        hashes: [],
        content: <>{`Career skill usually can not be raised or lowered by normal methods. Instead they are usually rewarded or taken away with story relevant events, especially if Role is connected to Player's reputation, status or credibility.`}</>,
        oldContent: "N/A"
    },];

    const startArr: Rule[] = [{
        title: "Round",
        subtitle: "Order",
        type: "start",
        imgs: [],
        hashes: [],
        content: <>{`Action sequences are segmented into rounds, each of them lasting cca 3 s. Each round is made from so many Turns as there are participants.`}</>,
        oldContent: "Combat in FNFF is divided up into rounds, each representing cca 3 seconds.",
    }, {
        title: "Turn order",
        subtitle: "Order",
        type: "start",
        imgs: [],
        hashes: [],
        content: <>{`Each Round participant with a highest initiative starts first and the one with the lowest last. Initiative is calculated by '1d10 + REF + boosts' formula.`}</>,
        oldContent: "The order of the round is based on an initiative roll of 1d10 plus the players REF stat, with the highest rolls moving first to lowest rolls moving last. Reflex boosts are added to this roll where applicable."
    }, {
        title: "Wait",
        subtitle: "Order",
        type: "start",
        imgs: [],
        hashes: [],
        content: <>{`You can decide to act later in Round. If someone else already started their Turn when you decide to start your Turn, you have to wait for them to finish their Turn before you can start yours.`}</>,
        oldContent: "N/A"
    }, {
        title: "Turn",
        subtitle: "Order",
        type: "start",
        imgs: [],
        hashes: [],
        content: <>{`Turn is cca 3 s long part of the Round in which someone is able to act. In each Turn you have 2 actions and a movement up to your SPEED.`}</>,
        oldContent: "N/A"
    }, {
        title: "Rush",
        subtitle: "Order",
        type: "start",
        imgs: [],
        hashes: [],
        content: <>{`Rush your Turn and get +3 to your Initiative and -3 to your Action Modifier.`}</>,
        oldContent: "N/A"
    }, {
        title: "Action",
        subtitle: "Action",
        type: "start",
        imgs: [],
        hashes: [],
        content: <>{`First action in Turn is free while second comes with -3 Action Modifier if roll is required. There are many types of actions.`}</>,
        oldContent: "N/A"
    }, {
        title: "Run",
        subtitle: "Action",
        type: "start",
        imgs: [],
        hashes: [],
        content: <>{`Move up to 3x your SPEED (can only be used once, includes your free SPEED).`}</>,
        oldContent: "N/A"
    }, {
        title: "Attack Action",
        subtitle: "Action",
        type: "start",
        imgs: [],
        hashes: [],
        content: <>{`Attack (up to weapon's max Rate of Fire) or make a Melee Attack.`}</>,
        oldContent: "N/A"
    }, {
        title: "Dodge",
        subtitle: "Action",
        type: "start",
        imgs: [],
        hashes: [],
        content: <>{`Make yourself harder to hit and give your attackers -2 Action Modifier.`}</>,
        oldContent: "N/A"
    }, {
        title: "Block or Parry",
        subtitle: "Action",
        type: "start",
        imgs: [],
        hashes: [],
        content: <>{`It has to be your first Action. Stop damage from a melee attacks with your weapon or arm. Attack will hit and it will cause damage (can be used with a protective object). If blocked with a weapon, roll 1d10 instead and if you roll 10, it breaks.`}</>,
        oldContent: "N/A"
    }, {
        title: "Escape",
        subtitle: "Action",
        type: "start",
        imgs: [],
        hashes: [],
        content: <>{`Escape a Grapple, a Hold or a Trap.`}</>,
        oldContent: "N/A"
    }, {
        title: "Aim",
        subtitle: "Action",
        type: "start",
        imgs: [],
        hashes: [],
        content: <>{`For 3 Rounds (including this one), gain +1 to your Attack Modifier towards the target of your Aim. To keep the Attack Modifier: you can not move, have a steady position, a chance to track your target.`}</>,
        oldContent: "N/A"
    }, {
        title: "Ambush",
        subtitle: "Action",
        type: "start",
        imgs: [],
        hashes: [],
        content: <>{`When ambushing, you get +5 on Ambushed opponent that Turn. You may ambush under two scenarios:`}<br />{`The opponent is unaware or you or your intent to attack. When you he comes into Ambush location or when Ambush is declared, opponent makes 'd10 + INT + Awareness' against your DC 'd10 + INT + Stealth' check. If Fumble, whoever fumbled less succeeds, if result is the same, defender succeeds. If Awareness roll is not reasonable (opponent is sleeping, unconscious etc.), you succeed automatically.`}<br />{`Opponent is at the moment focusing on something else than you that is drawing their attention. Again check if he was aware of you if that is reasonable, if not, you automatically succeed.`}</>,
        oldContent: "N/A"
    }, {
        title: "Reload",
        subtitle: "Action",
        type: "start",
        imgs: [],
        hashes: [],
        content: <>{`Reload if you have a spare munition case.`}</>,
        oldContent: "N/A"
    }, {
        title: "Change Weapons",
        subtitle: "Action",
        type: "start",
        imgs: [],
        hashes: [],
        content: <>{`Change your weapons. This does not include changing with how many weapons you decide to fire at the same time.`}</>,
        oldContent: "N/A"
    }, {
        title: "Mount or Connect",
        subtitle: "Action",
        type: "start",
        imgs: [],
        hashes: [],
        content: <>{`Mount or dismount a vehicle, animal, safely connect or disconnect with a wire to a computer etc.`}</>,
        oldContent: "N/A"
    }, {
        title: "Repair or Aid",
        subtitle: "Action",
        type: "start",
        imgs: [],
        hashes: [],
        content: <>{`Try to repair something or give Medical Aid to someone.`}</>,
        oldContent: "N/A"
    }, {
        title: "Perform a Task",
        subtitle: "Action",
        type: "start",
        imgs: [],
        hashes: [],
        content: <>{`Perform a non-combat task. If task would take you more than 3 s to finish, continue doing it into the next Round.`}</>,
        oldContent: "N/A"
    }, {
        title: "Skill Level (lvl)",
        subtitle: "Modifier",
        type: "start",
        imgs: [],
        hashes: [],
        content: <>{`Each skill follows common interpretation matrix.`}<br />{`0 - Clueless`}<br />{`1 - Basic`}<br />{`2 - Passable`}<br />{`3 - Average`}<br />{`4 - Capable`}<br />{`5 - Amateur`}<br />{`6 - Proffesional`}<br />{`7 - Expert`}<br />{`8 - Master`}<br />{`9 - Star`}<br />{`10 - Legend`}</>,
        oldContent: "N/A"
    }, {
        title: "Fumble Action",
        subtitle: "Roll",
        type: "start",
        imgs: [],
        hashes: [],
        content: <>{`When you roll 1 on d10, you fail your Action. Roll d10 again to see the severity of the result. Gain 1 Fumble Point in skill you were using. Can only happen once per Round in the same skill.`}</>,
        oldContent: "N/A"
    }, {
        title: "Critical Action",
        subtitle: "Roll",
        type: "start",
        imgs: [],
        hashes: [],
        content: <>{`When you roll 10 on d10, you critically succeed your Action. Roll d10 again and add the result to your Roll. If you roll 10 again, you may upgrade the skill you were using for 1 lvl.`}</>,
        oldContent: "N/A"
    }, {
        title: "Starting Gear",
        subtitle: "Start",
        type: "start",
        imgs: [],
        hashes: [],
        content: <>{`Starting gear that is optional but recommended.`}<br />{`Inflatable bed`}<br />{`Compressable sleep bag`}<br />{`Something to entertain yourself in a downtime`}<br />{`Laptop, Smartphone, Notebook or something else for taking notes`}<br />{`Smartphone and monthly service provider`}<br />{`Some sort of weapon and ammo if required`}<br />{`Armor`}<br />{`Personal belongings (clothes, toothbrush etc.)`}<br />{`Role tools (Netrunner needs cyber upgrades, cables etc.)`}</>,
        oldContent: "N/A"
    }, {
        title: "Starting Money",
        subtitle: "Start",
        type: "start",
        imgs: [],
        hashes: [],
        content: <>{`Use '1d6 / 3' rounded up, then multiply by 2000 eurodollars (2000, 4000, 6000).`}<br />{`If you want also roll 1d6 and with 5-6 you currently don't have a regular job.`}</>,
        oldContent: "N/A"
    }, {
        title: "Encumbrance (EN)",
        subtitle: "Gear",
        type: "start",
        imgs: [],
        hashes: [],
        content: <>{`You can carry up to BODY * 10 kg. If you carry more than that, you need to keep making DC Strength Feat to move (DC 10 + 5 for every 10 kg over the limit, you may not average it over a period of time, given that a Fumble might cause an injury). To keep it simple, organize your inventory into kg groups.`}<br />{`0.5 kg or less are most items, like smartphone, ammo, shades etc.`}<br />{`1 kg or less are medium or heavy handguns, sleeping bag, laptop etc.`}<br />{`3 kg are submachine gun, guitar, assault rifle etc.`}</>,
        oldContent: "N/A"
    },];

    const upgradeArr: Rule[] = [{
        title: "Cyberpsychosis",
        subtitle: "Humanity",
        type: "upgrade",
        imgs: [],
        hashes: [],
        content: <>{`If H drops to 0 or less, person enters Cyberpsychosis. If that person is a PC, it becomes NPC. Cyberpsychosis is a mental state of manic behaviour that can express itself in many ways, like uncontrolable food craving, heavy alcohol abuse, persistent suicidality or uncontrolable rage (especially when most upgrades are combat-oriented)). If Cyberpsycho becomes violent and starts rampaging, special Cybersquad unit will be called to apprehend or put down such Cyberpsycho.`}</>,
        oldContent: "N/A"
    }, {
        title: "Humanity (H)",
        subtitle: "Humanity",
        type: "upgrade",
        imgs: [],
        hashes: [],
        content: <>{`It represents how removed from a chance to enter Cyberpsychosis you are. You start with 10 H for every 1 lvl of EMP. With every upgrade, your mental stability gets worse as you quietly starting to lose your sence of where you end and the machine begins. Original rule to lower EMP was redacted to make use of cyberware less punishing, more attaractive and more insidious.`}</>,
        oldContent: "N/A"
    }, {
        title: "Cyber Registration",
        subtitle: "Humanity",
        type: "upgrade",
        imgs: [],
        hashes: [],
        content: <>{`Every cyber upgrade purchased in official store is registered so that police department can more easily track potencial Cyberpsychos. For those that are likely on edge police might stop them and offer them a choice between harraspent and registration. If registration is made, you are assigned a cyberpsychologist until, a tracker is implanted into your cyberwear and police will be less trigger-happy when feeling threatened by you. Some departments might be extra causious and also implant an explosive or otherwise neutralising device, just in case.`}</>,
        oldContent: "N/A"
    }, {
        title: "Cyberpsychologist",
        subtitle: "Humanity",
        type: "upgrade",
        imgs: [],
        hashes: [],
        content: <>{`Specialist in how to regain lost Humanity. Cybernetic upgrades are removed and H is restored per day of a therapy. Once cyberware is implanted again, roll for lost Humanity, but this time with disadvantage (take lower loss). Theraphy costs depends on the quality of a treatment, but preliminary assessment before every treatment is 200 €. 1 H/day costs 100 €, 2 H/day 300 €, 3 H/day 1000 €`}</>,
        oldContent: "N/A"
    }, {
        title: "Psycho Squad",
        subtitle: "Humanity",
        type: "upgrade",
        imgs: [],
        hashes: [],
        content: <>{`Specialists for hunting, neutralizing or eliminating Cyberpsychos. While they will usually at least try to catch Cyberpsycho alive, they value their lives and limbs way more than a random, violent, rampaging psycho. In the worst case scenario, whoever might want Cyberpsycho alive can still try to resurect the body with the wonders of modern medicine.`}</>,
        oldContent: "N/A"
    }, {
        title: "Ripperdoc",
        subtitle: "Cybertech",
        type: "upgrade",
        imgs: [],
        hashes: [],
        content: <>{`Black market practicioner of cyber technology installation, removal or rapair. Their prices depend on how legal their service is (you probably have a reason why not to use an ordinary clinic), but for most cases prices are simmilar. One additional benefit of a Ripperdoc is that you do not need to register your modifications, but in return your next visit to the hospital might include some uncomfortable question.`}</>,
        oldContent: "N/A"
    }, {
        title: "Surgery Code",
        subtitle: "Cybertech",
        type: "upgrade",
        imgs: [],
        hashes: [],
        content: <>{`- SEVERITY -`}<br />{`- AVAILABILITY -`}<br />{`- DURATION -`}<br />{`- WOUND -`}<br />{`- DIFFICULTY -`}<br />{`- COST -`}</>,
        oldContent: "N/A"
    }, {
        title: "Cyberware Code",
        subtitle: "Cybertech",
        type: "upgrade",
        imgs: [],
        hashes: [],
        content: <>{`- NAME -`}<br />{`- TYPE OF SURGERY (SURGERY) -`}<br />{`- TYPE OF CYBERWARE (TYPE) -`}<br />{`- DESCRIPTION (DES) -`}<br />{`- LOSS OF HUMANITY (H LOSS) -`}<br />{`- COST -`}</>,
        oldContent: "N/A"
    }, {
        title: "Negligible Surgery (S:0)",
        subtitle: "Cybertech",
        type: "upgrade",
        imgs: [],
        hashes: [],
        content: <>{`- Negligible -`}<br />{`- Mall clinic, drop-in bodyshop etc. -`}<br />{`- 1 h -`}<br />{`- 1 Dmg -`}<br />{`- DC 10 -`}<br />{`- 0 € (included into cost of cyberware) -`}</>,
        oldContent: "N/A"
    }, {
        title: "Minor Surgery (S:1)",
        subtitle: "Cybertech",
        type: "upgrade",
        imgs: [],
        hashes: [],
        content: <>{`- Minor -`}<br />{`- Medical center or ripperdoc clinic -`}<br />{`- 2 h -`}<br />{`- 1d6+1 Dmg -`}<br />{`- DC 15 -`}<br />{`- 500 € -`}</>,
        oldContent: "N/A"
    }, {
        title: "Major Surgery (S:2)",
        subtitle: "Cybertech",
        type: "upgrade",
        imgs: [],
        hashes: [],
        content: <>{`- Major -`}<br />{`- Hospital with surgery center or major ripperdoc operation -`}<br />{`- 4 h -`}<br />{`- 2d6+1 Dmg -`}<br />{`- DC 20 -`}<br />{`- 1500 € -`}</>,
        oldContent: "N/A"
    }, {
        title: "Critical Surgery (S:3)",
        subtitle: "Cybertech",
        type: "upgrade",
        imgs: [],
        hashes: [],
        content: <>{`- Critical -`}<br />{`- Hospital with surgery center or major ripperdoc operation -`}<br />{`- 6 h -`}<br />{`- 3d6+1 Dmg -`}<br />{`- DC 25 -`}<br />{`- 2500 € -`}</>,
        oldContent: "N/A"
    }, {
        title: "Cyberejection",
        subtitle: "Cybertech",
        type: "upgrade",
        imgs: [],
        hashes: [],
        content: <>{`For an operation to fail (when not Fumbled) it means your body rejects new Cyberware by not healing properly. In such case Cyberware needs to be removed. Surgery can be attempted again, like with a use of a different immunosuppressor. When fumbled, surgery can destroy body parts, damage your look or even kill you (but given that you are already in hospital, you are unlikely to be dead for long as long as they did not fry your brains).`}</>,
        oldContent: "N/A"
    }, {
        title: "Chipware",
        subtitle: "Cybertech",
        type: "upgrade",
        imgs: [],
        hashes: [],
        content: <>{`To use a Chip, you need an interface (socket) on your body into which Chip is inserted. Inserting or removing Chip takes 2 Actions or 1 Turn. Max number of Chips you might use is your INT stat value. You can gain max lvl 3 of any skill trough the use of a normal chip. Normal Chip costs 200 € per lvl (martial arts 400 €). To get even more from a Chip, you would need a Chip custom made for you. Custom made Chip costs 400 € per lvl and might be hard to get (martial arts 800 €). Lvl 3 skill costs 3x lvl 1 chip even if you already have lvl 2 in that skill (cost is the value of the Chip, not Chip's value to you in particular). When Chip is removed, you lose any level gained trough its use. It takes 1 day of Chip use for every lvl of the Chip over your natural value. When using Chips, you may not gain Fumble Points or Critival Learning in Chipped skills.`}</>,
        oldContent: "N/A"
    }, {
        title: "Smartware (LINK)",
        subtitle: "Cybertech",
        type: "upgrade",
        imgs: [],
        hashes: [],
        content: <>{`Smartware uses LINK to entabilish connection between device and the user. LINK needs to be installed. There are 4 major types of LINK.`}<br />{`NET LINK - Allows direct connection to NET, a must for Netrunners.`}<br />{`Vehicle LINK - Allows direct connection to any one smart vehicle.`}<br />{`Smartgun LINK - Allows direct connection to any one smartgun.`}<br />{`HEAVY LINK - Allows direct connection to any one machine or tool, often work requirement for factory workers.`}</>,
        oldContent: "N/A"
    }, {
        title: "Cyberlimb Crush",
        subtitle: "Cybertech",
        type: "upgrade",
        imgs: [],
        hashes: [],
        content: <>{`Only cyberarms. Crushing grip deals 2d6 Dmg. Cyberarm does not get tired or needs to feel pain. Cyberlimb can with ease crush might metal, wood and plastic. That said, it can not grow or learn, so without upgrades this is its limit.`}</>,
        oldContent: "N/A"
    }, {
        title: "Cyberlimb Pain",
        subtitle: "Cybertech",
        type: "upgrade",
        imgs: [],
        hashes: [],
        content: <>{`Any cyberlimb. Pain can be turned on and off with a mental switch (1 Action). As cyberlimb never grows tired, it might allow to hang from high places, reach into fire, suffer gunshot without health loss (no Saving Roll) etc. Limb can be damaged and limb manipulation roll might be appropriate, but cyberlimbs are known for their exceptional endurance compared to their organic counterparts.`}</>,
        oldContent: "N/A"
    }, {
        title: "Cyberlimb Health",
        subtitle: "Cybertech",
        type: "upgrade",
        imgs: [],
        hashes: [],
        content: <>{`Any cyberlimb. Standard cyberlimb can take 20 kinetic Dmg before breaking and 30 Dmg before it becomes damaged beyond repair.`}</>,
        oldContent: "N/A"
    }, {
        title: "Cyberlimb Damage",
        subtitle: "Cybertech",
        type: "upgrade",
        imgs: [],
        hashes: [],
        content: <>{`Any cyberimb. Standard cyberarm punch deals 1d6 Dmg and standard cyberleg kick deals 2d6 Dmg.`}</>,
        oldContent: "N/A"
    }, {
        title: "Cyberlimb Leaping",
        subtitle: "Cybertech",
        type: "upgrade",
        imgs: [],
        hashes: [],
        content: <>{`Only cyberlegs. Standard cyberlimb can leap up to 6 m and make a running jump up to 8 m.`}</>,
        oldContent: "N/A"
    }, {
        title: "Cyberlimb Options",
        subtitle: "Cybertech",
        type: "upgrade",
        imgs: [],
        hashes: [],
        content: <>{`Any cyberlimb. Standard cyberlimb can support up to 4 Options (cyberarm comes with a free hand and cyberleg with a free foot Option).`}</>,
        oldContent: "N/A"
    }, {
        title: "ExoFrame",
        subtitle: "Cybertech",
        type: "upgrade",
        imgs: [],
        hashes: [],
        content: <>{`Linear frame, exoskeleton or ExoFrame. Metal body-armor-like suit that is grafted onto a body, systems neurolinked to muscles and bones. You can not swin in them and you get -1 ENV (-1 REF). ExoFrame can lift up to 50x STR they provide.`}</>,
        oldContent: "N/A"
    }, {
        title: "Dirty 10.000",
        subtitle: "Cybercredit",
        type: "upgrade",
        imgs: [],
        hashes: [],
        content: <>{`If you run out of cash in Character Creation and you want to have more Cyber in your Punk, you might ask for Dirty 10.000 € cyberbudget that you can spend on cybernetic implants (the rest is wasted if GM does not rules otherwise).`}</>,
        oldContent: "N/A"
    }, {
        title: "Dirty War",
        subtitle: "Cybercredit",
        type: "upgrade",
        imgs: [],
        hashes: [],
        content: <>{`Join the covert military. Become a fighter in the Cyberwars, serving your country's armed forces with distinction and honor as part of its secret Elite Mechanized Combat Forces (Cybergrunts, to you). See pain, torture and death close up, as you participate in any one of a hundred covert 'police actions' worldwide, protecting 'national interests'. O course the Cybergrunts don't exist. Of course your country doesn't send teams of heavily armed covert agents into other countries to kill and forment revolt. Of course they're not going to let you quit when you want to.`}</>,
        oldContent: "N/A"
    }, {
        title: "Dirty Street",
        subtitle: "Cybercredit",
        type: "upgrade",
        imgs: [],
        hashes: [],
        content: <>{`Join the mafia. The word on the Street is that the Mob is alive and hiring. Swear alliegiance to one of the big time organized crime Familites and you'll never lack for cybertech. The only catch is, you have to do 'work' for them. Bill collecting. Assassinations. Murders. Mob wars. The Familites of 2020 have a long and honorable tradition that goes back into the early twentieth century: nobody ever quits the Mob. Ever.`}</>,
        oldContent: "N/A"
    }, {
        title: "Dirty Corps",
        subtitle: "Cybercredit",
        type: "upgrade",
        imgs: [],
        hashes: [],
        content: <>{`Join the corporation. See the world. While you are at it, they'll bankroll you for ten thousand dollars in newtech. But remember, with all business deals, there's a price. In this case, you have to work for the corporation. The jobs you get to do are all the fun, suicidal ones on which they don't want to waste their good people: executive kidnappings, black operations and espionage missions. If you're really lucky, you'll even get to be a grunt in a Corporate war, where you get to defend the Corporation's interests in some backwater hellhole with a population of natives you're suppressing. Big Business is fun.`}</>,
        oldContent: "N/A"
    }, {
        title: "Dirty Mission",
        subtitle: "Cybercredit",
        type: "upgrade",
        imgs: [],
        hashes: [],
        content: <>{`Do a mission with a questionable outcome. Those dear to you are now hostages. They KNOW you and now you are blackmailed. Your cyberware has a code that might torture, maime or kill you if you step out of the line. Monitoring device is implanted somewhere on you. Implanted chip, that will make you kill someone or anyone in your close proximity. Safeguard chip will make sure you do no harm to them or you will feel pain or even death.`}</>,
        oldContent: "N/A"
    },]

    const moveArr: Rule[] = [{
        title: "Jump & Leap",
        subtitle: "Movement",
        type: "move",
        imgs: [],
        hashes: [],
        content: <>{`You may Jump up to 'REF / 3' m away or up to 'REF / 4' m up. You may also Leap if you Run at least 3 m for REF meters. Add 1 m to everything, if you fall on ground or grab the edge. If you jump but you used all of your Move or it will be depleated during your Jump or Leap, you may use Action to extend your Move for the length of the Jump or Leap.`}</>,
        oldContent: "N/A"
    }, {
        title: "Move & Jog & Run",
        subtitle: "Movement",
        type: "move",
        imgs: [],
        hashes: [],
        content: <>{`If reasonable have Movement Speed (SPEED) each turn for REF meters. You may use Action to Jog at 2x your Move continiously that Turn or Run at 3x your Move for up to 3 consecutive Turns that Turn.`}</>,
        oldContent: "N/A"
    }, {
        title: "Stand Up",
        subtitle: "Movement",
        type: "move",
        imgs: [],
        hashes: [],
        content: <>{`Standing up takes SPEED or Action.`}</>,
        oldContent: "N/A"
    }, {
        title: "Pull Up",
        subtitle: "Movement",
        type: "move",
        imgs: [],
        hashes: [],
        content: <>{`Pulling up if you are not encumbered with something heavy and have a good grip takes 2x Action or your 3x SPEED.`}</>,
        oldContent: "N/A"
    }, {
        title: "Lower Posture",
        subtitle: "Movement",
        type: "move",
        imgs: [],
        hashes: [],
        content: <>{`Lowering posture safely to whichever degree takes SPEED or Action.`}</>,
        oldContent: "N/A"
    }, {
        title: "Jump Down",
        subtitle: "Movement",
        type: "move",
        imgs: [],
        hashes: [],
        content: <>{`Jumping down safely takes Action, Athletics Skill check against DC '5 + (m of fall x 5)' (multiplier might be lowered down to 0 on softer surfaces or Zero Gravity, GM decides, if lower than 10, succeed automatically) and does not count as a Movement as long as movement is purely vertical.`}</>,
        oldContent: "N/A"
    }, {
        title: "Crouch",
        subtitle: "Movement",
        type: "move",
        imgs: [],
        hashes: [],
        content: <>{`If you are crouching, move as if on Difficult Terrain, Difficult Terrain does not apply to you.`}</>,
        oldContent: "N/A"
    }, {
        title: "Crawl",
        subtitle: "Movement",
        type: "move",
        imgs: [],
        hashes: [],
        content: <>{`If you are crawling, move as if on Hostile Terrain, Hostile Terrain does not apply to you.`}</>,
        oldContent: "N/A"
    }, {
        title: "Terrain Types",
        subtitle: "Movement",
        type: "move",
        imgs: [],
        hashes: [],
        content: <>{`There are 3 general land types of terrain that can be traveled. Normal, Difficult, Hostile. Normal Terrain will not slow you down. Difficult will allow safe movements only at 1/2 SPEED. Hostile terrain will allow safe movement only at 1/3 SPEED. When SPEED is not reduced, use Athletics Skill check against DC 15 on Difficult and DC 25 on Hostile Terrain. GM decides what happenes if you fail, but some examples include: ice breaks under you, you fall, your gear gets damaged or ripped.`}</>,
        oldContent: "N/A"
    }, {
        title: "Vehicle Control",
        subtitle: "Vehicle",
        type: "move",
        imgs: [],
        hashes: [],
        content: <>{`You control vehicle with 'd10 + REF + Vehicle Skill + Modifiers' formula. Only one Vehicle Control roll per Turn is allowed. Some examples of DCs are:`}<br />{`DC 10 - take off, rotate`}<br />{` DC 15 - swerve, landing, hover`}<br />{`DC 20 - tight turn, controled skid, recover from a stall, emergency stop, pull out of dive`}<br />{`DC 25 - bootlegger turn, recover from spin`}</>,
        oldContent: "N/A"
    }, {
        title: "Vehicle Speed & Dmg Modifiers",
        subtitle: "Vehicle",
        type: "move",
        imgs: [],
        hashes: [],
        content: <>{`2x Safe Speed -> -2 Mod`}<br />{`3x Safe Speed -> -4 Mod`}<br />{`4x Safe Speed -> -6 Mod`}<br />{`3/4 Full (up) to 1/2 Full (down) VHp -> -1 Mod`}<br />{`1/2 Full (up) to 1/4 Full (down) VHp -> -2 Mod`}<br />{`1/4 Full (up) to 1 VHp -> -4 Mod`}</>,
        oldContent: "N/A"
    }, {
        title: "Control Loss Table",
        subtitle: "Vehicle",
        type: "move",
        imgs: [],
        hashes: [],
        content: <>{`On lost control over a vehicle apply based on DC.`}<br />{`up to DC 15 -> Skid or slew.`}<br />{`over DC 15  -> Major skid, land vehicle slides 'd10 x 3' m sideway, aircraft stalls, loses 'd10 x 15' m of altitude.`}<br />{`over DC 20 -> Land vehicle rolls after sliding 'd10 x 3' m sideways, takes 5d6 Dmg, aircraft goes into spin or dive, lose 'd10 x 30' m of altitude.`}</>,
        oldContent: "N/A"
    }, {
        title: "Vehicle Damage",
        subtitle: "Vehicle",
        type: "move",
        imgs: [],
        hashes: [],
        content: <>{`Vehicle uses SP and Vehicle Health Points (VHp). If armored, SP works as any armor. When VHp drops to 0, roll on Vehicle Lost table.`}</>,
        oldContent: "N/A"
    }, {
        title: "Vehicle Lost",
        subtitle: "Vehicle",
        type: "move",
        imgs: [],
        hashes: [],
        content: <>{`Roll 1d6 for`}<br />{`1-2 -> Vehicle is inoperable, but potentially recoverable.`}<br />{`2-4 -> Vehicle is unrecoverable, but in one piece.`}<br />{`5-6 -> Vehicle's fuel ignites or goes critical in 1d10 Turns, DM decides on Dmg based on Dmg from Explosives. If vehicle does not have explodable fuel or parts, it is just wrecked beyond repair.`}</>,
        oldContent: "N/A"
    }, {
        title: "Crashing & Ramming",
        subtitle: "Vehicle",
        type: "move",
        imgs: [],
        hashes: [],
        content: <>{`Use '(km/h / 20) (down)' formula to calculate Dmg. Both sides take same amount of Dmg if vehicle is stopped and had no collision gear. If vehicle was not stopped, it loses only as much as object that couldn't stop the vehicle. If vehicle has ramming gear and is ramming, it takes 1/2 (down) of its collision Dmg. If occupants are properly seated and protected, they get 1/4 of VHp Dmg, if not, 1/2 Dmg.`}</>,
        oldContent: "N/A"
    }];

    {/*TEMPLATE*/ }
    const emptyArr = [{
        title: "",
        subtitle: "",
        type: "",
        imgs: [],
        hashes: [],
        content: <>{``}</>,
        oldContent: "N/A"
    },]
    emptyArr

    return {
        statArr,
        skillArr,
        abilityArr,
        roleArr,
        moveArr,
        fightArr,
        healArr,
        learnArr,
        startArr,
        upgradeArr
    }
}