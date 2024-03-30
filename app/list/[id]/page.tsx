
//GET the books inside of a list named: 'hardcover-fiction(하드커버 픽션)': 
//https://books-api.nomadcoders.workers.dev/list?name=hardcover-fiction

import { Book } from "@/app/components/Book";
import { Key } from "react";


export interface IBook{
    rank: number;
    rank_last_week: number;
    weeks_on_list: number;
    asterisk: number;
    dagger: number;
    primary_isbn10: number;
    primary_isbn13: number;
    publisher: string;
    description: string;
    price: number;
    title: string;
    author: string;
    contributor: string;
    contributor_note: string;
    book_image: string;
    book_image_width: number;
    book_image_height: number;
    amazon_product_url: string;
    age_group:string ;
    book_review_link: string;
    first_chapter_link: string;
    sunday_review_link: string;
    article_chapter_link: string;
    isbns: [];
    buy_links:  [];
    book_uri: string;
}





const BASE_URL = 'https://books-api.nomadcoders.workers.dev/list?name=';

async function getBookList(name : string){
    const fetchUrl =  BASE_URL + name
    const response = await fetch(fetchUrl);
    const json = await response.json();
    return json;
}

export default async function Detail ({params}:{ params : {id :string}}){
   const bookList = await getBookList(params.id);

    return(
        
    <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">Products</h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
         {
            bookList.results.books.map((book:IBook,index : Key)=>(
                <Book key={book.primary_isbn13} book={book}/>    
            ))
        }
        </div>
      </div>
    </div>
    );
}