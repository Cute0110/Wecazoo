"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "./ui/button";
import { Icon } from "@iconify/react";
import { ChevronDown, ChevronDownIcon, CopyIcon } from "lucide-react";
import Image from "next/image";
import { FaArrowUp } from "react-icons/fa";
import { RiExchangeDollarLine } from "react-icons/ri";
import { BiMoneyWithdraw } from "react-icons/bi";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

const WalletScreen = () => {
  return (
    <div className="container flex flex-col py-8">
      <h1 className="text-2xl font-bold mb-4 px-3">Wallet</h1>
      <Tabs
        defaultValue="balance"
        className="min-w-fit flex flex-col items-start justify-start gap-2"
      >
        <TabsList className="flex-col md:flex-row gap-2.5 md:gap-4 md:mr-10 items-start">
          <TabsTrigger value="balance">
            <MdOutlineAccountBalanceWallet className="mr-2 text-lg md:text-xl" />
            <span className="text-sm md:text-base">Balance</span>
          </TabsTrigger>
          <TabsTrigger value="deposit">
            <FaArrowUp className="mr-2 text-lg md:text-xl" />
            <span className="text-sm md:text-base">Deposit</span>
          </TabsTrigger>
          <TabsTrigger value="withdraw">
            <BiMoneyWithdraw className="mr-2 text-lg md:text-xl" />
            <span className="text-sm md:text-base">Withdraw</span>
          </TabsTrigger>
          <TabsTrigger value="transaction">
            <RiExchangeDollarLine className="mr-2 text-lg md:text-xl" />
            <span className="text-sm md:text-base">Transaction</span>
          </TabsTrigger>
        </TabsList>
        {/* tab content */}
        <div className="w-full lg:max-w-4xl xl:max-w-6xl">
          <TabsContent value="balance">
            <div className="bg-[#130D25] flex flex-col p-5 md:p-6 gap-8">
              <div className="flex flex-col md:flex-row justify-center items-center md:justify-between gap-6 divide-y divide-gray-500/50 md:divide-none">
                <div className="flex divide-x divide-gray-500/25">
                  <div className="pr-4">
                    <span className="text-muted whitespace-nowrap text-sm">
                      Total Balance
                    </span>
                    <p className="text-sm md:text-base font-medium">$300.34</p>
                  </div>
                  <div className="px-4">
                    <span className="text-muted whitespace-nowrap text-sm">
                      Actual Balance
                    </span>
                    <p className="text-sm md:text-base font-medium">$200.34</p>
                  </div>
                  <div className="pl-4">
                    <span className="text-muted whitespace-nowrap text-sm">
                      Bonus Balance
                    </span>
                    <p className="text-sm md:text-base font-medium">$100.00</p>
                  </div>
                </div>
                <div className="flex gap-4 w-full justify-center pt-6 md:pt-0">
                  <Button>Deposit</Button>
                  <Button variant="outline">Withdraw</Button>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Cryptocurrency</h2>
                <div className="flex flex-col my-4 gap-3">
                  <div className="flex items-center justify-between bg-[#2A253A] rounded-[10px] px-4 py-5 md:py-4">
                    <div className="flex items-center justify-center gap-2.5">
                      <Icon fontSize={24} icon="cryptocurrency-color:usdt" />
                      <span className="text-sm md:text-base font-medium">
                        USDT
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                      <p className="font-semibold text-sm">$25.00</p>
                      <Button
                        size="fit"
                        variant="link"
                        className="text-sm md:text-base font-medium"
                      >
                        Deposit
                      </Button>
                      <Button
                        className="text-white text-sm md:text-base font-medium"
                        size="fit"
                        variant="link"
                      >
                        Withdraw
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-[#2A253A] rounded-[10px] px-4 py-5 md:py-4">
                    <div className="flex items-center justify-center gap-2.5">
                      <Icon fontSize={24} icon="cryptocurrency-color:btc" />
                      <span className="text-sm md:text-base font-medium">
                        BTC
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                      <p className="font-semibold text-sm">$25.00</p>
                      <Button
                        size="fit"
                        variant="link"
                        className="text-sm md:text-base font-medium"
                      >
                        Deposit
                      </Button>
                      <Button
                        className="text-white text-sm md:text-base font-medium"
                        size="fit"
                        variant="link"
                      >
                        Withdraw
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-[#2A253A] rounded-[10px] px-4 py-5 md:py-4">
                    <div className="flex items-center justify-center gap-2.5">
                      <Icon fontSize={24} icon="cryptocurrency-color:eth" />
                      <span className="text-sm md:text-base font-medium">
                        ETH
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                      <p className="font-semibold text-sm">$25.00</p>
                      <Button
                        size="fit"
                        variant="link"
                        className="text-sm md:text-base font-medium"
                      >
                        Deposit
                      </Button>
                      <Button
                        className="text-white text-sm md:text-base font-medium"
                        size="fit"
                        variant="link"
                      >
                        Withdraw
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-[#2A253A] rounded-[10px] px-4 py-5 md:py-4">
                    <div className="flex items-center justify-center gap-2.5">
                      <Icon fontSize={24} icon="cryptocurrency-color:bnb" />
                      <span className="text-sm md:text-base font-medium">
                        BNB
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                      <p className="font-semibold text-sm">$25.00</p>
                      <Button
                        size="fit"
                        variant="link"
                        className="text-sm md:text-base font-medium"
                      >
                        Deposit
                      </Button>
                      <Button
                        className="text-white text-sm md:text-base font-medium"
                        size="fit"
                        variant="link"
                      >
                        Withdraw
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-[#2A253A] rounded-[10px] px-4 py-5 md:py-4">
                    <div className="flex items-center justify-center gap-2.5">
                      <Icon fontSize={24} icon="cryptocurrency-color:ltc" />
                      <span className="text-sm md:text-base font-medium">
                        LTC
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                      <p className="font-semibold text-sm">$25.00</p>
                      <Button
                        size="fit"
                        variant="link"
                        className="text-sm md:text-base font-medium"
                      >
                        Deposit
                      </Button>
                      <Button
                        className="text-white text-sm md:text-base font-medium"
                        size="fit"
                        variant="link"
                      >
                        Withdraw
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-[#2A253A] rounded-[10px] px-4 py-5 md:py-4">
                    <div className="flex items-center justify-center gap-2.5">
                      <Icon fontSize={24} icon="cryptocurrency-color:sol" />
                      <span className="text-sm md:text-base font-medium">
                        SOL
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                      <p className="font-semibold text-sm">$25.00</p>
                      <Button
                        size="fit"
                        variant="link"
                        className="text-sm md:text-base font-medium"
                      >
                        Deposit
                      </Button>
                      <Button
                        className="text-white text-sm md:text-base font-medium"
                        size="fit"
                        variant="link"
                      >
                        Withdraw
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="deposit">
            <div className="bg-[#130D25] flex flex-col py-8 p-6 md:p-8 gap-6 md:gap-8 justify-center max-w-[90vw] lg:max-w-4xl">
              <ScrollArea className="w-full whitespace-nowrap bg-[#2a253a]/50 p-2">
                <div className="flex w-max space-x-4 p-3">
                  <div className="flex items-center justify-center px-3.5 py-2.5 gap-2 rounded-[10px] cursor-pointer border border-primary">
                    <Icon fontSize={24} icon="cryptocurrency-color:usdt" />
                    <span>USDT</span>
                  </div>
                  <div className="flex items-center justify-center px-3.5 py-2.5 gap-2 rounded-[10px] cursor-pointer">
                    <Icon fontSize={24} icon="cryptocurrency-color:btc" />
                    <span>BTC</span>
                  </div>
                  <div className="flex items-center justify-center px-3.5 py-2.5 gap-2 rounded-[10px] cursor-pointer">
                    <Icon fontSize={24} icon="cryptocurrency-color:eth" />
                    <span>ETH</span>
                  </div>
                  <div className="flex items-center justify-center px-3.5 py-2.5 gap-2 rounded-[10px] cursor-pointer">
                    <Icon fontSize={24} icon="cryptocurrency-color:bnb" />
                    <span>BNB</span>
                  </div>
                  <div className="flex items-center justify-center px-3.5 py-2.5 gap-2 rounded-[10px] cursor-pointer">
                    <Icon fontSize={24} icon="cryptocurrency-color:ltc" />
                    <span>LTC</span>
                  </div>
                  <div className="flex items-center justify-center px-3.5 py-2.5 gap-2 rounded-[10px] cursor-pointer">
                    <Icon fontSize={24} icon="cryptocurrency-color:sol" />
                    <span>SOL</span>
                  </div>
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>

              {/* currencu selector */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="w-full flex flex-col gap-1.5">
                  <label className="text-muted text-sm md:text-base">
                    Deposit Currency
                  </label>
                  <div className="flex items-center bg-[#2A253A] rounded-[10px] py-3 px-4">
                    <div className="flex items-center justify-center gap-2.5">
                      <Icon fontSize={24} icon="cryptocurrency-color:usdt" />
                      <span className="text-sm md:text-lg font-medium">
                        USDT
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-1.5">
                  <label className="text-muted text-sm md:text-base">
                    Choose Network
                  </label>
                  <div className="flex items-center justify-between bg-[#2A253A] rounded-[10px] py-3.5 px-4">
                    <span className="text-sm md:text-lg font-medium">
                      ERC20
                    </span>
                    <ChevronDown size={18} />
                  </div>
                </div>
              </div>

              {/* Wallet qr */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                  <Image
                    src="https://via.placeholder.com/600/e52f7f"
                    width={600}
                    height={600}
                    objectFit="cover"
                    alt="QR code placeholder"
                    className="w-[200px] h-[200px] lg:w-[240px] lg:h-[240px]"
                  />
                  <p className="max-w-md lg:max-w-xl text-muted text-center md:text-left text-sm md:text-lg font-normal md:font-medium">
                    Send only USDT to this deposit address. Coins will be
                    deposited automatically after 6 network confirmations. Smart
                    contract addresses are not supported (contact us).
                    <br />
                    Minimum Deposit: 0.000001 USDT.
                  </p>
                </div>
              </div>

              {/* address */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-3">
                <div className="flex flex-col gap-1.5 w-full">
                  <p className="text-sm font-medium text-primary">
                    Deposit Address
                  </p>
                  <div className="flex w-full relative">
                    <input
                      className="flex flex-1 items-center bg-[#2A253A] rounded-[10px] py-[15px] px-4 overflow-ellipsis text-muted text-sm font-medium font-mono"
                      value="0x2ADed31CF49543755116D6FE759e968881D03b"
                      readOnly
                    />
                    <CopyIcon
                      size={20}
                      className="absolute text-muted right-4 top-4 cursor-pointer hover:text-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="withdraw">
            <div className="bg-[#130D25] flex flex-col p-8 gap-6 justify-center w-full">
              <div className="w-full flex flex-col gap-1.5">
                <label className="text-muted font-medium text-sm md:text-base">
                  Withdraw Currency
                </label>
                <div className="flex items-center justify-between bg-[#2A253A] rounded-[10px] py-3.5 px-5 md:px-8">
                  <div className="flex items-center justify-center gap-3 md:gap-2">
                    <Icon fontSize={20} icon="cryptocurrency-color:usdt" />
                    <span className="text-sm md:text-lg">USDT</span>
                  </div>
                  <ChevronDownIcon size={20} />
                </div>
              </div>
              <div className="w-full flex flex-col gap-1.5">
                <label className="text-muted font-medium  text-sm md:text-base">
                  Choose Network
                </label>
                <div className="flex items-center justify-between bg-[#2A253A] rounded-[10px] py-3.5 px-5 md:px-8">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text=sm md:text-lg">ERC20</span>
                  </div>
                  <ChevronDownIcon size={20} />
                </div>
              </div>
              <div className="w-full flex flex-col gap-1.5">
                <label className="text-muted font-medium  text-sm md:text-base">
                  Withdrawal Address
                </label>
                <input className="flex items-center justify-between bg-[#2A253A] rounded-[10px] py-3.5 px-5 md:px-8 text-sm" />
              </div>
              <div className="w-full flex flex-col gap-1.5">
                <label className="text-muted font-medium  text-sm md:text-base flex items-center justify-between">
                  Withdrawal Amount{" "}
                  <p className="text-xs">
                    Minimum: <span className="font-mono">10.00 USDT</span>
                  </p>
                </label>
                <input className="flex items-center justify-between bg-[#2A253A] rounded-[10px] py-3.5 px-5 md:px-8 text-sm" />
                <p className="text-muted font-medium  text-xs md:text-sm flex items-center justify-between mt-1">
                  <p className="text-xs">
                    Available: <span className="font-mono">50.00 USDT</span>
                  </p>
                  <p>
                    Locked: <span className="font-mono">0.00 USDT</span>
                  </p>
                </p>
              </div>
              <div className="w-full flex flex-col gap-1.5 mt-4 text-muted">
                <div className="flex items-center justify-between">
                  <p className="text-primary text-sm">Withdrawal Amount:</p>
                  <span className="text-sm font-mono">00.00 USDT</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm">Fee:</p>
                  <span className="text-sm font-mono">00.00 USDT</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm md:text-base font-semibold">
                    Total Withdrawal Amount:
                  </p>
                  <span className="text-sm font-mono">00.00 USDT</span>
                </div>
              </div>
              <Button className="text-base md:text-lg font-semibold h-[54px]">
                Proceed
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="transaction">
            <div className="bg-[#130D25] flex flex-col px-4 py-8 md:p-8 gap-8 justify-center">
              <div className="flex gap-4 items-start w-fit">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between space-x-8 md:space-x-12 bg-[#2A253A] rounded-[10px] py-3 px-6 min-w-fit h-12 md:h-14 whitespace-nowrap">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-sm md:text-lg">Deposit</span>
                    </div>
                    <ChevronDownIcon size={20} />
                  </div>
                  <div className="flex items-center justify-between space-x-8 md:space-x-12 bg-[#2A253A] rounded-[10px] py-3 px-6 min-w-fit h-12 md:h-14 whitespace-nowrap">
                    <span className="text-sm md:text-lg">All Status</span>
                    <ChevronDownIcon size={20} />
                  </div>
                </div>
                <div className="flex gap-4 flex-col md:flex-row">
                  <div className="flex items-center justify-between space-x-8 md:space-x-12 bg-[#2A253A] rounded-[10px] py-3 px-6 min-w-fit h-12 md:h-14 whitespace-nowrap">
                    <span className="text-sm md:text-lg">All Assets</span>
                    <ChevronDownIcon size={20} />
                  </div>
                  <div className="flex items-center justify-between space-x-8 md:space-x-12 bg-[#2A253A] rounded-[10px] py-3 px-4 min-w-fit h-12 md:h-14 whitespace-nowrap">
                    <span className="text-sm md:text-lg">Past 60 days</span>
                    <ChevronDownIcon size={20} />
                  </div>
                </div>
              </div>
              <div className="rounded-[10px] overflow-clip w-[85vw] sm:w-[80vw] md:w-[70vw]">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#2a253a] px-6 py-3 text-sm md:text-base">
                      <th className=" font-medium w-1/4 whitespace-nowrap py-3">
                        Type
                      </th>
                      <th className="font-medium w-1/4 whitespace-nowrap py-3">
                        Merchant ID
                      </th>
                      <th className="font-medium w-1/4 whitespace-nowrap py-3">
                        Amount
                      </th>
                      <th className="font-medium w-1/4 whitespace-nowrap py-3">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm md:text-base bg-gray-800/30">
                    <tr className=" text-center">
                      <td className="px-2 py-4 w-1/4">Deposit</td>
                      <td className="px-2 py-4 w-1/4">123456</td>
                      <td className="px-2 py-4 w-1/4">$100.00</td>
                      <td className="px-2 py-4 w-1/4">Success</td>
                    </tr>
                    <tr className="text-center">
                      <td className="px-2 py-4 w-1/4">Withdrawal</td>
                      <td className="px-2 py-4 w-1/4">789012</td>
                      <td className="px-2 py-4 w-1/4">$50.00</td>
                      <td className="px-2 py-4 w-1/4">Pending</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default WalletScreen;
