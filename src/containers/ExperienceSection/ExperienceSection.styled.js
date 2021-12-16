import Styled from 'styled-components'

export const BoxExperienceSection = Styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin-left: 10%;
  margin-top: 2.5%;
  gap: 5rem;

  div:first-child {
    width:100%;
  }

`

export const BoxUl = Styled.div`
  display: flex;
  gap: 10rem;

`

export const Container = Styled.ul`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 5rem;
width: 478px;
height: 100%;

li{
  display: flex;
  align-items: center;
  justify-content: center;

  span{
    background-color: #fff;
    width: 2px;
    height: 150px;
    max-height: 100%;
    margin-right: 3rem;
    position: relative;
    transition: height 2s ease-in-out;

    /* &:hover{
      height:200px;
      width: 2px;
    } */

    &:before{
      content: '';
      display: block;
      border: 1px solid #fff;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      position: absolute;
      top: -11px;
      left: -6px;
    }

    &:after{
      content: '';
      display: block;
      border: 1px solid #fff;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      position: absolute;
      bottom: -11px;
      left: -6px;
    }

    p:first-child{
      position: absolute;
      top: -15px;
      right: 13px;
    }

    p:last-child{
      position: absolute;
      bottom: -15px;
      right: 13px;
    }
  }

}

`

export const Box = Styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h4{
  font-size: 1.5rem;
  }

  h5{
  font-size: 0.875rem;
  }
`
