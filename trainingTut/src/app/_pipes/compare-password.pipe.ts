import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comparePassword'
})
export class ComparePasswordPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
