import React, { forwardRef } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { FixedSizeList as List } from "react-window";
function handleOnWheel({ deltaY }) {
  console.log("handleOnWheel", deltaY);
}

const outerElementType = forwardRef((props, ref) => (
  <div ref={ref} onWheel={handleOnWheel} {...props} />
));

const Payments = () => {
  const Row = ({ index, style }) => {
    return (
      <div style={style} className="flex text-sm">
        <div className="w-[25%] p-2 whitespace-nowrap">{index + 1}</div>
        <div className="w-[25%] p-2 whitespace-nowrap">$454</div>
        <div className="w-[25%] p-2 whitespace-nowrap">
          <span className="py-[1px] px-[5px] bg-slate-200 text-blue-500 rounded-md text-xs">
            pending
          </span>
        </div>
        <div className="w-[25%] p-2 whitespace-nowrap">12 jun 2023</div>
      </div>
    );
  };
  return (
    <div className="px-2 md:px-5 py-1">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
        <div className="flex justify-between items-center p-5 bg-white shadow rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-gray-600">
            <h2 className="text-lg font-bold">$6566</h2>
            <span className="text-sm font-normal text-gray-500">
              Total Sales
            </span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full bg-[#28c76f1f] flex justify-center items-center text-xl">
            <BsCurrencyDollar className="text-[#28c76f] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-white shadow rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-gray-600">
            <h2 className="text-lg font-bold">$2000</h2>
            <span className="text-sm font-normal text-gray-500">
              Avaiable Amount
            </span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full bg-[#e000e81f] flex justify-center items-center text-xl">
            <BsCurrencyDollar className="text-[#cd00e8] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-white shadow rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-gray-600">
            <h2 className="text-lg font-bold">$500</h2>
            <span className="text-sm font-normal text-gray-500">
              Withdrawal Amount
            </span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full bg-[#00cfe81f] flex justify-center items-center text-xl">
            <BsCurrencyDollar className="text-[#00cfe8] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-white shadow rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-gray-600">
            <h2 className="text-lg font-bold">$200</h2>
            <span className="text-sm font-normal text-gray-500">
              Pending amount
            </span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full bg-[#7367f01f] flex justify-center items-center text-xl">
            <BsCurrencyDollar className="text-[#7367f0] shadow-lg" />
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 pb-4">
        <div className="bg-white shadow text-gray-600 rounded-md p-5">
          <h2 className="text-lg">Send Request</h2>
          <div className="py-5">
            <form>
              <div className="flex gap-3 flex-wrap">
                <input
                  min="0"
                  type="number"
                  className="px-3 md:w-[79%] py-2 focus:border-gray-400 outline-none bg-gray-50 border border-slate-300 rounded text-gray-500"
                  name="amount"
                />
                <button className="bg-primary hover:shadow-indigo-500/50 hover:shadow-lg text-white rounded-sm px-4 py-2 text-sm ">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div>
            <h2 className="text-lg pb-4">Pening request</h2>
            <div className="w-full overflow-x-auto">
              <div className="flex bg-gray-100 py-1 font-medium shadow uppercase text-xs min-w-[340px]">
                <div className="w-[25%] p-2">No</div>
                <div className="w-[25%] p-2">Amount</div>
                <div className="w-[25%] p-2">status</div>
                <div className="w-[25%] p-2">date</div>
              </div>
              {
                <List
                  style={{ minWidth: "340px", overflowX: "hidden" }}
                  className="List"
                  height={350}
                  itemCount={100}
                  itemSize={35}
                  outerElementType={outerElementType}
                >
                  {Row}
                </List>
              }
            </div>
          </div>
        </div>
        <div className="bg-white shadow  text-gray-600 rounded-md p-5">
          <div>
            <h2 className="text-lg pb-4">Success Withdrawal</h2>
            <div className="w-full overflow-x-auto">
              <div className="flex bg-gray-100 py-1 uppercase text-xs min-w-[340px]">
                <div className="w-[25%] p-2">No</div>
                <div className="w-[25%] p-2">Amount</div>
                <div className="w-[25%] p-2">status</div>
                <div className="w-[25%] p-2">date</div>
              </div>
              {
                <List
                  style={{ minWidth: "340px", overflowX: "hidden" }}
                  className="List"
                  height={350}
                  itemCount={100}
                  itemSize={35}
                  outerElementType={outerElementType}
                >
                  {Row}
                </List>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
