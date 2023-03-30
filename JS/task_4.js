let duck = {
    name: "Дональд",
    color: "белый",
    age: "1",
    toStr: function() { console.log(`${this.name}, ${this.color}, ${this.age} год`) },
    say: function() { console.log('кря кря') },
};

duck.toStr();
duck.say();