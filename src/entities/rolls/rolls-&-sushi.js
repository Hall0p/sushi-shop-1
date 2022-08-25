import avocado from "../../shared/img/ingredients/avocade.svg"
import cheese from "../../shared/img/ingredients/cheese.svg"
import chicken from "../../shared/img/ingredients/chicken.svg"
import salmon from "../../shared/img/ingredients/salmon.svg"
import shrimp from "../../shared/img/ingredients/shrimp.svg"
import snow from "../../shared/img/ingredients/snow-crab.svg"
import bacon from "../../shared/img/ingredients/bacon.svg"
import caviar from "../../shared/img/ingredients/caviar.svg"
import crab from "../../shared/img/ingredients/crab.svg"
import cucumber from "../../shared/img/ingredients/cucumber.svg"
import eel from "../../shared/img/ingredients/eel.svg"
import tuna from "../../shared/img/ingredients/tuna.svg"
import salad from "../../shared/img/ingredients/salad.svg"
import fila from "../../shared/img/rolls/1.jpg"
import california from "../../shared/img/rolls/2.jpg"
import lavaSyake from "../../shared/img/rolls/3.jpg"
import filaShrimp from "../../shared/img/rolls/4.jpg"
import cheeseMaki from "../../shared/img/rolls/5.jpg"
import batakon from "../../shared/img/rolls/6.jpg"
import canada from "../../shared/img/rolls/7.jpg"
import dragon from "../../shared/img/rolls/8.jpg"
import cheeseMakiEel from "../../shared/img/rolls/9.jpg"
import bonito from "../../shared/img/rolls/10.jpg"
import filaCaviar from "../../shared/img/rolls/11.jpg"
import creamyEel from "../../shared/img/rolls/12.jpg"
import creamySalmon from "../../shared/img/rolls/13.jpg"
import cesar from "../../shared/img/rolls/14.jpg"
import osakaMaki from "../../shared/img/rolls/15.jpg"
import cheeseMakiTemp from "../../shared/img/rolls/16.jpg"
import filaShrimpTemp from "../../shared/img/rolls/17.jpg"
import panda from "../../shared/img/rolls/18.jpg"
import cheeseShrimp from "../../shared/img/rolls/19.jpg"
import lavaCaviar from "../../shared/img/rolls/20.jpeg"
import snowRoll from "../../shared/img/rolls/21.jpg"
import toshidama from "../../shared/img/rolls/22.jpg"
import filaAvocado from "../../shared/img/rolls/23.jpg"
import avocadoMaki from "../../shared/img/rolls/24.jpg"
import sakeMaki from "../../shared/img/rolls/25.jpg"
import unagiMaki from "../../shared/img/rolls/26.jpg"
import shrimpMaki from "../../shared/img/rolls/27.jpg"
import akari from "../../shared/img/rolls/28.jpg"
import chikenMaki from "../../shared/img/rolls/29.jpg"
import sakeUnagi from "../../shared/img/rolls/30.jpg"
import manhattan from "../../shared/img/rolls/31.jpg"
import creamy from "../../shared/img/rolls/32.jpg"
import californiaShrimp from "../../shared/img/rolls/33.jpg"
import kadzumi from "../../shared/img/rolls/34.jpg"
import sakeHotto from "../../shared/img/rolls/35.jpg"
import honsuMaki from "../../shared/img/rolls/36.jpg"
import shrimpTemp from "../../shared/img/rolls/37.jpg"
import sakeShrimpTemp from "../../shared/img/rolls/38.jpg"


export const rollsSushi = [
  {image: fila, name: 'Филадельфия', open: true, inside: [cucumber, cheese], outside: salmon},
  {image: lavaSyake, name: 'Лава сяке', open: true, backed: true, inside: [cheese, cucumber, salmon]},
  {image: california, name: 'Калифорния', open: true, inside: [cheese, crab, cucumber, avocado], outside: caviar},
  {image: lavaCaviar, name: 'Лава в икре', open: true, inside: [cheese, cucumber, salmon], outside: caviar},
  {image: snowRoll, name: 'Снежный', open: true, inside: [cheese, cucumber, avocado, snow], outside: caviar},
  {image: toshidama, name: 'Тосидама', open: true, inside: [cheese, cucumber, avocado, snow], outside: eel},
  {image: filaShrimp, name: 'Филадельфия эби', open: true, inside: [cheese, shrimp], outside: salmon},
  {image: filaAvocado, name: 'Филадельфия с авокадо', open: true, inside: [cheese, avocado], outside: salmon},
  {image: cheeseMaki, name: 'Чизмаки', open: false, inside: [cheese, cucumber, salmon]},
  {image: cheeseMakiTemp, name: 'Чизмаки', open: false, fried: true, inside: [cheese, cucumber, salmon]},
  {image: batakon, name: 'Батакон', open: true, inside: [cheese, cucumber, chicken], outside: bacon},
  {image: canada, name: 'Канада', open: true, inside: [cheese, cucumber, salmon], outside: eel},
  {image: dragon, name: 'Дракон', open: true, inside: [cheese, crab, cucumber, avocado], outside: eel},
  {image: avocadoMaki, name: 'Авокадо маки', inside: [cheese, avocado]},
  {image: sakeMaki, name: 'Сяке Маки', open: false, inside: [salmon, cheese]},
  {image: unagiMaki, name: 'Унаги Маки', open: false, inside: [eel]},
  {image: shrimpMaki, name: 'Эби маки', open: false, inside: [shrimp]},
  {image: bonito, name: 'Бонито', open: true, inside: [cheese, cucumber, salmon], outside: tuna},
  {image: akari, name: 'Акари', open: true, inside: [cheese, shrimp, crab], outside: tuna},
  {image: chikenMaki, name: 'Чикен маки', inside: [cheese, cucumber, chicken]},
  {image: cheeseMakiEel, name: 'Чиз маки с угрём', open: false, inside: [cheese, eel, cucumber]},
  {image: cheeseShrimp, name: 'Креветка с сыром', open: false, inside: [cheese, shrimp, avocado]},
  {image: filaCaviar,name: 'Филадельфия в икре', open: true, inside: [cheese, cucumber, salmon], outside: caviar},
  {image: creamyEel, name: 'Сливочный угорь', open: true, inside: [cheese, cucumber, eel], outside: 'sesame'},
  {image: creamySalmon, name: 'Сливочный лосось', open: true, inside: [cheese, cucumber, salmon], outside: 'sesame'},
  {image: cesar, name: 'Цезарь', open: true, inside: [cheese, salad, chicken], outside: 'sesame'},
  {image: sakeUnagi, name: 'Сяке унаги', open: true, inside: [cheese, cucumber, eel], outside: salmon},
  {image: manhattan, name: 'Манхеттен', open: false, inside: [cheese, tuna, cucumber]},
  {image: creamy, name: 'Сливочный', open: true, inside: [cheese, cucumber, salmon], outside: 'sesame'},
  {image: californiaShrimp, name: 'Калифорния с креветкой', open: true, inside: [cheese, avocado, shrimp], outside: caviar},
  {image: kadzumi, name: 'Кадзуми', open: true, inside: [cheese, avocado, salmon], outside: caviar},
  {image: sakeHotto, name: 'Сяке хотто', open: true, fried: true, inside: [cheese, salmon]},
  {image: cesar, name: 'Цезарь гор.', open: true, fried: true, inside: [cheese, salad, chicken]},
  {image: osakaMaki, name: 'Осака маки', open: true, inside: [cheese, cucumber, eel]},
  {image: honsuMaki, name: 'Хонсю маки', open: true, fried: true, inside: [cheese, cucumber, salmon]},
  {image: shrimpTemp, name: 'Эби темпура', open: true, fried: true, inside: [cheese, avocado, shrimp, caviar]},
  {image: filaShrimpTemp, name: 'Филадельфия эби темпура', open: true, fried: true, inside: [cheese, shrimp], outside: salmon},
  {image: sakeShrimpTemp, name: 'Сяке эби темпура', open: true, fried: true, inside: [cheese, salmon, shrimp]},
  {image: panda, name: 'Ролл панда', open: false, fried: true, inside: [cheese, salmon, eel, bacon]}
]