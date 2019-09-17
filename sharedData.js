module.exports.results = {
	data: {},
	reset: function(){
		this.data = {}
	}
}

module.exports.questions = [
	
	{
		question: "You just got a new toy, what do you do?",
		answer1: {
			Answer: "Play with it until it is broken",
			Value: "Playful"
		},
		answer2: {
			Answer: "Examine the toy carefully",
			Value: "Keen"
		},
		answer3: {
			Answer: "Make sure to put it away when you're done",
			Value: "Reliable"
		}
	},
	{
		question: "You have to see the doctor, what do you do?",
		answer1: {
			Answer: "Protest that you feel healthy already",
			Value: "Stubborn"
		},
		answer2: {
			Answer: "Jump in the car and stick your head outside the window",
			Value: "Adventurous"
		},
		answer3: {
			Answer: "Jump in and around the car the whole way",
			Value: "Active"
		}
	},
	{
		question: "You are at a place where others are unfimiliar...",
		answer1: {
			Answer: "Challenge someone to a race!",
			Value: "Playful"
		},
		answer2: {
			Answer: "Take in the scenery, but don't socialize",
			Value: "Quiet"
		},
		answer3: {
			Answer: "Introduce yourself",
			Value: "Sociable"
		}
	},
	{
		question: "When you are hungry, what do you do?",
		answer1: {
			Answer: "Find your own food",
			Value: "Independent"
		},
		answer2: {
			Answer: "Open the drawer where the food is",
			Value: "Keen"
		},
		answer3: {
			Answer: "Stare at someone's food until you get some",
			Value: "Affectionate"
		}
	},
	{
		question: "You are going on a hike, what are you going to do?",
		answer1: {
			Answer: "Encourage others with you",
			Value: "Happy"
		},
		answer2: {
			Answer: "Lead ahead to point the way",
			Value: "Dutiful"
		},
		answer3: {
			Answer: "Go out and adventure!",
			Value: "Courageous"
		}
	},
	{
		question: "You hear a loud noise from outside...",
		answer1: {
			Answer: "Make a lot of noise back!",
			Value: "Wild"
		},
		answer2: {
			Answer: "Turn your attention to the source of the noise",
			Value: "Alert"
		},
		answer3: {
			Answer: "Recognize the sound as familiar and remain calm",
			Value: "Intelligent"
		}
	},
	{
		question: "Your companion seems sad",
		answer1: {
			Answer: "Sit beside your companion",
			Value: "Loyal"
		},
		answer2: {
			Answer: "Act natural and unaware",
			Value: "Composed"
		},
		answer3: {
			Answer: "Try to make him/her laugh",
			Value: "Clownish"
		}
	},
	{
		question: "You smell an unfamiliar smell, what now?",
		answer1: {
			Answer: "Spring into action and investigate",
			Value: "Alert"
		},
		answer2: {
			Answer: "Alert everyone if the smell is dangerous",
			Value: "Intelligent"
		},
		answer3: {
			Answer: "Just sit there...",
			Value: "Aloof"
		}
	},
	{
		question: "You see cats!",
		answer1: {
			Answer: "Get really worked up and loud",
			Value: "Energetic"
		},
		answer2: {
			Answer: "Intimidate the cat",
			Value: "Willful"
		},
		answer3: {
			Answer: "Try to play!",
			Value: "Joyful"
		}
	},
	{
		question: "How would fair in an obstacle course?",
		answer1: {
			Answer: "I'd fair well and then some",
			Value: "Agile"
		},
		answer2: {
			Answer: "I'd made a good show for sure",
			Value: "Clever"
		},
		answer3: {
			Answer: "Pretty good I suppose",
			Value: "Gentle"
		}
	},
	{
		question: "What do you like about camping?",
		answer1: {
			Answer: "Playing all day!",
			Value: "Active"
		},
		answer2: {
			Answer: "Sleeping in...",
			Value: "Quiet"
		},
		answer3: {
			Answer: "The campfires",
			Value: "Sociable"
		}
	},
	{
		question: "You're playing with your friends and you hear your name called",
		answer1: {
			Answer: "Go find who called you",
			Value: "Reliable"
		},
		answer2: {
			Answer: "Pretend you didn't hear that and keep playing",
			Value: "Stubborn"
		},
		answer3: {
			Answer: "Notice the call but go away from the source",
			Value: "Adventurous"
		}
	},
	{
		question: "Would you be considered as a leader?",
		answer1: {
			Answer: "No, but I don't have to be",
			Value: "Happy"
		},
		answer2: {
			Answer: "Yes, I lead myself",
			Value: "Independent"
		},
		answer3: {
			Answer: "Yes indeed",
			Value: "Dutiful"
		}
	},
	{
		question: "A toy is thrown at you!",
		answer1: {
			Answer: "Freak out and grab the toy",
			Value: "Wild"
		},
		answer2: {
			Answer: "Act like that didn't just happen",
			Value: "Aloof"
		},
		answer3: {
			Answer: "Dodge the toy and pick it up",
			Value: "Agile"
		}
	},	
	{
		question: "A rival approaches...",
		answer1: {
			Answer: "Challenge the rival",
			Value: "Willful"
		},
		answer2: {
			Answer: "Run around to impress the rival",
			Value: "Energetic"
		},
		answer3: {
			Answer: "Act unaware of the rival's presence",
			Value: "Gentle"
		}
	},
	{
		question: "You are tricked!",
		answer1: {
			Answer: "Smile and laugh at the foolery",
			Value: "Joyful"
		},
		answer2: {
			Answer: "Find a way to fool them back",
			Value: "Clever"
		},
		answer3: {
			Answer: "Just shrug it off and go your way",
			Value: "Composed"
		}
	}
];

var traits = [
	'Stubborn',
	'Curious',
	'Playful',
	'Adventerous',
	'Active',
	'Loving',
	'Aloof',
	'Dignified',
	'Independent',
	'Happy',
	'Wild',
	'Hardworking',
	'Dutiful',
	'Outgoing',
	'Friendly',
	'Alert',
	'Confident',
	'Intelligent',
	'Courageous',
	'Loyal',
	'Brave',
	'Composed',
	'Receptive',
	'Faithful',
	'Gentle',
	'Protective',
	'Trainable',
	'Assertive',
	'Clownish',
	'Tenacious',
	'Attentive',
	'Lively',
	'Agile',
	'Sociable',
	'Clever',
	'Calm',
	'Joyful',
	'Willful',
	'Energetic',
	'Adventurous',
	'Quiet'
];
