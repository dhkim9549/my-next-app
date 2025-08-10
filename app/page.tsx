import Link from "next/link";

function Item({ title, cont, href }) {
  return (
    <Link className="bg-white p-5 m-2 lg:w-96" href={href}>
      <p className="text-slate-900 text-2xl font-bold my-4">{title}</p>
      <div>{cont}</div>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="mt-7">
      <div className="text-center lg:text-left lg:ml-10 p-10 bg-red-200">
        <blockquote className="text-2xl font-bold italic text-slate-900">
          MY NEXT APP
        </blockquote>
      </div>
      <div className="w-full p-4 flex flex-col lg:flex-row lg:flex-wrap">
        <Item
          title="STOCK INFO"
          cont="Stock info"
          href="stock-info"
        />
         <Item
          title="RENT RATE"
          cont="Rent rate"
          href="rent-rate"
        />
      </div>
    </div>
  );
}
