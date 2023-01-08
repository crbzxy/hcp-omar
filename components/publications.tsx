const features = [
  {
    "name": "Resultado oncológico de linfadenectomía retroperitoneal por tumor residual posquimioterapia en cáncer germinal",
    "media": "Análisis retrospectivo de 15 años (2021)",
    "link": "https://www.cirugiaycirujanos.com/frame_esp.php?id=571"
  },
  {
    "name": "Quemadura eléctrica de pene manejada con penectomia parcial y reconstrucción con colgajo radial libre y anterolateral pediculado",
    "media": "(Archivos Españoles de Urología 2021)",
    "link": "https://medes.com/publication/162091"
  },
  {
    "name": "Resultados oncológicos en cáncer de riñón con trombo en vena cava",
    "media": "Experiencia del Instituto Nacional de Cancerología México. (Revista Argentina de Urología 2020)",
    "link": "https://www.revistasau.org/index.php/revista/article/view/4310/0"
  },
  {
    "name": "Valor predictivo de proteína C reactiva y albúmina en la expulsión de litros ureterales de 6-10 mm del tercio inferior",
    "media": "( Urología Colombiana 2019)",
    "link": "https://www.thieme-connect.com/products/ejournals/abstract/10.1055/s-0039-1697011"
  },
  {
    "name": "Estrangulación de pene por objetos metálicos",
    "media": "(Revista Argentina de Urología 2018)",
    "link": "https://www.revistasau.org/index.php/revista/article/view/4179/3564"
  },
  {
    "name": "Presentación inusual de pielonefritis enfisematosa con extensión escrotal y pierna",
    "media": "(Revista Clínica Española 2018)",
    "link": "https://www.revclinesp.es/es-presentacion-inusual-pielonefritis-enfisematosa-con-articulo-S0014256518301139"
  },
  {
    "name": "Quemadura eléctrica en el pene manejada con penectomía parcial",
    "media": "Reporte de un caso (Revista Mexicana de Urología 2017)",
    "link": "https://revistamexicanadeurologia.org.mx/index.php/rmu/article/view/57"
  },
  {
    "name": "Xanthogranulomatous Prostatitis, a Rare Prostatic Entity",
    "media": "(Urology Case Reports 2017)",
    "link": "https://pubmed.ncbi.nlm.nih.gov/27800297/"
  }
]
export default function Publications() {
  return (
    <div className="bg-white" id="publicaciones">
      <div className="mx-auto  max-w-2xl grid-cols-2 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Publicaciones</h2>
          

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4 flex flex-col">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-1 text-sm text-gray-500">{feature.media}
                </dd>
                <a className="mt-2 text-[#00BCD4]" href={feature.link}>Saber más {'→'} </a>
              </div>
            ))}
          </dl>
        </div>
       
      </div>
    </div>
  )
}
