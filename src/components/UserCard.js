import React from "react";
import { HiBuildingOffice } from "react-icons/hi2";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";

function UserCard({ user }) {
  return (
    <div>
      <div className="w-[90vw] lg:w-[400px] bg-cyan-700  shadow-lg rounded-lg overflow-hidden my-4">
        <img
          className="w-full h-56 object-cover object-center"
          src="https://www.kindpng.com/picc/m/247-2473419_computer-user-comments-computer-user-icon-hd-png.png"
          alt="avatar"
        />

        <div className="py-4 px-6 ">
          <h1 className="text-2xl font-semibold text-zinc-100">{user.name}</h1>
          <p className="py-1 text-md text-zinc-300">{user.username}</p>

          <div className="flex justify-between items-start text-zinc-200">
            <div>
              <div className="flex items-center mt-4  ">
                <HiBuildingOffice />
                <h1 className="px-2 text-sm">{user.company.name}</h1>
              </div>
              <div className="flex items-center mt-4  ">
                <IoLocation />
                <h1 className="px-2 text-sm">{user.address.city}</h1>
              </div>
              <div className="flex items-center mt-4  ">
                <MdEmail />
                <h1 className="px-2 text-sm">{user.email}</h1>
              </div>
            </div>

            <div>
              <div className="flex items-center mt-4  ">
                <TbWorldWww />
                <h1 className="px-2 text-sm">{user.website}</h1>
              </div>
              <div className="flex items-center mt-4  ">
                <FaPhoneAlt />
                <h1 className="px-2 text-sm">{user.phone}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
