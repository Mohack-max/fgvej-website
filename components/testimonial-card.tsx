import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { QuoteIcon } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  imageSrc: string
}

export default function TestimonialCard({ quote, author, role, imageSrc }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <QuoteIcon className="h-8 w-8 text-green-600 mb-4" />
        <p className="text-gray-700 mb-6 flex-grow">{quote}</p>
        <div className="flex items-center mt-auto">
          <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
            <Image src={imageSrc || "/placeholder.svg"} alt={author} fill className="object-cover" />
          </div>
          <div>
            <p className="font-semibold">{author}</p>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
