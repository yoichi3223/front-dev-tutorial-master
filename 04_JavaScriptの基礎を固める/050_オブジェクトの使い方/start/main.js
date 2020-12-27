const person = {
  name:["code","yoichi"],
  name2:["test"],
  interest:{
    sports:"soccer",
    music:"piano"
  },
  getFullName: function() {
        console.log(this.name[0] + this.name[1]) 
    }
};

person.getFullName();
