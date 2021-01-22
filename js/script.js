const quotes=[ // http://www.devtopics.com/101-great-computer-programming-quotes/
           'The best thing about a boolean is even if you are wrong, you are only off by a bit. (Anonymous)',
           'Without requirements or design, programming is the art of adding bugs to an empty text file. (Louis Srygley)',
           'Before software can be reusable it first has to be usable. (Ralph Johnson)',
           'The best method for accelerating a computer is the one that boosts it by 9.8 m/s2. (Anonymous)',
           'I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing. (Oktal)',
           'If builders built buildings the way programmers wrote programs, then the first woodpecker that came along would destroy civilization. (Gerald Weinberg)',
           'There are two ways to write error-free programs; only the third one works. (Alan J. Perlis)',
           'Ready, fire, aim: the fast approach to software development. Ready, aim, aim, aim, aim: the slow approach to software development. (Anonymous)',
           'It’s not a bug – it’s an undocumented feature. (Anonymous)',
           'One man’s crappy software is another man’s full-time job. (Jessica Gaston)',
           'A good programmer is someone who always looks both ways before crossing a one-way street. (Doug Linder)',
           'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. (Martin Golding)',
           'Programming is like sex. One mistake and you have to support it for the rest of your life. (Michael Sinz)',
           'Deleted code is debugged code. (Jeff Sickel)',
           'Walking on water and developing software from a specification are easy if both are frozen. (Edward V Berard)',
           'If debugging is the process of removing software bugs, then programming must be the process of putting them in. (Edsger Dijkstra)',
           'Software undergoes beta testing shortly before it’s released. Beta is Latin for “still doesn’t work. (Anonymous)',
           'Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the universe trying to produce bigger and better idiots. So far, the universe is winning. (Rick Cook)',
           'It’s a curious thing about our industry: not only do we not learn from our mistakes, but we also don’t learn from our successes. (Keith Braithwaite)',
           'There are only two kinds of programming languages: those people always bitch about and those nobody uses. (Bjarne Stroustrup)',
           'In order to understand recursion, one must first understand recursion. (Anonymous)',
           'The cheapest, fastest, and most reliable components are those that aren’t there. (Gordon Bell)',
           'The best performance improvement is the transition from the nonworking state to the working state. (J. Osterhout)',
           'The trouble with programmers is that you can never tell what a programmer is doing until it’s too late. (Seymour Cray)',
           'Don’t worry if it doesn’t work right. If everything did, you’d be out of a job. (Mosher’s Law of Software Engineering)',
           'Even when you think your code is complete , one missing conditional can create a bug and crush your program There was conditional in particular ," If sandbox is everyone\'s dream  " , I overlooked this conditonal and this is result of it .  A bug occured , and I crashed . (Nam Do-san)',
           'Computers are useless.  They can only give you answers. (Pablo Picasso)',
           'Computers are like bikinis. They save people a lot of guesswork. (Sam Ewing)',
           'If the automobile had followed the same development cycle as the computer, a Rolls-Royce would today cost $100, get a million miles per gallon, and explode once a year, killing everyone inside (Robert X. Cringely)',
           'Computers are getting smarter all the time.  Scientists tell us that soon they will be able to talk to us.  (And by ‘they’, I mean ‘computers’.  I doubt scientists will ever be able to talk to us. (Dave Barry)',
           'I’ve noticed lately that the paranoid fear of computers becoming intelligent and taking over the world has almost entirely disappeared from the common culture.  Near as I can tell, this coincides with the release of MS-DOS. (Larry DeLuca)',
           'The question of whether computers can think is like the question of whether submarines can swim. (Edsger W. Dijkstra)',
           'It’s ridiculous to live 100 years and only be able to remember 30 million bytes.  You know, less than a compact disc.  The human condition is really becoming more obsolete every minute. (Marvin Minsky)',
           'The city’s central computer told you?  R2D2, you know better than to trust a strange computer! (C3PO)',
           'Never trust a computer you can’t throw out a window. (Steve Wozniak)',
           'Hardware: The parts of a computer system that can be kicked. (Jeff Pesis) ',
           'The most amazing achievement of the computer software industry is its continuing cancellation of the steady and staggering gains made by the computer hardware industry (Henry Petroski)',
           'True innovation often comes from the small startup who is lean enough to launch a market but lacks the heft to own it. (Timm Martin)',
           'It has been said that the great scientific disciplines are examples of giants standing on the shoulders of other giants.  It has also been said that the software industry is an example of midgets standing on the toes of other midgets. (Alan Cooper)',
           'It is not about bits, bytes and protocols, but profits, losses and margins. (Lou Gerstner)',
           'We are Microsoft.  Resistance Is Futile.  You Will Be Assimilated. (Bumper sticker)',
           'Any fool can use a computer.  Many do. (Ted Nelson)',
           'There are only two industries that refer to their customers as ‘users’. (Edward Tufte)',
           'Programmers are in a race with the Universe to create bigger and better idiot-proof programs, while the Universe is trying to create bigger and better idiots.  So far the Universe is winning. (Rich Cook)',
           'Most of you are familiar with the virtues of a programmer.  There are three, of course: laziness, impatience, and hubris. (Larry Wall)',
           '“The trouble with programmers is that you can never tell what a programmer is doing until it’s too late. (Seymour Cray)',
           'That’s the thing about people who think they hate computers.  What they really hate is lousy programmers. (Larry Niven)',
           'Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter. (Eric Raymond) ',
           'The best programmers are not marginally better than merely good ones.  They are an order-of-magnitude better, measured by whatever standard: conceptual creativity, speed, ingenuity of design, or problem-solving ability (Randall E. Stross)',
           'A great lathe operator commands several times the wage of an average lathe operator, but a great writer of software code is worth 10,000 times the price of an average software writer. (Bill Gates)',
           'Should array indices start at 0 or 1?  My compromise of 0.5 was rejected without, I thought, proper consideration. (Stan Kelly-Bootle)',
           'There are only two kinds of programming languages: those people always bitch about and those nobody uses. (Bjarne Stroustrup)',
           'PHP is a minor evil perpetrated and created by incompetent amateurs, whereas Perl is a great and insidious evil perpetrated by skilled but perverted professionals. (Jon Ribbens)',
           'The use of COBOL cripples the mind; its teaching should therefore be regarded as a criminal offense. (E.W. Dijkstra)',
           'It is practically impossible to teach good programming style to students that have had prior exposure to BASIC.  As potential programmers, they are mentally mutilated beyond hope of regeneration. (E.W. Dijkstra)',
           'I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing. (Oktal)',
           'There is no programming language–no matter how structured–that will prevent programmers from making bad programs. (Larry Flon)',
           'Computer language design is just like a stroll in the park.  Jurassic Park, that is. (Larry Wall)',
           'Software is like sex: It’s better when it’s free. (Linus Torvalds)',
           'The only people who have anything to fear from free software are those whose products are worth even less. (David Emery)',
           'Good code is its own best documentation. (Steve McConnell)',
           'Any code of your own that you haven’t looked at for six or more months might as well have been written by someone else. (Eagleson’s Law)',
           'The first 90% of the code accounts for the first 90% of the development time.  The remaining 10% of the code accounts for the other 90% of the development time. (Tom Cargill)',
           'Good programmers use their brains, but good guidelines save us having to think out every case. (Francis Glassborow)',
           'In software, we rarely have meaningful requirements.  Even if we do, the only measure of success that matters is whether our solution solves the customer’s shifting idea of what their problem is. (Jeff Atwood)',
           'Considering the current sad state of our computer programs, software development is clearly still a black art, and cannot yet be called an engineering discipline. (Bill Clinton)',
           'You can’t have great software without a great team, and most software teams behave like dysfunctional families. (Jim McCarthy)',
           'Debugging is twice as hard as writing the code in the first place.  Therefore, if you write the code as cleverly as possible, you are–by definition–not smart enough to debug it. (Brian Kernighan)',
           'If debugging is the process of removing bugs, then programming must be the process of putting them in. (Edsger W. Dijkstra)',
           'I don’t care if it works on your machine!  We are not shipping your machine! (Vidiu Platon)',
           'You can either have software quality or you can have pointer arithmetic, but you cannot have both at the same time. (Bertrand Meyer)',
           'If McDonalds were run like a software company, one out of every hundred Big Macs would give you food poisoning, and the response would be, ‘We’re sorry, here’s a coupon for two more. (Mark Minasi)',
           'To err is human, but to really foul things up you need a computer. (Paul Ehrlich)',
           'Everything that can be invented has been invented. (Charles H. Duell)',
           'It would appear that we have reached the limits of what it is possible to achieve with computer technology, although one should be careful with such statements, as they tend to sound pretty silly in 5 years. (John Von Neumann, circa 1949)',
           'But what is it good for? (Engineer at the Advanced Computing Systems Division of IBM, commenting on the microchip, 1968)',
           'There is no reason for any individual to have a computer in his home. (Ken Olson, President, Digital Equipment Corporation, 1977)',
           '640K ought to be enough for anybody. (Bill Gates, 1981)',
           '“If it keeps up, man will atrophy all his limbs but the push-button finger. (Frank Lloyd Wright)',

];

// let btn=document.querySelector('.btn');
// btn.addEventListener('click', displayQuote);

function displayQuote(){
    //CREATE AN INDEX OF A RANDDOM NUMNBER
    //COVERT IT INTO BETWEEN 0 TO LENGTH OF QUOTES []
    let index=Math.floor(Math.random()*quotes.length);
   
    // DISPLAYING OF THE QUOTE 
    let div=document.querySelector('#quote');
    let quote=`<div class="card">
    <i class="fas fa-quote-right"></i>
    <p>${quotes[index]}</p>
    <i class="fas fa-quote-right"></i>
   </div>
    `;
    div.innerHTML=quote;
}

// UPDATED YEAR FOOTER
const year = document.querySelector('#year');
year.textContent = new Date().getFullYear();



