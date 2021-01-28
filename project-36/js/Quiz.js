class Quiz{
    constructor(){

    }
    getState(){
        var gameStateRef= database.ref('gameState')
        gameStateRef.on("value",function(data){
            gameState = data.val();

        })
    }
    update(state){
        database.ref('/').update({
          gameState: state
        });
      }
      async start(){
          if(gameState===0){
              contestant=new Contestant();
              var contestantCountRef= await database.ref('contestantCount').once("value");
              if(contestantCountRef.exists()){
                contestantCount = contestantCountRef.val();
                  contestant.getCount();
              }
             var question=new Question();
              question.display();
          }
      }
      play(){
        //quiz.hide();
        backgroundColor = "yellow";
        var resultTitle = createElement("h1");
        resultTitle.html("RESULTS");
        resultTitle.position(100,10);
        contestant.getContestantInfo();
        if(allContestants !== undefined){
          var display_pos = 130;
          var correctAnswer = 1;
          for(var plr in allContestants){
            if (correctAnswer === allContestants[plr].answer)
              fill("green")
            else
              fill("black");
            textSize(15);
            text(allContestants[plr].name + ": " + allContestants[plr].answer, 120,display_pos);
          }
        }
      }
}