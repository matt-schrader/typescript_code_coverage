const greeter = {

    greet: function (name: string) {
        return this.greeting(null) + ' ManJoo ' + name 
    },

    greeting: function(hello: string){
        if (hello){
            return hello;
        }
        return "HI";
    }
}

export = greeter;
