import styled from "@emotion/styled"

export const HomeContainer = styled.div`
  .scroll_section {
    position: relative;
    padding-top: 50vh;
  }
  #scroll_section_0 h1 {
    position: relative;
    top: -10vh;
    z-index: 5;
    font-size: 4rem;
    text-align: center;
  }
  .main_message {
    display: flex;
    align-items: center;
    justify-content: center;
    top: 35vh;
    height: 3em;
    margin: 3px 0;
    font-size: 2.5rem;
    opacity: 0;
  }
  .main_message p {
    font-weight: bold;
    text-align: center;
    line-height: 1.2;
  }
  .main_message small {
    display: block;
    margin-bottom: .5em;
    font-size: 1rem;
  }

  #scroll_section_2 .main_message {
    font-size: 3.5rem;
  }
  .sticky_elem {
    display: none;
    position: fixed;
    left: 0;
    width: 100%;
  }
  #show_scene_0 #scroll_section_0 .sticky_elem,
  #show_scene_1 #scroll_section_1 .sticky_elem,
  #show_scene_2 #scroll_section_2 .sticky_elem,
  #show_scene_3 #scroll_section_3 .sticky_elem {
    display: block;
  }
`