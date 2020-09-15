<template>
  <div id="app">
  <div class="game-container">
    <div class="header">
      <h1>Rock Paper Scissors Lizard Spock</h1>
    </div>:
    <div class="player-container" id="player">
      <h2>You - <span id="playerSc">{{textContent4}}</span> <span class="choice" :id="playerChoice">--- {{textContent}}</span></h2>
      <font-awesome-icon :class="[textContent=='rock' ? 'active' : '', 'far']" icon="hand-rock" title="Rock" :id="playerRock" @click="select('rock')"/>
      <font-awesome-icon :class="[textContent=='paper' ? 'active' : '', 'far']" icon="hand-paper" title="Paper" :id="playerPaper" @click="select('paper')"/>
      <font-awesome-icon :class="[textContent=='scissors' ? 'active' : '', 'far']" icon="hand-scissors" title="Scissors" :id="playerScissors" @click="select('scissors')"/>
      <font-awesome-icon :class="[textContent=='lizard' ? 'active' : '', 'far']" icon="hand-lizard" title="Lizard" :id="playerLizard" @click="select('lizard')"/>
      <font-awesome-icon :class="[textContent=='spock' ? 'active' : '', 'far']" icon="hand-spock" title="Spock" :id="playerSpock" @click="select('spock')"/>
    </div>


    <div class="player-container" id="computer">
      <h2>computer - <span id="computerSc">{{textContent5}}</span> <span class="choice" :id="computerChoice"> --- {{textContent2}}</span></h2>
      <font-awesome-icon :class="[textContent2=='rock' ? 'active' : '', 'far']"  icon="hand-rock" title="Rock" id="computerRock"/>
      <font-awesome-icon :class="[textContent2=='paper' ? 'active' : '', 'far']"  icon="hand-paper" title="Paper" id="computerPaper"/>
      <font-awesome-icon :class="[textContent2=='scissors' ? 'active' : '', 'far']" icon="hand-scissors" title="Scissors" id="computerScissors"/>
      <font-awesome-icon :class="[textContent2=='lizard' ? 'active' : '', 'far']"  icon="hand-lizard" title="Lizard" id="computerLizard"/>
      <font-awesome-icon :class="[textContent2=='spock' ? 'active' : '', 'far']" icon="hand-spock" title="Spock" id="computerSpock"/>
    </div>

    <font-awesome-icon icon="sync" title="Sync"/>
    <div class="result-container">
      <h3 class="result-text" id="resultText">{{textContent3}}!</h3>
    </div>

  </div>
  </div>
</template>

<script>


export default {
  name: "App",
  data(){
    return{
      playerSpock: 0,
      playerLizard:0,
      playerScissors:0,
      playerPaper:0,
      playerRock:0,
      playerChoice:0,
      textContent: "",
      computerChoice : '',
      textContent2:'',
     choices:{ rock:{name:'Rock', defeats:['scissors' , 'lizard']},
               paper:{name:'Paper' , defeats:['rock' , 'spock']},
               scissors:{name:'Scissors', defeats:['paper', 'lizard']},
               lizard:{name:'Lizard', defeats:['paper','spock']},
               spock:{name:'Spock' , defeats:['scissors', 'rock']}},
      playerScoreNumber:0,
      computerScoreNumber:0,
      textContent3:"",
      textContent4:0,
      textContent5:0,
}
  },
  components: {
  
  },
  methods:{

  select(playerChoice){
  this.textContent = playerChoice

  this.checkResult(playerChoice)

},

computerRandomeChoice(){
const computerChoiceNumber = Math.random()
if(computerChoiceNumber<0.2){
  this.computerChoice ='rock'
}else if(computerChoiceNumber <=0.4){
  this.computerChoice = 'paper'
}else if(computerChoiceNumber <=0.6){
  this.computerChoice ='scissors'
}else if(computerChoiceNumber<=0.8){
  this.computerChoice = 'lizard'
}else{
  this.computerChoice = 'spock'
}
this.textContent2 = this.computerChoice
  

},

updateScore(playerChoice){
console.log(playerChoice, this.computerChoice)
if (playerChoice === this.computerChoice){
  this.textContent3 = "It's a tie."
}
else{
 let choice = this.choices[playerChoice]
 console.log(choice.defeats.indexOf(this.computerChoice))
 if(choice.defeats.indexOf(this.computerChoice) > -1){
  this.textContent3= "You Won!!"
  this.playerScoreNumber++
  this.textContent4 = this.playerScoreNumber
 }
 else{
   this.textContent3= "You Lost!!"
   this.computerScoreNumber++
   this.textContent5 = this.computerScoreNumber
 }
}
},

checkResult(playerChoice){
  this.computerRandomeChoice();
  this.updateScore(playerChoice)
}

  }
};
</script>

<style>
#app {
  font-family: Lato, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: whitesmoke;
  margin: 0;
  min-height: 100vh;
}


.game-container{
  width:530px;
  height: 600px;
  background: white;
  border-radius: 5px;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.5);
}


.header{
  background: dodgerblue;
border-top-left-radius: 5px;
border-top-right-radius:5px ;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.active{
  color: black !important;
}
.far{
  font-size: 50px;
  margin-right: 40px;
  user-select: none;
}

#player .far,
#player .choice{
  color: dodgerblue;
  cursor:pointer
}

#computer .far,
#computer .choice{
  color:rgb(235, 43, 52) ;
}




@media screen and (max-width: 600px){
  .game-container{
    width: 95%;
    height: 580px;
  }
  h1{
    font-size: 24px;
  }
  .player-containor{
    margin: 50px 0 25px 25px;

  }
  .far{
    margin-right: 20px;
  }
  .sync{
    margin-top: 25px;
    margin-left:25px;
  }
}

@media screen and (max-width:376px){
  .game-container{
    height: 550px;
  }
  h1{
    font-size: 22px;
  }
  .player-containor{
    margin:  43px 0 25px 20px;
  }
  .far{
    margin-right: 20px;

  }

  .sync{
    margin-top: 25px;
    margin-left: 25px;
  }
}


</style>
