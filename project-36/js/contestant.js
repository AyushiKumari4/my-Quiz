class Contestant {
    constructor(){
      this.name=null
      this.answer=null
     // this.distance=0
      this.index=null
    }
  
    getCount(){
      var ContestantCountRef = database.ref('contestantCount');
      ContestantCountRef.on("value",(data)=>{
  
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var contestantIndex = "contestants/contestant" + this.index;
      database.ref(contestantIndex).set({
        name:this.name,
        answer: this.answer
      });
    }
    static getPlayerInfo(){
      var contestantInfoRef = database.ref('contestants');
      contestantInfoRef.on("value",(data)=>{
  
        allContestants = data.val();
      })
    }
  }
  