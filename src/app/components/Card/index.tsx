import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  rating: number;
  price: number;
  count: number;
  category: string;
  image: string;
  id: number;
}
const Card = ({
  title,
  rating,
  count,
  price,
  category,
  image,
  id,
}: CardProps) => {
  return (
    <Link
      href={`/products/${id}`}
      className="w-[13rem] m-[2px] hover:bg-white cursor-pointer"
    >
      <div className="w-[12rem] h-[12rem] relative rounded-lg">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          alt={title}
          className="absolute top-0 left-0 rounded-lg overflow-hidden"
        />
      </div>
      <div className=" w-[12rem] p-2">
        <p className="text-xs text-gray-600">{category}</p>
        <p className="text-xs truncate"> {title}</p>
        <p className="font-bold">&#8377; ${price}</p>
        <div className="flex text-xs justify-between">
          <p>Rating : ${rating}</p>
          <p>
            <span className="text-red-600">&#x2665;&#xfe0f;</span> ${count}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
