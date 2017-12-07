import {EventEmitter, Output} from '@angular/core';
import {Error} from './error2.model';

export class Error2Service {
    @Output() errorOccurred = new EventEmitter<Error>();

    handleError(error: any) {
        const errorData = new Error(error.title, error.error.message);
        this.errorOccurred.emit(errorData);
    }
}
