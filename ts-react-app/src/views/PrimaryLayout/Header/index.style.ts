import styled from '@emotion/styled'

export const HeaderContainer = styled.div`

  .global_nav {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 44px;
    padding: 0 1rem;
    background: #f5f5f5;
  }
  .local_nav {
    position: absolute;
    top: 45px;
    left: 0;
    z-index: 11;
    width: 100%;
    height: 52px;
    border-bottom: 1px solid #ddd;
  
  }
  .global_nav_links,
    .local_nav_links {
      display: flex;
      align-items: center;
      max-width: 1000px;
      height: 100%;
      margin: 0 auto;
    }
  }
  .global_nav_links {
    justify-content: space-between;
  }
  .local_nav_links a {
    font-size: .8rem;
  }
  .local_nav_links .product_name {
    margin-right: auto;
    font-size: 1.4rem;
    font-weight: bold;
  }
  .local_nav-links a:not(.product_name) {
    margin-left: 2em;
  }
`