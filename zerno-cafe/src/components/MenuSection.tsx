import { useState } from 'react';

type Size = {
  label: string;
  price: string;
};

type MenuItem = {
  name: string;
  description: string;
  price?: string;
  sizes?: Size[];
};

type Category = {
  id: string;
  label: string;
  items: MenuItem[];
};

const categories: Category[] = [
  {
    id: 'coffee',
    label: 'Кава',
    items: [
      { name: 'Еспресо', description: 'Спешелті арабіка, щільне тіло з яскравою кислинкою', price: '55 грн',
        sizes: [
          { label: '50 мл', price: '60 грн' }
        ]
       },
      { name: 'Допіо', description: 'Подвійна порція еспресо для швидкого заряду', price: '70 грн',
        sizes: [
          { label: '50 мл', price: '60 грн' }
        ]
       },
      {
        name: 'Американо',
        description: 'Еспресо з гарячою водою, зерно на вибір',
        sizes: [
          { label: '250 мл', price: '60 грн' },
          { label: '350 мл', price: '75 грн' }
        ]
      },
      { name: 'Фільтр', description: 'Зерно тижня, вимірюємо на вагу', price: '95 грн',
        sizes: [
          { label: '250 мл', price: '95 грн' },
          { label: '350 мл', price: '110 грн' }
        ]
       },
      { name: 'Флет вайт', description: 'Подвійний еспресо, тонкий шар молока', price: '85 грн',
        sizes: [
          { label: '250 мл', price: '85 грн' },
          { label: '350 мл', price: '110 грн' }
        ]
       },
      {
        name: 'Капучино',
        description: 'Класична пропорція, вівсяне — без доплати',
        sizes: [
          { label: '250 мл', price: '75 грн' },
          { label: '350 мл', price: '90 грн' }
        ]
      },
      {
        name: 'Лате',
        description: 'Ніжна молочна піна, м\u2019який кавовий смак',
        sizes: [
          { label: '250 мл', price: '80 грн' },
          { label: '350 мл', price: '95 грн' }
        ]
      },
      { name: 'Раф', description: 'Ванільний сироп власного приготування', price: '90 грн',
        sizes: [
          { label: '250 мл', price: '75 грн' },
          { label: '350 мл', price: '90 грн' }
        ]
      },
      {
        name: 'Какао',
        description: 'Нідерландський какао-порошок на незбираному молоці',
        sizes: [
          { label: '250 мл', price: '75 грн' },
          { label: '350 мл', price: '90 грн' }
        ]
      }
    ]
  },
  {
    id: 'cold-drinks',
    label: 'Холодні напої',
    items: [
      { name: 'Еспресо-тонік', description: 'Крафтовий тонік, натуральний сік лайма, еспресо', price: '115 грн',
        sizes: [
          { label: '300 мл', price: '115 грн' },
          { label: '400 мл', price: '135 грн' }
        ]
       },
      {
        name: 'Айс Лате',
        description: 'Еспресо, холодне молоко, кубики льоду',
        sizes: [
          { label: '300 мл', price: '90 грн' },
          { label: '400 мл', price: '105 грн' }
        ]
      },
      { name: 'Бамбл', description: 'Свіжовичавлений апельсиновий сік, карамельний сироп, еспресо', price: '120 грн',
        sizes: [
          { label: '300 мл', price: '120 грн' },
          { label: '400 мл', price: '140 грн' }
        ]
       },
      {
        name: 'Лимонад «Малина-Базилік»',
        description: 'Власне пюре з малини, свіжий базилік, содова',
        sizes: [
          { label: '300 мл', price: '95 грн' },
          { label: '400 мл', price: '110 грн' }
        ]
      },
      {
        name: 'Лимонад «Огірок-М\u2019ята»',
        description: 'Освіжаючий мікс свіжого огірка, м\u2019яти та цитрусових',
        sizes: [
          { label: '300 мл', price: '90 грн' },
          { label: '400 мл', price: '105 грн' }
        ]
      },
      {
        name: 'Фреш апельсиновий',
        description: '100% свіжовичавлений сік',
        sizes: [
          { label: '300 мл', price: '110 грн' },
          { label: '400 мл', price: '130 грн' }
        ]
      }
    ]
  },
  {
    id: 'matcha-tea',
    label: 'Чай та Матча',
    items: [
      { name: 'Улун Да Хун Пао', description: 'Три доливи, подаємо в глиняному чайнику', price: '110 грн',
        sizes: [
          { label: '250 мл', price: '110 грн' },
          { label: '350 мл', price: '125 грн' }
        ]
       },
      { name: 'Чорний з чебрецем', description: 'Суміш власного купажу', price: '65 грн',
        sizes: [
          { label: '250 мл', price: '65 грн' },
          { label: '350 мл', price: '85 грн' }
        ]
       },
      { name: 'Зелений Сеньча', description: 'Класичний японський зелений чай з трав\u2019янистим тоном', price: '70 грн',
        sizes: [
          { label: '250 мл', price: '70 грн' },
          { label: '350 мл', price: '100 грн' }
        ]
       },
      {
        name: 'Матча лате',
        description: 'Церемоніальний клас, на вівсяному',
        sizes: [
          { label: '250 мл', price: '95 грн' },
          { label: '350 мл', price: '110 грн' }
        ]
      },
      { name: 'Матча-тонік', description: 'Японська матча, грейпфрутовий тонік, лід', price: '110 грн',
        sizes: [
          { label: '250 мл', price: '110 грн' },
          { label: '350 мл', price: '130 грн' }
        ]
       },
      { name: 'Обліпиховий чай', description: 'Свіжа обліпиха, апельсин, розмарин, мед', price: '85 грн',
        sizes: [
          { label: '250 мл', price: '85 грн' },
          { label: '350 мл', price: '110 грн' }
        ]
       },
      { name: 'Імбирно-лимонний чай', description: 'Корінь імбиру, лимонний фреш, м\u2019ята, натуральний мед', price: '85 грн',
        sizes: [
          { label: '250 мл', price: '85 грн' },
          { label: '350 мл', price: '110 грн' }
        ]
       }
    ]
  },
  {
    id: 'breakfast',
    label: 'Сніданки',
    items: [
      { name: 'Гранола з йогуртом', description: 'Сезонні ягоди, мед з пасіки під Києвом', price: '135 грн' },
      { name: 'Тост з авокадо', description: 'Яйце пашот, чилі-олія, крем-сир, зерновий хліб', price: '165 грн' },
      { name: 'Шакшука', description: 'Три яйця у соусі з томатів та печеного перцю, домашній хліб', price: '175 грн' },
      { name: 'Сирники з соусом солона карамель', description: 'З домашнього сиру, подаємо зі сметаною та ягодами', price: '150 грн' },
      { name: 'Скрембл із лососем', description: 'Ніжні яйця, слабосолений лосось, мікс салату, бріош', price: '210 грн' },
      { name: 'Овсяна каша на рослинному молоці', description: 'З горіхами пекан, бананом та насінням чіа', price: '120 грн' }
    ]
  },
  {
    id: 'toast-sandwiches',
    label: 'Сендвічі та Боули',
    items: [
      { name: 'Сендвіч з індичкою', description: 'Запечена грудка, соус песто, в\u2019ялені томати, рукола', price: '155 грн' },
      { name: 'Круасан з лососем', description: 'Крем-сир, свіжий огірок, лосось, каперси', price: '175 грн' },
      { name: 'Мелт з тунцем та сиром чеддер', description: 'Хрусткий тостовий хліб, тунець, кукурудза, розплавлений чеддер', price: '160 грн' },
      { name: 'Боул з куркою та кіноа', description: 'Авокадо, боби едамаме, черрі, кунжутний соус', price: '190 грн' },
      { name: 'Веганський сендвіч', description: 'Печений тофу, гуакамоле, шпинат, запечений кабачок', price: '145 грн' }
    ]
  },
  {
    id: 'bakery',
    label: 'Випічка',
    items: [
      { name: 'Круасан класичний', description: 'Французьке масло, 27 шарів', price: '65 грн' },
      { name: 'Мигдалевий круасан', description: 'Мигдалевий франжипан, пелюстки мигдалю', price: '95 грн' },
      { name: 'Шоколатан (Pain au chocolat)', description: 'Традиційна випічка з чорним бельгійським шоколадом', price: '80 грн' },
      { name: 'Синабон з корицею', description: 'Пухке тісто, кориця Сайгон, крем-сир', price: '90 грн' },
      { name: 'Равлик із родзинками', description: 'Заварний крем, родзинки замочені в ромі', price: '75 грн' }
    ]
  },
  {
    id: 'desserts',
    label: 'Десерти',
    items: [
      { name: 'Чізкейк баскський', description: 'Печеться щоранку у сусідній пекарні', price: '110 грн' },
      { name: 'Медовик', description: 'За бабусиним рецептом власниці', price: '95 грн' },
      { name: 'Тарталетка з малиною', description: 'Пісочна основа, заварний крем, свіжа малина', price: '120 грн' },
      { name: 'Тістечко Шу', description: 'Заварне тісто, кракелін, ванільний крем Маскарпоне', price: '85 грн' },
      { name: 'Веганський брауні', description: 'Темний шоколад, горіх пекан, без глютену та цукру', price: '100 грн' },
      { name: 'Макарон (в асортименті)', description: 'Солона карамель, фісташка, дорблю-горіх', price: '55 грн' }
    ]
  }
];

export default function MenuSection() {
  const [activeId, setActiveId] = useState(categories[0].id);
  const active = categories.find((c) => c.id === activeId) ?? categories[0];

  return (
    <div>
      <div role="tablist" aria-label="Категорії меню" className="flex flex-wrap gap-2 mb-10">
        {categories.map((category) => {
          const isActive = category.id === activeId;
          return (
            <button
              key={category.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(category.id)}
              className={
                'rounded-full px-5 py-2 text-[15px] transition-colors border ' +
                (isActive
                  ? 'bg-coffee text-paper border-coffee'
                  : 'border-line text-ink/70 hover:border-ink/40')
              }
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <ul role="tabpanel" className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
        {active.items.map((item) => (
          <li key={item.name} className="flex items-start justify-between gap-4 border-b border-line/70 pb-4">
            <div>
              <p className="text-[17px] text-ink">{item.name}</p>
              <p className="text-sm text-ink/60 mt-0.5">{item.description}</p>
            </div>

            {item.sizes ? (
              <div className="shrink-0 text-right space-y-0.5">
                {item.sizes.map((size) => (
                  <p key={size.label} className="text-sm whitespace-nowrap">
                    <span className="text-ink/50">{size.label}</span>{' '}
                    <span className="font-display text-coffee-dark">{size.price}</span>
                  </p>
                ))}
              </div>
            ) : (
              <span className="shrink-0 font-display text-coffee-dark">{item.price}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}