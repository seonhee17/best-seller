import Image from "next/image"
import Link from "next/link"
import { IBook } from "../list/[id]/page"

export function Book({book} :{book: IBook}) {
    return (
     
      
            <div>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <Image
                  src={book.book_image}
                  alt={book.title}
                  width={book.book_image_width}
                  height={book.book_image_height}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
                <span className="inline-flex items-center rounded-lg px-2 py-1 text-5xl font-lg text-black-900">
                  {book.rank}
                </span>
                <Link href={book.amazon_product_url} className="group color box-border" >
                   Buy Now
                </Link>
               </div>
              <h3 className="mt-4 text-sm text-gray-700">{book.title}  /  {book.author}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{book.price}</p>
            </div>    
     
    
    )
} 