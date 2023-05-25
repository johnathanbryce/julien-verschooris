import styles from './VideoModal.module.css';
// External Libraries
import { AiOutlineClose } from 'react-icons/ai';

interface VideoModalProps {
    videoSrc: string,
    onClickCloseModal: () => void,
    
}

const VideoModal = ({ videoSrc, onClickCloseModal }: VideoModalProps) => {  
    return (
    <div className={styles.modal_container}>
        <div className={styles.modal_background} onClick={onClickCloseModal} />
            <div className={styles.video_container}>
                    <div className={styles.close_btn_container}>
                            <AiOutlineClose onClick={onClickCloseModal} className={styles.close_btn} />
                    </div>
                <video src={videoSrc} autoPlay className={styles.video} controls />
        </div>
    </div>
  )
}

export default VideoModal;