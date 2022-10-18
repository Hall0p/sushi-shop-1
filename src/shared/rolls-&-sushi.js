import avocado from "./img/ingredients/avocade.svg"
import cheese from "./img/ingredients/cheese.svg"
import chicken from "./img/ingredients/chicken.svg"
import salmon from "./img/ingredients/salmon.svg"
import shrimp from "./img/ingredients/shrimp.svg"
import snow from "./img/ingredients/snow-crab.svg"
import bacon from "./img/ingredients/bacon.svg"
import caviar from "./img/ingredients/caviar.svg"
import crab from "./img/ingredients/crab.svg"
import cucumber from "./img/ingredients/cucumber.svg"
import eel from "./img/ingredients/eel.svg"
import tuna from "./img/ingredients/tuna.svg"
import salad from "./img/ingredients/salad.svg"

import fila from "./img/rolls/1.jpg"
import california from "./img/rolls/2.jpg"
import lavaSyake from "./img/rolls/3.jpg"
import filaShrimp from "./img/rolls/4.jpg"
import cheeseMaki from "./img/rolls/5.jpg"
import batakon from "./img/rolls/6.jpg"
import canada from "./img/rolls/7.jpg"
import dragon from "./img/rolls/8.jpg"
import cheeseMakiEel from "./img/rolls/9.jpg"
import bonito from "./img/rolls/10.jpg"
import filaCaviar from "./img/rolls/11.jpg"
import creamyEel from "./img/rolls/12.jpg"
import creamySalmon from "./img/rolls/13.jpg"
import cesar from "./img/rolls/14.jpg"
import osakaMaki from "./img/rolls/15.jpg"
import cheeseMakiTemp from "./img/rolls/16.jpg"
import filaShrimpTemp from "./img/rolls/17.jpg"
import panda from "./img/rolls/18.jpg"
import cheeseShrimp from "./img/rolls/19.jpg"
import lavaCaviar from "./img/rolls/20.jpeg"
import snowRoll from "./img/rolls/21.jpg"
import toshidama from "./img/rolls/22.jpg"
import filaAvocado from "./img/rolls/23.jpg"
import avocadoMaki from "./img/rolls/24.jpg"
import sakeMaki from "./img/rolls/25.jpg"
import unagiMaki from "./img/rolls/26.jpg"
import shrimpMaki from "./img/rolls/27.jpg"
import akari from "./img/rolls/28.jpg"
import chikenMaki from "./img/rolls/29.jpg"
import sakeUnagi from "./img/rolls/30.jpg"
import manhattan from "./img/rolls/31.jpg"
import creamy from "./img/rolls/32.jpg"
import californiaShrimp from "./img/rolls/33.jpg"
import kadzumi from "./img/rolls/34.jpg"
import sakeHotto from "./img/rolls/35.jpg"
import honsuMaki from "./img/rolls/36.jpg"
import shrimpTemp from "./img/rolls/37.jpg"
import sakeShrimpTemp from "./img/rolls/38.jpg"
import yumi from "./img/rolls/42.jpg"


export const rollsSushi = [
  {price: 300, id: 1,image: fila, name: 'Филадельфия', open: true, inside: [cucumber, cheese], outside: salmon},
  {price: 300, id: 2,image: lavaSyake, name: 'Лава сяке', open: true, backed: true, inside: [cheese, cucumber, salmon]},
  {price: 300, id: 3,image: california, name: 'Калифорния', open: true, inside: [cheese, crab, cucumber, avocado], outside: caviar},
  {price: 300, id: 4,image: lavaCaviar, name: 'Лава в икре', open: true, inside: [cheese, cucumber, salmon], outside: caviar},
  {price: 300, id: 5,image: snowRoll, name: 'Снежный', open: true, inside: [cheese, cucumber, avocado, snow], outside: caviar},
  {price: 300, id: 6,image: toshidama, name: 'Тосидама', open: true, inside: [cheese, cucumber, avocado, snow], outside: eel},
  {price: 300, id: 7,image: filaShrimp, name: 'Филадельфия эби', open: true, inside: [cheese, shrimp], outside: salmon},
  {price: 300, id: 8,image: filaAvocado, name: 'Филадельфия с авокадо', open: true, inside: [cheese, avocado], outside: salmon},
  {price: 300, id: 9,image: cheeseMaki, name: 'Чиз маки', open: false, inside: [cheese, cucumber, salmon]},
  {price: 300, id: 10,image: cheeseMakiTemp, name: 'Чиз маки гор.', open: false, fried: true, inside: [cheese, cucumber, salmon]},
  {price: 300, id: 11,image: batakon, name: 'Батакон', open: true, inside: [cheese, cucumber, chicken], outside: bacon},
  {price: 300, id: 12,image: canada, name: 'Канада', open: true, inside: [cheese, cucumber, salmon], outside: eel},
  {price: 300, id: 13,image: dragon, name: 'Дракон', open: true, inside: [cheese, crab, cucumber, avocado], outside: eel},
  {price: 300, id: 14,image: avocadoMaki, name: 'Авокадо маки', inside: [cheese, avocado]},
  {price: 300, id: 15,image: sakeMaki, name: 'Сяке Маки', open: false, inside: [salmon, cheese]},
  {price: 300, id: 16,image: unagiMaki, name: 'Унаги Маки', open: false, inside: [eel]},
  {price: 300, id: 17,image: shrimpMaki, name: 'Эби маки', open: false, inside: [shrimp]},
  {price: 300, id: 18,image: bonito, name: 'Бонито', open: true, inside: [cheese, cucumber, salmon], outside: tuna},
  {price: 300, id: 19,image: akari, name: 'Акари', open: true, inside: [cheese, shrimp, crab], outside: tuna},
  {price: 300, id: 20,image: chikenMaki, name: 'Чикен маки', inside: [cheese, cucumber, chicken]},
  {price: 300, id: 21,image: cheeseMakiEel, name: 'Чиз маки с угрём', open: false, inside: [cheese, eel, cucumber]},
  {price: 300, id: 22,image: cheeseShrimp, name: 'Креветка с сыром', open: false, inside: [cheese, shrimp, avocado]},
  {price: 300, id: 23,image: filaCaviar,name: 'Филадельфия в икре', open: true, inside: [cheese, cucumber, salmon], outside: caviar},
  {price: 300, id: 24,image: creamyEel, name: 'Сливочный угорь', open: true, inside: [cheese, cucumber, eel], outside: 'sesame'},
  {price: 300, id: 25,image: creamySalmon, name: 'Сливочный лосось', open: true, inside: [cheese, cucumber, salmon], outside: 'sesame'},
  {price: 300, id: 26,image: cesar, name: 'Цезарь', open: true, inside: [cheese, salad, chicken], outside: 'sesame'},
  {price: 300, id: 27,image: sakeUnagi, name: 'Сяке унаги', open: true, inside: [cheese, cucumber, eel], outside: salmon},
  {price: 300, id: 28,image: manhattan, name: 'Манхеттен', open: false, inside: [cheese, tuna, cucumber]},
  {price: 300, id: 29,image: creamy, name: 'Сливочный', open: true, inside: [cheese, cucumber, salmon], outside: 'sesame'},
  {price: 300, id: 30,image: californiaShrimp, name: 'Калифорния с креветкой', open: true, inside: [cheese, avocado, shrimp], outside: caviar},
  {price: 300, id: 31,image: kadzumi, name: 'Кадзуми', open: true, inside: [cheese, avocado, salmon], outside: caviar},
  {price: 300, id: 32,image: sakeHotto, name: 'Сяке хотто', open: true, fried: true, inside: [cheese, salmon]},
  {price: 300, id: 33,image: cesar, name: 'Цезарь гор.', open: true, fried: true, inside: [cheese, salad, chicken]},
  {price: 300, id: 34,image: osakaMaki, name: 'Осака маки', open: true, inside: [cheese, cucumber, eel]},
  {price: 300, id: 35,image: honsuMaki, name: 'Хонсю маки', open: true, fried: true, inside: [cheese, cucumber, salmon]},
  {price: 300, id: 36,image: shrimpTemp, name: 'Эби темпура', open: true, fried: true, inside: [cheese, avocado, shrimp, caviar]},
  {price: 300, id: 37,image: filaShrimpTemp, name: 'Филадельфия эби темпура', open: true, fried: true, inside: [cheese, shrimp], outside: salmon},
  {price: 300, id: 38,image: sakeShrimpTemp, name: 'Сяке эби темпура', open: true, fried: true, inside: [cheese, salmon, shrimp]},
  {price: 300, id: 39,image: panda, name: 'Ролл панда', open: false, fried: true, inside: [cheese, salmon, eel, bacon]},
  {price: 300, id: 40, image: '', name: 'Суши с угрём', inside: [eel]},
  {price: 300, id: 41, image: '', name: 'Суши с лососем', inside: [salmon]},
  {price: 300, id: 42, image: yumi, name: 'Юми', inside: [cheese, cucumber, salad]},
]