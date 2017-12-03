var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
var FilterTasksArrayPipe = /** @class */ (function () {
    function FilterTasksArrayPipe() {
    }
    FilterTasksArrayPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            if (it.employeeFirstName.toLowerCase().includes(searchText)) {
                console.log(it);
                return it;
            }
            else if (it.employeeLastName.toLowerCase().includes(searchText)) {
                console.log(it);
                return it;
            }
            else if (it.dueDate.toLowerCase().includes(searchText)) {
                console.log(it);
                return it;
            }
            else if (it.content.toLowerCase().includes(searchText)) {
                console.log(it);
                return it;
            }
            else if (it.completed.toLowerCase().includes(searchText)) {
                console.log(it);
                return it;
            }
        });
    };
    FilterTasksArrayPipe = __decorate([
        Pipe({ name: 'filterTasks' })
    ], FilterTasksArrayPipe);
    return FilterTasksArrayPipe;
}());
export { FilterTasksArrayPipe };
