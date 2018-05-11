// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'filterEventPipe'
// })
// export class FilterEventPipePipe implements PipeTransform {

//   transform(value: Array<Event>, searchTerm: string): Array<Event> {
//     if(!value) {
//     return [];
//   }

//     if(!searchTerm) {
//       return value;
//     }

//   const filteredArray = [];

//   value.forEach((oneEvent) => {

//   })
// }


// @Pipe({
//   name: 'foodFilter'
// })
// export class FoodFilterPipe implements PipeTransform {

//   transform(value: Array<Food>, searchTerm: string): Array<Food> {
//     if (!value) {
//       return [];
//     }

//     if(!searchTerm) {
//       return value;
//     }
//     searchTerm = searchTerm.toLocaleLowerCase();

//     const filteredArray = []; 

//     value.forEach((oneFood) => {
//       const lowerFoodName = oneFood.name.toLocaleLowerCase();
//       if (lowerFoodName.includes(searchTerm)) {
//         filteredArray.push(oneFood);
//       }
//     });
//     return filteredArray;
//   }

// }
