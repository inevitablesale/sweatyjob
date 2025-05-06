import SimplifiedImportForm from "./simplified-import-form"

export default function ImportCSVPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">CSV Import Tool</h1>
        <p className="text-gray-600">Import competitor data with reviews from Google Places CSV exports</p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <SimplifiedImportForm />

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-bold mb-4">Import Instructions</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              This tool imports competitor data from Google Places CSV exports, focusing on the most important fields:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Business information (name, address, contact details)</li>
              <li>Review text from the first review</li>
              <li>Reviewer name</li>
              <li>Rating (stars)</li>
            </ul>
            <p>
              The import process handles nested review data in the CSV format and extracts only the first review for
              each business.
            </p>
            <p>
              For large files, consider using a smaller batch size to prevent timeouts and ensure all records are
              processed correctly.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
