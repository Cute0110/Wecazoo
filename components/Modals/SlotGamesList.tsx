import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Image from 'next/image';
import Loader from '../Loader';

const SlotGamesList = ({ isModalOpen, setIsModalOpen, slotGameData, isLoading, onSlotGameClick }: any) => {

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  console.log(slotGameData);

  return (
    <>
      <Modal title="Slot Games" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null} width="80vw">
        <div style={{ height: "65vh" }} className='overflow-y-auto'>
          {isLoading ? <Loader /> : 
          <div className='grid grid-cols-5 gap-4'>
            {slotGameData.map((item: any, index: any) =>
              <div className='relative aspect-[2/3] rounded-lg overflow-hidden group cursor-pointer w-full h-[300px]' key={index} onClick={() => onSlotGameClick(item)}>
                <Image
                  src={item.banner}
                  alt={item.game_name}
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 flex flex-col items-center justify-end p-4">
                  <div className="absolute bottom-0 left-0 w-full bg-white/85 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0 px-2 py-3.5 text-center">
                    <span className="text-sm font-bold text-background">
                      {item.game_name}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div> }
        </div>
      </Modal>
    </>
  );
};

export default SlotGamesList;