/* This example requires Tailwind CSS v2.0+ */
import { ExclamationIcon } from '@heroicons/react/solid'

export default function Example() {
  return (
    <div className="rounded-md bg-yellow-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800">Attention needed</h3>
          <div className="mt-2 text-sm text-yellow-700">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo
              totam eius aperiam dolorum.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
