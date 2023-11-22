const stats = [
  {
    id: 1,
    name: "Promover um diálogo aberto e saudável sobre menstruação na sociedade.",
  },
  {
    id: 2,
    name: "Contribuir para a normalização da menstruação e do entendimento do ciclo menstrual.",
  },
  {
    id: 3,
    name: "Combater ativamente a pobreza menstrual, garantindo acesso a produtos adequados para todas as mulheres.",
  },
];

export default function Objetivo() {
  return (
    <div className="bg-white py-24 sm:py-32">
         <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">Objetivos do Projeto</h2>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
