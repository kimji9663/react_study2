
import React, { useState, useEffect } from 'react'
import { showScene0, showScene1, showScene2, showScene3, scrollSec0, scrollSec1, scrollSec2, scrollSec3, stickyElem, mainMessage } from './index.css'
import { debounce } from 'lodash'
import { style } from "@vanilla-extract/css"
import { sprinkles } from '@styles/sprinkles.css'

interface SceneInfo {
  id: number
  type: string
  heightNum: number
  scrollHeight: number
  objs: {
    container: Element | null
    messageA?: Element | null
    messageB?: Element | null
    messageC?: Element | null
    messageD?: Element | null
  }
  values?: {
    messageA_opacity: [number, number, { start: number, end: number }],
    messageB_opacity: [number, number, { start: number, end: number }],
  }
}

const sceneInfo: SceneInfo[] = [
  {
    id: 0,
    type: 'sticky',
    heightNum: 5, // 스크롤 높이 = 화면 높이 * heightNum
    scrollHeight: 0,
    objs: {
      container: document.querySelector('#scroll_section_0'),
      messageA: document.querySelector(`#scroll_section_0 ${mainMessage.root} .a`),
      messageB: document.querySelector(`#scroll_section_0 ${mainMessage.root} .b`),
      messageC: document.querySelector(`#scroll_section_0 ${mainMessage.root} .c`),
      messageD: document.querySelector(`#scroll_section_0 ${mainMessage.root} .d`),
    },
    values: {
      messageA_opacity: [0, 1, { start: 0.2, end: 0.2 }],
      messageB_opacity: [0, 1, { start: 0.3, end: 0.4 }],
    },
  },
  {
    id: 1,
    type: 'normal',
    heightNum: 1,
    scrollHeight: 0,
    objs: {
      container: document.querySelector('#scroll_section_1')
    }
  },
  {
    id: 2,
    type: 'sticky',
    heightNum: 5,
    scrollHeight: 0,
    objs: {
      container: document.querySelector('#scroll_section_2')
    }
  },
  {
    id: 3,
    type: 'normal',
    heightNum: 5,
    scrollHeight: 0,
    objs: {
      container: document.querySelector('#scroll_section_3')
    }
  },
]

function Home() {
  let yOffset = 0 //window.pageYOffset 대신 쓸 변수(현재 위치값)
  let prevScrollHeight = 0 // 현재 위치한 스크롤 위치값 이전의 섹션 높이값들의 합
  let currentScene = 0 // 현재 보이는 scene(scroll-section)
  let enterNewScene = false // 새 scene에 진입하면 true가 됨


  const [height, setHeight] = useState([
    sceneInfo[0].scrollHeight,
    sceneInfo[1].scrollHeight,
    sceneInfo[2].scrollHeight,
    sceneInfo[3].scrollHeight,
  ])
  const [opacity, setOpacity] = useState([
    sceneInfo[0].values?.messageA_opacity[0],
  ])

  function setLayout() {
    // 각 스크롤 섹션의 높이 세팅
    for (let i = 0; i < sceneInfo.length; i++) {
      sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight
      //sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px` //setHeight
    }

    let totalScrollHeight = 0
    for (let i = 0; i < sceneInfo.length; i++) {
      totalScrollHeight += sceneInfo[i].scrollHeight
      if (totalScrollHeight >= yOffset) {
        currentScene = i
        break
      }
    }
    document.body.setAttribute('id', `show_scene_${currentScene}`)
  }

  function calcValues(values, currentYOffset) {
    let rv;
    // 현재 씬에서 몇 %까지 내려왔는가
    const scrollHeight = sceneInfo[currentScene].scrollHeight
    const scrollRatio = currentYOffset / scrollHeight

    if (values.length === 3){
      // start ~ end 사이 애니메이션 실행
      const partScrollStart = values[2].start * scrollHeight
      const partScrollEnd = values[2].end * scrollHeight
      const partScrollHeight = partScrollEnd - partScrollStart

      if (currentYOffset >= partScrollStart && currentYOffset <= partScrollEnd){
        rv = (currentYOffset - partScrollStart) / partScrollHeight * (values[1] - values[0])
      } else if (currentYOffset < partScrollStart) {
        rv = values[0]
      } else if (currentYOffset > partScrollEnd) {
        rv = values[1]
      }
    } else {
      rv = scrollRatio * (values[1] - values[0]) + values[0]
    }

    return rv
  }

  function playAnimation() {
    const objs = sceneInfo[currentScene].objs
    const values = sceneInfo[currentScene].values
    const currentYOffset = yOffset - prevScrollHeight
    //console.log(calcValues(values?.messageA_opacity, currentYOffset))
    
    switch (currentScene) {
      case 0:
        //console.log('0 play')
        let messageA_opacity_in = calcValues(values?.messageA_opacity, currentYOffset)
        //objs.messageA.style.opacity = messageA_opacity_in
        setOpacity([
          messageA_opacity_in,
        ])
        console.log(messageA_opacity_in)
        break
      case 1:
        console.log('1 play')
        break
      case 2:
        console.log('2 play')
        break
      case 3:
        console.log('3 play')
        break
    }
  }

  function scrollLoop() {
    enterNewScene = false
    prevScrollHeight = 0
    for(let i = 0; i < currentScene; i++) {
      prevScrollHeight += sceneInfo[i].scrollHeight
    }

    if (yOffset > (prevScrollHeight + sceneInfo[currentScene].scrollHeight)) {
      enterNewScene = true
      currentScene++
      document.body.setAttribute('id', `show_scene_${currentScene}`)
    }

    if (yOffset < prevScrollHeight) {
      enterNewScene = true
      if (currentScene === 0) return
      currentScene--
      document.body.setAttribute('id', `show_scene_${currentScene}`)
    }

    if(enterNewScene) return;

    playAnimation()
    //console.log(currentScene)
  }

  const handleResize = debounce(() => {  // 일정 시간이 지나고 함수가 한번만 실행됨
    setLayout()
    setHeight([
      sceneInfo[0].scrollHeight,
      sceneInfo[1].scrollHeight,
      sceneInfo[2].scrollHeight,
      sceneInfo[3].scrollHeight
    ])
  }, 100)


  useEffect(() => {
    window.addEventListener('scroll', () => {
      yOffset = window.pageYOffset
      scrollLoop()
    })
  }, [])
  
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      // 기존 리스너 제거
      window.addEventListener('resize', handleResize)
    }
  }, []) // 빈 배열 전달하면 컴포넌트가 마운트, 언마운트 될 때만 실행

  //window.addEventListener('load', setLayout)
  setLayout()

  return (
    <>
      <section className={scrollSec0.root} id="scroll_section_0" style={{ height: height[0] }}>
        <h1 className={scrollSec0.title}>AirMug Pro</h1>
        <div className={stickyElem}>
          움직이는 이미지
        </div>
        <div className={`${mainMessage.root} ${stickyElem} a`} style={{ opacity: opacity[0] }}>
          <p className={mainMessage.text}>온전히 빠져들게 하는<br />최고급 세라믹</p>
        </div>
        <div className={`${mainMessage.root} ${stickyElem} b`} style={{display: 'none'}}>
          <p className={mainMessage.text}>주변 맛을 느끼게 해주는<br />주변 맛 허용 모드</p>
        </div>
        <div className={`${mainMessage.root} ${stickyElem} c`} style={{display: 'none'}}>
          <p className={mainMessage.text}>온종일 편안한<br />맞춤형 손잡이</p>
        </div>
        <div className={`${mainMessage.root} ${stickyElem} d`} style={{display: 'none'}}>
          <p className={mainMessage.text}>새롭게 입가를<br />찾아온 매혹</p>
        </div>
      </section>
      <section className={scrollSec1.root} id="scroll_section_1" style={{ height: height[1] }}>
        <p className="description">
          <strong>보통 스크롤 영역</strong>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus exercitationem molestias voluptate repudiandae veniam aliquid rem nihil incidunt, sed esse cupiditate est, laborum officia voluptatum nemo. Amet quos aliquid dolor, perferendis dicta a, nostrum at numquam possimus minima repellendus pariatur veniam minus accusamus expedita distinctio sed dolore quibusdam? Facilis iure ratione sit voluptas laborum quisquam aliquam, quibusdam placeat accusantium dicta eos neque fuga pariatur blanditiis magnam dolore et expedita cumque. Quo error maiores excepturi perspiciatis, ullam dicta ad magni quia suscipit aliquam consequatur officia. Animi rerum tenetur ea aut ullam inventore, nisi deleniti! Modi laboriosam corrupti aperiam placeat veritatis totam animi vitae autem culpa expedita voluptate amet ad assumenda at enim harum nihil quasi nemo illo, repellat eveniet nam consectetur alias illum! Eius velit quod et possimus modi corporis cupiditate deleniti, consequatur sit, blanditiis officia minima dignissimos tempora hic necessitatibus inventore natus culpa laboriosam tenetur mollitia aliquid. Earum obcaecati a similique reiciendis dolore aliquid pariatur reprehenderit voluptates, qui nemo non eius, culpa libero tempore deleniti mollitia laboriosam consequuntur dolorem perspiciatis facere cum excepturi error praesentium illo? Itaque quo ea dignissimos molestias eius molestiae, tempore quod dolor, placeat corrupti magnam dolores saepe omnis praesentium dolore voluptate recusandae tempora aspernatur ut autem!
        </p>
      </section>
      <section className={scrollSec2.root} id="scroll_section_2" style={{ height: height[2] }}>
        <div className={stickyElem}>
          움직이는 이미지
        </div>
        <div className={`${mainMessage.root} ${stickyElem}`}>
          <p className={mainMessage.text}>
            <small className={mainMessage.small}>편안한 촉감</small>
            <br />
            입과 하나 되다
          </p>
        </div>
        <div className={`${mainMessage.root} ${stickyElem}`}>
          <p className={mainMessage.text}>편안한 목넘김을 완성하는 디테일한 여러 구성 요소들, 우리는 이를 하나하나 새롭게 살피고 재구성하는 과정을 거쳐 새로운 수준의 머그, AirMug Pro를 만들었습니다. 입에 뭔가 댔다는 감각은 어느새 사라지고 오롯이 당신과 음료만 남게 되죠.</p>
          <div className="pin"></div>
        </div>
        <div className={`${mainMessage.root} ${stickyElem}`}>
          <p className={mainMessage.text}>디자인 앤 퀄리티 오브 스웨덴,<br />메이드 인 차이나</p>
          <div className="pin"></div>
        </div>
      </section>
      <section className={scrollSec3.root} id="scroll_section_3" style={{ height: height[3] }}>
        <p className="mid_message">
          <strong>Retina 머그</strong>
          맛의 향연을 광활하게 펼칠<br />
          아름답고 부드러운 음료 공간.
        </p>
        <p className="canvas_caption">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus exercitationem molestias voluptate repudiandae veniam aliquid rem nihil incidunt, sed esse cupiditate est, laborum officia voluptatum nemo. Amet quos aliquid dolor, perferendis dicta a, nostrum at numquam possimus minima repellendus pariatur veniam minus accusamus expedita distinctio sed dolore quibusdam? Facilis iure ratione sit voluptas laborum quisquam aliquam, quibusdam placeat accusantium dicta eos neque fuga pariatur blanditiis magnam dolore et expedita cumque. Quo error maiores excepturi perspiciatis, ullam dicta ad magni quia suscipit aliquam consequatur officia. Animi rerum tenetur ea aut ullam inventore, nisi deleniti! Modi laboriosam corrupti aperiam placeat veritatis totam animi vitae autem culpa expedita voluptate amet ad assumenda at enim harum nihil quasi nemo illo, repellat eveniet nam consectetur alias illum! Eius velit quod et possimus modi corporis cupiditate deleniti, consequatur sit, blanditiis officia minima dignissimos tempora hic necessitatibus inventore natus culpa laboriosam tenetur mollitia aliquid. Earum obcaecati a similique reiciendis dolore aliquid pariatur reprehenderit voluptates, qui nemo non eius, culpa libero tempore deleniti mollitia laboriosam consequuntur dolorem perspiciatis facere cum excepturi error praesentium illo? Itaque quo ea dignissimos molestias eius molestiae, tempore quod dolor, placeat corrupti magnam dolores saepe omnis praesentium dolore voluptate recusandae tempora aspernatur ut autem!
        </p>
      </section>
    </>
  )
}

export default Home

