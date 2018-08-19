// Add your functions and code here
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(array) {
  array.pop();
  return array;
}

function removeLastKitten() {
  var new_array = [];
  for (var i = 0; i < (kittens.length - 1); i++) {
    new_array.push(kittens[i]);
  }
  return new_array;
}

function removeFirstKitten() {
  var new_array = [];
  for (var i = 1; i < kittens.length; i++) {
    new_array.push(kittens[i]);
  }
  return new_array;
}



//   describe('destructivelyPrependKitten(name)', function() {
//     it('prepends a kitten to the beginning of the kittens array', function() {
//       destructivelyPrependKitten("Bob")

//       expect(window.kittens).toEqual(["Bob", "Milo", "Otis", "Garfield"])
//     })
//   })

//   describe('destructivelyRemoveLastKitten()', function() {
//     it('removes the last kitten from the kittens array', function() {
//       destructivelyRemoveLastKitten()

//       expect(window.kittens).toEqual(["Milo", "Otis"])
//     })
//   })

//   describe('destructivelyRemoveFirstKitten()', function() {
//     it('removes the First kitten from the kittens array', function() {
//       destructivelyRemoveFirstKitten()

//       expect(window.kittens).toEqual(["Otis", "Garfield"])
//     })
//   })

//   describe('appendKitten(name)', function() {
//     it('appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged', function() {
//       expect(appendKitten("Broom")).toEqual(["Milo", "Otis", "Garfield", "Broom"])

//       expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
//     })
//   })

//   describe('prependKitten(name)', function() {
//     it('prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged', function() {
//       expect(prependKitten("Arnold")).toEqual(["Arnold", "Milo", "Otis", "Garfield"])

//       expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
//     })
//   })

//   describe('removeLastKitten()', function() {
//     it('removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged', function() {
//       expect(removeLastKitten()).toEqual(["Milo", "Otis"])

//       expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
//     })
//   })

//   describe('removeFirstKitten()', function() {
//     it('removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged', function() {
//       expect(removeFirstKitten()).toEqual(["Otis", "Garfield"])

//       expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
//     })
//   })

})