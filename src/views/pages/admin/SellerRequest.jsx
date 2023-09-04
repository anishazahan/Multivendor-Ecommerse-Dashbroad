import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import Pagination from "../../Pagination";
// import Search from "../components/Search";
// import { get_seller_request } from "../../store/Reducers/sellerReducer";
const SellerRequest = () => {
  //   const dispatch = useDispatch();
  //   const { sellers, totalSeller } = useSelector((state) => state.seller);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [parPage, setParPage] = useState(5);
  const [show, setShow] = useState(false);

  //   useEffect(() => {
  //     dispatch(
  //       get_seller_request({
  //         parPage,
  //         searchValue,
  //         page: currentPage,
  //       })
  //     );
  //   }, [parPage, searchValue, currentPage]);
  const sellers = ["hellow", "hellow"];
  return (
    <div className="px-2 lg:px-5 pt-5">
      <div className="w-full px-4 pb-5   bg-white shadow rounded-md">
        {/* <Search
          setParPage={setParPage}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        /> */}
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-600">
            <thead className="text-xs text-gray-600 uppercase border-b border-slate-200">
              <tr>
                <th scope="col" className="py-3 px-4">
                  No
                </th>
                <th scope="col" className="py-3 px-4">
                  Name
                </th>
                <th scope="col" className="py-3 px-4">
                  Email
                </th>
                <th scope="col" className="py-3 px-4">
                  Payment Status
                </th>
                <th scope="col" className="py-3 px-4">
                  Status
                </th>
                <th scope="col" className="py-3 px-4">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-sm font-normal text-gray-500">
              {sellers.map((d, i) => (
                <tr className="border-b border-slate-200" key={i}>
                  <td
                    scope="row"
                    className="py-2 px-4 font-normal whitespace-nowrap"
                  >
                    {i + 1}
                  </td>
                  <td
                    scope="row"
                    className="py-2 px-4 font-normal whitespace-nowrap"
                  >
                    <span>{d.name}</span>
                  </td>
                  <td
                    scope="row"
                    className="py-2 px-4 font-normal whitespace-nowrap"
                  >
                    <span>{d.email}</span>
                  </td>
                  <td
                    scope="row"
                    className="py-2 px-4 font-normal whitespace-nowrap"
                  >
                    <span>{d.payment}</span>
                  </td>
                  <td
                    scope="row"
                    className="py-2 px-4 font-normal whitespace-nowrap"
                  >
                    <span>{d.status}</span>
                  </td>
                  <td
                    scope="row"
                    className="py-2 px-4 font-normal whitespace-nowrap"
                  >
                    <div className="flex justify-start items-center gap-4">
                      <Link
                        to={`/admin/dashboard/seller/details/${d._id}`}
                        className="p-[7px] bg-green-200 text-gray-700 rounded hover:shadow hover:shadow-green-500/50"
                      >
                        <FaEye />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* {totalSeller <= parPage ? (
          ""
        ) : ( */}
        <div className="w-full flex justify-end mt-4 bottom-4 right-4">
          <Pagination
            pageNumber={currentPage}
            setPageNumber={setCurrentPage}
            totalItem={50}
            parPage={parPage}
            showItem={4}
          />
        </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default SellerRequest;
