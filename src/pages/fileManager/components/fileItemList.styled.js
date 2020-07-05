import styled from 'styled-components';
import { Menu } from 'antd';

const textEllipsis = `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Wrapper = styled.div`
  padding: 6px 0;
`;

export const DropDownRow = styled.div`
  display: flex;
  margin-bottom: 6px;
`;

export const ContentCol = styled.div`
  width: 60%;
  min-width: 224px;
  display: flex;
`;

export const ContentDropdownAnchor = styled.div`
  width: 60%;
`;

export const OwnerCol = styled.div`
  width: 22%;
  min-width: 126px;

  ${textEllipsis}
`;

export const OwnerDropdownAnchor = styled.div`
  width: 22%;
  min-width: 126px;
`;

export const AccessCol = styled.div`
  min-width: 88px;

  ${textEllipsis}
`;

export const AccessDropdownAnchor = styled.div`
  min-width: 88px;
`;

export const DropDownAnchor = styled.div`
  margin-left: -24px;
  position: relative;

  .ant-dropdown {
    left: 0 !important;
    top: 0 !important;
  }
`;

export const DropDownHeader = styled.span`
  cursor: pointer;
  color: #999999;
  margin: 6px 0;

  span {
    margin-right: 8px;
  }
`;

export const DropDownHeaderCount = styled.span`
  background-color: #3c434d;
  color: #ffffff;
  border-radius: 9px;
  min-width: 26px;
  height: 18px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export const DropDownTitle = styled(Menu.Item)`
  display: flex;
  height: 32px;
  align-items: center;
  padding-left: 18px;
  font-weight: bold;
  cursor: default;
  padding-right: 0px;

  &:hover {
    background-color: #ffffff;
  }
`;

export const MenuWrapper = styled(Menu)`
  padding: 8px;
  width: 192px;
  border-radius: 4px;
`;

export const ContextMenuWrapper = styled(Menu)`
  padding: 8px 0;
  border-radius: 8px;
  width: 180px;
`;

export const MenuDivider = styled(Menu.Divider)`
  background-color: rgba(0, 0, 0, 0.1);
`;

export const MenuItem = styled(Menu.Item)`
  color: #999999;
  padding: 5px 8px;
  margin: 0 -8px;
  display: flex;
  align-items: center;
`;

export const ContextMenuItem = styled(Menu.Item)`
  padding: 0 16px;
  font-size: 13px;
`;

export const ContextMenuItemImg = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 6px;
`;

export const MenuDot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 6px;
  margin-right: 12px;
  background-color: ${(props) => props.color};
`;

export const ContentCount = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 4px;
  background-color: #ff333a;
  color: #ffffff;
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
`;

export const ListWrapper = styled.div`
  min-height: 88px;
  max-height: 400px;
  overflow: hidden;
  padding: 8px 24px;
  margin: 0 -24px;

  &:hover {
    box-shadow: inset 0 8px 9px -7px rgba(0, 0, 0, 0.1);
    overflow-y: overlay; /** TODO: not a good suolution */

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-thumb {
      background: #d7d7d7;
      border-radius: 4px;
      margin-right: 5px;
    }
  }
`;

export const FileListRowWrapper = styled.div`
  margin: 0 -24px;
  padding: 0 24px;
  color: ${(props) => props.selected && '#ffffff'};
  background-color: ${(props) => {
    if (props.selected) return '#3c434d !important';
    if (props.pressed) return '#f0f0f0 !important';
  }};

  &:hover {
    background-color: #fafafa;
  }

  &:active {
    background-color: #f0f0f0;
  }
`;

export const FileListRow = styled.div`
  height: 55px;
  padding: 4px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  cursor: pointer;
`;

export const FileContentWrapper = styled.div`
  display: inline-grid;
`;

export const FileName = styled.div`
  ${textEllipsis}
`;

export const FileImgWrapper = styled.div`
  padding: 8px 6px;
  margin-right: 8px;

  img {
    width: 36px;
    height: 36px;
  }
`;

export const FileDate = styled.div`
  color: ${(props) => (props.selected ? '#ffffff' : '#999999')};
`;
