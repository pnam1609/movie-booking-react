import { Button } from 'antd';
import Modal from 'antd/lib/modal/Modal'
import React, { useState } from 'react'
import './IFrameModal.css'

function IFrameModal(props) {
  const { source, title } = props;
  const [isModalVisible, setisModalVisible] = useState(false);

  const showModal = () => {
    setisModalVisible(true);
    //handlePlayVideo();
  };

  const handleCancel = () => {
    setisModalVisible(false);
    handlePauseVideo();
  };

  const handlePauseVideo = () => {
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
      iframe.contentWindow.postMessage(JSON.stringify({
        event: 'command',
        func: 'stopVideo'
      }), '*');
    })
  }

  // const handlePlayVideo = (e) => {
  //   const iframe = document.getElementsByName('iframeyoutube');
  //   iframe.contentWindow.postMessage(JSON.stringify({
  //     event: 'command',
  //     func: 'playVideo'
  //   }), '*');
  // }

  return (
    <>
      {/* Thay đổi Button này thành thứ khác cho phù hợp */}
      <Button type="primary" onClick={showModal}>
        {title}
      </Button>
      <Modal
        title={''}
        visible={isModalVisible}
        onCancel={handleCancel}
        okButtonProps={{ disabled: true }}
        cancelButtonProps={{ disabled: true }}
        width={900}
        className="modalStyle"
      >
        <iframe
          width="100%"
          height="100%"
          src={`${source}?autoplay=1&enablejsapi=1`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          name="iframeyoutube"
          className="iframe_video"
        />
      </Modal>
    </ >
  )
}

export default IFrameModal;
