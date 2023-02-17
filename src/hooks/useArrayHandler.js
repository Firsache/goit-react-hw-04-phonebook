// import { nanoid } from 'nanoid';
// import { useLocalStorage } from './useLocalStorage';

// export function useArrayHandler(key, initialState = []) {
//   const [array, setArray] = useLocalStorage(key, initialState);

//     const addNewObj = (a, b) => {
//         if (array.some(object => object.a === a){
//             alert(`Contact ${a} already exists!`);
//             return;
//         })

//         if (array.some(object => object.b === b){
//             alert(`Contact ${b} already exists!`);
//             return;
//         })

//         setArray(prev => [{id: nanoid(4), a, b}, ...prev])
//     }

//     const deleteObj = id => {
//         const newArr = array.filter(object => object.id !== id);
//         setArray(newArr);
//     }
//   return array, addNewObj, deleteObj;
// }
