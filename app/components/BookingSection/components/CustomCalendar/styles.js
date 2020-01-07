import styled, { css } from 'styled-components';
import { device } from 'device';

export const Info = styled.div`
  background-color: ${p => p.theme.bg.dark};
  color: #fff;
  padding: 10px 40px;
  margin-left: -30px;
  font-size: 16px;

  align-items: center;
  span {
    display: inline-block;
    margin-right: 10px;
  }
  strong {
    font-size: 30px;
  }
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.laptop} {
    display: flex;
  }
`;

export const SelectedDay = styled.div`
  font-family: Sailec-Bold;
  font-size: 16px;
  text-transform: uppercase;
  margin-bottom: 12px;
`;

export const TimeSlots = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-right: -8px;
  li {
    margin-right: 8px;
    cursor: pointer;
    margin-bottom: 8px;
    padding: 8px;
    min-width: 75px;
    border: 1px solid ${p => p.theme.bg.dark};
  }
`;

export const Item = styled.li``;

export const Block = styled.div`
  .rc-calendar {
    margin-bottom: 30px;
    .rc-calendar-month-select,
    .rc-calendar-year-select {
      pointer-events: none;
    }
    .rc-calendar-date-panel {
      max-width: 350px;
      outline: none;
      padding-bottom: 8px;
      border-bottom: 1px solid #707070;
    }
    .rc-calendar-footer {
      display: none;
    }
    .rc-calendar-header {
      font-family: Sailec-Bold;
      text-align: center;
      font-size: 16px;
      padding: 8px 0;
      border-bottom: 1px solid #707070;
      margin-bottom: 8px;
      .rc-calendar-prev-month-btn {
        position: absolute;
        left: 5px;
      }
      .rc-calendar-prev-month-btn:after {
        content: '‹';
      }
      .rc-calendar-next-month-btn {
        position: absolute;
        right: 5px;
      }
      .rc-calendar-next-month-btn:after {
        content: '›';
      }
    }
    .rc-calendar-body {
      table {
        width: 100%;
        tr,
        th {
          text-align: center;
          font-family: Calluna-Sans;
          font-size: 14px;
          vertical-align: middle;
        }
      }
      .rc-calendar-cell {
        div {
          position: relative;
          &::before {
            content: '';
            display: block;
            top: 1px;
            left: 50%;
            transform: translate(-50%, 0);
            width: 21px;
            height: 21px;
            z-index: -1;
            position: absolute;
            border: 1px solid transparent;
            border-radius: 50%;
          }
        }
      }
      .rc-calendar-disabled-cell .rc-calendar-date {
        cursor: not-allowed;
        color: #bcbcbc;
        /* background: #f3f3f3; */
        border-radius: 0;
        width: auto;
      }
      .rc-calendar-today {
        &.rc-calendar-cell {
          div {
            &::before {
              border-color: ${p => p.theme.bg.dark};
            }
          }
        }
      }
      .rc-calendar-selected-day {
        &.rc-calendar-cell {
          div {
            color: #fff;
            &::before {
              background-color: ${p => p.theme.bg.dark};
            }
          }
        }
      }
    }
  }
  @media ${device.mobileS} {
    padding: 30px 0;
  }
`;

export const Title = styled.div`
  font-family: Calluna-Sans;
  font-weight: 700;
  @media ${device.mobileS} {
    font-size: 16px;
    margin-bottom: 25px;
  }
  @media ${device.laptop} {
    display: none;
  }
`;

export const TableWrap = styled.div`
  table tr,
  table td {
    padding: 5px !important;
  }
  @media ${device.mobileS} {
    height: 420px;
    max-width: 100%;
    overflow-x: auto;
    table {
      max-width: 100%;
      width: 100%;
      min-width: 700px;
    }
  }
  @media ${device.laptop} {
    height: 420px;
    table {
      min-width: auto;
    }
  }
`;

// current week
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .icon {
    font-size: xx-large;
    float: left;
  }
  @media ${device.mobileS} {
    padding: 0 0 20px;
    border-bottom: 1px solid black;
    margin-bottom: 10px;
  }
`;

export const Week = styled.div`
  text-transform: uppercase;
  display: flex;
  align-items: center;
  line-height: 1em;
  cursor: pointer;
  &[disabled] {
    opacity: 0.5;
    pointer-events: none;
    cursor: not-allowed;
  }
  ${p =>
    p.next &&
    css`
      text-align: right;
    `}

  @media ${device.mobileS} {
    span {
      padding: 0 10px;
      font-size: 12px;
      display: inline-block;
      margin-bottom: -3px;
      color: #3e3e3e;
    }
  }
  @media ${device.laptop} {
    span {
      padding: 0 20px;
      font-size: 14px;
      margin-bottom: -3px;
    }
  }
`;

export const CurrentDay = styled.div`
  font-family: Sailec-Bold;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 1em;
  margin-bottom: -3px;
  @media ${device.mobileS} {
    font-size: 14px;
    text-align: center;
  }
  @media ${device.laptop} {
    font-size: 20px;
  }
`;

// TableHead
export const Day = styled.th`
  font-family: Calluna-Sans;
  text-transform: uppercase;
  font-size: 14px;
  text-align: center;
  white-space: nowrap;
`;

// TableBody
export const Button = styled.button`
  background-color: white;
  color: #707070;
  border: 1px solid;
  padding: 5px;
  font-weight: bold;
  width: 100%;
  white-space: nowrap;  
  &[disabled] {
    opacity: 0.5;
    pointer-events: none;
    cursor: not-allowed;
  }
  @media ${device.mobileS} {
    font-size: 14px;
  }
  @media ${device.laptop} {
    font-size: 15px;
  }
`;

export const Td = styled.td``;
