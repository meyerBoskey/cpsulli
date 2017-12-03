var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
var FilterEmployeesArrayPipe = /** @class */ (function () {
    function FilterEmployeesArrayPipe() {
    }
    FilterEmployeesArrayPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            console.log(it);
            if (it.firstName.toLowerCase().includes(searchText)) {
                console.log(it);
                return it;
            }
            else if (it.lastName.toLowerCase().includes(searchText)) {
                console.log(it);
                return it;
            }
            else if (it.jobTitle.toLowerCase().includes(searchText)) {
                console.log(it);
                return it;
            }
        });
    };
    FilterEmployeesArrayPipe = __decorate([
        Pipe({ name: 'filterEmployees' })
    ], FilterEmployeesArrayPipe);
    return FilterEmployeesArrayPipe;
}());
export { FilterEmployeesArrayPipe };
