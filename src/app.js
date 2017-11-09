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

// Classes

class Game {
    say(str) {
        //console.log(str);
        document.body.insertAdjacentHTML("beforeend", moment().format('YYYY-MM-DD HH:mm:ss') + ": " + str + "<br>");
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
const jobGenerator = new ActivityGenerator("Job");
jobGenerator.start();

humans.push(new Human("Adam"));
