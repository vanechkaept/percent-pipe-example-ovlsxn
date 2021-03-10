import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "trans"
})
export class TransPipe implements PipeTransform {
  transform(time: number): number {
    return time * 100;
  }
}
