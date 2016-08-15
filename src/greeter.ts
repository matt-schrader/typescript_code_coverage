export default class greeter {

    public greet(name: string) {
        return this.greeting(null) + ' ManJoo ' + name
    }

    private greeting(hello: string) {
        if (hello) {
            return hello;
        }
        return "HI";
    }
}
