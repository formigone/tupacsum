var words = "I hear Brenda's got a baby. But, Brenda's barely got a brain. "
	+ "The girl can hardly spell her name. That's not our problem, that's up to Brenda's family. "
	+ "Well let me show ya how it affects the whole community. "
	+ "Now Brenda really never knew her moms and her dad was a junky. "
	+ "Went in death to his arms, it's sad. Cause I bet Brenda doesn't even know. "
	+ "Just cause your in the ghetto doesn't mean ya can't grow. "
	+ "But oh, that's a thought, my own revelation. "
	+ "Do whatever it takes to resist the temptation. Brenda got herself a boyfriend. "
	+ "Her boyfriend was her cousin, now lets watch the joy end. "
	+ "She tried to hide her pregnancy, from her family. Went out and had a church of kids. "
	+ "As long as when the check came they got first dibs. Now Brenda's belly is gettin bigger. "
	+ "But no one seems to notice any change in her figure. "
	+ "She's 12 years old and she's having a baby. "
	+ "And yet she thinks that he'll be with her forever. "
	+ "And dreams of a world with the two of them are together, whatever. "
	+ "He left her and she had the baby solo, she had it on the bathroom floor. "
	+ "And didn't know so, she didn't know, what to throw away and what to keep. "
	+ "She wrapped the baby up and threw him in the trash heep. "
	+ "I guess she thought she'd get away. Wouldn't hear the cries. She didn't realize. "
	+ "How much the the little baby had her eyes. Now the baby's in the trash heep balling. "
	+ "Momma can't help her, but it hurts to hear her calling. Brenda wants to run away. "
	+ "Momma say, you makin' me lose pay, the social workers here everyday. "
	+ "Now Brenda's gotta make her own way. Can't go to her family, they won't let her stay. "
	+ "No money no babysitter, she couldn't keep a job. "
	+ "She tried to sell crack, but end up getting robbed. "
	+ "So now what's next, there ain't nothing left to sell. "
	+ "It's paying the rent, so she really can't complain. ";

self.addEventListener("message", function(e) {
	self.postMessage(generatePacsum(e.data.len, e.data.startWith));
});

function generatePacsum(len, startWith) {
	var phrases = words.split(". ");
	var phrasesLen = phrases.length;
	var paragLen;
	var index;
	var out = "";

	for (var i = 0; i < len; i++) {
		paragLen = parseInt(Math.random() * 3) + 3;
		out += "<p>";
		
		if (i == 0 && startWith)
			out += "Tupacsum Ipsum ";

		for (var x = 0; x < paragLen; x++) {
			index = parseInt(Math.random() * phrasesLen);
			out += phrases[index] + ". ";
		}
		out += "</p>";
	}
	
	return out;
}