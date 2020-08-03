import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'comparePassword',
})
export class ComparePasswordPipe implements PipeTransform {
    transform(password: string, confirmPassword: string): any {
        return password === confirmPassword ? null : { mismatch: true };
    }
}
