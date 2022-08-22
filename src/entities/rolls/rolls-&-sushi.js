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

export const rollsSushi = [
  {name: 'Филадельфия', open: true, inside: [cucumber, cheese], outside: salmon},
  {name: 'Лава сяке', open: true, backed: true, inside: [cheese, cucumber, salmon]},
  {name: 'Калифорния', open: true, inside: [cheese, crab, cucumber, avocado], outside: caviar},
  {name: 'Лава в икре', open: true, inside: [cheese, cucumber, salmon], outside: caviar},
  {name: 'Снежный', open: true, inside: [cheese, cucumber, avocado, snow], outside: caviar},
  {name: 'Тосидама', open: true, inside: [cheese, cucumber, avocado, snow], outside: eel},
  {name: 'Филадельфия эби', open: true, inside: [cheese, shrimp], outside: salmon},
  {name: 'Филадельфия с авокадо', open: true, inside: [cheese, avocado], outside: salmon},
  {name: 'Чизмаки', inside: [cheese, cucumber, salmon]},
  {name: 'Батакон', open: true, inside: [cheese, cucumber, chicken], outside: bacon},
  {name: 'Канала', open: true, inside: [cheese, cucumber, salmon], outside: eel},
  {name: 'Дракон', open: true, inside: [cheese, crab, cucumber, avocado], outside: eel},
  {name: 'Авокадо маки', inside: [cheese, avocado]},
  {name: 'Сяке Маки', inside: [salmon, cheese]},
  {name: 'Унаги Маки', inside: [eel]},
  {name: 'Танги', open: true, inside: [cheese, avocado, salmon, eel]},
  {name: 'Эби маки', inside: [shrimp]},
  {name: 'Бонито', open: true, inside: [cheese, cucumber, salmon], outside: tuna},
  {name: 'Акари', open: true, inside: [cheese, shrimp, crab], outside: tuna},
  {name: 'Чикен маки', inside: [cheese, cucumber, chicken]},
  {name: 'Чиз маки с угрём', inside: [cheese, eel, cucumber]},
  {name: 'Креветка с сыром', inside: [cheese, shrimp, avocado]},
  {name: 'Филадельфия в икре', open: true, inside: [cheese, cucumber, salmon], outside: caviar},
  {name: 'Сливочный угорь', open: true, inside: [cheese, cucumber, eel], outside: 'sesame'},
  {name: 'Цезарь', open: true, inside: [cheese, salad, chicken], outside: 'sesame'},
  {name: 'Сяке унаги', open: true, inside: [cheese, cucumber, eel], outside: salmon},
  {name: 'Манхеттен', inside: [cheese, tuna, cucumber]},
  {name: 'Сливочный', open: true, inside: [cheese, cucumber, salmon], outside: 'sesame'},
  {name: 'Калифорния с креветкой', open: true, inside: [cheese, avocado, shrimp], outside: caviar},
  {name: 'Кадзуми', open: true, inside: [cheese, avocado, salmon], outside: caviar},
  {name: 'Сяке хотто', open: true, fried: true, inside: [cheese, salmon]},
  {name: 'Цезарь гор.', open: true, fried: true, inside: [cheese, salad, chicken]},
  {name: 'Осака маки', open: true, inside: [cheese, cucumber, eel]},
  {name: 'Хонсю маки', open: true, fried: true, inside: [cheese, cucumber, salmon]},
  {name: 'Эби темпура', open: true, fried: true, inside: [cheese, avocado, shrimp, caviar]},
  {name: 'Филадельфия темпура', fried: true, inside: [cheese, cucumber], outside: salmon},
  {name: 'Филадельфия эби темпура', open: true, fried: true, inside: [cheese, shrimp], outside: salmon},
  {name: 'Сяке эби темпура', open: true, fried: true, inside: [cheese, salmon, shrimp]},
]