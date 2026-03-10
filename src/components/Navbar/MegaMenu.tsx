export default function MegaMenu() {
  return (

    <div className="absolute left-0 top-full w-full bg-white shadow-lg">

      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-10 p-10">

        <div>
          <h4 className="font-semibold mb-4">Polymer Types</h4>

          <ul className="space-y-2 text-sm">
            <li>Polyethylene</li>
            <li>Polypropylene</li>
            <li>Elastomers</li>
            <li>Specialty Materials</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Applications</h4>

          <ul className="space-y-2 text-sm">
            <li>Automotive</li>
            <li>Packaging</li>
            <li>Construction</li>
            <li>Electronics</li>
          </ul>
        </div>

      </div>

    </div>
  )
}