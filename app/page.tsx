import {  Key  } from "react";
import Header from "./components/Header";
import Link from "next/link";

interface result {
  list_name: string;
  display_name: string;
  list_name_encoded: string;
  oldest_published_date: string;
  newest_published_date: string;
  updated: string;

}



const URL = "https://books-api.nomadcoders.workers.dev/lists";

async function getBookCategory(){
  const response = await fetch(URL);
  const json = await response.json();
  return json;
}

export default async function Home() {
  
   
  const categories = await getBookCategory();
  

  return (
    <>
    <Header />
    <div className="flex flex-wrap">
      {categories.results.map((item :result,index: number ) => (
      <Link href={'/list/'+item.list_name_encoded}> 
        <div key={index} className="flex-full bg-white dark:bg-slate-800 rounded-lg px-5 py-5  m-3 ring-1 ring-slate-900/5 shadow-xl">
            <p className="text-slate-900 dark:text-white mt-2 text-sm font-medium tracking-tight">{item.list_name}</p>
            {/* <p className="text-slate-500 dark:text-slate-400 mt-1 text-xs">
              {item.updated}
            </p> */}
        </div>
      </Link>     
      ))}
    </div>
    </>
  );
}
