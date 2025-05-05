"use client"

export function TestPyramid() {
  return (
    <div className="bg-slate-50 p-4 rounded-md mt-4">
      <h3 className="font-medium mb-4">Pirâmide de Testes</h3>
      <div className="flex flex-col items-center">
        <div className="w-full max-w-2xl mb-6 relative">
          {/* Pirâmide de testes com 5 níveis */}
          <div className="flex flex-col items-center">
            {/* Seta de Velocidade */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-full flex flex-col items-center">
              <div className="h-full w-0.5 bg-green-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-green-700 font-medium">
                  Velocidade
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-500"
                  >
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Seta de Custo */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-full flex flex-col items-center">
              <div className="h-full w-0.5 bg-red-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-red-700 font-medium">
                  Custo
                </div>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-red-500"
                  >
                    <path d="M12 19V5M5 12l7-7 7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Testes Exploratórios (Vermelho) */}
            <div className="w-1/2 h-16 bg-red-400 border border-gray-300 flex items-center justify-center text-white font-medium">
              Exploratório
            </div>

            {/* Testes E2E (Laranja) */}
            <div className="w-3/5 h-16 bg-orange-400 border border-gray-300 flex items-center justify-center text-white font-medium -mt-px">
              E2E
            </div>

            {/* Testes de Aceitação (Amarelo) */}
            <div className="w-4/5 h-16 bg-yellow-500 border border-gray-300 flex items-center justify-center text-white font-medium -mt-px">
              Aceitação
            </div>

            {/* Testes de Integração (Verde claro) */}
            <div className="w-11/12 h-16 bg-lime-300 border border-gray-300 flex items-center justify-center text-gray-800 font-medium -mt-px">
              Integração
            </div>

            {/* Testes Unitários (Verde) */}
            <div className="w-full h-16 bg-green-500 border border-gray-300 flex items-center justify-center text-white font-medium -mt-px">
              Unitário
            </div>
          </div>
        </div>

        <div className="w-full max-w-2xl mt-8">
          <p className="text-sm mb-4">
            A Pirâmide de Testes é um modelo que sugere como equilibrar diferentes tipos de testes para otimizar
            velocidade, custo e confiabilidade. Quanto mais subimos na pirâmide, maior o custo e menor a velocidade de
            execução.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-sm mr-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium">Base: Testes Unitários</p>
                  <p className="text-xs text-slate-600">
                    Testam unidades isoladas de código. São rápidos, baratos e fáceis de automatizar. Devem ser a maior
                    parte dos seus testes.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 bg-lime-300 rounded-sm mr-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium">Testes de Integração</p>
                  <p className="text-xs text-slate-600">
                    Verificam se diferentes componentes funcionam corretamente juntos. Mais lentos que os unitários, mas
                    essenciais para garantir a comunicação entre partes.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 bg-yellow-500 rounded-sm mr-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium">Testes de Aceitação</p>
                  <p className="text-xs text-slate-600">
                    Verificam se o sistema atende aos requisitos do negócio e às necessidades do usuário. Focam em
                    comportamentos e fluxos completos.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-5 h-5 bg-orange-400 rounded-sm mr-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium">Testes E2E (End-to-End)</p>
                  <p className="text-xs text-slate-600">
                    Testam o fluxo completo da aplicação, simulando interações reais do usuário. São mais lentos e
                    frágeis, mas validam o sistema como um todo.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 bg-red-400 rounded-sm mr-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium">Testes Exploratórios</p>
                  <p className="text-xs text-slate-600">
                    Realizados manualmente por testadores que exploram o sistema de forma criativa, sem scripts
                    predefinidos. Úteis para encontrar bugs inesperados e problemas de usabilidade que testes
                    automatizados podem não detectar.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-3 rounded-md mt-4 border border-blue-100">
            <h4 className="text-sm font-medium text-blue-800 mb-2">Equilíbrio na Estratégia de Testes</h4>
            <p className="text-xs">
              Uma estratégia eficaz de testes mantém a proporção da pirâmide: muitos testes unitários na base, uma
              quantidade moderada de testes de integração e aceitação no meio, e um número menor de testes E2E e
              exploratórios no topo. Isso otimiza o equilíbrio entre velocidade, custo e cobertura.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
