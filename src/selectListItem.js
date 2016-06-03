// (function () {
//     'use strict';
//
//     // creating the list items
//     var items = ['tank', 'shark', 'bear'];
//     var ul = document.querySelector('ul');
//     var theInput = document.querySelector('input');
//     var index = 0;
//
//     for (var i = 0; i < items.length; i += 1) {
//         var li = document.createElement('li');
//         var attr = document.createAttribute('index');
//         var text = document.createTextNode(items[i]);
//         attr.value = i;
//         li.setAttributeNode(attr);
//         li.appendChild(text);
//         ul.appendChild(li);
//     }
//
//     // adding the keyup listener
//     theInput.addEventListener('keyup', function (event) {
//         switch(event.keyCode) {
//             case 38:
//                 navigateUp();
//                 break;
//             case 40:
//                 navigateDown();
//         }
//     });
//
//     function isBottomMost() {
//         if (index <= 1) {
//             return;
//         }
//         index -= 1;
//     }
//
//     function isUpperMost(lis) {
//         if (index >= 0 && index < lis.length) {
//             index += 1;
//         }
//         return;
//     }
//
//     function navigateUp() {
//         var lis = document.querySelectorAll('li');
//
//         isBottomMost();
//
//         for (var i = 0; i < lis.length; i += 1) {
//             lis[i].classList.remove('selected');
//         }
//
//         lis[index-1].classList.add('selected');
//     }
//
//     function navigateDown() {
//         var lis = document.querySelectorAll('li');
//
//         isUpperMost(lis);
//
//         for (var i = 0; i < lis.length; i += 1) {
//             lis[i].classList.remove('selected');
//         }
//
//         lis[index-1].classList.add('selected');
//     }
//
// })();