import {Pipe, PipeTransform} from '@angular/core';
import {Movie, Serie} from '../service/movie-tv.service';
import {Event} from '../service/event.service';
import {User} from '../service/user.service';

@Pipe({
  name: 'userFilter',
})
export class UserFilterPipe implements PipeTransform {
  transform(
    value: Array<Movie | Event | Serie>,
    caracUser?: any,
    caracMovie?: any
  ): Array<Movie | Event | Serie> {
    return;
  }
}

// export class ActorFilterPipe implements PipeTransform {
//   transform(value: Array<Actor>, searchTerm: string): Array<Actor> {
//     if (!value) {
//       return [];
//     }
//     if (!searchTerm) {
//       return value;
//     }

//     searchTerm = searchTerm.toLowerCase();

//     const filteredArray: Array<Actor> = [];

//     value.forEach(oneActor => {
//       const lowerActorName = oneActor.actorName.toLowerCase();
//       if (lowerActorName.includes(searchTerm)) {
//         filteredArray.push(oneActor);
//       }
//     });
//     return filteredArray;
//   }
// }
