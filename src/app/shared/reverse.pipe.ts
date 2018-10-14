import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse-pipe'
})

export class ReversePipe implements PipeTransform {
  transform(value: string) {
    return value.split('').reverse().join('');
  }
}
