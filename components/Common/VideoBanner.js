import MyTitle from '@/Common/MyTitle'
import s from './VideoBanner.module.css'

export default function VideoBanner() {
  const mockVideoData = {
    img: 'https://res.cloudinary.com/glamira/video/upload/so_2/v1629098510/media/wysiwyg/new_landing_page/this_is_so_you_de.jpg',
    video:
      'https://res.cloudinary.com/glamira/video/upload/v1636690925/media/wysiwyg/new_landing_page/211104_Glamira_ThisIsYou_Longversion_ONLINE_v08-A_EN_THI_wo_searchbar.mp4',
  }
  const { img, video } = mockVideoData
  return (
    <div className={s.video_wrap}>
      <MyTitle title="THIS IS SO YOU" />
      <div className={s.video}>
        <video
          style={{ width: '100%', height: 'auto' }}
          playsInline="playsInline"
          controls="controls"
          preload="none"
          poster={img}
          src={video}>
          <track default kind="captions" srcLang="en" src="" />
        </video>
      </div>
    </div>
  )
}
