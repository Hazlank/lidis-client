// import theme.
require('../src/sass/main.scss');
// TODO: 导入iconfont.

requireAll((<any>require).context('./', true, /spec.ts$/));
function requireAll(r: any): any {
    r.keys().forEach(r);
}
