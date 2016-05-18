import { Pipe, PipeTransform } from "angular2/core";

@Pipe({name: "uppercaseFirst"})
export class UppercaseFirstPipe implements PipeTransform {
  transform(input: string): string {
    if (input != null)
    input = input.toLowerCase();
    return input.substring(0, 1).toUpperCase() + input.substring(1);
  }
}