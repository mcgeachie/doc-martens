var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var Title = (function () {
    function Title() {
        this.title = "Movies Data Management System";
        this.strapline = "A place for editors to create content rich data objects for films on the telly and that";
    }
    Title = __decorate([
        angular2_1.Component({
            selector: 'title',
            template: "\n    <h1>{{title}}</h1>\n    <h2>{{strapline}}</h2>\n  ",
            styleUrls: [
                '/components/title/styles.css'
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], Title);
    return Title;
})();
exports.Title = Title;
//# sourceMappingURL=title.js.map