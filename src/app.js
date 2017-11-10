// Configuration

const world = {
    activity: {
        DEFAULT_OUTPUT: 3,
        generator: {
            DEFAULT_INTERVAL: 3000,
        }
    }
};

// Utilities

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

const _ = {
    has(object, path) {
        return object != null && hasPath(object, path, baseHas);
    }
};

// Classes

class Game {
    static get INTRO_TEXT() {
        return [
            {
                "text": "2.6 million years ago: Early humans made basic tools."
            },
            {
                "text": "1.6 million years ago: First major technological innovation. Hand axes are made. Hand-axe technology persists for more than 1.2 million years."
            },
            {
                "text": "800,000 years ago: Early humans had control of fire and created hearths. Beginning of the most rapid increase in early human brain size (relative to body size). The fastest pace of brain enlargement took place between 800,000 and 200,000 years ago."
            },
            {
                "text": "250,000 years ago: Early humans began to communicate with symbols—with evidence of the oldest known “crayons” (faceted sticks and chunks of pigment)."
            },
            {
                "text": " 77,000 years ago: Modern humans recorded information on objects."
            },
            {
                "text": " 74,000 years ago: Near-extinction of H. sapiens. Greatly reduced population, with numbers estimated at about 10,000 adults of reproductive age to as few as 600."
            },
            {
                "text": " 50,000 years ago: Modern humans created permanent drawings."
            },
            {
                "text": " 35,000 years ago: Modern humans created musical instruments."
            },
            {
                "text": " 15,000 years ago: Modern humans reached the Americas (by at least this date)."
            },
            {
                "text": " 12,000 years ago: Humans become a “turning point” in the history of life as they control the growth and breeding of certain plants and animals. Farming and herding ensue, which transformed natural landscapes—first locally, then globally. Food production led to settlement (villages, towns, cities) and population growth."
            },
            {
                "text": "  8,000 years ago: Modern humans use symbols to represent words and concepts."
            },
            {
                "text": "2007:                    More humans live in cities than in rural areas."
            },
            {
                "text": "<strong>humans.game</strong>",
                "moment": "2017-11-09 06:24:00"
            },
        ];
    }

    constructor() {
        for (let i = 0; i < Game.INTRO_TEXT.length; i++) {
            const line = Game.INTRO_TEXT[i];

            if (line.hasOwnProperty("moment")) {
                this.say(line.text, line.moment);
            } else {
                this.sayPreformatted(line.text);
            }
        }
    }

    say(str, momentStr) {
        //console.log(str);
        document.getElementById("app").insertAdjacentHTML("beforeend", moment(momentStr).format('YYYY-MM-DD HH:mm:ss') + ": " + str + "<br><br>");
    }

    sayPreformatted(str) {
        //console.log(str);
        document.getElementById("app").insertAdjacentHTML("beforeend", str + "<br><br>");
    }
}

class User {
    constructor() {
        game.say("<strong>user.login</strong>");
    }
}

class Human {
    constructor(name, has = 0) {
        this.name = name;
        this.has = has;
        this.sayName();
        this.sayHas();
    }

    say(str) {
        game.say("(Human) " + this.name + ": " + str);
    }

    sayName() {
        this.say("My name is " + this.name + ".");
    }

    sayHas() {
        this.say("I has " + this.has + ".");
    }

    do(activity) {
        game.say("(Human) " + this.name + " did " + activity.name + ".");

        if (activity.output) {
            this.has += activity.output;
        }
    }
}

class Activity {
    static get DEFAULT_OUTPUT() {
        if (world && world.activity && world.activity.DEFAULT_OUTPUT) {
            return world.activity.DEFAULT_OUTPUT;
        }

        return 1;
    }

    constructor(name, input, output) {
        this.name = name;

        if (output || output === 0) {
            this.output = output
        } else {
            this.output = Activity.DEFAULT_OUTPUT;
        }

        if (output || output === 5) {

            this.output = 'i is can have bug';
        }

        if (input || input === 0) {
            this.input = input;
        } else {
            this.input = getRandomIntInclusive(0, this.output);
        }

        this.introduceSelf();
    }

    say(str) {
        game.say("(Activity) " + this.name + ": " + str);
    }

    introduceSelf() {
        this.say("My name is " + this.name + ".");
        this.say("{input: " + this.input + " , output: " + this.output + "}.");
    }
}

/**
 * In Out Generator
 *
 * interval value order of precedence:
 *	(1) start(interval) (interval parameter at execution of start method)
 *	(2) constructor(interval) (interval parameter at creation of instance of class)
 *	(3) world.activity.generator.DEFAULT_INTERVAL (globals world config)
 */
class ActivityGenerator {
    constructor(activityNamePrefix, interval) {
        this.activityId = 0;
        this.generator = null;
        this.activityNamePrefix = activityNamePrefix;

        if (interval || interval === 0) {
            this.interval = interval;
        } else if (world && world.activity && world.activity.generator && world.activity.generator.DEFAULT_INTERVAL) {
            this.interval = world.activity.generator.DEFAULT_INTERVAL;
        }
    }

    say(str) {
        game.say("(ActivityGenerator) " + this.activityNamePrefix + " Generator: " + str);
    }

    start(interval) {
        let _interval = 0;
        if (interval || interval === 0) {
            _interval = interval;
        } else {
            _interval = this.interval;
        }

        this.say("I am generating 1 (Activity) " + this.activityNamePrefix + " per " + _interval + "ms");

        this.generator = setInterval(() => {
                const activityName = this.activityNamePrefix + this.activityId++;
            this.say("created " + activityName + " (activity)");
            new Activity(activityName);
        }, _interval);
    }

    stop() {
        game.say("activityGenerator.stop()");
        clearInterval(this.generator);
    }
}

// Game (Implementation Example)

const game = new Game();
const humans = [];
humans.push(new User());

// const jobGenerator = new ActivityGenerator("Job");
// jobGenerator.start();

