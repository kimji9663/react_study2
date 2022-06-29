
import React from 'react'
import { showScene0, showScene1, showScene2, showScene3, scrollSec0, scrollSec1, scrollSec2, scrollSec3, stickyElem, mainMessage } from './index.css';

function Home() {

    let yOffset = 0; //window.pageYOffset 대신 쓸 변수(현재 위치값)
    let prevScrollHeight = 0; // 현재 위치한 스크롤 위치값 이전의 섹션 높이값들의 합
    let currentScene = 0; // 현재 보이는 scene(scroll-section)
    let enterNewScene = false; // 새 scene에 진입하면 true가 됨

    (() => {
      const sceneInfo = [
        {
          // 0
          type: 'sticky',
          heightNum: 5, // 화면 높이 * heightNum
          scrollHeight: 0,
        },
        {
          // 1
          type: 'normal',
          heightNum: 5,
          scrollHeight: 0,
        },
        {
          // 2
          type: 'sticky',
          heightNum: 5,
          scrollHeight: 0,
        },
        {
          // 3
          type: 'normal',
          heightNum: 5,
          scrollHeight: 0,
        },
      ];

      function setLayout() {
        
      }
    });

  return (
    <>
      <section className={scrollSec0.root} id="scroll_section_0">
        <h1 className={scrollSec0.title}>AirMug Pro</h1>
        <div className={stickyElem}>
          움직이는 이미지
        </div>
        <div className={`${mainMessage.root} ${stickyElem}`}>
          <p className={mainMessage.text}>온전히 빠져들게 하는<br />최고급 세라믹</p>
        </div>
        <div className={`${mainMessage.root} ${stickyElem}`}>
          <p className={mainMessage.text}>주변 맛을 느끼게 해주는<br />주변 맛 허용 모드</p>
        </div>
        <div className={`${mainMessage.root} ${stickyElem}`}>
          <p className={mainMessage.text}>온종일 편안한<br />맞춤형 손잡이</p>
        </div>
        <div className={`${mainMessage.root} ${stickyElem}`}>
          <p className={mainMessage.text}>새롭게 입가를<br />찾아온 매혹</p>
        </div>
      </section>
      <section className={scrollSec1.root} id="scroll_section_1">
        <p className="description">
          <strong>보통 스크롤 영역</strong>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus exercitationem molestias voluptate repudiandae veniam aliquid rem nihil incidunt, sed esse cupiditate est, laborum officia voluptatum nemo. Amet quos aliquid dolor, perferendis dicta a, nostrum at numquam possimus minima repellendus pariatur veniam minus accusamus expedita distinctio sed dolore quibusdam? Facilis iure ratione sit voluptas laborum quisquam aliquam, quibusdam placeat accusantium dicta eos neque fuga pariatur blanditiis magnam dolore et expedita cumque. Quo error maiores excepturi perspiciatis, ullam dicta ad magni quia suscipit aliquam consequatur officia. Animi rerum tenetur ea aut ullam inventore, nisi deleniti! Modi laboriosam corrupti aperiam placeat veritatis totam animi vitae autem culpa expedita voluptate amet ad assumenda at enim harum nihil quasi nemo illo, repellat eveniet nam consectetur alias illum! Eius velit quod et possimus modi corporis cupiditate deleniti, consequatur sit, blanditiis officia minima dignissimos tempora hic necessitatibus inventore natus culpa laboriosam tenetur mollitia aliquid. Earum obcaecati a similique reiciendis dolore aliquid pariatur reprehenderit voluptates, qui nemo non eius, culpa libero tempore deleniti mollitia laboriosam consequuntur dolorem perspiciatis facere cum excepturi error praesentium illo? Itaque quo ea dignissimos molestias eius molestiae, tempore quod dolor, placeat corrupti magnam dolores saepe omnis praesentium dolore voluptate recusandae tempora aspernatur ut autem!
        </p>
      </section>
      <section className={scrollSec2.root} id="scroll_section_2">
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
      <section className={scrollSec3.root} id="scroll_section_3">
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
  );
}

export default Home