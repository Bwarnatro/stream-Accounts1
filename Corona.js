
const Discord = require("discord.js");

const Yaxi = new Discord.Client();

//////// playing or dnd  streaming ////////

Yaxi.on("ready", () => {

  console.log(

    `Online In Servers`

  );

  let statuses = [

  

  `You only live once, so try to live for God.`,

 

  ];

  setInterval(function() {

    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];

    corona.user.setActivity(STREAMING, {      

    type: "STREAMING", 

    url: "https://www.twitch.tv/faith"

    });

  }, 2000);

});

///////////////////////

corona.on("ready", () => {

    var join = corona.channels.get("874334828265365558"); /// id voice

    if (join) join.join();

  });

//////////////// tokn lera da bne 

corona.login(""mfa.xGLik_QTZQmtiKaMA_wxKjc33bGmzawG9EjTAGkLG-Y-Hn0RlLAnpZcmvZZxLedrD_Y-Zz7GlxghfD2laK8G"");






  

 





 



