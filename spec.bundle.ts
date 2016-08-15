requireAll((<any>require).context("./src", true, /spec.ts$/));

function requireAll(r: any): any {
    r.keys().forEach(r);
}