import {EventEmitter, Output} from '@angular/core';
import {Error} from './error.model';

export class ErrorService {
    @Output() errorOccurred = new EventEmitter<Error>();

    handleError(error: any) {
        const errorData = new Error(error.title, error.error.message);
        console.log(errorData)
        console.log(this);
        this.errorOccurred.emit(errorData);
    }
}
