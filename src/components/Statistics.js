const stats = [
    { id: 1, name: 'De pessoas mestruam em todo o planeta', value: '1.8 BILHÃO' },
    { id: 2, name: 'De pessoas não tem acesso a itens de cuidados mestuiais', value: '+4 MILHÕES' },
    { id: 3, name: 'Pessoas que mestruam vivem sem acesso a banheiro em casa', value: '713 MIL' },
    { id: 4, name: 'De pessoas no Brasil não tem banheiro em casa', value: '1.6 MILHÃO' },
    { id: 5, name: 'Não recebem água tratada em casa', value: '15 MILHÕES' },
    { id: 6, name: 'De estudantes no Brasil deixam de ir à escola por não terem absorvente', value: '25%' },
  ]
  
  export default function Statistics() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }