function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  //textSize(40);
  fill(0);

  text(
    ['At the outset my focus was on making computational design more practically applicable, more useful, through a narrowing context and defined output. This has been complicated by the desire to incorporate certain aspects which I have found are core to the process - randomness (or the more correct term, unpredictability), working through logic, the creation of a system over an output, the inclusion of third party (or live) data, and the role of the user. It’s a lot to unpack. It has also led to the formation of broader research questions which have surfaced through iteration and reflection, which I am going to discuss below. I will say at the start that it has led me to abandon the desire to have a defined real-world application for this project work. This is not to say computational design is not useful and cannot be applied to real world outputs (this is very much not the case), but rather that application leads to conclusions, and in framing this work as research I am much more interested in the formation of questions.'],
    50,50,windowWidth-200,windowHeight
  );

  text(
    ['What can working with algorithms bring to the design process?'],
    50,140,windowWidth-200,windowHeight
  );

  text(
    ['Design is often an iterative and intentional process. The process rarely involves knowing exactly what the outcome is going to be, but rather the designer has ideas about the direction and through various sketches, trials, and prototypes arrives at a satisfying conclusion. Programming, on the other hand, tends to be extremely defined. A developer is shown what must be produced and labours to generate that specific result by navigating complex computer instructions and languages. Creative coding lies somewhere in between. It is an iterative process with a poorly defined output, akin to design, but using tools which require precise instructions and generate precise results. This is what creates this element of unpredictability - the system does precisely what the designer tells it to, even when the designer doesn’t fully comprehend what he’s telling the system to do. Tyler Hobbs is an American generative artist who works using computation to create elaborate two dimensional abstract works based on mathematical formulae. On this topic he says:'],
    50,160,windowWidth-200,windowHeight
  );

  text(
    ['“The program is me pushing in a certain direction, but not explicitly laying out what needs to happen. I am still trying to leave room for the program to surprise me with unexpected results, just [a] type of guided randomness.”'],
    50,250,windowWidth-200,windowHeight
  );

  text(
    ['And later:'],
    50,280,windowWidth-200,windowHeight
  );

  text(
    ['“There is also some very different approaches that tend to rely on more emergent properties, and emergent structures, so what I mean by emergence in this case is you have this very simple set of rules that does not look like it is going to do anything interesting, but if you run it repeatedly over time, these large super structures start to present themselves that you would not be able to predict just from looking at the rules.”(2019)'],
    50,300,windowWidth-200,windowHeight
  );

  text(
    ['How does working through logic and data change design practice for the designer?'],
    50,350,windowWidth-200,windowHeight
  );

  text(
    ['There is an irony in working with code in that you must give precise instructions to generate even random, unknown, or mistaken results. Many working with code profess that their mistakes often lead to the most interesting outcomes.'],
    50,380,windowWidth-200,windowHeight
  );

  text(
    ['“Computers don’t take fuzzy instructions. They have to know exactly what you want them to do, and how to do it. The artist will labor to inject a sense of wonder and surprise into an ecosystem that was carefully engineered to behave predictably.” (Hobbs, 2021)'],
    50,410,windowWidth-200,windowHeight
  );

  text(
    ['The fundamental shift in the process is that it is a departure from making things directly. Instead, the role of the designer is to make a thing that makes a thing. This is what I mean by the creation of an information system. What is actually designed is a set of instructions and rules, which are based on logic, formulae, and even physics, which are then carried out by an extremely efficient other.'],
    50,450,windowWidth-200,windowHeight
  );

  text(
    ['How does interacting with fluid (as opposed to static) interfaces affect the user?'],
    50,500,windowWidth-200,windowHeight
  );

  text(
    ['For this last question, I have found common ground in the position of Bruno Munari. In his writing on continuous structures he argues for the creation of work which opens up to the input and influence of the viewer, stating that, “We need to give the spectator more room to penetrate into the work itself, and works which allow this are called ‘open’” and, “in an open work of art a person participates much more, to the extent of being able to change the work of art according to his state of mind.” (1966) This method of practice offers the opportunity to create work that is dynamic and occurs in real time, often directly influenced by the viewer, thus generating experiences that are inherently unique.'],
    50,520,windowWidth-200,windowHeight
  );

  text(
    ['Through the work of Hobbs and Munari I have found similar attitudes and reflections to those I have arrived at through my own iterative research. Inevitably my position on these questions is still developing and will lead to more foci of exploration.'],
    50,580,windowWidth-200,windowHeight
  );
  
    text(
    ['References'],
    50,620,windowWidth-200,windowHeight
  );

  text(
    ['Hobbs, T. (2019) ‘Code goes in, Art comes out’, Tyler Hobbs, 22 June. Available at https://tylerxhobbs.com/essays/2019/code-goes-in-art-comes-out'],
    50,640,windowWidth-200,windowHeight
  );

  text(
    ['Hobbs, T. (2021) ‘The importance of Generative Art’, Tyler Hobbs, 5 May. Available at https://tylerxhobbs.com/essays/2021/the-importance-of-generative-art'],
    50,660,windowWidth-200,windowHeight
  );
  
  text(
    ['Munari, B. (1966) Design as Art. London: Penguin Modern Classics, p. 169'],
    50,680,windowWidth-200,windowHeight
  );
}
