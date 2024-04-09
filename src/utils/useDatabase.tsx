export default function useDatabase() {

    type Role = {
        skill: string,
        job: string,
        description: string
    }

    type Skill = {
        skill: string,
        stat: "ATTR" | "BODY" | "COOL" | "EMP" | "INT" | "REF" | "TECH" | "LUCK" | "MOVE",
        defJob: string[],
        description: string
    }

    const rolesArr: Role[] = [{
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

    const skillArr: Skill[] = [{
        skill: "Accounting",
        stat: "INT",
        defJob: [],
        description: "Know tax law, keep business books organized, wield modern accounting software or play tricks with numbers and get away with it."
    }, {
        skill: "Acting",
        stat: "EMP",
        defJob: [],
        description: "Move hearts of your audiance or convince them you are someone (or something) else entirely."
    }, {
        skill: "Awareness",
        stat: "INT",
        defJob: [],
        description: "Be aware of your surrounging. Notice traps, ambushes, fake smile ... or find an excelent sniping spot, or if your favourite store has a sale, who knows ... you, you spoted it first!"
    }, {
        skill: "Biochemistry",
        stat: "INT",
        defJob: [],
        description: "Knowledge on how organisms react to specific substances, but also how to extract, study and adapt genetic code. In the age where genetic tampering is normal while clones and lab-grown organs are a yesterday news it can be helpful to know how to play a god ... with a right equipement of course. If you feel lucky ... why not study on yourself? Yes, you could die, get terminal cancer or just become horrificly transfigured, but you might also shine in the dark!"
    }, {
        skill: "Biology",
        stat: "INT",
        defJob: [],
        description: "Every living being works like a machine, beyond understanding complicated, messy macnine. Know what can be expected from living organisms or how to infuence them by undestanding what makes them tick. Also helpful in identifying types of organisms."
    }, {
        skill: "Chemistry",
        stat: "INT",
        defJob: [],
        description: "World is made out of stuff and you know how it all fits together. Or at least in some textbook cases you do. Know simple materials and how they are expected to react to each other."
    }, {
        skill: "Cosmetic Surgery",
        stat: "TECH",
        defJob: [],
        description: "In this day and age, being different is normal and you know exactly how to shape someone in any bizzare fantasy they desire or how to at least make them look like someone else so they can better evade whoever is looking for them. You might need a proper equipement, but as long as you don't kill or disfigure too many of your costumers, it will probably pay for itself."
    }, {
        skill: "Creativity",
        stat: "INT",
        defJob: [],
        description: "Write songs, articles, novels based on your experience and understanding of what you are trying to do. Some people need inspiration ... it helps, but you are able to make something works simply by knowing what worked in the past. This is why 'art schools' have 'school' part in them."
    }, {
        skill: "Ecology",
        stat: "INT",
        defJob: [],
        description: "Know how living organisms manage to live together in spite of perpetual chaos ... or don't, world of Cyberpunk is dying, so maybe you are an expert on what exactly is going wrong."
    }, {
        skill: "Education",
        stat: "INT",
        defJob: [],
        description: "Were you self-tought, mentored or finished an elite school? Not only do you have a degree to present, you also picked a lot of general trivia along the way and you are not affraid to share it ... most of the time."
    }, {
        skill: "Endurance",
        stat: "BODY",
        defJob: [],
        description: "Endure pain and hardship with your pure body power over a period of time. Also knowladge on how best to conserve energy, stay awake or resist dehidration."
    }, {
        skill: "Expert (Type)",
        stat: "INT",
        defJob: [],
        description: "Pick a topic, any topic that is not too general and is based on your knowladge of the field. You are an expert in it."
    }, {
        skill: "Etiquette",
        stat: "EMP",
        defJob: [],
        description: "When social circumstances expect you to behave certain way, like proper posture, language, gestures or table manners. Know what is expected from you, so even when you choose to go against expectations you might do so with flare expected from someone of your statue instead of simply shaming yourself."
    }, {
        skill: "Evasion",
        stat: "INT",
        defJob: [],
        description: "Hide from those searching for you, cover your tracks, have a knowladge on how people are usually tracked by different parties."
    }, {
        skill: "Fashion",
        stat: "ATTR",
        defJob: [],
        description: "To know what to wear, to know what not to wear and to know how to wear it. You have a taste and you make other people know it. It can help if you also have a decently sized and well stocked wardrobe."
    }, {
        skill: "Gamble",
        stat: "LUCK",
        defJob: [],
        description: "How lucky are you feeling can be influenced by how to manipulate the outcome of the odds. Evaluate your odds or shift them in your favour or if things look bad, pull out before it is too late to do anything about it. And smile. Never forget to smile."
    }, {
        skill: "Geology",
        stat: "INT",
        defJob: [],
        description: "Knowladge of geolodical structures, procesess, both local and global. Gives better knowladge where you are, how location was created and what can be expected to find under such circumstances, like what is standard temperature, wind and rainfall of your season."
    }, {
        skill: "Grooming",
        stat: "ATTR",
        defJob: [],
        description: "Maximize attractivness and increase your chances to form a bond or strike a deal."
    }, {
        skill: "Hacking",
        stat: "INT",
        defJob: [],
        description: "Knowladge of tools, best practices and systems and how to use them. And also how to abuse them. While most hackers are perfectly legal or at least employed by legal employers, you might want to use all that knowledge to invade or crash networks and databases or track those that are invading and crushing networks and databases."
    }, {
        skill: "History",
        stat: "INT",
        defJob: [],
        description: "Know what humans and societies of the past were doing or what happened to them. Technically history starts with written language and what recors were left behind, but it often instead covers any human artefact of the past. You may choose a time peoriod or a society and have a deeper underderstanding on that particular historic topic."
    }, {
        skill: "Interrogation",
        stat: "COOL",
        defJob: [],
        description: "When you ask someone question, trick him into telling you what you want to know easy way or hard way. Also useful to figure out if someone is lying to you."
    }, {
        skill: "Interview",
        stat: "EMP",
        defJob: [],
        description: "When you ask someone question, trick him into telling you what you want to know without alerting them. Also useful to figure out when someone is lying to you."
    }, {
        skill: "Intimidation",
        stat: "COOL",
        defJob: [],
        description: "Scare people into doing whatever you demand from them."
    }, {
        skill: "Language (Type)",
        stat: "INT",
        defJob: [],
        description: "There are many languages, both those that are still in use as well as those that are not. You can choose any language, even those that are created for blind or deaf (read lips if person still has lips) people. At 8 points you speak and/or read like a native."
    }, {
        skill: "Ledership",
        stat: "EMP",
        defJob: [],
        description: "Ability to lead and or command respect from people around you. Incite action, raise spirits or make cooler heads prevail."
    }, {
        skill: "Macro-Economy",
        stat: "INT",
        defJob: [],
        description: "Knowladge of general economic forces, trends and events. Understand what is going on and what to expect from known data, like is economy healthy, how to fix it and what are signs or a recovery or how to recognise what is destroying it. It also helps to know what economic events happened in the past and who was responsible for them."
    }, {
        skill: "Mathematics",
        stat: "INT",
        defJob: [],
        description: "The field of abstract data relations. Know how to sum and subtract more than one and one without asking for an answer on the web, be able to solve advanced formula and do so correctly or understand many competing mathematical theories as well as you know your axioms (which ones do you agree with?)."
    }, {
        skill: "Medicine",
        stat: "INT",
        defJob: [],
        description: "It is great when everything works just as billions of years of evolution intended. But sometime it doesn't. Or you wish it wouldn't. When that happens, draw on your wast knowladge of people to know how to fix or break their fragile, constantly decomposing and hotfixing bodybags."
    }, {
        skill: "Micro-Economy",
        stat: "INT",
        defJob: [],
        description: "Knowladge on how to run an organization. It can be a simple understanding of profits, expenditure and revenue or understanding of relevant laws, practices, players and how to recognize, disrupt or profit from trends."
    }, {
        skill: "Nature Survival",
        stat: "INT",
        defJob: [],
        description: "How to survive in the wilds. Where to find food, water, how to hunt, cook, find shelter and in general not die the moment your NET connection stops working. Very useful in accidents, adventuring, hiding in the middle of nowhere, but somewhat less in the city."
    }, {
        skill: "NET Knowledge",
        stat: "INT",
        defJob: [],
        description: "Internet of Cyberpunk univers is divided and diverse place and not many people have a grasp of what is going on with it. But you do ... maybe. How does it work, how is it divided, who owns parts or it and how is it protected. NET is a game and you know the rules, players and playboard."
    }, {
        skill: "Oratory",
        stat: "COOL",
        defJob: [],
        description: "When you speak to the public or perform a speach, how likely do you touch their hearts and minds. Do they listen to you or do they ignore you, fall asleep or even feel insulted by your lacking words and gestures."
    }, {
        skill: "Paleontology",
        stat: "INT",
        defJob: [],
        description: "Knowladge on pre-written history of the planet and practices on how to uncover it. You can choose a time period or (no more) living organism as your fascination or study focus and be more knowledgable about it or you could stay generalist and know more about everything."
    }, {
        skill: "Perform",
        stat: "EMP",
        defJob: [],
        description: "Your ability to make something ordinary into something memorable or to convince someone to find meaning in your art."
    }, {
        skill: "Persuasion",
        stat: "EMP",
        defJob: [],
        description: "Convince someone into seeing the world the way you want them to see it or to do something they are reluctant about if not openly opposed."
    }, {
        skill: "Physics",
        stat: "INT",
        defJob: [],
        description: "Knowladge of universal physical processess that rule the world, like what are EMPs and how do they work, how gravity works or how different materials tend to behave under different general conditions and how to calculate them, like when you trow a ball, where to expect for it to land. For extremly large or small physical scales you might instead want to create astrophysics or quantum mechanic skill."
    }, {
        skill: "Programming",
        stat: "INT",
        defJob: [],
        description: "Recognize computer code and hope it is one of those you know or at least similar enough for you to read or even write in it. Deeper you programming knowladge, more languages you know as well as their many quirks, which programs are best to work on them and how best to use your work. Maybe some day you might even create your own language, language library. And why stop with programs, while you are at it, write your own OS! Make those who would want to hack you cry!"
    }, {
        skill: "Psychology",
        stat: "INT",
        defJob: [],
        description: "Don't just observe what people do, study and therefore understand them. Gives you an research-based understanding of individuals around you."
    }, {
        skill: "Resist",
        stat: "COOL",
        defJob: [],
        description: "Resist pain and hardship with your willpower over a period of time. Also knowladge on how best to keep going when your body is starting to fail."
    }, {
        skill: "Search",
        stat: "INT",
        defJob: [],
        description: "How to find what is hidden, lost or how to track something that wishes to hide. Use your knowledge of subtle clues, suspect databases and trackind equipement to find what you are looking for. It is also a general understanding on how to evade someone or hide from something."
    }, {
        skill: "Search Database",
        stat: "INT",
        defJob: [],
        description: "Knowedge on how to search libraries or organised data structures both in physical and virtual world. Know where to start and how to recognise what you are looking for as well as how to properly (or unproperly) extract it. Especially useful if you want to finish your task in minumal amount of time."
    }, {
        skill: "Seduction",
        stat: "EMP",
        defJob: [],
        description: "Form (and maintain) romantic relationship. Be erotic instead of obscene. Know not only how to love, but to make love. Flirt away Romeo!"
    }, {
        skill: "Singing",
        stat: "EMP",
        defJob: [],
        description: "Use your voice to amaze those around you. It also helps to make sure you are not the only one who is enjoying your casual singing. It also helps if you want to be lauder or have a nice casual voice."
    }, {
        skill: "Social Awareness",
        stat: "EMP",
        defJob: [],
        description: "Notice honesty, lie, evasion, mood, opportunity and other social cues."
    }, {
        skill: "Sociology",
        stat: "INT",
        defJob: [],
        description: "Psychology of masses, know what can be expected from groups of people and how to use that to your advantage."
    }, {
        skill: "Stock Market",
        stat: "LUCK",
        defJob: [],
        description: "Know everything there is to know about the beast called stock market. In its most basic form, it is a gamble as is always supposed to be knowlegre neutral, but with your above minimal knowledge you might try to gecognise trends or predict events to swing those odds your way ... or maybe just how to really ruin someone elses day. Hit them where it hurst the most and make sure you survive their fury."
    }, {
        skill: "Street Survival",
        stat: "EMP",
        defJob: [],
        description: "Know where it is safe and which streets are better to avoid, what not to ever ever do, where to get legal and illegal stuff or services and who to call when you need something."
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
        skill: "Teaching",
        stat: "INT",
        defJob: [],
        description: "Teach someone what you know. You can teach someone how to shot by saying 'aim with this part and do BAM BAM' or you can try to say something actually useful, maybe even adapt to their learning style. You can not teach what you do not know and you can teach only up to your teaching level. That said, even if you do not know something, having a great teacher around or knowing how best to teach yourself might help you learn faster than just reading same sentance in the book over and over again until you get it or give up."
    }, {
        skill: "Archery",
        stat: "REF",
        defJob: [],
        description: ""
    }, {
        skill: "Athletics",
        stat: "MOVE",
        defJob: [],
        description: ""
    }, {
        skill: "Brawling",
        stat: "REF",
        defJob: [],
        description: ""
    }, {
        skill: "Dance",
        stat: "MOVE",
        defJob: [],
        description: ""
    }, {
        skill: "Dodge",
        stat: "REF",
        defJob: [],
        description: ""
    }, {
        skill: "Escape",
        stat: "MOVE",
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

    return {
        rolesArr,
        skillArr
    }
}