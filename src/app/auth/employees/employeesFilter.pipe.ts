import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filterEmployees'})
export class FilterEmployeesArrayPipe implements PipeTransform{
    transform(items: any[], searchText: string): any[] {
        if(!items) return [];
        if(!searchText) return items;

        searchText = searchText.toLowerCase();

        return items.filter(it => {
            console.log(it);
            if(it.firstName.toLowerCase().includes(searchText)){
                console.log(it);
                return it;
            }
            else if(it.lastName.toLowerCase().includes(searchText)){
                console.log(it);
                return it;
            }
            else if(it.jobTitle.toLowerCase().includes(searchText)){
                console.log(it);
                return it;
            }
        })
    }
}
