import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filterTasks'})
export class FilterTasksArrayPipe implements PipeTransform{
    transform(items: any[], searchText: string): any[] {
        if(!items) return [];
        if(!searchText) return items;

        searchText = searchText.toLowerCase();

        return items.filter(it => {
            if(it.employeeFirstName.toLowerCase().includes(searchText)){
                return it;
            }
            else if(it.employeeLastName.toLowerCase().includes(searchText)){
                return it;
            }
            else if(it.dueDate.toLowerCase().includes(searchText)){
                return it;
            }
            else if(it.content.toLowerCase().includes(searchText)){
                return it;
            }
            else if(it.completed.toLowerCase().includes(searchText)){
                return it;
            }
        })
    }
}
